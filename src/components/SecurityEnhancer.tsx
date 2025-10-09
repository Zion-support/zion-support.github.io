'use client';
import React, { useEffect } from 'react';

interface SecurityEnhancerProps {
  enableCSP?: boolean;
  enableHSTS?: boolean;
  enableXSSProtection?: boolean;
  enableClickjackingProtection?: boolean;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({
  enableCSP = true,
  enableHSTS = true,
  enableXSSProtection = true,
  enableClickjackingProtection = true
}) => {
  useEffect(() => {
    // Content Security Policy
    if (enableCSP) {
      const cspMeta = document.createElement('meta');
      cspMeta.httpEquiv = 'Content-Security-Policy';
      cspMeta.content = [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: https: blob:",
        "connect-src 'self' https://www.google-analytics.com https://analytics.google.com",
        "frame-src 'none'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "frame-ancestors 'none'"
      ].join('; ');
      document.head.appendChild(cspMeta);
    }

    // XSS Protection
    if (enableXSSProtection) {
      const xssMeta = document.createElement('meta');
      xssMeta.httpEquiv = 'X-XSS-Protection';
      xssMeta.content = '1; mode=block';
      document.head.appendChild(xssMeta);
    }

    // Clickjacking Protection
    if (enableClickjackingProtection) {
      const frameOptionsMeta = document.createElement('meta');
      frameOptionsMeta.httpEquiv = 'X-Frame-Options';
      frameOptionsMeta.content = 'DENY';
      document.head.appendChild(frameOptionsMeta);
    }

    // Additional security headers
    const securityHeaders = [
      { name: 'X-Content-Type-Options', value: 'nosniff' },
      { name: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { name: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
    ];

    securityHeaders.forEach(header => {
      const meta = document.createElement('meta');
      meta.httpEquiv = header.name;
      meta.content = header.value;
      document.head.appendChild(meta);
    });

    // Secure cookie handling
    const secureCookies = () => {
      // Override document.cookie to ensure secure cookies
      const originalCookie = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie') || Object.getOwnPropertyDescriptor(HTMLDocument.prototype, 'cookie');
      
      if (originalCookie) {
        Object.defineProperty(document, 'cookie', {
          get: originalCookie.get,
          set: function(value) {
            // Add secure flag for HTTPS
            if (location.protocol === 'https:' && !value.includes('Secure')) {
              value += '; Secure';
            }
            // Add SameSite attribute
            if (!value.includes('SameSite')) {
              value += '; SameSite=Strict';
            }
            return originalCookie.set!.call(this, value);
          }
        });
      }
    };

    secureCookies();

    // Input sanitization
    const sanitizeInput = (input: string): string => {
      return input
        .replace(/[<>]/g, '') // Remove potential HTML tags
        .replace(/javascript:/gi, '') // Remove javascript: protocol
        .replace(/on\w+=/gi, '') // Remove event handlers
        .trim();
    };

    // Override innerHTML to sanitize content
    const originalInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML') || Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'innerHTML');
    
    if (originalInnerHTML) {
      Object.defineProperty(Element.prototype, 'innerHTML', {
        get: originalInnerHTML.get,
        set: function(value) {
          const sanitizedValue = sanitizeInput(value);
          return originalInnerHTML.set!.call(this, sanitizedValue);
        }
      });
    }

    // Monitor for suspicious activity
    const securityMonitor = () => {
      // Monitor for XSS attempts
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList') {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === Node.ELEMENT_NODE) {
                const element = node as Element;
                const scripts = element.querySelectorAll('script');
                scripts.forEach((script) => {
                  if (script.src && !script.src.startsWith(window.location.origin)) {
                    console.warn('Suspicious script detected:', script.src);
                    script.remove();
                  }
                });
              }
            });
          }
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      return () => observer.disconnect();
    };

    const cleanup = securityMonitor();

    return () => {
      cleanup();
    };
  }, [enableCSP, enableHSTS, enableXSSProtection, enableClickjackingProtection]);

  return null;
};

export default SecurityEnhancer;
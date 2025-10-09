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
  enableClickjackingProtection = true,
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Content Security Policy
    if (enableCSP) {
      const cspMeta = document.createElement('meta');
      cspMeta.httpEquiv = 'Content-Security-Policy';
      cspMeta.content = [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://cdn.gpteng.co",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "img-src 'self' data: https: blob:",
        "font-src 'self' https://fonts.gstatic.com",
        "connect-src 'self' https: wss:",
        "frame-ancestors 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "object-src 'none'",
        "media-src 'self'",
        "worker-src 'self' blob:",
        "child-src 'self' blob:",
        "frame-src 'none'",
        "manifest-src 'self'",
        "upgrade-insecure-requests",
        "block-all-mixed-content"
      ].join('; ');
      document.head.appendChild(cspMeta);
    }

    // XSS Protection
    if (enableXSSProtection) {
      const xssMeta = document.createElement('meta');
      xssMeta.httpEquiv = 'X-XSS-Protection';
      xssMeta.content = '1; mode=block';
      document.head.appendChild(xssMeta);

      // Additional XSS protection
      const sanitizeInput = (input: string): string => {
        return input
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#x27;')
          .replace(/\//g, '&#x2F;');
      };

      // Sanitize user inputs
      const inputs = document.querySelectorAll('input, textarea');
      inputs.forEach((input) => {
        input.addEventListener('input', (e) => {
          const target = e.target as HTMLInputElement;
          if (target.value !== sanitizeInput(target.value)) {
            console.warn('Potentially malicious input detected and sanitized');
            target.value = sanitizeInput(target.value);
          }
        });
      });
    }

    // Clickjacking Protection
    if (enableClickjackingProtection) {
      const frameOptionsMeta = document.createElement('meta');
      frameOptionsMeta.httpEquiv = 'X-Frame-Options';
      frameOptionsMeta.content = 'DENY';
      document.head.appendChild(frameOptionsMeta);

      // Additional clickjacking protection
      if (window.top !== window.self) {
        window.top!.location = window.self.location;
      }
    }

    // HSTS (HTTP Strict Transport Security)
    if (enableHSTS) {
      const hstsMeta = document.createElement('meta');
      hstsMeta.httpEquiv = 'Strict-Transport-Security';
      hstsMeta.content = 'max-age=31536000; includeSubDomains; preload';
      document.head.appendChild(hstsMeta);
    }

    // Additional security headers
    const securityHeaders = [
      { name: 'X-Content-Type-Options', content: 'nosniff' },
      { name: 'Referrer-Policy', content: 'strict-origin-when-cross-origin' },
      { name: 'Permissions-Policy', content: 'camera=(), microphone=(), geolocation=()' },
      { name: 'X-DNS-Prefetch-Control', content: 'on' },
      { name: 'X-Download-Options', content: 'noopen' },
      { name: 'X-Permitted-Cross-Domain-Policies', content: 'none' }
    ];

    securityHeaders.forEach((header) => {
      const meta = document.createElement('meta');
      meta.httpEquiv = header.name;
      meta.content = header.content;
      document.head.appendChild(meta);
    });

    // Secure cookie handling
    const secureCookies = () => {
      document.cookie = document.cookie
        .split(';')
        .map(cookie => cookie.trim())
        .map(cookie => {
          if (!cookie.includes('Secure') && !cookie.includes('HttpOnly')) {
            return cookie + '; Secure; HttpOnly; SameSite=Strict';
          }
          return cookie;
        })
        .join(';');
    };

    // Apply secure cookies
    secureCookies();

    // Monitor for suspicious activities
    const securityMonitor = () => {
      // Check for suspicious scripts
      const scripts = document.querySelectorAll('script');
      scripts.forEach((script) => {
        if (script.src && !script.src.startsWith(window.location.origin) && 
            !script.src.includes('googletagmanager.com') && 
            !script.src.includes('fonts.googleapis.com')) {
          console.warn('Suspicious script detected:', script.src);
        }
      });

      // Check for suspicious iframes
      const iframes = document.querySelectorAll('iframe');
      iframes.forEach((iframe) => {
        if (iframe.src && !iframe.src.startsWith(window.location.origin)) {
          console.warn('Suspicious iframe detected:', iframe.src);
        }
      });
    };

    // Run security monitor periodically
    const securityInterval = setInterval(securityMonitor, 30000); // Every 30 seconds

    // Cleanup
    return () => {
      clearInterval(securityInterval);
    };
  }, [enableCSP, enableHSTS, enableXSSProtection, enableClickjackingProtection]);

  return null;
};

export default SecurityEnhancer;
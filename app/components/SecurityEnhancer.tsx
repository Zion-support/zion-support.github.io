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
    if (typeof window === 'undefined') return;

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
      const cookies = document.cookie.split(';');
      cookies.forEach(cookie => {
        const [name, value] = cookie.trim().split('=');
        if (name && value) {
          // Set secure and httpOnly flags for sensitive cookies
          if (name.includes('session') || name.includes('auth') || name.includes('token')) {
            document.cookie = `${name}=${value}; Secure; HttpOnly; SameSite=Strict`;
          }
        }
      });
    };

    secureCookies();

    // Input sanitization
    const sanitizeInput = (input: string): string => {
      return input
        .replace(/[<>]/g, '') // Remove < and >
        .replace(/javascript:/gi, '') // Remove javascript: protocol
        .replace(/on\w+=/gi, '') // Remove event handlers
        .trim();
    };

    // Apply sanitization to all input fields
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('input', (e) => {
        const target = e.target as HTMLInputElement;
        target.value = sanitizeInput(target.value);
      });
    });

    // Prevent right-click context menu on sensitive elements
    const sensitiveElements = document.querySelectorAll('[data-sensitive]');
    sensitiveElements.forEach(element => {
      element.addEventListener('contextmenu', (e) => {
        e.preventDefault();
      });
    });

    // Disable text selection on sensitive elements
    sensitiveElements.forEach(element => {
      element.style.userSelect = 'none';
      element.style.webkitUserSelect = 'none';
    });

    // Monitor for suspicious activity
    let suspiciousActivity = 0;
    const monitorActivity = () => {
      // Monitor rapid clicks (potential bot activity)
      let clickCount = 0;
      const clickTimer = setInterval(() => {
        if (clickCount > 10) {
          suspiciousActivity++;
          console.warn('Suspicious activity detected: Rapid clicking');
        }
        clickCount = 0;
      }, 1000);

      document.addEventListener('click', () => {
        clickCount++;
      });

      // Monitor for console access attempts
      const originalConsole = console.log;
      console.log = (...args) => {
        suspiciousActivity++;
        console.warn('Console access detected');
        return originalConsole.apply(console, args);
      };

      return () => {
        clearInterval(clickTimer);
        console.log = originalConsole;
      };
    };

    const cleanup = monitorActivity();

    return () => {
      cleanup();
    };
  }, [enableCSP, enableHSTS, enableXSSProtection, enableClickjackingProtection]);

  return null;
};

export default SecurityEnhancer;
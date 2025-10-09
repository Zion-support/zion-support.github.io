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
    if (typeof window !== 'undefined') {
      // Content Security Policy
      if (enableCSP) {
        const cspMeta = document.createElement('meta');
        cspMeta.httpEquiv = 'Content-Security-Policy';
        cspMeta.content = `
          default-src 'self';
          script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com;
          style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
          font-src 'self' https://fonts.gstatic.com;
          img-src 'self' data: https:;
          connect-src 'self' https://www.google-analytics.com;
          frame-src 'none';
          object-src 'none';
          base-uri 'self';
          form-action 'self';
        `.replace(/\s+/g, ' ').trim();
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
            // Set secure flags for sensitive cookies
            if (name.includes('session') || name.includes('auth') || name.includes('token')) {
              document.cookie = `${name}=${value}; Secure; HttpOnly; SameSite=Strict`;
            }
          }
        });
      };

      // Input sanitization
      const sanitizeInput = (input: string): string => {
        return input
          .replace(/[<>]/g, '') // Remove potential HTML tags
          .replace(/javascript:/gi, '') // Remove javascript: protocol
          .replace(/on\w+=/gi, '') // Remove event handlers
          .trim();
      };

      // Apply sanitization to form inputs
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        form.addEventListener('submit', (e) => {
          const inputs = form.querySelectorAll('input, textarea, select');
          inputs.forEach(input => {
            if (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement) {
              input.value = sanitizeInput(input.value);
            }
          });
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
      const noSelectElements = document.querySelectorAll('[data-no-select]');
      noSelectElements.forEach(element => {
        element.style.userSelect = 'none';
        element.style.webkitUserSelect = 'none';
        element.style.mozUserSelect = 'none';
        element.style.msUserSelect = 'none';
      });

      // Monitor for suspicious activity
      let suspiciousActivity = 0;
      const monitorActivity = () => {
        // Track rapid clicks
        let clickCount = 0;
        const clickTimer = setInterval(() => {
          clickCount = 0;
        }, 1000);

        document.addEventListener('click', () => {
          clickCount++;
          if (clickCount > 10) {
            suspiciousActivity++;
            console.warn('Suspicious activity detected: Rapid clicking');
          }
        });

        // Track rapid form submissions
        let formSubmitCount = 0;
        const formSubmitTimer = setInterval(() => {
          formSubmitCount = 0;
        }, 5000);

        document.addEventListener('submit', () => {
          formSubmitCount++;
          if (formSubmitCount > 3) {
            suspiciousActivity++;
            console.warn('Suspicious activity detected: Rapid form submissions');
          }
        });

        return () => {
          clearInterval(clickTimer);
          clearInterval(formSubmitTimer);
        };
      };

      const cleanup = monitorActivity();

      // Cleanup function
      return () => {
        if (cleanup) cleanup();
      };
    }
  }, [enableCSP, enableHSTS, enableXSSProtection, enableClickjackingProtection]);

  return null;
};

export default SecurityEnhancer;
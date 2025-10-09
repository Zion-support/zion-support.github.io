import React, { useEffect } from 'react';

const SecurityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add Content Security Policy
    const addCSP = () => {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Content-Security-Policy';
      meta.content = `
        default-src 'self';
        script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://cdn.gpteng.co;
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
        img-src 'self' data: https:;
        font-src 'self' https://fonts.gstatic.com;
        connect-src 'self' https:;
        frame-ancestors 'none';
        base-uri 'self';
        form-action 'self';
        upgrade-insecure-requests;
      `.replace(/\s+/g, ' ').trim();
      document.head.appendChild(meta);
    };

    // Add security headers
    const addSecurityHeaders = () => {
      // X-Frame-Options
      const frameOptions = document.createElement('meta');
      frameOptions.httpEquiv = 'X-Frame-Options';
      frameOptions.content = 'DENY';
      document.head.appendChild(frameOptions);

      // X-Content-Type-Options
      const contentTypeOptions = document.createElement('meta');
      contentTypeOptions.httpEquiv = 'X-Content-Type-Options';
      contentTypeOptions.content = 'nosniff';
      document.head.appendChild(contentTypeOptions);

      // X-XSS-Protection
      const xssProtection = document.createElement('meta');
      xssProtection.httpEquiv = 'X-XSS-Protection';
      xssProtection.content = '1; mode=block';
      document.head.appendChild(xssProtection);

      // Referrer-Policy
      const referrerPolicy = document.createElement('meta');
      referrerPolicy.name = 'referrer-policy';
      referrerPolicy.content = 'strict-origin-when-cross-origin';
      document.head.appendChild(referrerPolicy);

      // Permissions-Policy
      const permissionsPolicy = document.createElement('meta');
      permissionsPolicy.httpEquiv = 'Permissions-Policy';
      permissionsPolicy.content = 'camera=(), microphone=(), geolocation=()';
      document.head.appendChild(permissionsPolicy);
    };

    // Sanitize user input
    const sanitizeInput = (input: string): string => {
      const div = document.createElement('div');
      div.textContent = input;
      return div.innerHTML;
    };

    // Add input sanitization to forms
    const addInputSanitization = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach((form) => {
        form.addEventListener('submit', (event) => {
          const inputs = form.querySelectorAll('input, textarea, select');
          inputs.forEach((input) => {
            if (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement) {
              input.value = sanitizeInput(input.value);
            }
          });
        });
      });
    };

    // Add rate limiting for form submissions
    const addRateLimiting = () => {
      const formSubmissions = new Map<string, number>();
      const RATE_LIMIT_WINDOW = 60000; // 1 minute
      const MAX_SUBMISSIONS = 5; // 5 submissions per minute

      document.addEventListener('submit', (event) => {
        const form = event.target as HTMLFormElement;
        const formId = form.id || form.className || 'default';
        const now = Date.now();
        
        // Clean old entries
        for (const [key, timestamp] of formSubmissions.entries()) {
          if (now - timestamp > RATE_LIMIT_WINDOW) {
            formSubmissions.delete(key);
          }
        }

        // Check rate limit
        const submissions = Array.from(formSubmissions.values())
          .filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW).length;

        if (submissions >= MAX_SUBMISSIONS) {
          event.preventDefault();
          alert('Too many submissions. Please wait before submitting again.');
          return;
        }

        // Record submission
        formSubmissions.set(formId, now);
      });
    };

    // Add CSRF protection
    const addCSRFProtection = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach((form) => {
        if (!form.querySelector('input[name="_csrf"]')) {
          const csrfToken = document.createElement('input');
          csrfToken.type = 'hidden';
          csrfToken.name = '_csrf';
          csrfToken.value = generateCSRFToken();
          form.appendChild(csrfToken);
        }
      });
    };

    // Generate CSRF token
    const generateCSRFToken = (): string => {
      const array = new Uint8Array(32);
      crypto.getRandomValues(array);
      return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    };

    // Add clickjacking protection
    const addClickjackingProtection = () => {
      // Check if page is in iframe
      if (window !== window.top) {
        // Redirect to main page if in iframe
        window.top.location.href = window.location.href;
      }
    };

    // Add secure cookie handling
    const addSecureCookieHandling = () => {
      // Override document.cookie to ensure secure cookies
      const originalCookie = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie') || 
                           Object.getOwnPropertyDescriptor(HTMLDocument.prototype, 'cookie');
      
      if (originalCookie) {
        Object.defineProperty(document, 'cookie', {
          get: originalCookie.get,
          set: function(value: string) {
            // Ensure cookies are secure in production
            if (location.protocol === 'https:') {
              if (!value.includes('Secure')) {
                value += '; Secure';
              }
            }
            if (!value.includes('SameSite')) {
              value += '; SameSite=Strict';
            }
            originalCookie.set?.call(this, value);
          }
        });
      }
    };

    // Add security event logging
    const addSecurityLogging = () => {
      // Log security events
      const logSecurityEvent = (event: string, details: any) => {
        console.warn(`Security Event: ${event}`, details);
        
        // Send to security monitoring service if available
        if (window.gtag) {
          window.gtag('event', 'security_event', {
            event_category: 'Security',
            event_label: event,
            value: 1
          });
        }
      };

      // Monitor for suspicious activity
      let suspiciousActivity = 0;
      const SUSPICIOUS_THRESHOLD = 10;

      document.addEventListener('click', () => {
        suspiciousActivity++;
        if (suspiciousActivity > SUSPICIOUS_THRESHOLD) {
          logSecurityEvent('High Click Rate', { count: suspiciousActivity });
        }
      });

      // Monitor for form tampering
      document.addEventListener('input', (event) => {
        const target = event.target as HTMLInputElement;
        if (target.type === 'hidden' && target.name === '_csrf') {
          logSecurityEvent('CSRF Token Tampering', { 
            form: target.closest('form')?.id || 'unknown' 
          });
        }
      });
    };

    // Initialize security enhancements
    addCSP();
    addSecurityHeaders();
    addInputSanitization();
    addRateLimiting();
    addCSRFProtection();
    addClickjackingProtection();
    addSecureCookieHandling();
    addSecurityLogging();

    // Cleanup function
    return () => {
      // Cleanup any event listeners or observers
    };
  }, []);

  return null;
};

export default SecurityEnhancer;
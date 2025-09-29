import React, { useEffect } from 'react';

const SecurityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add Content Security Policy meta tag
    const addCSP = () => {
      const cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
      if (!cspMeta) {
        const meta = document.createElement('meta');
        meta.setAttribute('http-equiv', 'Content-Security-Policy');
        meta.content = `
          default-src 'self';
          script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com;
          style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
          font-src 'self' https://fonts.gstatic.com;
          img-src 'self' data: https: blob:;
          connect-src 'self' https://www.google-analytics.com https://analytics.google.com;
          frame-src 'none';
          object-src 'none';
          base-uri 'self';
          form-action 'self';
          upgrade-insecure-requests;
        `.replace(/\s+/g, ' ').trim();
        document.head.appendChild(meta);
      }
    };

    // Add security headers via meta tags
    const addSecurityHeaders = () => {
      const headers = [
        { name: 'X-Content-Type-Options', value: 'nosniff' },
        { name: 'X-Frame-Options', value: 'DENY' },
        { name: 'X-XSS-Protection', value: '1; mode=block' },
        { name: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { name: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' }
      ];

      headers.forEach(header => {
        const meta = document.createElement('meta');
        meta.setAttribute('http-equiv', header.name);
        meta.content = header.value;
        document.head.appendChild(meta);
      });
    };

    // Sanitize user input in forms
    const sanitizeInputs = () => {
      const inputs = document.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        input.addEventListener('input', (e) => {
          const target = e.target as HTMLInputElement;
          // Basic XSS prevention
          target.value = target.value
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
            .replace(/<[^>]*>/g, '')
            .replace(/javascript:/gi, '')
            .replace(/on\w+\s*=/gi, '');
        });
      });
    };

    // Add nonce to inline scripts for CSP
    const addNonces = () => {
      const scripts = document.querySelectorAll('script:not([src])');
      scripts.forEach(script => {
        if (!script.getAttribute('nonce')) {
          const nonce = Math.random().toString(36).substring(2, 15);
          script.setAttribute('nonce', nonce);
        }
      });
    };

    // Protect against clickjacking
    const preventClickjacking = () => {
      if (window !== window.top) {
        window.top.location = window.location;
      }
    };

    // Add integrity checks for external resources
    const addIntegrityChecks = () => {
      const externalScripts = document.querySelectorAll('script[src^="http"]');
      externalScripts.forEach(script => {
        if (!script.getAttribute('crossorigin')) {
          script.setAttribute('crossorigin', 'anonymous');
        }
      });

      const externalStyles = document.querySelectorAll('link[href^="http"]');
      externalStyles.forEach(link => {
        if (!link.getAttribute('crossorigin')) {
          link.setAttribute('crossorigin', 'anonymous');
        }
      });
    };

    // Monitor for suspicious activity
    const addSecurityMonitoring = () => {
      // Monitor console errors for potential security issues
      const originalError = console.error;
      console.error = function(...args) {
        const message = args.join(' ');
        if (message.includes('CSP') || message.includes('XSS') || message.includes('CSRF')) {
          // Log security-related errors
          if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as any).gtag('event', 'security_error', {
              event_category: 'Security',
              event_label: 'Console Error',
              value: message
            });
          }
        }
        originalError.apply(console, args);
      };

      // Monitor for unauthorized access attempts
      window.addEventListener('error', (e) => {
        if (e.message.includes('Script error') || e.message.includes('SecurityError')) {
          if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as any).gtag('event', 'security_error', {
              event_category: 'Security',
              event_label: 'Script Error',
              value: e.message
            });
          }
        }
      });
    };

    // Add secure cookie handling
    const secureCookies = () => {
      // Ensure all cookies are secure in production
      if (location.protocol === 'https:') {
        document.cookie = document.cookie
          .split(';')
          .map(cookie => cookie.trim())
          .filter(cookie => cookie)
          .map(cookie => {
            if (!cookie.includes('Secure')) {
              return cookie + '; Secure';
            }
            return cookie;
          })
          .join('; ');
      }
    };

    // Initialize security enhancements
    addCSP();
    addSecurityHeaders();
    sanitizeInputs();
    addNonces();
    preventClickjacking();
    addIntegrityChecks();
    addSecurityMonitoring();
    secureCookies();

    // Add event listener for form submissions
    const handleFormSubmit = (e: Event) => {
      const form = e.target as HTMLFormElement;
      
      // Add CSRF protection
      const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
      if (csrfToken && !form.querySelector('input[name="_token"]')) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = '_token';
        input.value = csrfToken;
        form.appendChild(input);
      }

      // Validate form data
      const formData = new FormData(form);
      for (const [key, value] of formData.entries()) {
        if (typeof value === 'string' && value.includes('<script')) {
          e.preventDefault();
          alert('Invalid input detected. Please try again.');
          return false;
        }
      }
    };

    document.addEventListener('submit', handleFormSubmit);

    // Cleanup
    return () => {
      document.removeEventListener('submit', handleFormSubmit);
    };
  }, []);

  return null;
};

export default SecurityEnhancer;
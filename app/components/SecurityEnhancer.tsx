'use client';

import React, { useEffect } from 'react';

interface SecurityEnhancerProps {
  enableCSP?: boolean;
  enableXSSProtection?: boolean;
  enableCSRFProtection?: boolean;
  enableClickjackingProtection?: boolean;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({
  enableCSP = true,
  enableXSSProtection = true,
  enableCSRFProtection = true,
  enableClickjackingProtection = true
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

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

    // Additional Security Headers
    const securityHeaders = [
      {
        name: 'X-Content-Type-Options',
        value: 'nosniff'
      },
      {
        name: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin'
      },
      {
        name: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
      }
    ];

    securityHeaders.forEach(header => {
      const meta = document.createElement('meta');
      meta.httpEquiv = header.name;
      meta.content = header.value;
      document.head.appendChild(meta);
    });

    // CSRF Protection
    if (enableCSRFProtection) {
      const csrfToken = generateCSRFToken();
      sessionStorage.setItem('csrf-token', csrfToken);
      
      // Add CSRF token to all forms
      const addCSRFTokenToForms = () => {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
          if (!form.querySelector('input[name="csrf-token"]')) {
            const csrfInput = document.createElement('input');
            csrfInput.type = 'hidden';
            csrfInput.name = 'csrf-token';
            csrfInput.value = csrfToken;
            form.appendChild(csrfInput);
          }
        });
      };

      addCSRFTokenToForms();

      // Monitor for new forms
      const observer = new MutationObserver(() => {
        addCSRFTokenToForms();
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      return () => observer.disconnect();
    }

    // Input sanitization
    const sanitizeInputs = () => {
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        input.addEventListener('input', (e) => {
          const target = e.target as HTMLInputElement;
          if (target.type === 'text' || target.type === 'textarea') {
            // Remove potentially dangerous characters
            target.value = target.value.replace(/[<>]/g, '');
          }
        });
      });
    };

    sanitizeInputs();

    // Monitor for new inputs
    const inputObserver = new MutationObserver(() => {
      sanitizeInputs();
    });

    inputObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => inputObserver.disconnect();
  }, [enableCSP, enableXSSProtection, enableCSRFProtection, enableClickjackingProtection]);

  return null;
};

// Generate CSRF token
const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

export default SecurityEnhancer;
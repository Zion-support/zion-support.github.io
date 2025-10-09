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
      const addCSP = () => {
        const meta = document.createElement('meta');
        meta.httpEquiv = 'Content-Security-Policy';
        meta.content = `
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
        document.head.appendChild(meta);
      };

      addCSP();
    }
  }, [enableCSP]);

  useEffect(() => {
    // XSS Protection
    if (enableXSSProtection) {
      const addXSSProtection = () => {
        const meta = document.createElement('meta');
        meta.httpEquiv = 'X-XSS-Protection';
        meta.content = '1; mode=block';
        document.head.appendChild(meta);
      };

      addXSSProtection();
    }
  }, [enableXSSProtection]);

  useEffect(() => {
    // Clickjacking Protection
    if (enableClickjackingProtection) {
      const addClickjackingProtection = () => {
        const meta = document.createElement('meta');
        meta.httpEquiv = 'X-Frame-Options';
        meta.content = 'DENY';
        document.head.appendChild(meta);
      };

      addClickjackingProtection();
    }
  }, [enableClickjackingProtection]);

  useEffect(() => {
    // HSTS (HTTP Strict Transport Security)
    if (enableHSTS) {
      const addHSTS = () => {
        const meta = document.createElement('meta');
        meta.httpEquiv = 'Strict-Transport-Security';
        meta.content = 'max-age=31536000; includeSubDomains; preload';
        document.head.appendChild(meta);
      };

      addHSTS();
    }
  }, [enableHSTS]);

  useEffect(() => {
    // Additional security headers
    const addSecurityHeaders = () => {
      const headers = [
        { name: 'X-Content-Type-Options', value: 'nosniff' },
        { name: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { name: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' }
      ];

      headers.forEach(({ name, value }) => {
        const meta = document.createElement('meta');
        meta.httpEquiv = name;
        meta.content = value;
        document.head.appendChild(meta);
      });
    };

    addSecurityHeaders();
  }, []);

  useEffect(() => {
    // Input sanitization
    const sanitizeInputs = () => {
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach((input) => {
        input.addEventListener('input', (e) => {
          const target = e.target as HTMLInputElement;
          // Basic XSS prevention
          target.value = target.value
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
            .replace(/javascript:/gi, '')
            .replace(/on\w+\s*=/gi, '');
        });
      });
    };

    // Run after DOM is loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', sanitizeInputs);
    } else {
      sanitizeInputs();
    }
  }, []);

  useEffect(() => {
    // Secure external links
    const secureExternalLinks = () => {
      const links = document.querySelectorAll('a[href^="http"]');
      links.forEach((link) => {
        if (!link.hasAttribute('rel')) {
          link.setAttribute('rel', 'noopener noreferrer');
        }
        if (!link.hasAttribute('target')) {
          link.setAttribute('target', '_blank');
        }
      });
    };

    // Run after DOM is loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', secureExternalLinks);
    } else {
      secureExternalLinks();
    }
  }, []);

  return null; // This component doesn't render anything
};

export default SecurityEnhancer;
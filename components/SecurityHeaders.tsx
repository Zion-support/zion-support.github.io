import React, { useEffect } from 'react';

const SecurityHeaders: React.FC = () => {
  useEffect(() => {
    // Add security headers via meta tags
    const addSecurityHeaders = () => {
      const securityMetaTags = [
        { name: 'referrer', content: 'strict-origin-when-cross-origin' },
        { name: 'x-content-type-options', content: 'nosniff' },
        { name: 'x-frame-options', content: 'DENY' },
        { name: 'x-xss-protection', content: '1; mode=block' },
        { name: 'permissions-policy', content: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
        { name: 'content-security-policy', content: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.ziontechgroup.com; frame-ancestors 'none';" }
      ];

      securityMetaTags.forEach(tag => {
        const meta = document.createElement('meta');
        meta.httpEquiv = tag.name;
        meta.content = tag.content;
        document.head.appendChild(meta);
      });
    };

    // Add Content Security Policy for inline styles
    const addCSPForInlineStyles = () => {
      const style = document.createElement('style');
      style.setAttribute('nonce', 'csp-nonce-' + Math.random().toString(36).substr(2, 9));
      document.head.appendChild(style);
    };

    // Initialize security headers
    addSecurityHeaders();
    addCSPForInlineStyles();

    // Cleanup function
    return () => {
      // Remove security meta tags on cleanup
      const securityMetas = document.querySelectorAll('meta[http-equiv]');
      securityMetas.forEach(meta => {
        const httpEquiv = meta.getAttribute('http-equiv');
        if (httpEquiv && ['referrer', 'x-content-type-options', 'x-frame-options', 'x-xss-protection', 'permissions-policy', 'content-security-policy'].includes(httpEquiv)) {
          meta.remove();
        }
      });
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SecurityHeaders;
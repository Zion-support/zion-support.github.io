import React, { useEffect } from 'react';

const SecurityHeaders: React.FC = () => {
  useEffect(() => {
    // Add security headers via meta tags
    const addSecurityHeaders = () => {
      const securityHeaders = [
        {
          name: 'Content-Security-Policy',
          content: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-src 'none';"
        },
        {
          name: 'X-Frame-Options',
          content: 'DENY'
        },
        {
          name: 'X-Content-Type-Options',
          content: 'nosniff'
        },
        {
          name: 'Referrer-Policy',
          content: 'strict-origin-when-cross-origin'
        },
        {
          name: 'Permissions-Policy',
          content: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
        },
        {
          name: 'X-XSS-Protection',
          content: '1; mode=block'
        },
        {
          name: 'Strict-Transport-Security',
          content: 'max-age=31536000; includeSubDomains'
        }
      ];

      securityHeaders.forEach(header => {
        const existingMeta = document.querySelector(`meta[http-equiv="${header.name}"]`);
        if (!existingMeta) {
          const meta = document.createElement('meta');
          meta.setAttribute('http-equiv', header.name);
          meta.setAttribute('content', header.content);
          document.head.appendChild(meta);
        }
      });
    };

    addSecurityHeaders();
  }, []);

  return null;
};

export default SecurityHeaders;
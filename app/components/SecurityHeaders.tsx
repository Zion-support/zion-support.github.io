import React, { useEffect } from 'react';

const SecurityHeaders: React.FC = () => {
  useEffect(() => {
    // Add security headers via meta tags
    const addSecurityHeaders = () => {
      // Content Security Policy
      const cspMeta = document.createElement('meta');
      cspMeta.setAttribute('http-equiv', 'Content-Security-Policy');
      cspMeta.setAttribute('content', 
        "default-src 'self'; " +
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; " +
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
        "font-src 'self' https://fonts.gstatic.com; " +
        "img-src 'self' data: https:; " +
        "connect-src 'self' https://www.google-analytics.com; " +
        "frame-src 'none'; " +
        "object-src 'none'; " +
        "base-uri 'self'; " +
        "form-action 'self'"
      );
      document.head.appendChild(cspMeta);

      // X-Frame-Options
      const frameOptionsMeta = document.createElement('meta');
      frameOptionsMeta.setAttribute('http-equiv', 'X-Frame-Options');
      frameOptionsMeta.setAttribute('content', 'DENY');
      document.head.appendChild(frameOptionsMeta);

      // X-Content-Type-Options
      const contentTypeMeta = document.createElement('meta');
      contentTypeMeta.setAttribute('http-equiv', 'X-Content-Type-Options');
      contentTypeMeta.setAttribute('content', 'nosniff');
      document.head.appendChild(contentTypeMeta);

      // X-XSS-Protection
      const xssMeta = document.createElement('meta');
      xssMeta.setAttribute('http-equiv', 'X-XSS-Protection');
      xssMeta.setAttribute('content', '1; mode=block');
      document.head.appendChild(xssMeta);

      // Referrer Policy
      const referrerMeta = document.createElement('meta');
      referrerMeta.setAttribute('name', 'referrer');
      referrerMeta.setAttribute('content', 'strict-origin-when-cross-origin');
      document.head.appendChild(referrerMeta);

      // Permissions Policy
      const permissionsMeta = document.createElement('meta');
      permissionsMeta.setAttribute('http-equiv', 'Permissions-Policy');
      permissionsMeta.setAttribute('content', 
        'camera=(), microphone=(), geolocation=(), interest-cohort=()'
      );
      document.head.appendChild(permissionsMeta);
    };

    addSecurityHeaders();
  }, []);

  return null; // This component doesn't render anything
};

export default SecurityHeaders;
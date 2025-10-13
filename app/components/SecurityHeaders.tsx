import React, { useEffect } from 'react';

const SecurityHeaders: React.FC = () => {
  useEffect(() => {
    // Set security headers
    const setSecurityHeaders = () => {
      // Content Security Policy
      const csp = [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.gstatic.com",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: https: blob:",
        "connect-src 'self' https://www.google-analytics.com https://analytics.google.com",
        "frame-src 'self' https://www.google.com",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "frame-ancestors 'none'",
        "upgrade-insecure-requests"
      ].join('; ');

      // Create meta tag for CSP
      let cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
      if (!cspMeta) {
        cspMeta = document.createElement('meta');
        cspMeta.setAttribute('http-equiv', 'Content-Security-Policy');
        document.head.appendChild(cspMeta);
      }
      cspMeta.setAttribute('content', csp);

      // X-Frame-Options
      let frameOptionsMeta = document.querySelector('meta[http-equiv="X-Frame-Options"]');
      if (!frameOptionsMeta) {
        frameOptionsMeta = document.createElement('meta');
        frameOptionsMeta.setAttribute('http-equiv', 'X-Frame-Options');
        document.head.appendChild(frameOptionsMeta);
      }
      frameOptionsMeta.setAttribute('content', 'DENY');

      // X-Content-Type-Options
      let contentTypeMeta = document.querySelector('meta[http-equiv="X-Content-Type-Options"]');
      if (!contentTypeMeta) {
        contentTypeMeta = document.createElement('meta');
        contentTypeMeta.setAttribute('http-equiv', 'X-Content-Type-Options');
        document.head.appendChild(contentTypeMeta);
      }
      contentTypeMeta.setAttribute('content', 'nosniff');

      // Referrer-Policy
      let referrerMeta = document.querySelector('meta[name="referrer"]');
      if (!referrerMeta) {
        referrerMeta = document.createElement('meta');
        referrerMeta.setAttribute('name', 'referrer');
        document.head.appendChild(referrerMeta);
      }
      referrerMeta.setAttribute('content', 'strict-origin-when-cross-origin');

      // Permissions-Policy
      let permissionsMeta = document.querySelector('meta[http-equiv="Permissions-Policy"]');
      if (!permissionsMeta) {
        permissionsMeta = document.createElement('meta');
        permissionsMeta.setAttribute('http-equiv', 'Permissions-Policy');
        document.head.appendChild(permissionsMeta);
      }
      permissionsMeta.setAttribute('content', 'camera=(), microphone=(), geolocation=(), interest-cohort=()');

      // X-XSS-Protection
      let xssMeta = document.querySelector('meta[http-equiv="X-XSS-Protection"]');
      if (!xssMeta) {
        xssMeta = document.createElement('meta');
        xssMeta.setAttribute('http-equiv', 'X-XSS-Protection');
        document.head.appendChild(xssMeta);
      }
      xssMeta.setAttribute('content', '1; mode=block');

      // Strict-Transport-Security (HTTPS only)
      if (location.protocol === 'https:') {
        let hstsMeta = document.querySelector('meta[http-equiv="Strict-Transport-Security"]');
        if (!hstsMeta) {
          hstsMeta = document.createElement('meta');
          hstsMeta.setAttribute('http-equiv', 'Strict-Transport-Security');
          document.head.appendChild(hstsMeta);
        }
        hstsMeta.setAttribute('content', 'max-age=31536000; includeSubDomains; preload');
      }
    };

    // Set headers immediately
    setSecurityHeaders();

    // Also set them when the page loads
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setSecurityHeaders);
    }

    // Cleanup function
    return () => {
      // Remove event listener if component unmounts
      document.removeEventListener('DOMContentLoaded', setSecurityHeaders);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SecurityHeaders;
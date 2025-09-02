import React, { useEffect } from 'react';

const SecurityHeaders: React.FC = () => {
  useEffect(() => {
    // Set security headers programmatically where possible
    if (typeof document !== 'undefined') {
      // Content Security Policy via meta tag
      const cspMeta = document.createElement('meta');
      cspMeta.httpEquiv = 'Content-Security-Policy';
      cspMeta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https:;";
      document.head.appendChild(cspMeta);

      // X-Content-Type-Options
      const xContentType = document.createElement('meta');
      xContentType.httpEquiv = 'X-Content-Type-Options';
      xContentType.content = 'nosniff';
      document.head.appendChild(xContentType);

      // X-Frame-Options
      const xFrameOptions = document.createElement('meta');
      xFrameOptions.httpEquiv = 'X-Frame-Options';
      xFrameOptions.content = 'DENY';
      document.head.appendChild(xFrameOptions);

      // Referrer Policy
      const referrerPolicy = document.createElement('meta');
      referrerPolicy.name = 'referrer';
      referrerPolicy.content = 'strict-origin-when-cross-origin';
      document.head.appendChild(referrerPolicy);
    }
  }, []);

  return null; // This component doesn't render anything visible
};

export default SecurityHeaders;
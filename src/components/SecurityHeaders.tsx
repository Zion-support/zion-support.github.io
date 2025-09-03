import React from 'react';
import Head from 'next/head';

interface SecurityHeadersProps {
  cspNonce?: string;
}

const SecurityHeaders: React.FC<SecurityHeadersProps> = ({ cspNonce }) => {
  const generateCSP = () => {
    const nonce = cspNonce || 'nonce-' + Math.random().toString(36).substr(2, 9);
    
    return [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://cdn.jsdelivr.net",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "media-src 'self' https:",
      "connect-src 'self' https://www.google-analytics.com https://api.ziontechgroup.com",
      "frame-src 'self' https://www.youtube.com https://player.vimeo.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      `nonce-${nonce}`
    ].join('; ');
  };

  return (
    <Head>
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), interest-cohort=()" />
      <meta httpEquiv="Content-Security-Policy" content={generateCSP()} />
      
      {/* HSTS Header */}
      <meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains; preload" />
      
      {/* Additional Security Headers */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
    </Head>
  );
};

export default SecurityHeaders;
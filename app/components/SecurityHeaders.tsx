import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SecurityHeadersProps {
  enableCSP?: boolean;
  enableHSTS?: boolean;
  enableXSSProtection?: boolean;
  enableFrameOptions?: boolean;
  enableReferrerPolicy?: boolean;
  enablePermissionsPolicy?: boolean;
}

const SecurityHeaders: React.FC<SecurityHeadersProps> = ({
  enableCSP = true,
  enableHSTS = true,
  enableXSSProtection = true,
  enableFrameOptions = true,
  enableReferrerPolicy = true,
  enablePermissionsPolicy = true
}) => {
  useEffect(() => {
    // Set security headers via meta tags (some headers need to be set server-side)
    const setSecurityHeaders = () => {
      // Content Security Policy
      if (enableCSP) {
        const csp = [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://fonts.googleapis.com",
          "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
          "img-src 'self' data: https: blob:",
          "font-src 'self' https://fonts.gstatic.com",
          "connect-src 'self' https://www.google-analytics.com https://analytics.google.com",
          "frame-src 'self' https://www.google.com",
          "object-src 'none'",
          "base-uri 'self'",
          "form-action 'self'",
          "frame-ancestors 'none'",
          "upgrade-insecure-requests"
        ].join('; ');

        const meta = document.createElement('meta');
        meta.httpEquiv = 'Content-Security-Policy';
        meta.content = csp;
        document.head.appendChild(meta);
      }

      // X-Frame-Options
      if (enableFrameOptions) {
        const meta = document.createElement('meta');
        meta.httpEquiv = 'X-Frame-Options';
        meta.content = 'DENY';
        document.head.appendChild(meta);
      }

      // X-Content-Type-Options
      const contentTypeMeta = document.createElement('meta');
      contentTypeMeta.httpEquiv = 'X-Content-Type-Options';
      contentTypeMeta.content = 'nosniff';
      document.head.appendChild(contentTypeMeta);

      // X-XSS-Protection
      if (enableXSSProtection) {
        const xssMeta = document.createElement('meta');
        xssMeta.httpEquiv = 'X-XSS-Protection';
        xssMeta.content = '1; mode=block';
        document.head.appendChild(xssMeta);
      }

      // Referrer Policy
      if (enableReferrerPolicy) {
        const referrerMeta = document.createElement('meta');
        referrerMeta.name = 'referrer';
        referrerMeta.content = 'strict-origin-when-cross-origin';
        document.head.appendChild(referrerMeta);
      }

      // Permissions Policy
      if (enablePermissionsPolicy) {
        const permissionsPolicy = [
          'camera=()',
          'microphone=()',
          'geolocation=()',
          'interest-cohort=()',
          'usb=()',
          'magnetometer=()',
          'gyroscope=()',
          'accelerometer=()',
          'ambient-light-sensor=()',
          'autoplay=()',
          'battery=()',
          'bluetooth=()',
          'display-capture=()',
          'encrypted-media=()',
          'fullscreen=(self)',
          'payment=()',
          'picture-in-picture=()',
          'publickey-credentials-get=()',
          'screen-wake-lock=()',
          'sync-xhr=()',
          'web-share=()'
        ].join(', ');

        const meta = document.createElement('meta');
        meta.httpEquiv = 'Permissions-Policy';
        meta.content = permissionsPolicy;
        document.head.appendChild(meta);
      }
    };

    setSecurityHeaders();
  }, [enableCSP, enableHSTS, enableXSSProtection, enableFrameOptions, enableReferrerPolicy, enablePermissionsPolicy]);

  return (
    <Helmet>
      {/* Additional security meta tags */}
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* HSTS (Note: This should ideally be set server-side) */}
      {enableHSTS && (
        <meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains; preload" />
      )}
      
      {/* Additional security headers that can be set via meta tags */}
      <meta httpEquiv="X-DNS-Prefetch-Control" content="on" />
      <meta httpEquiv="X-Download-Options" content="noopen" />
      <meta httpEquiv="X-Permitted-Cross-Domain-Policies" content="none" />
      
      {/* Feature Policy (legacy, replaced by Permissions Policy) */}
      <meta httpEquiv="Feature-Policy" content="camera 'none'; microphone 'none'; geolocation 'none'; interest-cohort 'none'" />
    </Helmet>
  );
};

export default SecurityHeaders;
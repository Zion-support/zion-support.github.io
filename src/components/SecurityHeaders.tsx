import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SecurityHeadersProps {
  enableCSP?: boolean;
  enableHSTS?: boolean;
  enableXSSProtection?: boolean;
  enableContentTypeOptions?: boolean;
  enableFrameOptions?: boolean;
  enableReferrerPolicy?: boolean;
  enablePermissionsPolicy?: boolean;
}

const SecurityHeaders: React.FC<SecurityHeadersProps> = ({
  enableCSP = true,
  enableHSTS = true,
  enableXSSProtection = true,
  enableContentTypeOptions = true,
  enableFrameOptions = true,
  enableReferrerPolicy = true,
  enablePermissionsPolicy = true
}) => {
  const cspPolicy = enableCSP ? 
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://cdn.gpteng.co; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "img-src 'self' data: https: blob:; " +
    "connect-src 'self' https://www.google-analytics.com https://analytics.google.com; " +
    "frame-src 'none'; " +
    "object-src 'none'; " +
    "base-uri 'self'; " +
    "form-action 'self'; " +
    "upgrade-insecure-requests;" : undefined;

  const permissionsPolicy = enablePermissionsPolicy ?
    "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=(), ambient-light-sensor=(), autoplay=(), encrypted-media=(), fullscreen=(self), picture-in-picture=()" : undefined;

  return (
    <Helmet>
      {/* Content Security Policy */}
      {cspPolicy && (
        <meta httpEquiv="Content-Security-Policy" content={cspPolicy} />
      )}

      {/* HTTP Strict Transport Security */}
      {enableHSTS && (
        <meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains; preload" />
      )}

      {/* X-Content-Type-Options */}
      {enableContentTypeOptions && (
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      )}

      {/* X-Frame-Options */}
      {enableFrameOptions && (
        <meta httpEquiv="X-Frame-Options" content="DENY" />
      )}

      {/* X-XSS-Protection */}
      {enableXSSProtection && (
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      )}

      {/* Referrer Policy */}
      {enableReferrerPolicy && (
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      )}

      {/* Permissions Policy */}
      {permissionsPolicy && (
        <meta httpEquiv="Permissions-Policy" content={permissionsPolicy} />
      )}

      {/* Additional Security Headers */}
      <meta httpEquiv="X-DNS-Prefetch-Control" content="on" />
      <meta httpEquiv="X-Download-Options" content="noopen" />
      <meta httpEquiv="X-Permitted-Cross-Domain-Policies" content="none" />
      
      {/* Cache Control for sensitive pages */}
      <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
      <meta httpEquiv="Pragma" content="no-cache" />
      <meta httpEquiv="Expires" content="0" />
    </Helmet>
  );
};

export default SecurityHeaders;
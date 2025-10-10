'use client';

import React, { useEffect, ReactNode } from 'react';

interface SecurityEnhancerProps {
  children: ReactNode;
  enableCSP?: boolean;
  enableHSTS?: boolean;
  enableXSSProtection?: boolean;
  enableClickjackingProtection?: boolean;
  enableContentTypeSniffing?: boolean;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({
  children,
  enableCSP = true,
  enableHSTS = true,
  enableXSSProtection = true,
  enableClickjackingProtection = true,
  enableContentTypeSniffing = true
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Content Security Policy
    if (enableCSP) {
      const cspMeta = document.createElement('meta');
      cspMeta.httpEquiv = 'Content-Security-Policy';
      cspMeta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-ancestors 'none';";
      document.head.appendChild(cspMeta);
    }

    // HTTP Strict Transport Security
    if (enableHSTS) {
      const hstsMeta = document.createElement('meta');
      hstsMeta.httpEquiv = 'Strict-Transport-Security';
      hstsMeta.content = 'max-age=31536000; includeSubDomains; preload';
      document.head.appendChild(hstsMeta);
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

    // Content Type Sniffing Protection
    if (enableContentTypeSniffing) {
      const contentTypeMeta = document.createElement('meta');
      contentTypeMeta.httpEquiv = 'X-Content-Type-Options';
      contentTypeMeta.content = 'nosniff';
      document.head.appendChild(contentTypeMeta);
    }

    // Additional security headers
    const referrerMeta = document.createElement('meta');
    referrerMeta.name = 'referrer';
    referrerMeta.content = 'strict-origin-when-cross-origin';
    document.head.appendChild(referrerMeta);

    const permissionsMeta = document.createElement('meta');
    permissionsMeta.name = 'permissions-policy';
    permissionsMeta.content = 'camera=(), microphone=(), geolocation=()';
    document.head.appendChild(permissionsMeta);

    // Cleanup function
    return () => {
      const securityMetas = document.querySelectorAll('meta[http-equiv="Content-Security-Policy"], meta[http-equiv="Strict-Transport-Security"], meta[http-equiv="X-XSS-Protection"], meta[http-equiv="X-Frame-Options"], meta[http-equiv="X-Content-Type-Options"], meta[name="referrer"], meta[name="permissions-policy"]');
      securityMetas.forEach(meta => meta.remove());
    };
  }, [enableCSP, enableHSTS, enableXSSProtection, enableClickjackingProtection, enableContentTypeSniffing]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default SecurityEnhancer;
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
  enableContentTypeSniffing = true,
}) => {
  useEffect(() => {
    // Set security headers
    if (typeof document !== 'undefined') {
      // Content Security Policy
      if (enableCSP) {
        const csp = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self';";
        const meta = document.createElement('meta');
        meta.httpEquiv = 'Content-Security-Policy';
        meta.content = csp;
        document.head.appendChild(meta);
      }

      // XSS Protection
      if (enableXSSProtection) {
        const meta = document.createElement('meta');
        meta.httpEquiv = 'X-XSS-Protection';
        meta.content = '1; mode=block';
        document.head.appendChild(meta);
      }

      // Clickjacking Protection
      if (enableClickjackingProtection) {
        const meta = document.createElement('meta');
        meta.httpEquiv = 'X-Frame-Options';
        meta.content = 'DENY';
        document.head.appendChild(meta);
      }

      // Content Type Sniffing Protection
      if (enableContentTypeSniffing) {
        const meta = document.createElement('meta');
        meta.httpEquiv = 'X-Content-Type-Options';
        meta.content = 'nosniff';
        document.head.appendChild(meta);
      }

      // Referrer Policy
      const referrerMeta = document.createElement('meta');
      referrerMeta.name = 'referrer';
      referrerMeta.content = 'strict-origin-when-cross-origin';
      document.head.appendChild(referrerMeta);

      // Permissions Policy
      const permissionsMeta = document.createElement('meta');
      permissionsMeta.httpEquiv = 'Permissions-Policy';
      permissionsMeta.content = 'camera=(), microphone=(), geolocation=(), payment=()';
      document.head.appendChild(permissionsMeta);
    }

    // Set HSTS header (this would typically be done server-side)
    if (enableHSTS && typeof window !== 'undefined') {
      // In a real application, this would be set by the server
      // For now, we'll just log that it should be enabled
      console.log('HSTS should be enabled server-side');
    }
  }, [enableCSP, enableHSTS, enableXSSProtection, enableClickjackingProtection, enableContentTypeSniffing]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default SecurityEnhancer;
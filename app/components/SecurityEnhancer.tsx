'use client';
import React from 'react';

interface SecurityEnhancerProps {
  enableCSP?: boolean;
  enableHSTS?: boolean;
  enableXSSProtection?: boolean;
  enableClickjackingProtection?: boolean;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({
  enableCSP = true,
  enableHSTS = true,
  enableXSSProtection = true,
  enableClickjackingProtection = true
}) => {
  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    // Add security headers via meta tags
    const addSecurityMeta = (name: string, content: string) => {
      const existing = document.querySelector(`meta[name="${name}"]`);
      if (!existing) {
        const meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    if (enableXSSProtection) {
      addSecurityMeta('X-XSS-Protection', '1; mode=block');
    }

    if (enableClickjackingProtection) {
      addSecurityMeta('X-Frame-Options', 'DENY');
    }

    // Add Content Security Policy
    if (enableCSP) {
      addSecurityMeta(
        'Content-Security-Policy',
        "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-src 'none';"
      );
    }

    // Add HSTS header (this would typically be set server-side)
    if (enableHSTS) {
      addSecurityMeta('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    }

    // Add referrer policy
    addSecurityMeta('Referrer-Policy', 'strict-origin-when-cross-origin');

    // Add permissions policy
    addSecurityMeta(
      'Permissions-Policy',
      'camera=(), microphone=(), geolocation=(), interest-cohort=()'
    );

  }, [enableCSP, enableHSTS, enableXSSProtection, enableClickjackingProtection]);

  return null;
};

export default SecurityEnhancer;
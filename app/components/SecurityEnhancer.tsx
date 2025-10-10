'use client';

import React, { useEffect } from 'react';

interface SecurityEnhancerProps {
  enableCSP?: boolean;
  enableHSTS?: boolean;
  enableXSSProtection?: boolean;
  enableClickjackingProtection?: boolean;
  enableContentTypeSniffing?: boolean;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({
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
      cspMeta.content = [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: https: blob:",
        "connect-src 'self' https://www.google-analytics.com https://analytics.google.com",
        "frame-src 'none'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "frame-ancestors 'none'"
      ].join('; ');
      document.head.appendChild(cspMeta);
    }

    // HTTP Strict Transport Security
    if (enableHSTS && location.protocol === 'https:') {
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

    // Referrer Policy
    const referrerMeta = document.createElement('meta');
    referrerMeta.name = 'referrer';
    referrerMeta.content = 'strict-origin-when-cross-origin';
    document.head.appendChild(referrerMeta);

    // Permissions Policy
    const permissionsMeta = document.createElement('meta');
    permissionsMeta.httpEquiv = 'Permissions-Policy';
    permissionsMeta.content = [
      'camera=()',
      'microphone=()',
      'geolocation=()',
      'interest-cohort=()',
      'usb=()',
      'magnetometer=()',
      'gyroscope=()',
      'accelerometer=()'
    ].join(', ');
    document.head.appendChild(permissionsMeta);

    // Additional security headers
    const additionalHeaders = [
      { name: 'X-DNS-Prefetch-Control', content: 'off' },
      { name: 'X-Download-Options', content: 'noopen' },
      { name: 'X-Permitted-Cross-Domain-Policies', content: 'none' }
    ];

    additionalHeaders.forEach(header => {
      const meta = document.createElement('meta');
      meta.httpEquiv = header.name;
      meta.content = header.content;
      document.head.appendChild(meta);
    });

    // Secure cookie handling
    const secureCookies = () => {
      // This would typically be handled server-side
      // Here we just ensure client-side cookie handling is secure
      if (typeof document !== 'undefined') {
        // Remove any non-secure cookies in development
        if (process.env.NODE_ENV === 'development') {
          const cookies = document.cookie.split(';');
          cookies.forEach(cookie => {
            const eqPos = cookie.indexOf('=');
            const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
            if (name && !name.startsWith('__Secure-') && !name.startsWith('__Host-')) {
              document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
            }
          });
        }
      }
    };

    secureCookies();

    // Cleanup function
    return () => {
      // Remove security meta tags when component unmounts
      const securityMetas = document.querySelectorAll('meta[http-equiv*="Content-Security-Policy"], meta[http-equiv*="Strict-Transport-Security"], meta[http-equiv*="X-XSS-Protection"], meta[http-equiv*="X-Frame-Options"], meta[http-equiv*="X-Content-Type-Options"], meta[name="referrer"], meta[http-equiv*="Permissions-Policy"]');
      securityMetas.forEach(meta => meta.remove());
    };
  }, [enableCSP, enableHSTS, enableXSSProtection, enableClickjackingProtection, enableContentTypeSniffing]);

  // Security event listeners
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Prevent right-click context menu in production
    const preventContextMenu = (e: MouseEvent) => {
      if (process.env.NODE_ENV === 'production') {
        e.preventDefault();
      }
    };

    // Prevent text selection in production
    const preventTextSelection = (e: Event) => {
      if (process.env.NODE_ENV === 'production') {
        e.preventDefault();
      }
    };

    // Prevent drag and drop
    const preventDragDrop = (e: DragEvent) => {
      e.preventDefault();
    };

    // Prevent F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S
    const preventDevTools = (e: KeyboardEvent) => {
      if (process.env.NODE_ENV === 'production') {
        if (
          e.key === 'F12' ||
          (e.ctrlKey && e.shiftKey && e.key === 'I') ||
          (e.ctrlKey && e.key === 'u') ||
          (e.ctrlKey && e.key === 's')
        ) {
          e.preventDefault();
        }
      }
    };

    // Add event listeners
    document.addEventListener('contextmenu', preventContextMenu);
    document.addEventListener('selectstart', preventTextSelection);
    document.addEventListener('dragstart', preventDragDrop);
    document.addEventListener('drop', preventDragDrop);
    document.addEventListener('keydown', preventDevTools);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('selectstart', preventTextSelection);
      document.removeEventListener('dragstart', preventDragDrop);
      document.removeEventListener('drop', preventDragDrop);
      document.removeEventListener('keydown', preventDevTools);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SecurityEnhancer;
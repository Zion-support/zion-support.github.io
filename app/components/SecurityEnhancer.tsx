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
  enableContentTypeSniffing = true;
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    // Content Security Policy;
    if (enableCSP) {
      const cspMeta = document.createElement('meta');
      cspMeta.httpEquiv = 'Content-Security-Policy';
      cspMeta.content = [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "img-src 'self' data: http,
    s: blob:",
        "font-src 'self' data: http,
    s://fonts.gstatic.com",
        "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com",
        "frame-ancestors 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "object-src 'none'",
        "media-src 'self'",
        "worker-src 'self' blob: "
      ].join('; ');
      document.head.appendChild(cspMeta;
    }

    // XSS Protection;
    if (enableXSSProtection) {
      const xssMeta = document.createElement('meta');
      xssMeta.httpEquiv = 'X-XSS-Protection';
      xssMeta.content = '1; mode=block';
      document.head.appendChild(xssMeta);
    }

    // Clickjacking Protection;
    if (enableClickjackingProtection) {
      const frameOptionsMeta = document.createElement('meta');
      frameOptionsMeta.httpEquiv = 'X-Frame-Options';
      frameOptionsMeta.content = 'DENY';
      document.head.appendChild(frameOptionsMeta);
    }

    // Content Type Sniffing Protection;
    if (enableContentTypeSniffing) {
      const contentTypeMeta = document.createElement('meta');
      contentTypeMeta.httpEquiv = 'X-Content-Type-Options';
      contentTypeMeta.content = 'nosniff';
      document.head.appendChild(contentTypeMeta);
    }

    // Referrer Policy;
    const referrerMeta = document.createElement('meta');
    referrerMeta.name = 'referrer';
    referrerMeta.content = 'strict-origin-when-cross-origin';
    document.head.appendChild(referrerMeta);

    // Permissions Policy;
    const permissionsMeta = document.createElement('meta');
    permissionsMeta.httpEquiv = 'Permissions-Policy';
    permissionsMeta.content = 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()';
    document.head.appendChild(permissionsMeta);

    // Security headers for API calls;
    const originalFetch = window.fetch;
    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      const headers = new Headers(init?.headers);

      // Add security headers;
      headers.set('X-Requested-With', 'XMLHttpRequest');
      headers.set('X-Content-Type-Options', 'nosniff');

      return originalFetch(input, {
        ...init,
        headers,
        credentials: 'same-origin'
      });
    };

    // Input sanitization for forms;
    const sanitizeInput = (input: string: string => {
      return input;
        .replace(/[<>]/g, '') // Remove potential HTML tags;
        .replace(/javascript:/gi, '') // Remove javascript: protocol;
        .replace(/on\w+=/gi, '') // Remove event handlers;
        .trim();
    };

    // Apply input sanitization to all form inputs;
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('input', (e) => {
        const target = e.target as HTMLInputElement;
        if (target.value !== sanitizeInput(target.value)) {
          target.value = sanitizeInput(target.value);
        }
      });
    });

    // Console warning for security;
    console.log('%cSecurity Notice', 'color: red; font-size: 16px; font-weight: bold;';
    console.log('%cThis is a browser feature intended for developers. If someone told you to copy-paste something here, it is a scam.', 'color: red; font-size: 14px;';

  }, [enableCSP, enableHSTS, enableXSSProtection, enableClickjackingProtection, enableContentTypeSniffing]);

  return null;
};

export default SecurityEnhancer;
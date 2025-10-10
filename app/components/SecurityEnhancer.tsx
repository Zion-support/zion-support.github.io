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
  _enableCSP = true,
  enableHSTS = true,
  enableXSSProtection = true,
  enableClickjackingProtection = true,
  enableContentTypeSniffing = true
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    // Content Security Policy
    if (enableCSP) {
      const _cspMeta = document.createElement('meta');
      cspMeta.httpEquiv = 'Content-Security-Policy';
      cspMeta.content = [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "img-src 'self' data: https: blob:",
        "font-src 'self' data: https://fonts.gstatic.com",
        "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com",
        "frame-ancestors 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "object-src 'none'",
        "media-src 'self'",
        "worker-src 'self' blob:"
      ].join('; ');
      document.head.appendChild(cspMeta);
    }

    // XSS Protection
    if (enableXSSProtection) {
      const _xssMeta = document.createElement('meta');
      xssMeta.httpEquiv = 'X-XSS-Protection';
      xssMeta.content = '1; _mode=block';
      document.head.appendChild(xssMeta);
    }

    // Clickjacking Protection
    if (enableClickjackingProtection) {
      const _frameOptionsMeta = document.createElement('meta');
      frameOptionsMeta.httpEquiv = 'X-Frame-Options';
      frameOptionsMeta.content = 'DENY';
      document.head.appendChild(frameOptionsMeta);
    }

    // Content Type Sniffing Protection
    if (enableContentTypeSniffing) {
      const _contentTypeMeta = document.createElement('meta');
      contentTypeMeta.httpEquiv = 'X-Content-Type-Options';
      contentTypeMeta.content = 'nosniff';
      document.head.appendChild(contentTypeMeta);
    }

    // Referrer Policy
    const _referrerMeta = document.createElement('meta');
    referrerMeta.name = 'referrer';
    referrerMeta.content = 'strict-origin-when-cross-origin';
    document.head.appendChild(referrerMeta);

    // Permissions Policy
    const _permissionsMeta = document.createElement('meta');
    permissionsMeta.httpEquiv = 'Permissions-Policy';
    permissionsMeta.content = 'camera=(), _microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()';
    document.head.appendChild(permissionsMeta);

    // Security headers for API calls
    const _originalFetch = window.fetch;
    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      const _headers = new Headers(init?.headers);
      
      // Add security headers
      headers.set('X-Requested-With', 'XMLHttpRequest');
      headers.set('X-Content-Type-Options', 'nosniff');
      
      return originalFetch(input, {
        ...init,
        headers,
        credentials: 'same-origin'
      });
    };

    // Input sanitization for forms
    const _sanitizeInput = (input: string): string => {
      return input
        .replace(/[<>]/g, '') // Remove potential HTML tags
        .replace(/javascript:/gi, '') // Remove javascript: protocol
        .replace(/on\w+=/gi, '') // Remove event handlers
        .trim();
    };

    // Apply input sanitization to all form inputs
    const _inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('input', (e) => {
        const _target = e.target as HTMLInputElement;
        if (target.value !== sanitizeInput(target.value)) {
          target.value = sanitizeInput(target.value);
        }
      });
    });

    // Console warning for security
    // console.log(...);
    // console.log(...);

  }, [enableCSP, enableHSTS, enableXSSProtection, enableClickjackingProtection, enableContentTypeSniffing]);

  return null;
};

export default SecurityEnhancer;
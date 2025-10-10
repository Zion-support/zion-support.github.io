<<<<<<< HEAD
'use client';
import React, { useEffect } from 'react';
interface SecurityEnhancerProps {}
=======
'use client;

import React, { useEffect } from react;

interface SecurityEnhancerProps {
>>>>>>> origin/main
  enableCSP?: boolean;

  enableHSTS?: boolean;

  enableXSSProtection?: boolean;

  enableClickjackingProtection?: boolean;

  enableContentTypeSniffing?: boolean;

}

;
<<<<<<< HEAD
const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({}
  enableCSP="true,"
  enableHSTS="true,"
  enableXSSProtection="true,"
  enableClickjackingProtection="true,"
  enableContentTypeSniffing="true;"
}) => {}
  useEffect(() => {}
    if (typeof window === 'undefined') {}
=======

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({
  enableCSP = true,
  enableHSTS = true,
  enableXSSProtection = true,
  enableClickjackingProtection = true,
  enableContentTypeSniffing = true
}) => {
  useEffect(() => {
    if (typeof window === 'undefined) {
>>>>>>> origin/main
      return;

    }

<<<<<<< HEAD
    // Content Security Policy;
    if ($1) { const cspMeta="document.createElement('meta');"
      cspMeta.httpEquiv="'Content-Security-Policy';"
      cspMeta.content="[]"
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
=======
    // Content Security Policy
    if ($1) { const cspMeta = document.createElement(meta);;

      cspMeta.httpEquiv = Content-Security-Policy;

      cspMeta.content = [
        "default-src 'self',
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com,
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com,
        "img-src 'self' data: https: blob:,
        "font-src 'self' data: https://fonts.gstatic.com,
        "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com,
        "frame-ancestors 'none',
        "base-uri 'self',
        "form-action 'self',
        "object-src 'none',
        "media-src 'self',
        "worker-src 'self' blob:
      ].join(; );

>>>>>>> origin/main
      document.head.appendChild(cspMeta);

    }

<<<<<<< HEAD
    // XSS Protection;
    if ($1) { const xssMeta="document.createElement('meta');"
      xssMeta.httpEquiv="'X-XSS-Protection';"
      xssMeta.content = '1; mode="block';"
=======
    // XSS Protection
    if ($1) { const xssMeta = document.createElement(meta);;

      xssMeta.httpEquiv = X-XSS-Protection;

      xssMeta.content = 1; mode=block;

>>>>>>> origin/main
      document.head.appendChild(xssMeta);

    }

<<<<<<< HEAD
    // Clickjacking Protection;
    if ($1) { const frameOptionsMeta="document.createElement('meta');"
      frameOptionsMeta.httpEquiv="'X-Frame-Options';"
      frameOptionsMeta.content="'DENY';"
=======
    // Clickjacking Protection
    if ($1) { const frameOptionsMeta = document.createElement(meta);;

      frameOptionsMeta.httpEquiv = X-Frame-Options;

      frameOptionsMeta.content = DENY;

>>>>>>> origin/main
      document.head.appendChild(frameOptionsMeta);

    }

<<<<<<< HEAD
    // Content Type Sniffing Protection;
    if ($1) { const contentTypeMeta="document.createElement('meta');"
      contentTypeMeta.httpEquiv="'X-Content-Type-Options';"
      contentTypeMeta.content="'nosniff';"
=======
    // Content Type Sniffing Protection
    if ($1) { const contentTypeMeta = document.createElement(meta);;

      contentTypeMeta.httpEquiv = X-Content-Type-Options;

      contentTypeMeta.content = nosniff;

>>>>>>> origin/main
      document.head.appendChild(contentTypeMeta);

    }

    // Referrer Policy;
<<<<<<< HEAD
const referrerMeta="document.createElement('meta');"
    referrerMeta.name="'referrer';"
    referrerMeta.content="'strict-origin-when-cross-origin';"
=======

const referrerMeta = document.createElement(meta);;

    referrerMeta.name = referrer;

    referrerMeta.content = strict-origin-when-cross-origin;

>>>>>>> origin/main
    document.head.appendChild(referrerMeta);
    // Permissions Policy;
<<<<<<< HEAD
const permissionsMeta="document.createElement('meta');"
    permissionsMeta.httpEquiv="'Permissions-Policy';"
    permissionsMeta.content = 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort="()';"
=======

const permissionsMeta = document.createElement(meta);;

    permissionsMeta.httpEquiv = Permissions-Policy;

    permissionsMeta.content = camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=();

>>>>>>> origin/main
    document.head.appendChild(permissionsMeta);
    // Security headers for API calls;
<<<<<<< HEAD
const originalFetch="window.fetch;"
    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {;
const headers = "new Headers(init?.headers);"
      // Add security headers;
      headers.set('X-Requested-With', 'XMLHttpRequest');
      headers.set('X-Content-Type-Options', 'nosniff');
      return originalFetch(input, {}
        ...init,
        headers,
        credentials: 'same-origin'
      })
    };
    // Input sanitization for forms;
const sanitizeInput = (input: string): string = "> {}"
      return input;
        .replace(/[<>]/g, '') // Remove potential HTML tags;
        .replace(/javascript:/gi, '') // Remove javascript: protocol;
        .replace(/on\w+=/gi, '') // Remove event handlers;
=======

const originalFetch = window.fetch;;

    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {;

const headers = new Headers(init?.headers);;

      // Add security headers
      headers.set('X-Requested-With', XMLHttpRequest);

      headers.set('X-Content-Type-Options', nosniff);

      return originalFetch(input, {
        ...init,
        headers,
        credentials: 'same-origin
      })    };

    // Input sanitization for forms;

const sanitizeInput = (input: string): string => {;;

      return input
        .replace(/[<>]/g, ') // Remove potential HTML tags
        .replace(/javascript:/gi, ') // Remove javascript: protocol
        .replace(/on\w+=/gi, ') // Remove event handlers
>>>>>>> origin/main
        .trim();

    };
    // Apply input sanitization to all form inputs;
<<<<<<< HEAD
const inputs = "document.querySelectorAll('input, textarea, select');"
    inputs.forEach(input = "> {}"
      input.addEventListener('input', (e) => {;
const target = "e.target as HTMLInputElement;"
        if (target.value !== sanitizeInput(target.value)) {}
          target.value="sanitizeInput(target.value);"
=======

const inputs = document.querySelectorAll(input, textarea, select);;

    inputs.forEach(input => {
      input.addEventListener(input, (e) => {;

const target = e.target as HTMLInputElement;;

        if (target.value !== sanitizeInput(target.value)) {
          target.value = sanitizeInput(target.value);

>>>>>>> origin/main
        }

      })
    })
<<<<<<< HEAD

    // Console warning for security;
    // console.log removed for production;
// console.log removed for production;
=======
    // Console warning for security
    // console.log removed for production
// console.log removed for production
>>>>>>> origin/main
}, [enableCSP, enableHSTS, enableXSSProtection, enableClickjackingProtection, enableContentTypeSniffing]);
  return <React.Fragment>{children}</React.Fragment>;

};
<<<<<<< HEAD
export default SecurityEnhancer;
=======

export default SecurityEnhancer;
>>>>>>> origin/main

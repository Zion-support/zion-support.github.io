import { useEffect, useCallback, useRef } from 'react';

interface SecurityOptions {
  enableCSP?: boolean;
  enableXSSProtection?: boolean;
  enableCSRFProtection?: boolean;
  enableContentSecurityPolicy?: boolean;
  enableSecureHeaders?: boolean;
  enableInputSanitization?: boolean;
}

export const useSecurityEnhancements = (options: SecurityOptions = {}) => {
  const {
    enableXSSProtection = true,
    enableCSRFProtection = true,
    enableContentSecurityPolicy = true,
    enableSecureHeaders = true,
    enableInputSanitization = true,
  } = options;

  const csrfTokenRef = useRef<string | null>(null);

  // Generate CSRF token
  const generateCSRFToken = useCallback(() => {
    if (!enableCSRFProtection) return null;

    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    const token = Array.from(array, byte =>
      byte.toString(16).padStart(2, '0'),
    ).join('');

    csrfTokenRef.current = token;
    return token;
  }, [enableCSRFProtection]);

  // Sanitize input to prevent XSS
  const sanitizeInput = useCallback(
    (input: string): string => {
      if (!enableInputSanitization) return input;

      const div = document.createElement('div');
      div.textContent = input;
      return div.innerHTML;
    },
    [enableInputSanitization],
  );

  // Validate input against common attack patterns
  const validateInput = useCallback(
    (input: string): boolean => {
      if (!enableInputSanitization) return true;

      // Check for script tags
      if (/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi.test(input)) {
        return false;
      }

      // Check for javascript: protocol
      if (/javascript:/gi.test(input)) {
        return false;
      }

      // Check for on* event handlers
      if (/on\w+\s*=/gi.test(input)) {
        return false;
      }

      // Check for data: protocol (potential for malicious data)
      if (/data:(?!image\/)/gi.test(input)) {
        return false;
      }

      return true;
    },
    [enableInputSanitization],
  );

  // Set secure headers
  const setSecureHeaders = useCallback(() => {
    if (!enableSecureHeaders) return;

    // Set security headers via meta tags (limited effectiveness in client-side)
    const securityHeaders = [
      { name: 'X-Content-Type-Options', content: 'nosniff' },
      { name: 'X-Frame-Options', content: 'DENY' },
      { name: 'X-XSS-Protection', content: '1; mode=block' },
      { name: 'Referrer-Policy', content: 'strict-origin-when-cross-origin' },
      {
        name: 'Permissions-Policy',
        content: 'geolocation=(), microphone=(), camera=()',
      },
    ];

    securityHeaders.forEach(header => {
      let meta = document.querySelector(
        `meta[http-equiv="${header.name}"]`,
      ) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('http-equiv', header.name);
        document.head.appendChild(meta);
      }

      meta.content = header.content;
    });
  }, [enableSecureHeaders]);

  // Set Content Security Policy
  const setContentSecurityPolicy = useCallback(() => {
    if (!enableContentSecurityPolicy) return;

    const cspDirectives = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self'",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; ');

    let meta = document.querySelector(
      'meta[http-equiv="Content-Security-Policy"]',
    ) as HTMLMetaElement;

    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('http-equiv', 'Content-Security-Policy');
      document.head.appendChild(meta);
    }

    meta.content = cspDirectives;
  }, [enableContentSecurityPolicy]);

  // Secure cookie handling
  const setSecureCookie = useCallback(
    (
      name: string,
      value: string,
      options: {
        secure?: boolean;
        sameSite?: 'Strict' | 'Lax' | 'None';
        maxAge?: number;
      } = {},
    ) => {
      const { secure = true, sameSite = 'Strict', maxAge } = options;

      let cookieString = `${name}=${value}`;

      if (secure) {
        cookieString += '; Secure';
      }

      if (sameSite) {
        cookieString += `; SameSite=${sameSite}`;
      }

      if (maxAge) {
        cookieString += `; Max-Age=${maxAge}`;
      }

      document.cookie = cookieString;
    },
    [],
  );

  // Get secure cookie
  const getSecureCookie = useCallback((name: string): string | null => {
    const cookies = document.cookie.split(';');

    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split('=');
      if (cookieName === name) {
        return cookieValue;
      }
    }

    return null;
  }, []);

  // Validate CSRF token
  const validateCSRFToken = useCallback(
    (token: string): boolean => {
      if (!enableCSRFProtection) return true;

      return csrfTokenRef.current === token;
    },
    [enableCSRFProtection],
  );

  // Initialize security measures
  useEffect(() => {
    // Generate CSRF token
    generateCSRFToken();

    // Set security headers
    setSecureHeaders();

    // Set Content Security Policy
    setContentSecurityPolicy();

    // Set XSS protection
    if (enableXSSProtection) {
      let meta = document.querySelector(
        'meta[http-equiv="X-XSS-Protection"]',
      ) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('http-equiv', 'X-XSS-Protection');
        meta.content = '1; mode=block';
        document.head.appendChild(meta);
      }
    }
  }, [
    generateCSRFToken,
    setSecureHeaders,
    setContentSecurityPolicy,
    enableXSSProtection,
  ]);

  return {
    generateCSRFToken,
    sanitizeInput,
    validateInput,
    setSecureCookie,
    getSecureCookie,
    validateCSRFToken,
    csrfToken: csrfTokenRef.current,
  };
};

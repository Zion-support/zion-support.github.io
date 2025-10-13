import React, { useEffect, useCallback } from 'react';

interface SecurityEnhancerProps {
  children: React.ReactNode;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({ children }) => {
  // Content Security Policy implementation
  const setupCSP = useCallback(() => {
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: https: blob:",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "media-src 'self'",
      "worker-src 'self'",
      "manifest-src 'self'"
    ].join('; ');

    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = csp;
    document.head.appendChild(meta);
  }, []);

  // XSS Protection
  const setupXSSProtection = useCallback(() => {
    // Sanitize user inputs
    const sanitizeInput = (input: string): string => {
      return input
        .replace(/[<>]/g, '') // Remove < and >
        .replace(/javascript:/gi, '') // Remove javascript: protocol
        .replace(/on\w+\s*=/gi, '') // Remove event handlers
        .trim();
    };

    // Override innerHTML to sanitize content
    const originalInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML')?.set;
    if (originalInnerHTML) {
      Object.defineProperty(Element.prototype, 'innerHTML', {
        set: function(value: string) {
          const sanitized = sanitizeInput(value);
          originalInnerHTML.call(this, sanitized);
        },
        configurable: true
      });
    }
  }, []);

  // Clickjacking protection
  const setupClickjackingProtection = useCallback(() => {
    // Check if page is being framed
    if (window !== window.top) {
      // Allow framing only from same origin
      if (window.location.origin !== window.top?.location.origin) {
        window.top.location = window.location;
      }
    }
  }, []);

  // Secure headers
  const setupSecureHeaders = useCallback(() => {
    const headers = [
      { name: 'X-Content-Type-Options', value: 'nosniff' },
      { name: 'X-Frame-Options', value: 'DENY' },
      { name: 'X-XSS-Protection', value: '1; mode=block' },
      { name: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { name: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      { name: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' }
    ];

    headers.forEach(header => {
      const meta = document.createElement('meta');
      meta.httpEquiv = header.name;
      meta.content = header.value;
      document.head.appendChild(meta);
    });
  }, []);

  // Input validation
  const setupInputValidation = useCallback(() => {
    const validateInput = (input: HTMLInputElement) => {
      const type = input.type;
      const value = input.value;

      switch (type) {
        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            input.setCustomValidity('Please enter a valid email address');
            return false;
          }
          break;
        case 'tel':
          const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
          if (!phoneRegex.test(value.replace(/\s/g, ''))) {
            input.setCustomValidity('Please enter a valid phone number');
            return false;
          }
          break;
        case 'url':
          try {
            new URL(value);
          } catch {
            input.setCustomValidity('Please enter a valid URL');
            return false;
          }
          break;
      }

      input.setCustomValidity('');
      return true;
    };

    // Add validation to all form inputs
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('blur', () => validateInput(input as HTMLInputElement));
      input.addEventListener('input', () => validateInput(input as HTMLInputElement));
    });
  }, []);

  // CSRF Protection
  const setupCSRFProtection = useCallback(() => {
    // Generate CSRF token
    const generateCSRFToken = (): string => {
      const array = new Uint8Array(32);
      crypto.getRandomValues(array);
      return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    };

    const token = generateCSRFToken();
    sessionStorage.setItem('csrf-token', token);

    // Add token to all forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      const tokenInput = document.createElement('input');
      tokenInput.type = 'hidden';
      tokenInput.name = 'csrf-token';
      tokenInput.value = token;
      form.appendChild(tokenInput);
    });
  }, []);

  // Secure cookie handling
  const setupSecureCookies = useCallback(() => {
    // Set secure cookie attributes
    const setSecureCookie = (name: string, value: string, days: number = 7) => {
      const expires = new Date();
      expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
      
      const secure = location.protocol === 'https:' ? '; Secure' : '';
      const sameSite = '; SameSite=Strict';
      const httpOnly = '; HttpOnly';
      
      document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/${secure}${sameSite}${httpOnly}`;
    };

    // Expose secure cookie function
    (window as any).setSecureCookie = setSecureCookie;
  }, []);

  // Rate limiting for API calls
  const setupRateLimiting = useCallback(() => {
    const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
    const RATE_LIMIT = 100; // requests per minute
    const WINDOW_SIZE = 60000; // 1 minute

    const checkRateLimit = (key: string): boolean => {
      const now = Date.now();
      const record = rateLimitMap.get(key);

      if (!record || now > record.resetTime) {
        rateLimitMap.set(key, { count: 1, resetTime: now + WINDOW_SIZE });
        return true;
      }

      if (record.count >= RATE_LIMIT) {
        return false;
      }

      record.count++;
      return true;
    };

    // Override fetch to include rate limiting
    const originalFetch = window.fetch;
    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = typeof input === 'string' ? input : input.toString();
      const key = `api:${url}`;

      if (!checkRateLimit(key)) {
        throw new Error('Rate limit exceeded');
      }

      return originalFetch(input, init);
    };
  }, []);

  // Initialize security features
  useEffect(() => {
    setupCSP();
    setupXSSProtection();
    setupClickjackingProtection();
    setupSecureHeaders();
    setupInputValidation();
    setupCSRFProtection();
    setupSecureCookies();
    setupRateLimiting();

    // Security monitoring
    const securityMonitor = () => {
      // Monitor for suspicious activity
      const suspiciousPatterns = [
        /<script/i,
        /javascript:/i,
        /on\w+\s*=/i,
        /eval\s*\(/i,
        /expression\s*\(/i
      ];

      const checkForSuspiciousContent = () => {
        const allText = document.body.innerText;
        suspiciousPatterns.forEach(pattern => {
          if (pattern.test(allText)) {
            console.warn('Suspicious content detected:', pattern);
          }
        });
      };

      checkForSuspiciousContent();
    };

    // Run security monitor periodically
    const interval = setInterval(securityMonitor, 30000); // Every 30 seconds

    return () => {
      clearInterval(interval);
    };
  }, [
    setupCSP,
    setupXSSProtection,
    setupClickjackingProtection,
    setupSecureHeaders,
    setupInputValidation,
    setupCSRFProtection,
    setupSecureCookies,
    setupRateLimiting
  ]);

  return <>{children}</>;
};

export default SecurityEnhancer;
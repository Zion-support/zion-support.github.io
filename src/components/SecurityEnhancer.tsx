import React, { useEffect } from 'react';

const SecurityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add Content Security Policy
    const addCSP = () => {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Content-Security-Policy';
      meta.content = `
        default-src 'self';
        script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://cdn.gpteng.co;
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
        img-src 'self' data: https:;
        font-src 'self' https://fonts.gstatic.com;
        connect-src 'self' https:;
        frame-ancestors 'none';
        base-uri 'self';
        form-action 'self';
        upgrade-insecure-requests;
      `.replace(/\s+/g, ' ').trim();
      document.head.appendChild(meta);
    };

    // Add security headers
    const addSecurityHeaders = () => {
      // X-Frame-Options
      const frameOptions = document.createElement('meta');
      frameOptions.httpEquiv = 'X-Frame-Options';
      frameOptions.content = 'DENY';
      document.head.appendChild(frameOptions);

      // X-Content-Type-Options
      const contentTypeOptions = document.createElement('meta');
      contentTypeOptions.httpEquiv = 'X-Content-Type-Options';
      contentTypeOptions.content = 'nosniff';
      document.head.appendChild(contentTypeOptions);

      // X-XSS-Protection
      const xssProtection = document.createElement('meta');
      xssProtection.httpEquiv = 'X-XSS-Protection';
      xssProtection.content = '1; mode=block';
      document.head.appendChild(xssProtection);

      // Referrer-Policy
      const referrerPolicy = document.createElement('meta');
      referrerPolicy.name = 'referrer-policy';
      referrerPolicy.content = 'strict-origin-when-cross-origin';
      document.head.appendChild(referrerPolicy);

      // Permissions-Policy
      const permissionsPolicy = document.createElement('meta');
      permissionsPolicy.httpEquiv = 'Permissions-Policy';
      permissionsPolicy.content = 'camera=(), microphone=(), geolocation=()';
      document.head.appendChild(permissionsPolicy);
    };

    // Sanitize user input
    const sanitizeInput = (input: string): string => {
      const div = document.createElement('div');
      div.textContent = input;
      return div.innerHTML;
    };

    // Add input sanitization to forms
    const addInputSanitization = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach((form) => {
        form.addEventListener('submit', (event) => {
          const inputs = form.querySelectorAll('input, textarea, select');
          inputs.forEach((input) => {
            if (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement) {
              input.value = sanitizeInput(input.value);
            }



    };

    // Add rate limiting for form submissions
    const addRateLimiting = () => {
      const formSubmissions = new Map<string, number>();
      const RATE_LIMIT_WINDOW = 60000; // 1 minute
      const MAX_SUBMISSIONS = 5; // 5 submissions per minute

      document.addEventListener('submit', (event) => {
        const form = event.target as HTMLFormElement;
        const formId = form.id || form.className || 'default';
        const now = Date.now();

        // Clean old entries
        for (const [key, timestamp] of formSubmissions.entries()) {
          if (now - timestamp > RATE_LIMIT_WINDOW) {
            formSubmissions.delete(key);
          }
        }

        // Check rate limit
        const submissions = Array.from(formSubmissions.values())
          .filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW).length;

        if (submissions >= MAX_SUBMISSIONS) {
          event.preventDefault();
          alert('Too many submissions. Please wait before submitting again.');
          return;
        }

        // Record submission
        formSubmissions.set(formId, now);

    };

    // Add CSRF protection
    const addCSRFProtection = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach((form) => {
        if (!form.querySelector('input[name="_csrf"]')) {
          const csrfToken = document.createElement('input');
          csrfToken.type = 'hidden';
          csrfToken.name = '_csrf';
          csrfToken.value = generateCSRFToken();
          form.appendChild(csrfToken);
        }

    };

    // Generate CSRF token
    const generateCSRFToken = (): string => {
      const array = new Uint8Array(32);
      crypto.getRandomValues(array);
      return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    };

    // Add clickjacking protection
    const addClickjackingProtection = () => {
      // Check if page is in iframe
      if (window !== window.top) {
        // Redirect to main page if in iframe
        window.top.location.href = window.location.href;
      }
    };

    // Add secure cookie handling
    const addSecureCookieHandling = () => {
      // Override document.cookie to ensure secure cookies
      const originalCookie = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie') ||
                           Object.getOwnPropertyDescriptor(HTMLDocument.prototype, 'cookie');

      if (originalCookie) {
        Object.defineProperty(document, 'cookie', {
          get: originalCookie.get,
          set: function(value: string) {
            // Ensure cookies are secure in production
            if (location.protocol === 'https:') {
              if (!value.includes('Secure')) {
                value += '; Secure';
              }
            }
            if (!value.includes('SameSite')) {
              value += '; SameSite=Strict';
            }
            originalCookie.set?.call(this, value);
          }

      }
    };

    // Add security event logging
    const addSecurityLogging = () => {
      // Log security events
      const logSecurityEvent = (event: string, details: any) => {
        // Send to security monitoring service if available
        if (window.gtag) {
          window.gtag('event', 'security_event', {
            event_category: 'Security',
            event_label: event,
            value: 1

        }
      };

      // Monitor for suspicious activity
      let suspiciousActivity = 0;
      const SUSPICIOUS_THRESHOLD = 10;

      document.addEventListener('click', () => {
        suspiciousActivity++;
        if (suspiciousActivity > SUSPICIOUS_THRESHOLD) {
          logSecurityEvent('High Click Rate', { count: suspiciousActivity });
        }

      // Monitor for form tampering
      document.addEventListener('input', (event) => {
        const target = event.target as HTMLInputElement;
        if (target.type === 'hidden' && target.name === '_csrf') {
          logSecurityEvent('CSRF Token Tampering', {
            form: target.closest('form')?.id || 'unknown'

        }

    };

    // Initialize security enhancements
    addCSP();
    addSecurityHeaders();
    addInputSanitization();
    addRateLimiting();
    addCSRFProtection();
    addClickjackingProtection();
    addSecureCookieHandling();
    addSecurityLogging();

    // Cleanup function
    return () => {
      // Cleanup any event listeners or observers
    };
  }, []);

  // Monitor for suspicious code and network requests
  useEffect(() => {
    checkSuspiciousCode();

    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      const url = args[0] as string;

      if (typeof url === 'string' && !validateURL(url)) {
        setMetrics(prev => ({ ...prev, suspiciousActivity: prev.suspiciousActivity + 1 }));
        logger.warn('Suspicious network request blocked', { url });
        throw new Error('Suspicious network request blocked');
      }

      return originalFetch.apply(window, args);
    };

    // Cleanup function
    return () => {
      window.fetch = originalFetch;
    };
  }, [validateURL]);

  // Security headers validation
  const validateSecurityHeaders = useCallback(() => {
    if (typeof window === 'undefined') return;

    const warnings: string[] = [];

    // Check for HTTPS
    if (location.protocol !== 'https:') {
      warnings.push('Site is not served over HTTPS');
      setIsSecure(false);
    }

    // Check for security headers (if available)
    const headers = (window as any).securityHeaders;
    if (headers) {
      if (!headers['x-frame-options']) {
        warnings.push('X-Frame-Options header missing');
      }
      if (!headers['x-content-type-options']) {
        warnings.push('X-Content-Type-Options header missing');
      }
      if (!headers['x-xss-protection']) {
        warnings.push('X-XSS-Protection header missing');
      }
    }

    setSecurityWarnings(warnings);

    if (warnings.length > 0) {
      logger.warn('Security warnings detected', { warnings });
    }
  }, []);

  // Rate limiting
  const rateLimit = useCallback((key: string, limit: number, windowMs: number) => {
    const now = Date.now();
    const windowStart = now - windowMs;

    const requests = JSON.parse(localStorage.getItem(`rate_limit_${key}`) || '[]')
      .filter((timestamp: number) => timestamp > windowStart);

    if (requests.length >= limit) {
      logger.warn('Rate limit exceeded', { key, limit, windowMs });
      return false;
    }

    requests.push(now);
    localStorage.setItem(`rate_limit_${key}`, JSON.stringify(requests));
    return true;
  }, []);

  // Initialize security monitoring
  useEffect(() => {
    monitorCSP();
    monitorSuspiciousActivity();
    validateSecurityHeaders();

    // Set up periodic security checks
    const interval = setInterval(() => {
      validateSecurityHeaders();
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, [monitorCSP, monitorSuspiciousActivity, validateSecurityHeaders]);

  // Security event handlers
  const handleSecurityEvent = useCallback((event: string, data: any) => {
    logger.info('Security event', { event, data });

    // Rate limit security events
    if (!rateLimit('security_events', 10, 60000)) {
      return;
    }

    // Send to security monitoring service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'security_event', {
        event_category: 'Security',
        event_label: event,
        custom_map: data,

    }
  }, [rateLimit]);

  // Expose security utilities globally for debugging
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).securityUtils = {
        sanitizeInput,
        validateURL,
        rateLimit,
        metrics,
        isSecure,
        warnings: securityWarnings,
      };
    }
  }, [sanitizeInput, validateURL, rateLimit, metrics, isSecure, securityWarnings]);

  return (
    <>
      {/* Security Status Indicator */}
      {!isSecure && (
        <div className="fixed top-0 left-0 right-0 bg-red-600 text-white text-center py-2 z-50">
          ⚠️ Security Warning: This site is not served over HTTPS
        </div>
      )}

      {/* Security Warnings */}
      {securityWarnings.length > 0 && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-600 text-white p-3 rounded-lg shadow-lg z-50 max-w-md">
          <h4 className="font-bold mb-2">Security Warnings</h4>
          <ul className="text-sm space-y-1">
            {securityWarnings.map((warning, index) => (
              <li key={index}>• {warning}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Security Metrics (Development Only) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 left-4 bg-gray-900 text-white p-3 rounded-lg shadow-lg z-40 text-xs">
          <h4 className="font-bold mb-2">Security Metrics</h4>
          <div className="space-y-1">
            <div>CSP Violations: {metrics.cspViolations}</div>
            <div>XSS Attempts: {metrics.xssAttempts}</div>
            <div>CSRF Attempts: {metrics.csrfAttempts}</div>
            <div>Suspicious Activity: {metrics.suspiciousActivity}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default SecurityEnhancer;
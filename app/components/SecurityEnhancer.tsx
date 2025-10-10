'use client';
<<<<<<< HEAD
import React, { useEffect } from 'react';

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
  useEffect(() => {
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
        "form-action 'self'"
      ].join('; ');
      document.head.appendChild(cspMeta);
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

    // Additional security headers
    const securityHeaders = [
      { httpEquiv: 'X-Content-Type-Options', content: 'nosniff' },
      { httpEquiv: 'Referrer-Policy', content: 'strict-origin-when-cross-origin' },
      { httpEquiv: 'Permissions-Policy', content: 'camera=(), microphone=(), geolocation=()' }
    ];

    securityHeaders.forEach(header => {
      const meta = document.createElement('meta');
      meta.httpEquiv = header.httpEquiv;
      meta.content = header.content;
      document.head.appendChild(meta);
    });

    // Secure cookie handling
    const secureCookies = () => {
      // Override document.cookie to ensure secure flags
      const originalCookieDescriptor = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie') || Object.getOwnPropertyDescriptor(HTMLDocument.prototype, 'cookie');
      
      if (originalCookieDescriptor) {
        Object.defineProperty(document, 'cookie', {
          get: originalCookieDescriptor.get,
          set: function(value: string) {
            // Add secure and SameSite flags if not present
            if (value && !value.includes('Secure') && window.location.protocol === 'https:') {
              value += '; Secure';
            }
            if (value && !value.includes('SameSite')) {
              value += '; SameSite=Strict';
            }
            return originalCookieDescriptor.set?.call(this, value);
          },
          configurable: true
        });
      }
    };

    secureCookies();

    // Input sanitization for forms
    const sanitizeInputs = () => {
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        input.addEventListener('input', (event) => {
          const target = event.target as HTMLInputElement;
          // Basic XSS prevention
          target.value = target.value.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
          target.value = target.value.replace(/javascript:/gi, '');
          target.value = target.value.replace(/on\w+\s*=/gi, '');
        });
      });
    };

    // Run sanitization after DOM updates
    const observer = new MutationObserver(() => {
      sanitizeInputs();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Initial sanitization
    sanitizeInputs();

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [enableCSP, enableHSTS, enableXSSProtection, enableClickjackingProtection]);

  return null;
=======

import React, { useEffect, useCallback, useState } from 'react';
import { logger } from '../utils/logger';

interface SecurityMetrics {
  cspViolations: number;,
    xssAttempts: number;
  csrfAttempts: number;,
    suspiciousActivity: number;
}

export const SecurityEnhancer: React.FC = () => {,
  const [metrics, setMetrics] = useState<SecurityMetrics>({
<<<<<<< HEAD
    cspViolations: 0,
    xssAttempts: 0,
    csrfAttempts: 0,
    suspiciousActivity: 0,
</SecurityMetrics>
  const [isSecure, setIsSecure] = useState(true);</SecurityMetrics>
=======
    cspViolations: 0;
    xssAttempts: 0;
    csrfAttempts: 0;
    suspiciousActivity: 0;
  const [isSecure, setIsSecure] = useState(true);
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
  const [securityWarnings, setSecurityWarnings] = useState<string[]>([]);

  // Content Security Policy monitoring;
  const monitorCSP = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Monitor CSP violations;
    const originalConsoleError = console.error;
    console.error = (...args) => {
      const message = args.join(' ');
      if (message.includes('Content Security Policy') || message.includes('CSP')) {
        setMetrics(prev => ({ ...prev, cspViolations: prev.cspViolations + 1 }));
        logger.warn('CSP violation detected', { message });
      }
      originalConsoleError.apply(console, args);
    };

    // Monitor for XSS attempts;
    const checkForXSS = () => {
      const scripts = document.querySelectorAll('script');
      scripts.forEach(script => {)
<<<<<<< HEAD
    if (script.src && !script.src.startsWith(window.location.origin)) {
=======
        if (script.src && !script.src.startsWith(window.location.origin)) {
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
          setMetrics(prev => ({ ...prev, xssAttempts: prev.xssAttempts + 1 }));
          logger.warn('Potential XSS attempt detected', { src: script.src });
        }

    };

    checkForXSS();

    // Monitor form submissions for CSRF;
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {)
<<<<<<< HEAD
    form.addEventListener('submit', (e) => {
=======
      form.addEventListener('submit', (e) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
        const formData = new FormData(form as HTMLFormElement);
        const token = formData.get('csrf_token');

        if (!token) {
          setMetrics(prev => ({ ...prev, csrfAttempts: prev.csrfAttempts + 1 }));
          logger.warn('Potential CSRF attempt detected', { form: form.id });
        }


  }, []);

<<<<<<< HEAD
  // Input sanitization
  const sanitizeInput = useCallback((input: string): string => {</string>
    return input</string>
=======
  // Input sanitization;
  const sanitizeInput = useCallback((input: string): string => {,
    return input;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '');
  }, []);

  // Validate URLs;
  const validateURL = useCallback((url: string): boolean => {,
    try {,
      const urlObj = new URL(url);
      const allowedProtocols = ['http:', 'https: '];
      const allowedHosts = ['ziontechgroup.com', 'www.ziontechgroup.com'];

      return allowedProtocols.includes(urlObj.protocol) &&
             allowedHosts.includes(urlObj.hostname);
    } catch {
      return false;
    }
  }, []);

  // Monitor suspicious activity;
  const monitorSuspiciousActivity = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Monitor for suspicious patterns;
    const suspiciousPatterns = [
      /eval\s*\(/gi,
      /Function\s*\(/gi,
      /setTimeout\s*\(\s*["']/gi,
      /setInterval\s*\(\s*["']/gi,
      /document\.write/gi,
      /innerHTML\s*=/gi,
    ];

    const checkSuspiciousCode = () => {
      const scripts = document.querySelectorAll('script');
<<<<<<< HEAD
      scripts.forEach(script => {
        const content = script.textContent || '';
        suspiciousPatterns.forEach(pattern => {)
    if (pattern.test(content)) {
            setMetrics(prev => ({ ...prev, suspiciousActivity: prev.suspiciousActivity + 1 }));
            logger.warn('Suspicious code pattern detected', {)
    pattern: pattern.toString(),
              script: script.id || 'inline'

=======
      scripts.forEach(script => {)
        const content = script.textContent || '';)
        suspiciousPatterns.forEach(pattern => {)
          if (pattern.test(content)) {
            setMetrics(prev => ({ ...prev, suspiciousActivity: prev.suspiciousActivity + 1 }));
            logger.warn('Suspicious code pattern detected', {)
              pattern: pattern.toString(),
              script: script.id || 'inline',
,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
          }


    };

    checkSuspiciousCode();

    // Monitor for unusual network requests;
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

  }, [validateURL]);

  // Security headers validation;
  const validateSecurityHeaders = useCallback(() => {
    if (typeof window === 'undefined') return;

    const warnings: string[] = [];

    // Check for HTTPS;
    if (location.protocol !== 'https:') {,
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

  // Rate limiting;
  const rateLimit = useCallback((key: string, limit: number, windowMs: number) => {
    const now = Date.now();
    const windowStart = now - windowMs;
,
    const requests = JSON.parse(localStorage.getItem(`rate_limit_${key}`) || '[]')
      .filter((timestamp: number) => timestamp > windowStart);
,
    if (requests.length >= limit) {,
      logger.warn('Rate limit exceeded', { key, limit, windowMs });
      return false;
    }

    requests.push(now);
    localStorage.setItem(`rate_limit_${key}`, JSON.stringify(requests));
    return true;
  }, []);

  // Initialize security monitoring;
  useEffect(() => {
    monitorCSP();
    monitorSuspiciousActivity();
    validateSecurityHeaders();

    // Set up periodic security checks;
    const interval = setInterval(() => {
      validateSecurityHeaders();
    }, 30000); // Check every 30 seconds;
    return () => clearInterval(interval);
  }, [monitorCSP, monitorSuspiciousActivity, validateSecurityHeaders]);

  // Security event handlers;
  const handleSecurityEvent = useCallback((event: string, data: any) => {,
    logger.info('Security event', { event, data });

    // Rate limit security events;
    if (!rateLimit('security_events', 10, 60000)) {
      return;
    }

    // Send to security monitoring service;
    if (typeof window !== 'undefined' && 'gtag' in window) {
<<<<<<< HEAD
      (window as any).gtag('event', 'security_event', {
        event_category: 'Security',
        event_label: event,)
    custom_map: data,

=======
      (window as any).gtag('event', 'security_event', {)
        event_category: 'Security',)
        event_label: event),
        custom_map: data),
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
    }
  }, [rateLimit]);

  // Expose security utilities globally for debugging;
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).securityUtils = {
        sanitizeInput,
        validateURL,
        rateLimit,
        metrics,
        isSecure,
        warnings: securityWarnings;
      };
    }
  }, [sanitizeInput, validateURL, rateLimit, metrics, isSecure, securityWarnings]);

<<<<<<< HEAD
  return (
    <>
      {/* Security Status Indicator */}
      {!isSecure && (
        <div className="fixed top-0 left-0 right-0 bg-red-600 text-white text-center py-2 z-50">⚠️ Security Warning: This site is not served over HTTPS</div>
        </div>
=======
  return(<>)
      {/* Security Status Indicator */})
      {!isSecure && ()
        <div className="fixed top-0 left-0 right-0 bg-red-600 text-white text-center py-2 z-50">)
          ⚠️ Security Warning: This site is not served over HTTPS;),
        </div>),
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
      )}

      {/* Security Warnings */}
      {securityWarnings.length > 0 && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-600 text-white p-3 rounded-lg shadow-lg z-50 max-w-md"></div>
          <h4 className="font-bold mb-2">Security Warnings<ul className="text-sm space-y-1">{securityWarnings.map((warning, index) => (<li key={index}>• {warning}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Security Metrics (Development Only) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 left-4 bg-gray-900 text-white p-3 rounded-lg shadow-lg z-40 text-xs"></div>
          <h4 className="font-bold mb-2">Security Metrics</h4>
          <div className="space-y-1"></div>
            <div>CSP Violations: {metrics.cspViolations}</div><div>XSS Attempts: {metrics.xssAttempts}</div>
            <div>CSRF Attempts: {metrics.csrfAttempts}</div><div>Suspicious Activity: {metrics.suspiciousActivity}</div>
          </div>
        </div>
      )}
    </>
  );
>>>>>>> origin/main
};

export default SecurityEnhancer;
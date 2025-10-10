'use client';

import React, { useEffect, useCallback, useState } from 'react';
import { logger } from '../utils/logger';

interface SecurityMetrics {
  cspViolations: number;
  xssAttempts: number;
  csrfAttempts: number;
  suspiciousActivity: number;
}

export const SecurityEnhancer: React.FC = () => {
  const [metrics, setMetrics] = useState<SecurityMetrics>({
    cspViolations: 0,
    xssAttempts: 0,
    csrfAttempts: 0,
    suspiciousActivity: 0,

  const [isSecure, setIsSecure] = useState(true);
  const [securityWarnings, setSecurityWarnings] = useState<string[]>([]);

  // Content Security Policy monitoring
  const monitorCSP = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Monitor CSP violations
    const originalConsoleError = console.error;
    console.error = (...args) => {
      const message = args.join(' ');
      if (message.includes('Content Security Policy') || message.includes('CSP')) {
        setMetrics(prev => ({ ...prev, cspViolations: prev.cspViolations + 1 }));
        logger.warn('CSP violation detected', { message });
      }
      originalConsoleError.apply(console, args);
    };

    // Monitor for XSS attempts
    const checkForXSS = () => {
      const scripts = document.querySelectorAll('script');
      scripts.forEach(script => {
        if (script.src && !script.src.startsWith(window.location.origin)) {
          setMetrics(prev => ({ ...prev, xssAttempts: prev.xssAttempts + 1 }));
          logger.warn('Potential XSS attempt detected', { src: script.src });
        }

    };

    checkForXSS();

    // Monitor form submissions for CSRF
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        const formData = new FormData(form as HTMLFormElement);
        const token = formData.get('csrf_token');

        if (!token) {
          setMetrics(prev => ({ ...prev, csrfAttempts: prev.csrfAttempts + 1 }));
          logger.warn('Potential CSRF attempt detected', { form: form.id });
        }


  }, []);

  // Input sanitization
  const sanitizeInput = useCallback((input: string): string => {
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '');
  }, []);

  // Validate URLs
  const validateURL = useCallback((url: string): boolean => {
    try {
      const urlObj = new URL(url);
      const allowedProtocols = ['http:', 'https:'];
      const allowedHosts = ['ziontechgroup.com', 'www.ziontechgroup.com'];

      return allowedProtocols.includes(urlObj.protocol) &&
             allowedHosts.includes(urlObj.hostname);
    } catch {
      return false;
    }
  }, []);

  // Monitor suspicious activity
  const monitorSuspiciousActivity = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Monitor for suspicious patterns
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
      scripts.forEach(script => {
        const content = script.textContent || '';
        suspiciousPatterns.forEach(pattern => {
          if (pattern.test(content)) {
            setMetrics(prev => ({ ...prev, suspiciousActivity: prev.suspiciousActivity + 1 }));
            logger.warn('Suspicious code pattern detected', {
              pattern: pattern.toString(),
              script: script.id || 'inline'

          }


    };

    checkSuspiciousCode();

    // Monitor for unusual network requests
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
        custom_map: data}
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
        warnings: securityWarnings};
    }
  }, [sanitizeInput, validateURL, rateLimit, metrics, isSecure, securityWarnings]);

  return (
    <>
      {/* Security Status Indicator */}
      {!isSecure && (
        <div className="fixed top-0 left-0 right-0 bg-red-600 text-white text-center py-2 z-50">
          alert-triangle Security Warning: This site is not served over HTTPS
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
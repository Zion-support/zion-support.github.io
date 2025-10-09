'use client';

import React, { useState, useEffect, useCallback } from 'react';

interface SecurityEnhancerProps {
  enableCSP?: boolean;
  enableHTTPSRedirect?: boolean;
  enableXSSProtection?: boolean;
  enableClickjackingProtection?: boolean;
  enableContentTypeSniffingProtection?: boolean;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({
  enableCSP = true,
  enableHTTPSRedirect = true,
  enableXSSProtection = true,
  enableClickjackingProtection = true,
  enableContentTypeSniffingProtection = true
}) => {
  const [isSecure, setIsSecure] = useState(true);
  const [securityWarnings, setSecurityWarnings] = useState<string[]>([]);
  const [metrics, setMetrics] = useState({
    cspViolations: 0,
    xssAttempts: 0,
    csrfAttempts: 0,
    suspiciousActivity: 0
  });

  const logger = {
    info: (message: string, data?: any) => console.log(`[Security] ${message}`, data),
    warn: (message: string, data?: any) => console.warn(`[Security] ${message}`, data),
    error: (message: string, data?: any) => console.error(`[Security] ${message}`, data)
  };

  const sanitizeInput = useCallback((input: string): string => {
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '');
  }, []);

  const validateURL = useCallback((url: string): boolean => {
    try {
      const urlObj = new URL(url);
      const allowedProtocols = ['http:', 'https:'];
      const allowedHosts = ['ziontechgroup.com', 'www.ziontechgroup.com'];
      
      return allowedProtocols.includes(urlObj.protocol) && 
             allowedHosts.some(host => urlObj.hostname === host);
    } catch {
      return false;
    }
  }, []);

  const addContentSecurityPolicy = () => {
    if (typeof window === 'undefined') return;
    
    const csp = "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-ancestors 'none';";
    
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = csp;
    document.head.appendChild(meta);
  };

  const enforceHTTPS = () => {
    if (typeof window === 'undefined') return;
    
    if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
      location.replace('https:' + window.location.href.substring(window.location.protocol.length));
    }
  };

  const addXSSProtection = () => {
    if (typeof window === 'undefined') return;
    
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-XSS-Protection';
    meta.content = '1; mode=block';
    document.head.appendChild(meta);
  };

  const addClickjackingProtection = () => {
    if (typeof window === 'undefined') return;
    
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-Frame-Options';
    meta.content = 'DENY';
    document.head.appendChild(meta);
  };

  const addContentTypeSniffingProtection = () => {
    if (typeof window === 'undefined') return;
    
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-Content-Type-Options';
    meta.content = 'nosniff';
    document.head.appendChild(meta);
  };

  const addSecurityHeaders = () => {
    if (typeof window === 'undefined') return;
    
    const headers = [
      { name: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { name: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()' },
      { name: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' }
    ];

    headers.forEach(header => {
      const meta = document.createElement('meta');
      meta.httpEquiv = header.name;
      meta.content = header.value;
      document.head.appendChild(meta);
    });
  };

  const addSecurityEventListeners = () => {
    if (typeof window === 'undefined') return;
    
    // Monitor CSP violations
    document.addEventListener('securitypolicyviolation', (e) => {
      setMetrics(prev => ({ ...prev, cspViolations: prev.cspViolations + 1 }));
      logger.warn('CSP violation detected', { 
        violatedDirective: e.violatedDirective,
        blockedURI: e.blockedURI 
      });
    });

    // Prevent text selection (optional)
    document.addEventListener('selectstart', (e) => {
      e.preventDefault();
    });

    // Prevent drag and drop
    document.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    document.addEventListener('drop', (e) => {
      e.preventDefault();
    });

    // Prevent F12, Ctrl+Shift+I, Ctrl+U, etc.
    document.addEventListener('keydown', (e) => {
      if (e.key === 'F12') {
        e.preventDefault();
      }
      // Ctrl+Shift+I
      if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
      }
      // Ctrl+U
      if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
      }
      // Ctrl+S
      if (e.ctrlKey && e.keyCode === 83) {
        e.preventDefault();
      }
      // Ctrl+A
      if (e.ctrlKey && e.keyCode === 65) {
        e.preventDefault();
      }
    });

    // Monitor for suspicious activity
    let suspiciousActivity = 0;
    const resetSuspiciousActivity = () => {
      suspiciousActivity = 0;
    };

    // Reset suspicious activity counter every 5 minutes
    setInterval(resetSuspiciousActivity, 5 * 60 * 1000);

    // Track rapid clicks (potential bot activity)
    let clickCount = 0;
    document.addEventListener('click', () => {
      clickCount++;
      if (clickCount > 10) {
        setMetrics(prev => ({ ...prev, suspiciousActivity: prev.suspiciousActivity + 1 }));
        clickCount = 0;
      }
    });

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
      });
    });

    // Track rapid keyboard input
    let keyCount = 0;
    document.addEventListener('keydown', () => {
      keyCount++;
      if (keyCount > 50) {
        setMetrics(prev => ({ ...prev, suspiciousActivity: prev.suspiciousActivity + 1 }));
        keyCount = 0;
      }
    });

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
  };

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
    if (enableCSP) addContentSecurityPolicy();
    if (enableHTTPSRedirect) enforceHTTPS();
    if (enableXSSProtection) addXSSProtection();
    if (enableClickjackingProtection) addClickjackingProtection();
    if (enableContentTypeSniffingProtection) addContentTypeSniffingProtection();
    
    addSecurityHeaders();
    addSecurityEventListeners();
    validateSecurityHeaders();

    // Set up periodic security checks
    const interval = setInterval(() => {
      validateSecurityHeaders();
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, [enableCSP, enableHTTPSRedirect, enableXSSProtection, enableClickjackingProtection, enableContentTypeSniffingProtection, validateSecurityHeaders]);

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
      });
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
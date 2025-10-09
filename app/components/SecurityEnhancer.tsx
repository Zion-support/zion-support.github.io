'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface SecurityEnhancerProps {
  enableCSP?: boolean;
  enableHTTPSRedirect?: boolean;
  enableXSSProtection?: boolean;
  enableClickjackingProtection?: boolean;
  enableContentTypeSniffingProtection?: boolean;
}

interface SecurityMetrics {
  cspViolations: number;
  xssAttempts: number;
  csrfAttempts: number;
  suspiciousActivity: number;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({
  enableCSP = true,
  enableHTTPSRedirect = true,
  enableXSSProtection = true,
  enableClickjackingProtection = true,
  enableContentTypeSniffingProtection = true
}) => {
  const [metrics, setMetrics] = useState<SecurityMetrics>({
    cspViolations: 0,
    xssAttempts: 0,
    csrfAttempts: 0,
    suspiciousActivity: 0
  });
  const [isSecure, setIsSecure] = useState(true);
  const [securityWarnings, setSecurityWarnings] = useState<string[]>([]);

  useEffect(() => {
    if (enableCSP) {
      addContentSecurityPolicy();
    }
    
    if (enableHTTPSRedirect) {
      enforceHTTPS();
    }
    
    if (enableXSSProtection) {
      addXSSProtection();
    }
    
    if (enableClickjackingProtection) {
      addClickjackingProtection();
    }
    
    if (enableContentTypeSniffingProtection) {
      addContentTypeSniffingProtection();
    }
    
    // Add security headers
    addSecurityHeaders();
    
    // Add security event listeners
    addSecurityEventListeners();
  }, [enableCSP, enableHTTPSRedirect, enableXSSProtection, enableClickjackingProtection, enableContentTypeSniffingProtection]);

  const addContentSecurityPolicy = () => {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self';";
    document.head.appendChild(meta);
  };

  const enforceHTTPS = () => {
    if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
      location.replace('https:' + window.location.href.substring(window.location.protocol.length));
    }
  };

  const addXSSProtection = () => {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-XSS-Protection';
    meta.content = '1; mode=block';
    document.head.appendChild(meta);
  };

  const addClickjackingProtection = () => {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-Frame-Options';
    meta.content = 'DENY';
    document.head.appendChild(meta);
  };

  const addContentTypeSniffingProtection = () => {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-Content-Type-Options';
    meta.content = 'nosniff';
    document.head.appendChild(meta);
  };

  const addSecurityHeaders = () => {
    const headers = [
      { name: 'Referrer-Policy', content: 'strict-origin-when-cross-origin' },
      { name: 'Permissions-Policy', content: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()' },
      { name: 'Strict-Transport-Security', content: 'max-age=63072000; includeSubDomains; preload' }
    ];

    headers.forEach(header => {
      const meta = document.createElement('meta');
      meta.httpEquiv = header.name;
      meta.content = header.content;
      document.head.appendChild(meta);
    });
  };

  const addSecurityEventListeners = () => {
    // Prevent right-click context menu
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
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
      // F12
      if (e.keyCode === 123) {
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
          console.warn('Potential CSRF attempt detected', { form: form.id });
        }
      });
    });

    // Track rapid keyboard input
    let keyCount = 0;
    document.addEventListener('keydown', () => {
      keyCount++;
      if (keyCount > 100) {
        setMetrics(prev => ({ ...prev, suspiciousActivity: prev.suspiciousActivity + 1 }));
        keyCount = 0;
      }
    });
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
      console.warn('Security warnings detected', { warnings });
    }
  }, []);

  // Rate limiting
  const rateLimit = useCallback((key: string, limit: number, windowMs: number) => {
    const now = Date.now();
    const windowStart = now - windowMs;
    
    const requests = JSON.parse(localStorage.getItem(`rate_limit_${key}`) || '[]')
      .filter((timestamp: number) => timestamp > windowStart);
    
    if (requests.length >= limit) {
      console.warn('Rate limit exceeded', { key, limit, windowMs });
      return false;
    }
    
    requests.push(now);
    localStorage.setItem(`rate_limit_${key}`, JSON.stringify(requests));
    return true;
  }, []);

  // Initialize security monitoring
  useEffect(() => {
    validateSecurityHeaders();

    // Set up periodic security checks
    const interval = setInterval(() => {
      validateSecurityHeaders();
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, [validateSecurityHeaders]);

  // Security event handlers
  const handleSecurityEvent = useCallback((event: string, data: any) => {
    console.log('Security event', { event, data });
    
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
        metrics,
        isSecure,
        warnings: securityWarnings,
      };
    }
  }, [metrics, isSecure, securityWarnings]);

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
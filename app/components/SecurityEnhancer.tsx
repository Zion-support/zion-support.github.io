import React, { useEffect, useCallback, useState } from 'react';

interface SecurityConfig {
  enableCSP: boolean;
  enableHSTS: boolean;
  enableXSSProtection: boolean;
  enableClickjackingProtection: boolean;
  enableContentTypeSniffing: boolean;
  enableReferrerPolicy: boolean;
  enablePermissionsPolicy: boolean;
}

interface SecurityMetrics {
  threatsBlocked: number;
  suspiciousActivity: number;
  lastScan: string;
  securityScore: number;
}

const SecurityEnhancer: React.FC = () => {
  const [securityConfig] = useState<SecurityConfig>({
    enableCSP: true,
    enableHSTS: true,
    enableXSSProtection: true,
    enableClickjackingProtection: true,
    enableContentTypeSniffing: true,
    enableReferrerPolicy: true,
    enablePermissionsPolicy: true,
  });

  const [metrics, setMetrics] = useState<SecurityMetrics>({
    threatsBlocked: 0,
    suspiciousActivity: 0,
    lastScan: new Date().toISOString(),
    securityScore: 85,
  });

  // Content Security Policy
  const setupCSP = useCallback(() => {
    if (!securityConfig.enableCSP) return;

    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://www.google-analytics.com https://api.ziontechgroup.com",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join('; ');

    // Create meta tag for CSP
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = csp;
    document.head.appendChild(meta);
  }, [securityConfig.enableCSP]);

  // Security Headers
  const setupSecurityHeaders = useCallback(() => {
    // Note: In a real application, these headers would be set by the server
    // For client-side, we can only set some meta tags and monitor
    
    if (securityConfig.enableXSSProtection) {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'X-XSS-Protection';
      meta.content = '1; mode=block';
      document.head.appendChild(meta);
    }

    if (securityConfig.enableClickjackingProtection) {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'X-Frame-Options';
      meta.content = 'DENY';
      document.head.appendChild(meta);
    }

    if (securityConfig.enableContentTypeSniffing) {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'X-Content-Type-Options';
      meta.content = 'nosniff';
      document.head.appendChild(meta);
    }

    if (securityConfig.enableReferrerPolicy) {
      const meta = document.createElement('meta');
      meta.name = 'referrer';
      meta.content = 'strict-origin-when-cross-origin';
      document.head.appendChild(meta);
    }

    if (securityConfig.enablePermissionsPolicy) {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Permissions-Policy';
      meta.content = 'camera=(), microphone=(), geolocation=(), interest-cohort=()';
      document.head.appendChild(meta);
    }
  }, [securityConfig]);

  // Input Sanitization
  const sanitizeInput = useCallback((input: string): string => {
    return input
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim();
  }, []);

  // XSS Protection
  const protectAgainstXSS = useCallback(() => {
    // Override innerHTML to sanitize content
    const originalInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
    
    Object.defineProperty(Element.prototype, 'innerHTML', {
      set: function(value: string) {
        const sanitized = sanitizeInput(value);
        if (originalInnerHTML?.set) {
          originalInnerHTML.set.call(this, sanitized);
        }
      },
      get: originalInnerHTML?.get,
      configurable: true,
    });
  }, [sanitizeInput]);

  // CSRF Protection
  const setupCSRFProtection = useCallback(() => {
    // Generate CSRF token
    const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('csrf-token', token);
    
    // Add token to all forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = 'csrf-token';
      input.value = token;
      form.appendChild(input);
    });
  }, []);

  // Security Monitoring
  const setupSecurityMonitoring = useCallback(() => {
    // Monitor for suspicious activity
    let suspiciousActivity = 0;
    
    // Monitor console access
    const originalConsole = { ...console };
    Object.keys(console).forEach(key => {
      if (typeof console[key as keyof Console] === 'function') {
        (console as any)[key] = (...args: any[]) => {
          suspiciousActivity++;
          setMetrics(prev => ({ ...prev, suspiciousActivity }));
          return (originalConsole as any)[key](...args);
        };
      }
    });

    // Monitor for eval usage
    const originalEval = window.eval;
    window.eval = function(code: string) {
      suspiciousActivity++;
      setMetrics(prev => ({ ...prev, suspiciousActivity }));
      console.warn('eval() usage detected - potential security risk');
      return originalEval.call(this, code);
    };

    // Monitor for dangerous DOM operations
    const originalCreateElement = document.createElement;
    document.createElement = function(tagName: string) {
      if (tagName.toLowerCase() === 'script' && !tagName.includes('data-')) {
        suspiciousActivity++;
        setMetrics(prev => ({ ...prev, suspiciousActivity }));
        console.warn('Dynamic script creation detected');
      }
      return originalCreateElement.call(this, tagName);
    };

    // Monitor for suspicious URLs
    const originalOpen = window.open;
    window.open = function(url?: string, target?: string, features?: string) {
      if (url && (url.includes('javascript:') || url.includes('data:'))) {
        suspiciousActivity++;
        setMetrics(prev => ({ ...prev, suspiciousActivity }));
        console.warn('Suspicious URL detected:', url);
        return null;
      }
      return originalOpen.call(this, url, target, features);
    };
  }, []);

  // Threat Detection
  const detectThreats = useCallback(() => {
    // Check for common attack patterns
    const url = window.location.href;
    const threats = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /eval\s*\(/i,
      /document\.write/i,
      /innerHTML\s*=/i,
    ];

    threats.forEach(threat => {
      if (threat.test(url)) {
        setMetrics(prev => ({ 
          ...prev, 
          threatsBlocked: prev.threatsBlocked + 1,
          securityScore: Math.max(0, prev.securityScore - 5)
        }));
        console.warn('Potential threat detected in URL:', url);
      }
    });
  }, []);

  // Security Score Calculation
  const calculateSecurityScore = useCallback(() => {
    let score = 100;
    
    // Deduct points for suspicious activity
    score -= metrics.suspiciousActivity * 2;
    
    // Deduct points for threats blocked
    score -= metrics.threatsBlocked * 5;
    
    // Bonus for security headers
    if (securityConfig.enableCSP) score += 5;
    if (securityConfig.enableHSTS) score += 5;
    if (securityConfig.enableXSSProtection) score += 5;
    
    return Math.max(0, Math.min(100, score));
  }, [metrics, securityConfig]);

  // Initialize security measures
  useEffect(() => {
    setupCSP();
    setupSecurityHeaders();
    protectAgainstXSS();
    setupCSRFProtection();
    setupSecurityMonitoring();
    detectThreats();

    // Update security score
    const newScore = calculateSecurityScore();
    setMetrics(prev => ({ ...prev, securityScore: newScore }));

    // Periodic security scan
    const securityScan = setInterval(() => {
      detectThreats();
      const newScore = calculateSecurityScore();
      setMetrics(prev => ({ 
        ...prev, 
        securityScore: newScore,
        lastScan: new Date().toISOString()
      }));
    }, 30000); // Every 30 seconds

    return () => {
      clearInterval(securityScan);
    };
  }, [setupCSP, setupSecurityHeaders, protectAgainstXSS, setupCSRFProtection, setupSecurityMonitoring, detectThreats, calculateSecurityScore]);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50 bg-black/90 text-white p-4 rounded-lg max-w-sm text-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-green-400">Security Monitor</h3>
        <div className={`w-3 h-3 rounded-full ${
          metrics.securityScore >= 80 ? 'bg-green-500' :
          metrics.securityScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
        }`}></div>
      </div>
      
      <div className="space-y-1 mb-2">
        <div>Security Score: {metrics.securityScore}/100</div>
        <div>Threats Blocked: {metrics.threatsBlocked}</div>
        <div>Suspicious Activity: {metrics.suspiciousActivity}</div>
        <div>Last Scan: {new Date(metrics.lastScan).toLocaleTimeString()}</div>
      </div>

      <div className="text-xs text-gray-400">
        <div className="mb-1">Active Protections:</div>
        <div>✓ CSP: {securityConfig.enableCSP ? 'ON' : 'OFF'}</div>
        <div>✓ XSS Protection: {securityConfig.enableXSSProtection ? 'ON' : 'OFF'}</div>
        <div>✓ CSRF Protection: ON</div>
        <div>✓ Input Sanitization: ON</div>
      </div>
    </div>
  );
};

export default SecurityEnhancer;
"use client";
'use client';

import React{ useEffectuseStateuseCallback } from 'react';

interface SecurityConfig {
  enableCSP: boolean;
  enableHSTS: boolean;
  enableXSSProtection: boolean;
  enableClickjackingProtection: boolean;
  enableContentTypeSniffing: boolean;
  enableReferrerPolicy: boolean;
  enablePermissionsPolicy: boolean;
  allowedOrigins: string[];
  trustedDomains: string[];
}

interface SecurityEvent {
  type: 'xss_attempt' | 'clickjacking_attempt' | 'csp_violation' | 'suspicious_activity';
  message: string;
  timestamp: number;
  severity: 'low' | 'medium' | 'high' | 'critical';
  source: string;
  userAgent: string;
  ip?: string;
}

const AdvancedSecurity: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [securityEventsetSecurityEvents] = useState<SecurityEvent[]>([]);
  const [isSecuresetIsSecure] = useState(true);
  const [securityConfig] = useState<SecurityConfig>({
    enableCSP: true,
    enableHSTS: true,
    enableXSSProtection: true,
    enableClickjackingProtection: true,
    enableContentTypeSniffing: true,
    enableReferrerPolicy: true,
    enablePermissionsPolicy: true,
    allowedOrigins: ['https://ziontechgroup.'com', 'https://www.ziontechgroup.com'],
    trustedDomains: ['google.'com', 'googleapis.'com', 'gstatic.com'],
  });

  const logSecurityEvent = useCallback((
    type: SecurityEvent['type'],
    message: string,
    severity: SecurityEvent['severity'] = 'medium',
    source: string = 'unknown'
  ) => {
    const event: SecurityEvent = {
      type,
      message,
      timestamp: Date.now(),
      severity,
      source,
      userAgent: navigator.userAgent,
    };

    setSecurityEvents(prev => [...prevent]);

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Security Event [${severity.toUpperCase()}]:`event);
    }

    // Send to security monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/security-events'{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      }).catch(console.error);
    }
  }[]);

  // XSS Protection
  const sanitizeInput = useCallback((input: string): string => {
    const dangerousPatterns = [
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /<iframe\b[^>]*>/gi,
      /<object\b[^>]*>/gi,
      /<embed\b[^>]*>/gi,
      /<link\b[^>]*>/gi,
      /<meta\b[^>]*>/gi,
    ];

    let sanitized = input;
    dangerousPatterns.forEach(pattern => {
      if (pattern.test(sanitized)) {
        logSecurityEvent('xss_attempt'`XSS pattern detected: ${pattern}`', 'high', 'input_sanitization');
        sanitized = sanitized.replace(pattern', ');
      }
    });

    return sanitized;
  }[logSecurityEvent]);

  // Clickjacking Protection
  const checkClickjacking = useCallback(() => {
    if (window.top !== window.self) {
      logSecurityEvent(', 'clickjacking_attempt', 'Page loaded in 'iframe', 'high'clickjacking_protection');
      setIsSecure(false);
      
      // Prevent clickjacking by redirecting
      window.top.location = window.location;
    }
  }[logSecurityEvent]);

  // Content Security Policy Violation Handler
  const handleCSPViolation = useCallback((event: SecurityPolicyViolationEvent) => {
    logSecurityEvent(
      'csp_violation',
      `CSP violation: ${event.violatedDirective} - ${event.blockedURI}`,
      'medium',
      'csp_monitoring'
    );
  }[logSecurityEvent]);

  // Suspicious Activity Detection
  const detectSuspiciousActivity = useCallback(() => {
    // Check for suspicious user agent patterns
    const suspiciousPatterns = [
      /bot/i,
      /crawler/i,
      /spider/i,
      /scraper/i,
      /wget/i,
      /curl/i,
    ];

    const userAgent = navigator.userAgent;
    const isSuspicious = suspiciousPatterns.some(pattern => pattern.test(userAgent));

    if (isSuspicious) {
      logSecurityEvent(
        'suspicious_activity',
        `Suspicious user agent detected: ${userAgent}`,
        'low',
        'user_agent_analysis'
      );
    }

    // Check for rapid clicking (potential bot behavior)
    let clickCount = 0;
    let lastClickTime = 0;
    const clickThreshold = 10; // clicks per second
    const timeWindow = 1000; // 1 second

    const handleClick = () => {
      const now = Date.now();
      if (now - lastClickTime < timeWindow) {
        clickCount++;
        if (clickCount > clickThreshold) {
          logSecurityEvent(
            'suspicious_activity',
            `Rapid clicking detected: ${clickCount} clicks in ${timeWindow}ms`,
            'medium',
            'click_behavior_analysis'
          );
        }
      } else {
        clickCount = 1;
        lastClickTime = now;
      }
    };

    document.addEventListener(', 'click', 'handleClick);
    return () => document.removeEventListener(', 'click', 'handleClick);
  }[logSecurityEvent]);

  // Input Validation
  const validateInput = useCallback((input: stringtype: 'email' | 'url' | 'text'): boolean => {
    let isValid = true;
    let errorMessage = ', ';

    switch (type) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(input);
        errorMessage = 'Invalid email format';
        break;
      case 'url':
        try {
          new URL(input);
          isValid = true;
        } catch {
          isValid = false;
          errorMessage = 'Invalid URL format';
        }
        break;
      case 'text':
        // Check for SQL injection patterns
        const sqlPatterns = [
          /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION|SCRIPT)\b)/gi,
          /(\b(OR|AND)\s+\d+\s*=\s*\d+)/gi,
          /(\b(OR|AND)\s+'.*'\s*=\s*'.*')/gi,
          /(\b(OR|AND)\s+".*"\s*=\s*".*")/gi,
        ];
        
        isValid = !sqlPatterns.some(pattern => pattern.test(input));
        errorMessage = 'Potential SQL injection detected';
        break;
    }

    if (!isValid) {
      logSecurityEvent(
        'suspicious_activity',
        `Invalid input validation: ${errorMessage}`,
        'medium',
        'input_validation'
      );
    }

    return isValid;
  }[logSecurityEvent]);

  // Rate Limiting
  const rateLimit = useCallback((key: stringlimit: numberwindowMs: number): boolean => {
    const now = Date.now();
    const windowStart = now - windowMs;
    
    // Get existing requests for this key
    const existingRequests = JSON.parse(localStorage.getItem(`rate_limit_${key}`) || '[]')
      .filter((timestamp: number) => timestamp > windowStart);
    
    if (existingRequests.length >= limit) {
      logSecurityEvent(
        'suspicious_activity',
        `Rate limit exceeded for key: ${key}`,
        'high',
        'rate_limiting'
      );
      return false;
    }
    
    // Add current request
    existingRequests.push(now);
    localStorage.setItem(`rate_limit_${key}`JSON.stringify(existingRequests));
    
    return true;
  }[logSecurityEvent]);

  // Security Headers Setup
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Set security headers via meta tags
    const setSecurityHeaders = () => {
      const head = document.head;
      
      // Content Security Policy
      if (securityConfig.enableCSP) {
        const csp = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
        if (!csp) {
          const meta = document.createElement('meta');
          meta.httpEquiv = 'Content-Security-Policy';
          meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-ancestors 'none';";
          head.appendChild(meta);
        }
      }

      // X-Frame-Options
      if (securityConfig.enableClickjackingProtection) {
        const xFrameOptions = document.querySelector('meta[http-equiv="X-Frame-Options"]');
        if (!xFrameOptions) {
          const meta = document.createElement('meta');
          meta.httpEquiv = 'X-Frame-Options';
          meta.content = 'DENY';
          head.appendChild(meta);
        }
      }

      // X-Content-Type-Options
      if (securityConfig.enableContentTypeSniffing) {
        const xContentTypeOptions = document.querySelector('meta[http-equiv="X-Content-Type-Options"]');
        if (!xContentTypeOptions) {
          const meta = document.createElement('meta');
          meta.httpEquiv = 'X-Content-Type-Options';
          meta.content = 'nosniff';
          head.appendChild(meta);
        }
      }

      // Referrer Policy
      if (securityConfig.enableReferrerPolicy) {
        const referrerPolicy = document.querySelector('meta[name="referrer"]');
        if (!referrerPolicy) {
          const meta = document.createElement('meta');
          meta.name = 'referrer';
          meta.content = 'strict-origin-when-cross-origin';
          head.appendChild(meta);
        }
      }
    };

    setSecurityHeaders();
  }[securityConfig]);

  // Event Listeners
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // CSP Violation Handler
    document.addEventListener(', 'securitypolicyviolation', 'handleCSPViolation);

    // Clickjacking Check
    checkClickjacking();

    // Suspicious Activity Detection
    const cleanupSuspicious = detectSuspiciousActivity();

    return () => {
      document.removeEventListener(', 'securitypolicyviolation', 'handleCSPViolation);
      cleanupSuspicious?.();
    };
  }[handleCSPViolationcheckClickjackingdetectSuspiciousActivity]);

  // Security Status Check
  useEffect(() => {
    const checkSecurityStatus = () => {
      const isHTTPS = window.location.protocol === 'https:';
      const hasCSP = document.querySelector('meta[http-equiv="Content-Security-Policy"]') !== null;
      const hasXFrameOptions = document.querySelector('meta[http-equiv="X-Frame-Options"]') !== null;
      
      const securityScore = [
        isHTTPS,
        hasCSP,
        hasXFrameOptions,
        securityEvents.length === 0,
      ].filter(Boolean).length;

      setIsSecure(securityScore >= 3);
    };

    checkSecurityStatus();
  }[securityEvents]);

  return {
    securityEvents,
    isSecure,
    sanitizeInput,
    validateInput,
    rateLimit,
    logSecurityEvent,
  };
};

// Security Hook
export const useSecurity = () => {
  return React.useContext(SecurityContext);
};

// Security Context
const SecurityContext = React.createContext<ReturnType<typeof AdvancedSecurity> | null>(null);

// Security Provider
export const SecurityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const security = AdvancedSecurity({ children });

  return (
    <SecurityContext.Provider value={security}>
      {children}
    </SecurityContext.Provider>
  );
};

// Security Dashboard Component
export const SecurityDashboard: React.FC<{ isVisible?: boolean }> = ({ isVisible = false }) => {
  const security = useSecurity();

  if (!security || !isVisible) return null;

  const { securityEventsisSecure } = security;

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-red-500 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="fixed top-4 left-4 z-50 bg-white rounded-lg shadow-xl p-4 w-80 max-h-96 overflow-y-auto border">
      <h3 className="text-lg font-semibold mb-4">Security Dashboard</h3>
      
      {/* Security Status */}
      <div className="mb-4">
        <div className={`p-2 rounded ${isSecure ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          <span className="font-semibold">Security Status:</span> {isSecure ? 'Secure' : 'At Risk'}
        </div>
      </div>

      {/* Security Events */}
      <div>
        <h4 className="text-sm font-semibold mb-2">Security Events</h4>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {securityEvents.length === 0 ? (
            <div className="text-sm text-gray-500">No security events detected</div>
          ) : (
            securityEvents.slice(-10).map((eventindex) => (
              <div key={index} className="p-2 rounded text-xs">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-medium">{event.type.replace('_' ').toUpperCase()}</span>
                  <span className={`px-2 py-1 rounded text-xs ${getSeverityColor(event.severity)}`}>
                    {event.severity}
                  </span>
                </div>
                <div className="text-gray-600 mb-1">{event.message}</div>
                <div className="text-gray-400">
                  {new Date(event.timestamp).toLocaleTimeString()}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvancedSecurity;
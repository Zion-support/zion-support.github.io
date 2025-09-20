import React, { useEffect, useState, useCallback } from 'react';

interface SecurityEvent {
  type: 'xss' | 'csrf' | 'injection' | 'unauthorized' | 'suspicious';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: number;
  source: string;
  userAgent?: string;
  ip?: string;
}

interface SecurityMetrics {
  totalEvents: number;
  criticalEvents: number;
  blockedRequests: number;
  suspiciousActivity: number;
  lastIncident?: number;
}

const SecurityMonitor: React.FC = () => {
  const [events, setEvents] = useState<SecurityEvent[]>([]);
  const [metrics, setMetrics] = useState<SecurityMetrics>({
    totalEvents: 0,
    criticalEvents: 0,
    blockedRequests: 0,
    suspiciousActivity: 0
  });
  const [isMonitoring, setIsMonitoring] = useState(true);

  // Security event detection
  const detectSecurityThreats = useCallback(() => {
    // XSS Detection
    const detectXSS = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const suspiciousPatterns = [
        /<script/i,
        /javascript:/i,
        /on\w+\s*=/i,
        /eval\s*\(/i,
        /document\.cookie/i
      ];

      urlParams.forEach((value) => {
        suspiciousPatterns.forEach(pattern => {
          if (pattern.test(value)) {
            logSecurityEvent({
              type: 'xss',
              severity: 'high',
              message: `Potential XSS attempt detected: ${value.substring(0, 100)}`,
              timestamp: Date.now(),
              source: 'URL Parameter',
              userAgent: navigator.userAgent
            });
          }
        });
      });
    };

    // CSRF Detection
    const detectCSRF = () => {
      const referer = document.referrer;
      const origin = window.location.origin;
      
      if (referer && !referer.startsWith(origin)) {
        // Check for suspicious cross-origin requests
        const suspiciousDomains = [
          'malicious-site.com',
          'phishing-site.net',
          'attacker.com'
        ];

        if (suspiciousDomains.some(domain => referer.includes(domain))) {
          logSecurityEvent({
            type: 'csrf',
            severity: 'critical',
            message: `Potential CSRF attack from suspicious referer: ${referer}`,
            timestamp: Date.now(),
            source: 'Referer Header'
          });
        }
      }
    };

    // Unauthorized Access Detection
    const detectUnauthorizedAccess = () => {
      const protectedRoutes = ['/admin', '/dashboard', '/api/admin'];
      const currentPath = window.location.pathname;
      
      protectedRoutes.forEach(route => {
        if (currentPath.startsWith(route)) {
          // Check if user has proper authentication
          const token = localStorage.getItem('authToken');
          const userRole = localStorage.getItem('userRole');
          
          if (!token || userRole !== 'admin') {
            logSecurityEvent({
              type: 'unauthorized',
              severity: 'medium',
              message: `Unauthorized access attempt to protected route: ${currentPath}`,
              timestamp: Date.now(),
              source: 'Route Protection'
            });
          }
        }
      });
    };

    // Injection Attack Detection
    const detectInjection = () => {
      // Monitor for SQL injection patterns in form inputs
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        form.addEventListener('submit', (e) => {
          const formData = new FormData(form);
          const suspiciousPatterns = [
            /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER)\b)/i,
            /(\b(UNION|OR|AND)\b.*\b(SELECT|INSERT|UPDATE|DELETE)\b)/i,
            /(--|\/\*|\*\/)/,
            /(\b(EXEC|EXECUTE)\b)/i
          ];

          formData.forEach((value) => {
            if (typeof value === 'string') {
              suspiciousPatterns.forEach(pattern => {
                if (pattern.test(value)) {
                  logSecurityEvent({
                    type: 'injection',
                    severity: 'high',
                    message: `Potential SQL injection attempt: ${value.substring(0, 100)}`,
                    timestamp: Date.now(),
                    source: 'Form Input'
                  });
                }
              });
            }
          });
        });
      });
    };

    // Run all detection functions
    detectXSS();
    detectCSRF();
    detectUnauthorizedAccess();
    detectInjection();
  }, []);

  // Log security event
  const logSecurityEvent = useCallback((event: SecurityEvent) => {
    setEvents(prev => [event, ...prev.slice(0, 99)]); // Keep last 100 events
    
    setMetrics(prev => ({
      ...prev,
      totalEvents: prev.totalEvents + 1,
      criticalEvents: event.severity === 'critical' ? prev.criticalEvents + 1 : prev.criticalEvents,
      blockedRequests: event.type === 'unauthorized' ? prev.blockedRequests + 1 : prev.blockedRequests,
      suspiciousActivity: event.severity === 'high' || event.severity === 'critical' ? prev.suspiciousActivity + 1 : prev.suspiciousActivity,
      lastIncident: Date.now()
    }));

    // Send to security monitoring service
    fetch('/api/security/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...event,
        url: window.location.href,
        sessionId: sessionStorage.getItem('sessionId')
      })
    }).catch(err => console.warn('Failed to log security event:', err));

    // Alert for critical events
    if (event.severity === 'critical') {
      console.error('🚨 CRITICAL SECURITY EVENT:', event);
      
      // Show user notification
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Security Alert', {
          body: `Critical security event detected: ${event.message}`,
          icon: '/logo192.png',
          tag: 'security-alert'
        });
      }
    }
  }, []);

  // Network security monitoring
  const monitorNetworkRequests = useCallback(() => {
    const originalFetch = window.fetch;
    
    window.fetch = async (input, init) => {
      const url = typeof input === 'string' ? input : input.url;
      
      // Check for suspicious requests
      const suspiciousPatterns = [
        /\/\.\.\//,  // Path traversal
        /<script/i,  // XSS in URL
        /javascript:/i  // JavaScript protocol
      ];

      if (suspiciousPatterns.some(pattern => pattern.test(url))) {
        logSecurityEvent({
          type: 'xss',
          severity: 'high',
          message: `Suspicious network request blocked: ${url}`,
          timestamp: Date.now(),
          source: 'Network Request'
        });
        
        throw new Error('Suspicious request blocked by security monitor');
      }

      try {
        const response = await originalFetch(input, init);
        
        // Check response for security headers
        const securityHeaders = [
          'x-content-type-options',
          'x-frame-options',
          'x-xss-protection',
          'strict-transport-security',
          'content-security-policy'
        ];

        const missingHeaders = securityHeaders.filter(header => !response.headers.get(header));
        
        if (missingHeaders.length > 0) {
          logSecurityEvent({
            type: 'suspicious',
            severity: 'low',
            message: `Missing security headers: ${missingHeaders.join(', ')}`,
            timestamp: Date.now(),
            source: 'Response Headers'
          });
        }

        return response;
      } catch (error) {
        logSecurityEvent({
          type: 'suspicious',
          severity: 'medium',
          message: `Network request failed: ${error}`,
          timestamp: Date.now(),
          source: 'Network Request'
        });
        
        throw error;
      }
    };
  }, [logSecurityEvent]);

  // Performance monitoring for security
  const monitorPerformance = useCallback(() => {
    // Monitor for unusual performance patterns that might indicate attacks
    let requestCount = 0;
    let lastReset = Date.now();

    const checkRequestRate = () => {
      const now = Date.now();
      if (now - lastReset > 60000) { // Reset every minute
        requestCount = 0;
        lastReset = now;
      }

      requestCount++;

      // Alert if too many requests in a short time
      if (requestCount > 100) {
        logSecurityEvent({
          type: 'suspicious',
          severity: 'medium',
          message: `High request rate detected: ${requestCount} requests per minute`,
          timestamp: Date.now(),
          source: 'Performance Monitor'
        });
      }
    };

    // Override fetch to monitor request rate
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      checkRequestRate();
      return originalFetch(...args);
    };
  }, [logSecurityEvent]);

  // Initialize security monitoring
  useEffect(() => {
    if (!isMonitoring) return;

    detectSecurityThreats();
    monitorNetworkRequests();
    monitorPerformance();

    // Set up periodic security checks
    const interval = setInterval(() => {
      detectSecurityThreats();
    }, 30000); // Check every 30 seconds

    return () => {
      clearInterval(interval);
    };
  }, [isMonitoring, detectSecurityThreats, monitorNetworkRequests, monitorPerformance]);

  // Security dashboard (only in development)
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed top-4 left-4 bg-red-900 text-white p-4 rounded-lg shadow-lg max-w-md z-50">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold">Security Monitor</h3>
          <button
            onClick={() => setIsMonitoring(!isMonitoring)}
            className={`px-2 py-1 rounded text-xs ${
              isMonitoring ? 'bg-green-600' : 'bg-red-600'
            }`}
          >
            {isMonitoring ? 'Active' : 'Paused'}
          </button>
        </div>
        
        <div className="text-sm space-y-1">
          <div>Total Events: {metrics.totalEvents}</div>
          <div>Critical: {metrics.criticalEvents}</div>
          <div>Blocked: {metrics.blockedRequests}</div>
          <div>Suspicious: {metrics.suspiciousActivity}</div>
        </div>

        {events.length > 0 && (
          <div className="mt-2 max-h-32 overflow-y-auto">
            <h4 className="font-semibold text-xs">Recent Events:</h4>
            {events.slice(0, 3).map((event, index) => (
              <div key={index} className="text-xs text-gray-300 mt-1">
                <span className={`px-1 rounded ${
                  event.severity === 'critical' ? 'bg-red-600' :
                  event.severity === 'high' ? 'bg-orange-600' :
                  event.severity === 'medium' ? 'bg-yellow-600' : 'bg-green-600'
                }`}>
                  {event.severity}
                </span>
                <span className="ml-1">{event.type}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return null; // No UI in production
};

export default SecurityMonitor;
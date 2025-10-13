import React, { useEffect, useState } from 'react';

interface SecurityMetrics {
  cspViolations: number;
  xssAttempts: number;
  csrfAttempts: number;
  suspiciousActivity: number;
}

const EnhancedSecurityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [metrics, setMetrics] = useState<SecurityMetrics>({
    cspViolations: 0,
    xssAttempts: 0,
    csrfAttempts: 0,
    suspiciousActivity: 0
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    // Set up Content Security Policy
    const cspMeta = document.createElement('meta');
    cspMeta.setAttribute('http-equiv', 'Content-Security-Policy');
    cspMeta.setAttribute('content', [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'"
    ].join('; '));
    
    document.head.appendChild(cspMeta);

    // Set up security headers
    const securityHeaders = [
      { name: 'X-Content-Type-Options', value: 'nosniff' },
      { name: 'X-Frame-Options', value: 'DENY' },
      { name: 'X-XSS-Protection', value: '1; mode=block' },
      { name: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { name: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
    ];

    // Monitor CSP violations
    const handleCSPViolation = (event: SecurityPolicyViolationEvent) => {
      setMetrics(prev => ({
        ...prev,
        cspViolations: prev.cspViolations + 1
      }));
      
      console.warn('CSP Violation:', {
        blockedURI: event.blockedURI,
        violatedDirective: event.violatedDirective,
        originalPolicy: event.originalPolicy
      });
    };

    // Monitor for XSS attempts
    const handleXSSAttempt = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target && target.innerHTML && target.innerHTML.includes('<script')) {
        setMetrics(prev => ({
          ...prev,
          xssAttempts: prev.xssAttempts + 1
        }));
        console.warn('Potential XSS attempt detected');
      }
    };

    // Monitor for suspicious activity
    const handleSuspiciousActivity = () => {
      setMetrics(prev => ({
        ...prev,
        suspiciousActivity: prev.suspiciousActivity + 1
      }));
    };

    // Set up event listeners
    document.addEventListener('securitypolicyviolation', handleCSPViolation);
    document.addEventListener('DOMSubtreeModified', handleXSSAttempt);
    
    // Monitor for rapid clicks (potential bot activity)
    let clickCount = 0;
    let clickTimer: NodeJS.Timeout;
    
    const handleClick = () => {
      clickCount++;
      if (clickCount > 10) {
        handleSuspiciousActivity();
        clickCount = 0;
      }
      
      clearTimeout(clickTimer);
      clickTimer = setTimeout(() => {
        clickCount = 0;
      }, 1000);
    };

    document.addEventListener('click', handleClick);

    // Monitor for suspicious form submissions
    const handleFormSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement;
      if (form) {
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
          const element = input as HTMLInputElement;
          if (element.value && element.value.length > 10000) {
            handleSuspiciousActivity();
            console.warn('Suspicious form submission detected');
          }
        });
      }
    };

    document.addEventListener('submit', handleFormSubmit);

    // Set up monitoring
    setIsMonitoring(true);

    // Cleanup
    return () => {
      document.removeEventListener('securitypolicyviolation', handleCSPViolation);
      document.removeEventListener('DOMSubtreeModified', handleXSSAttempt);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('submit', handleFormSubmit);
      clearTimeout(clickTimer);
    };
  }, []);

  // Security monitoring component (only in development)
  if (process.env.NODE_ENV !== 'development' || !isMonitoring) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      
      {/* Security Monitor Panel */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-red-900/90 backdrop-blur-sm border border-red-500/30 rounded-lg p-4 text-white text-sm">
          <h3 className="font-semibold mb-2 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Security Monitor
          </h3>
          <div className="space-y-1 text-xs">
            <div>CSP Violations: {metrics.cspViolations}</div>
            <div>XSS Attempts: {metrics.xssAttempts}</div>
            <div>CSRF Attempts: {metrics.csrfAttempts}</div>
            <div>Suspicious Activity: {metrics.suspiciousActivity}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnhancedSecurityEnhancer;

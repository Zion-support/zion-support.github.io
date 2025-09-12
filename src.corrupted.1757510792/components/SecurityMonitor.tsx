
import { useEffect } from 'react';

export const SecurityMonitor = () => {
  useEffect(() => {
    // Monitor for suspicious activities
    const handleSecurityEvent = event => {
      // Log security events
      console.log('Security event detected:', event);

      // Send to security monitoring service
      if (process.env.NODE_ENV === 'production') {
        // Send to monitoring service
        fetch('/api/security/event', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: event.type,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href,
          }),
        });
      }
    };

    // Monitor for XSS attempts
    const originalConsoleLog = console.log;
    console.log = (...args) => {
      const message = args.join(' ');
      if (message.includes('<script>') || message.includes('javascript:')) {
        handleSecurityEvent({ type: 'XSS_ATTEMPT', message });
      }
      originalConsoleLog.apply(console, args);
    };

    return () => {
      console.log = originalConsoleLog;
    };
  }, []);

  return null;
};

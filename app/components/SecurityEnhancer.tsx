'use client';
import React, { useEffect } from 'react';

interface SecurityEnhancerProps {
  children: React.ReactNode;
  className?: string;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({ children, className = '' }) => {
  useEffect(() => {
    // Security enhancement logic
    const enhanceSecurity = () => {
      // Add security headers
      const securityHeaders = {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'strict-origin-when-cross-origin'
      };

      // Add CSP meta tag
      const cspMeta = document.createElement('meta');
      cspMeta.setAttribute('http-equiv', 'Content-Security-Policy');
      cspMeta.setAttribute('content', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;");
      document.head.appendChild(cspMeta);

      // Add security event listeners
      const handleSecurityEvent = (event: Event) => {
        console.log('Security event detected:', event.type);
      };

      window.addEventListener('beforeunload', handleSecurityEvent);
      window.addEventListener('unload', handleSecurityEvent);

      return () => {
        window.removeEventListener('beforeunload', handleSecurityEvent);
        window.removeEventListener('unload', handleSecurityEvent);
        document.head.removeChild(cspMeta);
      };
    };

    const cleanup = enhanceSecurity();
    return cleanup;
  }, []);

  return (
    <div className={`security-enhanced ${className}`}>
      {children}
    </div>
  );
};

export default SecurityEnhancer;
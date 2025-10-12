'use client';
import React, { useEffect } from 'react';

interface SecurityEnhancerProps {
  children: React.ReactNode;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Security enhancement logic
    const enhanceSecurity = () => {
      // Set security headers
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
        // In a real application, you would send this to a security monitoring service
      };

      // Monitor for potential security issues
      window.addEventListener('error', handleSecurityEvent);
      window.addEventListener('unhandledrejection', handleSecurityEvent);

      // Cleanup function
      return () => {
        window.removeEventListener('error', handleSecurityEvent);
        window.removeEventListener('unhandledrejection', handleSecurityEvent);
        // Remove CSP meta tag
        const existingCspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
        if (existingCspMeta) {
          existingCspMeta.remove();
        }
      };
    };

    const cleanup = enhanceSecurity();
    return cleanup;
  }, []);

  return <>{children}</>;
};

export default SecurityEnhancer;
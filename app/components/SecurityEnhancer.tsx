'use client';
import React, { useEffect } from 'react';

interface SecurityEnhancerProps {
  children: React.ReactNode;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Security enhancement logic
    const enhanceSecurity = () => {
      // Add security headers
      const securityHeaders = {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
      };

      // Apply security headers if possible
      if (typeof window !== 'undefined') {
        // Add meta tags for security
        Object.entries(securityHeaders).forEach(([name, value]) => {
          const meta = document.createElement('meta');
          meta.setAttribute('http-equiv', name);
          meta.setAttribute('content', value);
          document.head.appendChild(meta);
        });
      }
    };

    enhanceSecurity();
  }, []);

  return <>{children}</>;
};

export default SecurityEnhancer;
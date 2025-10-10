'use client';
import React, { useEffect, ReactNode } from 'react';

interface SecurityEnhancerProps {
  children: ReactNode;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add security headers and CSP
    const addSecurityHeaders = () => {
      // Add Content Security Policy
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Content-Security-Policy';
      meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;";
      document.head.appendChild(meta);
    };

    // Add security event listeners
    const addSecurityListeners = () => {
      // Prevent right-click context menu
      document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
      });

      // Prevent F12, Ctrl+Shift+I, Ctrl+U
      document.addEventListener('keydown', (e) => {
        if (e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            (e.ctrlKey && e.key === 'u')) {
          e.preventDefault();
        }
      });
    };

    // Initialize security features
    addSecurityHeaders();
    addSecurityListeners();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  return <>{children}</>;
};

export default SecurityEnhancer;
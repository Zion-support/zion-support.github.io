'use client';
import React, { useEffect } from 'react';

interface SecurityEnhancerProps {
  children: React.ReactNode;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add security headers
    const addSecurityHeaders = () => {
      // Add Content Security Policy
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Content-Security-Policy';
      meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;";
      document.head.appendChild(meta);
    };

    // Add security event listeners
    const addSecurityListeners = () => {
      // Prevent right-click context menu in production
      if (process.env.NODE_ENV === 'production') {
        document.addEventListener('contextmenu', (e) => {
          e.preventDefault();
        });
      }

      // Prevent F12, Ctrl+Shift+I, Ctrl+U
      document.addEventListener('keydown', (e) => {
        if (process.env.NODE_ENV === 'production') {
          if (e.key === 'F12' || 
              (e.ctrlKey && e.shiftKey && e.key === 'I') ||
              (e.ctrlKey && e.key === 'U')) {
            e.preventDefault();
          }
        }
      });
    };

    // Sanitize user input
    const sanitizeInput = (input: string) => {
      return input
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
        .replace(/javascript:/gi, '')
        .replace(/on\w+\s*=/gi, '');
    };

    addSecurityHeaders();
    addSecurityListeners();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return <>{children}</>;
};

export default SecurityEnhancer;
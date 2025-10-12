'use client';
import React, { useEffect } from 'react';

interface SecurityEnhancerProps {
  children: React.ReactNode;
    </div>
  )
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
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      };

      // Add CSP meta tag
      const cspMeta = document.createElement('meta');
      cspMeta.setAttribute('http-equiv', 'Content-Security-Policy');
      cspMeta.setAttribute('content', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;");
      document.head.appendChild(cspMeta);

      // Add HSTS header
      const hstsMeta = document.createElement('meta');
      hstsMeta.setAttribute('http-equiv', 'Strict-Transport-Security');
      hstsMeta.setAttribute('content', 'max-age=31536000; includeSubDomains');
      document.head.appendChild(hstsMeta);

      // Remove potentially dangerous attributes
      const dangerousAttributes = ['onload', 'onerror', 'onclick'];
      const allElements = document.querySelectorAll('*');
      
      allElements.forEach((element) => {
        dangerousAttributes.forEach((attr) => {
          if (element.hasAttribute(attr)) {
            element.removeAttribute(attr);
          }
        });
      });

      // Sanitize user inputs
      const sanitizeInput = (input: string): string => {
        return input
          .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
          .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
          .replace(/javascript:/gi, '')
          .replace(/on\w+\s*=/gi, '');
      };

      // Apply sanitization to all text inputs
      const textInputs = document.querySelectorAll('input[type="text"], textarea');
      textInputs.forEach((input) => {
        input.addEventListener('input', (e) => {
          const target = e.target as HTMLInputElement;
          target.value = sanitizeInput(target.value);
        });
      });
    };

    enhanceSecurity();
  }, []);

  return <>{children}</>;
};

export default SecurityEnhancer;

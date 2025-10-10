'use client';
import React, { useEffect } from 'react';

interface SecurityEnhancerProps {
  children: React.ReactNode;
  enableCSP?: boolean;
  enableHSTS?: boolean;
  enableXSSProtection?: boolean;
  enableClickjackingProtection?: boolean;
  enableContentTypeSniffing?: boolean;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({
  children,
  enableCSP = true,
  enableHSTS = true,
  enableXSSProtection = true,
  enableClickjackingProtection = true,
  enableContentTypeSniffing = true
}) => {
  useEffect(() => {
    // Content Security Policy
    if (enableCSP && typeof document !== 'undefined') {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Content-Security-Policy';
      meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none';";
      document.head.appendChild(meta);
    }

    // HTTP Strict Transport Security
    if (enableHSTS && typeof document !== 'undefined') {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Strict-Transport-Security';
      meta.content = 'max-age=31536000; includeSubDomains; preload';
      document.head.appendChild(meta);
    }

    // XSS Protection
    if (enableXSSProtection && typeof document !== 'undefined') {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'X-XSS-Protection';
      meta.content = '1; mode=block';
      document.head.appendChild(meta);
    }

    // Clickjacking Protection
    if (enableClickjackingProtection && typeof document !== 'undefined') {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'X-Frame-Options';
      meta.content = 'DENY';
      document.head.appendChild(meta);
    }

    // Content Type Sniffing Protection
    if (enableContentTypeSniffing && typeof document !== 'undefined') {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'X-Content-Type-Options';
      meta.content = 'nosniff';
      document.head.appendChild(meta);
    }

    // Input sanitization
    const sanitizeInput = (input: string): string => {
      return input
        .replace(/[<>]/g, '')
        .replace(/javascript:/gi, '')
        .replace(/on\w+=/gi, '');
    };

    // Apply input sanitization to all input elements
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach((input) => {
      input.addEventListener('input', (e) => {
        const target = e.target as HTMLInputElement;
        if (target.value !== sanitizeInput(target.value)) {
          target.value = sanitizeInput(target.value);
        }
      });
    });
  }, [enableCSP, enableHSTS, enableXSSProtection, enableClickjackingProtection, enableContentTypeSniffing]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default SecurityEnhancer;

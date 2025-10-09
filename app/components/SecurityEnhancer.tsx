'use client';
import React, { useEffect } from 'react';

interface SecurityEnhancerProps {
  enableCSP?: boolean;
  enableHSTS?: boolean;
  enableXSSProtection?: boolean;
  enableClickjackingProtection?: boolean;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({
  enableCSP = true,
  enableHSTS = true,
  enableXSSProtection = true,
  enableClickjackingProtection = true
}) => {
  useEffect(() => {
    // Content Security Policy
    if (enableCSP && typeof window !== 'undefined') {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Content-Security-Policy';
      meta.content = [
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
      ].join('; ');
      document.head.appendChild(meta);
    }

    // XSS Protection
    if (enableXSSProtection && typeof window !== 'undefined') {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'X-Content-Type-Options';
      meta.content = 'nosniff';
      document.head.appendChild(meta);

      const xssMeta = document.createElement('meta');
      xssMeta.httpEquiv = 'X-XSS-Protection';
      xssMeta.content = '1; mode=block';
      document.head.appendChild(xssMeta);
    }

    // Clickjacking Protection
    if (enableClickjackingProtection && typeof window !== 'undefined') {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'X-Frame-Options';
      meta.content = 'DENY';
      document.head.appendChild(meta);
    }

    // HSTS (HTTP Strict Transport Security)
    if (enableHSTS && typeof window !== 'undefined' && window.location.protocol === 'https:') {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Strict-Transport-Security';
      meta.content = 'max-age=31536000; includeSubDomains; preload';
      document.head.appendChild(meta);
    }

    // Additional security headers
    const additionalHeaders = [
      { name: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { name: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' }
    ];

    additionalHeaders.forEach(header => {
      const meta = document.createElement('meta');
      meta.httpEquiv = header.name;
      meta.content = header.value;
      document.head.appendChild(meta);
    });

    // Input sanitization for forms
    const sanitizeInput = (input: string): string => {
      return input
        .replace(/[<>]/g, '') // Remove potential HTML tags
        .replace(/javascript:/gi, '') // Remove javascript: protocol
        .replace(/on\w+=/gi, '') // Remove event handlers
        .trim();
    };

    // Apply sanitization to all form inputs
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener('submit', (event) => {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
          if (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement) {
            input.value = sanitizeInput(input.value);
          }
        });
      });
    });

    // Prevent right-click context menu in production
    if (process.env.NODE_ENV === 'production') {
      const preventContextMenu = (event: MouseEvent) => {
        event.preventDefault();
      };
      
      document.addEventListener('contextmenu', preventContextMenu);
      
      return () => {
        document.removeEventListener('contextmenu', preventContextMenu);
      };
    }
  }, [enableCSP, enableHSTS, enableXSSProtection, enableClickjackingProtection]);

  return null;
};

export default SecurityEnhancer;
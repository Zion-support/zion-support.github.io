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
    if (enableCSP) {
      const cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
      if (!cspMeta) {
        const meta = document.createElement('meta');
        meta.setAttribute('http-equiv', 'Content-Security-Policy');
        meta.setAttribute('content', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com;");
        document.head.appendChild(meta);
      }
    }

    // XSS Protection
    if (enableXSSProtection) {
      const xssMeta = document.querySelector('meta[http-equiv="X-XSS-Protection"]');
      if (!xssMeta) {
        const meta = document.createElement('meta');
        meta.setAttribute('http-equiv', 'X-XSS-Protection');
        meta.setAttribute('content', '1; mode=block');
        document.head.appendChild(meta);
      }
    }

    // Clickjacking Protection
    if (enableClickjackingProtection) {
      const frameOptionsMeta = document.querySelector('meta[http-equiv="X-Frame-Options"]');
      if (!frameOptionsMeta) {
        const meta = document.createElement('meta');
        meta.setAttribute('http-equiv', 'X-Frame-Options');
        meta.setAttribute('content', 'DENY');
        document.head.appendChild(meta);
      }
    }

    // Content Type Sniffing Protection
    if (enableContentTypeSniffing) {
      const contentTypeMeta = document.querySelector('meta[http-equiv="X-Content-Type-Options"]');
      if (!contentTypeMeta) {
        const meta = document.createElement('meta');
        meta.setAttribute('http-equiv', 'X-Content-Type-Options');
        meta.setAttribute('content', 'nosniff');
        document.head.appendChild(meta);
      }
    }

    // Referrer Policy
    const referrerMeta = document.querySelector('meta[name="referrer"]');
    if (!referrerMeta) {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'referrer');
      meta.setAttribute('content', 'strict-origin-when-cross-origin');
      document.head.appendChild(meta);
    }

    // Permissions Policy
    const permissionsMeta = document.querySelector('meta[http-equiv="Permissions-Policy"]');
    if (!permissionsMeta) {
      const meta = document.createElement('meta');
      meta.setAttribute('http-equiv', 'Permissions-Policy');
      meta.setAttribute('content', 'camera=(), microphone=(), geolocation=(), interest-cohort=()');
      document.head.appendChild(meta);
    }

    // Secure cookie handling
    const handleSecureCookies = () => {
      // Ensure all cookies are secure in production
      if (process.env.NODE_ENV === 'production') {
        document.cookie.split(';').forEach(cookie => {
          const [name, value] = cookie.trim().split('=');
          if (name && value && !cookie.includes('Secure')) {
            document.cookie = `${name}=${value}; Secure; SameSite=Strict`;
          }
        });
      }
    };

    handleSecureCookies();

    // Input sanitization for forms
    const sanitizeInputs = () => {
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        input.addEventListener('input', (e) => {
          const target = e.target as HTMLInputElement;
          // Basic XSS prevention
          target.value = target.value.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
        });
      });
    };

    sanitizeInputs();

    // Console warning for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Security enhancements applied:', {
        CSP: enableCSP,
        XSSProtection: enableXSSProtection,
        ClickjackingProtection: enableClickjackingProtection,
        ContentTypeSniffing: enableContentTypeSniffing
      });
    }
  }, [enableCSP, enableXSSProtection, enableClickjackingProtection, enableContentTypeSniffing]);

  return <>{children}</>;
};

export default SecurityEnhancer;
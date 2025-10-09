'use client';
import React, { useEffect } from 'react';

interface SecurityEnhancerProps {
  enableCSP?: boolean;
  enableXSSProtection?: boolean;
  enableClickjackingProtection?: boolean;
  enableHTTPSRedirect?: boolean;
  enableSecurityHeaders?: boolean;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({
  enableCSP = true,
  enableXSSProtection = true,
  enableClickjackingProtection = true,
  enableHTTPSRedirect = true,
  enableSecurityHeaders = true
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Content Security Policy
    if (enableCSP) {
      const cspMeta = document.createElement('meta');
      cspMeta.setAttribute('http-equiv', 'Content-Security-Policy');
      cspMeta.setAttribute('content', 
        "default-src 'self'; " +
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; " +
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
        "img-src 'self' data: https: blob:; " +
        "font-src 'self' data: https://fonts.gstatic.com; " +
        "connect-src 'self' https://www.google-analytics.com; " +
        "frame-ancestors 'none'; " +
        "base-uri 'self'; " +
        "form-action 'self';"
      );
      document.head.appendChild(cspMeta);
    }

    // XSS Protection
    if (enableXSSProtection) {
      const xssMeta = document.createElement('meta');
      xssMeta.setAttribute('http-equiv', 'X-XSS-Protection');
      xssMeta.setAttribute('content', '1; mode=block');
      document.head.appendChild(xssMeta);
    }

    // Clickjacking Protection
    if (enableClickjackingProtection) {
      const frameOptionsMeta = document.createElement('meta');
      frameOptionsMeta.setAttribute('http-equiv', 'X-Frame-Options');
      frameOptionsMeta.setAttribute('content', 'DENY');
      document.head.appendChild(frameOptionsMeta);
    }

    // HTTPS Redirect
    if (enableHTTPSRedirect && location.protocol !== 'https:') {
      location.replace('https:' + window.location.href.substring(window.location.protocol.length));
    }

    // Security Headers
    if (enableSecurityHeaders) {
      // Content Type Options
      const contentTypeMeta = document.createElement('meta');
      contentTypeMeta.setAttribute('http-equiv', 'X-Content-Type-Options');
      contentTypeMeta.setAttribute('content', 'nosniff');
      document.head.appendChild(contentTypeMeta);

      // Referrer Policy
      const referrerMeta = document.createElement('meta');
      referrerMeta.setAttribute('name', 'referrer');
      referrerMeta.setAttribute('content', 'strict-origin-when-cross-origin');
      document.head.appendChild(referrerMeta);

      // Permissions Policy
      const permissionsMeta = document.createElement('meta');
      permissionsMeta.setAttribute('http-equiv', 'Permissions-Policy');
      permissionsMeta.setAttribute('content', 
        'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()'
      );
      document.head.appendChild(permissionsMeta);
    }

    // Input sanitization
    const sanitizeInputs = () => {
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach((input) => {
        input.addEventListener('input', (e) => {
          const target = e.target as HTMLInputElement;
          // Basic XSS prevention
          target.value = target.value
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
            .replace(/<[^>]*>/g, '')
            .replace(/javascript:/gi, '')
            .replace(/on\w+\s*=/gi, '');
        });
      });
    };

    // Sanitize inputs when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', sanitizeInputs);
    } else {
      sanitizeInputs();
    }

    // Monitor for suspicious activity
    const monitorSecurity = () => {
      // Detect potential XSS attempts
      const originalInnerHTML = Element.prototype.innerHTML;
      Element.prototype.innerHTML = function(value: string) {
        if (value && typeof value === 'string') {
          // Basic XSS detection
          if (value.includes('<script') || value.includes('javascript:')) {
            console.warn('Potential XSS attempt detected');
            return originalInnerHTML.call(this, '');
          }
        }
        return originalInnerHTML.call(this, value);
      };

      // Monitor for suspicious console usage
      const originalConsole = console.log;
      console.log = function(...args) {
        const message = args.join(' ');
        if (message.includes('eval(') || message.includes('Function(')) {
          console.warn('Suspicious console activity detected');
        }
        return originalConsole.apply(console, args);
      };
    };

    monitorSecurity();

    // Add security event listeners
    const addSecurityListeners = () => {
      // Prevent right-click context menu (optional)
      document.addEventListener('contextmenu', (e) => {
        // Only prevent on sensitive elements
        const target = e.target as HTMLElement;
        if (target.classList.contains('no-context-menu')) {
          e.preventDefault();
        }
      });

      // Prevent text selection on sensitive elements
      document.addEventListener('selectstart', (e) => {
        const target = e.target as HTMLElement;
        if (target.classList.contains('no-select')) {
          e.preventDefault();
        }
      });

      // Monitor for suspicious keyboard shortcuts
      document.addEventListener('keydown', (e) => {
        // Prevent F12, Ctrl+Shift+I, Ctrl+U
        if (e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            (e.ctrlKey && e.key === 'u')) {
          e.preventDefault();
        }
      });
    };

    addSecurityListeners();

  }, [enableCSP, enableXSSProtection, enableClickjackingProtection, enableHTTPSRedirect, enableSecurityHeaders]);

  return null;
};

export default SecurityEnhancer;
'use client';

import React, { useEffect, memo, useCallback } from 'react';

interface SecurityEnhancementProps {
  className?: string;
}

const SecurityEnhancement: React.FC<SecurityEnhancementProps> = memo(({ className = '' }) => {
  // Add security headers
  const addSecurityHeaders = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Add Content Security Policy
    const csp = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    if (!csp) {
      const meta = document.createElement('meta');
      meta.setAttribute('http-equiv', 'Content-Security-Policy');
      meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com;";
      document.head.appendChild(meta);
    }

    // Add X-Frame-Options
    const xFrameOptions = document.querySelector('meta[http-equiv="X-Frame-Options"]');
    if (!xFrameOptions) {
      const meta = document.createElement('meta');
      meta.setAttribute('http-equiv', 'X-Frame-Options');
      meta.content = 'DENY';
      document.head.appendChild(meta);
    }

    // Add X-Content-Type-Options
    const xContentTypeOptions = document.querySelector('meta[http-equiv="X-Content-Type-Options"]');
    if (!xContentTypeOptions) {
      const meta = document.createElement('meta');
      meta.setAttribute('http-equiv', 'X-Content-Type-Options');
      meta.content = 'nosniff';
      document.head.appendChild(meta);
    }

    // Add Referrer Policy
    const referrerPolicy = document.querySelector('meta[name="referrer"]');
    if (!referrerPolicy) {
      const meta = document.createElement('meta');
      meta.name = 'referrer';
      meta.content = 'strict-origin-when-cross-origin';
      document.head.appendChild(meta);
    }
  }, []);

  // Monitor for suspicious activity
  const monitorSuspiciousActivity = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Monitor for XSS attempts
<<<<<<< HEAD
    const originalDescriptor = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
    if (originalDescriptor) {
      Object.defineProperty(Element.prototype, 'innerHTML', {
        set: function(value: string) {
          if (value && typeof value === 'string' && /<script/i.test(value)) {
            console.warn('Potential XSS attempt detected:', value);
            return;
          }
          if (originalDescriptor.set) {
            originalDescriptor.set.call(this, value);
          }
        },
        get: function() {
          if (originalDescriptor.get) {
            return originalDescriptor.get.call(this);
          }
          return '';
        }
      });
    }
=======
    const originalInnerHTML = Element.prototype.innerHTML;
    (Element.prototype as unknown as { innerHTML: (value: string) => void }).innerHTML = function(value: string) {
      if (value && typeof value === 'string' && /<script/i.test(value)) {
        console.warn('Potential XSS attempt detected:', value);
        return;
      }
      return (originalInnerHTML as unknown as (value: string) => void).call(this, value);
    };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8bc5

    // Monitor for suspicious console usage
    const originalConsole = console.log;
    console.log = function(...args) {
      if (args.some(arg => typeof arg === 'string' && /<script/i.test(arg))) {
        console.warn('Suspicious console usage detected');
        return;
      }
      return originalConsole.apply(console, args);
    };

    // Monitor for eval usage
    const originalEval = window.eval;
    window.eval = function(code) {
      console.warn('Eval usage detected:', code);
      return originalEval.call(window, code);
    };
  }, []);

  // Add integrity checks for external resources
  const addIntegrityChecks = useCallback(() => {
    if (typeof window === 'undefined') return;

    document.querySelectorAll('script[src]').forEach(script => {
      const src = script.getAttribute('src');
      if (src && !src.startsWith(window.location.origin) && !script.hasAttribute('integrity')) {
        console.warn('External script without integrity check:', src);
      }
    });

    document.querySelectorAll('link[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (href && !href.startsWith(window.location.origin) && !link.hasAttribute('integrity')) {
        console.warn('External stylesheet without integrity check:', href);
      }
    });
  }, []);

  useEffect(() => {
    addSecurityHeaders();
    monitorSuspiciousActivity();
    addIntegrityChecks();
  }, [addSecurityHeaders, monitorSuspiciousActivity, addIntegrityChecks]);

  return (
    <div className={`security-enhancement ${className}`} style={{ display: 'none' }}>
      {/* This component doesn't render anything visible */}
    </div>
  );
});

SecurityEnhancement.displayName = 'SecurityEnhancement';

export default SecurityEnhancement;
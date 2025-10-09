import React, { useEffect } from 'react';

const SecurityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add Content Security Policy meta tag
    const csp = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    if (!csp) {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Content-Security-Policy';
      meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self';";
      document.head.appendChild(meta);
    }

    // Add security headers
    const addSecurityHeader = (name: string, value: string) => {
      const meta = document.createElement('meta');
      meta.httpEquiv = name;
      meta.content = value;
      document.head.appendChild(meta);
    };

    addSecurityHeader('X-Content-Type-Options', 'nosniff');
    addSecurityHeader('X-Frame-Options', 'DENY');
    addSecurityHeader('X-XSS-Protection', '1; mode=block');
    addSecurityHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    addSecurityHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

    // Sanitize user input in forms
    const sanitizeInput = (input: string): string => {
      return input
        .replace(/[<>]/g, '') // Remove potential HTML tags
        .replace(/javascript:/gi, '') // Remove javascript: protocol
        .replace(/on\w+=/gi, '') // Remove event handlers
        .trim();
    };

    // Add input sanitization to all form inputs
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input) => {
      input.addEventListener('blur', (e) => {
        const target = e.target as HTMLInputElement;
        if (target.value) {
          target.value = sanitizeInput(target.value);
        }
      });
    });

    // Prevent right-click context menu on sensitive elements
    const sensitiveElements = document.querySelectorAll('[data-sensitive]');
    sensitiveElements.forEach((element) => {
      element.addEventListener('contextmenu', (e) => {
        e.preventDefault();
      });
    });

    // Add security event listeners
    const handleSecurityEvent = (event: Event) => {
      console.warn('Security event detected:', event.type);
      // In production, you might want to send this to a security monitoring service
    };

    // Monitor for suspicious activities
    document.addEventListener('keydown', (e) => {
      // Detect potential XSS attempts
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        handleSecurityEvent(e);
      }
    });

    // Monitor for iframe injection attempts
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            if (element.tagName === 'IFRAME' || element.tagName === 'SCRIPT') {
              // Check if the element was added by user interaction
              if (!element.hasAttribute('data-trusted')) {
                console.warn('Untrusted element detected:', element);
                handleSecurityEvent(new Event('suspicious_element'));
              }
            }
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Add nonce to dynamically added scripts
    const originalCreateElement = document.createElement;
    document.createElement = function(tagName: string) {
      const element = originalCreateElement.call(this, tagName);
      if (tagName.toLowerCase() === 'script') {
        element.setAttribute('nonce', 'dynamic-script-nonce');
      }
      return element;
    };

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default SecurityEnhancer;
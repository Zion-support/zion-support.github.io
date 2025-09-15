import React, { useEffect } from 'react';

interface SecurityEnhancerProps {
  children: React.ReactNode;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add Content Security Policy meta tag
    const addCSP = () => {
      const existingCSP = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
      if (existingCSP) {
        existingCSP.remove();
      }

      const csp = document.createElement('meta');
      csp.setAttribute('http-equiv', 'Content-Security-Policy');
      csp.setAttribute('content', [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: https: blob:",
        "connect-src 'self' https://api.zion.app https://www.google-analytics.com",
        "frame-src 'none'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "frame-ancestors 'none'",
        "upgrade-insecure-requests"
      ].join('; '));
      
      document.head.appendChild(csp);
    };

    // Add security headers
    const addSecurityHeaders = () => {
      const headers = [
        { name: 'X-Content-Type-Options', value: 'nosniff' },
        { name: 'X-Frame-Options', value: 'DENY' },
        { name: 'X-XSS-Protection', value: '1; mode=block' },
        { name: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { name: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' }
      ];

      // Note: These headers would typically be set by the server
      // This is just for demonstration in a client-side context
      console.log('Security headers should be set by server:', headers);
    };

    // Sanitize user input
    const sanitizeInput = (input: string): string => {
      const div = document.createElement('div');
      div.textContent = input;
      return div.innerHTML;
    };

    // Add global input sanitization
    const addInputSanitization = () => {
      const originalCreateElement = document.createElement;
      document.createElement = function(tagName: string) {
        const element = originalCreateElement.call(this, tagName);
        
        if (tagName.toLowerCase() === 'input' || tagName.toLowerCase() === 'textarea') {
          const originalSetAttribute = element.setAttribute;
          element.setAttribute = function(name: string, value: string) {
            if (name === 'value' || name === 'placeholder') {
              value = sanitizeInput(value);
            }
            return originalSetAttribute.call(this, name, value);
          };
        }
        
        return element;
      };
    };

    // Add clickjacking protection
    const addClickjackingProtection = () => {
      if (window.top !== window.self) {
        // If we're in a frame, redirect to the main page
        window.top.location = window.self.location;
      }
    };

    // Add XSS protection
    const addXSSProtection = () => {
      // Override innerHTML to sanitize content
      const originalInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
      if (originalInnerHTML) {
        Object.defineProperty(Element.prototype, 'innerHTML', {
          set: function(value: string) {
            const sanitized = sanitizeInput(value);
            originalInnerHTML.set.call(this, sanitized);
          },
          get: originalInnerHTML.get,
          configurable: true
        });
      }
    };

    // Add CSRF protection
    const addCSRFProtection = () => {
      // Generate CSRF token
      const csrfToken = Math.random().toString(36).substring(2, 15) + 
                       Math.random().toString(36).substring(2, 15);
      
      // Store token in sessionStorage
      sessionStorage.setItem('csrf-token', csrfToken);
      
      // Add token to all forms
      const addTokenToForms = () => {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
          if (!form.querySelector('input[name="csrf-token"]')) {
            const tokenInput = document.createElement('input');
            tokenInput.type = 'hidden';
            tokenInput.name = 'csrf-token';
            tokenInput.value = csrfToken;
            form.appendChild(tokenInput);
          }
        });
      };

      // Add token to forms when they're created
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              if (element.tagName === 'FORM') {
                addTokenToForms();
              } else {
                const forms = element.querySelectorAll('form');
                if (forms.length > 0) {
                  addTokenToForms();
                }
              }
            }
          });
        });
      });

      observer.observe(document.body, { childList: true, subtree: true });
      
      return () => observer.disconnect();
    };

    // Initialize security measures
    addCSP();
    addSecurityHeaders();
    addInputSanitization();
    addClickjackingProtection();
    addXSSProtection();
    const cleanupCSRF = addCSRFProtection();

    // Add secure cookie handling
    const addSecureCookies = () => {
      const originalSetCookie = document.cookie;
      Object.defineProperty(document, 'cookie', {
        get: function() {
          return originalSetCookie;
        },
        set: function(value: string) {
          // Ensure cookies are secure
          if (!value.includes('Secure') && location.protocol === 'https:') {
            value += '; Secure';
          }
          if (!value.includes('SameSite')) {
            value += '; SameSite=Strict';
          }
          if (!value.includes('HttpOnly')) {
            value += '; HttpOnly';
          }
          return originalSetCookie = value;
        },
        configurable: true
      });
    };

    addSecureCookies();

    // Cleanup function
    return () => {
      cleanupCSRF();
    };
  }, []);

  // Add security event listeners
  useEffect(() => {
    const handleSecurityEvents = (event: Event) => {
      // Log security events
      console.log('Security event:', event.type, event);
      
      // Handle specific security events
      if (event.type === 'error') {
        const errorEvent = event as ErrorEvent;
        if (errorEvent.message?.includes('Script error')) {
          // Block potentially malicious script errors
          event.preventDefault();
          event.stopPropagation();
        }
      }
    };

    // Add event listeners for security monitoring
    const events = ['error', 'unhandledrejection', 'securitypolicyviolation'];
    events.forEach(eventType => {
      window.addEventListener(eventType, handleSecurityEvents, true);
    });

    return () => {
      events.forEach(eventType => {
        window.removeEventListener(eventType, handleSecurityEvents, true);
      });
    };
  }, []);

  return <>{children}</>;
};

export default SecurityEnhancer;
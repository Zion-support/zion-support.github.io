import React, { useEffect } from 'react';

interface SecurityEnhancerProps {
  enableCSP?: boolean;
  enableHTTPSRedirect?: boolean;
  enableXSSProtection?: boolean;
  enableClickjackingProtection?: boolean;
  enableCSRFProtection?: boolean;
  enableContentSecurityPolicy?: boolean;
  enableStrictTransportSecurity?: boolean;
  enableReferrerPolicy?: boolean;
  enablePermissionsPolicy?: boolean;
  enableAnalytics?: boolean;
  enableErrorReporting?: boolean;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({
  enableCSP = true,
  enableHTTPSRedirect = true,
  enableXSSProtection = true,
  enableClickjackingProtection = true,
  enableCSRFProtection = true,
  enableContentSecurityPolicy = true,
  enableStrictTransportSecurity = true,
  enableReferrerPolicy = true,
  enablePermissionsPolicy = true,
  enableAnalytics = true,
  enableErrorReporting = true
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // HTTPS Redirect
    if (enableHTTPSRedirect && location.protocol !== 'https:' && location.hostname !== 'localhost') {
      location.replace(`https:${location.href.substring(location.protocol.length)}`);
    }

    // XSS Protection
    if (enableXSSProtection) {
      // Add XSS protection headers via meta tag
      const xssMeta = document.createElement('meta');
      xssMeta.setAttribute('http-equiv', 'X-XSS-Protection');
      xssMeta.setAttribute('content', '1; mode=block');
      document.head.appendChild(xssMeta);
    }

    // Clickjacking Protection
    if (enableClickjackingProtection) {
      // Add X-Frame-Options header via meta tag
      const frameOptionsMeta = document.createElement('meta');
      frameOptionsMeta.setAttribute('http-equiv', 'X-Frame-Options');
      frameOptionsMeta.setAttribute('content', 'DENY');
      document.head.appendChild(frameOptionsMeta);
    }

    // Content Security Policy
    if (enableContentSecurityPolicy) {
      const cspMeta = document.createElement('meta');
      cspMeta.setAttribute('http-equiv', 'Content-Security-Policy');
      cspMeta.setAttribute('content', [
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
      ].join('; '));
      document.head.appendChild(cspMeta);
    }

    // Strict Transport Security
    if (enableStrictTransportSecurity) {
      const hstsMeta = document.createElement('meta');
      hstsMeta.setAttribute('http-equiv', 'Strict-Transport-Security');
      hstsMeta.setAttribute('content', 'max-age=31536000; includeSubDomains; preload');
      document.head.appendChild(hstsMeta);
    }

    // Referrer Policy
    if (enableReferrerPolicy) {
      const referrerMeta = document.createElement('meta');
      referrerMeta.setAttribute('name', 'referrer');
      referrerMeta.setAttribute('content', 'strict-origin-when-cross-origin');
      document.head.appendChild(referrerMeta);
    }

    // Permissions Policy
    if (enablePermissionsPolicy) {
      const permissionsMeta = document.createElement('meta');
      permissionsMeta.setAttribute('http-equiv', 'Permissions-Policy');
      permissionsMeta.setAttribute('content', [
        'camera=()',
        'microphone=()',
        'geolocation=()',
        'interest-cohort=()',
        'payment=()',
        'usb=()',
        'magnetometer=()',
        'gyroscope=()',
        'accelerometer=()'
      ].join(', '));
      document.head.appendChild(permissionsMeta);
    }

    // CSRF Protection
    if (enableCSRFProtection) {
      // Generate CSRF token
      const csrfToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      sessionStorage.setItem('csrfToken', csrfToken);
      
      // Add CSRF token to all forms
      const addCSRFTokenToForms = () => {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
          const existingToken = form.querySelector('input[name="csrfToken"]');
          if (!existingToken) {
            const csrfInput = document.createElement('input');
            csrfInput.type = 'hidden';
            csrfInput.name = 'csrfToken';
            csrfInput.value = csrfToken;
            form.appendChild(csrfInput);
          }
        });
      };

      // Add CSRF token to forms on page load
      addCSRFTokenToForms();

      // Add CSRF token to dynamically created forms
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              if (element.tagName === 'FORM') {
                addCSRFTokenToForms();
              } else {
                const forms = element.querySelectorAll('form');
                if (forms.length > 0) {
                  addCSRFTokenToForms();
                }
              }
            }
          });
        });
      });

      observer.observe(document.body, { childList: true, subtree: true });
    }

    // Input sanitization
    const sanitizeInput = (input: string): string => {
      return input
        .replace(/[<>]/g, '') // Remove < and >
        .replace(/javascript:/gi, '') // Remove javascript: protocol
        .replace(/on\w+\s*=/gi, '') // Remove event handlers
        .trim();
    };

    // Sanitize all text inputs
    const sanitizeInputs = () => {
      const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], textarea');
      inputs.forEach(input => {
        input.addEventListener('input', (e) => {
          const target = e.target as HTMLInputElement;
          const originalValue = target.value;
          const sanitizedValue = sanitizeInput(originalValue);
          if (originalValue !== sanitizedValue) {
            target.value = sanitizedValue;
            console.warn('Input sanitized for security');
          }
        });
      });
    };

    // Run sanitization on page load
    sanitizeInputs();

    // Run sanitization on dynamically added inputs
    const inputObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
              sanitizeInputs();
            } else {
              const inputs = element.querySelectorAll('input, textarea');
              if (inputs.length > 0) {
                sanitizeInputs();
              }
            }
          }
        });
      });
    });

    inputObserver.observe(document.body, { childList: true, subtree: true });

    // Secure cookie handling
    const setSecureCookie = (name: string, value: string, days: number = 7) => {
      const expires = new Date();
      expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
      const secureFlag = location.protocol === 'https:' ? '; Secure' : '';
      document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Strict${secureFlag}`;
    };

    // Get secure cookie
    const getSecureCookie = (name: string): string | null => {
      const nameEQ = name + '=';
      const ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    };

    // Expose secure cookie functions globally
    (window as any).setSecureCookie = setSecureCookie;
    (window as any).getSecureCookie = getSecureCookie;

    // Security headers validation
    const validateSecurityHeaders = () => {
      const requiredHeaders = [
        'X-XSS-Protection',
        'X-Frame-Options',
        'Content-Security-Policy',
        'Strict-Transport-Security',
        'Referrer-Policy',
        'Permissions-Policy'
      ];

      // This would typically be done server-side, but we can check what's available
      console.log('Security headers validation would be performed server-side');
    };

    // Run validation
    validateSecurityHeaders();

    // Analytics
    if (enableAnalytics && typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as any).gtag;
      
      // Track security events
      const trackSecurityEvent = (event: string, details?: any) => {
        gtag('event', 'security_event', {
          event_category: 'Security',
          event_label: event,
          custom_parameters: details
        });
      };

      // Track potential security issues
      window.addEventListener('beforeunload', () => {
        trackSecurityEvent('page_unload');
      });

      // Track form submissions for potential CSRF
      document.addEventListener('submit', (e) => {
        const form = e.target as HTMLFormElement;
        const csrfToken = form.querySelector('input[name="csrfToken"]');
        if (!csrfToken) {
          trackSecurityEvent('form_submission_without_csrf');
        }
      });
    }

    // Error reporting
    if (enableErrorReporting) {
      window.addEventListener('error', (event) => {
        console.error('Security error:', event.error);
        
        if (typeof window !== 'undefined' && 'gtag' in window) {
          const gtag = (window as any).gtag;
          gtag('event', 'security_error', {
            event_category: 'Security',
            event_label: event.error?.message || 'Unknown security error'
          });
        }
      });

      // Track unhandled promise rejections
      window.addEventListener('unhandledrejection', (event) => {
        console.error('Unhandled promise rejection:', event.reason);
        
        if (typeof window !== 'undefined' && 'gtag' in window) {
          const gtag = (window as any).gtag;
          gtag('event', 'security_error', {
            event_category: 'Security',
            event_label: 'Unhandled promise rejection'
          });
        }
      });
    }

  }, [
    enableCSP,
    enableHTTPSRedirect,
    enableXSSProtection,
    enableClickjackingProtection,
    enableCSRFProtection,
    enableContentSecurityPolicy,
    enableStrictTransportSecurity,
    enableReferrerPolicy,
    enablePermissionsPolicy,
    enableAnalytics,
    enableErrorReporting
  ]);

  return null; // This component doesn't render anything
};

export default SecurityEnhancer;
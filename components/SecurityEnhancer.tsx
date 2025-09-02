import React, { useEffect } from 'react';

const SecurityEnhancer: React.FC = () => {
  useEffect(() => {
    // Content Security Policy (CSP) Headers
    const addSecurityHeaders = () => {
      // Add security headers via meta tags
      const securityHeaders = [
        {
          name: 'Content-Security-Policy',
          content: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self';"
        },
        {
          name: 'X-Content-Type-Options',
          content: 'nosniff'
        },
        {
          name: 'X-Frame-Options',
          content: 'DENY'
        },
        {
          name: 'X-XSS-Protection',
          content: '1; mode=block'
        },
        {
          name: 'Referrer-Policy',
          content: 'strict-origin-when-cross-origin'
        },
        {
          name: 'Permissions-Policy',
          content: 'camera=(), microphone=(), geolocation=(), payment=()'
        }
      ];

      securityHeaders.forEach(header => {
        let meta = document.querySelector(`meta[name="${header.name}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('name', header.name);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', header.content);
      });
    };

    // Input sanitization
    const sanitizeInputs = () => {
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        input.addEventListener('input', (e) => {
          const target = e.target as HTMLInputElement;
          // Basic XSS prevention
          target.value = target.value
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
            .replace(/javascript:/gi, '')
            .replace(/on\w+\s*=/gi, '');
        });
      });
    };

    // Form validation and sanitization
    const enhanceFormSecurity = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        form.addEventListener('submit', (e) => {
          let isValid = true;

          // Validate required fields
          const requiredFields = form.querySelectorAll('[required]');
          requiredFields.forEach(field => {
            const input = field as HTMLInputElement;
            if (!input.value.trim()) {
              isValid = false;
              input.classList.add('error');
            } else {
              input.classList.remove('error');
            }
          });

          // Email validation
          const emailFields = form.querySelectorAll('input[type="email"]');
          emailFields.forEach(field => {
            const input = field as HTMLInputElement;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (input.value && !emailRegex.test(input.value)) {
              isValid = false;
              input.classList.add('error');
            } else {
              input.classList.remove('error');
            }
          });

          // Phone validation
          const phoneFields = form.querySelectorAll('input[type="tel"]');
          phoneFields.forEach(field => {
            const input = field as HTMLInputElement;
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (input.value && !phoneRegex.test(input.value.replace(/\s/g, ''))) {
              isValid = false;
              input.classList.add('error');
            } else {
              input.classList.remove('error');
            }
          });

          if (!isValid) {
            e.preventDefault();
            console.warn('Form validation failed');
          }
        });
      });
    };

    // Rate limiting simulation
    const implementRateLimiting = () => {
      const rateLimitMap = new Map();
      const RATE_LIMIT_WINDOW = 60000; // 1 minute
      const MAX_REQUESTS = 10;

      const checkRateLimit = (identifier: string): boolean => {
        const now = Date.now();
        const requests = rateLimitMap.get(identifier) || [];
        
        // Remove old requests
        const validRequests = requests.filter((time: number) => now - time < RATE_LIMIT_WINDOW);
        
        if (validRequests.length >= MAX_REQUESTS) {
          return false; // Rate limit exceeded
        }
        
        validRequests.push(now);
        rateLimitMap.set(identifier, validRequests);
        return true;
      };

      // Apply rate limiting to forms
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        form.addEventListener('submit', (e) => {
          const identifier = 'form-submit'; // In real app, use user IP or session
          if (!checkRateLimit(identifier)) {
            e.preventDefault();
            alert('Too many requests. Please try again later.');
            return;
          }
        });
      });
    };

    // Secure cookie handling
    const secureCookies = () => {
      // Set secure cookie attributes
      const cookies = document.cookie.split(';');
      cookies.forEach(cookie => {
        const [name, value] = cookie.trim().split('=');
        if (name && value) {
          // Update cookie with secure attributes
          document.cookie = `${name}=${value}; Secure; SameSite=Strict; HttpOnly`;
        }
      });
    };

    // Initialize security measures
    addSecurityHeaders();
    sanitizeInputs();
    enhanceFormSecurity();
    implementRateLimiting();
    secureCookies();

    // Monitor for suspicious activity
    const monitorSuspiciousActivity = () => {
      let suspiciousActivityCount = 0;
      const SUSPICIOUS_THRESHOLD = 5;

      // Monitor for rapid clicks
      let clickCount = 0;
      let lastClickTime = 0;
      
      document.addEventListener('click', () => {
        const now = Date.now();
        if (now - lastClickTime < 100) { // Less than 100ms between clicks
          clickCount++;
          if (clickCount > SUSPICIOUS_THRESHOLD) {
            suspiciousActivityCount++;
            console.warn('Suspicious activity detected: rapid clicking');
          }
        } else {
          clickCount = 0;
        }
        lastClickTime = now;
      });

      // Monitor for rapid form submissions
      let formSubmissionCount = 0;
      let lastFormSubmission = 0;

      document.addEventListener('submit', () => {
        const now = Date.now();
        if (now - lastFormSubmission < 1000) { // Less than 1 second between submissions
          formSubmissionCount++;
          if (formSubmissionCount > 3) {
            suspiciousActivityCount++;
            console.warn('Suspicious activity detected: rapid form submissions');
          }
        } else {
          formSubmissionCount = 0;
        }
        lastFormSubmission = now;
      });

      // Alert if too many suspicious activities
      if (suspiciousActivityCount > 10) {
        console.error('High level of suspicious activity detected');
        // In a real application, you might want to:
        // - Block the user
        // - Send an alert to administrators
        // - Implement additional security measures
      }
    };

    monitorSuspiciousActivity();

    // Cleanup function
    return () => {
      // Remove event listeners if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SecurityEnhancer;
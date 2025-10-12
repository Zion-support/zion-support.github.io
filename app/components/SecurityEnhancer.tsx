'use client';
import React, { useEffect } from 'react';

<<<<<<< HEAD
interface SecurityEnhancerProps {
  children: React.ReactNode;
=======
        'Referrer-Policy': 'strict-origin-when-cross-origin'
      }

      // Add CSP meta tag
      const cspMeta = document.createElement('meta')
      cspMeta.setAttribute('http-equiv', 'Content-Security-Policy')
      cspMeta.setAttribute('content', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;")
      document.head.appendChild(cspMeta)

      // Add security event listeners
      const handleSecurityEvent = (event: Event) => {
        console.log('Security event detected:', event.type)
      }

      window.addEventListener('beforeunload', handleSecurityEvent)
      window.addEventListener('unload', handleSecurityEvent)

      return () => {
        window.removeEventListener('beforeunload', handleSecurityEvent)
        window.removeEventListener('unload', handleSecurityEvent)
        document.head.removeChild(cspMeta)
      }
    }

    const cleanup = enhanceSecurity()
    return cleanup
  }, [])

  return (
<<<<<<< HEAD
    <div className={`security-enhanced ${className}`}>
      {children}
=======
    <>
    <div className="{`security-enhanced" ${className}`}>{children}
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
    </div>
  )
>>>>>>> origin/main
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

<<<<<<< HEAD
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
=======
      // Disable right-click context menu
      document.addEventListener('contextmenu', (e) => {e.preventDefault()}
      });// Disable F12 and other dev tools shortcuts
      document.addEventListener('keydown', (e) => {if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {e.preventDefault()}
        }
<<<<<<< HEAD
=======
;
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
>>>>>>> origin/main

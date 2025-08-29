import React, { useEffect } from 'react';

export const SecurityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add security headers
    const addSecurityHeaders = () => {
      // Content Security Policy
      const cspMeta = document.createElement('meta');
      cspMeta.httpEquiv = 'Content-Security-Policy';
      cspMeta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self' https:; frame-src 'none'; object-src 'none';";
      document.head.appendChild(cspMeta);

      // X-Frame-Options
      const frameOptionsMeta = document.createElement('meta');
      frameOptionsMeta.httpEquiv = 'X-Frame-Options';
      frameOptionsMeta.content = 'DENY';
      document.head.appendChild(frameOptionsMeta);

      // X-Content-Type-Options
      const contentTypeMeta = document.createElement('meta');
      contentTypeMeta.httpEquiv = 'X-Content-Type-Options';
      contentTypeMeta.content = 'nosniff';
      document.head.appendChild(contentTypeMeta);

      // Referrer Policy
      const referrerMeta = document.createElement('meta');
      referrerMeta.name = 'referrer';
      referrerMeta.content = 'strict-origin-when-cross-origin';
      document.head.appendChild(referrerMeta);

      // Permissions Policy
      const permissionsMeta = document.createElement('meta');
      permissionsMeta.httpEquiv = 'Permissions-Policy';
      permissionsMeta.content = 'geolocation=(), microphone=(), camera=()';
      document.head.appendChild(permissionsMeta);
    };

    // Monitor for potential XSS attempts
    const monitorXSS = () => {
      const originalCreateElement = document.createElement;
      document.createElement = function(tagName: string) {
        const element = originalCreateElement.call(document, tagName);
        
        // Monitor script tag creation
        if (tagName.toLowerCase() === 'script') {
          console.warn('Script tag creation detected:', new Error().stack);
        }
        
        return element;
      };
    };

    // Monitor for potential injection attempts
    const monitorInjection = () => {
      const originalSetAttribute = Element.prototype.setAttribute;
      Element.prototype.setAttribute = function(name: string, value: string) {
        // Check for potentially dangerous attributes
        if (name.toLowerCase().includes('on') || value.includes('javascript:')) {
          console.warn('Potentially dangerous attribute detected:', { name, value });
        }
        
        return originalSetAttribute.call(this, name, value);
      };
    };

    // Monitor for external links
    const monitorExternalLinks = () => {
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'A') {
          const href = (target as HTMLAnchorElement).href;
          if (href && !href.startsWith(window.location.origin) && !href.startsWith('/')) {
            // Add security attributes to external links
            (target as HTMLAnchorElement).setAttribute('rel', 'noopener noreferrer');
            (target as HTMLAnchorElement).setAttribute('target', '_blank');
          }
        }
      });
    };

    // Monitor for form submissions
    const monitorFormSubmissions = () => {
      document.addEventListener('submit', (e) => {
        const form = e.target as HTMLFormElement;
        const action = form.action;
        
        // Check if form is submitting to external domain
        if (action && !action.startsWith(window.location.origin) && !action.startsWith('/')) {
          console.warn('Form submission to external domain detected:', action);
        }
        
        // Check for potentially dangerous form fields
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach((input) => {
          const value = (input as HTMLInputElement).value;
          if (value.includes('<script') || value.includes('javascript:')) {
            console.warn('Potentially dangerous form input detected:', value);
            e.preventDefault();
          }
        });
      });
    };

    // Monitor for iframe creation
    const monitorIframes = () => {
      const originalCreateElement = document.createElement;
      document.createElement = function(tagName: string) {
        const element = originalCreateElement.call(document, tagName);
        
        if (tagName.toLowerCase() === 'iframe') {
          console.warn('Iframe creation detected:', new Error().stack);
          
          // Add security attributes
          element.setAttribute('sandbox', 'allow-scripts allow-same-origin');
          element.setAttribute('loading', 'lazy');
        }
        
        return element;
      };
    };

    // Initialize security monitoring
    try {
      addSecurityHeaders();
      monitorXSS();
      monitorInjection();
      monitorExternalLinks();
      monitorFormSubmissions();
      monitorIframes();
    } catch (error) {
      console.warn('Security monitoring initialization failed:', error);
    }

    // Cleanup function
    return () => {
      // Restore original methods if needed
      if ((document as any).__originalCreateElement) {
        document.createElement = (document as any).__originalCreateElement;
      }
      
      if ((Element.prototype as any).__originalSetAttribute) {
        Element.prototype.setAttribute = (Element.prototype as any).__originalSetAttribute;
      }
    };
  }, []);

  // This component doesn't render anything visible
  return null;
};
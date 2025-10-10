import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add skip to main content link
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-400 text-slate-900 px-4 py-2 rounded-lg font-semibold z-50';
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #06b6d4;
        color: #0f172a;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
      `;
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Enhance keyboard navigation
    const enhanceKeyboardNavigation = () => {
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }
        
        .focus-visible:focus {
          outline: 2px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }
        
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        
        .focus\:not-sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: 0;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
      `;
      document.head.appendChild(style);
    };

    // Add ARIA labels to interactive elements
    const addAriaLabels = () => {
      // Add aria-label to buttons without text
      const iconButtons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      iconButtons.forEach((button, index) => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', `Button ${index + 1}`);
        }
      });

      // Add aria-label to links without text
      const iconLinks = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
      iconLinks.forEach((link, index) => {
        if (!link.textContent?.trim()) {
          link.setAttribute('aria-label', `Link ${index + 1}`);
        }
      });

      // Add role to navigation
      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Main navigation');
      }

      // Add role to main content
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }

      // Add role to footer
      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }
    };

    // Enhance form accessibility
    const enhanceFormAccessibility = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach((form) => {
        // Add aria-live region for form validation
        if (!form.querySelector('[aria-live]')) {
          const liveRegion = document.createElement('div');
          liveRegion.setAttribute('aria-live', 'polite');
          liveRegion.setAttribute('aria-atomic', 'true');
          liveRegion.className = 'sr-only';
          liveRegion.id = `form-errors-${Date.now()}`;
          form.appendChild(liveRegion);
        }

        // Add required indicators
        const requiredFields = form.querySelectorAll('input[required], select[required], textarea[required]');
        requiredFields.forEach((field) => {
          const label = form.querySelector(`label[for="${field.id}"]`);
          if (label && !label.querySelector('.required-indicator')) {
            const indicator = document.createElement('span');
            indicator.textContent = ' *';
            indicator.className = 'required-indicator text-red-400';
            indicator.setAttribute('aria-label', 'required');
            label.appendChild(indicator);
          }
        });
      });
    };

    // Add high contrast mode support
    const addHighContrastSupport = () => {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('high-contrast');
        } else {
          document.documentElement.classList.remove('high-contrast');
        }
      };

      mediaQuery.addEventListener('change', handleContrastChange);
      handleContrastChange(mediaQuery);

      // Add high contrast styles
      const style = document.createElement('style');
      style.textContent = `
        .high-contrast {
          --tw-bg-opacity: 1;
          --tw-text-opacity: 1;
        }
        
        .high-contrast .bg-slate-900 {
          background-color: #000000 !important;
        }
        
        .high-contrast .text-white {
          color: #ffffff !important;
        }
        
        .high-contrast .text-gray-300 {
          color: #ffffff !important;
        }
        
        .high-contrast .border-cyan-400 {
          border-color: #00ffff !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Initialize accessibility enhancements
    addSkipLink();
    enhanceKeyboardNavigation();
    addAriaLabels();
    enhanceFormAccessibility();
    addHighContrastSupport();

    // Cleanup function
    return () => {
      // Cleanup any event listeners or observers
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;
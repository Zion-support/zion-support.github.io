'use client';

import { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Skip to main content functionality
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-lg z-50';
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #0891b2;
        color: white;
        padding: 8px 16px;
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

    // Add focus indicators
    const enhanceFocusIndicators = () => {
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #0891b2 !important;
          outline-offset: 2px !important;
        }
        
        .focus-visible:focus {
          outline: 2px solid #0891b2 !important;
          outline-offset: 2px !important;
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          * {
            border-color: currentColor !important;
          }
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `;
      document.head.appendChild(style);
    };

    // Add ARIA landmarks
    const addAriaLandmarks = () => {
      const main = document.querySelector('main');
      if (main && !main.getAttribute('id')) {
        main.id = 'main-content';
        main.setAttribute('role', 'main');
        main.setAttribute('aria-label', 'Main content');
      }

      const header = document.querySelector('header');
      if (header) {
        header.setAttribute('role', 'banner');
      }

      const footer = document.querySelector('footer');
      if (footer) {
        footer.setAttribute('role', 'contentinfo');
      }

      const nav = document.querySelector('nav');
      if (nav) {
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Main navigation');
      }
    };

    // Enhance form accessibility
    const enhanceFormAccessibility = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach((form) => {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach((input) => {
          const inputElement = input as HTMLInputElement;
          
          // Add required indicator
          if (inputElement.required && !inputElement.getAttribute('aria-required')) {
            inputElement.setAttribute('aria-required', 'true');
          }
          
          // Add error states
          if (inputElement.validity && !inputElement.validity.valid) {
            inputElement.setAttribute('aria-invalid', 'true');
          }
        });
      });
    };

    // Add keyboard navigation support
    const enhanceKeyboardNavigation = () => {
      // Trap focus in modals
      const trapFocus = (element: HTMLElement) => {
        const focusableElements = element.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        element.addEventListener('keydown', (e) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
              }
            }
          }
        });
      };

      // Apply to modals
      const modals = document.querySelectorAll('[role="dialog"], .modal');
      modals.forEach(trapFocus);
    };

    // Add screen reader announcements
    const addScreenReaderAnnouncements = () => {
      const announcer = document.createElement('div');
      announcer.setAttribute('aria-live', 'polite');
      announcer.setAttribute('aria-atomic', 'true');
      announcer.className = 'sr-only';
      announcer.id = 'screen-reader-announcer';
      document.body.appendChild(announcer);

      // Function to announce messages
      (window as any).announceToScreenReader = (message: string) => {
        announcer.textContent = message;
        setTimeout(() => {
          announcer.textContent = '';
        }, 1000);
      };
    };

    // Monitor and report accessibility issues
    const monitorAccessibility = () => {
      // Check for missing alt text
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.getAttribute('alt') && !img.getAttribute('aria-label')) {
          console.warn('Image missing alt text:', img);
        }
      });

      // Check for missing form labels
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach((input) => {
        const inputElement = input as HTMLInputElement;
        if (!inputElement.labels?.length && !inputElement.getAttribute('aria-label') && !inputElement.getAttribute('aria-labelledby')) {
          console.warn('Form input missing label:', inputElement);
        }
      });

      // Check for proper heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let lastLevel = 0;
      headings.forEach((heading) => {
        const level = parseInt(heading.tagName.charAt(1));
        if (level > lastLevel + 1) {
          console.warn('Heading hierarchy skipped:', heading);
        }
        lastLevel = level;
      });
    };

    // Initialize all enhancements
    addSkipLink();
    enhanceFocusIndicators();
    addAriaLandmarks();
    enhanceFormAccessibility();
    enhanceKeyboardNavigation();
    addScreenReaderAnnouncements();
    monitorAccessibility();

    // Re-run enhancements when DOM changes
    const observer = new MutationObserver(() => {
      addAriaLandmarks();
      enhanceFormAccessibility();
      monitorAccessibility();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AccessibilityEnhancer;
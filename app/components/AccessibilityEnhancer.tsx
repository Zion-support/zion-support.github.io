import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Enhance keyboard navigation
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content with Tab
      if (event.key === 'Tab' && !event.shiftKey) {
        const skipLink = document.querySelector('.skip-link') as HTMLElement;
        if (skipLink && document.activeElement === document.body) {
          skipLink.focus();
        }
      }

      // Close modals with Escape
      if (event.key === 'Escape') {
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach(modal => {
          const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
          if (closeButton) {
            closeButton.click();
          }
        });
      }
    };

    // Add focus management for better accessibility
    const manageFocus = () => {
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        .keyboard-focus:focus {
          outline: 2px solid #4f46e5 !important;
          outline-offset: 2px !important;
        }
        
        .skip-link:focus {
          position: absolute !important;
          top: 6px !important;
          left: 6px !important;
          z-index: 1000 !important;
        }
      `;
      document.head.appendChild(style);

      // Add keyboard navigation classes
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });

      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
    };

    // Enhance form accessibility
    const enhanceForms = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        // Add required field indicators
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
          const label = form.querySelector(`label[for="${field.id}"]`);
          if (label && !label.textContent?.includes('*')) {
            label.innerHTML += ' <span class="text-red-500" aria-label="required">*</span>';
          }
        });

        // Add error handling
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
          input.addEventListener('invalid', (e) => {
            const target = e.target as HTMLInputElement;
            const errorId = `${target.id}-error`;
            let errorElement = document.getElementById(errorId);
            
            if (!errorElement) {
              errorElement = document.createElement('div');
              errorElement.id = errorId;
              errorElement.className = 'text-red-500 text-sm mt-1';
              errorElement.setAttribute('role', 'alert');
              target.parentNode?.insertBefore(errorElement, target.nextSibling);
            }
            
            errorElement.textContent = target.validationMessage;
            target.setAttribute('aria-describedby', errorId);
          });

          input.addEventListener('input', () => {
            const errorElement = document.getElementById(`${input.id}-error`);
            if (errorElement && input.checkValidity()) {
              errorElement.textContent = '';
              input.removeAttribute('aria-describedby');
            }
          });
        });
      });
    };

    // Add ARIA landmarks
    const addLandmarks = () => {
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }

      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
      }

      const header = document.querySelector('header');
      if (header && !header.getAttribute('role')) {
        header.setAttribute('role', 'banner');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }
    };

    // Initialize accessibility enhancements
    manageFocus();
    enhanceForms();
    addLandmarks();

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);

    // Monitor for dynamic content changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          enhanceForms();
          addLandmarks();
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
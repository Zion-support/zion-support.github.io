import { useEffect } from 'react';

const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Skip to main content functionality
    const addSkipToMainContent = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50';
      skipLink.style.cssText = `
        position: absolute;
        left: -9999px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
      `;
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.cssText = `
          position: absolute;
          top: 1rem;
          left: 1rem;
          background-color: #4f46e5;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          z-index: 50;
          width: auto;
          height: auto;
          overflow: visible;
        `;
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.cssText = `
          position: absolute;
          left: -9999px;
          top: auto;
          width: 1px;
          height: 1px;
          overflow: hidden;
        `;
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Focus management for modals and dropdowns
    const setupFocusManagement = () => {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      
      const trapFocus = (element: HTMLElement) => {
        const focusableContent = element.querySelectorAll(focusableElements);
        const firstFocusableElement = focusableContent[0] as HTMLElement;
        const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

        element.addEventListener('keydown', (e) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
                e.preventDefault();
              }
            }
          }
        });
      };

      // Apply focus trapping to modals
      const modals = document.querySelectorAll('[role="dialog"], .modal');
      modals.forEach(modal => trapFocus(modal as HTMLElement));
    };

    // High contrast mode detection
    const setupHighContrastMode = () => {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
      
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      };

      prefersHighContrast.addEventListener('change', handleContrastChange);
      handleContrastChange(prefersHighContrast);
    };

    // Reduced motion detection
    const setupReducedMotion = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      const handleMotionChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.body.classList.add('reduced-motion');
          // Disable animations
          const style = document.createElement('style');
          style.textContent = `
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          `;
          document.head.appendChild(style);
        } else {
          document.body.classList.remove('reduced-motion');
        }
      };

      prefersReducedMotion.addEventListener('change', handleMotionChange);
      handleMotionChange(prefersReducedMotion);
    };

    // Keyboard navigation enhancements
    const setupKeyboardNavigation = () => {
      // Add keyboard support for custom elements
      const customButtons = document.querySelectorAll('[role="button"]:not(button)');
      customButtons.forEach(button => {
        button.setAttribute('tabindex', '0');
        button.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            (button as HTMLElement).click();
          }
        });
      });

      // Add ARIA labels to icon buttons
      const iconButtons = document.querySelectorAll('button svg, [role="button"] svg');
      iconButtons.forEach(button => {
        const svg = button.querySelector('svg');
        if (svg && !svg.getAttribute('aria-label') && !button.getAttribute('aria-label')) {
          const text = button.textContent?.trim() || 'Button';
          button.setAttribute('aria-label', text);
        }
      });
    };

    // Screen reader announcements
    const setupScreenReaderAnnouncements = () => {
      const announcementRegion = document.createElement('div');
      announcementRegion.setAttribute('aria-live', 'polite');
      announcementRegion.setAttribute('aria-atomic', 'true');
      announcementRegion.className = 'sr-only';
      announcementRegion.id = 'announcements';
      document.body.appendChild(announcementRegion);

      // Global function for announcements
      (window as any).announceToScreenReader = (message: string) => {
        announcementRegion.textContent = message;
        setTimeout(() => {
          announcementRegion.textContent = '';
        }, 1000);
      };
    };

    // Form validation enhancements
    const setupFormValidation = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
          input.addEventListener('invalid', () => {
            const errorMessage = input.getAttribute('data-error-message') || 'Please fill out this field correctly';
            input.setAttribute('aria-invalid', 'true');
            
            let errorElement = input.parentNode?.querySelector('.error-message');
            if (!errorElement) {
              errorElement = document.createElement('div');
              errorElement.className = 'error-message text-red-600 text-sm mt-1';
              errorElement.setAttribute('role', 'alert');
              input.parentNode?.appendChild(errorElement);
            }
            errorElement.textContent = errorMessage;
          });

          input.addEventListener('input', () => {
            input.removeAttribute('aria-invalid');
            const errorElement = input.parentNode?.querySelector('.error-message');
            if (errorElement) {
              errorElement.remove();
            }
          });
        });
      });
    };

    // Initialize all accessibility enhancements
    addSkipToMainContent();
    setupFocusManagement();
    setupHighContrastMode();
    setupReducedMotion();
    setupKeyboardNavigation();
    setupScreenReaderAnnouncements();
    setupFormValidation();

    // Add accessibility styles
    const accessibilityStyles = document.createElement('style');
    accessibilityStyles.textContent = `
      .high-contrast {
        filter: contrast(150%) brightness(110%);
      }
      
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
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
      
      .focus-visible:focus {
        outline: 2px solid #4f46e5;
        outline-offset: 2px;
      }
      
      [aria-invalid="true"] {
        border-color: #dc2626;
        box-shadow: 0 0 0 1px #dc2626;
      }
      
      .error-message {
        color: #dc2626;
        font-size: 0.875rem;
        margin-top: 0.25rem;
      }
    `;
    document.head.appendChild(accessibilityStyles);

  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
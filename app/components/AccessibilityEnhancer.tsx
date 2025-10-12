import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add skip links
    const addSkipLinks = () => {
      const skipLinks = document.createElement('div');
      skipLinks.innerHTML = `
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <a href="#navigation" class="skip-link">Skip to navigation</a>
        <a href="#footer" class="skip-link">Skip to footer</a>
      `;
      document.body.insertBefore(skipLinks, document.body.firstChild);
    };

    // Enhance focus management
    const enhanceFocusManagement = () => {
      // Add focus trap for modals
      const modals = document.querySelectorAll('[role="dialog"]');
      modals.forEach(modal => {
        const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                lastElement?.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastElement) {
                firstElement?.focus();
                e.preventDefault();
              }
            }
          }
        };

        modal.addEventListener('keydown', handleTabKey);
      });
    };

    // Add ARIA live regions for dynamic content
    const addLiveRegions = () => {
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);
    };

    // Enhance form accessibility
    const enhanceFormAccessibility = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
          const inputElement = input as HTMLInputElement;
          
          // Add required indicator
          if (inputElement.required) {
            const label = form.querySelector(`label[for="${inputElement.id}"]`);
            if (label && !label.textContent?.includes('*')) {
              label.innerHTML += ' <span class="text-red-400" aria-label="required">*</span>';
            }
          }

          // Add error handling
          inputElement.addEventListener('invalid', () => {
            const errorId = `${inputElement.id}-error`;
            let errorElement = document.getElementById(errorId);
            
            if (!errorElement) {
              errorElement = document.createElement('div');
              errorElement.id = errorId;
              errorElement.className = 'text-red-400 text-sm mt-1';
              errorElement.setAttribute('role', 'alert');
              inputElement.parentNode?.insertBefore(errorElement, inputElement.nextSibling);
            }
            
            errorElement.textContent = inputElement.validationMessage;
            inputElement.setAttribute('aria-describedby', errorId);
          });

          inputElement.addEventListener('input', () => {
            const errorElement = document.getElementById(`${inputElement.id}-error`);
            if (errorElement) {
              errorElement.textContent = '';
            }
          });
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
    };

    // Add reduced motion support
    const addReducedMotionSupport = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      const handleMotionChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('reduce-motion');
        } else {
          document.documentElement.classList.remove('reduce-motion');
        }
      };

      mediaQuery.addEventListener('change', handleMotionChange);
      handleMotionChange(mediaQuery);
    };

    // Initialize all enhancements
    addSkipLinks();
    addLiveRegions();
    enhanceFormAccessibility();
    addHighContrastSupport();
    addReducedMotionSupport();

    // Run focus management after a short delay to ensure DOM is ready
    setTimeout(enhanceFocusManagement, 100);

    // Cleanup function
    return () => {
      const skipLinks = document.querySelector('.skip-link')?.parentNode;
      if (skipLinks) {
        skipLinks.remove();
      }
      
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.remove();
      }
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;
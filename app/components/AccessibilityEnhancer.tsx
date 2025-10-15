import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  enabled?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ enabled = true }) => {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    // Add skip link functionality
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Enhance focus management
    const enhanceFocusManagement = () => {
      // Add focus indicators for keyboard navigation
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #8b5cf6;
          outline-offset: 2px;
        }
        .focus-visible:focus {
          outline: 2px solid #8b5cf6;
          outline-offset: 2px;
        }
      `;
      document.head.appendChild(style);
    };

    // Add ARIA labels to interactive elements
    const addAriaLabels = () => {
      // Add aria-label to buttons without text
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach((button, index) => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', `Button ${index + 1}`);
        }
      });

      // Add aria-label to links without text
      const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
      links.forEach((link, index) => {
        if (!link.textContent?.trim()) {
          link.setAttribute('aria-label', `Link ${index + 1}`);
        }
      });
    };

    // Enhance form accessibility
    const enhanceFormAccessibility = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        // Add role="form" if not present
        if (!form.getAttribute('role')) {
          form.setAttribute('role', 'form');
        }

        // Add aria-required to required inputs
        const requiredInputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        requiredInputs.forEach(input => {
          input.setAttribute('aria-required', 'true');
        });

        // Add error handling
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
          input.addEventListener('invalid', (e) => {
            const target = e.target as HTMLInputElement;
            const errorId = `${target.name}-error`;
            let errorElement = document.getElementById(errorId);
            
            if (!errorElement) {
              errorElement = document.createElement('div');
              errorElement.id = errorId;
              errorElement.className = 'text-red-400 text-sm mt-1';
              errorElement.setAttribute('role', 'alert');
              target.parentNode?.appendChild(errorElement);
            }
            
            errorElement.textContent = target.validationMessage;
            target.setAttribute('aria-describedby', errorId);
          });
        });
      });
    };

    // Add keyboard navigation support
    const addKeyboardNavigation = () => {
      // Handle Escape key for modals and dropdowns
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          // Close any open modals or dropdowns
          const modals = document.querySelectorAll('[role="dialog"]');
          modals.forEach(modal => {
            if (modal.getAttribute('aria-hidden') !== 'true') {
              modal.setAttribute('aria-hidden', 'true');
              modal.style.display = 'none';
            }
          });
        }
      });

      // Handle Enter and Space keys for custom interactive elements
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          const target = e.target as HTMLElement;
          if (target.getAttribute('role') === 'button' && !target.tagName.toLowerCase().includes('button')) {
            e.preventDefault();
            target.click();
          }
        }
      });
    };

    // Add screen reader announcements
    const addScreenReaderSupport = () => {
      // Create a live region for announcements
      const liveRegion = document.createElement('div');
      liveRegion.id = 'live-region';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      document.body.appendChild(liveRegion);

      // Function to announce messages
      window.announceToScreenReader = (message: string) => {
        liveRegion.textContent = message;
        setTimeout(() => {
          liveRegion.textContent = '';
        }, 1000);
      };
    };

    // Initialize all enhancements
    addSkipLink();
    enhanceFocusManagement();
    addAriaLabels();
    enhanceFormAccessibility();
    addKeyboardNavigation();
    addScreenReaderSupport();

    // Re-run enhancements when DOM changes
    const observer = new MutationObserver(() => {
      addAriaLabels();
      enhanceFormAccessibility();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [enabled]);

  // This component doesn't render anything
  return null;
};

export default AccessibilityEnhancer;

import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true,
}) => {
  useEffect(() => {
    // Skip to main content functionality
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'skip-link';
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #06b6d4;
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        border-radius: 4px;
      `;
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Keyboard navigation
    const setupKeyboardNavigation = () => {
      if (!enableKeyboardNavigation) return;
      
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      };
      
      const handleMouseDown = () => {
        document.body.classList.remove('keyboard-navigation');
      };
      
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);
      
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
      };
    };

    // Screen reader enhancements
    const setupScreenReader = () => {
      if (!enableScreenReader) return;
      
      // Add ARIA landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }
      
      // Add skip links for screen readers
      const addScreenReaderSkipLinks = () => {
        const skipLinks = [
          { href: '#main-content', text: 'Skip to main content' },
          { href: '#navigation', text: 'Skip to navigation' },
          { href: '#footer', text: 'Skip to footer' }
        ];
        
        skipLinks.forEach(link => {
          const skipLink = document.createElement('a');
          skipLink.href = link.href;
          skipLink.textContent = link.text;
          skipLink.className = 'sr-only';
          skipLink.style.cssText = `
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
          `;
          
          skipLink.addEventListener('focus', () => {
            skipLink.style.cssText = `
              position: absolute;
              width: auto;
              height: auto;
              padding: 0.5rem 1rem;
              margin: 0;
              overflow: visible;
              clip: auto;
              white-space: normal;
              z-index: 1000;
            `;
          });
          
          document.body.insertBefore(skipLink, document.body.firstChild);
        });
      };
      
      addScreenReaderSkipLinks();
    };

    // High contrast mode
    const setupHighContrast = () => {
      if (!enableHighContrast) return;
      
      const toggleHighContrast = () => {
        document.body.classList.toggle('high-contrast');
        localStorage.setItem('high-contrast', document.body.classList.contains('high-contrast').toString());
      };
      
      // Check for saved preference
      const savedPreference = localStorage.getItem('high-contrast');
      if (savedPreference === 'true') {
        document.body.classList.add('high-contrast');
      }
      
      // Add toggle button
      const contrastButton = document.createElement('button');
      contrastButton.textContent = 'Toggle High Contrast';
      contrastButton.className = 'sr-only';
      contrastButton.addEventListener('click', toggleHighContrast);
      document.body.appendChild(contrastButton);
    };

    // Focus management
    const setupFocusManagement = () => {
      if (!enableFocusManagement) return;
      
      const trapFocus = (element: HTMLElement) => {
        const focusableElements = element.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        
        const handleTabKey = (e: KeyboardEvent) => {
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
        };
        
        element.addEventListener('keydown', handleTabKey);
        
        return () => {
          element.removeEventListener('keydown', handleTabKey);
        };
      };
      
      // Apply focus trapping to modals and dropdowns
      const modals = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
      modals.forEach(modal => trapFocus(modal as HTMLElement));
    };

    // Initialize all accessibility features
    addSkipLink();
    const cleanupKeyboard = setupKeyboardNavigation();
    setupScreenReader();
    setupHighContrast();
    const cleanupFocus = setupFocusManagement();

    return () => {
      cleanupKeyboard?.();
      cleanupFocus?.();
    };
  }, [enableKeyboardNavigation, enableScreenReader, enableHighContrast, enableFocusManagement]);

  return (
    <>
      {children}
      <style jsx global>{`
        /* Keyboard navigation styles */
        .keyboard-navigation *:focus {
          outline: 2px solid #06b6d4;
          outline-offset: 2px;
        }

        /* High contrast mode */
        .high-contrast {
          filter: contrast(150%);
        }

        .high-contrast * {
          border-color: currentColor !important;
        }

        /* Reduced motion */
        .reduce-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        /* Screen reader only content */
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

        .sr-only:focus {
          position: absolute;
          width: auto;
          height: auto;
          padding: 0.5rem 1rem;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
          z-index: 1000;
        }

        /* Focus indicators */
        *:focus-visible {
          outline: 2px solid #06b6d4;
          outline-offset: 2px;
        }

        /* Skip link */
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #06b6d4;
          color: white;
          padding: 8px;
          text-decoration: none;
          z-index: 1000;
          border-radius: 4px;
        }

        .skip-link:focus {
          top: 6px;
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
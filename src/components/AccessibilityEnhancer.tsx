import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add accessibility enhancements
    const enhanceAccessibility = () => {
      // 1. Add ARIA landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }

      const header = document.querySelector('header');
      if (header && !header.getAttribute('role')) {
        header.setAttribute('role', 'banner');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }

      // 2. Enhance navigation
      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Main navigation');
      }

      // 3. Add focus management
      const focusableElements = document.querySelectorAll(
        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );

      focusableElements.forEach((element) => {
        if (!element.getAttribute('tabindex')) {
          element.setAttribute('tabindex', '0');
        }
      });

      // 4. Enhance form elements
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach((input) => {
        if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
          const label = document.querySelector(`label[for="${input.id}"]`);
          if (label) {
            input.setAttribute('aria-labelledby', label.id || `label-${input.id}`);
          }
        }
      });

      // 5. Add keyboard navigation support
      const addKeyboardSupport = () => {
        // Escape key to close modals
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            const modals = document.querySelectorAll('[role="dialog"]');
            modals.forEach((modal) => {
              const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]');
              if (closeButton) {
                (closeButton as HTMLElement).click();
              }
            });
          }
        });

        // Arrow keys for dropdown navigation
        const dropdowns = document.querySelectorAll('[aria-haspopup="true"]');
        dropdowns.forEach((dropdown) => {
          dropdown.addEventListener('keydown', (e) => {
            const menu = dropdown.nextElementSibling;
            if (menu && menu.getAttribute('role') === 'menu') {
              const menuItems = menu.querySelectorAll('[role="menuitem"]');
              const currentIndex = Array.from(menuItems).indexOf(document.activeElement as Element);
              
              switch (e.key) {
                case 'ArrowDown':
                  e.preventDefault();
                  const nextIndex = (currentIndex + 1) % menuItems.length;
                  (menuItems[nextIndex] as HTMLElement).focus();
                  break;
                case 'ArrowUp':
                  e.preventDefault();
                  const prevIndex = currentIndex <= 0 ? menuItems.length - 1 : currentIndex - 1;
                  (menuItems[prevIndex] as HTMLElement).focus();
                  break;
                case 'Home':
                  e.preventDefault();
                  (menuItems[0] as HTMLElement).focus();
                  break;
                case 'End':
                  e.preventDefault();
                  (menuItems[menuItems.length - 1] as HTMLElement).focus();
                  break;
              }
            }
          });
        });
      };

      addKeyboardSupport();

      // 6. Add screen reader announcements
      const announceToScreenReader = (message: string) => {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
          document.body.removeChild(announcement);
        }, 1000);
      };

      // 7. Enhance color contrast
      const enhanceColorContrast = () => {
        const style = document.createElement('style');
        style.textContent = `
          /* High contrast mode support */
          @media (prefers-contrast: high) {
            :root {
              --color-primary: #0000ff;
              --color-secondary: #000000;
              --color-text: #000000;
              --color-background: #ffffff;
            }
            
            button, a {
              border: 2px solid currentColor;
            }
          }
          
          /* Reduced motion support */
          @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
          }
          
          /* Focus indicators */
          *:focus {
            outline: 2px solid #3b82f6;
            outline-offset: 2px;
          }
          
          /* Skip link */
          .skip-link {
            position: absolute;
            top: -40px;
            left: 6px;
            background: #000;
            color: #fff;
            padding: 8px;
            text-decoration: none;
            z-index: 1000;
          }
          
          .skip-link:focus {
            top: 6px;
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
        `;
        document.head.appendChild(style);
      };

      enhanceColorContrast();

      // 8. Add loading states
      const addLoadingStates = () => {
        const buttons = document.querySelectorAll('button[type="submit"], button[data-loading]');
        buttons.forEach((button) => {
          button.addEventListener('click', () => {
            button.setAttribute('aria-busy', 'true');
            button.setAttribute('disabled', 'true');
            button.textContent = 'Loading...';
          });
        });
      };

      addLoadingStates();
    };

    // Run enhancements after a short delay to ensure DOM is ready
    const timer = setTimeout(enhanceAccessibility, 100);

    return () => clearTimeout(timer);
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
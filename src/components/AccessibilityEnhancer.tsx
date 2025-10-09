import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    // Keyboard navigation enhancements
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const skipLink = document.querySelector('[href="#main-content"]') as HTMLAnchorElement;
          if (skipLink) {
            skipLink.focus();
            event.preventDefault();
          }
        }

        // Escape key to close modals/dropdowns
        if (event.key === 'Escape') {
          const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');
          openDropdowns.forEach((dropdown) => {
            if (dropdown instanceof HTMLElement) {
              dropdown.click();
            }
          });
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    // Screen reader enhancements
    if (enableScreenReader) {
      // Add ARIA labels to interactive elements
      const addAriaLabels = () => {
        const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
        buttons.forEach((button, index) => {
          if (!button.textContent?.trim()) {
            button.setAttribute('aria-label', `Button ${index + 1}`);
          }
        });

        const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
        links.forEach((link, index) => {
          if (!link.textContent?.trim()) {
            link.setAttribute('aria-label', `Link ${index + 1}`);
          }
        });

        // Add role attributes where needed
        const navigation = document.querySelector('nav');
        if (navigation && !navigation.getAttribute('role')) {
          navigation.setAttribute('role', 'navigation');
        }

        const main = document.querySelector('main');
        if (main && !main.getAttribute('role')) {
          main.setAttribute('role', 'main');
        }

        const footer = document.querySelector('footer');
        if (footer && !footer.getAttribute('role')) {
          footer.setAttribute('role', 'contentinfo');
        }
      };

      // Run after DOM is loaded
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addAriaLabels);
      } else {
        addAriaLabels();
      }
    }
  }, [enableScreenReader]);

  useEffect(() => {
    // High contrast mode support
    if (enableHighContrast) {
      const addHighContrastSupport = () => {
        // Add high contrast CSS variables
        const style = document.createElement('style');
        style.textContent = `
          @media (prefers-contrast: high) {
            :root {
              --text-primary: #ffffff;
              --text-secondary: #ffffff;
              --bg-dark: #000000;
              --border-cyan: #00ffff;
            }
            
            .cyber-card {
              border: 2px solid var(--border-cyan);
            }
            
            .neon-text {
              text-shadow: 0 0 10px currentColor;
            }
          }
        `;
        document.head.appendChild(style);
      };

      addHighContrastSupport();
    }
  }, [enableHighContrast]);

  useEffect(() => {
    // Focus management
    if (enableFocusManagement) {
      const manageFocus = () => {
        // Trap focus in modals
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach((modal) => {
          const focusableElements = modal.querySelectorAll(
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

          modal.addEventListener('keydown', handleTabKey);
        });

        // Announce page changes to screen readers
        const announcePageChange = () => {
          const announcement = document.createElement('div');
          announcement.setAttribute('aria-live', 'polite');
          announcement.setAttribute('aria-atomic', 'true');
          announcement.className = 'sr-only';
          announcement.textContent = 'Page content has loaded';
          document.body.appendChild(announcement);

          setTimeout(() => {
            document.body.removeChild(announcement);
          }, 1000);
        };

        // Announce when navigation occurs
        window.addEventListener('popstate', announcePageChange);
      };

      manageFocus();
    }
  }, [enableFocusManagement]);

  // Add skip links
  useEffect(() => {
    const addSkipLinks = () => {
      const skipLinks = document.createElement('div');
      skipLinks.innerHTML = `
        <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50">
          Skip to main content
        </a>
        <a href="#navigation" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50">
          Skip to navigation
        </a>
      `;
      document.body.insertBefore(skipLinks, document.body.firstChild);
    };

    addSkipLinks();
  }, []);

  return null; // This component doesn't render anything
};

export default AccessibilityEnhancer;
import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Skip to main content functionality
    const addSkipLinks = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Add ARIA labels to interactive elements
    const enhanceAccessibility = () => {
      // Add ARIA labels to buttons without text
      const iconButtons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      iconButtons.forEach(button => {
        const icon = button.querySelector('svg');
        if (icon && !button.textContent?.trim()) {
          const iconName = icon.getAttribute('aria-label') || 'button';
          button.setAttribute('aria-label', iconName);
        }
      });

      // Add role="button" to clickable divs
      const clickableDivs = document.querySelectorAll('div[onclick], div[role="button"]');
      clickableDivs.forEach(div => {
        if (!div.getAttribute('role')) {
          div.setAttribute('role', 'button');
          div.setAttribute('tabindex', '0');
        }
      });

      // Add alt text to images without alt
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach(img => {
        img.setAttribute('alt', '');
      });

      // Enhance form accessibility
      const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
      inputs.forEach(input => {
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (label && !input.getAttribute('aria-label')) {
          input.setAttribute('aria-label', label.textContent || '');
        }
      });
    };

    // Keyboard navigation enhancements
    const enhanceKeyboardNavigation = () => {
      document.addEventListener('keydown', (e) => {
        // Escape key to close modals/dropdowns
        if (e.key === 'Escape') {
          const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');
          openDropdowns.forEach(dropdown => {
            (dropdown as HTMLElement).click();
          });
        }

        // Arrow keys for menu navigation
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          const focusedElement = document.activeElement;
          if (focusedElement?.closest('[role="menu"]')) {
            e.preventDefault();
            const menuItems = Array.from(
              focusedElement.closest('[role="menu"]')?.querySelectorAll('[role="menuitem"]') || []
            );
            const currentIndex = menuItems.indexOf(focusedElement as Element);
            const nextIndex = e.key === 'ArrowDown' 
              ? (currentIndex + 1) % menuItems.length
              : currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1;
            (menuItems[nextIndex] as HTMLElement)?.focus();
          }
        }
      });
    };

    // Focus management
    const enhanceFocusManagement = () => {
      // Trap focus in modals
      const modals = document.querySelectorAll('[role="dialog"]');
      modals.forEach(modal => {
        const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        const trapFocus = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement?.focus();
              }
            } else {
              if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement?.focus();
              }
            }
          }
        };

        modal.addEventListener('keydown', trapFocus);
      });
    };

    // High contrast mode detection
    const detectHighContrast = () => {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
      if (prefersHighContrast.matches) {
        document.body.classList.add('high-contrast');
      }
    };

    // Reduced motion detection
    const detectReducedMotion = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (prefersReducedMotion.matches) {
        document.body.classList.add('reduce-motion');
      }
    };

    // Initialize all enhancements
    addSkipLinks();
    enhanceAccessibility();
    enhanceKeyboardNavigation();
    enhanceFocusManagement();
    detectHighContrast();
    detectReducedMotion();

    // Re-run accessibility enhancements when DOM changes
    const observer = new MutationObserver(() => {
      enhanceAccessibility();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
import React, { useEffect, ReactNode } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Skip to main content functionality
    const addSkipLinks = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Focus management
    const manageFocus = () => {
      // Trap focus in modals
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
    };

    // High contrast mode detection
    const handleHighContrast = () => {
      if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.documentElement.classList.add('high-contrast');
      }
    };

    // Reduced motion detection
    const handleReducedMotion = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.classList.add('reduced-motion');
      }
    };

    // Keyboard navigation enhancement
    const enhanceKeyboardNavigation = () => {
      document.addEventListener('keydown', (e) => {
        // Escape key to close modals
        if (e.key === 'Escape') {
          const openModal = document.querySelector('[role="dialog"][aria-hidden="false"]');
          if (openModal) {
            const closeButton = openModal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
            if (closeButton) {
              closeButton.click();
            }
          }
        }

        // Arrow keys for menu navigation
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          const menu = document.querySelector('[role="menu"]');
          if (menu && menu.contains(document.activeElement)) {
            e.preventDefault();
            const items = Array.from(menu.querySelectorAll('[role="menuitem"]'));
            const currentIndex = items.indexOf(document.activeElement as Element);
            let nextIndex;

            if (e.key === 'ArrowDown') {
              nextIndex = (currentIndex + 1) % items.length;
            } else {
              nextIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
            }

            (items[nextIndex] as HTMLElement).focus();
          }
        }
      });
    };

    // Screen reader announcements
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

    // Initialize accessibility features
    addSkipLinks();
    manageFocus();
    handleHighContrast();
    handleReducedMotion();
    enhanceKeyboardNavigation();

    // Listen for preference changes
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    highContrastQuery.addEventListener('change', handleHighContrast);
    reducedMotionQuery.addEventListener('change', handleReducedMotion);

    // Cleanup
    return () => {
      highContrastQuery.removeEventListener('change', handleHighContrast);
      reducedMotionQuery.removeEventListener('change', handleReducedMotion);
    };
  }, []);

  // Add ARIA landmarks
  useEffect(() => {
    const addAriaLandmarks = () => {
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }

      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }

      // Add heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach((heading, index) => {
        if (!heading.getAttribute('id')) {
          const id = `heading-${index}`;
          heading.setAttribute('id', id);
        }
      });
    };

    addAriaLandmarks();
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
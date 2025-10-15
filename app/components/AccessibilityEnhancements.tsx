import React, { useEffect, useCallback } from 'react';

interface AccessibilityEnhancementsProps {
  enableSkipLinks?: boolean;
  enableFocusManagement?: boolean;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
}

const AccessibilityEnhancements: React.FC<AccessibilityEnhancementsProps> = ({
  enableSkipLinks = true,
  enableFocusManagement = true,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true
}) => {
  
  // Skip to main content functionality
  useEffect(() => {
    if (!enableSkipLinks) return;

    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    skipLink.setAttribute('data-skip-to-main', 'true');
    
    // Add event listener for skip functionality
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      const main = document.querySelector('main');
      if (main) {
        main.focus();
        main.scrollIntoView({ behavior: 'smooth' });
      }
    });

    document.body.insertBefore(skipLink, document.body.firstChild);

    return () => {
      const existingSkipLink = document.querySelector('[data-skip-to-main]');
      if (existingSkipLink) {
        existingSkipLink.remove();
      }
    };
  }, [enableSkipLinks]);

  // Focus management
  useEffect(() => {
    if (!enableFocusManagement) return;

    const trapFocus = (element: HTMLElement) => {
      const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;

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
      };

      element.addEventListener('keydown', handleTabKey);
      firstElement?.focus();

      return () => {
        element.removeEventListener('keydown', handleTabKey);
      };
    };

    // Apply focus trap to modals and dropdowns
    const modals = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
    modals.forEach(modal => trapFocus(modal as HTMLElement));

  }, [enableFocusManagement]);

  // Keyboard navigation enhancements
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key to close modals/dropdowns
      if (e.key === 'Escape') {
        const openModal = document.querySelector('[role="dialog"][aria-hidden="false"]');
        if (openModal) {
          (openModal as HTMLElement).setAttribute('aria-hidden', 'true');
          (openModal as HTMLElement).focus();
        }
      }

      // Arrow keys for menu navigation
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const menu = document.querySelector('[role="menu"]');
        if (menu && menu.contains(e.target as Node)) {
          e.preventDefault();
          const items = Array.from(menu.querySelectorAll('[role="menuitem"]'));
          const currentIndex = items.indexOf(e.target as HTMLElement);
          const nextIndex = e.key === 'ArrowDown' 
            ? (currentIndex + 1) % items.length
            : currentIndex === 0 ? items.length - 1 : currentIndex - 1;
          (items[nextIndex] as HTMLElement).focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Screen reader support
  useEffect(() => {
    if (!enableScreenReaderSupport) return;

    // Add ARIA landmarks
    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
      nav.setAttribute('aria-label', 'Main navigation');
    }

    const main = document.querySelector('main');
    if (main && !main.id) {
      main.id = 'main-content';
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }

    // Add live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

    return () => {
      const existingLiveRegion = document.getElementById('live-region');
      if (existingLiveRegion) {
        existingLiveRegion.remove();
      }
    };
  }, [enableScreenReaderSupport]);

  // Announce changes to screen readers
  const announce = useCallback((message: string) => {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  }, []);

  // Expose announce function globally for use in other components
  useEffect(() => {
    (window as any).announceToScreenReader = announce;
    return () => {
      delete (window as any).announceToScreenReader;
    };
  }, [announce]);

  return null;
};

export default AccessibilityEnhancements;
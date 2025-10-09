'use client';
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
  enableFocusManagement = true,
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Keyboard navigation enhancements
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
          if (skipLink) {
            skipLink.focus();
            event.preventDefault();
          }
        }

        // Escape key to close modals/dropdowns
        if (event.key === 'Escape') {
          const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');
          openDropdowns.forEach((dropdown) => {
            (dropdown as HTMLElement).setAttribute('aria-expanded', 'false');
            (dropdown as HTMLElement).blur();
          });
        }

        // Arrow key navigation for custom components
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
          const focusedElement = event.target as HTMLElement;
          if (focusedElement.getAttribute('role') === 'menuitem') {
            event.preventDefault();
            const menuItems = Array.from(document.querySelectorAll('[role="menuitem"]'));
            const currentIndex = menuItems.indexOf(focusedElement);
            const nextIndex = event.key === 'ArrowDown' 
              ? Math.min(currentIndex + 1, menuItems.length - 1)
              : Math.max(currentIndex - 1, 0);
            (menuItems[nextIndex] as HTMLElement).focus();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }

    // Screen reader enhancements
    if (enableScreenReader) {
      // Add live region for announcements
      if (!document.getElementById('live-region')) {
        const liveRegion = document.createElement('div');
        liveRegion.id = 'live-region';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        document.body.appendChild(liveRegion);
      }

      // Enhance form labels
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach((input) => {
        const inputElement = input as HTMLInputElement;
        if (!inputElement.getAttribute('aria-label') && !inputElement.getAttribute('aria-labelledby')) {
          const label = document.querySelector(`label[for="${inputElement.id}"]`);
          if (label) {
            inputElement.setAttribute('aria-labelledby', label.id || `label-${inputElement.id}`);
          }
        }
      });

      // Add role attributes to interactive elements
      const buttons = document.querySelectorAll('button, [role="button"]');
      buttons.forEach((button) => {
        if (!button.getAttribute('role')) {
          button.setAttribute('role', 'button');
        }
        if (!button.getAttribute('tabindex')) {
          button.setAttribute('tabindex', '0');
        }
      });
    }

    // High contrast mode support
    if (enableHighContrast) {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      const updateHighContrast = (e: MediaQueryListEvent) => {
        document.body.classList.toggle('high-contrast', e.matches);
      };
      
      updateHighContrast(mediaQuery);
      mediaQuery.addEventListener('change', updateHighContrast);
    }

    // Focus management
    if (enableFocusManagement) {
      // Trap focus in modals
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
        firstElement?.focus();

        return () => element.removeEventListener('keydown', handleTabKey);
      };

      // Apply focus trap to modals
      const modals = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
      modals.forEach((modal) => {
        const cleanup = trapFocus(modal as HTMLElement);
        // Store cleanup function for later use
        (modal as any).__focusTrapCleanup = cleanup;
      });
    }

    // Announce page changes to screen readers
    const announcePageChange = (title: string) => {
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.textContent = `Page changed to ${title}`;
        setTimeout(() => {
          liveRegion.textContent = '';
        }, 1000);
      }
    };

    // Monitor route changes (for SPA)
    let currentTitle = document.title;
    const titleObserver = new MutationObserver(() => {
      if (document.title !== currentTitle) {
        currentTitle = document.title;
        announcePageChange(currentTitle);
      }
    });

    titleObserver.observe(document.head, {
      childList: true,
      subtree: true,
    });

    return () => {
      titleObserver.disconnect();
    };
  }, [enableKeyboardNavigation, enableScreenReader, enableHighContrast, enableFocusManagement]);

  return null;
};

export default AccessibilityEnhancer;
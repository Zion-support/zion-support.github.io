'use client';
import React, { useEffect, memo } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const EnhancedAccessibility: React.FC<AccessibilityEnhancerProps> = memo(({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = false,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    // Keyboard navigation enhancements
    if (enableKeyboardNavigation && typeof window !== 'undefined') {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content with Tab
        if (event.key === 'Tab' && !event.shiftKey) {
          const skipLink = document.querySelector('.skip-link');
          if (skipLink && document.activeElement === document.body) {
            (skipLink as HTMLElement).focus();
          }
        }

        // Close dropdowns with Escape
        if (event.key === 'Escape') {
          const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');
          openDropdowns.forEach((dropdown) => {
            (dropdown as HTMLElement).setAttribute('aria-expanded', 'false');
            (dropdown as HTMLElement).blur();
          });
        }

        // Navigate dropdowns with arrow keys
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
          const focusedElement = document.activeElement;
          if (focusedElement?.getAttribute('role') === 'button' && 
              focusedElement?.getAttribute('aria-expanded') === 'true') {
            event.preventDefault();
            const dropdown = focusedElement.nextElementSibling;
            if (dropdown) {
              const firstItem = dropdown.querySelector('[role="menuitem"]') as HTMLElement;
              if (firstItem) {
                firstItem.focus();
              }
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    // Screen reader support
    if (enableScreenReaderSupport && typeof window !== 'undefined') {
      // Add live region for announcements
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);

      // Announce page changes
      const announcePageChange = (message: string) => {
        const liveRegion = document.getElementById('live-region');
        if (liveRegion) {
          liveRegion.textContent = message;
        }
      };

      // Listen for route changes (if using React Router)
      const originalPushState = history.pushState;
      const originalReplaceState = history.replaceState;

      history.pushState = function(...args) {
        originalPushState.apply(history, args);
        announcePageChange('Page changed');
      };

      history.replaceState = function(...args) {
        originalReplaceState.apply(history, args);
        announcePageChange('Page updated');
      };

      return () => {
        document.body.removeChild(liveRegion);
        history.pushState = originalPushState;
        history.replaceState = originalReplaceState;
      };
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    // High contrast mode
    if (enableHighContrast && typeof window !== 'undefined') {
      const applyHighContrast = () => {
        document.documentElement.classList.add('high-contrast');
      };

      const removeHighContrast = () => {
        document.documentElement.classList.remove('high-contrast');
      };

      // Check for system preference
      if (window.matchMedia('(prefers-contrast: high)').matches) {
        applyHighContrast();
      }

      // Listen for changes
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      mediaQuery.addEventListener('change', (e) => {
        if (e.matches) {
          applyHighContrast();
        } else {
          removeHighContrast();
        }
      });

      return () => {
        mediaQuery.removeEventListener('change', () => {});
      };
    }
  }, [enableHighContrast]);

  useEffect(() => {
    // Focus management
    if (enableFocusManagement && typeof window !== 'undefined') {
      let focusHistory: HTMLElement[] = [];

      const saveFocus = () => {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement !== document.body) {
          focusHistory.push(activeElement);
        }
      };

      const restoreFocus = () => {
        const lastFocused = focusHistory.pop();
        if (lastFocused && typeof lastFocused.focus === 'function') {
          lastFocused.focus();
        }
      };

      // Save focus when opening modals/dropdowns
      document.addEventListener('focusin', saveFocus);

      // Restore focus when closing modals/dropdowns
      document.addEventListener('focusout', (event) => {
        const target = event.target as HTMLElement;
        if (target.getAttribute('aria-expanded') === 'false') {
          setTimeout(restoreFocus, 100);
        }
      });

      return () => {
        document.removeEventListener('focusin', saveFocus);
      };
    }
  }, [enableFocusManagement]);

  useEffect(() => {
    // Add accessibility attributes to interactive elements
    if (typeof window !== 'undefined') {
      const enhanceInteractiveElements = () => {
        // Add role and aria-label to buttons without text
        const iconButtons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
        iconButtons.forEach((button) => {
          const icon = button.querySelector('svg, i, [class*="icon"]');
          if (icon && !button.textContent?.trim()) {
            button.setAttribute('aria-label', 'Button');
          }
        });

        // Add aria-expanded to dropdown toggles
        const dropdownToggles = document.querySelectorAll('[data-toggle="dropdown"]');
        dropdownToggles.forEach((toggle) => {
          toggle.setAttribute('aria-expanded', 'false');
          toggle.setAttribute('aria-haspopup', 'true');
        });

        // Add role to custom elements
        const customSelects = document.querySelectorAll('.custom-select');
        customSelects.forEach((select) => {
          select.setAttribute('role', 'combobox');
          select.setAttribute('aria-haspopup', 'listbox');
        });
      };

      // Run on load and when DOM changes
      enhanceInteractiveElements();
      
      const observer = new MutationObserver(enhanceInteractiveElements);
      observer.observe(document.body, { childList: true, subtree: true });

      return () => observer.disconnect();
    }
  }, []);

  return null;
});

EnhancedAccessibility.displayName = 'EnhancedAccessibility';

export default EnhancedAccessibility;
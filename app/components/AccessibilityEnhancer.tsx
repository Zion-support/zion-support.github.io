import React, { useEffect, useCallback } from 'react';

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
  // Enhance keyboard navigation
  const enhanceKeyboardNavigation = useCallback(() => {
    if (!enableKeyboardNavigation) return;

    // Add keyboard event listeners
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const mainContent = document.querySelector('main, [role="main"]');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
          event.preventDefault();
        }
      }

      // Close dropdowns on Escape
      if (event.key === 'Escape') {
        const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');
        openDropdowns.forEach(dropdown => {
          (dropdown as HTMLElement).setAttribute('aria-expanded', 'false');
        });
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Enhance screen reader support
  const enhanceScreenReaderSupport = useCallback(() => {
    if (!enableScreenReader) return;

    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-blue-600 focus:text-white focus:underline';
    skipLink.style.cssText = 'position: absolute; left: -9999px; top: -9999px;';
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add ARIA landmarks
    const main = document.querySelector('main');
    if (main && !main.hasAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    const nav = document.querySelector('nav');
    if (nav && !nav.hasAttribute('aria-label')) {
      nav.setAttribute('aria-label', 'Main navigation');
    }

    // Add live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
  }, [enableScreenReader]);

  // Enhance high contrast support
  const enhanceHighContrast = useCallback(() => {
    if (!enableHighContrast) return;

    // Add high contrast mode detection
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    
    const handleContrastChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    };

    prefersHighContrast.addEventListener('change', handleContrastChange);
    
    // Apply initial state
    if (prefersHighContrast.matches) {
      document.documentElement.classList.add('high-contrast');
    }

    return () => prefersHighContrast.removeEventListener('change', handleContrastChange);
  }, [enableHighContrast]);

  // Enhance focus management
  const enhanceFocusManagement = useCallback(() => {
    if (!enableFocusManagement) return;

    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      .focus-visible:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }
      
      .high-contrast .focus-visible:focus {
        outline: 3px solid #ffffff;
        outline-offset: 3px;
      }
    `;
    document.head.appendChild(style);

    // Enhance focus trap for modals
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
    const modals = document.querySelectorAll('[role="dialog"], .modal');
    modals.forEach(modal => trapFocus(modal as HTMLElement));
  }, [enableFocusManagement]);

  // Add ARIA labels to interactive elements
  const addAriaLabels = useCallback(() => {
    // Add ARIA labels to buttons without text
    const iconButtons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    iconButtons.forEach(button => {
      const icon = button.querySelector('svg');
      if (icon) {
        const iconName = icon.getAttribute('data-icon') || 'button';
        button.setAttribute('aria-label', iconName);
      }
    });

    // Add ARIA labels to links
    const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
    links.forEach(link => {
      if (!link.textContent?.trim()) {
        const href = link.getAttribute('href');
        if (href) {
          link.setAttribute('aria-label', `Link to ${href}`);
        }
      }
    });
  }, []);

  // Announce page changes to screen readers
  const announcePageChange = useCallback((message: string) => {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  }, []);

  useEffect(() => {
    const cleanupFunctions = [
      enhanceKeyboardNavigation(),
      enhanceScreenReaderSupport(),
      enhanceHighContrast(),
      enhanceFocusManagement()
    ].filter(Boolean);

    // Add ARIA labels
    addAriaLabels();

    // Announce page load
    announcePageChange('Page loaded successfully');

    return () => {
      cleanupFunctions.forEach(cleanup => {
        if (typeof cleanup === 'function') {
          cleanup();
        }
      });
    };
  }, [
    enhanceKeyboardNavigation,
    enhanceScreenReaderSupport,
    enhanceHighContrast,
    enhanceFocusManagement,
    addAriaLabels,
    announcePageChange
  ]);

  return null; // This component doesn't render anything
};

export default AccessibilityEnhancer;
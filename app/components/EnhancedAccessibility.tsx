'use client';
import React, { useEffect, useCallback } from 'react';

interface EnhancedAccessibilityProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableSkipLinks?: boolean;
  enableAriaLabels?: boolean;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableSkipLinks = true,
  enableAriaLabels = true,
}) => {
  // Add skip links
  const addSkipLinks = useCallback(() => {
    if (!enableSkipLinks || typeof window === 'undefined') return;

    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' },
    ];

    skipLinks.forEach(({ href, text }) => {
      let skipLink = document.querySelector(`a[href="${href}"]`);
      if (!skipLink) {
        skipLink = document.createElement('a');
        skipLink.setAttribute('href', href);
        skipLink.setAttribute('class', 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50');
        skipLink.textContent = text;
        document.body.insertBefore(skipLink, document.body.firstChild);
      }
    });
  }, [enableSkipLinks]);

  // Enhance keyboard navigation
  const enhanceKeyboardNavigation = useCallback(() => {
    if (!enableKeyboardNavigation || typeof window === 'undefined') return;

    // Add keyboard event listeners for better navigation
    document.addEventListener('keydown', (e) => {
      // Escape key to close modals/dropdowns
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }

      // Tab key enhancement
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    // Remove keyboard navigation class on mouse interaction
    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }, [enableKeyboardNavigation]);

  // Add ARIA labels and roles
  const addAriaLabels = useCallback(() => {
    if (!enableAriaLabels || typeof window === 'undefined') return;

    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach((button, index) => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', `Button ${index + 1}`);
      }
    });

    // Add ARIA labels to links
    const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
    links.forEach((link, index) => {
      if (!link.textContent?.trim() && !link.getAttribute('aria-label')) {
        const href = link.getAttribute('href');
        if (href) {
          link.setAttribute('aria-label', `Link to ${href}`);
        }
      }
    });

    // Add role attributes where needed
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
  }, [enableAriaLabels]);

  // Enhance focus management
  const enhanceFocusManagement = useCallback(() => {
    if (!enableFocusManagement || typeof window === 'undefined') return;

    // Trap focus in modals
    const modals = document.querySelectorAll('[role="dialog"], [role="modal"]');
    modals.forEach((modal) => {
      const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (firstElement && lastElement) {
        modal.addEventListener('keydown', (e) => {
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
        });
      }
    });

    // Announce page changes to screen readers
    const announcePageChange = (message: string) => {
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

    // Listen for route changes (if using client-side routing)
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
  }, [enableFocusManagement]);

  // Add high contrast mode support
  const addHighContrastSupport = useCallback(() => {
    if (!enableHighContrast || typeof window === 'undefined') return;

    // Check for high contrast preference
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    
    const updateHighContrast = (matches: boolean) => {
      if (matches) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    };

    updateHighContrast(prefersHighContrast.matches);
    prefersHighContrast.addEventListener('change', updateHighContrast);

    // Add high contrast toggle button
    const toggleButton = document.createElement('button');
    toggleButton.setAttribute('aria-label', 'Toggle high contrast mode');
    toggleButton.className = 'fixed bottom-4 left-4 bg-gray-800 text-white px-3 py-2 rounded-md text-sm z-50';
    toggleButton.textContent = 'High Contrast';
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
      const isEnabled = document.body.classList.contains('high-contrast');
      toggleButton.textContent = isEnabled ? 'Normal Contrast' : 'High Contrast';
    });
    document.body.appendChild(toggleButton);
  }, [enableHighContrast]);

  // Add screen reader announcements
  const addScreenReaderSupport = useCallback(() => {
    if (!enableScreenReader || typeof window === 'undefined') return;

    // Add screen reader only text for visual elements
    const visualElements = document.querySelectorAll('img:not([alt]), .icon:not([aria-label])');
    visualElements.forEach((element) => {
      if (element.tagName === 'IMG' && !element.getAttribute('alt')) {
        element.setAttribute('alt', 'Decorative image');
      } else if (element.classList.contains('icon') && !element.getAttribute('aria-label')) {
        element.setAttribute('aria-label', 'Icon');
      }
    });

    // Add live region for dynamic content updates
    let liveRegion = document.querySelector('[aria-live]');
    if (!liveRegion) {
      liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);
    }
  }, [enableScreenReader]);

  useEffect(() => {
    // Run accessibility enhancements after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        addSkipLinks();
        enhanceKeyboardNavigation();
        addAriaLabels();
        enhanceFocusManagement();
        addHighContrastSupport();
        addScreenReaderSupport();
      });
    } else {
      addSkipLinks();
      enhanceKeyboardNavigation();
      addAriaLabels();
      enhanceFocusManagement();
      addHighContrastSupport();
      addScreenReaderSupport();
    }
  }, [
    addSkipLinks,
    enhanceKeyboardNavigation,
    addAriaLabels,
    enhanceFocusManagement,
    addHighContrastSupport,
    addScreenReaderSupport,
  ]);

  return null; // This component doesn't render anything
};

export default EnhancedAccessibility;
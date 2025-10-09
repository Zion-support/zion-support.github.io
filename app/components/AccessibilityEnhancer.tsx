'use client';

import React, { useEffect, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true,
}) => {
  const setupKeyboardNavigation = useCallback(() => {
    if (!enableKeyboardNavigation || typeof window === 'undefined') return;

    // Add keyboard navigation support
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content with Tab key
      if (event.key === 'Tab' && event.target === document.body) {
        const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
        if (skipLink) {
          skipLink.focus();
        }
      }

      // Escape key to close modals/dropdowns
      if (event.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  const setupScreenReaderSupport = useCallback(() => {
    if (!enableScreenReaderSupport || typeof window === 'undefined') return;

    // Add ARIA landmarks
    const main = document.querySelector('main');
    if (main && !main.hasAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    const nav = document.querySelector('nav');
    if (nav && !nav.hasAttribute('role')) {
      nav.setAttribute('role', 'navigation');
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.hasAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }

    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50';
    skipLink.style.cssText = 'position: absolute; left: -10000px; top: auto; width: 1px; height: 1px; overflow: hidden;';
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }, [enableScreenReaderSupport]);

  const setupHighContrast = useCallback(() => {
    if (!enableHighContrast || typeof window === 'undefined') return;

    // Add high contrast mode support
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    
    const updateHighContrast = (matches: boolean) => {
      if (matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    };

    updateHighContrast(prefersHighContrast.matches);
    prefersHighContrast.addEventListener('change', updateHighContrast);
  }, [enableHighContrast]);

  const setupFocusManagement = useCallback(() => {
    if (!enableFocusManagement || typeof window === 'undefined') return;

    // Focus management for better accessibility
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    const trapFocus = (element: HTMLElement) => {
      const focusableContent = element.querySelectorAll(focusableElements);
      const firstFocusableElement = focusableContent[0] as HTMLElement;
      const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

      element.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastFocusableElement) {
              firstFocusableElement.focus();
              e.preventDefault();
            }
          }
        }
      });
    };

    // Apply focus trapping to modals and dropdowns
    const modals = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
    modals.forEach(trapFocus);
  }, [enableFocusManagement]);

  const setupAriaLabels = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach((button) => {
      const text = button.textContent?.trim();
      if (text && text.length > 0) {
        button.setAttribute('aria-label', text);
      }
    });

    // Add ARIA labels to links
    const links = document.querySelectorAll('a:not([aria-label])');
    links.forEach((link) => {
      const text = link.textContent?.trim();
      if (text && text.length > 0) {
        link.setAttribute('aria-label', text);
      }
    });

    // Add ARIA labels to form inputs
    const inputs = document.querySelectorAll('input:not([aria-label])');
    inputs.forEach((input) => {
      const label = document.querySelector(`label[for="${input.id}"]`);
      if (label) {
        input.setAttribute('aria-label', label.textContent || '');
      }
    });
  }, []);

  useEffect(() => {
    const cleanupFunctions = [
      setupKeyboardNavigation(),
      setupScreenReaderSupport(),
      setupHighContrast(),
      setupFocusManagement(),
    ].filter(Boolean);

    // Setup ARIA labels after a short delay
    const ariaTimer = setTimeout(setupAriaLabels, 100);

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup && cleanup());
      clearTimeout(ariaTimer);
    };
  }, [setupKeyboardNavigation, setupScreenReaderSupport, setupHighContrast, setupFocusManagement, setupAriaLabels]);

  return null; // This component doesn't render anything
};

export default AccessibilityEnhancer;
'use client';
import React, { useEffect, useCallback, memo } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableFocusManagement?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = memo(({
  children,
  enableKeyboardNavigation = true,
  enableFocusManagement = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true
}) => {
  // Keyboard navigation enhancements
  useEffect(() => {
    if (!enableKeyboardNavigation || typeof window === 'undefined') return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.altKey) {
        event.preventDefault();
        const mainContent = document.querySelector('main, [role="main"]');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }

      // Close modals with Escape
      if (event.key === 'Escape') {
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach((modal) => {
          const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]');
          if (closeButton) {
            (closeButton as HTMLElement).click();
          }
        });
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Focus management
  useEffect(() => {
    if (!enableFocusManagement || typeof window === 'undefined') return;

    const manageFocus = () => {
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #00ffff !important;
          outline-offset: 2px !important;
        }
        .focus-visible:focus {
          outline: 2px solid #00ffff !important;
          outline-offset: 2px !important;
        }
      `;
      document.head.appendChild(style);

      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    manageFocus();
  }, [enableFocusManagement]);

  // Screen reader support
  useEffect(() => {
    if (!enableScreenReaderSupport || typeof window === 'undefined') return;

    const enhanceScreenReaderSupport = () => {
      // Add ARIA landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }

      // Add heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach((heading, index) => {
        if (!heading.getAttribute('id')) {
          const id = `heading-${index}`;
          heading.setAttribute('id', id);
        }
      });

      // Add alt text to images
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach((img) => {
        img.setAttribute('alt', '');
      });
    };

    // Run after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', enhanceScreenReaderSupport);
    } else {
      enhanceScreenReaderSupport();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', enhanceScreenReaderSupport);
    };
  }, [enableScreenReaderSupport]);

  // High contrast mode
  useEffect(() => {
    if (!enableHighContrast || typeof window === 'undefined') return;

    const checkHighContrast = () => {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      
      if (prefersHighContrast) {
        document.documentElement.classList.add('high-contrast');
      }
    };

    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    mediaQuery.addEventListener('change', checkHighContrast);
    checkHighContrast();

    return () => {
      mediaQuery.removeEventListener('change', checkHighContrast);
    };
  }, [enableHighContrast]);

  return <>{children}</>;
});

AccessibilityEnhancer.displayName = 'AccessibilityEnhancer';

export default AccessibilityEnhancer;
'use client';
import React, { useEffect } from 'react';

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
  enableFocusManagement = true
}) => {
  useEffect(() => {
    // Keyboard navigation enhancements
    if (enableKeyboardNavigation && typeof window !== 'undefined') {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
          if (skipLink) {
            skipLink.focus();
            event.preventDefault();
          }
        }
        // Close dropdowns with Escape key
        if (event.key === 'Escape') {
          const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');
          openDropdowns.forEach(dropdown => {
            (dropdown as HTMLElement).setAttribute('aria-expanded', 'false');
          });
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    // Screen reader support
    if (enableScreenReaderSupport && typeof window !== 'undefined') {
      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded';
      document.body.insertBefore(skipLink, document.body.firstChild);
      
      // Add main content landmark
      const main = document.querySelector('main');
      if (main && !main.id) {
        main.id = 'main-content';
      }
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    // Focus management
    if (enableFocusManagement && typeof window !== 'undefined') {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const focusableContent = document.querySelectorAll(focusableElements);
      
      focusableContent.forEach(element => {
        element.addEventListener('focus', () => {
          element.style.outline = '2px solid #3b82f6';
          element.style.outlineOffset = '2px';
        });
        element.addEventListener('blur', () => {
          element.style.outline = '';
          element.style.outlineOffset = '';
        });
      });
    }
  }, [enableFocusManagement]);

  useEffect(() => {
    // High contrast mode support
    if (enableHighContrast && typeof window !== 'undefined') {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
      const updateHighContrast = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('high-contrast');
        } else {
          document.documentElement.classList.remove('high-contrast');
        }
      };
      prefersHighContrast.addEventListener('change', updateHighContrast);
      updateHighContrast(prefersHighContrast);
      return () => prefersHighContrast.removeEventListener('change', updateHighContrast);
    }
  }, [enableHighContrast]);

  return null;
};

export default AccessibilityEnhancer;
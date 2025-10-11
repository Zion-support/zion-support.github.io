'use client';
import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = false,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    // Keyboard Navigation Enhancement
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.ctrlKey) {
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
            event.preventDefault();
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
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    // Screen Reader Support
    if (enableScreenReaderSupport) {
      // Add ARIA landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }

      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50';
      skipLink.style.position = 'absolute';
      skipLink.style.left = '-9999px';
      skipLink.style.top = 'auto';
      skipLink.style.width = '1px';
      skipLink.style.height = '1px';
      skipLink.style.overflow = 'hidden';
      
      document.body.insertBefore(skipLink, document.body.firstChild);
      
      return () => {
        if (skipLink.parentNode) {
          skipLink.parentNode.removeChild(skipLink);
        }
      };
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    // High Contrast Mode
    if (enableHighContrast) {
      const updateHighContrast = () => {
        const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
        if (prefersHighContrast.matches) {
          document.documentElement.classList.add('high-contrast');
        } else {
          document.documentElement.classList.remove('high-contrast');
        }
      };

      updateHighContrast();
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
      prefersHighContrast.addEventListener('change', updateHighContrast);
      
      return () => prefersHighContrast.removeEventListener('change', updateHighContrast);
    }
  }, [enableHighContrast]);

  useEffect(() => {
    // Focus Management
    if (enableFocusManagement) {
      const handleFocusIn = (event: FocusEvent) => {
        const target = event.target as HTMLElement;
        if (target) {
          target.classList.add('focus-visible');
        }
      };

      const handleFocusOut = (event: FocusEvent) => {
        const target = event.target as HTMLElement;
        if (target) {
          target.classList.remove('focus-visible');
        }
      };

      document.addEventListener('focusin', handleFocusIn);
      document.addEventListener('focusout', handleFocusOut);
      
      return () => {
        document.removeEventListener('focusin', handleFocusIn);
        document.removeEventListener('focusout', handleFocusOut);
      };
    }
  }, [enableFocusManagement]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default AccessibilityEnhancer;
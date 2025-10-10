'use client';
import React, { useEffect, ReactNode } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  // Keyboard navigation
  useEffect(() => {
    if (enableKeyboardNavigation && typeof window !== 'undefined') {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content with Tab key
        if (event.key === 'Tab' && !event.shiftKey) {
          const skipLink = document.querySelector('a[href="#main-content"]');
          if (skipLink && document.activeElement === document.body) {
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
    }
  }, [enableKeyboardNavigation]);

  // Screen reader support
  useEffect(() => {
    if (enableScreenReaderSupport && typeof window !== 'undefined') {
      // Add ARIA landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }

      // Add skip links
      const skipLink = document.querySelector('a[href="#main-content"]');
      if (skipLink) {
        skipLink.setAttribute('aria-label', 'Skip to main content');
      }

      // Ensure all interactive elements have proper labels
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach((button) => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });

      const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
      links.forEach((link) => {
        if (!link.textContent?.trim()) {
          link.setAttribute('aria-label', 'Link');
        }
      });
    }
  }, [enableScreenReaderSupport]);

  // High contrast mode
  useEffect(() => {
    if (enableHighContrast && typeof window !== 'undefined') {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
      
      const updateHighContrast = () => {
        if (prefersHighContrast.matches) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      };

      updateHighContrast();
      prefersHighContrast.addEventListener('change', updateHighContrast);

      return () => prefersHighContrast.removeEventListener('change', updateHighContrast);
    }
  }, [enableHighContrast]);

  // Focus management
  useEffect(() => {
    if (enableFocusManagement && typeof window !== 'undefined') {
      // Ensure focus is visible
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }
        
        .high-contrast *:focus {
          outline: 3px solid #ffffff !important;
          outline-offset: 3px !important;
        }
      `;
      document.head.appendChild(style);

      // Focus trap for modals
      const handleFocusTrap = (event: FocusEvent) => {
        const modal = document.querySelector('[role="dialog"]');
        if (modal && !modal.contains(event.target as Node)) {
          const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements.length > 0) {
            (focusableElements[0] as HTMLElement).focus();
          }
        }
      };

      document.addEventListener('focusin', handleFocusTrap);
      return () => {
        document.removeEventListener('focusin', handleFocusTrap);
        document.head.removeChild(style);
      };
    }
  }, [enableFocusManagement]);

  return <React.Fragment>{children}</React.Fragment>;
};

AccessibilityEnhancer.displayName = 'AccessibilityEnhancer';

export default AccessibilityEnhancer;
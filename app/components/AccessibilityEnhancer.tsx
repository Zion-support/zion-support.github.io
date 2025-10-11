'use client';
import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = false,
  enableFocusManagement = true,
  children
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      };

      const handleMouseDown = () => {
        document.body.classList.remove('keyboard-navigation');
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
      };
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (enableScreenReaderSupport) {
      // Add skip links
      const skipLinks = document.createElement('div');
      skipLinks.className = 'sr-only';
      skipLinks.innerHTML = `
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <a href="#navigation" class="skip-link">Skip to navigation</a>
      `;
      document.body.insertBefore(skipLinks, document.body.firstChild);

      return () => {
        if (skipLinks.parentNode) {
          skipLinks.parentNode.removeChild(skipLinks);
        }
      };
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (enableHighContrast) {
      document.body.classList.add('high-contrast');
      return () => document.body.classList.remove('high-contrast');
    }
  }, [enableHighContrast]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (enableFocusManagement) {
      // Focus management for modals and dropdowns
      const handleFocusIn = (event: FocusEvent) => {
        const target = event.target as HTMLElement;
        if (target.closest('[role="dialog"]') || target.closest('[role="menu"]')) {
          // Trap focus within modal/menu
          const focusableElements = target.closest('[role="dialog"], [role="menu"]')?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements && focusableElements.length > 0) {
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
            
            if (event.target === lastElement && event.shiftKey) {
              event.preventDefault();
              firstElement.focus();
            } else if (event.target === firstElement && !event.shiftKey) {
              event.preventDefault();
              lastElement.focus();
            }
          }
        }
      };

      document.addEventListener('focusin', handleFocusIn);
      return () => document.removeEventListener('focusin', handleFocusIn);
    }
  }, [enableFocusManagement]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
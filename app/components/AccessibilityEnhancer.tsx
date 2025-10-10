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
    // Enable keyboard navigation
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip links for keyboard navigation
        if (event.key === 'Tab' && event.shiftKey) {
          const focusableElements = document.querySelectorAll(
            'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
          
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    // Enable screen reader support
    if (enableScreenReaderSupport) {
      // Add ARIA labels to interactive elements
      const interactiveElements = document.querySelectorAll('button, input, select, textarea');
      interactiveElements.forEach((element) => {
        if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
          const text = element.textContent || element.getAttribute('placeholder') || element.getAttribute('value');
          if (text) {
            element.setAttribute('aria-label', text);
          }
        }
      });

      // Add role attributes where needed
      const navigationElements = document.querySelectorAll('nav');
      navigationElements.forEach((nav) => {
        if (!nav.getAttribute('role')) {
          nav.setAttribute('role', 'navigation');
        }
      });

      const mainElements = document.querySelectorAll('main');
      mainElements.forEach((main) => {
        if (!main.getAttribute('role')) {
          main.setAttribute('role', 'main');
        }
      });
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    // Enable high contrast mode
    if (enableHighContrast) {
      const style = document.createElement('style');
      style.textContent = `
        @media (prefers-contrast: high) {
          * {
            border-color: currentColor !important;
          }
          button, input, select, textarea {
            border: 2px solid currentColor !important;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, [enableHighContrast]);

  useEffect(() => {
    // Enable focus management
    if (enableFocusManagement) {
      const handleFocusIn = (event: FocusEvent) => {
        const target = event.target as HTMLElement;
        if (target) {
          target.style.outline = '2px solid #3b82f6';
          target.style.outlineOffset = '2px';
        }
      };

      const handleFocusOut = (event: FocusEvent) => {
        const target = event.target as HTMLElement;
        if (target) {
          target.style.outline = '';
          target.style.outlineOffset = '';
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

  return null; // This component doesn't render anything
};

export default AccessibilityEnhancer;
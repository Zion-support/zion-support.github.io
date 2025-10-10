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
    // Keyboard navigation
    if (enableKeyboardNavigation) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
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
    // Screen reader support
    if (enableScreenReaderSupport) {
      const announceToScreenReader = (message: string) => {
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

      // Store the function globally for use by other components
      (window as any).announceToScreenReader = announceToScreenReader;
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    // High contrast mode support
    if (enableHighContrast) {
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

      return () => {
        prefersHighContrast.removeEventListener('change', updateHighContrast);
      };
    }
  }, [enableHighContrast]);

  useEffect(() => {
    // Focus management
    if (enableFocusManagement) {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      
      const trapFocus = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          const focusableContent = document.querySelectorAll(focusableElements);
          const firstFocusableElement = focusableContent[0] as HTMLElement;
          const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

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
      };

      document.addEventListener('keydown', trapFocus);
      return () => document.removeEventListener('keydown', trapFocus);
    }
  }, [enableFocusManagement]);

  return null;
};

export default AccessibilityEnhancer;
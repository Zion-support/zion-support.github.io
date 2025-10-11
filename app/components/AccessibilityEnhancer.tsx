'use client'
import React, { useEffect } from 'react'

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  children?: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = false,
  enableFocusManagement = true,
  children
}) => {

  useEffect(() => {
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Handle keyboard navigation
        if (event.key === 'Tab') {
          // Ensure proper tab order
          const focusableElements = document.querySelectorAll(
            'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
          );
          // Focus management logic here
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    if (enableScreenReaderSupport) {
      // Add screen reader support
      const addAriaLabels = () => {
        const buttons = document.querySelectorAll('button:not([aria-label])');
        buttons.forEach((button) => {
          if (!button.getAttribute('aria-label')) {
            button.setAttribute('aria-label', button.textContent || 'Button');
          }
        });
      };

      addAriaLabels();
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    if (enableHighContrast) {
      document.body.classList.add('high-contrast');
      return () => document.body.classList.remove('high-contrast');
    }
  }, [enableHighContrast]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
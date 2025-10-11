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

      // Make announcement function available globally
      (window as any).announceToScreenReader = announceToScreenReader;
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    if (enableHighContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [enableHighContrast]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
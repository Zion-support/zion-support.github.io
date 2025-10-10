'use client';
import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = false,
  enableReducedMotion = false,
}) => {
  useEffect(() => {
    // Add accessibility enhancements
    if (enableKeyboardNavigation) {
      // Add keyboard navigation support
      document.addEventListener('keydown', handleKeyboardNavigation);
    }

    if (enableScreenReader) {
      // Add screen reader support
      document.body.setAttribute('aria-live', 'polite');
    }

    if (enableHighContrast) {
      // Add high contrast mode
      document.body.classList.add('high-contrast');
    }

    if (enableReducedMotion) {
      // Add reduced motion support
      document.body.classList.add('reduced-motion');
    }

    return () => {
      document.removeEventListener('keydown', handleKeyboardNavigation);
    };
  }, [enableKeyboardNavigation, enableScreenReader, enableHighContrast, enableReducedMotion]);

  const handleKeyboardNavigation = (event: KeyboardEvent) => {
    // Handle keyboard navigation
    if (event.key === 'Tab') {
      // Add focus indicators
      const focusedElement = document.activeElement;
      if (focusedElement) {
        focusedElement.classList.add('keyboard-focus');
      }
    }
  };

  return <>{children}</>;
};

export default AccessibilityEnhancer;

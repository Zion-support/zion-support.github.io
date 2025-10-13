import React, { ReactNode, useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    // Initialize accessibility features
    if (enableKeyboardNavigation) {
      // Add keyboard navigation support
      document.addEventListener('keydown', handleKeyDown);
    }

    if (enableScreenReader) {
      // Add screen reader support
      document.body.setAttribute('aria-live', 'polite');
    }

    if (enableHighContrast) {
      // Add high contrast support
      document.body.classList.add('high-contrast');
    }

    if (enableFocusManagement) {
      // Add focus management
      document.addEventListener('focusin', handleFocusIn);
      document.addEventListener('focusout', handleFocusOut);
    }

    return () => {
      // Cleanup
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [enableKeyboardNavigation, enableScreenReader, enableHighContrast, enableFocusManagement]);

  const handleKeyDown = (event: KeyboardEvent) => {
    // Handle keyboard navigation
    if (event.key === 'Tab') {
      // Ensure proper tab order
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    }

    // Handle escape key
    if (event.key === 'Escape') {
      const modal = document.querySelector('[role="dialog"]');
      if (modal) {
        (modal as HTMLElement).focus();
      }
    }
  };

  const handleFocusIn = (event: FocusEvent) => {
    // Add focus indicators
    const target = event.target as HTMLElement;
    target.classList.add('focus-visible');
  };

  const handleFocusOut = (event: FocusEvent) => {
    // Remove focus indicators
    const target = event.target as HTMLElement;
    target.classList.remove('focus-visible');
  };

  return <>{children}</>;
};

export default AccessibilityEnhancer;

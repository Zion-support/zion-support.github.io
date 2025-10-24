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
    // Enable keyboard navigation
    if (enableKeyboardNavigation) {
      document.addEventListener('keydown', handleKeyDown);
    }

    // Enable screen reader support
    if (enableScreenReaderSupport) {
      // Add ARIA labels and roles
      const elements = document.querySelectorAll('[data-aria-label]');
      elements.forEach(element => {
        const label = element.getAttribute('data-aria-label');
        if (label) {
          element.setAttribute('aria-label', label);
        }
      });
    }

    // Enable high contrast mode
    if (enableHighContrast) {
      document.body.classList.add('high-contrast');
    }

    // Enable focus management
    if (enableFocusManagement) {
      // Trap focus within modals and dialogs
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
    }

    return () => {
      if (enableKeyboardNavigation) {
        document.removeEventListener('keydown', handleKeyDown);
      }
      if (enableHighContrast) {
        document.body.classList.remove('high-contrast');
      }
    };
  }, [enableKeyboardNavigation, enableScreenReaderSupport, enableHighContrast, enableFocusManagement]);

  const handleKeyDown = (event: KeyboardEvent) => {
    // Handle escape key
    if (event.key === 'Escape') {
      const modals = document.querySelectorAll('[role="dialog"]');
      if (modals.length > 0) {
        const lastModal = modals[modals.length - 1] as HTMLElement;
        lastModal.focus();
      }
    }

    // Handle tab navigation
    if (event.key === 'Tab') {
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length > 0) {
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }
  };

  return <>{children}</>;
};

export default AccessibilityEnhancer;
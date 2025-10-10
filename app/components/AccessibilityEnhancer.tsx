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
    // Add accessibility enhancements
    if (enableKeyboardNavigation) {
      // Add keyboard navigation support
      document.addEventListener('keydown', handleKeyboardNavigation);
    }

    if (enableScreenReaderSupport) {
      // Add screen reader support
      addScreenReaderSupport();
    }

    if (enableHighContrast) {
      // Add high contrast support
      addHighContrastSupport();
    }

    if (enableFocusManagement) {
      // Add focus management
      addFocusManagement();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyboardNavigation);
    };
  }, [enableKeyboardNavigation, enableScreenReaderSupport, enableHighContrast, enableFocusManagement]);

  const handleKeyboardNavigation = (event: KeyboardEvent) => {
    // Handle keyboard navigation
    if (event.key === 'Tab') {
      // Ensure proper tab order
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          event.preventDefault();
        }
      }
    }
  };

  const addScreenReaderSupport = () => {
    // Add ARIA labels and roles
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach((button) => {
      if (!button.getAttribute('aria-label')) {
        button.setAttribute('aria-label', button.textContent || 'Button');
      }
    });

    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);
  };

  const addHighContrastSupport = () => {
    // Add high contrast mode support
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
  };

  const addFocusManagement = () => {
    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
      .focus-visible:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
    `;
    document.head.appendChild(style);
  };

  return null;
};

export default AccessibilityEnhancer;
'use client';

import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableFocusManagement?: boolean;
  enableARIALabels?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableFocusManagement = true,
  enableARIALabels = true
}) => {
  useEffect(() => {
    if (enableKeyboardNavigation) {
      // Add keyboard navigation support
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          // Ensure focus is visible
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
    if (enableScreenReaderSupport) {
      // Add screen reader support
      const addSkipLinks = () => {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50';
        document.body.insertBefore(skipLink, document.body.firstChild);
      };

      addSkipLinks();
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    if (enableFocusManagement) {
      // Add focus management
      const manageFocus = () => {
        const focusableElements = document.querySelectorAll(
          'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );

        focusableElements.forEach(element => {
          if (!element.hasAttribute('tabindex')) {
            element.setAttribute('tabindex', '0');
          }
        });
      };

      manageFocus();
    }
  }, [enableFocusManagement]);

  useEffect(() => {
    if (enableARIALabels) {
      // Add ARIA labels
      const addARIALabels = () => {
        const buttons = document.querySelectorAll('button:not([aria-label])');
        buttons.forEach(button => {
          if (!button.textContent?.trim()) {
            button.setAttribute('aria-label', 'Button');
          }
        });

        const images = document.querySelectorAll('img:not([alt])');
        images.forEach(img => {
          img.setAttribute('alt', 'Image');
        });
      };

      addARIALabels();
    }
  }, [enableARIALabels]);

  return null;
};

export default AccessibilityEnhancer;
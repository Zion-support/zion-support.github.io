'use client';
import React, { useEffect, useCallback } from 'react';
interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}
/**
 * Accessibility Enhancer Component
 * Provides comprehensive accessibility improvements
 */
const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  // Add skip links
  useEffect(() => {
    if (enableScreenReaderSupport) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    }
  }, [enableScreenReaderSupport]);
  // Add keyboard navigation
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (enableKeyboardNavigation) {
      // Handle keyboard navigation
      if (event.key === 'Tab') {
        // Ensure focus indicators are visible
        document.body.classList.add('keyboard-navigation');
      }
    }
  }, [enableKeyboardNavigation]);
  useEffect(() => {
    if (enableKeyboardNavigation) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation, handleKeyDown]);
  // Add focus indicators
  useEffect(() => {
    if (enableFocusManagement) {
      const style = document.createElement('style');
      style.textContent = `
        .keyboard-navigation *:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
      `;
      document.head.appendChild(style);
    }
  }, [enableFocusManagement]);
  return null;
};
export default AccessibilityEnhancer;
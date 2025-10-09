import React, { useEffect, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableSkipLinks?: boolean;
  enableKeyboardNav?: boolean;
  enableFocusIndicators?: boolean;
}

/**
 * Accessibility Enhancer Component
 * Provides comprehensive accessibility improvements
 */
const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableSkipLinks = true,
  enableKeyboardNav = true,
  enableFocusIndicators = true,
}) => {
  useEffect(() => {
    if (enableSkipLinks) {
      // Add skip links functionality
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    }
  }, [enableSkipLinks]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (enableKeyboardNav) {
      // Handle keyboard navigation
      if (event.key === 'Tab') {
        // Add focus indicators
        if (enableFocusIndicators) {
          document.body.classList.add('keyboard-navigation');
        }
      }
    }
  }, [enableKeyboardNav, enableFocusIndicators]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;

import React, { useEffect, useCallback } from 'react';
import Link from 'next/link';

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
  // Add skip links functionality
  useEffect(() => {
    if (enableSkipLinks) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
      
      return () => {
        if (skipLink.parentNode) {
          skipLink.parentNode.removeChild(skipLink);
        }
      };
    }
  }, [enableSkipLinks]);

  // Add keyboard navigation enhancements
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (enableKeyboardNav) {
      // Add keyboard navigation logic here
      if (event.key === 'Tab') {
        // Ensure focus indicators are visible
        document.body.classList.add('keyboard-navigation');
      }
    }
  }, [enableKeyboardNav]);

  useEffect(() => {
    if (enableKeyboardNav) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNav, handleKeyDown]);

  // Add focus indicators
  useEffect(() => {
    if (enableFocusIndicators) {
      const style = document.createElement('style');
      style.textContent = `
        .keyboard-navigation *:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        if (style.parentNode) {
          style.parentNode.removeChild(style);
        }
      };
    }
  }, [enableFocusIndicators]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;

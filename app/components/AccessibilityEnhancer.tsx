'use client';
import React, { useEffect, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableSkipLinks?: boolean;
  enableKeyboardNav?: boolean;
  enableFocusIndicators?: boolean;
}

/**
 * AccessibilityEnhancer component provides enhanced accessibility features
 * including skip links, keyboard navigation, and focus management
 */
const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableSkipLinks = true,
  enableKeyboardNav = true,
  enableFocusIndicators = true
}) => {
  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!enableKeyboardNav) return;

    // Skip to main content
    if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
      const skipLink = document.querySelector('[data-skip-link]') as HTMLElement;
      if (skipLink) {
        skipLink.focus();
        event.preventDefault();
      }
    }

    // Escape key to close modals/dropdowns
    if (event.key === 'Escape') {
      const activeElement = document.activeElement as HTMLElement;
      if (activeElement && activeElement.getAttribute('data-close-on-escape') === 'true') {
        activeElement.blur();
      }
    }
  }, [enableKeyboardNav]);

  // Handle focus management
  const handleFocusIn = useCallback((event: FocusEvent) => {
    if (!enableFocusIndicators) return;

    const target = event.target as HTMLElement;
    if (target) {
      target.classList.add('focus-visible');
    }
  }, [enableFocusIndicators]);

  const handleFocusOut = useCallback((event: FocusEvent) => {
    if (!enableFocusIndicators) return;

    const target = event.target as HTMLElement;
    if (target) {
      target.classList.remove('focus-visible');
    }
  }, [enableFocusIndicators]);

  useEffect(() => {
    // Add keyboard event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [handleKeyDown, handleFocusIn, handleFocusOut]);

  return (
    <>
      {enableSkipLinks && (
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
          data-skip-link
        >
          Skip to main content
        </a>
      )}
      {children}
    </>
  );
};

export default AccessibilityEnhancer;
'use client';
import React, { useEffect, useState, useCallback } from 'react';

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
  enableFocusManagement = true,
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);

  // Keyboard navigation enhancement
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const skipLink = document.querySelector('[href="#main-content"]') as HTMLElement;
        if (skipLink) {
          skipLink.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Focus management
  useEffect(() => {
    if (!enableFocusManagement) return;

    const handleFocusIn = (event: FocusEvent) => {
      setFocusVisible(true);
    };

    const handleFocusOut = (event: FocusEvent) => {
      setFocusVisible(false);
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [enableFocusManagement]);

  // High contrast mode
  useEffect(() => {
    if (!enableHighContrast) return;

    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [enableHighContrast]);

  // Screen reader support
  useEffect(() => {
    if (!enableScreenReaderSupport) return;

    // Add ARIA landmarks
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50';
    skipLink.style.position = 'absolute';
    skipLink.style.left = '-9999px';
    skipLink.style.top = '-9999px';
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    return () => {
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    };
  }, [enableScreenReaderSupport]);

  // Apply high contrast styles
  useEffect(() => {
    if (isHighContrast) {
      document.documentElement.style.setProperty('--tw-bg-opacity', '1');
      document.documentElement.style.setProperty('--tw-text-opacity', '1');
    }
  }, [isHighContrast]);

  return null;
};

export default AccessibilityEnhancer;
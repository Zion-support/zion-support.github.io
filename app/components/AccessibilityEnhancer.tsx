'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

/**
 * AccessibilityEnhancer component provides enhanced accessibility features
 * including keyboard navigation, screen reader support, and high contrast mode
 */
const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);

  // High contrast mode toggle
  useEffect(() => {
    if (enableHighContrast) {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      setIsHighContrast(prefersHighContrast);
      
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      const handleChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches);
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [enableHighContrast]);

  // Focus management
  useEffect(() => {
    if (enableFocusManagement) {
      const handleFocusIn = () => setFocusVisible(true);
      const handleFocusOut = () => setFocusVisible(false);
      
      document.addEventListener('focusin', handleFocusIn);
      document.addEventListener('focusout', handleFocusOut);
      
      return () => {
        document.removeEventListener('focusin', handleFocusIn);
        document.removeEventListener('focusout', handleFocusOut);
      };
    }
  }, [enableFocusManagement]);

  // Keyboard navigation
  useEffect(() => {
    if (enableKeyboardNavigation) {
      const handleKeyDown = (e: KeyboardEvent) => {
        // Skip to main content
        if (e.key === 'Tab' && e.shiftKey && document.activeElement === document.body) {
          const skipLink = document.querySelector('[href="#main-content"]') as HTMLElement;
          if (skipLink) {
            skipLink.focus();
            e.preventDefault();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (enableScreenReaderSupport) {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      
      document.body.appendChild(announcement);
      setTimeout(() => document.body.removeChild(announcement), 1000);
    }
  }, [enableScreenReaderSupport]);

  // Apply high contrast styles
  useEffect(() => {
    if (enableHighContrast && isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [enableHighContrast, isHighContrast]);

  // Apply focus visible styles
  useEffect(() => {
    if (enableFocusManagement) {
      if (focusVisible) {
        document.documentElement.classList.add('focus-visible');
      } else {
        document.documentElement.classList.remove('focus-visible');
      }
    }
  }, [enableFocusManagement, focusVisible]);

  return null;
};

export default AccessibilityEnhancer;
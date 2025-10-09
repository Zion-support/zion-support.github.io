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
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (enableHighContrast) {
      // Apply high contrast mode if needed
      if (isHighContrast) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    }
  }, [isHighContrast, enableHighContrast]);

  useEffect(() => {
    if (enableScreenReaderSupport) {
      // Add screen reader announcements
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.id = 'screen-reader-announcements';
      document.body.appendChild(announcement);

      return (
    <>) => {
        const existing = document.getElementById('screen-reader-announcements');
        if (existing) {
          existing.remove();
        }
      };
    }
  }, [enableScreenReaderSupport]);

  const announceToScreenReader = useCallback((message: string) => {
    if (enableScreenReaderSupport) {
      const announcement = document.getElementById('screen-reader-announcements');
      if (announcement) {
        announcement.textContent = message;
      }
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    if (enableKeyboardNavigation) {
      const handleKeyDown = (e: KeyboardEvent) => {
        // Skip to main content
        if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
          const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
          if (skipLink) {
            skipLink.focus();
            e.preventDefault();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return (
    <>) => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    if (enableFocusManagement) {
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible:focus {
          outline: 2px solid #00ffff;
          outline-offset: 2px;
        }
      `;
      document.head.appendChild(style);

      return (
    <>) => {
        document.head.removeChild(style);
      };
    }
  }, [enableFocusManagement]);

  // Expose announcement function globally for other components
  useEffect(() => {
    (window as any).announceToScreenReader = announceToScreenReader;
    return (
    <>) => {
      delete (window as any).announceToScreenReader;
    };
  }, [announceToScreenReader]);

  return null;
};

export default AccessibilityEnhancer;
'use client';
import React, { useEffect, useCallback, ReactNode } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  // Keyboard navigation enhancements
  useEffect(() => {
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
          if (skipLink) {
            skipLink.focus();
            event.preventDefault();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  // Screen reader support
  useEffect(() => {
    if (enableScreenReaderSupport) {
      // Create live region for announcements
      const liveRegion = document.createElement('div');
      liveRegion.id = 'aria-live-region';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.style.position = 'absolute';
      liveRegion.style.left = '-10000px';
      liveRegion.style.width = '1px';
      liveRegion.style.height = '1px';
      liveRegion.style.overflow = 'hidden';
      document.body.appendChild(liveRegion);

      return () => {
        const existingLiveRegion = document.getElementById('aria-live-region');
        if (existingLiveRegion) {
          existingLiveRegion.remove();
        }
      };
    }
  }, [enableScreenReaderSupport]);

  // High contrast mode
  useEffect(() => {
    if (enableHighContrast) {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      };

      handleContrastChange(mediaQuery);
      mediaQuery.addEventListener('change', handleContrastChange);
      return () => mediaQuery.removeEventListener('change', handleContrastChange);
    }
  }, [enableHighContrast]);

  // Focus management
  useEffect(() => {
    if (enableFocusManagement) {
      // Store the last focused element before navigation
      let lastFocusedElement: HTMLElement | null = null;

      const handleFocusIn = (event: FocusEvent) => {
        lastFocusedElement = event.target as HTMLElement;
      };

      const handleFocusOut = (event: FocusEvent) => {
        // Ensure focus is visible
        const target = event.target as HTMLElement;
        if (target && target.style) {
          target.style.outline = '2px solid #00ffff';
          target.style.outlineOffset = '2px';
        }
      };

      document.addEventListener('focusin', handleFocusIn);
      document.addEventListener('focusout', handleFocusOut);

      return () => {
        document.removeEventListener('focusin', handleFocusIn);
        document.removeEventListener('focusout', handleFocusOut);
      };
    }
  }, [enableFocusManagement]);

  // Announce page changes to screen readers
  const announcePageChange = useCallback((message: string) => {
    const liveRegion = document.getElementById('aria-live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  }, []);

  // Expose announcement function globally for use in other components
  useEffect(() => {
    (window as any).announcePageChange = announcePageChange;
    return () => {
      delete (window as any).announcePageChange;
    };
  }, [announcePageChange]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
import { useEffect, useCallback, useRef } from 'react';

interface AccessibilityOptions {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableFocusManagement?: boolean;
  enableHighContrast?: boolean;
  announceChanges?: boolean;
}

export const useAccessibilityEnhancements = (options: AccessibilityOptions = {}) => {
  const {
    enableKeyboardNavigation = true,
    enableScreenReaderSupport = true,
    enableFocusManagement = true,
    enableHighContrast = true,
    announceChanges = true
  } = options;

  const announcementsRef = useRef<HTMLDivElement | null>(null);

  // Create live region for screen reader announcements
  useEffect(() => {
    if (!enableScreenReaderSupport || !announceChanges) return;

    const announcementRegion = document.createElement('div');
    announcementRegion.setAttribute('aria-live', 'polite');
    announcementRegion.setAttribute('aria-atomic', 'true');
    announcementRegion.className = 'sr-only';
    announcementRegion.style.cssText = `
      position: absolute;
      left: -10000px;
      width: 1px;
      height: 1px;
      overflow: hidden;
    `;
    
    document.body.appendChild(announcementRegion);
    announcementsRef.current = announcementRegion;

    return () => {
      if (announcementsRef.current) {
        document.body.removeChild(announcementsRef.current);
      }
    };
  }, [enableScreenReaderSupport, announceChanges]);

  // Announce changes to screen readers
  const announce = useCallback((message: string) => {
    if (!announceChanges || !announcementsRef.current) return;
    
    announcementsRef.current.textContent = message;
    
    // Clear after announcement
    setTimeout(() => {
      if (announcementsRef.current) {
        announcementsRef.current.textContent = '';
      }
    }, 1000);
  }, [announceChanges]);

  // Enhanced keyboard navigation
  const handleKeyboardNavigation = useCallback((event: KeyboardEvent) => {
    if (!enableKeyboardNavigation) return;

    const { key, target } = event;
    const element = target as HTMLElement;

    // Skip link navigation
    if (key === 'Tab' && element.tagName === 'A') {
      const href = element.getAttribute('href');
      if (href && href.startsWith('#')) {
        event.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          announce(`Navigated to ${targetElement.textContent || 'section'}`);
        }
      }
    }

    // Escape key handling
    if (key === 'Escape') {
      const modal = document.querySelector('[role="dialog"]');
      if (modal) {
        const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]');
        if (closeButton) {
          (closeButton as HTMLElement).focus();
        }
      }
    }
  }, [enableKeyboardNavigation, announce]);

  // Focus management
  const manageFocus = useCallback((element: HTMLElement) => {
    if (!enableFocusManagement) return;

    // Ensure element is focusable
    if (!element.hasAttribute('tabindex') && !element.matches('button, a, input, select, textarea')) {
      element.setAttribute('tabindex', '0');
    }

    // Add focus indicators
    element.addEventListener('focus', () => {
      element.style.outline = '2px solid #0066cc';
      element.style.outlineOffset = '2px';
    });

    element.addEventListener('blur', () => {
      element.style.outline = '';
      element.style.outlineOffset = '';
    });
  }, [enableFocusManagement]);

  // High contrast mode detection
  useEffect(() => {
    if (!enableHighContrast) return;

    const checkHighContrast = () => {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      
      if (prefersHighContrast) {
        document.documentElement.classList.add('high-contrast');
        announce('High contrast mode enabled');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    };

    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    mediaQuery.addEventListener('change', checkHighContrast);
    checkHighContrast();

    return () => mediaQuery.removeEventListener('change', checkHighContrast);
  }, [enableHighContrast, announce]);

  // Set up keyboard navigation
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    document.addEventListener('keydown', handleKeyboardNavigation);
    return () => document.removeEventListener('keydown', handleKeyboardNavigation);
  }, [enableKeyboardNavigation, handleKeyboardNavigation]);

  return {
    announce,
    manageFocus
  };
};
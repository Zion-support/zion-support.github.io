'use client';
import React, { useEffect, useCallback, useState } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableReducedMotion?: boolean;
  enableColorBlindSupport?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableReducedMotion = true,
  enableColorBlindSupport = true,
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Detect user preferences
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMotionChange);

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(highContrastQuery.matches);

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };

    highContrastQuery.addEventListener('change', handleContrastChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      highContrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  // Enhanced keyboard navigation
  const setupKeyboardNavigation = useCallback(() => {
    if (!enableKeyboardNavigation || typeof window === 'undefined') return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const skipLink = document.querySelector('a[href="#main-content"]');
        if (skipLink) {
          (skipLink as HTMLElement).focus();
        }
      }

      // Escape key to close modals/overlays
      if (event.key === 'Escape') {
        const activeModal = document.querySelector('[role="dialog"][aria-hidden="false"]');
        if (activeModal) {
          const closeButton = activeModal.querySelector('[aria-label*="close"], [aria-label*="Close"]');
          if (closeButton) {
            (closeButton as HTMLElement).click();
          }
        }
      }

      // Arrow key navigation for custom components
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        const activeElement = document.activeElement;
        if (activeElement && activeElement.getAttribute('role') === 'menuitem') {
          event.preventDefault();
          // Handle custom arrow navigation
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Enhanced focus management
  const setupFocusManagement = useCallback(() => {
    if (!enableFocusManagement || typeof window === 'undefined') return;

    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [role="button"], [role="menuitem"]';
    
    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        const focusable = Array.from(document.querySelectorAll(focusableElements)) as HTMLElement[];
        const firstFocusable = focusable[0];
        const lastFocusable = focusable[focusable.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstFocusable) {
            lastFocusable?.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            firstFocusable?.focus();
            event.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
  }, [enableFocusManagement]);

  // Screen reader enhancements
  const setupScreenReaderSupport = useCallback(() => {
    if (!enableScreenReader || typeof window === 'undefined') return;

    // Add live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.setAttribute('class', 'sr-only');
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

    // Enhance form labels
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input) => {
      if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (label) {
          input.setAttribute('aria-labelledby', label.id || `label-${input.id}`);
        }
      }
    });

    return () => {
      const existingLiveRegion = document.getElementById('live-region');
      if (existingLiveRegion) {
        existingLiveRegion.remove();
      }
    };
  }, [enableScreenReader]);

  // Apply accessibility styles based on user preferences
  const applyAccessibilityStyles = useCallback(() => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;
    
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      .focus-visible:focus {
        outline: 2px solid #00ffff;
        outline-offset: 2px;
      }
      
      .high-contrast {
        --neon-cyan: #00ffff;
        --neon-purple: #ff00ff;
        --neon-pink: #ff0080;
        --neon-green: #00ff00;
        --neon-blue: #0080ff;
        --neon-orange: #ff8000;
        --neon-red: #ff0000;
      }
      
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    `;
    document.head.appendChild(style);
  }, [isHighContrast, isReducedMotion]);

  useEffect(() => {
    const cleanupKeyboard = setupKeyboardNavigation();
    const cleanupFocus = setupFocusManagement();
    const cleanupScreenReader = setupScreenReaderSupport();
    applyAccessibilityStyles();

    return () => {
      cleanupKeyboard?.();
      cleanupFocus?.();
      cleanupScreenReader?.();
    };
  }, [setupKeyboardNavigation, setupFocusManagement, setupScreenReaderSupport, applyAccessibilityStyles]);

  return null;
};

export default AccessibilityEnhancer;

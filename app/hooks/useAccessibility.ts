import { useState, useEffect, useCallback } from 'react';

interface AccessibilityOptions {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableReducedMotion?: boolean;
}

interface AccessibilityState {
  isHighContrast: boolean;
  isReducedMotion: boolean;
  isKeyboardUser: boolean;
  currentFocus: HTMLElement | null;
  focusHistory: HTMLElement[];
}

export const useAccessibility = (options: AccessibilityOptions = {}) => {
  const {
    enableKeyboardNavigation = true,
    enableHighContrast = true,
    enableFocusManagement = true,
    enableReducedMotion = true
  } = options;

  const [state, setState] = useState<AccessibilityState>({
    isHighContrast: false,
    isReducedMotion: false,
    isKeyboardUser: false,
    currentFocus: null,
    focusHistory: []
  });

  // Initialize accessibility features
  useEffect(() => {
    if (enableHighContrast) {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      setState(prev => ({ ...prev, isHighContrast: prefersHighContrast }));
    }

    if (enableReducedMotion) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setState(prev => ({ ...prev, isReducedMotion: prefersReducedMotion }));
    }

    if (enableKeyboardNavigation) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          setState(prev => ({ ...prev, isKeyboardUser: true }));
        }
      };

      const handleMouseDown = () => {
        setState(prev => ({ ...prev, isKeyboardUser: false }));
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
      };
    }
  }, [enableHighContrast, enableReducedMotion, enableKeyboardNavigation]);

  const focusElement = useCallback((element: HTMLElement) => {
    if (enableFocusManagement) {
      setState(prev => ({
        ...prev,
        currentFocus: element,
        focusHistory: [...prev.focusHistory, element]
      }));
      element.focus();
    }
  }, [enableFocusManagement]);

  return {
    ...state,
    focusElement
  };
};
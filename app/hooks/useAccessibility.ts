import { useCallback, useEffect, useRef, useState } from 'react';

interface AccessibilityOptions {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

interface AccessibilityState {
  isHighContrast: boolean;
  isScreenReaderActive: boolean;
  currentFocusIndex: number;
  focusableElements: HTMLElement[];
}

export const useAccessibility = (options: AccessibilityOptions = {}) => {
  const {
    enableKeyboardNavigation = true,
    enableScreenReader = true,
    enableHighContrast = true,
    enableFocusManagement = true
  } = options;

  const stateRef = useRef<AccessibilityState>({
    isHighContrast: false,
    isScreenReaderActive: false,
    currentFocusIndex: 0,
    focusableElements: []
  });

  const [state, setState] = useState<AccessibilityState>(stateRef.current);

  // Check for high contrast mode
  const checkHighContrast = useCallback(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    stateRef.current.isHighContrast = mediaQuery.matches;

    // Listen for changes
    const handleChange = (e: MediaQueryListEvent) => {
      stateRef.current.isHighContrast = e.matches;
      document.documentElement.classList.toggle('high-contrast', e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Check for screen reader
  const checkScreenReader = useCallback(() => {
    if (typeof window === 'undefined') return;

    const isScreenReaderActive = 
      window.navigator.userAgent.includes('NVDA') ||
      window.navigator.userAgent.includes('JAWS') ||
      window.navigator.userAgent.includes('VoiceOver') ||
      document.documentElement.getAttribute('aria-hidden') === 'false';

    stateRef.current.isScreenReaderActive = isScreenReaderActive;
  }, []);

  // Update focusable elements
  const updateFocusableElements = useCallback(() => {
    if (typeof document === 'undefined') return;

    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])'
    ].join(', ');

    const elements = Array.from(document.querySelectorAll(focusableSelectors)) as HTMLElement[];
    stateRef.current.focusableElements = elements;
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!enableKeyboardNavigation) return;

    const { focusableElements, currentFocusIndex } = stateRef.current;

    switch (e.key) {
      case 'Tab':
        e.preventDefault();
        const nextIndex = e.shiftKey 
          ? (currentFocusIndex - 1 + focusableElements.length) % focusableElements.length
          : (currentFocusIndex + 1) % focusableElements.length;
        
        stateRef.current.currentFocusIndex = nextIndex;
        focusableElements[nextIndex]?.focus();
        break;
      
      case 'Enter':
      case ' ':
        e.preventDefault();
        focusableElements[currentFocusIndex]?.click();
        break;
    }
  }, [enableKeyboardNavigation]);

  // Initialize accessibility features
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const cleanupFunctions: (() => void)[] = [];

    if (enableHighContrast) {
      const cleanup = checkHighContrast();
      if (cleanup) cleanupFunctions.push(cleanup);
    }

    if (enableScreenReader) {
      checkScreenReader();
    }

    if (enableFocusManagement) {
      updateFocusableElements();
      
      const handleFocusUpdate = () => updateFocusableElements();
      document.addEventListener('focusin', handleFocusUpdate);
      document.addEventListener('focusout', handleFocusUpdate);
      
      cleanupFunctions.push(() => {
        document.removeEventListener('focusin', handleFocusUpdate);
        document.removeEventListener('focusout', handleFocusUpdate);
      });
    }

    if (enableKeyboardNavigation) {
      document.addEventListener('keydown', handleKeyDown);
      cleanupFunctions.push(() => {
        document.removeEventListener('keydown', handleKeyDown);
      });
    }

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, [enableHighContrast, enableScreenReader, enableFocusManagement, enableKeyboardNavigation, checkHighContrast, checkScreenReader, updateFocusableElements, handleKeyDown]);

  // Update state when ref changes
  useEffect(() => {
    setState({ ...stateRef.current });
  }, [stateRef.current.isHighContrast, stateRef.current.isScreenReaderActive, stateRef.current.currentFocusIndex]);

  return {
    ...state,
    updateFocusableElements,
    setFocus: (index: number) => {
      if (stateRef.current.focusableElements[index]) {
        stateRef.current.currentFocusIndex = index;
        stateRef.current.focusableElements[index].focus();
      }
    }
  };
};
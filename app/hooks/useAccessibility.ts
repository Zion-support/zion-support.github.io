import { useState, useEffect, useCallback } from 'react';

interface AccessibilityState {
  isHighContrast: boolean;
  isReducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  isKeyboardNavigation: boolean;
  focusVisible: boolean;
}

export function useAccessibility() {
  const [state, setState] = useState<AccessibilityState>({
    isHighContrast: false,
    isReducedMotion: false,
    fontSize: 'medium',
    isKeyboardNavigation: false,
    focusVisible: false
  });

  const updateFontSize = useCallback((size: 'small' | 'medium' | 'large') => {
    setState(prev => ({ ...prev, fontSize: size }));
    
    // Apply font size to document
    const root = document.documentElement;
    root.style.setProperty('--font-size-multiplier', 
      size === 'small' ? '0.875' : size === 'large' ? '1.25' : '1'
    );
  }, []);

  const toggleHighContrast = useCallback(() => {
    setState(prev => {
      const newState = { ...prev, isHighContrast: !prev.isHighContrast };
      
      // Apply high contrast styles
      if (newState.isHighContrast) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
      
      return newState;
    });
  }, []);

  const toggleReducedMotion = useCallback(() => {
    setState(prev => {
      const newState = { ...prev, isReducedMotion: !prev.isReducedMotion };
      
      // Apply reduced motion styles
      if (newState.isReducedMotion) {
        document.body.classList.add('reduced-motion');
      } else {
        document.body.classList.remove('reduced-motion');
      }
      
      return newState;
    });
  }, []);

  const announceToScreenReader = useCallback((message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  const setFocus = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.focus();
      announceToScreenReader(`Focused on ${element.textContent || elementId}`);
    }
  }, [announceToScreenReader]);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setState(prev => ({
      ...prev,
      isReducedMotion: prefersReducedMotion,
      isHighContrast: prefersHighContrast
    }));

    // Handle keyboard navigation
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        setState(prev => ({ ...prev, isKeyboardNavigation: true }));
      }
    };

    const handleMouseDown = () => {
      setState(prev => ({ ...prev, isKeyboardNavigation: false }));
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return {
    state,
    updateFontSize,
    toggleHighContrast,
    toggleReducedMotion,
    announceToScreenReader,
    setFocus
  };
}

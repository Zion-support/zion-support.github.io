import React, { useEffect, useCallback } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
    
    // Handle escape key to close modals/dropdowns
    if (event.key === 'Escape') {
      const activeElement = document.activeElement as HTMLElement;
      if (activeElement && activeElement.blur) {
        activeElement.blur();
      }
    }
    
    // Handle enter key on buttons and links
    if (event.key === 'Enter' && (event.target as HTMLElement)?.tagName === 'BUTTON') {
      (event.target as HTMLButtonElement).click();
    }
  }, []);

  const handleMouseDown = useCallback(() => {
    document.body.classList.remove('keyboard-navigation');
  }, []);

  const handleFocusIn = useCallback((event: FocusEvent) => {
    const target = event.target as HTMLElement;
    if (target) {
      // Add focus-visible class for better focus indication
      target.classList.add('focus-visible');
    }
  }, []);

  const handleFocusOut = useCallback((event: FocusEvent) => {
    const target = event.target as HTMLElement;
    if (target) {
      target.classList.remove('focus-visible');
    }
  }, []);

  useEffect(() => {
    // Add keyboard navigation support
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    // Set up reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      document.body.classList.add('reduced-motion');
    }

    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('reduced-motion');
      } else {
        document.body.classList.remove('reduced-motion');
      }
    };

    mediaQuery.addEventListener('change', handleMotionChange);

    // Set up high contrast preference
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');
    if (contrastQuery.matches) {
      document.body.classList.add('high-contrast');
    }

    const handleContrastChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    };

    contrastQuery.addEventListener('change', handleContrastChange);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
      mediaQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, [handleKeyDown, handleMouseDown, handleFocusIn, handleFocusOut]);

  return null;
};

export default AccessibilityEnhancer;
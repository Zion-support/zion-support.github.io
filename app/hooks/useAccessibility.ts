import { useEffect, useCallback, useRef } from 'react';

interface UseAccessibilityOptions {
  enableKeyboardNavigation?: boolean;
  enableFocusManagement?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
}

export const useAccessibility = (options: UseAccessibilityOptions = {}) => {
  const {
    enableKeyboardNavigation = true,
    enableFocusManagement = true,
    enableScreenReader = true,
    enableHighContrast = true,
    enableReducedMotion = true
  } = options;

  const focusableElementsRef = useRef<HTMLElement[]>([]);

  // Keyboard navigation support
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [enableKeyboardNavigation]);

  // Focus management
  const trapFocus = useCallback((container: HTMLElement) => {
    if (!enableFocusManagement) return;

    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;

    focusableElementsRef.current = Array.from(focusableElements);

    const firstElement = focusableElementsRef.current[0];
    const lastElement = focusableElementsRef.current[focusableElementsRef.current.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    };

    container.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleTabKey);
    };
  }, [enableFocusManagement]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    if (!enableScreenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, [enableScreenReader]);

  // High contrast mode detection
  useEffect(() => {
    if (!enableHighContrast) return;

    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    
    const handleContrastChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    };

    // Check initial state
    if (mediaQuery.matches) {
      document.body.classList.add('high-contrast');
    }

    mediaQuery.addEventListener('change', handleContrastChange);
    return () => mediaQuery.removeEventListener('change', handleContrastChange);
  }, [enableHighContrast]);

  // Reduced motion detection
  useEffect(() => {
    if (!enableReducedMotion) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('reduced-motion');
      } else {
        document.body.classList.remove('reduced-motion');
      }
    };

    // Check initial state
    if (mediaQuery.matches) {
      document.body.classList.add('reduced-motion');
    }

    mediaQuery.addEventListener('change', handleMotionChange);
    return () => mediaQuery.removeEventListener('change', handleMotionChange);
  }, [enableReducedMotion]);

  // Skip to content functionality
  const createSkipLink = useCallback((targetId: string, text: string = 'Skip to main content') => {
    const skipLink = document.createElement('a');
    skipLink.href = `#${targetId}`;
    skipLink.textContent = text;
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      z-index: 1000;
      transition: top 0.3s;
    `;

    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });

    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });

    return skipLink;
  }, []);

  return {
    trapFocus,
    announceToScreenReader,
    createSkipLink
  };
};
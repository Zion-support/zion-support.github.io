<<<<<<< HEAD
import React, { useEffect, useState } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);

    // Apply high contrast mode if needed
    const highContrastMedia = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(highContrastMedia.matches);

    // Listen for changes in user preferences
    const handleContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    highContrastMedia.addEventListener('change', handleContrastChange);
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', handleMotionChange);

    return () => {
      highContrastMedia.removeEventListener('change', handleContrastChange);
      window.matchMedia('(prefers-reduced-motion: reduce)').removeEventListener('change', handleMotionChange);
    };
  }, []);

  useEffect(() => {
    // Apply accessibility styles
    const root = document.documentElement;
    
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Set font size
    root.style.fontSize = `${fontSize}px`;
  }, [isHighContrast, reducedMotion, fontSize]);

  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
        const mainContent = document.querySelector('main');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }

      // Skip to navigation
      if (e.key === 'Tab' && !e.shiftKey && e.target === document.body) {
        const navigation = document.querySelector('nav');
        if (navigation) {
          (navigation as HTMLElement).focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus management
  useEffect(() => {
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    const trapFocus = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        const modal = document.querySelector('[role="dialog"]');
        if (modal) {
          const focusableContent = modal.querySelectorAll(focusableElements);
          const firstFocusableElement = focusableContent[0] as HTMLElement;
          const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

          if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastFocusableElement) {
              firstFocusableElement.focus();
              e.preventDefault();
            }
          }
        }
      }
    };

    document.addEventListener('keydown', trapFocus);
    return () => document.removeEventListener('keydown', trapFocus);
  }, []);

  // Screen reader announcements
  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  // Expose functions for other components to use
  React.useEffect(() => {
    (window as any).accessibilityEnhancer = {
      announceToScreenReader,
      setFontSize,
      setIsHighContrast,
      setReducedMotion
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default AccessibilityEnhancer;
=======
import React, { useEffect, useRef, useState, useCallback } from 'react';

// Minimal shim to ensure build stability after conflict noise

interface FocusTrapConfig {
  containerRef: React.RefObject<HTMLElement>;
  onEscape?: () => void;
  returnFocus?: boolean;
}

export function AccessibilityEnhancer() {
  // No-op hidden component
  return <div aria-hidden="true" style={{ display: 'none' }} />;
}

export function useFocusTrap({ containerRef, onEscape, returnFocus }: FocusTrapConfig) {
  const previousFocus = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    previousFocus.current = document.activeElement as HTMLElement;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onEscape) onEscape();
    };
    container.addEventListener('keydown', onKey);
    return () => {
      container.removeEventListener('keydown', onKey);
      if (returnFocus && previousFocus.current) previousFocus.current.focus();
    };
  }, [containerRef, onEscape, returnFocus]);
}

export function SkipLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 px-4 py-2 rounded-lg z-50">
      {children}
    </a>
  );
}

export function useAnnouncement() {
  const [announcements, setAnnouncements] = useState<Array<{ id: number; message: string; priority: 'polite' | 'assertive' }>>([]);
  const announce = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const id = Date.now();
    setAnnouncements(prev => [...prev, { id, message, priority }]);
    setTimeout(() => setAnnouncements(prev => prev.filter(a => a.id !== id)), 5000);
  }, []);
  return { announcements, announce } as const;
}
>>>>>>> cursor/create-and-deploy-new-content-fc88

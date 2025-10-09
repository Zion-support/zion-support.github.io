import React, { useState, useEffect, useCallback, ReactNode } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
  enableSkipLinks?: boolean;
  enableKeyboardNav?: boolean;
  enableFocusIndicators?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableSkipLinks = true,
  enableKeyboardNav = true,
  enableFocusIndicators = true,
}) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  // Check for user preferences
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Apply accessibility styles
  useEffect(() => {
    const root = document.documentElement;
    
    if (isReducedMotion) {
      root.style.setProperty('--animation-duration', '0.01ms');
      root.style.setProperty('--animation-iteration-count', '1');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--animation-iteration-count');
    }

    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    root.style.fontSize = `${fontSize}px`;
  }, [isReducedMotion, isHighContrast, fontSize]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!enableKeyboardNav) return;

    // Skip to main content
    if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
      e.preventDefault();
      const main = document.querySelector('main');
      if (main) {
        (main as HTMLElement).focus();
      }
    }

    // Escape key to close modals/dropdowns
    if (e.key === 'Escape') {
      const activeElement = document.activeElement as HTMLElement;
      if (activeElement && activeElement.blur) {
        activeElement.blur();
      }
    }
  }, [enableKeyboardNav]);

  useEffect(() => {
    if (enableKeyboardNav) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [handleKeyDown, enableKeyboardNav]);

  // Focus indicators
  useEffect(() => {
    if (enableFocusIndicators) {
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        
        .focus-visible:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        document.head.removeChild(style);
      };
    }
  }, [enableFocusIndicators]);

  return (
    <div className="accessibility-enhanced">
      {enableSkipLinks && (
        <div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50">
          <a
            href="#main-content"
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={(e) => {
              e.preventDefault();
              const main = document.querySelector('main');
              if (main) {
                main.scrollIntoView({ behavior: 'smooth' });
                (main as HTMLElement).focus();
              }
            }}
          >
            Skip to main content
          </a>
        </div>
      )}
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
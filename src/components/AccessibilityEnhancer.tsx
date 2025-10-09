import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableReducedMotion?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableReducedMotion = true,
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Check for user preferences
    if (enableReducedMotion) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(mediaQuery.matches);
      
      const handleChange = (e: MediaQueryListEvent) => {
        setIsReducedMotion(e.matches);
        if (e.matches) {
          document.documentElement.style.setProperty('--animation-duration', '0.01ms');
          document.documentElement.style.setProperty('--animation-iteration-count', '1');
        } else {
          document.documentElement.style.removeProperty('--animation-duration');
          document.documentElement.style.removeProperty('--animation-iteration-count');
        }
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [enableReducedMotion]);

  useEffect(() => {
    if (enableKeyboardNavigation) {
      // Add keyboard navigation styles
      const style = document.createElement('style');
      style.textContent = `
        .keyboard-navigation *:focus {
          outline: 2px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }
        
        .keyboard-navigation button:focus,
        .keyboard-navigation a:focus,
        .keyboard-navigation input:focus,
        .keyboard-navigation textarea:focus,
        .keyboard-navigation select:focus {
          box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.3) !important;
        }
      `;
      document.head.appendChild(style);
      document.documentElement.classList.add('keyboard-navigation');
      
      return () => {
        document.head.removeChild(style);
        document.documentElement.classList.remove('keyboard-navigation');
      };
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    if (enableScreenReader) {
      // Add screen reader optimizations
      const style = document.createElement('style');
      style.textContent = `
        .sr-only {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0, 0, 0, 0) !important;
          white-space: nowrap !important;
          border: 0 !important;
        }
        
        .sr-only:focus {
          position: static !important;
          width: auto !important;
          height: auto !important;
          padding: inherit !important;
          margin: inherit !important;
          overflow: visible !important;
          clip: auto !important;
          white-space: normal !important;
        }
        
        /* Skip links */
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          z-index: 1000;
          border-radius: 4px;
        }
        
        .skip-link:focus {
          top: 6px;
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        document.head.removeChild(style);
      };
    }
  }, [enableScreenReader]);

  useEffect(() => {
    if (enableHighContrast) {
      // Add high contrast mode toggle
      const toggleHighContrast = () => {
        setIsHighContrast(!isHighContrast);
        document.documentElement.classList.toggle('high-contrast', !isHighContrast);
      };

      // Add high contrast styles
      const style = document.createElement('style');
      style.textContent = `
        .high-contrast {
          filter: contrast(150%) brightness(110%);
        }
        
        .high-contrast * {
          border-color: currentColor !important;
        }
        
        .high-contrast button,
        .high-contrast a {
          border: 2px solid currentColor !important;
        }
      `;
      document.head.appendChild(style);

      // Add keyboard shortcut for high contrast (Ctrl+Shift+H)
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.ctrlKey && e.shiftKey && e.key === 'H') {
          e.preventDefault();
          toggleHighContrast();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.head.removeChild(style);
      };
    }
  }, [enableHighContrast, isHighContrast]);

  useEffect(() => {
    if (enableFocusManagement) {
      // Focus management for modals and dynamic content
      let focusHistory: HTMLElement[] = [];
      
      const saveFocus = () => {
        focusHistory.push(document.activeElement as HTMLElement);
      };
      
      const restoreFocus = () => {
        const lastFocused = focusHistory.pop();
        if (lastFocused && lastFocused.focus) {
          lastFocused.focus();
        }
      };
      
      // Trap focus in modals
      const trapFocus = (container: HTMLElement) => {
        const focusableElements = container.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        
        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
              }
            }
          }
        };
        
        container.addEventListener('keydown', handleTabKey);
        firstElement?.focus();
        
        return () => {
          container.removeEventListener('keydown', handleTabKey);
        };
      };
      
      // Make functions available globally for use in components
      (window as any).accessibilityUtils = {
        saveFocus,
        restoreFocus,
        trapFocus,
      };
      
      return () => {
        delete (window as any).accessibilityUtils;
      };
    }
  }, [enableFocusManagement]);

  // Font size controls
  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 2, 24));
    document.documentElement.style.fontSize = `${fontSize + 2}px`;
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 2, 12));
    document.documentElement.style.fontSize = `${fontSize - 2}px`;
  };

  const resetFontSize = () => {
    setFontSize(16);
    document.documentElement.style.fontSize = '16px';
  };

  // Only show accessibility controls in development or when explicitly enabled
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed top-4 left-4 z-50 bg-slate-800/90 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-3 text-white">
      <div className="text-cyan-400 font-semibold mb-2 text-sm">Accessibility</div>
      <div className="space-y-2 text-xs">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsHighContrast(!isHighContrast)}
            className={`px-2 py-1 rounded text-xs ${
              isHighContrast ? 'bg-cyan-400 text-slate-900' : 'bg-gray-600 text-white'
            }`}
            aria-label="Toggle high contrast mode"
          >
            High Contrast
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={decreaseFontSize}
            className="px-2 py-1 bg-gray-600 text-white rounded text-xs"
            aria-label="Decrease font size"
          >
            A-
          </button>
          <span className="text-xs">{fontSize}px</span>
          <button
            onClick={increaseFontSize}
            className="px-2 py-1 bg-gray-600 text-white rounded text-xs"
            aria-label="Increase font size"
          >
            A+
          </button>
          <button
            onClick={resetFontSize}
            className="px-2 py-1 bg-gray-600 text-white rounded text-xs"
            aria-label="Reset font size"
          >
            Reset
          </button>
        </div>
        
        <div className="text-xs text-gray-400">
          Ctrl+Shift+H for high contrast
        </div>
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;
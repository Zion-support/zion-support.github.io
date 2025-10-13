import React, { useEffect, useState, useCallback } from 'react';

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false);

  // Check for user preferences
  useEffect(() => {
    // Check for high contrast preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      setIsHighContrast(true);
    }

    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsReducedMotion(true);
    }

    // Listen for preference changes
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleHighContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    highContrastQuery.addEventListener('change', handleHighContrastChange);
    reducedMotionQuery.addEventListener('change', handleReducedMotionChange);

    return () => {
      highContrastQuery.removeEventListener('change', handleHighContrastChange);
      reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
    };
  }, []);

  // Apply accessibility styles
  useEffect(() => {
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

    // Apply font size
    root.style.fontSize = `${fontSize}px`;
  }, [isHighContrast, isReducedMotion, fontSize]);

  // Keyboard navigation detection
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsKeyboardNavigation(true);
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      setIsKeyboardNavigation(false);
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  // Skip to main content functionality
  const handleSkipToMain = useCallback(() => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Font size controls
  const increaseFontSize = useCallback(() => {
    setFontSize(prev => Math.min(prev + 2, 24));
  }, []);

  const decreaseFontSize = useCallback(() => {
    setFontSize(prev => Math.max(prev - 2, 12));
  }, []);

  const resetFontSize = useCallback(() => {
    setFontSize(16);
  }, []);

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        onClick={handleSkipToMain}
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-cyan-500 focus:text-white focus:px-4 focus:py-2 focus:rounded focus:font-semibold"
        tabIndex={1}
      >
        Skip to main content
      </a>

      {/* Accessibility controls */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
        <button
          onClick={increaseFontSize}
          className="bg-slate-800 text-white px-3 py-2 rounded text-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          aria-label="Increase font size"
          title="Increase font size"
        >
          A+
        </button>
        <button
          onClick={decreaseFontSize}
          className="bg-slate-800 text-white px-3 py-2 rounded text-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          aria-label="Decrease font size"
          title="Decrease font size"
        >
          A-
        </button>
        <button
          onClick={resetFontSize}
          className="bg-slate-800 text-white px-3 py-2 rounded text-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          aria-label="Reset font size"
          title="Reset font size"
        >
          A
        </button>
      </div>

      {/* Screen reader announcements */}
      <div
        id="sr-announcements"
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      />

      {/* Focus management */}
      <div className="focus-trap">
        {children}
      </div>

      {/* High contrast styles */}
      <style jsx>{`
        .high-contrast {
          --text-primary: #ffffff;
          --text-secondary: #e2e8f0;
          --border-color: #64748b;
          --bg-primary: #000000;
          --bg-secondary: #1a1a1a;
        }

        .high-contrast * {
          color: var(--text-primary) !important;
          background-color: var(--bg-primary) !important;
          border-color: var(--border-color) !important;
        }

        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        .keyboard-navigation *:focus {
          outline: 2px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }

        .focus-trap {
          position: relative;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .focus\:not-sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: inherit;
          margin: inherit;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
      `}</style>
    </>
  );
};

export default EnhancedAccessibility;
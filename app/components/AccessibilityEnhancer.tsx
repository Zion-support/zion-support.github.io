import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user preferences
    const checkPreferences = () => {
      // High contrast mode
      if (window.matchMedia('(prefers-contrast: high)').matches) {
        setIsHighContrast(true);
        document.documentElement.classList.add('high-contrast');
      }

      // Reduced motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setReducedMotion(true);
        document.documentElement.classList.add('reduced-motion');
      }

      // Font size preference
      const savedFontSize = localStorage.getItem('fontSize');
      if (savedFontSize) {
        setFontSize(parseInt(savedFontSize));
        document.documentElement.style.fontSize = `${savedFontSize}px`;
      }
    };

    checkPreferences();

    // Listen for changes in preferences
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleHighContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
      if (e.matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    };

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
      if (e.matches) {
        document.documentElement.classList.add('reduced-motion');
      } else {
        document.documentElement.classList.remove('reduced-motion');
      }
    };

    highContrastQuery.addEventListener('change', handleHighContrastChange);
    reducedMotionQuery.addEventListener('change', handleReducedMotionChange);

    // Add keyboard navigation enhancements
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
        const skipLink = document.querySelector('.skip-link') as HTMLElement;
        if (skipLink) {
          skipLink.focus();
        }
      }

      // Escape key to close modals/dropdowns
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.getAttribute('aria-expanded') === 'true') {
          activeElement.click();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Add focus indicators
    const addFocusStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        
        .high-contrast {
          --tw-bg-opacity: 1;
          --tw-text-opacity: 1;
        }
        
        .high-contrast * {
          background-color: var(--high-contrast-bg, white) !important;
          color: var(--high-contrast-text, black) !important;
          border-color: var(--high-contrast-border, black) !important;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `;
      document.head.appendChild(style);
    };

    addFocusStyles();

    return () => {
      highContrastQuery.removeEventListener('change', handleHighContrastChange);
      reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Font size controls
  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 2, 24);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`;
    localStorage.setItem('fontSize', newSize.toString());
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 2, 12);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`;
    localStorage.setItem('fontSize', newSize.toString());
  };

  const resetFontSize = () => {
    setFontSize(16);
    document.documentElement.style.fontSize = '16px';
    localStorage.removeItem('fontSize');
  };

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
        tabIndex={1}
      >
        Skip to main content
      </a>

      {/* Accessibility Controls */}
      <div className="accessibility-controls fixed top-4 right-4 z-40 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Accessibility</h3>
        
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <label htmlFor="font-size" className="text-xs text-gray-600">Font Size:</label>
            <button
              onClick={decreaseFontSize}
              className="text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
              aria-label="Decrease font size"
            >
              A-
            </button>
            <span className="text-xs text-gray-600 min-w-[2rem] text-center">{fontSize}px</span>
            <button
              onClick={increaseFontSize}
              className="text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
              aria-label="Increase font size"
            >
              A+
            </button>
            <button
              onClick={resetFontSize}
              className="text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
              aria-label="Reset font size"
            >
              Reset
            </button>
          </div>

          <button
            onClick={() => {
              setIsHighContrast(!isHighContrast);
              document.documentElement.classList.toggle('high-contrast');
            }}
            className={`text-xs px-3 py-1 rounded w-full ${
              isHighContrast 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
            aria-pressed={isHighContrast}
          >
            {isHighContrast ? 'Disable' : 'Enable'} High Contrast
          </button>

          <button
            onClick={() => {
              setReducedMotion(!reducedMotion);
              document.documentElement.classList.toggle('reduced-motion');
            }}
            className={`text-xs px-3 py-1 rounded w-full ${
              reducedMotion 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
            aria-pressed={reducedMotion}
          >
            {reducedMotion ? 'Enable' : 'Reduce'} Motion
          </button>
        </div>
      </div>

      {children}
    </>
  );
};

export default AccessibilityEnhancer;
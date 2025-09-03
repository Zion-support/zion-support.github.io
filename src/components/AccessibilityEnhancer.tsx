import React, { useState, useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);

  useEffect(() => {
    // Check for user's motion preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    // Listen for changes in motion preferences
    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Apply accessibility settings to document
    document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
    
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    if (reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    if (focusVisible) {
      document.documentElement.classList.add('focus-visible');
    } else {
      document.documentElement.classList.remove('focus-visible');
    }
  }, [fontSize, highContrast, reducedMotion, focusVisible]);

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 2, 24));
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 2, 12));
  };

  const resetFontSize = () => {
    setFontSize(16);
  };

  return (
    <>
      {/* Accessibility Controls */}
      <div className="fixed top-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4 border">
        <h3 className="text-sm font-semibold mb-3 text-gray-800">Accessibility</h3>
        
        {/* Font Size Controls */}
        <div className="mb-3">
          <label className="block text-xs text-gray-600 mb-1">Font Size</label>
          <div className="flex items-center space-x-2">
            <button
              onClick={decreaseFontSize}
              className="px-2 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded"
              aria-label="Decrease font size"
            >
              A-
            </button>
            <span className="text-xs text-gray-600 min-w-[2rem] text-center">{fontSize}px</span>
            <button
              onClick={increaseFontSize}
              className="px-2 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded"
              aria-label="Increase font size"
            >
              A+
            </button>
            <button
              onClick={resetFontSize}
              className="px-2 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded"
              aria-label="Reset font size"
            >
              Reset
            </button>
          </div>
        </div>

        {/* High Contrast Toggle */}
        <div className="mb-3">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={highContrast}
              onChange={(e) => setHighContrast(e.target.checked)}
              className="rounded"
            />
            <span className="text-xs text-gray-600">High Contrast</span>
          </label>
        </div>

        {/* Focus Visible Toggle */}
        <div className="mb-3">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={focusVisible}
              onChange={(e) => setFocusVisible(e.target.checked)}
              className="rounded"
            />
            <span className="text-xs text-gray-600">Enhanced Focus</span>
          </label>
        </div>

        {/* Skip to Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Skip to main content
        </a>
      </div>

      {/* Screen Reader Announcements */}
      <div
        id="sr-announcements"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />

      {/* Main Content */}
      <div id="main-content">
        {children}
      </div>

      {/* Accessibility Styles */}
      <style jsx global>{`
        :root {
          --font-size: ${fontSize}px;
        }

        .high-contrast {
          filter: contrast(150%) brightness(110%);
        }

        .high-contrast * {
          background-color: white !important;
          color: black !important;
          border-color: black !important;
        }

        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        .focus-visible *:focus {
          outline: 3px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }

        /* Enhanced focus styles */
        .focus-visible button:focus,
        .focus-visible a:focus,
        .focus-visible input:focus,
        .focus-visible textarea:focus,
        .focus-visible select:focus {
          outline: 3px solid #3b82f6 !important;
          outline-offset: 2px !important;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3) !important;
        }

        /* Screen reader only content */
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

        .sr-only:focus {
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

export default AccessibilityEnhancer;
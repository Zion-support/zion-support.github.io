'use client';

import React, { useEffect, useState } from 'react';

const AccessibilityEnhancements: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user's motion preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    // Listen for changes in motion preferences
    const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Apply accessibility settings to document
    const root = document.documentElement;
    
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (fontSize === 'large') {
      root.classList.add('large-text');
    } else if (fontSize === 'extra-large') {
      root.classList.add('extra-large-text');
    } else {
      root.classList.remove('large-text', 'extra-large-text');
    }

    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
  }, [isHighContrast, fontSize, isReducedMotion]);

  // Skip to main content functionality
  const skipToMain = () => {
    const main = document.querySelector('main');
    if (main) {
      main.focus();
      main.scrollIntoView();
    }
  };

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
        onClick={(e) => {
          e.preventDefault();
          skipToMain();
        }}
      >
        Skip to main content
      </a>

      {/* Accessibility controls */}
      <div className="fixed bottom-4 right-4 z-40">
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 space-y-3">
          <h3 className="text-sm font-semibold text-gray-900">Accessibility Options</h3>
          
          {/* High contrast toggle */}
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isHighContrast}
              onChange={(e) => setIsHighContrast(e.target.checked)}
              className="rounded"
            />
            <span className="text-sm text-gray-700">High contrast</span>
          </label>

          {/* Font size options */}
          <div className="space-y-1">
            <label className="text-sm text-gray-700">Font size:</label>
            <select
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              className="w-full text-sm border border-gray-300 rounded px-2 py-1"
            >
              <option value="normal">Normal</option>
              <option value="large">Large</option>
              <option value="extra-large">Extra Large</option>
            </select>
          </div>

          {/* Reset button */}
          <button
            onClick={() => {
              setIsHighContrast(false);
              setFontSize('normal');
            }}
            className="w-full text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded"
          >
            Reset
          </button>
        </div>
      </div>

      <style jsx global>{`
        /* High contrast mode */
        .high-contrast {
          --tw-bg-opacity: 1;
          --tw-text-opacity: 1;
        }
        
        .high-contrast * {
          background-color: white !important;
          color: black !important;
          border-color: black !important;
        }
        
        .high-contrast a {
          color: blue !important;
          text-decoration: underline !important;
        }
        
        .high-contrast button {
          background-color: black !important;
          color: white !important;
          border: 2px solid black !important;
        }

        /* Large text mode */
        .large-text {
          font-size: 1.125rem;
        }
        
        .large-text h1 {
          font-size: 3rem;
        }
        
        .large-text h2 {
          font-size: 2.25rem;
        }
        
        .large-text h3 {
          font-size: 1.875rem;
        }

        /* Extra large text mode */
        .extra-large-text {
          font-size: 1.25rem;
        }
        
        .extra-large-text h1 {
          font-size: 3.5rem;
        }
        
        .extra-large-text h2 {
          font-size: 2.75rem;
        }
        
        .extra-large-text h3 {
          font-size: 2.25rem;
        }

        /* Reduced motion mode */
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
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

        /* Focus indicators */
        *:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }

        /* High contrast focus indicators */
        .high-contrast *:focus {
          outline: 3px solid #0000ff;
          outline-offset: 3px;
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancements;
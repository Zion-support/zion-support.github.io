'use client';

import React, { useEffect, useState } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  const applyAccessibilityFeatures = React.useCallback(() => {
    const root = document.documentElement;
    
    // Apply high contrast mode
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply reduced motion
    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Apply font size
    root.style.fontSize = `${fontSize}px`;
  }, [isHighContrast, isReducedMotion, fontSize]);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setIsReducedMotion(prefersReducedMotion);
    setIsHighContrast(prefersHighContrast);

    // Listen for changes in user preferences
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');

    const handleMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    const handleContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches);

    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);

    // Apply accessibility features
    applyAccessibilityFeatures();

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, [applyAccessibilityFeatures]);

  useEffect(() => {
    applyAccessibilityFeatures();
  }, [applyAccessibilityFeatures]);

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 2, 24));
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 2, 12));
  };

  const resetFontSize = () => {
    setFontSize(16);
  };

  const toggleHighContrast = () => {
    setIsHighContrast(prev => !prev);
  };

  const toggleReducedMotion = () => {
    setIsReducedMotion(prev => !prev);
  };

  // Skip to main content functionality
  useEffect(() => {
    const skipLink = document.getElementById('skip-to-main');
    if (skipLink) {
      skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const main = document.getElementById('main-content');
        if (main) {
          main.focus();
          main.scrollIntoView();
        }
      });
    }
  }, []);

  return (
    <>
      {/* Skip to main content link */}
      <a
        id="skip-to-main"
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Accessibility Controls */}
      <div className="fixed bottom-4 left-4 z-50 bg-gray-900 text-white p-4 rounded-lg shadow-lg">
        <h3 className="text-sm font-semibold mb-2">Accessibility</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <button
              onClick={decreaseFontSize}
              className="w-6 h-6 bg-gray-700 hover:bg-gray-600 rounded text-xs"
              aria-label="Decrease font size"
            >
              A-
            </button>
            <span className="text-xs">{fontSize}px</span>
            <button
              onClick={increaseFontSize}
              className="w-6 h-6 bg-gray-700 hover:bg-gray-600 rounded text-xs"
              aria-label="Increase font size"
            >
              A+
            </button>
            <button
              onClick={resetFontSize}
              className="w-6 h-6 bg-gray-700 hover:bg-gray-600 rounded text-xs"
              aria-label="Reset font size"
            >
              A
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleHighContrast}
              className={`px-2 py-1 text-xs rounded ${
                isHighContrast ? 'bg-cyan-600' : 'bg-gray-700 hover:bg-gray-600'
              }`}
              aria-label="Toggle high contrast"
            >
              High Contrast
            </button>
            <button
              onClick={toggleReducedMotion}
              className={`px-2 py-1 text-xs rounded ${
                isReducedMotion ? 'bg-cyan-600' : 'bg-gray-700 hover:bg-gray-600'
              }`}
              aria-label="Toggle reduced motion"
            >
              Reduced Motion
            </button>
          </div>
        </div>
      </div>

      {/* CSS for accessibility features */}
      <style jsx global>{`
        .high-contrast {
          --tw-bg-opacity: 1;
          --tw-text-opacity: 1;
        }
        
        .high-contrast .bg-gray-900 {
          background-color: #000000 !important;
        }
        
        .high-contrast .text-white {
          color: #ffffff !important;
        }
        
        .high-contrast .text-gray-300 {
          color: #ffffff !important;
        }
        
        .high-contrast .border-gray-700 {
          border-color: #ffffff !important;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .reduced-motion .animate-pulse {
          animation: none !important;
        }
        
        .reduced-motion .animate-spin {
          animation: none !important;
        }
        
        .reduced-motion .animate-bounce {
          animation: none !important;
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
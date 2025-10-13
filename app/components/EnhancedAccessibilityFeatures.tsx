import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilityFeaturesProps {
  children: React.ReactNode;
}

const EnhancedAccessibilityFeatures: React.FC<AccessibilityFeaturesProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [focusVisible, setFocusVisible] = useState(false);

  // Check for user preferences
  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(highContrastQuery.matches);

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };

    highContrastQuery.addEventListener('change', handleContrastChange);

    // Load saved preferences
    const savedFontSize = localStorage.getItem('accessibility-font-size');
    if (savedFontSize) {
      setFontSize(parseInt(savedFontSize, 10));
    }

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      highContrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  // Apply accessibility styles
  useEffect(() => {
    const root = document.documentElement;
    
    // Apply font size
    root.style.setProperty('--accessibility-font-size', `${fontSize}px`);
    
    // Apply high contrast
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

    // Apply focus visible
    if (focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  }, [isHighContrast, isReducedMotion, fontSize, focusVisible]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Skip to main content
    if (event.key === 'Tab' && event.shiftKey && event.altKey) {
      event.preventDefault();
      const main = document.getElementById('main-content');
      if (main) {
        main.focus();
        main.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Toggle focus visible
    if (event.key === 'Tab') {
      setFocusVisible(true);
    }
  }, []);

  // Handle mouse events
  const handleMouseDown = useCallback(() => {
    setFocusVisible(false);
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [handleKeyDown, handleMouseDown]);

  // Font size controls
  const increaseFontSize = useCallback(() => {
    const newSize = Math.min(fontSize + 2, 24);
    setFontSize(newSize);
    localStorage.setItem('accessibility-font-size', newSize.toString());
  }, [fontSize]);

  const decreaseFontSize = useCallback(() => {
    const newSize = Math.max(fontSize - 2, 12);
    setFontSize(newSize);
    localStorage.setItem('accessibility-font-size', newSize.toString());
  }, [fontSize]);

  const resetFontSize = useCallback(() => {
    setFontSize(16);
    localStorage.setItem('accessibility-font-size', '16');
  }, []);

  return (
    <>
      {children}
      
      {/* Accessibility Controls */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-black/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-3 text-white text-sm">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-cyan-400 font-semibold">A</span>
            <span>Accessibility</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <button
                onClick={decreaseFontSize}
                className="w-6 h-6 bg-gray-700 hover:bg-gray-600 rounded text-xs"
                aria-label="Decrease font size"
              >
                A-
              </button>
              <span className="text-xs w-8 text-center">{fontSize}px</span>
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
                ↺
              </button>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsHighContrast(!isHighContrast)}
                className={`px-2 py-1 rounded text-xs ${
                  isHighContrast ? 'bg-cyan-600' : 'bg-gray-700 hover:bg-gray-600'
                }`}
                aria-label="Toggle high contrast"
              >
                HC
              </button>
              <button
                onClick={() => setIsReducedMotion(!isReducedMotion)}
                className={`px-2 py-1 rounded text-xs ${
                  isReducedMotion ? 'bg-cyan-600' : 'bg-gray-700 hover:bg-gray-600'
                }`}
                aria-label="Toggle reduced motion"
              >
                RM
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Skip Links */}
      <div className="sr-only focus-within:not-sr-only">
        <a
          href="#main-content"
          className="absolute top-4 left-4 bg-cyan-600 text-white px-4 py-2 rounded z-50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          Skip to main content
        </a>
        <a
          href="#navigation"
          className="absolute top-16 left-4 bg-cyan-600 text-white px-4 py-2 rounded z-50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          Skip to navigation
        </a>
      </div>

      {/* Screen reader announcements */}
      <div
        id="announcements"
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      />
    </>
  );
};

export default EnhancedAccessibilityFeatures;
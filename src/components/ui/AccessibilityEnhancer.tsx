import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');

    setIsReducedMotion(prefersReducedMotion.matches);
    setIsHighContrast(prefersHighContrast.matches);

    // Listen for changes
    const handleMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    const handleContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches);

    prefersReducedMotion.addEventListener('change', handleMotionChange);
    prefersHighContrast.addEventListener('change', handleContrastChange);

    return () => {
      prefersReducedMotion.removeEventListener('change', handleMotionChange);
      prefersHighContrast.removeEventListener('change', handleContrastChange);
    };
  }, []);

  useEffect(() => {
    // Apply accessibility styles
    const root = document.documentElement;
    
    if (isHighContrast) {
      root.style.setProperty('--accent-color', '#ffff00');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--background-color', '#000000');
    } else {
      root.style.removeProperty('--accent-color');
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--background-color');
    }

    if (isReducedMotion) {
      root.style.setProperty('--transition-duration', '0.01ms');
      root.style.setProperty('--animation-duration', '0.01ms');
    } else {
      root.style.removeProperty('--transition-duration');
      root.style.removeProperty('--animation-duration');
    }

    // Apply font size
    root.style.fontSize = `${fontSize}px`;
  }, [isHighContrast, isReducedMotion, fontSize]);

  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 2, 24));
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 2, 12));
  const resetFontSize = () => setFontSize(16);

  return (
    <>
      {/* Accessibility Controls */}
      <div className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Accessibility</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <button
              onClick={decreaseFontSize}
              className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded text-gray-700 text-sm font-bold transition-colors"
              aria-label="Decrease font size"
            >
              A-
            </button>
            <button
              onClick={resetFontSize}
              className="w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded text-white text-sm font-bold transition-colors"
              aria-label="Reset font size"
            >
              A
            </button>
            <button
              onClick={increaseFontSize}
              className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded text-gray-700 text-sm font-bold transition-colors"
              aria-label="Increase font size"
            >
              A+
            </button>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="high-contrast"
              checked={isHighContrast}
              onChange={(e) => setIsHighContrast(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="high-contrast" className="text-sm text-gray-700">
              High Contrast
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="reduced-motion"
              checked={isReducedMotion}
              onChange={(e) => setIsReducedMotion(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="reduced-motion" className="text-sm text-gray-700">
              Reduced Motion
            </label>
          </div>
        </div>
      </div>

      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>

      {/* Main content wrapper */}
      <div id="main-content">
        {children}
      </div>

      {/* Focus indicator styles */}
      <style jsx global>{`
        *:focus {
          outline: 2px solid var(--accent-color, #3b82f6);
          outline-offset: 2px;
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
        

      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
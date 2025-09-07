import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

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

    // Load saved font size preference
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
      setFontSize(parseInt(savedFontSize, 10));
    }

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  useEffect(() => {
    // Apply font size to document
    document.documentElement.style.fontSize = `${fontSize}px`;
    localStorage.setItem('fontSize', fontSize.toString());
  }, [fontSize]);

  useEffect(() => {
    // Apply high contrast mode
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  useEffect(() => {
    // Apply reduced motion
    if (isReducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  }, [isReducedMotion]);

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
      {children}
      
      {/* Accessibility Controls */}
      <div className="fixed top-4 left-4 z-50 bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-lg p-3 text-sm">
        <div className="text-blue-400 font-semibold mb-2">Accessibility</div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <button
              onClick={decreaseFontSize}
              className="px-2 py-1 bg-slate-700 hover:bg-slate-600 rounded text-xs"
              aria-label="Decrease font size"
            >
              A-
            </button>
            <span className="text-xs text-slate-300">{fontSize}px</span>
            <button
              onClick={increaseFontSize}
              className="px-2 py-1 bg-slate-700 hover:bg-slate-600 rounded text-xs"
              aria-label="Increase font size"
            >
              A+
            </button>
            <button
              onClick={resetFontSize}
              className="px-2 py-1 bg-slate-700 hover:bg-slate-600 rounded text-xs"
              aria-label="Reset font size"
            >
              Reset
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsHighContrast(!isHighContrast)}
              className={`px-2 py-1 rounded text-xs ${
                isHighContrast 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-700 hover:bg-slate-600 text-slate-300'
              }`}
              aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
            >
              High Contrast
            </button>
          </div>
          
          <div className="text-xs text-slate-400">
            {isReducedMotion && 'Reduced motion enabled'}
          </div>
        </div>
      </div>

      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-1/2 focus:transform focus:-translate-x-1/2 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:font-semibold"
      >
        Skip to main content
      </a>
    </>
  );
};

export default AccessibilityEnhancer;
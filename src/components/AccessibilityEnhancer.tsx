import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(1);

  useEffect(() => {
    // Check for high contrast mode
    const checkHighContrast = () => {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      setIsHighContrast(mediaQuery.matches);
    };

    // Check for reduced motion preference
    const checkReducedMotion = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(mediaQuery.matches);
    };

    // Check for font size preference
    const checkFontSize = () => {
      const savedFontSize = localStorage.getItem('accessibility-font-size');
      if (savedFontSize) {
        setFontSize(parseFloat(savedFontSize));
      }
    };

    // Initial checks
    checkHighContrast();
    checkReducedMotion();
    checkFontSize();

    // Listen for changes
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    highContrastQuery.addEventListener('change', checkHighContrast);
    reducedMotionQuery.addEventListener('change', checkReducedMotion);

    return () => {
      highContrastQuery.removeEventListener('change', checkHighContrast);
      reducedMotionQuery.removeEventListener('change', checkReducedMotion);
    };
  }, []);

  useEffect(() => {
    // Apply accessibility styles
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
    root.style.fontSize = `${fontSize}rem`;
  }, [isHighContrast, isReducedMotion, fontSize]);

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 0.1, 1.5);
    setFontSize(newSize);
    localStorage.setItem('accessibility-font-size', newSize.toString());
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 0.1, 0.8);
    setFontSize(newSize);
    localStorage.setItem('accessibility-font-size', newSize.toString());
  };

  const resetFontSize = () => {
    setFontSize(1);
    localStorage.removeItem('accessibility-font-size');
  };

  return (
    <>
      {children}
      
      {/* Accessibility Controls */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Accessibility</h3>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <label className="text-xs text-gray-600">Font Size:</label>
              <div className="flex items-center space-x-1">
                <button
                  onClick={decreaseFontSize}
                  className="w-6 h-6 flex items-center justify-center text-xs bg-gray-100 hover:bg-gray-200 rounded"
                  aria-label="Decrease font size"
                >
                  A-
                </button>
                <span className="text-xs text-gray-600 w-8 text-center">
                  {Math.round(fontSize * 100)}%
                </span>
                <button
                  onClick={increaseFontSize}
                  className="w-6 h-6 flex items-center justify-center text-xs bg-gray-100 hover:bg-gray-200 rounded"
                  aria-label="Increase font size"
                >
                  A+
                </button>
                <button
                  onClick={resetFontSize}
                  className="w-6 h-6 flex items-center justify-center text-xs bg-gray-100 hover:bg-gray-200 rounded"
                  aria-label="Reset font size"
                >
                  A
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="high-contrast"
                checked={isHighContrast}
                onChange={(e) => {
                  setIsHighContrast(e.target.checked);
                  if (e.target.checked) {
                    document.documentElement.classList.add('high-contrast');
                  } else {
                    document.documentElement.classList.remove('high-contrast');
                  }
                }}
                className="rounded"
              />
              <label htmlFor="high-contrast" className="text-xs text-gray-600">
                High Contrast
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="reduced-motion"
                checked={isReducedMotion}
                onChange={(e) => {
                  setIsReducedMotion(e.target.checked);
                  if (e.target.checked) {
                    document.documentElement.classList.add('reduced-motion');
                  } else {
                    document.documentElement.classList.remove('reduced-motion');
                  }
                }}
                className="rounded"
              />
              <label htmlFor="reduced-motion" className="text-xs text-gray-600">
                Reduced Motion
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
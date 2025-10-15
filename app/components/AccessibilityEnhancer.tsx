import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Check for high contrast mode
    const checkHighContrast = () => {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      setIsHighContrast(mediaQuery.matches);
      
      mediaQuery.addEventListener('change', (e) => {
        setIsHighContrast(e.matches);
      });
    };

    // Check for reduced motion preference
    const checkReducedMotion = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(mediaQuery.matches);
      
      mediaQuery.addEventListener('change', (e) => {
        setIsReducedMotion(e.matches);
      });
    };

    // Check for font size preference
    const checkFontSize = () => {
      const savedFontSize = localStorage.getItem('accessibility-font-size');
      if (savedFontSize) {
        setFontSize(parseInt(savedFontSize, 10));
      }
    };

    checkHighContrast();
    checkReducedMotion();
    checkFontSize();

    // Apply accessibility settings
    const applyAccessibilitySettings = () => {
      const root = document.documentElement;
      
      // High contrast mode
      if (isHighContrast) {
        root.classList.add('high-contrast');
      } else {
        root.classList.remove('high-contrast');
      }
      
      // Reduced motion
      if (isReducedMotion) {
        root.classList.add('reduced-motion');
      } else {
        root.classList.remove('reduced-motion');
      }
      
      // Font size
      root.style.fontSize = `${fontSize}px`;
    };

    applyAccessibilitySettings();

    // Keyboard navigation enhancement
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && document.activeElement === document.body) {
        const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
        if (skipLink) {
          skipLink.focus();
          e.preventDefault();
        }
      }
      
      // Escape key to close modals/dropdowns
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isHighContrast, isReducedMotion, fontSize]);

  // Font size controls
  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 2, 24);
    setFontSize(newSize);
    localStorage.setItem('accessibility-font-size', newSize.toString());
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 2, 12);
    setFontSize(newSize);
    localStorage.setItem('accessibility-font-size', newSize.toString());
  };

  const resetFontSize = () => {
    setFontSize(16);
    localStorage.removeItem('accessibility-font-size');
  };

  return (
    <>
      {children}
      
      {/* Accessibility Controls */}
      <div className="fixed bottom-4 right-4 z-50 bg-slate-800 rounded-lg p-4 shadow-lg border border-cyan-500/20">
        <div className="flex flex-col space-y-2">
          <h3 className="text-sm font-semibold text-white mb-2">Accessibility</h3>
          
          {/* Font Size Controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={decreaseFontSize}
              className="w-8 h-8 bg-cyan-600 hover:bg-cyan-700 text-white rounded text-sm font-bold"
              aria-label="Decrease font size"
            >
              A-
            </button>
            <span className="text-xs text-gray-300 min-w-[2rem] text-center">
              {fontSize}px
            </span>
            <button
              onClick={increaseFontSize}
              className="w-8 h-8 bg-cyan-600 hover:bg-cyan-700 text-white rounded text-sm font-bold"
              aria-label="Increase font size"
            >
              A+
            </button>
            <button
              onClick={resetFontSize}
              className="w-8 h-8 bg-gray-600 hover:bg-gray-700 text-white rounded text-xs"
              aria-label="Reset font size"
            >
              ↺
            </button>
          </div>
          
          {/* High Contrast Toggle */}
          <button
            onClick={() => {
              const newState = !isHighContrast;
              setIsHighContrast(newState);
              if (newState) {
                document.documentElement.classList.add('high-contrast');
              } else {
                document.documentElement.classList.remove('high-contrast');
              }
            }}
            className={`px-3 py-1 text-xs rounded ${
              isHighContrast 
                ? 'bg-yellow-600 text-black' 
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
            aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
          >
            {isHighContrast ? 'High Contrast ON' : 'High Contrast'}
          </button>
          
          {/* Reduced Motion Toggle */}
          <button
            onClick={() => {
              const newState = !isReducedMotion;
              setIsReducedMotion(newState);
              if (newState) {
                document.documentElement.classList.add('reduced-motion');
              } else {
                document.documentElement.classList.remove('reduced-motion');
              }
            }}
            className={`px-3 py-1 text-xs rounded ${
              isReducedMotion 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
            aria-label={`${isReducedMotion ? 'Disable' : 'Enable'} reduced motion`}
          >
            {isReducedMotion ? 'Motion OFF' : 'Motion ON'}
          </button>
        </div>
      </div>
    </>
  );
};

export default AccessibilityEnhancer;
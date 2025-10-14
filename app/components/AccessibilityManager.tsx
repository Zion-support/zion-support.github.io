import React, { useEffect, useState } from 'react';

interface AccessibilityManagerProps {
  children: React.ReactNode;
}

const AccessibilityManager: React.FC<AccessibilityManagerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);

    // Check for high contrast preference
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    setIsHighContrast(prefersHighContrast);

    // Apply initial styles
    applyAccessibilityStyles();

    // Listen for changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');
    
    const handleMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    const handleContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches);
    
    mediaQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  useEffect(() => {
    applyAccessibilityStyles();
  }, [isHighContrast, fontSize, isReducedMotion]);

  const applyAccessibilityStyles = () => {
    const root = document.documentElement;
    
    // Apply high contrast mode
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply font size
    root.classList.remove('font-small', 'font-normal', 'font-large', 'font-xl');
    root.classList.add(`font-${fontSize}`);

    // Apply reduced motion
    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
  };

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
  };

  const increaseFontSize = () => {
    const sizes = ['small', 'normal', 'large', 'xl'];
    const currentIndex = sizes.indexOf(fontSize);
    if (currentIndex < sizes.length - 1) {
      setFontSize(sizes[currentIndex + 1]);
    }
  };

  const decreaseFontSize = () => {
    const sizes = ['small', 'normal', 'large', 'xl'];
    const currentIndex = sizes.indexOf(fontSize);
    if (currentIndex > 0) {
      setFontSize(sizes[currentIndex - 1]);
    }
  };

  const resetAccessibility = () => {
    setIsHighContrast(false);
    setFontSize('normal');
  };

  return (
    <>
      {/* Accessibility Controls */}
      <div className="accessibility-controls fixed bottom-4 right-4 z-50 bg-slate-800 rounded-lg p-4 shadow-lg border border-white/10">
        <h3 className="text-white text-sm font-semibold mb-3">Accessibility</h3>
        <div className="space-y-2">
          <button
            onClick={toggleHighContrast}
            className={`w-full px-3 py-2 text-xs rounded ${
              isHighContrast 
                ? 'bg-cyan-400 text-slate-900' 
                : 'bg-slate-700 text-white hover:bg-slate-600'
            }`}
            aria-label="Toggle high contrast mode"
          >
            High Contrast
          </button>
          
          <div className="flex gap-1">
            <button
              onClick={decreaseFontSize}
              className="px-2 py-1 text-xs bg-slate-700 text-white rounded hover:bg-slate-600"
              aria-label="Decrease font size"
            >
              A-
            </button>
            <button
              onClick={increaseFontSize}
              className="px-2 py-1 text-xs bg-slate-700 text-white rounded hover:bg-slate-600"
              aria-label="Increase font size"
            >
              A+
            </button>
          </div>
          
          <button
            onClick={resetAccessibility}
            className="w-full px-3 py-2 text-xs bg-slate-700 text-white rounded hover:bg-slate-600"
            aria-label="Reset accessibility settings"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-400 text-slate-900 px-4 py-2 rounded font-semibold z-50"
      >
        Skip to main content
      </a>

      {children}

      {/* Global CSS for accessibility */}
      <style jsx global>{`
        .high-contrast {
          --tw-bg-opacity: 1;
          --tw-text-opacity: 1;
        }
        
        .high-contrast .bg-slate-900 {
          background-color: #000000 !important;
        }
        
        .high-contrast .text-white {
          color: #ffffff !important;
        }
        
        .high-contrast .text-gray-300 {
          color: #ffffff !important;
        }
        
        .high-contrast .border-white\/10 {
          border-color: #ffffff !important;
        }
        
        .font-small {
          font-size: 0.875rem;
        }
        
        .font-normal {
          font-size: 1rem;
        }
        
        .font-large {
          font-size: 1.125rem;
        }
        
        .font-xl {
          font-size: 1.25rem;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #00ffff;
          color: #000;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          z-index: 1000;
        }
        
        .skip-link:focus {
          top: 6px;
        }
        
        /* Focus indicators */
        *:focus {
          outline: 2px solid #00ffff;
          outline-offset: 2px;
        }
        
        /* High contrast focus */
        .high-contrast *:focus {
          outline: 3px solid #ffffff;
          outline-offset: 3px;
        }
      `}</style>
    </>
  );
};

export default AccessibilityManager;
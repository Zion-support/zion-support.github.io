import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children?: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Check for high contrast preference
    const checkHighContrast = () => {
      if (window.matchMedia) {
        const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
        setIsHighContrast(highContrastQuery.matches);
        
        const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setIsReducedMotion(reducedMotionQuery.matches);
      }
    };

    // Check for reduced motion preference
    const checkReducedMotion = () => {
      if (window.matchMedia) {
        const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setIsReducedMotion(reducedMotionQuery.matches);
      }
    };

    // Initial check
    checkHighContrast();
    checkReducedMotion();

    // Listen for changes
    if (window.matchMedia) {
      const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
      const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

      highContrastQuery.addEventListener('change', checkHighContrast);
      reducedMotionQuery.addEventListener('change', checkReducedMotion);

      return () => {
        highContrastQuery.removeEventListener('change', checkHighContrast);
        reducedMotionQuery.removeEventListener('change', checkReducedMotion);
      };
    }
  }, []);

  useEffect(() => {
    // Apply accessibility classes to document
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

    // Set font size
    root.style.fontSize = `${fontSize}px`;
  }, [isHighContrast, isReducedMotion, fontSize]);

  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Add visual focus indicators when using keyboard
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-user');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-user');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  // Skip to content functionality
  const skipToContent = () => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView();
    }
  };

  return (
    <>
      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        onClick={(e) => {
          e.preventDefault();
          skipToContent();
        }}
      >
        Skip to main content
      </a>

      {/* Accessibility controls */}
      <div className="sr-only focus-within:not-sr-only focus-within:absolute focus-within:top-4 focus-within:right-4 focus-within:z-50">
        <div className="bg-white p-4 rounded-lg shadow-lg border">
          <h3 className="text-lg font-semibold mb-2">Accessibility Options</h3>
          
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isHighContrast}
                onChange={(e) => setIsHighContrast(e.target.checked)}
                className="rounded"
              />
              <span>High Contrast</span>
            </label>
            
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isReducedMotion}
                onChange={(e) => setIsReducedMotion(e.target.checked)}
                className="rounded"
              />
              <span>Reduce Motion</span>
            </label>
            
            <div className="flex items-center space-x-2">
              <label htmlFor="font-size">Font Size:</label>
              <input
                id="font-size"
                type="range"
                min="12"
                max="24"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="flex-1"
              />
              <span className="text-sm text-gray-600">{fontSize}px</span>
            </div>
          </div>
        </div>
      </div>

      {children}
    </>
  );
};

export default AccessibilityEnhancer;
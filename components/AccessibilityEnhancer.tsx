import React, { useEffect, useState } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);

    // Apply reduced motion styles if needed
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      document.documentElement.style.setProperty('--animation-iteration-count', '1');
    }

    // Add skip link functionality
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add keyboard navigation enhancements
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast');
  };

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 2, 24);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`;
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 2, 12);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`;
  };

  const resetFontSize = () => {
    setFontSize(16);
    document.documentElement.style.fontSize = '16px';
  };

  return (
    <>
      {/* Accessibility Controls */}
      <div className="fixed bottom-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4 border">
        <h3 className="text-sm font-semibold mb-2">Accessibility</h3>
        <div className="space-y-2">
          <button
            onClick={toggleHighContrast}
            className={`block w-full text-left px-3 py-1 text-sm rounded ${
              isHighContrast ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'
            }`}
            aria-label="Toggle high contrast mode"
          >
            High Contrast
          </button>
          
          <div className="flex items-center space-x-1">
            <button
              onClick={decreaseFontSize}
              className="px-2 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded"
              aria-label="Decrease font size"
            >
              A-
            </button>
            <button
              onClick={resetFontSize}
              className="px-2 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded"
              aria-label="Reset font size"
            >
              A
            </button>
            <button
              onClick={increaseFontSize}
              className="px-2 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded"
              aria-label="Increase font size"
            >
              A+
            </button>
          </div>
        </div>
      </div>

      {/* Screen Reader Only Content */}
      <div className="sr-only">
        <h1>Zion Tech Group - Technology Solutions Provider</h1>
        <p>Skip to main content to navigate the website</p>
      </div>

      {/* Focus Indicators */}
      <style jsx global>{`
        .keyboard-navigation *:focus {
          outline: 2px solid #0ea5e9 !important;
          outline-offset: 2px !important;
        }
        
        .high-contrast {
          filter: contrast(150%) brightness(120%);
        }
        
        .high-contrast * {
          border-color: #000 !important;
        }
        
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
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
        
        .focus\\:not-sr-only:focus {
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
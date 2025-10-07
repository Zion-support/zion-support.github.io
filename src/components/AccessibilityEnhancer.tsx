import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');

  useEffect(() => {
    // Check for saved accessibility preferences
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedFontSize = localStorage.getItem('fontSize') || 'normal';
    
    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);
    
    // Apply initial styles
    applyAccessibilityStyles(savedHighContrast, savedFontSize);
  }, []);

  const applyAccessibilityStyles = (highContrast: boolean, fontSize: string) => {
    const root = document.documentElement;
    
<<<<<<< HEAD
=======
    // High contrast mode
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-445b
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
<<<<<<< HEAD
    
    // Apply font size
    root.style.setProperty('--font-size', fontSize === 'large' ? '1.2em' : '1em');
  };

  const toggleHighContrast = () => {
    const newHighContrast = !isHighContrast;
    setIsHighContrast(newHighContrast);
    localStorage.setItem('highContrast', newHighContrast.toString());
    applyAccessibilityStyles(newHighContrast, fontSize);
=======

    // Font size
    root.classList.remove('font-small', 'font-normal', 'font-large');
    root.classList.add(`font-${fontSize}`);

    // Reduced motion
    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
  };

  const addSkipLinks = () => {
    const existingSkipLink = document.querySelector('.skip-link');
    if (!existingSkipLink) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      skipLink.textContent = 'Skip to main content';
      document.body.insertBefore(skipLink, document.body.firstChild);
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-445b
  };

  const changeFontSize = (newSize: string) => {
    setFontSize(newSize);
    localStorage.setItem('fontSize', newSize);
    applyAccessibilityStyles(isHighContrast, newSize);
  };

<<<<<<< HEAD
  return (
    <div className="accessibility-enhancer">
      <div className="accessibility-controls fixed top-4 right-4 z-50 bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-sm font-semibold mb-2">Accessibility</h3>
        <div className="space-y-2">
          <button
            onClick={toggleHighContrast}
            className={`px-3 py-1 text-xs rounded ${
              isHighContrast ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            High Contrast
          </button>
          <div className="flex space-x-1">
            <button
              onClick={() => changeFontSize('small')}
              className={`px-2 py-1 text-xs rounded ${
                fontSize === 'small' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              A-
            </button>
            <button
              onClick={() => changeFontSize('normal')}
              className={`px-2 py-1 text-xs rounded ${
                fontSize === 'normal' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              A
            </button>
            <button
              onClick={() => changeFontSize('large')}
              className={`px-2 py-1 text-xs rounded ${
                fontSize === 'large' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              A+
            </button>
          </div>
        </div>
      </div>
      {children}
    </div>
=======
  const toggleHighContrast = () => {
    const newHighContrast = !isHighContrast;
    setIsHighContrast(newHighContrast);
    localStorage.setItem('highContrast', newHighContrast.toString());
    applyAccessibilityStyles(newHighContrast, fontSize, reducedMotion);
  };

  const addAriaLandmarks = () => {
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }
  };

  const enhanceFocusManagement = () => {
    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      .focus-visible:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);
  };

  return (
    <>
      {children}
      <div className="accessibility-controls fixed bottom-4 left-4 z-50">
        <div className="bg-white shadow-lg rounded-lg p-4 space-y-2">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Accessibility</h3>
          
          <button
            onClick={toggleHighContrast}
            className={`w-full px-3 py-2 text-xs rounded ${
              isHighContrast 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {isHighContrast ? 'High Contrast On' : 'High Contrast Off'}
          </button>
          
          <div className="space-y-1">
            <label className="text-xs text-gray-600">Font Size:</label>
            <div className="flex space-x-1">
              {(['small', 'normal', 'large'] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => changeFontSize(size)}
                  className={`px-2 py-1 text-xs rounded ${
                    fontSize === size 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-445b
  );
};

export default AccessibilityEnhancer;

import React, { type ReactNode, useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState<'small' | 'normal' | 'large'>('normal');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);

    // Load saved preferences
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedFontSize = (localStorage.getItem('fontSize') as 'small' | 'normal' | 'large') || 'normal';
    
    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);

    // Apply initial styles
    applyAccessibilityStyles(savedHighContrast, savedFontSize, prefersReducedMotion);

    // Add accessibility enhancements
    addSkipLinks();
    addAriaLandmarks();
    enhanceFocusManagement();
  }, []);

  const applyAccessibilityStyles = (
    highContrast: boolean,
    fontSize: 'small' | 'normal' | 'large',
    reducedMotion: boolean
  ) => {
    const root = document.documentElement;
    
<<<<<<< HEAD
    // Apply high contrast
    if (highContrast) {
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--bg-color', '#000000');
      root.style.setProperty('--border-color', '#ffffff');
    } else {
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
      root.style.removeProperty('--border-color');
    }

    // Apply font size
    const fontSizeMap = {
      small: '14px',
      normal: '16px',
      large: '18px'
    };
    root.style.fontSize = fontSizeMap[fontSize];

    // Apply reduced motion
    if (reducedMotion) {
      root.style.setProperty('--animation-duration', '0s');
      root.style.setProperty('--transition-duration', '0s');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
=======
    // High contrast mode
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Font size
    root.classList.remove('font-small', 'font-normal', 'font-large');
    root.classList.add(`font-${fontSize}`);

    // Reduced motion
    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
>>>>>>> 3fe26dbde3803cbeabe26c93d4274ce0fe39474c
    }
  };

  const addSkipLinks = () => {
<<<<<<< HEAD
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);
  };

  const addAriaLandmarks = () => {
    const main = document.querySelector('main');
    if (main && !main.getAttribute('id')) {
      main.id = 'main-content';
      main.setAttribute('role', 'main');
    }

    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('aria-label')) {
      nav.setAttribute('aria-label', 'Main navigation');
    }
  };

  const enhanceFocusManagement = () => {
    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      .focus-visible {
        outline: 2px solid #3b82f6;
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
    `;
    document.head.appendChild(style);
  };

  const toggleHighContrast = () => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    localStorage.setItem('highContrast', newValue.toString());
    applyAccessibilityStyles(newValue, fontSize, reducedMotion);
=======
    const existingSkipLink = document.querySelector('.skip-link');
    if (!existingSkipLink) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      skipLink.textContent = 'Skip to main content';
      document.body.insertBefore(skipLink, document.body.firstChild);
    }
>>>>>>> 3fe26dbde3803cbeabe26c93d4274ce0fe39474c
  };

  const changeFontSize = (newSize: 'small' | 'normal' | 'large') => {
    setFontSize(newSize);
    localStorage.setItem('fontSize', newSize);
    applyAccessibilityStyles(isHighContrast, newSize, reducedMotion);
  };

<<<<<<< HEAD
  return (
    <div className={`accessibility-enhanced ${isHighContrast ? 'high-contrast' : ''} ${fontSize} ${reducedMotion ? 'reduced-motion' : ''}`}>
      {/* Accessibility Controls */}
      <div className="accessibility-controls fixed top-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4 space-y-2">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Accessibility</h3>
        
        <button
          onClick={toggleHighContrast}
          className={`w-full px-3 py-1 text-xs rounded ${
            isHighContrast 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
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
                aria-label={`Set font size to ${size}`}
              >
                {size.charAt(0).toUpperCase() + size.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
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
  );
};

export default AccessibilityEnhancer;
>>>>>>> 3fe26dbde3803cbeabe26c93d4274ce0fe39474c

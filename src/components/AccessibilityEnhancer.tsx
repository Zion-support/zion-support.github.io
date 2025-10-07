import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for saved accessibility preferences
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedFontSize = localStorage.getItem('fontSize') || 'normal';
    const savedReducedMotion = localStorage.getItem('reducedMotion') === 'true';
    
    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);
    setReducedMotion(savedReducedMotion);
    
    // Apply initial styles
    applyAccessibilityStyles(savedHighContrast, savedFontSize, savedReducedMotion);
    
    // Add accessibility enhancements
    addSkipLinks();
    addAriaLandmarks();
    enhanceFocusManagement();
  }, []);

  const applyAccessibilityStyles = (highContrast: boolean, fontSize: string, reducedMotion: boolean) => {
    const root = document.documentElement;
    
    // Apply high contrast
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
    }
  };

  const addSkipLinks = () => {
    const existingSkipLink = document.querySelector('.skip-link');
    if (!existingSkipLink) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);

  const addSkipLinks = () => {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);
  };

  const addAriaLandmarks = () => {
    const main = document.querySelector('main');
    if (main && !main.id) {
      main.id = 'main-content';
    }
  };

  const enhanceFocusManagement = () => {
    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);
  };

  const toggleHighContrast = () => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    localStorage.setItem('highContrast', newValue.toString());
    applyAccessibilityStyles(newValue, fontSize, reducedMotion);
  };

  const changeFontSize = (newSize: 'small' | 'normal' | 'large') => {
    setFontSize(newSize);
    localStorage.setItem('fontSize', newSize);
    applyAccessibilityStyles(isHighContrast, newSize, reducedMotion);
  };

  return (
    <div className="accessibility-enhancer">
      {children}
      
      {/* Accessibility Controls */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-white rounded-lg shadow-lg p-4 space-y-3">
          <h3 className="text-sm font-semibold text-gray-700">Accessibility</h3>
          
          {/* High Contrast Toggle */}
          <label className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              checked={isHighContrast}
              onChange={toggleHighContrast}
              className="mr-2"
            />
            <span className="text-sm">High Contrast</span>
          </label>

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

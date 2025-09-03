import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);

    // Apply accessibility settings from localStorage
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedFontSize = localStorage.getItem('fontSize') || 'normal';

    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);
  }, []);

  const applyAccessibilityStyles = (highContrast: boolean, fontSize: string, reducedMotion: boolean) => {
    const root = document.documentElement;

    // High contrast mode
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Font size adjustments
    root.classList.remove('font-small', 'font-normal', 'font-large');
    root.classList.add(`font-${fontSize}`);

    // Reduced motion
    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
  };

  useEffect(() => {
    applyAccessibilityStyles(isHighContrast, fontSize, reducedMotion);
  }, [isHighContrast, fontSize, reducedMotion]);

  const toggleHighContrast = () => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    localStorage.setItem('highContrast', newValue.toString());
  };

  const changeFontSize = (size: string) => {
    setFontSize(size);
    localStorage.setItem('fontSize', size);
  };

  const toggleReducedMotion = () => {
    const newValue = !reducedMotion;
    setReducedMotion(newValue);
  };

  return (
    <div className="accessibility-enhancer">
      {children}
      
      {/* Accessibility Controls */}
      <div className="accessibility-controls fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 z-50">
        <h3 className="text-sm font-semibold mb-2">Accessibility Options</h3>
        
        <div className="space-y-2">
          <button
            onClick={toggleHighContrast}
            className={`block w-full text-left px-3 py-2 rounded text-sm ${
              isHighContrast ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
            }`}
          >
            High Contrast
          </button>
          
          <div className="space-y-1">
            <label className="block text-xs text-gray-600">Font Size:</label>
            <div className="flex space-x-1">
              {['small', 'normal', 'large'].map((size) => (
                <button
                  key={size}
                  onClick={() => changeFontSize(size)}
                  className={`px-2 py-1 rounded text-xs ${
                    fontSize === size ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          <button
            onClick={toggleReducedMotion}
            className={`block w-full text-left px-3 py-2 rounded text-sm ${
              reducedMotion ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
            }`}
          >
            Reduce Motion
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;
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

    // Apply initial styles
    applyAccessibilityStyles(savedHighContrast, savedFontSize, prefersReducedMotion);
  }, []);

  const applyAccessibilityStyles = (highContrast: boolean, fontSize: string, reducedMotion: boolean) => {
    const root = document.documentElement;
    
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    root.classList.remove('font-small', 'font-normal', 'font-large');
    root.classList.add(`font-${fontSize}`);

    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
  };

  const toggleHighContrast = () => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    localStorage.setItem('highContrast', newValue.toString());
    applyAccessibilityStyles(newValue, fontSize, reducedMotion);
  };

  const changeFontSize = (size: string) => {
    setFontSize(size);
    localStorage.setItem('fontSize', size);
    applyAccessibilityStyles(isHighContrast, size, reducedMotion);
  };

  return (
    <div className="accessibility-enhanced">
      {/* Accessibility Controls */}
      <div className="accessibility-controls fixed top-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4">
        <h3 className="text-sm font-semibold mb-2">Accessibility</h3>
        <div className="space-y-2">
          <button
            onClick={toggleHighContrast}
            className={`px-3 py-1 text-xs rounded ${
              isHighContrast ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            High Contrast
          </button>
          <div className="flex space-x-1">
            {['small', 'normal', 'large'].map((size) => (
              <button
                key={size}
                onClick={() => changeFontSize(size)}
                className={`px-2 py-1 text-xs rounded ${
                  fontSize === size ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
                }`}
              >
                {size}
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
import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('medium');
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user's motion preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Apply accessibility styles
    const root = document.documentElement;
    
    if (isHighContrast) {
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--bg-color', '#000000');
      root.style.setProperty('--border-color', '#ffffff');
    } else {
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
      root.style.removeProperty('--border-color');
    }

    // Apply font size
    const fontSizes = {
      small: '14px',
      medium: '16px',
      large: '18px',
      xlarge: '20px'
    };
    root.style.fontSize = fontSizes[fontSize as keyof typeof fontSizes];

    // Apply reduced motion
    if (isReducedMotion) {
      root.style.setProperty('--animation-duration', '0s');
      root.style.setProperty('--transition-duration', '0s');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }
  }, [isHighContrast, fontSize, isReducedMotion]);

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
  };

  const changeFontSize = (size: string) => {
    setFontSize(size);
  };

  return (
    <div className="accessibility-enhancer">
      {/* Accessibility Controls */}
      <div className="fixed top-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4 space-y-2">
        <h3 className="text-sm font-semibold mb-2">Accessibility Options</h3>
        
        <button
          onClick={toggleHighContrast}
          className={`px-3 py-1 text-xs rounded ${
            isHighContrast 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          {isHighContrast ? 'High Contrast On' : 'High Contrast Off'}
        </button>

        <div className="space-y-1">
          <label className="text-xs font-medium">Font Size:</label>
          <div className="flex space-x-1">
            {['small', 'medium', 'large', 'xlarge'].map((size) => (
              <button
                key={size}
                onClick={() => changeFontSize(size)}
                className={`px-2 py-1 text-xs rounded ${
                  fontSize === size 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-800'
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
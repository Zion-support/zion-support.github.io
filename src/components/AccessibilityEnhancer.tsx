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
    
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Apply font size
    root.style.setProperty('--font-size', fontSize === 'large' ? '1.2em' : '1em');
  };

  const toggleHighContrast = () => {
    const newHighContrast = !isHighContrast;
    setIsHighContrast(newHighContrast);
    localStorage.setItem('highContrast', newHighContrast.toString());
    applyAccessibilityStyles(newHighContrast, fontSize);
  };

  const changeFontSize = (newSize: string) => {
    setFontSize(newSize);
    localStorage.setItem('fontSize', newSize);
    applyAccessibilityStyles(isHighContrast, newSize);
  };

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
  );
};

export default AccessibilityEnhancer;

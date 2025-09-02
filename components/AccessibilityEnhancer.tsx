import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');

  useEffect(() => {
    // Check for saved accessibility preferences
    const savedContrast = localStorage.getItem('highContrast');
    const savedFontSize = localStorage.getItem('fontSize');
    
    if (savedContrast === 'true') {
      setIsHighContrast(true);
    }
    
    if (savedFontSize) {
      setFontSize(savedFontSize);
    }
  }, []);

  useEffect(() => {
    // Apply accessibility styles
    const root = document.documentElement;
    
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    root.classList.add(`font-size-${fontSize}`);
    
    return () => {
      root.classList.remove('high-contrast', 'font-size-small', 'font-size-normal', 'font-size-large');
    };
  }, [isHighContrast, fontSize]);

  const toggleHighContrast = () => {
    const newContrast = !isHighContrast;
    setIsHighContrast(newContrast);
    localStorage.setItem('highContrast', newContrast.toString());
  };

  const changeFontSize = (size: string) => {
    setFontSize(size);
    localStorage.setItem('fontSize', size);
  };

  return (
    <>
      <div className="accessibility-controls fixed top-4 right-4 z-50 bg-white shadow-lg rounded-lg p-2">
        <button
          onClick={toggleHighContrast}
          className="p-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
          aria-label="Toggle high contrast mode"
        >
          {isHighContrast ? 'Normal Contrast' : 'High Contrast'}
        </button>
        <div className="mt-2">
          <label className="block text-xs text-gray-600 mb-1">Font Size:</label>
          <select
            value={fontSize}
            onChange={(e) => changeFontSize(e.target.value)}
            className="text-xs border rounded px-2 py-1"
          >
            <option value="small">Small</option>
            <option value="normal">Normal</option>
            <option value="large">Large</option>
          </select>
        </div>
      </div>
      {children}
    </>
  );
};

export default AccessibilityEnhancer;
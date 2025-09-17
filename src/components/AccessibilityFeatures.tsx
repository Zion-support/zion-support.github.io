import React, { useEffect, useState } from 'react';

const AccessibilityFeatures: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');

  useEffect(() => {
    // Load saved preferences
    const savedContrast = localStorage.getItem('highContrast');
    const savedFontSize = localStorage.getItem('fontSize');
    
    if (savedContrast === 'true') {
      setIsHighContrast(true);
      document.documentElement.classList.add('high-contrast');
    }
    
    if (savedFontSize) {
      setFontSize(savedFontSize);
      document.documentElement.style.fontSize = savedFontSize === 'large' ? '18px' : '16px';
    }
  }, []);

  const toggleHighContrast = () => {
    const newContrast = !isHighContrast;
    setIsHighContrast(newContrast);
    localStorage.setItem('highContrast', newContrast.toString());
    
    if (newContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };

  const changeFontSize = (size: string) => {
    setFontSize(size);
    localStorage.setItem('fontSize', size);
    document.documentElement.style.fontSize = size === 'large' ? '18px' : '16px';
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white shadow-lg rounded-lg p-4 border">
        <h3 className="text-sm font-semibold mb-3 text-gray-900">Accessibility</h3>
        
        <div className="space-y-3">
          <button
            onClick={toggleHighContrast}
            className={`w-full px-3 py-2 text-xs rounded ${
              isHighContrast 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-label="Toggle high contrast mode"
          >
            {isHighContrast ? 'High Contrast On' : 'High Contrast Off'}
          </button>
          
          <div className="space-y-1">
            <label className="text-xs text-gray-600">Font Size</label>
            <div className="flex space-x-1">
              <button
                onClick={() => changeFontSize('normal')}
                className={`px-2 py-1 text-xs rounded ${
                  fontSize === 'normal' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                A
              </button>
              <button
                onClick={() => changeFontSize('large')}
                className={`px-2 py-1 text-xs rounded ${
                  fontSize === 'large' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                A+
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityFeatures;
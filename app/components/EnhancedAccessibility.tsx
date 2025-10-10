'use client';

import React, { useEffect, useState } from 'react';

const EnhancedAccessibility: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');

  useEffect(() => {
    // Load saved preferences
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedFontSize = localStorage.getItem('fontSize') || 'normal';
    
    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);

    // Apply high contrast mode
    if (savedHighContrast) {
      document.body.classList.add('high-contrast');
    }

    // Apply font size
    document.body.style.fontSize = savedFontSize === 'large' ? '1.2rem' : '1rem';
  }, []);

  const toggleHighContrast = () => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    localStorage.setItem('highContrast', newValue.toString());
    
    if (newValue) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  };

  const changeFontSize = (size: string) => {
    setFontSize(size);
    localStorage.setItem('fontSize', size);
    document.body.style.fontSize = size === 'large' ? '1.2rem' : '1rem';
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-lg p-4 space-y-2">
        <h3 className="text-sm font-semibold text-gray-900">Accessibility</h3>
        <button
          onClick={toggleHighContrast}
          className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
        >
          {isHighContrast ? 'Disable' : 'Enable'} High Contrast
        </button>
        <div className="space-y-1">
          <button
            onClick={() => changeFontSize('normal')}
            className={`block w-full text-left px-3 py-1 text-xs rounded ${fontSize === 'normal' ? 'bg-purple-100 text-purple-700' : 'text-gray-600'}`}
          >
            Normal Font
          </button>
          <button
            onClick={() => changeFontSize('large')}
            className={`block w-full text-left px-3 py-1 text-xs rounded ${fontSize === 'large' ? 'bg-purple-100 text-purple-700' : 'text-gray-600'}`}
          >
            Large Font
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedAccessibility;

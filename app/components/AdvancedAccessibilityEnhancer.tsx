'use client';

import React, { useEffect, useState } from 'react';

const AdvancedAccessibilityEnhancer: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Check if accessibility features are enabled
    const saved = localStorage.getItem('accessibility-enhanced');
    if (saved === 'true') {
      setIsEnabled(true);
    }
  }, []);

  const toggleAccessibility = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    localStorage.setItem('accessibility-enhanced', newState.toString());
    
    if (newState) {
      document.documentElement.classList.add('accessibility-enhanced');
    } else {
      document.documentElement.classList.remove('accessibility-enhanced');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleAccessibility}
        className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
          isEnabled
            ? 'bg-green-600 text-white hover:bg-green-700'
            : 'bg-gray-600 text-white hover:bg-gray-700'
        }`}
        aria-label="Toggle accessibility enhancements"
      >
        {isEnabled ? 'Accessibility ON' : 'Accessibility OFF'}
      </button>
    </div>
  );
};

export default AdvancedAccessibilityEnhancer;
import React, { useEffect, useState } from 'react';

interface AdvancedAccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AdvancedAccessibilityEnhancer: React.FC<AdvancedAccessibilityEnhancerProps> = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Check if accessibility features should be enabled
    const saved = localStorage.getItem('advanced-accessibility-enabled');
    if (saved === 'true') {
      setIsEnabled(true);
    }
  }, []);

  const toggleAccessibility = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    localStorage.setItem('advanced-accessibility-enabled', newState.toString());
    
    // Apply accessibility enhancements
    if (newState) {
      document.body.classList.add('advanced-accessibility');
    } else {
      document.body.classList.remove('advanced-accessibility');
    }
  };

  return (
    <>
      {children}
      <button
        onClick={toggleAccessibility}
        className="fixed top-4 left-4 z-50 bg-purple-600 text-white p-2 rounded-lg shadow-lg hover:bg-purple-700 transition-colors"
        aria-label="Toggle advanced accessibility features"
      >
        {isEnabled ? 'Disable' : 'Enable'} Advanced Accessibility
      </button>
    </>
  );
};

export default AdvancedAccessibilityEnhancer;

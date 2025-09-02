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

  useEffect(() => {
    // Apply high contrast mode
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    // Apply font size
    document.documentElement.style.fontSize = fontSize === 'large' ? '18px' : 
                                            fontSize === 'small' ? '14px' : '16px';

    // Apply reduced motion
    if (reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  }, [isHighContrast, fontSize, reducedMotion]);

  const toggleHighContrast = () => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    localStorage.setItem('highContrast', newValue.toString());
  };

  const setFontSizePreference = (size: string) => {
    setFontSize(size);
    localStorage.setItem('fontSize', size);
  };

  const toggleReducedMotion = () => {
    const newValue = !reducedMotion;
    setReducedMotion(newValue);
    localStorage.setItem('reducedMotion', newValue.toString());
  };

  return (
    <div className="accessibility-enhancer">
      <div className="accessibility-controls fixed bottom-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4 border">
        <h3 className="text-sm font-semibold mb-2">Accessibility Options</h3>
        
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isHighContrast}
              onChange={toggleHighContrast}
              className="rounded"
            />
            <span className="text-sm">High Contrast</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={reducedMotion}
              onChange={toggleReducedMotion}
              className="rounded"
            />
            <span className="text-sm">Reduce Motion</span>
          </label>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm">Font Size:</span>
            <select
              value={fontSize}
              onChange={(e) => setFontSizePreference(e.target.value)}
              className="text-sm border rounded px-1 py-0.5"
            >
              <option value="small">Small</option>
              <option value="normal">Normal</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>
      </div>
      
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
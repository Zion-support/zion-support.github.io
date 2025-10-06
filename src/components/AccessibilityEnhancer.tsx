import React, { type ReactNode, useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState<'small' | 'normal' | 'large'>('normal');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);

    // Load saved preferences
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedFontSize = (localStorage.getItem('fontSize') as 'small' | 'normal' | 'large') || 'normal';
    
    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);
  }, []);

  useEffect(() => {
    // Apply accessibility preferences
    const root = document.documentElement;
    
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Apply font size
    root.style.setProperty('--font-size-multiplier', 
      fontSize === 'small' ? '0.875' : 
      fontSize === 'large' ? '1.25' : '1'
    );
  }, [isHighContrast, fontSize, reducedMotion]);

  const toggleHighContrast = () => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    localStorage.setItem('highContrast', newValue.toString());
  };

  const setFontSizePreference = (size: 'small' | 'normal' | 'large') => {
    setFontSize(size);
    localStorage.setItem('fontSize', size);
  };

  return (
    <>
      <div className="accessibility-controls fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4 border">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Accessibility</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              checked={isHighContrast}
              onChange={toggleHighContrast}
              className="rounded"
            />
            <span>High Contrast</span>
          </label>
          <div className="text-sm">
            <label className="block text-gray-700 mb-1">Font Size:</label>
            <select
              value={fontSize}
              onChange={(e) => setFontSizePreference(e.target.value as 'small' | 'normal' | 'large')}
              className="w-full text-sm border rounded px-2 py-1"
            >
              <option value="small">Small</option>
              <option value="normal">Normal</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

export default AccessibilityEnhancer;

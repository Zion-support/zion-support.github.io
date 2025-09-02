import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
<<<<<<< HEAD
=======
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
>>>>>>> main

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

<<<<<<< HEAD
  useEffect(() => {
    // Apply accessibility styles
    const root = document.documentElement;
    
    if (isHighContrast) {
=======
  const applyAccessibilityStyles = (highContrast: boolean, fontSize: string, reducedMotion: boolean) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (highContrast) {
>>>>>>> main
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
<<<<<<< HEAD
    
    root.classList.add(`font-size-${fontSize}`);
    
    return () => {
      root.classList.remove('high-contrast', 'font-size-small', 'font-size-normal', 'font-size-large');
    };
  }, [isHighContrast, fontSize]);

  const toggleHighContrast = () => {
    const newContrast = !isHighContrast;
    setIsHighContrast(newContrast);
    localStorage.setItem('highContrast', newContrast.toString());
=======

    // Font size adjustments
    root.style.setProperty('--font-size-multiplier', fontSize === 'large' ? '1.2' : fontSize === 'small' ? '0.8' : '1');

    // Reduced motion
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
>>>>>>> main
  };

  const changeFontSize = (size: string) => {
    setFontSize(size);
    localStorage.setItem('fontSize', size);
<<<<<<< HEAD
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
=======
    applyAccessibilityStyles(isHighContrast, size, reducedMotion);
  };

  return (
    <div className="accessibility-enhancer">
      <div className="accessibility-controls" style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 9999 }}>
        <button onClick={toggleHighContrast} className="accessibility-btn">
          {isHighContrast ? 'Normal Contrast' : 'High Contrast'}
        </button>
        <div className="font-size-controls">
          <button onClick={() => changeFontSize('small')} className="accessibility-btn">A-</button>
          <button onClick={() => changeFontSize('normal')} className="accessibility-btn">A</button>
          <button onClick={() => changeFontSize('large')} className="accessibility-btn">A+</button>
        </div>
      </div>
      {children}
    </div>
>>>>>>> main
  );
};

export default AccessibilityEnhancer;
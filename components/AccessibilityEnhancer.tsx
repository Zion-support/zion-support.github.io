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
    document.documentElement.setAttribute('data-font-size', fontSize);

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

  const changeFontSize = (size: string) => {
    setFontSize(size);
    localStorage.setItem('fontSize', size);
  };

  return (
    <>
      {children}
      <div className="accessibility-controls" style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
        <button
          onClick={toggleHighContrast}
          className="accessibility-btn"
          aria-label="Toggle high contrast mode"
        >
          {isHighContrast ? 'Normal Contrast' : 'High Contrast'}
        </button>
        <div className="font-size-controls">
          <button onClick={() => changeFontSize('small')}>A</button>
          <button onClick={() => changeFontSize('normal')}>A</button>
          <button onClick={() => changeFontSize('large')}>A</button>
        </div>
      </div>
    </>
  );
};

export default AccessibilityEnhancer;
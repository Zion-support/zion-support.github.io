import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [reducedMotion, setReducedMotion] = useState(false);
<<<<<<< HEAD
=======

  useEffect(() => {
    // Check for user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);

    // Apply accessibility settings from localStorage
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedFontSize = localStorage.getItem('fontSize') || 'normal';
    
    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);
>>>>>>> origin/main

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
>>>>>>> origin/main
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
<<<<<<< HEAD

    if (fontSize === 'large') {
      root.classList.add('large-text');
    } else if (fontSize === 'extra-large') {
      root.classList.add('extra-large-text');
    } else {
      root.classList.remove('large-text', 'extra-large-text');
    }

    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
  }, [isHighContrast, fontSize, reducedMotion]);

  return (
    <div className="accessibility-enhancer">
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
  };

  const changeFontSize = (size: string) => {
    setFontSize(size);
    localStorage.setItem('fontSize', size);
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
>>>>>>> origin/main
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
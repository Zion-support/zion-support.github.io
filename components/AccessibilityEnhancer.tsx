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
    // Apply accessibility styles
    const root = document.documentElement;
    
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

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
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
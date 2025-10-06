import React, { useEffect, useState } from 'react';

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
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedFontSize = (localStorage.getItem('fontSize') as 'small' | 'normal' | 'large') || 'normal';
    
    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);
    setReducedMotion(prefersReducedMotion);

    // Apply initial styles
    applyAccessibilityStyles(savedHighContrast, savedFontSize, prefersReducedMotion);
  }, []);

  const applyAccessibilityStyles = (highContrast: boolean, fontSize: 'small' | 'normal' | 'large', reducedMotion: boolean) => {
    const root = document.documentElement;
    
    // High contrast
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Font size
    root.classList.remove('font-small', 'font-normal', 'font-large');
    root.classList.add(`font-${fontSize}`);

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

  const changeFontSize = (size: 'small' | 'normal' | 'large') => {
    setFontSize(size);
    localStorage.setItem('fontSize', size);
    applyAccessibilityStyles(isHighContrast, size, reducedMotion);
  };

  return (
    <>
      {children}
      {/* Accessibility Controls - only show in development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 left-4 z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
          <h3 className="text-sm font-semibold mb-2">Accessibility Controls</h3>
          <div className="space-y-2">
            <button
              onClick={toggleHighContrast}
              className={`px-2 py-1 text-xs rounded ${
                isHighContrast ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              aria-label="Toggle high contrast mode"
            >
              High Contrast
            </button>
            <div className="flex gap-1">
              {(['small', 'normal', 'large'] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => changeFontSize(size)}
                  className={`px-2 py-1 text-xs rounded ${
                    fontSize === size ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  aria-label={`Set font size to ${size}`}
                >
                  {size.charAt(0).toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityEnhancer;
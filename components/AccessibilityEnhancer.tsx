import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState<'small' | 'normal' | 'large' | 'extra-large'>('normal');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(!!prefersReducedMotion);

    const savedHighContrast = typeof window !== 'undefined' && localStorage.getItem('highContrast') === 'true';
    const savedFontSize = (typeof window !== 'undefined' && (localStorage.getItem('fontSize') as typeof fontSize)) || 'normal';
    setIsHighContrast(!!savedHighContrast);
    setFontSize(savedFontSize);
    applyAccessibilityStyles(!!savedHighContrast, savedFontSize, !!prefersReducedMotion);
  }, []);

  const applyAccessibilityStyles = (highContrast: boolean, font: typeof fontSize, motionReduced: boolean) => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;

    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    root.classList.remove('font-small', 'font-normal', 'font-large', 'font-extra-large');
    root.classList.add(`font-${font}`);

    if (motionReduced) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
  };

  const toggleHighContrast = () => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    if (typeof window !== 'undefined') localStorage.setItem('highContrast', String(newValue));
    applyAccessibilityStyles(newValue, fontSize, reducedMotion);
  };

  const changeFontSize = (newSize: typeof fontSize) => {
    setFontSize(newSize);
    if (typeof window !== 'undefined') localStorage.setItem('fontSize', newSize);
    applyAccessibilityStyles(isHighContrast, newSize, reducedMotion);
  };

  return (
    <>
      <div className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 border">
        <h3 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">Accessibility Options</h3>
        <div className="space-y-2">
          <button
            onClick={toggleHighContrast}
            className={`w-full px-3 py-1 text-xs rounded ${isHighContrast ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
          >
            {isHighContrast ? 'Disable' : 'Enable'} High Contrast
          </button>
          <div className="text-xs text-gray-600 dark:text-gray-300">Font Size:</div>
          <div className="flex gap-1">
            {(['small', 'normal', 'large', 'extra-large'] as const).map((size) => (
              <button
                key={size}
                onClick={() => changeFontSize(size)}
                className={`px-2 py-1 text-xs rounded ${fontSize === size ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                aria-label={`Set font size to ${size}`}
              >
                {size[0].toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      <div className="sr-only">
        <h1>Zion Tech Group - Technology Solutions Provider</h1>
        <p>Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI and IT services.</p>
      </div>

      <div id="main-content">{children}</div>
    </>
  );
};

export default AccessibilityEnhancer;


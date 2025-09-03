import React, { useEffect, useState } from 'react';

type FontSize = 'small' | 'normal' | 'large' | 'extra-large';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState<FontSize>('normal');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReduced);

    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedFontSize = (localStorage.getItem('fontSize') as FontSize) || 'normal';
    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);
  }, []);

  const applyStyles = (highContrast: boolean, size: FontSize, motionReduced: boolean) => {
    const root = document.documentElement;

    root.classList.toggle('high-contrast', highContrast);

    root.classList.remove('font-small', 'font-normal', 'font-large', 'font-extra-large');
    root.classList.add(`font-${size}`);

    root.classList.toggle('reduced-motion', motionReduced);
  };

  const toggleHighContrast = () => {
    const next = !isHighContrast;
    setIsHighContrast(next);
    localStorage.setItem('highContrast', String(next));
    applyStyles(next, fontSize, reducedMotion);
  };

  const changeFontSize = (size: FontSize) => {
    setFontSize(size);
    localStorage.setItem('fontSize', size);
    applyStyles(isHighContrast, size, reducedMotion);
  };

  return (
    <>
      <div className="accessibility-controls fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 border">
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
                {size}
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
        <p>
          Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI,
          cloud, and cybersecurity services.
        </p>
      </div>

      <div id="main-content">{children}</div>
    </>
  );
};

export default AccessibilityEnhancer;


import { useEffect, useState } from 'react';

const AccessibilityEnhancer = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);

    // Load saved preferences
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedFontSize = localStorage.getItem('fontSize') || 'normal';
    
    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);

    // Apply initial styles
    applyAccessibilityStyles(savedHighContrast, savedFontSize, prefersReducedMotion);
  }, []);

  const applyAccessibilityStyles = (highContrast, fontSize, reducedMotion) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Font size adjustments
    root.classList.remove('font-small', 'font-normal', 'font-large', 'font-extra-large');
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

  const changeFontSize = (newSize) => {
    setFontSize(newSize);
    localStorage.setItem('fontSize', newSize);
    applyAccessibilityStyles(isHighContrast, newSize, reducedMotion);
  };

  return (
    <div className="accessibility-controls fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700">
      <h3 className="text-sm font-semibold mb-3 text-gray-900 dark:text-white">
        Accessibility Options
      </h3>
      
      <div className="space-y-3">
        {/* High Contrast Toggle */}
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={isHighContrast}
            onChange={toggleHighContrast}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            aria-label="Toggle high contrast mode"
          />
          <span className="text-sm text-gray-700 dark:text-gray-300">
            High Contrast
          </span>
        </label>

        {/* Font Size Controls */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Font Size
          </label>
          <div className="flex space-x-1">
            {['small', 'normal', 'large', 'extra-large'].map((size) => (
              <button
                key={size}
                onClick={() => changeFontSize(size)}
                className={`px-2 py-1 text-xs rounded ${
                  fontSize === size
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
                aria-label={`Set font size to ${size}`}
              >
                {size.charAt(0).toUpperCase() + size.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Skip to Content Link */}
        <a
          href="#main-content"
          className="block text-sm text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          Skip to main content
        </a>
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;
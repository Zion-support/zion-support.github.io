import React, { useState, useEffect } from 'react';

export default function AccessibilityEnhancer() {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);

    // Apply reduced motion if preferred
    if (prefersReducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    }

    // Load saved preferences
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedFontSize = localStorage.getItem('fontSize') || 'normal';
    
    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);
    
    // Apply saved preferences
    if (savedHighContrast) {
      document.documentElement.classList.add('high-contrast');
    }
    document.documentElement.classList.add(`font-${savedFontSize}`);
  }, []);

  const toggleHighContrast = () => {
    const newHighContrast = !isHighContrast;
    setIsHighContrast(newHighContrast);
    localStorage.setItem('highContrast', newHighContrast.toString());
    
    if (newHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };

  const changeFontSize = (size) => {
    // Remove existing font size classes
    document.documentElement.classList.remove('font-small', 'font-normal', 'font-large', 'font-extra-large');
    
    // Add new font size class
    document.documentElement.classList.add(`font-${size}`);
    setFontSize(size);
    localStorage.setItem('fontSize', size);
  };

  const toggleReducedMotion = () => {
    const newReducedMotion = !isReducedMotion;
    setIsReducedMotion(newReducedMotion);
    
    if (newReducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-white/20">
        <h3 className="text-white text-sm font-semibold mb-3">Accessibility</h3>
        
        <div className="space-y-3">
          {/* High Contrast Toggle */}
          <button
            onClick={toggleHighContrast}
            className={`w-full px-3 py-2 rounded text-sm transition-colors ${
              isHighContrast 
                ? 'bg-cyan-500 text-black' 
                : 'bg-gray-700 text-white hover:bg-gray-600'
            }`}
            aria-label="Toggle high contrast mode"
          >
            {isHighContrast ? 'High Contrast On' : 'High Contrast Off'}
          </button>

          {/* Font Size Controls */}
          <div className="space-y-2">
            <label className="text-white text-xs">Font Size:</label>
            <div className="grid grid-cols-2 gap-1">
              {['small', 'normal', 'large', 'extra-large'].map((size) => (
                <button
                  key={size}
                  onClick={() => changeFontSize(size)}
                  className={`px-2 py-1 rounded text-xs transition-colors ${
                    fontSize === size
                      ? 'bg-cyan-500 text-black'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Reduced Motion Toggle */}
          <button
            onClick={toggleReducedMotion}
            className={`w-full px-3 py-2 rounded text-sm transition-colors ${
              isReducedMotion 
                ? 'bg-cyan-500 text-black' 
                : 'bg-gray-700 text-white hover:bg-gray-600'
            }`}
            aria-label="Toggle reduced motion"
          >
            {isReducedMotion ? 'Reduced Motion On' : 'Reduced Motion Off'}
          </button>
        </div>
      </div>
    </div>
  );
}
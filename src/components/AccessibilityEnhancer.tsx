import React, { type ReactNode, useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState<'small' | 'normal' | 'large'>('normal');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);

    // Load saved preferences
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedFontSize = (localStorage.getItem('fontSize') as 'small' | 'normal' | 'large') || 'normal';
    
    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);

    // Apply initial styles
    applyAccessibilityStyles(savedHighContrast, savedFontSize, prefersReducedMotion);
  }, []);

  const applyAccessibilityStyles = (
    highContrast: boolean,
    fontSize: 'small' | 'normal' | 'large',
    reducedMotion: boolean
  ) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Font size adjustments
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

  const changeFontSize = (newSize: 'small' | 'normal' | 'large') => {
    setFontSize(newSize);
    localStorage.setItem('fontSize', newSize);
    applyAccessibilityStyles(isHighContrast, newSize, reducedMotion);
  };

  return (
    <div className="accessibility-enhancer">
      {children}
      
      {/* Accessibility Controls */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-white rounded-lg shadow-lg p-4 space-y-3">
          <h3 className="text-sm font-semibold text-gray-700">Accessibility</h3>
          
          {/* High Contrast Toggle */}
          <label className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              checked={isHighContrast}
              onChange={toggleHighContrast}
              className="rounded"
            />
            <span>High Contrast</span>
          </label>

          {/* Font Size Controls */}
          <div className="space-y-1">
            <label className="text-xs text-gray-600">Font Size</label>
            <div className="flex space-x-1">
              {(['small', 'normal', 'large'] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => changeFontSize(size)}
                  className={`px-2 py-1 text-xs rounded ${
                    fontSize === size
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {size.charAt(0).toUpperCase() + size.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .high-contrast {
          --text-color: #ffffff;
          --bg-color: #000000;
          --border-color: #ffffff;
        }
        
        .high-contrast * {
          color: var(--text-color) !important;
          background-color: var(--bg-color) !important;
          border-color: var(--border-color) !important;
        }

        .font-small {
          font-size: 0.875rem;
        }

        .font-normal {
          font-size: 1rem;
        }

        .font-large {
          font-size: 1.125rem;
        }

        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `}</style>
    </div>
  );
};

export default AccessibilityEnhancer;
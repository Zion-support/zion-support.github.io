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

  const applyAccessibilityStyles = (highContrast: boolean, fontSize: string, reducedMotion: boolean) => {
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

  useEffect(() => {
    applyAccessibilityStyles(isHighContrast, fontSize, reducedMotion);
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

  const toggleReducedMotion = () => {
    const newValue = !reducedMotion;
    setReducedMotion(newValue);
  };

  return (
    <div className="accessibility-enhancer">
      {/* Accessibility Controls */}
      <div className="accessibility-controls fixed top-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4">
        <h3 className="text-sm font-semibold mb-3">Accessibility Options</h3>
        
        <div className="space-y-3">
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isHighContrast}
                onChange={toggleHighContrast}
                className="rounded"
              />
              <span className="text-sm">High Contrast</span>
            </label>
          </div>
          
          <div>
            <label className="text-sm font-medium">Font Size:</label>
            <div className="flex space-x-2 mt-1">
              {['small', 'normal', 'large'].map((size) => (
                <button
                  key={size}
                  onClick={() => changeFontSize(size)}
                  className={`px-2 py-1 text-xs rounded ${
                    fontSize === size
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={reducedMotion}
                onChange={toggleReducedMotion}
                className="rounded"
              />
              <span className="text-sm">Reduce Motion</span>
            </label>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="accessibility-content">
        {children}
      </div>

      <style jsx>{`
        .high-contrast {
          --text-color: #000000;
          --bg-color: #ffffff;
          --border-color: #000000;
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
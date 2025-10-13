import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);

    // Load saved preferences
    const savedHighContrast = localStorage.getItem('accessibility-high-contrast') === 'true';
    const savedFontSize = parseInt(localStorage.getItem('accessibility-font-size') || '16');
    
    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);

    // Apply initial styles
    applyAccessibilityStyles(savedHighContrast, savedFontSize, prefersReducedMotion);
  }, []);

  const applyAccessibilityStyles = (highContrast: boolean, fontSize: number, reducedMotion: boolean) => {
    // Remove existing styles
    const existingStyle = document.getElementById('accessibility-styles');
    if (existingStyle) {
      existingStyle.remove();
    }

    // Create new style element
    const style = document.createElement('style');
    style.id = 'accessibility-styles';
    style.textContent = `
      .high-contrast {
        filter: contrast(150%) brightness(110%);
      }
      
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
      
      .accessibility-font-size {
        font-size: ${fontSize}px !important;
      }
      
      .accessibility-font-size h1 {
        font-size: ${fontSize * 2.5}px !important;
      }
      
      .accessibility-font-size h2 {
        font-size: ${fontSize * 2}px !important;
      }
      
      .accessibility-font-size h3 {
        font-size: ${fontSize * 1.75}px !important;
      }
      
      .accessibility-font-size h4 {
        font-size: ${fontSize * 1.5}px !important;
      }
      
      .accessibility-font-size h5 {
        font-size: ${fontSize * 1.25}px !important;
      }
      
      .accessibility-font-size h6 {
        font-size: ${fontSize * 1.1}px !important;
      }
    `;
    
    document.head.appendChild(style);

    // Apply classes to body
    document.body.className = document.body.className
      .replace(/high-contrast|reduced-motion|accessibility-font-size/g, '')
      .trim();
    
    if (highContrast) {
      document.body.classList.add('high-contrast');
    }
    
    if (reducedMotion) {
      document.body.classList.add('reduced-motion');
    }
    
    if (fontSize !== 16) {
      document.body.classList.add('accessibility-font-size');
    }
  };

  const toggleHighContrast = () => {
    const newHighContrast = !isHighContrast;
    setIsHighContrast(newHighContrast);
    localStorage.setItem('accessibility-high-contrast', newHighContrast.toString());
    applyAccessibilityStyles(newHighContrast, fontSize, isReducedMotion);
  };

  const increaseFontSize = () => {
    const newFontSize = Math.min(fontSize + 2, 24);
    setFontSize(newFontSize);
    localStorage.setItem('accessibility-font-size', newFontSize.toString());
    applyAccessibilityStyles(isHighContrast, newFontSize, isReducedMotion);
  };

  const decreaseFontSize = () => {
    const newFontSize = Math.max(fontSize - 2, 12);
    setFontSize(newFontSize);
    localStorage.setItem('accessibility-font-size', newFontSize.toString());
    applyAccessibilityStyles(isHighContrast, newFontSize, isReducedMotion);
  };

  const resetAccessibility = () => {
    setIsHighContrast(false);
    setFontSize(16);
    localStorage.removeItem('accessibility-high-contrast');
    localStorage.removeItem('accessibility-font-size');
    applyAccessibilityStyles(false, 16, isReducedMotion);
  };

  return (
    <div className="accessibility-enhancer">
      {children}
      
      {/* Accessibility Controls */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg p-4 border border-white/10 shadow-lg">
          <div className="flex flex-col space-y-2">
            <button
              onClick={toggleHighContrast}
              className="px-3 py-2 text-sm bg-cyan-600 hover:bg-cyan-700 text-white rounded transition-colors"
              title="Toggle High Contrast"
            >
              {isHighContrast ? 'Normal Contrast' : 'High Contrast'}
            </button>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={decreaseFontSize}
                className="px-2 py-1 text-sm bg-slate-600 hover:bg-slate-700 text-white rounded transition-colors"
                title="Decrease Font Size"
              >
                A-
              </button>
              <span className="text-xs text-gray-300 min-w-[2rem] text-center">
                {fontSize}px
              </span>
              <button
                onClick={increaseFontSize}
                className="px-2 py-1 text-sm bg-slate-600 hover:bg-slate-700 text-white rounded transition-colors"
                title="Increase Font Size"
              >
                A+
              </button>
            </div>
            
            <button
              onClick={resetAccessibility}
              className="px-3 py-2 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded transition-colors"
              title="Reset Accessibility Settings"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;

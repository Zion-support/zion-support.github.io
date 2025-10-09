import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setReducedMotion(prefersReducedMotion);
    setIsHighContrast(prefersHighContrast);

    // Apply accessibility enhancements
    document.documentElement.setAttribute('data-reduced-motion', prefersReducedMotion.toString());
    document.documentElement.setAttribute('data-high-contrast', prefersHighContrast.toString());

    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }
      
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      
      .focus\\:not-sr-only:focus {
        position: static;
        width: auto;
        height: auto;
        padding: 0.5rem 1rem;
        margin: 0;
        overflow: visible;
        clip: auto;
        white-space: normal;
      }
    `;
    document.head.appendChild(style);

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  const toggleHighContrast = () => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    document.documentElement.setAttribute('data-high-contrast', newValue.toString());
  };

  const toggleFontSize = () => {
    const sizes = ['small', 'normal', 'large'];
    const currentIndex = sizes.indexOf(fontSize);
    const nextIndex = (currentIndex + 1) % sizes.length;
    const newSize = sizes[nextIndex];
    setFontSize(newSize);
    document.documentElement.setAttribute('data-font-size', newSize);
  };

  return (
    <div className="accessibility-enhancer">
      {/* Accessibility Controls */}
      <div className="accessibility-controls fixed bottom-4 right-4 z-50 bg-slate-800 rounded-lg p-4 shadow-lg">
        <h3 className="text-white text-sm font-medium mb-2">Accessibility</h3>
        <div className="space-y-2">
          <button
            onClick={toggleHighContrast}
            className="block w-full text-left text-sm text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle high contrast mode"
          >
            {isHighContrast ? '✓' : '○'} High Contrast
          </button>
          <button
            onClick={toggleFontSize}
            className="block w-full text-left text-sm text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle font size"
          >
            Font Size: {fontSize}
          </button>
        </div>
      </div>

      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
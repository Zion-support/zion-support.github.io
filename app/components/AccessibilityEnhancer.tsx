import React, { useEffect, useState } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(100);

  useEffect(() => {
    // Check user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setIsReducedMotion(prefersReducedMotion);
    setIsHighContrast(prefersHighContrast);
    // Add skip links
    const existingSkipLink = document.querySelector('.skip-link');
    if (!existingSkipLink) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      skipLink.setAttribute('aria-label', 'Skip to main content');
      document.body.insertBefore(skipLink, document.body.firstChild);
    }

    // Add main content landmark
    const main = document.querySelector('main');
    if (main && !main.id) {
      main.id = 'main-content';
      main.setAttribute('role', 'main');
    }

    // Add navigation landmark
    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
      nav.setAttribute('aria-label', 'Main navigation');
    }

    // Add footer landmark
    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }

    // Enhance focus management
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
      
      // Handle escape key for closing modals/dropdowns
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    // Add focus visible styles and accessibility enhancements
    const style = document.createElement('style');
    style.textContent = `
      .keyboard-navigation *:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
      
      .skip-link:focus {
        outline: 2px solid #ffffff !important;
        outline-offset: 2px !important;
      }
      
      .high-contrast {
        filter: contrast(150%) brightness(110%);
      }
      
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
      
      .font-size-125 { font-size: 125% !important; }
      .font-size-150 { font-size: 150% !important; }
      .font-size-175 { font-size: 175% !important; }
      .font-size-200 { font-size: 200% !important; }
    `;
    document.head.appendChild(style);

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    // Apply accessibility settings
    if (isHighContrast) {
      document.body.classList.add('high-contrast');
    }
    if (isReducedMotion) {
      document.body.classList.add('reduced-motion');
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [isHighContrast, isReducedMotion]);

  // Apply font size changes
  useEffect(() => {
    const body = document.body;
    body.classList.remove('font-size-125', 'font-size-150', 'font-size-175', 'font-size-200');
    
    if (fontSize > 100) {
      if (fontSize <= 125) body.classList.add('font-size-125');
      else if (fontSize <= 150) body.classList.add('font-size-150');
      else if (fontSize <= 175) body.classList.add('font-size-175');
      else body.classList.add('font-size-200');
    }
  }, [fontSize]);

  return (
    <div className="accessibility-controls fixed bottom-4 right-4 z-50 bg-slate-800 p-4 rounded-lg shadow-lg">
      <h3 className="text-white text-sm font-semibold mb-2">Accessibility</h3>
      <div className="space-y-2">
        <button
          onClick={() => setIsHighContrast(!isHighContrast)}
          className={`text-xs px-2 py-1 rounded ${isHighContrast ? 'bg-blue-600 text-white' : 'bg-gray-600 text-gray-300'}`}
          aria-label="Toggle high contrast mode"
        >
          High Contrast
        </button>
        <button
          onClick={() => setIsReducedMotion(!isReducedMotion)}
          className={`text-xs px-2 py-1 rounded ${isReducedMotion ? 'bg-blue-600 text-white' : 'bg-gray-600 text-gray-300'}`}
          aria-label="Toggle reduced motion"
        >
          Reduce Motion
        </button>
        <div className="flex items-center space-x-2">
          <label htmlFor="font-size" className="text-xs text-white">Font Size:</label>
          <input
            id="font-size"
            type="range"
            min="100"
            max="200"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="w-16"
            aria-label="Adjust font size"
          />
          <span className="text-xs text-white">{fontSize}%</span>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;

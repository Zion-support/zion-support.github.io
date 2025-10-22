import React, { useEffect, useState } from 'react';
import { AccessibilityConfig } from '../types/enhanced.types';

interface EnhancedAccessibilityProps {
  config?: Partial<AccessibilityConfig>;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({
  config = {}
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  const defaultConfig: AccessibilityConfig = {
    enableKeyboardNavigation: true,
    enableScreenReader: true,
    enableHighContrast: true,
    enableReducedMotion: true,
    enableFocusIndicators: true,
    ...config
  };

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setIsReducedMotion(prefersReducedMotion);
    setIsHighContrast(prefersHighContrast);

    // Apply accessibility styles
    if (defaultConfig.enableHighContrast || isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    }

    if (defaultConfig.enableReducedMotion || isReducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    }

    if (defaultConfig.enableFocusIndicators) {
      document.documentElement.classList.add('focus-visible');
    }

    // Add keyboard navigation support
    if (defaultConfig.enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const main = document.querySelector('main');
          if (main) {
            (main as HTMLElement).focus();
            event.preventDefault();
          }
        }

        // Skip to navigation
        if (event.key === 'Tab' && !event.shiftKey && event.target === document.body) {
          const nav = document.querySelector('nav');
          if (nav) {
            (nav as HTMLElement).focus();
            event.preventDefault();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
    
    return undefined;
  }, [defaultConfig, isHighContrast, isReducedMotion]);

  // Font size controls
  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 2, 24);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`;
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 2, 12);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`;
  };

  const resetFontSize = () => {
    setFontSize(16);
    document.documentElement.style.fontSize = '16px';
  };

  // Toggle high contrast
  const toggleHighContrast = () => {
    const newState = !isHighContrast;
    setIsHighContrast(newState);
    document.documentElement.classList.toggle('high-contrast', newState);
  };

  // Toggle reduced motion
  const toggleReducedMotion = () => {
    const newState = !isReducedMotion;
    setIsReducedMotion(newState);
    document.documentElement.classList.toggle('reduced-motion', newState);
  };

  return (
    <div className="accessibility-controls" style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}>
      <div className="accessibility-panel bg-white shadow-lg rounded-lg p-4 border border-gray-200">
        <h3 className="text-lg font-semibold mb-3 text-gray-900">Accessibility Options</h3>
        
        <div className="space-y-3">
          {/* Font Size Controls */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Font Size: {fontSize}px
            </label>
            <div className="flex space-x-2">
              <button
                onClick={decreaseFontSize}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Decrease font size"
              >
                A-
              </button>
              <button
                onClick={resetFontSize}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Reset font size"
              >
                A
              </button>
              <button
                onClick={increaseFontSize}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Increase font size"
              >
                A+
              </button>
            </div>
          </div>

          {/* High Contrast Toggle */}
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isHighContrast}
                onChange={toggleHighContrast}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                aria-label="Toggle high contrast mode"
              />
              <span className="text-sm text-gray-700">High Contrast</span>
            </label>
          </div>

          {/* Reduced Motion Toggle */}
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isReducedMotion}
                onChange={toggleReducedMotion}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                aria-label="Toggle reduced motion"
              />
              <span className="text-sm text-gray-700">Reduce Motion</span>
            </label>
          </div>

          {/* Skip Links */}
          <div className="pt-2 border-t border-gray-200">
            <button
              onClick={() => {
                const main = document.querySelector('main');
                if (main) (main as HTMLElement).focus();
              }}
              className="text-sm text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            >
              Skip to main content
            </button>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .high-contrast {
            filter: contrast(150%) brightness(120%);
          }
          
          .reduced-motion * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          
          .focus-visible *:focus {
            outline: 2px solid #3b82f6;
            outline-offset: 2px;
          }
          
          .accessibility-controls {
            font-family: system-ui, -apple-system, sans-serif;
          }
        `
      }} />
    </div>
  );
};

export default EnhancedAccessibility;
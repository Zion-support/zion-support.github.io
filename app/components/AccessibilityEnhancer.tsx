// Preload hint: react
'use client';

import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setReducedMotion(prefersReducedMotion);
    setIsHighContrast(prefersHighContrast);

    // Listen for changes in user preferences
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');
    
    const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    const handleContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches);
    
    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);

    // Add keyboard navigation enhancements
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content with Alt + M
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }
      
      // Toggle high contrast with Alt + C
      if (e.altKey && e.key === 'c') {
        e.preventDefault();
        setIsHighContrast(prev => !prev);
      }
      
      // Increase font size with Alt + Plus
      if (e.altKey && e.key === '+') {
        e.preventDefault();
        setFontSize(prev => {
          if (prev === 'small') return 'normal';
          if (prev === 'normal') return 'large';
          if (prev === 'large') return 'xlarge';
          return 'xlarge';
        });
      }
      
      // Decrease font size with Alt + Minus
      if (e.altKey && e.key === '-') {
        e.preventDefault();
        setFontSize(prev => {
          if (prev === 'xlarge') return 'large';
          if (prev === 'large') return 'normal';
          if (prev === 'normal') return 'small';
          return 'small';
        });
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Add focus indicators
    const addFocusIndicators = () => {
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        
        .focus-visible:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
      `;
      document.head.appendChild(style);
    };

    addFocusIndicators();

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Apply accessibility styles
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast mode
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Font size adjustments
    root.classList.remove('font-small', 'font-normal', 'font-large', 'font-xlarge');
    root.classList.add(`font-${fontSize}`);
    
    // Reduced motion
    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
  }, [isHighContrast, fontSize, reducedMotion]);

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        onClick={(e) => {
          e.preventDefault();
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        Skip to main content
      </a>
      
      {/* Accessibility controls */}
      <div className="fixed bottom-4 left-4 z-40 space-y-2">
        <button
          onClick={() => setIsHighContrast(!isHighContrast)}
          className="bg-gray-800 text-white px-3 py-2 rounded-md text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
        >
          {isHighContrast ? 'High Contrast: On' : 'High Contrast: Off'}
        </button>
        
        <div className="bg-gray-800 text-white px-3 py-2 rounded-md text-sm">
          <div className="text-xs mb-1">Font Size:</div>
          <div className="flex space-x-1">
            <button
              onClick={() => setFontSize('small')}
              className={`px-2 py-1 rounded text-xs ${fontSize === 'small' ? 'bg-blue-600' : 'bg-gray-600'}`}
              aria-label="Small font size"
            >
              A
            </button>
            <button
              onClick={() => setFontSize('normal')}
              className={`px-2 py-1 rounded text-sm ${fontSize === 'normal' ? 'bg-blue-600' : 'bg-gray-600'}`}
              aria-label="Normal font size"
            >
              A
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={`px-2 py-1 rounded text-base ${fontSize === 'large' ? 'bg-blue-600' : 'bg-gray-600'}`}
              aria-label="Large font size"
            >
              A
            </button>
            <button
              onClick={() => setFontSize('xlarge')}
              className={`px-2 py-1 rounded text-lg ${fontSize === 'xlarge' ? 'bg-blue-600' : 'bg-gray-600'}`}
              aria-label="Extra large font size"
            >
              A
            </button>
          </div>
        </div>
      </div>

      {/* Keyboard shortcuts help */}
      <div className="fixed bottom-4 right-4 z-40">
        <details className="bg-gray-800 text-white p-3 rounded-md text-sm">
          <summary className="cursor-pointer hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
            Keyboard Shortcuts
          </summary>
          <div className="mt-2 space-y-1 text-xs">
            <div>Alt + M: Skip to main content</div>
            <div>Alt + C: Toggle high contrast</div>
            <div>Alt + +: Increase font size</div>
            <div>Alt + -: Decrease font size</div>
          </div>
        </details>
      </div>

      {children}
    </>
  );
};

export default AccessibilityEnhancer;
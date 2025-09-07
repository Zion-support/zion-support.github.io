import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setIsReducedMotion(prefersReducedMotion);
    setIsHighContrast(prefersHighContrast);

    // Apply initial styles
    document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
    
    if (prefersReducedMotion) {
      document.documentElement.classList.add('reduce-motion');
    }
    
    if (prefersHighContrast) {
      document.documentElement.classList.add('high-contrast');
    }

    // Add keyboard navigation support
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation')
};

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown)
};
  }, [fontSize]);

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast')
};

  const toggleReducedMotion = () => {
    setIsReducedMotion(!isReducedMotion);
    document.documentElement.classList.toggle('reduce-motion')
};

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 2, 24);
    setFontSize(newSize);
    document.documentElement.style.setProperty('--font-size', `${newSize}px`)
};

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 2, 12);
    setFontSize(newSize);
    document.documentElement.style.setProperty('--font-size', `${newSize}px`)
};

  return (
    <>
      <div className="accessibility-controls fixed bottom-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4 border">
        <h3 className="text-sm font-semibold mb-2">Accessibility</h3>
        <div className="space-y-2">
          <button
            onClick={toggleHighContrast}
            className="block w-full text-left text-sm px-2 py-1 hover:bg-gray-100 rounded"
            aria-label="Toggle high contrast mode"
          >
            {isHighContrast ? '✓' : '○'} High Contrast
          </button>
          <button
            onClick={toggleReducedMotion}
            className="block w-full text-left text-sm px-2 py-1 hover:bg-gray-100 rounded"
            aria-label="Toggle reduced motion"
          >
            {isReducedMotion ? '✓' : '○'} Reduce Motion
          </button>
          <div className="flex items-center space-x-2">
            <button
              onClick={decreaseFontSize}
              className="text-sm px-2 py-1 hover:bg-gray-100 rounded"
              aria-label="Decrease font size"
            >
              A-
            </button>
            <span className="text-sm">{fontSize}px</span>
            <button
              onClick={increaseFontSize}
              className="text-sm px-2 py-1 hover:bg-gray-100 rounded"
              aria-label="Increase font size"
            >
              A+
            </button>
          </div>
        </div>
      </div>
      
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>
      
      {children}
    </>
  )
};

export default AccessibilityEnhancer;

import React, { useState, useEffect } from 'react' interface AccessibilityEnhancerProps {""
  children: React.ReactNode} const AccessibilityEnhancer: React.FC < AccessibilityEnhancerProps> = ({ children }) => { const [accessibilitySettings, setAccessibilitySettings] = useState ({ highContrast: false, largeText: false, reducedMotion: false, focusVisible: true })  useEffect ( () => {'';""
}}

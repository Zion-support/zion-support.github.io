'use client';

import React, { useState, useEffect, useCallback, ReactNode } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
  enableSkipLinks?: boolean;
  enableKeyboardNav?: boolean;
  enableFocusIndicators?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableSkipLinks = true,
  enableKeyboardNav = true,
  enableFocusIndicators = true,
}) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  const addSkipLinks = useCallback(() => {
    if (!enableSkipLinks) return;
    
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50';
    skipLink.style.position = 'absolute';
    skipLink.style.left = '-9999px';
    skipLink.style.top = 'auto';
    skipLink.style.width = '1px';
    skipLink.style.height = '1px';
    skipLink.style.overflow = 'hidden';
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }, [enableSkipLinks]);

  const setupKeyboardNavigation = useCallback(() => {
    if (!enableKeyboardNav) return;
    
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
  }, [enableKeyboardNav]);

  const setupFocusIndicators = useCallback(() => {
    if (!enableFocusIndicators) return;
    
    const style = document.createElement('style');
    style.textContent = `
      .keyboard-navigation *:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
    `;
    document.head.appendChild(style);
  }, [enableFocusIndicators]);

  const setupReducedMotion = useCallback(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const setupHighContrast = useCallback(() => {
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const setupFontSize = useCallback(() => {
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
      setFontSize(parseInt(savedFontSize, 10));
    }
  }, []);

  useEffect(() => {
    addSkipLinks();
    const cleanupKeyboard = setupKeyboardNavigation();
    setupFocusIndicators();
    const cleanupMotion = setupReducedMotion();
    const cleanupContrast = setupHighContrast();
    setupFontSize();
    
    return () => {
      cleanupKeyboard?.();
      cleanupMotion?.();
      cleanupContrast?.();
    };
  }, [addSkipLinks, setupKeyboardNavigation, setupFocusIndicators, setupReducedMotion, setupHighContrast, setupFontSize]);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
    localStorage.setItem('fontSize', fontSize.toString());
  }, [fontSize]);

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 2, 24));
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 2, 12));
  };

  const resetFontSize = () => {
    setFontSize(16);
  };

  return (
    <div className={`accessibility-enhanced ${isReducedMotion ? 'reduced-motion' : ''} ${isHighContrast ? 'high-contrast' : ''}`}>
      {/* Accessibility Controls */}
      <div className="accessibility-controls fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4 hidden print:block">
        <h3 className="text-sm font-semibold mb-2">Accessibility Options</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <button
              onClick={decreaseFontSize}
              className="px-2 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300"
              aria-label="Decrease font size"
            >
              A-
            </button>
            <span className="text-xs">{fontSize}px</span>
            <button
              onClick={increaseFontSize}
              className="px-2 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300"
              aria-label="Increase font size"
            >
              A+
            </button>
            <button
              onClick={resetFontSize}
              className="px-2 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300"
              aria-label="Reset font size"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
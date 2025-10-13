<<<<<<< HEAD
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
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setIsReducedMotion(prefersReducedMotion);
    setIsHighContrast(prefersHighContrast);

    // Listen for changes in user preferences
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');

    const handleMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    const handleContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches);

    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  useEffect(() => {
    // Apply accessibility styles
    const root = document.documentElement;
    
    if (isHighContrast) {
      root.style.setProperty('--contrast-ratio', '4.5');
      root.style.setProperty('--text-color', '#000000');
      root.style.setProperty('--bg-color', '#ffffff');
    } else {
      root.style.setProperty('--contrast-ratio', '3');
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
    }

    if (isReducedMotion) {
      root.style.setProperty('--animation-duration', '0.01ms');
      root.style.setProperty('--animation-iteration-count', '1');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--animation-iteration-count');
    }

    // Apply font size
    root.style.setProperty('--base-font-size', `${fontSize}px`);
  }, [isHighContrast, isReducedMotion, fontSize]);

  // Keyboard navigation enhancements
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
        const mainContent = document.querySelector('main, [role="main"]');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
          e.preventDefault();
        }
      }

      // Skip to navigation
      if (e.key === 'Tab' && !e.shiftKey && e.target === document.body) {
        const navigation = document.querySelector('nav, [role="navigation"]');
        if (navigation) {
          (navigation as HTMLElement).focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus management
  useEffect(() => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const handleFocus = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      target.style.outline = '2px solid #0066cc';
      target.style.outlineOffset = '2px';
    };

    const handleBlur = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      target.style.outline = '';
      target.style.outlineOffset = '';
    };

    focusableElements.forEach(element => {
      element.addEventListener('focus', handleFocus);
      element.addEventListener('blur', handleBlur);
    });

    return () => {
      focusableElements.forEach(element => {
        element.removeEventListener('focus', handleFocus);
        element.removeEventListener('blur', handleBlur);
      });
    };
  }, []);

  return (
    <div 
      className={`accessibility-enhanced ${isHighContrast ? 'high-contrast' : ''} ${isReducedMotion ? 'reduced-motion' : ''}`}
      style={{ fontSize: `${fontSize}px` }}
    >
      {children}
      
      {/* Accessibility controls */}
      <div className="fixed top-4 right-4 z-50 bg-white border border-gray-300 rounded-lg p-4 shadow-lg">
        <h3 className="text-sm font-semibold mb-2">Accessibility Controls</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isHighContrast}
              onChange={(e) => setIsHighContrast(e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">High Contrast</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isReducedMotion}
              onChange={(e) => setIsReducedMotion(e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">Reduce Motion</span>
          </label>
          <div className="flex items-center space-x-2">
            <label htmlFor="font-size" className="text-sm">Font Size:</label>
            <input
              id="font-size"
              type="range"
              min="12"
              max="24"
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-20"
            />
            <span className="text-sm">{fontSize}px</span>
          </div>
        </div>
      </div>
    </div>
  );
=======
import React from 'react';

const AccessibilityEnhancer: React.FC = () => {
  return null; // This component enhances accessibility but doesn't render anything visible
>>>>>>> cursor/fix-errors-and-merge-to-main-bca9
};

export default AccessibilityEnhancer;
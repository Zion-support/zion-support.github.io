import React, { useState, useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);

  useEffect(() => {
    // Check for user preferences
    if (typeof window !== 'undefined') {
      // High contrast detection
      const highContrastMedia = window.matchMedia('(prefers-contrast: high)');
      setIsHighContrast(highContrastMedia.matches);
      
      // Reduced motion detection
      const reducedMotionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(reducedMotionMedia.matches);

      // Listen for changes
      const handleHighContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches);
      const handleReducedMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);

      highContrastMedia.addEventListener('change', handleHighContrastChange);
      reducedMotionMedia.addEventListener('change', handleReducedMotionChange);

      // Keyboard navigation detection
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          setFocusVisible(true);
        }
      };

      const handleMouseDown = () => {
        setFocusVisible(false);
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);

      return () => {
        highContrastMedia.removeEventListener('change', handleHighContrastChange);
        reducedMotionMedia.removeEventListener('change', handleReducedMotionChange);
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
      };
    }
  }, []);

  useEffect(() => {
    // Apply accessibility styles
    const root = document.documentElement;
    
    if (isHighContrast) {
      root.style.setProperty('--color-primary', '#000000');
      root.style.setProperty('--color-secondary', '#ffffff');
      root.style.setProperty('--color-background', '#ffffff');
      root.style.setProperty('--color-text', '#000000');
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (isLargeText) {
      root.style.setProperty('--font-size-base', '18px');
      root.style.setProperty('--font-size-sm', '16px');
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    if (isReducedMotion) {
      root.style.setProperty('--animation-duration', '0s');
      root.style.setProperty('--transition-duration', '0s');
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    if (focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  }, [isHighContrast, isLargeText, isReducedMotion, focusVisible]);

  return (
    <div className="accessibility-enhanced">
      {children}
      
      {/* Accessibility Controls */}
      <div className="fixed top-4 left-4 z-50 bg-white shadow-lg rounded-lg p-2 space-y-2">
        <button
          onClick={() => setIsLargeText(!isLargeText)}
          className={`block w-full px-3 py-1 text-xs rounded ${
            isLargeText ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          aria-label={`${isLargeText ? 'Disable' : 'Enable'} large text`}
        >
          {isLargeText ? 'Large Text: On' : 'Large Text: Off'}
        </button>
        
        <button
          onClick={() => setIsHighContrast(!isHighContrast)}
          className={`block w-full px-3 py-1 text-xs rounded ${
            isHighContrast ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast`}
        >
          {isHighContrast ? 'High Contrast: On' : 'High Contrast: Off'}
        </button>
      </div>

      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-1/2 focus:transform focus:-translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-lg z-50 font-semibold"
        onClick={(e) => {
          e.preventDefault();
          const main = document.getElementById('main-content');
          if (main) {
            main.focus();
            main.scrollIntoView();
          }
        }}
      >
        Skip to main content
      </a>
    </div>
  );
};

export default AccessibilityEnhancer;
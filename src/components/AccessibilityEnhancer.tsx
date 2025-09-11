import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(1);

  useEffect(() => {
    // Check for high contrast mode
    const checkHighContrast = () => {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      setIsHighContrast(mediaQuery.matches);
    };

    // Check for reduced motion preference
    const checkReducedMotion = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(mediaQuery.matches);
    };

    // Check for font size preference
    const checkFontSize = () => {
      const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
      const baseFontSize = 16; // Default browser font size
      setFontSize(rootFontSize / baseFontSize);
    };

    checkHighContrast();
    checkReducedMotion();
    checkFontSize();

    // Listen for changes
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    highContrastQuery.addEventListener('change', checkHighContrast);
    reducedMotionQuery.addEventListener('change', checkReducedMotion);

    // Monitor font size changes
    const resizeObserver = new ResizeObserver(checkFontSize);
    resizeObserver.observe(document.documentElement);

    return () => {
      highContrastQuery.removeEventListener('change', checkHighContrast);
      reducedMotionQuery.removeEventListener('change', checkReducedMotion);
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    // Apply accessibility styles
    const root = document.documentElement;
    
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Apply font size scaling
    root.style.setProperty('--font-scale', fontSize.toString());
  }, [isHighContrast, isReducedMotion, fontSize]);

  // Add keyboard navigation enhancements
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.ctrlKey) {
        const main = document.querySelector('main');
        if (main) {
          main.focus();
          e.preventDefault();
        }
      }

      // Skip to navigation
      if (e.key === 'Tab' && e.shiftKey && e.ctrlKey) {
        const nav = document.querySelector('nav');
        if (nav) {
          nav.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      className={`accessibility-enhanced ${
        isHighContrast ? 'high-contrast' : ''
      } ${isReducedMotion ? 'reduced-motion' : ''}`}
      style={{ '--font-scale': fontSize } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
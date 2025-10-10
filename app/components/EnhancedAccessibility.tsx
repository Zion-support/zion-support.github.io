'use client';
import React, { useEffect, useState, ReactNode } from 'react';

interface EnhancedAccessibilityProps {
  children: ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState('normal');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(highContrastQuery.matches);

    const handleHighContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
      if (e.matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    };

    highContrastQuery.addEventListener('change', handleHighContrastChange);

    // Check for reduced motion preference
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(reducedMotionQuery.matches);

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
      if (e.matches) {
        document.documentElement.classList.add('reduced-motion');
      } else {
        document.documentElement.classList.remove('reduced-motion');
      }
    };

    reducedMotionQuery.addEventListener('change', handleReducedMotionChange);

    // Apply initial classes
    if (highContrastQuery.matches) {
      document.documentElement.classList.add('high-contrast');
    }
    if (reducedMotionQuery.matches) {
      document.documentElement.classList.add('reduced-motion');
    }

    // Keyboard navigation enhancements
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content with Tab
      if (event.key === 'Tab' && event.target === document.body) {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          event.preventDefault();
        }
      }

      // Escape key to close modals/dropdowns
      if (event.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }

      // Font size controls
      if (event.ctrlKey) {
        if (event.key === '=' || event.key === '+') {
          event.preventDefault();
          setFontSize(prev => {
            const sizes = ['small', 'normal', 'large', 'xlarge'];
            const currentIndex = sizes.indexOf(prev);
            return sizes[Math.min(currentIndex + 1, sizes.length - 1)];
          });
        } else if (event.key === '-') {
          event.preventDefault();
          setFontSize(prev => {
            const sizes = ['small', 'normal', 'large', 'xlarge'];
            const currentIndex = sizes.indexOf(prev);
            return sizes[Math.max(currentIndex - 1, 0)];
          });
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      highContrastQuery.removeEventListener('change', handleHighContrastChange);
      reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Apply font size changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;
    root.classList.remove('font-small', 'font-normal', 'font-large', 'font-xlarge');
    root.classList.add(`font-${fontSize}`);
  }, [fontSize]);

  // Add accessibility attributes to interactive elements
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    interactiveElements.forEach(element => {
      if (!element.getAttribute('aria-label') && !element.textContent?.trim()) {
        element.setAttribute('aria-label', 'Interactive element');
      }
    });
  }, []);

  return (
    <div className={`accessibility-enhanced ${isHighContrast ? 'high-contrast' : ''} ${isReducedMotion ? 'reduced-motion' : ''}`}>
      {children}
    </div>
  );
};

EnhancedAccessibility.displayName = 'EnhancedAccessibility';

export default EnhancedAccessibility;
'use client';
import React, { useEffect, useState, ReactNode } from 'react';

interface EnhancedAccessibilityProps {
  children: ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');

  useEffect(() => {
    // Check for high contrast preference
    if (typeof window !== 'undefined') {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
      setIsHighContrast(prefersHighContrast.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setIsHighContrast(e.matches);
      };

      prefersHighContrast.addEventListener('change', handleChange);
      return () => prefersHighContrast.removeEventListener('change', handleChange);
    }
  }, []);

  useEffect(() => {
    // Apply accessibility styles
    if (typeof window !== 'undefined') {
      const style = document.createElement('style');
      style.textContent = `
        /* High contrast mode */
        .high-contrast {
          filter: contrast(150%) brightness(1.2);
        }
        
        .high-contrast * {
          border-color: currentColor !important;
        }
        
        /* Focus indicators */
        *:focus {
          outline: 2px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }
        
        .high-contrast *:focus {
          outline: 3px solid #ffffff !important;
          outline-offset: 3px !important;
        }
        
        /* Font size adjustments */
        .large-text {
          font-size: 1.25rem;
        }
        
        .extra-large-text {
          font-size: 1.5rem;
        }
        
        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `;
      document.head.appendChild(style);

      return () => {
        if (document.head.contains(style)) {
          document.head.removeChild(style);
        }
      };
    }
  }, []);

  useEffect(() => {
    // Apply high contrast class to body
    if (isHighContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  useEffect(() => {
    // Apply font size class to body
    document.body.className = document.body.className.replace(/font-size-\w+/g, '');
    if (fontSize !== 'normal') {
      document.body.classList.add(`font-size-${fontSize}`);
    }
  }, [fontSize]);

  return (
    <div className={`accessibility-wrapper ${isHighContrast ? 'high-contrast' : ''}`}>
      {children}
    </div>
  );
};

EnhancedAccessibility.displayName = 'EnhancedAccessibility';

export default EnhancedAccessibility;
<<<<<<< HEAD
'use client'
import React, { useEffect, useState } from 'react'
interface AccessibilityEnhancerProps {
    children: React.ReactNode
  }
const AdvancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
    const [isHighContrast, setIsHighContrast] = useState(false)
  const [fontSize, setFontSize] = useState('medium')
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  useEffect(() => {
    // Check for user's motion preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)
    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)')
    setIsHighContrast(highContrastQuery.matches),
    // Apply accessibility enhancements
    document.documentElement.setAttribute('data-accessibility-enhanced', 'true')
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast')
  }
    if (isReducedMotion) {
    document.documentElement.classList.add('reduced-motion')
  }
    // Add keyboard navigation support
    const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation')
  }
    }
    const handleMouseDown = () => {
    document.body.classList.remove('keyboard-navigation')
  }
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleMouseDown)
    return () => {
    document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleMouseDown)
  }
  }, [isHighContrast, isReducedMotion])
  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast)
    document.documentElement.classList.toggle('high-contrast')
  }
  const changeFontSize = (size: string) => {
    setFontSize(size),
    document.documentElement.setAttribute('data-font-size', size)
  }
=======
'use client';
import React, { useEffect, useState } from 'react';
interface AccessibilityEnhancerProps {
  children: React.ReactNode
}
};
;
const AdvancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {;
const [isEnhanced, setIsEnhanced] = useState(false);
  useEffect(() => {
    // Initialize accessibility enhancements;
const initAccessibility = () => {
}
      // Add high contrast mode support;
const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      if (prefersHighContrast) {
        document.documentElement.classList.add('high-contrast');
      }
      // Add reduced motion support;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        document.documentElement.classList.add('reduced-motion');
      }
      // Add focus indicators;
const style = document.createElement('style');
      style.textContent = `
        .focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
        .high-contrast {
          filter: contrast(150%);
        }
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `;
      document.head.appendChild(style);
      // Add keyboard navigation support;
const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      };
const handleMouseDown = () => {
}
        document.body.classList.remove('keyboard-navigation');
      };
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);
      setIsEnhanced(true);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
        document.head.removeChild(style);
      }
    };
const cleanup = initAccessibility();
    return cleanup;
  }, []);
  if (!isEnhanced) {
    return <>{children}</>;
  };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  return (
    <div className="accessibility-enhanced">
      <div className="accessibility-controls" style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}>
        <button
          onClick={toggleHighContrast}
          className="accessibility-button"
          aria-label="Toggle high contrast"
        >
          {isHighContrast ? 'Normal Contrast' : 'High Contrast'}
        </button>
        <div className="font-size-controls">
          <button
            onClick={() => changeFontSize('small')}
            className="accessibility-button"
            aria-label="Small font size"
          >
            A;
  </
          <button
            onClick={() => changeFontSize('medium')}
            className="accessibility-button"
            aria-label="Medium font size"
          >
            A;
  </
          <button
            onClick={() => changeFontSize('large')}
            className="accessibility-button"
            aria-label="Large font size"
          >
            A
  </
        </div>
      </div>
      {children}
    </div>
<<<<<<< HEAD
  )
}
export default AdvancedAccessibilityEnhancer
  </button>
  </button>
  </button>
  </AccessibilityEnhancerProps>
=======
  );
};
export default AdvancedAccessibilityEnhancer;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7

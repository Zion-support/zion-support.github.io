<<<<<<< HEAD
=======
=======
>>>>>>> 3d33b64448bdb81cd2984819501ea4fc0c6fb47c
import React, { useEffect, useState } from 'react';

// Type definitions for browser APIs
declare global {
  interface MediaQueryListEvent extends Event {
    readonly matches: boolean;
  }
  
  interface MediaQueryList {
    readonly matches: boolean;
    addEventListener(type: 'change', listener: (event: MediaQueryListEvent) => void): void;
    removeEventListener(type: 'change', listener: (event: MediaQueryListEvent) => void): void;
  }
}

<<<<<<< HEAD
=======
import React, { useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';

// Using built-in DOM types
import React, { useEffect, useState } from 'react';

import React, { useEffect, useState } from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-52d3
interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user preferences
    if (typeof window !== 'undefined') {
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
    }
  }, []);

  useEffect(() => {
    // Apply accessibility settings to document
    if (typeof document !== 'undefined') {
      document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
      document.documentElement.style.setProperty('--high-contrast', isHighContrast ? '1' : '0');
      document.documentElement.style.setProperty('--reduced-motion', isReducedMotion ? '1' : '0');
    }
  }, [fontSize, isHighContrast, isReducedMotion]);

  const handleKeyDown = (e: KeyboardEvent) => {
    // Keyboard shortcuts for accessibility
    if (e.ctrlKey && e.key === '=') {
      e.preventDefault();
      setFontSize(prev => Math.min(prev + 2, 24));
    } else if (e.ctrlKey && e.key === '-') {
      e.preventDefault();
      setFontSize(prev => Math.max(prev - 2, 12));
    } else if (e.ctrlKey && e.key === '0') {
      e.preventDefault();
      setFontSize(16);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
        const mainContent = document.querySelector('main, [role="main"]');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
          e.preventDefault();
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
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
);

    const handleFocus = (e: Event) => {
      const target = e.target as HTMLElement;
      target.style.outline = '2px solid #0066cc';
      target.style.outlineOffset = '2px';
    }
  };

  const handleBlur = (e: Event) => {
    const target = e.target as HTMLElement;
    if (target) {
      target.style.outline = '';
      target.style.outlineOffset = '';
    }
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
      
      {/* Accessibility Controls */}
      <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border">
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
            <label className="text-sm">Font Size:</label>
            <input
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
<<<<<<< HEAD
    </div>
  );
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-29e3
=======
>>>>>>> 3d33b64448bdb81cd2984819501ea4fc0c6fb47c
};

export default AccessibilityEnhancer;
>>>>>>> cursor/fix-errors-and-merge-to-main-b847
=======
    </div>;
);
};

export default AccessibilityEnhancer;}}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-52d3

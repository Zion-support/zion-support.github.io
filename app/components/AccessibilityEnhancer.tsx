import React, { useEffect, useState } from 'react';
import { accessibilityUtils } from '../utils/accessibilityUtils';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Initialize accessibility features
    const initializeAccessibility = () => {
      // Check system preferences
      if (window.matchMedia('(prefers-contrast: high)').matches) {
        setIsHighContrast(true);
        accessibilityUtils.enableHighContrast();
      }

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setIsReducedMotion(true);
        accessibilityUtils.enableReducedMotion();
      }

      // Add skip links
      accessibilityUtils.addSkipLink('main-content', 'Skip to main content');
      accessibilityUtils.addSkipLink('navigation', 'Skip to navigation');

      // Setup keyboard navigation for main content
      const mainContent = document.querySelector('main');
      if (mainContent) {
        accessibilityUtils.setupKeyboardNavigation(mainContent as HTMLElement);
      }

      // Validate accessibility on load
      const accessibilityIssues = accessibilityUtils.validateAriaLabels(document.body);
      if (accessibilityIssues.length > 0 && process.env.NODE_ENV === 'development') {
        console.warn('[A11y] Accessibility issues found:', accessibilityIssues);
      }
    };

    initializeAccessibility();

    // Listen for system preference changes
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
      if (e.matches) {
        accessibilityUtils.enableHighContrast();
      } else {
        accessibilityUtils.disableHighContrast();
      }
    };

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
      if (e.matches) {
        accessibilityUtils.enableReducedMotion();
      } else {
        accessibilityUtils.disableReducedMotion();
      }
    };

    contrastQuery.addEventListener('change', handleContrastChange);
    motionQuery.addEventListener('change', handleMotionChange);

    return () => {
      contrastQuery.removeEventListener('change', handleContrastChange);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Alt + H: Toggle high contrast
      if (event.altKey && event.key === 'h') {
        event.preventDefault();
        if (isHighContrast) {
          accessibilityUtils.disableHighContrast();
          setIsHighContrast(false);
          accessibilityUtils.announce('High contrast mode disabled');
        } else {
          accessibilityUtils.enableHighContrast();
          setIsHighContrast(true);
          accessibilityUtils.announce('High contrast mode enabled');
        }
      }

      // Alt + M: Toggle reduced motion
      if (event.altKey && event.key === 'm') {
        event.preventDefault();
        if (isReducedMotion) {
          accessibilityUtils.disableReducedMotion();
          setIsReducedMotion(false);
          accessibilityUtils.announce('Reduced motion disabled');
        } else {
          accessibilityUtils.enableReducedMotion();
          setIsReducedMotion(true);
          accessibilityUtils.announce('Reduced motion enabled');
        }
      }

      // Alt + +: Increase font size
      if (event.altKey && event.key === '+') {
        event.preventDefault();
        setFontSize(prev => Math.min(prev + 2, 24));
        accessibilityUtils.announce(`Font size increased to ${fontSize + 2}px`);
      }

      // Alt + -: Decrease font size
      if (event.altKey && event.key === '-') {
        event.preventDefault();
        setFontSize(prev => Math.max(prev - 2, 12));
        accessibilityUtils.announce(`Font size decreased to ${fontSize - 2}px`);
      }

      // Alt + 0: Reset font size
      if (event.altKey && event.key === '0') {
        event.preventDefault();
        setFontSize(16);
        accessibilityUtils.announce('Font size reset to default');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isHighContrast, isReducedMotion, fontSize]);

  // Apply font size changes
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  return (
    <>
      {children}
      
      {/* Accessibility Controls */}
      <div className="accessibility-controls fixed bottom-4 right-4 z-50">
        <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Accessibility</h3>
          
          <div className="space-y-2">
            <button
              onClick={() => {
                if (isHighContrast) {
                  accessibilityUtils.disableHighContrast();
                  setIsHighContrast(false);
                } else {
                  accessibilityUtils.enableHighContrast();
                  setIsHighContrast(true);
                }
              }}
              className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
              aria-pressed={isHighContrast}
            >
              {isHighContrast ? '✓' : '○'} High Contrast
            </button>
            
            <button
              onClick={() => {
                if (isReducedMotion) {
                  accessibilityUtils.disableReducedMotion();
                  setIsReducedMotion(false);
                } else {
                  accessibilityUtils.enableReducedMotion();
                  setIsReducedMotion(true);
                }
              }}
              className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
              aria-pressed={isReducedMotion}
            >
              {isReducedMotion ? '✓' : '○'} Reduced Motion
            </button>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setFontSize(prev => Math.max(prev - 2, 12))}
                className="px-2 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded"
                aria-label="Decrease font size"
              >
                A-
              </button>
              
              <span className="text-sm text-gray-600 min-w-[3rem] text-center">
                {fontSize}px
              </span>
              
              <button
                onClick={() => setFontSize(prev => Math.min(prev + 2, 24))}
                className="px-2 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded"
                aria-label="Increase font size"
              >
                A+
              </button>
            </div>
            
            <button
              onClick={() => setFontSize(16)}
              className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
            >
              Reset Font Size
            </button>
          </div>
          
          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Keyboard shortcuts:<br/>
              Alt+H: High contrast<br/>
              Alt+M: Reduced motion<br/>
              Alt+/-: Font size<br/>
              Alt+0: Reset font
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessibilityEnhancer;
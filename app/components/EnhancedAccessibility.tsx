'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { Eye, EyeOff, Volume2, VolumeX, Type } from 'lucide-react';

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isScreenReaderMode, setIsScreenReaderMode] = useState(false);
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false);
  const [showAccessibilityPanel, setShowAccessibilityPanel] = useState(false);

  // Check for user preferences
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);

    // Check for high contrast preference
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    setIsHighContrast(prefersHighContrast);

    // Check for large text preference
    const prefersLargeText = window.matchMedia('(prefers-reduced-data: no-preference)').matches;
    setIsLargeText(prefersLargeText);

    // Listen for preference changes
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

  // Apply accessibility styles
  useEffect(() => {
    const root = document.documentElement;
    
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (isLargeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    if (isScreenReaderMode) {
      root.classList.add('screen-reader-mode');
    } else {
      root.classList.remove('screen-reader-mode');
    }
  }, [isHighContrast, isLargeText, isReducedMotion, isScreenReaderMode]);

  // Keyboard navigation detection
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsKeyboardNavigation(true);
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      setIsKeyboardNavigation(false);
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  // Focus management
  const manageFocus = useCallback(() => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach((element, index) => {
      element.setAttribute('tabindex', index.toString());
    });
  }, []);

  // Announce changes to screen readers
  const announceToScreenReader = useCallback((message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  // Toggle functions
  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    announceToScreenReader(`High contrast ${!isHighContrast ? 'enabled' : 'disabled'}`);
  };

  const toggleLargeText = () => {
    setIsLargeText(!isLargeText);
    announceToScreenReader(`Large text ${!isLargeText ? 'enabled' : 'disabled'}`);
  };

  const toggleReducedMotion = () => {
    setIsReducedMotion(!isReducedMotion);
    announceToScreenReader(`Reduced motion ${!isReducedMotion ? 'enabled' : 'disabled'}`);
  };

  const toggleScreenReaderMode = () => {
    setIsScreenReaderMode(!isScreenReaderMode);
    announceToScreenReader(`Screen reader mode ${!isScreenReaderMode ? 'enabled' : 'disabled'}`);
  };

  // Initialize focus management
  useEffect(() => {
    manageFocus();
  }, [manageFocus]);

  return (
    <>
      {children}
      
      {/* Accessibility Panel */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setShowAccessibilityPanel(!showAccessibilityPanel)}
          className="bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
          aria-label="Open accessibility options"
          title="Accessibility Options"
        >
          <Eye className="w-6 h-6" />
        </button>

        {showAccessibilityPanel && (
          <div className="absolute bottom-16 right-0 bg-white/95 backdrop-blur-lg rounded-lg p-4 shadow-xl border border-white/20 min-w-64">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Accessibility Options</h3>
            
            <div className="space-y-3">
              <button
                onClick={toggleHighContrast}
                className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                  isHighContrast ? 'bg-cyan-100 text-cyan-900' : 'hover:bg-gray-100'
                }`}
                aria-pressed={isHighContrast}
              >
                <span className="flex items-center gap-2">
                  {isHighContrast ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  High Contrast
                </span>
                <span className="text-sm">{isHighContrast ? 'On' : 'Off'}</span>
              </button>

              <button
                onClick={toggleLargeText}
                className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                  isLargeText ? 'bg-cyan-100 text-cyan-900' : 'hover:bg-gray-100'
                }`}
                aria-pressed={isLargeText}
              >
                <span className="flex items-center gap-2">
                  <Type className="w-4 h-4" />
                  Large Text
                </span>
                <span className="text-sm">{isLargeText ? 'On' : 'Off'}</span>
              </button>

              <button
                onClick={toggleReducedMotion}
                className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                  isReducedMotion ? 'bg-cyan-100 text-cyan-900' : 'hover:bg-gray-100'
                }`}
                aria-pressed={isReducedMotion}
              >
                <span className="flex items-center gap-2">
                  {isReducedMotion ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  Reduced Motion
                </span>
                <span className="text-sm">{isReducedMotion ? 'On' : 'Off'}</span>
              </button>

              <button
                onClick={toggleScreenReaderMode}
                className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                  isScreenReaderMode ? 'bg-cyan-100 text-cyan-900' : 'hover:bg-gray-100'
                }`}
                aria-pressed={isScreenReaderMode}
              >
                <span className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Screen Reader Mode
                </span>
                <span className="text-sm">{isScreenReaderMode ? 'On' : 'Off'}</span>
              </button>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-600">
                These settings are saved in your browser and will persist across sessions.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Screen Reader Only Content */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Accessibility options loaded. Use Tab to navigate, Enter to activate, and Escape to close menus.
      </div>
    </>
  );
};

export default EnhancedAccessibility;
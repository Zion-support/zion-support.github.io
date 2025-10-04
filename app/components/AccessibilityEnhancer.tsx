import React, { useState, useEffect, useCallback } from 'react';

interface AccessibilityState {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  focusVisible: boolean;
  screenReader: boolean;
}

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [accessibilityState, setAccessibilityState] = useState<AccessibilityState>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    focusVisible: false,
    screenReader: false
  });

  const [isVisible, setIsVisible] = useState(false);

  // Check for system preferences
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Check for high contrast preference
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      
      // Check for screen reader
      const hasScreenReader = 'speechSynthesis' in window || 'webkitSpeechSynthesis' in window;
      
      setAccessibilityState(prev => ({
        ...prev,
        reducedMotion: prefersReducedMotion,
        highContrast: prefersHighContrast,
        screenReader: hasScreenReader
      }));
    }
  }, []);

  // Apply accessibility styles
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast
    if (accessibilityState.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Reduced motion
    if (accessibilityState.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Font size
    root.classList.remove('font-small', 'font-medium', 'font-large');
    root.classList.add(`font-${accessibilityState.fontSize}`);

    // Focus visible
    if (accessibilityState.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  }, [accessibilityState]);

  const toggleHighContrast = useCallback(() => {
    setAccessibilityState(prev => ({ ...prev, highContrast: !prev.highContrast }));
  }, []);

  const toggleReducedMotion = useCallback(() => {
    setAccessibilityState(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }));
  }, []);

  const setFontSize = useCallback((size: 'small' | 'medium' | 'large') => {
    setAccessibilityState(prev => ({ ...prev, fontSize: size }));
  }, []);

  const toggleFocusVisible = useCallback(() => {
    setAccessibilityState(prev => ({ ...prev, focusVisible: !prev.focusVisible }));
  }, []);

  const announceToScreenReader = useCallback((message: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(message);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    }
  }, []);

  const skipToContent = useCallback(() => {
    const mainContent = document.querySelector('main') || document.querySelector('#main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
      announceToScreenReader('Skipped to main content');
    }
  }, [announceToScreenReader]);

  const AccessibilityPanel = () => (
    <div className="fixed top-4 left-4 z-50 bg-white rounded-lg shadow-xl border border-gray-200 w-80">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Accessibility Options</h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close accessibility panel"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Skip to content */}
        <button
          onClick={skipToContent}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
        >
          Skip to Main Content
        </button>

        {/* High Contrast */}
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">High Contrast</label>
          <button
            onClick={toggleHighContrast}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              accessibilityState.highContrast ? 'bg-blue-600' : 'bg-gray-200'
            }`}
            aria-label={`Toggle high contrast ${accessibilityState.highContrast ? 'off' : 'on'}`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                accessibilityState.highContrast ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Reduced Motion */}
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Reduce Motion</label>
          <button
            onClick={toggleReducedMotion}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              accessibilityState.reducedMotion ? 'bg-blue-600' : 'bg-gray-200'
            }`}
            aria-label={`Toggle reduced motion ${accessibilityState.reducedMotion ? 'off' : 'on'}`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                accessibilityState.reducedMotion ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Focus Visible */}
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Enhanced Focus</label>
          <button
            onClick={toggleFocusVisible}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              accessibilityState.focusVisible ? 'bg-blue-600' : 'bg-gray-200'
            }`}
            aria-label={`Toggle enhanced focus ${accessibilityState.focusVisible ? 'off' : 'on'}`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                accessibilityState.focusVisible ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Font Size */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">Font Size</label>
          <div className="flex space-x-2">
            {(['small', 'medium', 'large'] as const).map((size) => (
              <button
                key={size}
                onClick={() => setFontSize(size)}
                className={`flex-1 py-2 px-3 rounded text-sm transition-colors ${
                  accessibilityState.fontSize === size
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-label={`Set font size to ${size}`}
              >
                {size.charAt(0).toUpperCase() + size.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Screen Reader Status */}
        <div className="text-xs text-gray-500">
          Screen Reader: {accessibilityState.screenReader ? 'Detected' : 'Not Detected'}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {children}
      
      {/* Accessibility Toggle Button */}
      <div className="fixed top-4 left-4 z-40">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-colors"
          aria-label="Open accessibility options"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </button>
      </div>

      {/* Accessibility Panel */}
      {isVisible && <AccessibilityPanel />}

      {/* Global Accessibility Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .high-contrast {
          --tw-bg-opacity: 1;
          --tw-text-opacity: 1;
        }
        
        .high-contrast * {
          background-color: white !important;
          color: black !important;
          border-color: black !important;
        }
        
        .high-contrast button,
        .high-contrast input,
        .high-contrast select,
        .high-contrast textarea {
          background-color: white !important;
          color: black !important;
          border: 2px solid black !important;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
        
        .font-small {
          font-size: 0.875rem !important;
        }
        
        .font-medium {
          font-size: 1rem !important;
        }
        
        .font-large {
          font-size: 1.125rem !important;
        }
        
        .focus-visible *:focus {
          outline: 3px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        
        /* Skip link */
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          z-index: 1000;
        }
        
        .skip-link:focus {
          top: 6px;
        }
        `
      }} />
    </>
  );
};

export default AccessibilityEnhancer;
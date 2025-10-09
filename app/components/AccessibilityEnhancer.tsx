'use client';

import React, { useEffect, useState } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Check for user preferences
    const checkUserPreferences = () => {
      // Check for reduced motion preference
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setIsReducedMotion(true);
        document.documentElement.style.setProperty('--animation-duration', '0s');
        document.documentElement.style.setProperty('--transition-duration', '0s');
      }

      // Check for high contrast preference
      if (window.matchMedia('(prefers-contrast: high)').matches) {
        setIsHighContrast(true);
        document.documentElement.classList.add('high-contrast');
      }

      // Check for color scheme preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      }
    };

    checkUserPreferences();

    // Listen for changes in user preferences
    const mediaQueries = [
      window.matchMedia('(prefers-reduced-motion: reduce)'),
      window.matchMedia('(prefers-contrast: high)'),
      window.matchMedia('(prefers-color-scheme: dark)')
    ];

    const handleMediaChange = () => {
      checkUserPreferences();
    };

    mediaQueries.forEach(mq => {
      mq.addEventListener('change', handleMediaChange);
    });

    // Add keyboard navigation enhancements
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
        const skipLink = document.querySelector('[href="#main-content"]') as HTMLAnchorElement;
        if (skipLink) {
          skipLink.focus();
        }
      }

      // Escape key to close modals/dropdowns
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Add focus indicators
    const addFocusStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        
        .high-contrast * {
          filter: contrast(150%) !important;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `;
      document.head.appendChild(style);
    };

    addFocusStyles();

    // Add ARIA live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

    return () => {
      mediaQueries.forEach(mq => {
        mq.removeEventListener('change', handleMediaChange);
      });
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const announceToScreenReader = (message: string) => {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  };

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast');
    announceToScreenReader(isHighContrast ? 'High contrast disabled' : 'High contrast enabled');
  };

  const toggleReducedMotion = () => {
    setIsReducedMotion(!isReducedMotion);
    document.documentElement.classList.toggle('reduced-motion');
    if (isReducedMotion) {
      document.documentElement.style.removeProperty('--animation-duration');
      document.documentElement.style.removeProperty('--transition-duration');
    } else {
      document.documentElement.style.setProperty('--animation-duration', '0s');
      document.documentElement.style.setProperty('--transition-duration', '0s');
    }
    announceToScreenReader(isReducedMotion ? 'Animations enabled' : 'Animations disabled');
  };

  const increaseFontSize = () => {
    if (fontSize < 24) {
      setFontSize(fontSize + 2);
      document.documentElement.style.fontSize = `${fontSize + 2}px`;
      announceToScreenReader(`Font size increased to ${fontSize + 2}px`);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 12) {
      setFontSize(fontSize - 2);
      document.documentElement.style.fontSize = `${fontSize - 2}px`;
      announceToScreenReader(`Font size decreased to ${fontSize - 2}px`);
    }
  };

  const resetFontSize = () => {
    setFontSize(16);
    document.documentElement.style.fontSize = '16px';
    announceToScreenReader('Font size reset to default');
  };

  // Only show accessibility controls in development or when explicitly enabled
  if (process.env.NODE_ENV !== 'development' && !window.location.search.includes('accessibility=true')) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg z-50 max-w-xs">
      <h3 className="font-bold mb-3 text-cyan-400">Accessibility Controls</h3>
      
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium mb-1">High Contrast</label>
          <button
            onClick={toggleHighContrast}
            className={`px-3 py-1 rounded text-sm ${
              isHighContrast ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-300'
            }`}
            aria-pressed={isHighContrast}
          >
            {isHighContrast ? 'On' : 'Off'}
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Reduced Motion</label>
          <button
            onClick={toggleReducedMotion}
            className={`px-3 py-1 rounded text-sm ${
              isReducedMotion ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-300'
            }`}
            aria-pressed={isReducedMotion}
          >
            {isReducedMotion ? 'On' : 'Off'}
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Font Size: {fontSize}px</label>
          <div className="flex space-x-1">
            <button
              onClick={decreaseFontSize}
              className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm"
              aria-label="Decrease font size"
            >
              A-
            </button>
            <button
              onClick={resetFontSize}
              className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm"
              aria-label="Reset font size"
            >
              A
            </button>
            <button
              onClick={increaseFontSize}
              className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm"
              aria-label="Increase font size"
            >
              A+
            </button>
          </div>
        </div>

        <div className="pt-2 border-t border-gray-700">
          <p className="text-xs text-gray-400">
            Use Tab to navigate, Enter to activate, and Escape to close.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;
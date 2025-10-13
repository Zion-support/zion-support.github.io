import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  focusVisible: boolean;
  keyboardNavigation: boolean;
}

interface EnhancedAccessibilityManagerProps {
  children: React.ReactNode;
}

const EnhancedAccessibilityManager: React.FC<EnhancedAccessibilityManagerProps> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    focusVisible: true,
    keyboardNavigation: true
  });

  const [isVisible, setIsVisible] = useState(false);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text mode
    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Screen reader optimizations
    if (newSettings.screenReader) {
      root.classList.add('screen-reader-optimized');
    } else {
      root.classList.remove('screen-reader-optimized');
    }

    // Focus visible
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Keyboard navigation
    if (newSettings.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }

    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Apply settings when they change
  useEffect(() => {
    applySettings(settings);
  }, [settings, applySettings]);

  // Keyboard navigation handler
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!settings.keyboardNavigation) return;

      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.altKey) {
        event.preventDefault();
        const main = document.querySelector('main');
        if (main) {
          main.focus();
          main.scrollIntoView();
        }
      }

      // Skip to navigation
      if (event.key === 'Tab' && event.altKey) {
        event.preventDefault();
        const nav = document.querySelector('nav');
        if (nav) {
          nav.focus();
          nav.scrollIntoView();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Focus management
  useEffect(() => {
    if (settings.focusVisible) {
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        .focus-visible button:focus,
        .focus-visible a:focus,
        .focus-visible input:focus,
        .focus-visible textarea:focus,
        .focus-visible select:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
      `;
      document.head.appendChild(style);
      return () => document.head.removeChild(style);
    }
  }, [settings.focusVisible]);

  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
  }, [settings]);

  const resetSettings = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      focusVisible: true,
      keyboardNavigation: true
    };
    setSettings(defaultSettings);
  }, []);

  return (
    <>
      {children}
      
      {/* Accessibility Panel */}
      <div 
        className={`fixed top-4 right-4 z-50 transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-100%]'
        }`}
        role="region"
        aria-label="Accessibility Settings"
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-80 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Accessibility Settings
          </h3>
          
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={(e) => updateSetting('highContrast', e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                aria-describedby="high-contrast-desc"
              />
            </label>
            <div id="high-contrast-desc" className="text-xs text-gray-500 dark:text-gray-400 ml-0">
              Increases color contrast for better visibility
            </div>

            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>
              <input
                type="checkbox"
                checked={settings.largeText}
                onChange={(e) => updateSetting('largeText', e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                aria-describedby="large-text-desc"
              />
            </label>
            <div id="large-text-desc" className="text-xs text-gray-500 dark:text-gray-400 ml-0">
              Increases text size for better readability
            </div>

            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">Reduced Motion</span>
              <input
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                aria-describedby="reduced-motion-desc"
              />
            </label>
            <div id="reduced-motion-desc" className="text-xs text-gray-500 dark:text-gray-400 ml-0">
              Reduces animations and transitions
            </div>

            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">Screen Reader</span>
              <input
                type="checkbox"
                checked={settings.screenReader}
                onChange={(e) => updateSetting('screenReader', e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                aria-describedby="screen-reader-desc"
              />
            </label>
            <div id="screen-reader-desc" className="text-xs text-gray-500 dark:text-gray-400 ml-0">
              Optimizes content for screen readers
            </div>

            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">Focus Indicators</span>
              <input
                type="checkbox"
                checked={settings.focusVisible}
                onChange={(e) => updateSetting('focusVisible', e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                aria-describedby="focus-visible-desc"
              />
            </label>
            <div id="focus-visible-desc" className="text-xs text-gray-500 dark:text-gray-400 ml-0">
              Shows focus indicators for keyboard navigation
            </div>

            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">Keyboard Navigation</span>
              <input
                type="checkbox"
                checked={settings.keyboardNavigation}
                onChange={(e) => updateSetting('keyboardNavigation', e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                aria-describedby="keyboard-nav-desc"
              />
            </label>
            <div id="keyboard-nav-desc" className="text-xs text-gray-500 dark:text-gray-400 ml-0">
              Enables keyboard shortcuts and navigation
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={resetSettings}
              className="w-full px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Reset to Defaults
            </button>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-4 right-4 z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Toggle accessibility settings"
        aria-expanded={isVisible}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      </button>

      {/* CSS for accessibility features */}
      <style jsx global>{`
        .high-contrast {
          --tw-bg-opacity: 1;
          --tw-text-opacity: 1;
        }
        
        .high-contrast * {
          background-color: white !important;
          color: black !important;
          border-color: black !important;
        }
        
        .high-contrast .bg-gradient-to-r,
        .high-contrast .bg-gradient-to-br {
          background: white !important;
        }
        
        .large-text {
          font-size: 1.2em;
        }
        
        .large-text h1 { font-size: 2.5em; }
        .large-text h2 { font-size: 2em; }
        .large-text h3 { font-size: 1.75em; }
        .large-text h4 { font-size: 1.5em; }
        .large-text h5 { font-size: 1.25em; }
        .large-text h6 { font-size: 1.1em; }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .screen-reader-optimized .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        
        .keyboard-navigation .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          z-index: 1000;
        }
        
        .keyboard-navigation .skip-link:focus {
          top: 6px;
        }
      `}</style>
    </>
  );
};

export default EnhancedAccessibilityManager;
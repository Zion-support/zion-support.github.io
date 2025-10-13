import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  screenReader: boolean;
}

const EnhancedAccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: false,
    screenReader: false
  });

  const [isVisible, setIsVisible] = useState(false);

  // Check for screen reader
  const detectScreenReader = useCallback(() => {
    const hasScreenReader = 
      window.speechSynthesis ||
      'speechSynthesis' in window ||
      navigator.userAgent.includes('NVDA') ||
      navigator.userAgent.includes('JAWS') ||
      navigator.userAgent.includes('VoiceOver');
    
    setSettings(prev => ({ ...prev, screenReader: !!hasScreenReader }));
  }, []);

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    if (settings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  }, [settings]);

  // Initialize accessibility features
  useEffect(() => {
    detectScreenReader();
    
    // Listen for system preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setSettings(prev => ({ ...prev, reducedMotion: mediaQuery.matches }));
    
    const handleChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [detectScreenReader]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt + A to toggle accessibility panel
      if (e.altKey && e.key === 'a') {
        e.preventDefault();
        setIsVisible(!isVisible);
      }
      
      // Escape to close panel
      if (e.key === 'Escape' && isVisible) {
        setIsVisible(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isVisible]);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const resetSettings = () => {
    setSettings({
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      focusVisible: false,
      screenReader: false
    });
  };

  return (
    <>
      {children}
      
      {/* Accessibility Panel */}
      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Toggle accessibility options"
          title="Accessibility Options (Alt + A)"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </button>
        
        {isVisible && (
          <div className="absolute bottom-16 left-0 bg-white border border-gray-200 rounded-lg shadow-xl p-6 w-80 max-h-96 overflow-y-auto">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Accessibility Options
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-700">High Contrast</label>
                <button
                  onClick={() => toggleSetting('highContrast')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    settings.highContrast ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                  aria-pressed={settings.highContrast}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-700">Large Text</label>
                <button
                  onClick={() => toggleSetting('largeText')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    settings.largeText ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                  aria-pressed={settings.largeText}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.largeText ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-700">Reduced Motion</label>
                <button
                  onClick={() => toggleSetting('reducedMotion')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                  aria-pressed={settings.reducedMotion}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-700">Enhanced Focus</label>
                <button
                  onClick={() => toggleSetting('focusVisible')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    settings.focusVisible ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                  aria-pressed={settings.focusVisible}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.focusVisible ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-700">Screen Reader</label>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  settings.screenReader ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {settings.screenReader ? 'Detected' : 'Not Detected'}
                </span>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <button
                onClick={resetSettings}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Reset to Default
              </button>
            </div>
            
            <div className="mt-4 text-xs text-gray-500">
              <p>Keyboard shortcuts:</p>
              <p>• Alt + A: Toggle this panel</p>
              <p>• Escape: Close panel</p>
              <p>• Tab: Navigate elements</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Skip to main content
      </a>
    </>
  );
};

export default EnhancedAccessibilityEnhancer;

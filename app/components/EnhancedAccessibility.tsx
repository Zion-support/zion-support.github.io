'use client';

import React, { useEffect, useState } from 'react';
import { Eye, EyeOff, Volume2, VolumeX, Type, Contrast } from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  focusVisible: boolean;
}

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    focusVisible: true
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Check for system preferences
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      
      setSettings(prev => ({
        ...prev,
        reducedMotion: prefersReducedMotion,
        highContrast: prefersHighContrast
      }));
    }
  }, []);

  useEffect(() => {
    // Apply accessibility settings
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

    // Save settings to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const resetSettings = () => {
    setSettings({
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      focusVisible: true
    });
  };

  return (
    <>
      {children}
      
      {/* Accessibility Panel */}
      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Open accessibility settings"
        >
          <Eye className="h-5 w-5" />
        </button>

        {isOpen && (
          <div className="absolute bottom-16 left-0 bg-white rounded-lg shadow-xl p-6 w-80 border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Accessibility Settings</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                aria-label="Close accessibility settings"
              >
                <EyeOff className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Contrast className="h-4 w-4 text-gray-600 mr-2" />
                  <span className="text-sm text-gray-700">High Contrast</span>
                </div>
                <button
                  onClick={() => toggleSetting('highContrast')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    settings.highContrast ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                  aria-label="Toggle high contrast"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Large Text */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Type className="h-4 w-4 text-gray-600 mr-2" />
                  <span className="text-sm text-gray-700">Large Text</span>
                </div>
                <button
                  onClick={() => toggleSetting('largeText')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    settings.largeText ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                  aria-label="Toggle large text"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.largeText ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <VolumeX className="h-4 w-4 text-gray-600 mr-2" />
                  <span className="text-sm text-gray-700">Reduced Motion</span>
                </div>
                <button
                  onClick={() => toggleSetting('reducedMotion')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                  aria-label="Toggle reduced motion"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Focus Visible */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Eye className="h-4 w-4 text-gray-600 mr-2" />
                  <span className="text-sm text-gray-700">Focus Indicators</span>
                </div>
                <button
                  onClick={() => toggleSetting('focusVisible')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    settings.focusVisible ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                  aria-label="Toggle focus indicators"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.focusVisible ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <button
                onClick={resetSettings}
                className="w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Reset to Defaults
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Accessibility Styles */}
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
        .high-contrast button,
        .high-contrast [role="button"] {
          background-color: black !important;
          color: white !important;
          border: 2px solid black !important;
        }
        .high-contrast a {
          color: blue !important;
          text-decoration: underline !important;
        }
        .high-contrast input,
        .high-contrast textarea,
        .high-contrast select {
          border: 2px solid black !important;
          background-color: white !important;
          color: black !important;
        }

        .large-text {
          font-size: 1.125rem;
        }
        .large-text h1 { font-size: 2.5rem; }
        .large-text h2 { font-size: 2rem; }
        .large-text h3 { font-size: 1.75rem; }
        .large-text h4 { font-size: 1.5rem; }
        .large-text h5 { font-size: 1.25rem; }
        .large-text h6 { font-size: 1.125rem; }

        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        .focus-visible *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
      `}</style>
    </>
  );
};

export default EnhancedAccessibility;
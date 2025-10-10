'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import { Eye, Contrast, Type, VolumeX, Volume2, X } from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  focusVisible: boolean;
}

interface EnhancedAccessibilityProps {
  children: ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    focusVisible: false
  });

  const updateSetting = (key: keyof AccessibilitySettings, value: boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    // Apply accessibility settings
    if (settings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    if (settings.largeText) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }

    if (settings.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    if (settings.screenReader) {
      document.documentElement.classList.add('screen-reader-mode');
    } else {
      document.documentElement.classList.remove('screen-reader-mode');
    }

    if (settings.focusVisible) {
      document.documentElement.classList.add('enhanced-focus');
    } else {
      document.documentElement.classList.remove('enhanced-focus');
    }
  }, [settings]);

  return (
    <>
      {children}
      
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Toggle accessibility settings"
      >
        <Eye className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Accessibility Settings</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close accessibility settings"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Contrast className="w-5 h-5 mr-2 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">High Contrast</span>
                  </div>
                  <button
                    onClick={() => updateSetting('highContrast', !settings.highContrast)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
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
                    <Type className="w-5 h-5 mr-2 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Large Text</span>
                  </div>
                  <button
                    onClick={() => updateSetting('largeText', !settings.largeText)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
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
                    <VolumeX className="w-5 h-5 mr-2 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Reduce Motion</span>
                  </div>
                  <button
                    onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
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

                {/* Screen Reader Mode */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Volume2 className="w-5 h-5 mr-2 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Screen Reader Mode</span>
                  </div>
                  <button
                    onClick={() => updateSetting('screenReader', !settings.screenReader)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.screenReader ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                    aria-label="Toggle screen reader mode"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Enhanced Focus */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Eye className="w-5 h-5 mr-2 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Enhanced Focus</span>
                  </div>
                  <button
                    onClick={() => updateSetting('focusVisible', !settings.focusVisible)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.focusVisible ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                    aria-label="Toggle enhanced focus"
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
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .high-contrast {
          --tw-bg-opacity: 1;
          --tw-text-opacity: 1;
        }
        
        .large-text {
          font-size: 1.125rem;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .screen-reader-mode {
          /* Enhanced screen reader support */
        }
        
        .enhanced-focus *:focus {
          outline: 3px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
      `}</style>
    </>
  );
};

export default EnhancedAccessibility;
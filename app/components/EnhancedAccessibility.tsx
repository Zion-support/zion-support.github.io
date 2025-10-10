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

  const updateSetting = (key: keyof AccessibilitySettings, value: boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    // Apply accessibility settings to document
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
    
    if (settings.screenReader) {
      root.classList.add('screen-reader-mode');
    } else {
      root.classList.remove('screen-reader-mode');
    }
    
    if (settings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  }, [settings]);

  return (
    <>
      {children}
      
      {/* Accessibility Panel */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          aria-label="Open accessibility settings"
        >
          <Eye className="w-5 h-5" />
        </button>
        
        {isOpen && (
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-6 w-80 border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Accessibility Settings</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Close accessibility settings"
              >
                <EyeOff className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
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
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
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
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
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
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`}
                  />
                </button>
              </div>
              
              {/* Screen Reader */}
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
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                  }`}
                  />
                </button>
              </div>
              
              {/* Focus Visible */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Focus Indicators</span>
                </div>
                <button
                  onClick={() => updateSetting('focusVisible', !settings.focusVisible)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.focusVisible ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                  aria-label="Toggle focus indicators"
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.focusVisible ? 'translate-x-6' : 'translate-x-1'
                  }`}
                  />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EnhancedAccessibility;
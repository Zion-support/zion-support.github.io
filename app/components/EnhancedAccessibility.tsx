'use client';
import React, { useEffect, useState } from 'react';
import { Eye, EyeOff, Volume2, VolumeX, Type, Contrast } from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  screenReader: boolean;
  keyboardNavigation: boolean;
}

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
  enableSettings?: boolean;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({
  children,
  enableSettings = true
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    screenReader: false,
    keyboardNavigation: true
  });

  const [showSettings, setShowSettings] = useState(false);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  // Apply settings
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Font size
    root.classList.remove('font-small', 'font-medium', 'font-large');
    root.classList.add(`font-${settings.fontSize}`);

    // Screen reader
    if (settings.screenReader) {
      root.classList.add('screen-reader-mode');
    } else {
      root.classList.remove('screen-reader-mode');
    }

    // Keyboard navigation
    if (settings.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }

    // Save settings
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => {
    setSettings({
      highContrast: false,
      reducedMotion: false,
      fontSize: 'medium',
      screenReader: false,
      keyboardNavigation: true
    });
  };

  return (
    <>
      {children}
      
      {enableSettings && (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="bg-slate-800 text-white p-3 rounded-full shadow-lg hover:bg-slate-700 transition-colors"
            aria-label="Accessibility Settings"
          >
            <Eye className="w-5 h-5" />
          </button>

          {showSettings && (
            <div className="absolute bottom-16 right-0 bg-slate-800 rounded-lg shadow-xl p-6 w-80">
              <h3 className="text-lg font-semibold text-white mb-4">Accessibility Settings</h3>
              
              <div className="space-y-4">
                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <label className="text-gray-300 flex items-center">
                    <Contrast className="w-4 h-4 mr-2" />
                    High Contrast
                  </label>
                  <button
                    onClick={() => updateSetting('highContrast', !settings.highContrast)}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.highContrast ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                      settings.highContrast ? 'translate-x-6' : 'translate-x-0.5'
                    }`} />
                  </button>
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between">
                  <label className="text-gray-300 flex items-center">
                    <EyeOff className="w-4 h-4 mr-2" />
                    Reduced Motion
                  </label>
                  <button
                    onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.reducedMotion ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                      settings.reducedMotion ? 'translate-x-6' : 'translate-x-0.5'
                    }`} />
                  </button>
                </div>

                {/* Font Size */}
                <div className="flex items-center justify-between">
                  <label className="text-gray-300 flex items-center">
                    <Type className="w-4 h-4 mr-2" />
                    Font Size
                  </label>
                  <select
                    value={settings.fontSize}
                    onChange={(e) => updateSetting('fontSize', e.target.value)}
                    className="bg-slate-700 text-white px-3 py-1 rounded"
                  >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>

                {/* Screen Reader */}
                <div className="flex items-center justify-between">
                  <label className="text-gray-300 flex items-center">
                    <Volume2 className="w-4 h-4 mr-2" />
                    Screen Reader
                  </label>
                  <button
                    onClick={() => updateSetting('screenReader', !settings.screenReader)}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.screenReader ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                      settings.screenReader ? 'translate-x-6' : 'translate-x-0.5'
                    }`} />
                  </button>
                </div>

                {/* Keyboard Navigation */}
                <div className="flex items-center justify-between">
                  <label className="text-gray-300 flex items-center">
                    <Type className="w-4 h-4 mr-2" />
                    Keyboard Navigation
                  </label>
                  <button
                    onClick={() => updateSetting('keyboardNavigation', !settings.keyboardNavigation)}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.keyboardNavigation ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                      settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-0.5'
                    }`} />
                  </button>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={resetSettings}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Reset
                </button>
                <button
                  onClick={() => setShowSettings(false)}
                  className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default EnhancedAccessibility;

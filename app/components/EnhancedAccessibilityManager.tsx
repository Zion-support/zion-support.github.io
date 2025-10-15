import React, { useEffect, useState } from 'react';
import { Accessibility, Eye, Volume2, MousePointer, Keyboard } from 'lucide-react';

interface EnhancedAccessibilityManagerProps {
  children: React.ReactNode;
}

const EnhancedAccessibilityManager: React.FC<EnhancedAccessibilityManagerProps> = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [settings, setSettings] = useState({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    focusVisible: true,
    keyboardNavigation: true,
    colorBlindSupport: false,
    textToSpeech: false
  });

  useEffect(() => {
    // Check if accessibility is enabled
    const saved = localStorage.getItem('enhanced-accessibility-manager-enabled');
    if (saved === 'true') {
      setIsEnabled(true);
      applyAccessibilitySettings();
    }
  }, []);

  const applyAccessibilitySettings = () => {
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
    
    if (settings.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }
    
    if (settings.colorBlindSupport) {
      root.classList.add('color-blind-support');
    } else {
      root.classList.remove('color-blind-support');
    }
    
    if (settings.textToSpeech) {
      root.classList.add('text-to-speech');
    } else {
      root.classList.remove('text-to-speech');
    }
  };

  const toggleAccessibility = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    localStorage.setItem('enhanced-accessibility-manager-enabled', newState.toString());
    
    if (newState) {
      applyAccessibilitySettings();
    } else {
      // Remove all accessibility classes
      const root = document.documentElement;
      root.classList.remove(
        'high-contrast', 
        'large-text', 
        'reduced-motion', 
        'focus-visible', 
        'keyboard-navigation',
        'color-blind-support',
        'text-to-speech'
      );
    }
  };

  const updateSetting = (key: keyof typeof settings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    applyAccessibilitySettings();
  };

  return (
    <>
      {children}
      
      {/* Accessibility Toggle Button */}
      <button
        onClick={toggleAccessibility}
        className="fixed bottom-4 right-4 z-50 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
        aria-label="Toggle enhanced accessibility manager"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      {isEnabled && (
        <div className="fixed bottom-20 right-4 z-50 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Enhanced Accessibility Manager
          </h3>
          
          <div className="space-y-4">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={(e) => updateSetting('highContrast', e.target.checked)}
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <Eye className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
            </label>
            
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.largeText}
                onChange={(e) => updateSetting('largeText', e.target.checked)}
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <Volume2 className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>
            </label>
            
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <MousePointer className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Reduce Motion</span>
            </label>
            
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.focusVisible}
                onChange={(e) => updateSetting('focusVisible', e.target.checked)}
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Focus Indicators</span>
            </label>
            
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.keyboardNavigation}
                onChange={(e) => updateSetting('keyboardNavigation', e.target.checked)}
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <Keyboard className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Keyboard Navigation</span>
            </label>
            
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.colorBlindSupport}
                onChange={(e) => updateSetting('colorBlindSupport', e.target.checked)}
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Color Blind Support</span>
            </label>
            
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.textToSpeech}
                onChange={(e) => updateSetting('textToSpeech', e.target.checked)}
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Text to Speech</span>
            </label>
          </div>
          
          <button
            onClick={toggleAccessibility}
            className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default EnhancedAccessibilityManager;

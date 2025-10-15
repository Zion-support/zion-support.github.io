import React, { useEffect, useState } from 'react';
import { Accessibility, Eye, Volume2, MousePointer } from 'lucide-react';

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [settings, setSettings] = useState({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    focusVisible: true,
    keyboardNavigation: true
  });

  useEffect(() => {
    // Check if accessibility is enabled
    const saved = localStorage.getItem('enhanced-accessibility-enabled');
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
  };

  const toggleAccessibility = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    localStorage.setItem('enhanced-accessibility-enabled', newState.toString());
    
    if (newState) {
      applyAccessibilitySettings();
    } else {
      // Remove all accessibility classes
      const root = document.documentElement;
      root.classList.remove('high-contrast', 'large-text', 'reduced-motion', 'focus-visible', 'keyboard-navigation');
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
        className="fixed bottom-4 right-4 z-50 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
        aria-label="Toggle enhanced accessibility features"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      {isEnabled && (
        <div className="fixed bottom-20 right-4 z-50 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Enhanced Accessibility
          </h3>
          
          <div className="space-y-4">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={(e) => updateSetting('highContrast', e.target.checked)}
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <Eye className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
            </label>
            
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.largeText}
                onChange={(e) => updateSetting('largeText', e.target.checked)}
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <Volume2 className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>
            </label>
            
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <MousePointer className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Reduce Motion</span>
            </label>
            
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.focusVisible}
                onChange={(e) => updateSetting('focusVisible', e.target.checked)}
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Focus Indicators</span>
            </label>
            
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.keyboardNavigation}
                onChange={(e) => updateSetting('keyboardNavigation', e.target.checked)}
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Keyboard Navigation</span>
            </label>
          </div>
          
          <button
            onClick={toggleAccessibility}
            className="mt-4 w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default EnhancedAccessibility;

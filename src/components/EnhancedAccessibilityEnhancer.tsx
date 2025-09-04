import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccessibilitySettings {
  largeText: boolean;
  reducedMotion: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  highContrast: boolean;
  focusVisible: boolean;
}

interface EnhancedAccessibilityEnhancerProps {
  enabled?: boolean;
  showSettings?: boolean;
}

export default function EnhancedAccessibilityEnhancer({
  enabled = true,
  showSettings = true,
}: EnhancedAccessibilityEnhancerProps) {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    largeText: false,
    reducedMotion: false,
    colorBlindness: 'none',
    highContrast: false,
    focusVisible: true,
  });

  const [isOpen, setIsOpen] = useState(false);

  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;

    // Apply large text
    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Apply reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Color blindness simulation
    if (newSettings.colorBlindness !== 'none') {
      root.classList.add(`color-blind-${newSettings.colorBlindness}`);
    } else {
      root.classList.remove('color-blind-protanopia', 'color-blind-deuteranopia', 'color-blind-tritanopia');
    }

    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Focus visible
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Load saved settings
  useEffect(() => {
    if (!enabled) return;

    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        setSettings(parsedSettings);
        applySettings(parsedSettings);
      } catch (error) {
        console.error('Failed to parse accessibility settings:', error);
      }
    }
  }, [enabled, applySettings]);

  const handleSettingChange = (key: keyof AccessibilitySettings, value: boolean | string) => {
    const updatedSettings = { ...settings, [key]: value };
    setSettings(updatedSettings);
    applySettings(updatedSettings);
  };

  if (!enabled) return null;

  return (
    <div className="accessibility-enhancer">
      {showSettings && (
        <motion.button
          className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Accessibility Settings"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
          </svg>
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && showSettings && (
          <motion.div
            className="fixed bottom-20 right-4 z-40 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-sm"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Accessibility Settings</h3>
            
            <div className="space-y-4">
              <label className="flex items-center justify-between">
                <span>Large Text</span>
                <input
                  type="checkbox"
                  checked={settings.largeText}
                  onChange={(e) => handleSettingChange('largeText', e.target.checked)}
                  className="rounded"
                />
              </label>

              <label className="flex items-center justify-between">
                <span>Reduced Motion</span>
                <input
                  type="checkbox"
                  checked={settings.reducedMotion}
                  onChange={(e) => handleSettingChange('reducedMotion', e.target.checked)}
                  className="rounded"
                />
              </label>

              <label className="flex items-center justify-between">
                <span>High Contrast</span>
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={(e) => handleSettingChange('highContrast', e.target.checked)}
                  className="rounded"
                />
              </label>

              <div>
                <label className="block text-sm font-medium mb-2">Color Blindness</label>
                <select
                  value={settings.colorBlindness}
                  onChange={(e) => handleSettingChange('colorBlindness', e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="none">None</option>
                  <option value="protanopia">Protanopia</option>
                  <option value="deuteranopia">Deuteranopia</option>
                  <option value="tritanopia">Tritanopia</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
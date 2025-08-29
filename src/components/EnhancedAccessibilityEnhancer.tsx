import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  ZoomIn, 
  ZoomOut,
  Palette,
  Settings,
  X,
  Accessibility,
  Braille,
  Headphones
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  colorBlind: boolean;
  dyslexia: boolean;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
}

interface Props {
  enabled?: boolean;
  showControls?: boolean;
}

export default function EnhancedAccessibilityEnhancer({ enabled = true, showControls = true }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    colorBlind: false,
    dyslexia: false,
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 0
  });

  // Apply accessibility settings to document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--bg-color', '#000000');
      root.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
      root.style.removeProperty('--accent-color');
    }

    // Large text
    if (newSettings.largeText) {
      root.style.setProperty('--base-font-size', '20px');
    } else {
      root.style.setProperty('--base-font-size', '16px');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.01ms');
      root.style.setProperty('--transition-duration', '0.01ms');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }

    // Font size
    root.style.setProperty('--font-size', `${newSettings.fontSize}px`);
    root.style.setProperty('--line-height', newSettings.lineHeight.toString());
    root.style.setProperty('--letter-spacing', `${newSettings.letterSpacing}px`);

    // Color blind support
    if (newSettings.colorBlind) {
      root.style.setProperty('--color-blind-mode', 'true');
    } else {
      root.style.removeProperty('--color-blind-mode');
    }

    // Dyslexia support
    if (newSettings.dyslexia) {
      root.style.setProperty('--dyslexia-font', 'OpenDyslexic, Arial, sans-serif');
      root.style.setProperty('--dyslexia-spacing', '0.35em');
    } else {
      root.style.removeProperty('--dyslexia-font');
      root.style.removeProperty('--dyslexia-spacing');
    }

    // Screen reader announcements
    if (newSettings.screenReader) {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      document.body.appendChild(announcement);
    }
  }, []);

  // Update settings and apply
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, [settings, applySettings]);

  // Load saved settings
  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings(parsed);
        applySettings(parsed);
      } catch (error) {
        console.error('Failed to load accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Apply settings on mount
  useEffect(() => {
    if (enabled) {
      applySettings(settings);
    }
  }, [enabled, settings, applySettings]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ctrl + Alt + A to toggle accessibility panel
      if (e.ctrlKey && e.altKey && e.key === 'a') {
        e.preventDefault();
        setIsVisible(!isVisible);
      }
      
      // Ctrl + Alt + H for high contrast
      if (e.ctrlKey && e.altKey && e.key === 'h') {
        e.preventDefault();
        updateSetting('highContrast', !settings.highContrast);
      }
      
      // Ctrl + Alt + L for large text
      if (e.ctrlKey && e.altKey && e.key === 'l') {
        e.preventDefault();
        updateSetting('largeText', !settings.largeText);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isVisible, settings, updateSetting]);

  if (!enabled) return null;

  if (!isVisible) {
    return (
      <motion.button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-20 right-4 z-50 p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Accessibility Settings (Ctrl+Alt+A)"
        aria-label="Open accessibility settings"
      >
        <Accessibility className="w-6 h-6 text-white" />
      </motion.button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        className="fixed top-4 right-4 z-50 w-96 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 p-6 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <Accessibility className="w-6 h-6 text-purple-500" />
            Accessibility Settings
          </h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            aria-label="Close accessibility settings"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Visual Enhancements */}
          <div>
            <h4 className="text-lg font-medium text-gray-700 mb-3 flex items-center gap-2">
              <Eye className="w-5 h-5 text-blue-500" />
              Visual Enhancements
            </h4>
            
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={(e) => updateSetting('highContrast', e.target.checked)}
                  className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                />
                <span className="text-sm text-gray-700">High Contrast Mode</span>
                <span className="text-xs text-gray-500">(Ctrl+Alt+H)</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.largeText}
                  onChange={(e) => updateSetting('largeText', e.target.checked)}
                  className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                />
                <span className="text-sm text-gray-700">Large Text</span>
                <span className="text-xs text-gray-500">(Ctrl+Alt+L)</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.colorBlind}
                  onChange={(e) => updateSetting('colorBlind', e.target.checked)}
                  className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                />
                <span className="text-sm text-gray-700">Color Blind Support</span>
              </label>
            </div>
          </div>

          {/* Typography */}
          <div>
            <h4 className="text-lg font-medium text-gray-700 mb-3 flex items-center gap-2">
              <Type className="w-5 h-5 text-green-500" />
              Typography
            </h4>
            
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.dyslexia}
                  onChange={(e) => updateSetting('dyslexia', e.target.checked)}
                  className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                />
                <span className="text-sm text-gray-700">Dyslexia-Friendly Font</span>
              </label>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Font Size: {settings.fontSize}px</label>
                <input
                  type="range"
                  min="12"
                  max="24"
                  value={settings.fontSize}
                  onChange={(e) => updateSetting('fontSize', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Line Height: {settings.lineHeight}</label>
                <input
                  type="range"
                  min="1.2"
                  max="2.0"
                  step="0.1"
                  value={settings.lineHeight}
                  onChange={(e) => updateSetting('lineHeight', parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </div>
          </div>

          {/* Motion & Audio */}
          <div>
            <h4 className="text-lg font-medium text-gray-700 mb-3 flex items-center gap-2">
              <Volume2 className="w-5 h-5 text-orange-500" />
              Motion & Audio
            </h4>
            
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.reducedMotion}
                  onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                  className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                />
                <span className="text-sm text-gray-700">Reduce Motion</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.screenReader}
                  onChange={(e) => updateSetting('screenReader', e.target.checked)}
                  className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                />
                <span className="text-sm text-gray-700">Screen Reader Support</span>
              </label>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h4 className="text-lg font-medium text-gray-700 mb-3 flex items-center gap-2">
              <Settings className="w-5 h-5 text-gray-500" />
              Quick Actions
            </h4>
            
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  updateSetting('highContrast', !settings.highContrast);
                  updateSetting('largeText', !settings.largeText);
                }}
                className="px-3 py-2 text-sm bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors"
              >
                Toggle High Visibility
              </button>
              
              <button
                onClick={() => {
                  updateSetting('reducedMotion', !settings.reducedMotion);
                  updateSetting('screenReader', !settings.screenReader);
                }}
                className="px-3 py-2 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
              >
                Toggle Assistive Mode
              </button>
            </div>
          </div>

          {/* Keyboard Shortcuts Help */}
          <div className="pt-4 border-t border-gray-200">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Keyboard Shortcuts</h4>
            <div className="text-xs text-gray-600 space-y-1">
              <div><kbd className="bg-gray-100 px-1 py-0.5 rounded">Ctrl + Alt + A</kbd> Toggle panel</div>
              <div><kbd className="bg-gray-100 px-1 py-0.5 rounded">Ctrl + Alt + H</kbd> High contrast</div>
              <div><kbd className="bg-gray-100 px-1 py-0.5 rounded">Ctrl + Alt + L</kbd> Large text</div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
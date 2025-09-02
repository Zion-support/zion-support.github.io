import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  ZoomIn,
  ZoomOut,
  Contrast,
  Type,
  MousePointer,
  Keyboard,
  Monitor,
  Smartphone,
  Accessibility,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info,
  Sun,
  Moon,
  Palette,
  RotateCcw,
  Save,
  Download,
  Upload
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  colorBlindness: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
  lineSpacing: 'tight' | 'normal' | 'loose';
  cursorSize: 'small' | 'medium' | 'large';
  darkMode: boolean;
  autoPlay: boolean;
  soundEffects: boolean;
  voiceGuidance: boolean;
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showPanel?: boolean;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  theme?: 'light' | 'dark' | 'auto';
  autoSave?: boolean;
  showTooltips?: boolean;
}

const defaultSettings: AccessibilitySettings = {
  highContrast: false,
  largeText: false,
  reducedMotion: false,
  screenReader: false,
  keyboardNavigation: true,
  focusIndicators: true,
  colorBlindness: 'normal',
  fontSize: 'medium',
  lineSpacing: 'normal',
  cursorSize: 'medium',
  darkMode: false,
  autoPlay: false,
  soundEffects: true,
  voiceGuidance: false
};

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showPanel = false,
  position = 'top-right',
  theme = 'auto',
  autoSave = true,
  showTooltips = true
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const [isVisible, setIsVisible] = useState(showPanel);
  const [isExpanded, setIsExpanded] = useState(false);
  const [savedSettings, setSavedSettings] = useState<AccessibilitySettings[]>([]);
  const [activeProfile, setActiveProfile] = useState<string>('default');

  // Load settings from localStorage on mount
  useEffect(() => {
    if (!enabled) return;

    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        const parsedSettings = JSON.parse(saved);
        setSettings({ ...defaultSettings, ...parsedSettings });
        applySettings({ ...defaultSettings, ...parsedSettings });
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }

    // Check for system preferences
    if (window.matchMedia) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;

      setSettings(prev => ({
        ...prev,
        reducedMotion: prefersReducedMotion,
        darkMode: prefersDarkMode,
        highContrast: prefersHighContrast
      }));
    }
  }, [enabled]);

  // Apply settings to the document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    const body = document.body;

    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text
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

    // Screen reader
    if (newSettings.screenReader) {
      root.classList.add('screen-reader-mode');
    } else {
      root.classList.remove('screen-reader-mode');
    }

    // Keyboard navigation
    if (newSettings.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }

    // Focus indicators
    if (newSettings.focusIndicators) {
      root.classList.add('focus-indicators');
    } else {
      root.classList.remove('focus-indicators');
    }

    // Color blindness
    root.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
    if (newSettings.colorBlindness !== 'normal') {
      root.classList.add(newSettings.colorBlindness);
    }

    // Font size
    root.classList.remove('font-small', 'font-medium', 'font-large', 'font-xlarge');
    root.classList.add(`font-${newSettings.fontSize}`);

    // Line spacing
    root.classList.remove('line-tight', 'line-normal', 'line-loose');
    root.classList.add(`line-${newSettings.lineSpacing}`);

    // Cursor size
    root.classList.remove('cursor-small', 'cursor-medium', 'cursor-large');
    root.classList.add(`cursor-${newSettings.cursorSize}`);

    // Dark mode
    if (newSettings.darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Auto play
    if (!newSettings.autoPlay) {
      const videos = document.querySelectorAll('video');
      const audios = document.querySelectorAll('audio');
      videos.forEach(video => {
        video.setAttribute('autoplay', 'false');
        video.setAttribute('muted', 'true');
      });
      audios.forEach(audio => {
        audio.setAttribute('autoplay', 'false');
      });
    }

    // Apply CSS custom properties
    root.style.setProperty('--font-size-multiplier', getFontSizeMultiplier(newSettings.fontSize));
    root.style.setProperty('--line-height-multiplier', getLineHeightMultiplier(newSettings.lineSpacing));
    root.style.setProperty('--cursor-size', getCursorSize(newSettings.cursorSize));
  }, []);

  const getFontSizeMultiplier = (size: string): string => {
    switch (size) {
      case 'small': return '0.875';
      case 'medium': return '1';
      case 'large': return '1.125';
      case 'xlarge': return '1.25';
      default: return '1';
    }
  };

  const getLineHeightMultiplier = (spacing: string): string => {
    switch (spacing) {
      case 'tight': return '1.2';
      case 'normal': return '1.5';
      case 'loose': return '1.8';
      default: return '1.5';
    }
  };

  const getCursorSize = (size: string): string => {
    switch (size) {
      case 'small': return '16px';
      case 'medium': return '24px';
      case 'large': return '32px';
      default: return '24px';
    }
  };

  // Update settings and apply them
  const updateSettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    applySettings(updatedSettings);

    if (autoSave) {
      localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
    }
  }, [settings, applySettings, autoSave]);

  // Save current settings as a profile
  const saveProfile = useCallback((profileName: string) => {
    const newProfile = { ...settings, name: profileName };
    const updatedProfiles = [...savedSettings, newProfile];
    setSavedSettings(updatedProfiles);
    localStorage.setItem('accessibility-profiles', JSON.stringify(updatedProfiles));
  }, [settings, savedSettings]);

  // Load a saved profile
  const loadProfile = useCallback((profile: AccessibilitySettings) => {
    setSettings(profile);
    applySettings(profile);
    if (autoSave) {
      localStorage.setItem('accessibility-settings', JSON.stringify(profile));
    }
  }, [applySettings, autoSave]);

  // Reset to default settings
  const resetSettings = useCallback(() => {
    setSettings(defaultSettings);
    applySettings(defaultSettings);
    if (autoSave) {
      localStorage.setItem('accessibility-settings', JSON.stringify(defaultSettings));
    }
  }, [applySettings, autoSave]);

  // Export settings
  const exportSettings = useCallback(() => {
    const dataStr = JSON.stringify(settings, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'accessibility-settings.json';
    link.click();
    URL.revokeObjectURL(url);
  }, [settings]);

  // Import settings
  const importSettings = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedSettings = JSON.parse(e.target?.result as string);
        setSettings(importedSettings);
        applySettings(importedSettings);
        if (autoSave) {
          localStorage.setItem('accessibility-settings', JSON.stringify(importedSettings));
        }
      } catch (error) {
        console.error('Failed to import settings:', error);
      }
    };
    reader.readAsText(file);
  }, [applySettings, autoSave]);

  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4'
  };

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsVisible(!isVisible)}
        className={`fixed ${positionClasses[position]} z-50 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors`}
        aria-label="Open accessibility settings"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            className={`fixed ${positionClasses[position]} z-40 mt-16`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 w-80 max-h-96 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <Accessibility className="w-5 h-5 text-blue-500" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Accessibility</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                    aria-label="Toggle expanded view"
                  >
                    <Settings className="w-4 h-4 text-gray-500" />
                  </button>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                    aria-label="Close accessibility panel"
                  >
                    <X className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
                {/* Quick Settings */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">High Contrast</span>
                    <button
                      onClick={() => updateSettings({ highContrast: !settings.highContrast })}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.highContrast ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Large Text</span>
                    <button
                      onClick={() => updateSettings({ largeText: !settings.largeText })}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.largeText ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.largeText ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Reduced Motion</span>
                    <button
                      onClick={() => updateSettings({ reducedMotion: !settings.reducedMotion })}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Dark Mode</span>
                    <button
                      onClick={() => updateSettings({ darkMode: !settings.darkMode })}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.darkMode ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.darkMode ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Expanded Settings */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                    >
                      {/* Font Size */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Font Size
                        </label>
                        <select
                          value={settings.fontSize}
                          onChange={(e) => updateSettings({ fontSize: e.target.value as any })}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        >
                          <option value="small">Small</option>
                          <option value="medium">Medium</option>
                          <option value="large">Large</option>
                          <option value="xlarge">Extra Large</option>
                        </select>
                      </div>

                      {/* Line Spacing */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Line Spacing
                        </label>
                        <select
                          value={settings.lineSpacing}
                          onChange={(e) => updateSettings({ lineSpacing: e.target.value as any })}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        >
                          <option value="tight">Tight</option>
                          <option value="normal">Normal</option>
                          <option value="loose">Loose</option>
                        </select>
                      </div>

                      {/* Color Blindness */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Color Blindness Support
                        </label>
                        <select
                          value={settings.colorBlindness}
                          onChange={(e) => updateSettings({ colorBlindness: e.target.value as any })}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        >
                          <option value="normal">Normal</option>
                          <option value="protanopia">Protanopia</option>
                          <option value="deuteranopia">Deuteranopia</option>
                          <option value="tritanopia">Tritanopia</option>
                        </select>
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-2">
                        <button
                          onClick={resetSettings}
                          className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md transition-colors"
                        >
                          <RotateCcw className="w-4 h-4" />
                          <span>Reset</span>
                        </button>
                        <button
                          onClick={exportSettings}
                          className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 text-sm bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300 rounded-md transition-colors"
                        >
                          <Download className="w-4 h-4" />
                          <span>Export</span>
                        </button>
                      </div>

                      <div className="relative">
                        <input
                          type="file"
                          accept=".json"
                          onChange={importSettings}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <button className="w-full flex items-center justify-center space-x-2 px-3 py-2 text-sm bg-green-100 dark:bg-green-900 hover:bg-green-200 dark:hover:bg-green-800 text-green-700 dark:text-green-300 rounded-md transition-colors">
                          <Upload className="w-4 h-4" />
                          <span>Import Settings</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS Styles */}
      <style jsx global>{`
        .high-contrast {
          filter: contrast(150%) brightness(120%);
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
          font-family: monospace;
        }
        
        .keyboard-navigation *:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
        
        .focus-indicators *:focus {
          box-shadow: 0 0 0 2px #3b82f6;
        }
        
        .protanopia {
          filter: hue-rotate(90deg) saturate(1.5);
        }
        
        .deuteranopia {
          filter: hue-rotate(180deg) saturate(1.5);
        }
        
        .tritanopia {
          filter: hue-rotate(270deg) saturate(1.5);
        }
        
        .font-small {
          font-size: calc(0.875rem * var(--font-size-multiplier, 1));
        }
        
        .font-medium {
          font-size: calc(1rem * var(--font-size-multiplier, 1));
        }
        
        .font-large {
          font-size: calc(1.125rem * var(--font-size-multiplier, 1));
        }
        
        .font-xlarge {
          font-size: calc(1.25rem * var(--font-size-multiplier, 1));
        }
        
        .line-tight {
          line-height: calc(1.2 * var(--line-height-multiplier, 1));
        }
        
        .line-normal {
          line-height: calc(1.5 * var(--line-height-multiplier, 1));
        }
        
        .line-loose {
          line-height: calc(1.8 * var(--line-height-multiplier, 1));
        }
        
        .cursor-small {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="black"/></svg>'), auto;
        }
        
        .cursor-medium {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="black"/></svg>'), auto;
        }
        
        .cursor-large {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="black"/></svg>'), auto;
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;

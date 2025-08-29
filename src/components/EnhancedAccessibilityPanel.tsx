import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  MousePointer,
  Keyboard,
  X,
  Settings,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlindMode: boolean;
}

export const EnhancedAccessibilityPanel: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: false,
    colorBlindMode: false
  });

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setSettings(parsed);
      applySettings(parsed);
    }
  }, []);

  // Apply accessibility settings to the document
  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
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
    
    // Focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
    
    // Color blind mode
    if (newSettings.colorBlindMode) {
      root.classList.add('color-blind-mode');
    } else {
      root.classList.remove('color-blind-mode');
    }
  };

  // Update settings and apply them
  const updateSetting = (key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    applySettings(newSettings);
  };

  // Keyboard navigation support
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key) {
        case 'h':
        case 'H':
          // Navigate to header
          const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
          if (headers.length > 0) {
            (headers[0] as HTMLElement).focus();
          }
          break;
        case 'm':
        case 'M':
          // Navigate to main content
          const main = document.querySelector('main');
          if (main) {
            (main as HTMLElement).focus();
          }
          break;
        case 'n':
        case 'N':
          // Navigate to navigation
          const nav = document.querySelector('nav');
          if (nav) {
            (nav as HTMLElement).focus();
          }
          break;
        case 's':
        case 'S':
          // Skip to content
          const skipLink = document.querySelector('[data-skip-link]');
          if (skipLink) {
            (skipLink as HTMLElement).focus();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Screen reader announcements
  const announceToScreenReader = (message: string) => {
    if (settings.screenReader) {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
  };

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    const newValue = !settings[key];
    updateSetting(key, newValue);
    
    const settingNames = {
      highContrast: 'High contrast',
      largeText: 'Large text',
      reducedMotion: 'Reduced motion',
      screenReader: 'Screen reader support',
      keyboardNavigation: 'Keyboard navigation',
      focusIndicator: 'Focus indicator',
      colorBlindMode: 'Color blind mode'
    };
    
    announceToScreenReader(`${settingNames[key]} ${newValue ? 'enabled' : 'disabled'}`);
  };

  const getAccessibilityScore = () => {
    const enabledCount = Object.values(settings).filter(Boolean).length;
    const totalCount = Object.keys(settings).length;
    return Math.round((enabledCount / totalCount) * 100);
  };

  const score = getAccessibilityScore();
  const scoreColor = score >= 80 ? 'text-green-500' : score >= 60 ? 'text-yellow-500' : 'text-red-500';
  const scoreIcon = score >= 80 ? CheckCircle : score >= 60 ? AlertTriangle : AlertTriangle;

  return (
    <>
      {/* Floating Accessibility Button */}
      <motion.button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 z-50 p-3 bg-slate-800 hover:bg-slate-700 rounded-full shadow-lg transition-all duration-300 border border-slate-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open accessibility panel"
      >
        <Accessibility className="w-5 h-5 text-cyan-400" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="fixed left-0 top-0 h-full w-80 bg-slate-900 border-r border-slate-700 shadow-2xl z-50"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700">
              <div className="flex items-center space-x-2">
                <Accessibility className="w-5 h-5 text-cyan-400" />
                <h2 className="text-lg font-semibold text-white">Accessibility</h2>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-slate-700 rounded transition-colors"
                aria-label="Close accessibility panel"
              >
                <X className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Accessibility Score */}
            <div className="p-4 border-b border-slate-700">
              <div className="text-center">
                <div className={`text-2xl font-bold ${scoreColor}`}>{score}%</div>
                <div className="flex items-center justify-center space-x-2 mt-1">
                  {React.createElement(scoreIcon, { className: `w-4 h-4 ${scoreColor}` })}
                  <span className="text-sm text-slate-300">Accessibility Score</span>
                </div>
              </div>
            </div>

            {/* Settings */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Visual Settings */}
              <div>
                <h3 className="text-sm font-semibold text-slate-300 mb-3 flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  Visual Settings
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.highContrast}
                      onChange={() => toggleSetting('highContrast')}
                      className="w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500"
                    />
                    <span className="text-sm text-white">High Contrast</span>
                  </label>
                  
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.largeText}
                      onChange={() => toggleSetting('largeText')}
                      className="w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500"
                    />
                    <span className="text-sm text-white">Large Text</span>
                  </label>
                  
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.colorBlindMode}
                      onChange={() => toggleSetting('colorBlindMode')}
                      className="w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500"
                    />
                    <span className="text-sm text-white">Color Blind Mode</span>
                  </label>
                </div>
              </div>

              {/* Interaction Settings */}
              <div>
                <h3 className="text-sm font-semibold text-slate-300 mb-3 flex items-center">
                  <MousePointer className="w-4 h-4 mr-2" />
                  Interaction Settings
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.reducedMotion}
                      onChange={() => toggleSetting('reducedMotion')}
                      className="w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500"
                    />
                    <span className="text-sm text-white">Reduced Motion</span>
                  </label>
                  
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.focusIndicator}
                      onChange={() => toggleSetting('focusIndicator')}
                      className="w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500"
                    />
                    <span className="text-sm text-white">Focus Indicator</span>
                  </label>
                </div>
              </div>

              {/* Navigation Settings */}
              <div>
                <h3 className="text-sm font-semibold text-slate-300 mb-3 flex items-center">
                  <Keyboard className="w-4 h-4 mr-2" />
                  Navigation Settings
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.keyboardNavigation}
                      onChange={() => toggleSetting('keyboardNavigation')}
                      className="w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500"
                    />
                    <span className="text-sm text-white">Keyboard Navigation</span>
                  </label>
                  
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.screenReader}
                      onChange={() => toggleSetting('screenReader')}
                      className="w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500"
                    />
                    <span className="text-sm text-white">Screen Reader Support</span>
                  </label>
                </div>
              </div>

              {/* Keyboard Shortcuts Help */}
              {settings.keyboardNavigation && (
                <div className="mt-6 p-3 bg-slate-800 rounded-lg">
                  <h4 className="text-sm font-semibold text-slate-300 mb-2">Keyboard Shortcuts</h4>
                  <div className="text-xs text-slate-400 space-y-1">
                    <div><kbd className="px-1 py-0.5 bg-slate-700 rounded">H</kbd> - Go to header</div>
                    <div><kbd className="px-1 py-0.5 bg-slate-700 rounded">M</kbd> - Go to main content</div>
                    <div><kbd className="px-1 py-0.5 bg-slate-700 rounded">N</kbd> - Go to navigation</div>
                    <div><kbd className="px-1 py-0.5 bg-slate-700 rounded">S</kbd> - Skip to content</div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-700">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Settings className="w-4 h-4 text-slate-400" />
                <span className="text-sm text-slate-300">
                  {isExpanded ? 'Show Less' : 'Show More'}
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen reader only content */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Accessibility panel opened. Use tab to navigate through settings.
      </div>
    </>
  );
};
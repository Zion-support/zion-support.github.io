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
  Keyboard,
  Accessibility,
  Settings,
  X
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  colorBlind: boolean;
  dyslexia: boolean;
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showControls?: boolean;
  defaultSettings?: Partial<AccessibilitySettings>;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showControls = true,
  defaultSettings = {}
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: true,
    colorBlind: false,
    dyslexia: false,
    ...defaultSettings
  });

  const [fontSize, setFontSize] = useState(16);
  const [lineHeight, setLineHeight] = useState(1.5);
  const [letterSpacing, setLetterSpacing] = useState(0);

  // Apply accessibility settings to document
  const applyAccessibilitySettings = useCallback(() => {
    const root = document.documentElement;
    const body = document.body;

    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--bg-color', '#000000');
      root.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
      root.style.removeProperty('--accent-color');
    }

    // Large text
    if (settings.largeText) {
      root.style.setProperty('--base-font-size', '20px');
      root.style.setProperty('--heading-scale', '1.3');
    } else {
      root.style.setProperty('--base-font-size', '16px');
      root.style.setProperty('--heading-scale', '1.2');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.1s');
      root.style.setProperty('--transition-duration', '0.1s');
    } else {
      root.style.setProperty('--animation-duration', '0.3s');
      root.style.setProperty('--transition-duration', '0.3s');
    }

    // Focus indicators
    if (settings.focusIndicators) {
      root.style.setProperty('--focus-outline', '3px solid #22d3ee');
      root.style.setProperty('--focus-outline-offset', '2px');
    } else {
      root.style.setProperty('--focus-outline', 'none');
      root.style.setProperty('--focus-outline-offset', '0');
    }

    // Color blind support
    if (settings.colorBlind) {
      root.classList.add('color-blind-support');
    } else {
      root.classList.remove('color-blind-support');
    }

    // Dyslexia support
    if (settings.dyslexia) {
      root.classList.add('dyslexia-support');
      root.style.setProperty('--font-family', 'OpenDyslexic, Arial, sans-serif');
      root.style.setProperty('--line-height', '1.8');
      root.style.setProperty('--letter-spacing', '0.1em');
    } else {
      root.classList.remove('dyslexia-support');
      root.style.setProperty('--font-family', 'Inter, system-ui, sans-serif');
      root.style.setProperty('--line-height', '1.5');
      root.style.setProperty('--letter-spacing', '0');
    }

    // Apply custom font size and spacing
    root.style.setProperty('--custom-font-size', `${fontSize}px`);
    root.style.setProperty('--custom-line-height', lineHeight.toString());
    root.style.setProperty('--custom-letter-spacing', `${letterSpacing}px`);

  }, [settings, fontSize, lineHeight, letterSpacing]);

  // Apply settings when they change
  useEffect(() => {
    if (enabled) {
      applyAccessibilitySettings();
    }
  }, [enabled, applyAccessibilitySettings]);

  // Keyboard navigation support
  useEffect(() => {
    if (!enabled || !settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const { key, target } = event;
      const element = target as HTMLElement;

      // Skip if in input/textarea
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') return;

      switch (key) {
        case 'Tab':
          // Enhanced tab navigation
          const focusableElements = document.querySelectorAll(
            'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const currentIndex = Array.from(focusableElements).indexOf(element);
          
          if (event.shiftKey) {
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
            (focusableElements[prevIndex] as HTMLElement).focus();
          } else {
            const nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0;
            (focusableElements[nextIndex] as HTMLElement).focus();
          }
          event.preventDefault();
          break;

        case 'Escape':
          setIsOpen(false);
          break;

        case 'h':
        case 'H':
          // Navigate to next heading
          const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
          const currentHeadingIndex = Array.from(headings).indexOf(element);
          const nextHeading = headings[currentHeadingIndex + 1] as HTMLElement;
          if (nextHeading) nextHeading.focus();
          break;

        case 'l':
        case 'L':
          // Navigate to next link
          const links = document.querySelectorAll('a[href]');
          const currentLinkIndex = Array.from(links).indexOf(element);
          const nextLink = links[currentLinkIndex + 1] as HTMLElement;
          if (nextLink) nextLink.focus();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enabled, settings.keyboardNavigation]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!settings.screenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, [settings.screenReader]);

  // Toggle setting
  const toggleSetting = useCallback((key: keyof AccessibilitySettings) => {
    setSettings(prev => {
      const newSettings = { ...prev, [key]: !prev[key] };
      
      // Announce changes to screen reader
      const settingName = key.replace(/([A-Z])/g, ' $1').toLowerCase();
      const status = newSettings[key] ? 'enabled' : 'disabled';
      announceToScreenReader(`${settingName} ${status}`);
      
      return newSettings;
    });
  }, [announceToScreenReader]);

  // Reset to defaults
  const resetToDefaults = useCallback(() => {
    setSettings({
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicators: true,
      colorBlind: false,
      dyslexia: false
    });
    setFontSize(16);
    setLineHeight(1.5);
    setLetterSpacing(0);
    announceToScreenReader('Accessibility settings reset to defaults');
  }, [announceToScreenReader]);

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Toggle Button */}
      {showControls && (
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 right-4 z-50 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
          aria-label="Accessibility settings"
          aria-expanded={isOpen}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Accessibility className="w-6 h-6" />
        </motion.button>
      )}

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="absolute top-20 right-4 w-96 max-h-[80vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Accessibility className="w-5 h-5 mr-2" />
                  Accessibility Settings
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
                {/* Visual Settings */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Visual</h3>
                  
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.highContrast}
                        onChange={() => toggleSetting('highContrast')}
                        className="w-4 h-4 text-cyan-500 rounded focus:ring-cyan-400"
                      />
                      <Contrast className="w-4 h-4" />
                      <span>High Contrast</span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.largeText}
                        onChange={() => toggleSetting('largeText')}
                        className="w-4 h-4 text-cyan-500 rounded focus:ring-cyan-400"
                      />
                      <Type className="w-4 h-4" />
                      <span>Large Text</span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.reducedMotion}
                        onChange={() => toggleSetting('reducedMotion')}
                        className="w-4 h-4 text-cyan-500 rounded focus:ring-cyan-400"
                      />
                      <Eye className="w-4 h-4" />
                      <span>Reduced Motion</span>
                    </label>
                  </div>
                </div>

                {/* Navigation Settings */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Navigation</h3>
                  
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.keyboardNavigation}
                        onChange={() => toggleSetting('keyboardNavigation')}
                        className="w-4 h-4 text-cyan-500 rounded focus:ring-cyan-400"
                      />
                      <Keyboard className="w-4 h-4" />
                      <span>Enhanced Keyboard Navigation</span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.focusIndicators}
                        onChange={() => toggleSetting('focusIndicators')}
                        className="w-4 h-4 text-cyan-500 rounded focus:ring-cyan-400"
                      />
                      <Eye className="w-4 h-4" />
                      <span>Focus Indicators</span>
                    </label>
                  </div>
                </div>

                {/* Font Customization */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Font & Text</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Font Size: {fontSize}px
                      </label>
                      <input
                        type="range"
                        min="12"
                        max="24"
                        value={fontSize}
                        onChange={(e) => setFontSize(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Line Height: {lineHeight}
                      </label>
                      <input
                        type="range"
                        min="1.2"
                        max="2.5"
                        step="0.1"
                        value={lineHeight}
                        onChange={(e) => setLineHeight(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.dyslexia}
                        onChange={() => toggleSetting('dyslexia')}
                        className="w-4 h-4 text-cyan-500 rounded focus:ring-cyan-400"
                      />
                      <Type className="w-4 h-4" />
                      <span>Dyslexia-Friendly Font</span>
                    </label>
                  </div>
                </div>

                {/* Reset Button */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={resetToDefaults}
                    className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    Reset to Defaults
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Only Announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true" />
    </>
  );
};
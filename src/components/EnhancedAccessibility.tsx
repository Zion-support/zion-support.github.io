import React, { useState, useEffect, useRef } from 'react';
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
  HelpCircle,
  X
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
}

export function EnhancedAccessibility() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 0
  });
  const [activeTab, setActiveTab] = useState('visual');
  const [showHelp, setShowHelp] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('zion-accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Apply initial settings
    applyAccessibilitySettings(settings);
  }, []);

  useEffect(() => {
    // Save settings to localStorage
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(settings));
    
    // Apply settings
    applyAccessibilitySettings(settings);
  }, [settings]);

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Large text
    if (newSettings.largeText) {
      root.style.fontSize = '18px';
    } else {
      root.style.fontSize = '16px';
    }
    
    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
    } else {
      root.style.setProperty('--reduced-motion', 'no-preference');
    }
    
    // Focus indicator
    if (newSettings.focusIndicator) {
      root.style.setProperty('--focus-visible', 'auto');
    } else {
      root.style.setProperty('--focus-visible', 'none');
    }
    
    // Custom font size
    root.style.setProperty('--font-size', `${newSettings.fontSize}px`);
    root.style.setProperty('--line-height', newSettings.lineHeight.toString());
    root.style.setProperty('--letter-spacing', `${newSettings.letterSpacing}px`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
    
    if (e.key === 'Tab' && !e.shiftKey) {
      // Handle tab navigation within modal
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements && focusableElements.length > 0) {
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  };

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const updateNumericSetting = (key: keyof AccessibilitySettings, value: number) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: true,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: 0
    };
    setSettings(defaultSettings);
  };

  const accessibilityTabs = [
    { id: 'visual', label: 'Visual', icon: Eye },
    { id: 'text', label: 'Text', icon: Type },
    { id: 'navigation', label: 'Navigation', icon: Keyboard },
    { id: 'audio', label: 'Audio', icon: Volume2 }
  ];

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-50 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-300 focus:ring-opacity-50"
        aria-label="Open accessibility settings"
        title="Accessibility Settings"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Accessibility Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
              onKeyDown={handleKeyDown}
              role="dialog"
              aria-labelledby="accessibility-title"
              aria-describedby="accessibility-description"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-700">
                <div>
                  <h2 id="accessibility-title" className="text-2xl font-bold text-gray-900 dark:text-white">
                    Accessibility Settings
                  </h2>
                  <p id="accessibility-description" className="text-sm text-gray-600 dark:text-slate-400 mt-1">
                    Customize your experience for better accessibility
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowHelp(!showHelp)}
                    className="p-2 text-gray-500 hover:text-gray-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
                    aria-label="Show help"
                  >
                    <HelpCircle className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-500 hover:text-gray-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
                    aria-label="Close accessibility settings"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Help Tooltip */}
              <AnimatePresence>
                {showHelp && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-blue-50 dark:bg-blue-900/20 p-4 border-b border-blue-200 dark:border-blue-800"
                  >
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      💡 Use these settings to customize your experience. All changes are saved automatically and will persist across sessions.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200 dark:border-slate-700">
                {accessibilityTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400'
                        : 'text-gray-500 hover:text-gray-700 dark:text-slate-400 dark:hover:text-slate-200'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                {/* Visual Tab */}
                {activeTab === 'visual' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">High Contrast</h3>
                        <p className="text-sm text-gray-600 dark:text-slate-400">Increase contrast for better visibility</p>
                      </div>
                      <button
                        onClick={() => toggleSetting('highContrast')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.highContrast ? 'bg-blue-600' : 'bg-gray-200 dark:bg-slate-600'
                        }`}
                        role="switch"
                        aria-checked={settings.highContrast}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Large Text</h3>
                        <p className="text-sm text-gray-600 dark:text-slate-400">Increase text size for better readability</p>
                      </div>
                      <button
                        onClick={() => toggleSetting('largeText')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.largeText ? 'bg-blue-600' : 'bg-gray-200 dark:bg-slate-600'
                        }`}
                        role="switch"
                        aria-checked={settings.largeText}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.largeText ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Reduced Motion</h3>
                        <p className="text-sm text-gray-600 dark:text-slate-400">Reduce animations and motion effects</p>
                      </div>
                      <button
                        onClick={() => toggleSetting('reducedMotion')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-200 dark:bg-slate-600'
                        }`}
                        role="switch"
                        aria-checked={settings.reducedMotion}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Focus Indicator</h3>
                        <p className="text-sm text-gray-600 dark:text-slate-400">Show focus indicators for keyboard navigation</p>
                      </div>
                      <button
                        onClick={() => toggleSetting('focusIndicator')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.focusIndicator ? 'bg-blue-600' : 'bg-gray-200 dark:bg-slate-600'
                        }`}
                        role="switch"
                        aria-checked={settings.focusIndicator}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                )}

                {/* Text Tab */}
                {activeTab === 'text' && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                        Font Size: {settings.fontSize}px
                      </label>
                      <input
                        type="range"
                        min="12"
                        max="24"
                        value={settings.fontSize}
                        onChange={(e) => updateNumericSetting('fontSize', parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                        Line Height: {settings.lineHeight}
                      </label>
                      <input
                        type="range"
                        min="1.2"
                        max="2.0"
                        step="0.1"
                        value={settings.lineHeight}
                        onChange={(e) => updateNumericSetting('lineHeight', parseFloat(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                        Letter Spacing: {settings.letterSpacing}px
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="2"
                        step="0.1"
                        value={settings.letterSpacing}
                        onChange={(e) => updateNumericSetting('letterSpacing', parseFloat(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>
                  </div>
                )}

                {/* Navigation Tab */}
                {activeTab === 'navigation' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Keyboard Navigation</h3>
                        <p className="text-sm text-gray-600 dark:text-slate-400">Enable enhanced keyboard navigation</p>
                      </div>
                      <button
                        onClick={() => toggleSetting('keyboardNavigation')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.keyboardNavigation ? 'bg-blue-600' : 'bg-gray-200 dark:bg-slate-600'
                        }`}
                        role="switch"
                        aria-checked={settings.keyboardNavigation}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Keyboard Shortcuts</h4>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-slate-400">
                        <div><kbd className="px-2 py-1 bg-gray-200 dark:bg-slate-600 rounded text-xs">Tab</kbd> Navigate between elements</div>
                        <div><kbd className="px-2 py-1 bg-gray-200 dark:bg-slate-600 rounded text-xs">Enter</kbd> Activate buttons/links</div>
                        <div><kbd className="px-2 py-1 bg-gray-200 dark:bg-slate-600 rounded text-xs">Space</kbd> Toggle checkboxes</div>
                        <div><kbd className="px-2 py-1 bg-gray-200 dark:bg-slate-600 rounded text-xs">Escape</kbd> Close modals</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Audio Tab */}
                {activeTab === 'audio' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Screen Reader</h3>
                        <p className="text-sm text-gray-600 dark:text-slate-400">Enable screen reader optimizations</p>
                      </div>
                      <button
                        onClick={() => toggleSetting('screenReader')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.screenReader ? 'bg-blue-600' : 'bg-gray-200 dark:bg-slate-600'
                        }`}
                        role="switch"
                        aria-checked={settings.screenReader}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Audio Features</h4>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-slate-400">
                        <div>• Enhanced ARIA labels for screen readers</div>
                        <div>• Audio descriptions for visual content</div>
                        <div>• Keyboard navigation announcements</div>
                        <div>• Focus management audio cues</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between p-6 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50">
                <button
                  onClick={resetSettings}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Reset to Defaults
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Apply Settings
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global CSS Variables for Accessibility */}
      <style jsx global>{`
        :root {
          --font-size: ${settings.fontSize}px;
          --line-height: ${settings.lineHeight};
          --letter-spacing: ${settings.letterSpacing}px;
          --focus-visible: ${settings.focusIndicator ? 'auto' : 'none'};
          --reduced-motion: ${settings.reducedMotion ? 'reduce' : 'no-preference'};
        }

        .high-contrast {
          --bg-primary: #000000;
          --bg-secondary: #ffffff;
          --text-primary: #ffffff;
          --text-secondary: #000000;
          --border-color: #ffffff;
        }

        .high-contrast * {
          background-color: var(--bg-primary) !important;
          color: var(--text-primary) !important;
          border-color: var(--border-color) !important;
        }

        .high-contrast button,
        .high-contrast input,
        .high-contrast select,
        .high-contrast textarea {
          background-color: var(--bg-secondary) !important;
          color: var(--text-secondary) !important;
          border: 2px solid var(--border-color) !important;
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </>
  );
}
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
}

interface AccessibilityEnhancerProps {
  className?: string;
  showPanel?: boolean;
  onSettingsChange?: (settings: AccessibilitySettings) => void;
}

const DEFAULT_SETTINGS: AccessibilitySettings = {
  fontSize: 16,
  highContrast: false,
  reducedMotion: false,
  screenReader: false,
  keyboardNavigation: false,
  focusIndicator: true
};

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  className = '',
  showPanel = false,
  onSettingsChange
}) => {
  const [isOpen, setIsOpen] = useState(showPanel);
  const [settings, setSettings] = useState<AccessibilitySettings>(DEFAULT_SETTINGS);
  const [activeTab, setActiveTab] = useState<'general' | 'visual' | 'navigation'>('general');

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    const savedSettings = localStorage.getItem('zion-accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings({ ...DEFAULT_SETTINGS, ...parsed });
        applySettings({ ...DEFAULT_SETTINGS, ...parsed });
      } catch (error) {
        // console.warn('Failed to parse accessibility settings:', error);
      }
    };

    // Add focus indicators for keyboard navigation
    const addFocusStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
        
        [data-skip-to-main] {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          z-index: 1000;
          transition: top 0.3s;
        }
        
        [data-skip-to-main]:focus {
          top: 6px;
        }
      `;
      document.head.appendChild(style);
    };

    // Add skip to main content link
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.setAttribute('data-skip-to-main', 'true');
      skipLink.className = 'sr-only focus:not-sr-only';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Enhance form accessibility
    const enhanceForms = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach((input, index) => {
          const inputElement = input as HTMLInputElement;
          if (!inputElement.id) {
            inputElement.id = `input-${index}`;
          }
          
          const label = form.querySelector(`label[for="${inputElement.id}"]`);
          if (!label && inputElement.placeholder) {
            const labelElement = document.createElement('label');
            labelElement.htmlFor = inputElement.id;
            labelElement.textContent = inputElement.placeholder;
            labelElement.className = 'sr-only';
            inputElement.parentNode?.insertBefore(labelElement, inputElement);
          }
        });
      });
    };

    // Add ARIA labels to interactive elements
    const addAriaLabels = () => {
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach(button => {
        const buttonElement = button as HTMLButtonElement;
        if (!buttonElement.textContent?.trim()) {
          buttonElement.setAttribute('aria-label', 'Button');
        }
      });

      const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
      links.forEach(link => {
        const linkElement = link as HTMLAnchorElement;
        if (!linkElement.textContent?.trim() && !linkElement.title) {
          linkElement.setAttribute('aria-label', 'Link');
        }
      });
    };

    // Initialize accessibility enhancements
    addFocusStyles();
    addSkipLink();
    enhanceForms();
    addAriaLabels();

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);

    // Re-run enhancements when DOM changes
    const observer = new MutationObserver(() => {
      enhanceForms();
      addAriaLabels();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      observer.disconnect();
    };
  }, []);

  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Apply font size
    root.style.setProperty('--zion-font-size-base', `${newSettings.fontSize}px`);
    root.style.setProperty('--zion-font-size-sm', `${newSettings.fontSize * 0.875}px`);
    root.style.setProperty('--zion-font-size-lg', `${newSettings.fontSize * 1.125}px`);
    root.style.setProperty('--zion-font-size-xl', `${newSettings.fontSize * 1.25}px`);
    
    // Apply high contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--zion-bg-primary', '#000000');
      root.style.setProperty('--zion-bg-secondary', '#1a1a1a');
      root.style.setProperty('--zion-text-primary', '#ffffff');
      root.style.setProperty('--zion-text-secondary', '#e5e5e5');
      root.style.setProperty('--zion-border-color', '#ffffff');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--zion-bg-primary');
      root.style.removeProperty('--zion-bg-secondary');
      root.style.removeProperty('--zion-text-primary');
      root.style.removeProperty('--zion-text-secondary');
      root.style.removeProperty('--zion-border-color');
    }
    
    // Apply reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Apply focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
    
    // Apply keyboard navigation
    if (newSettings.keyboardNavigation) {
      document.body.classList.add('keyboard-navigation');
    } else {
      document.body.classList.remove('keyboard-navigation');
    }
  }, []);

  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: unknown) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(newSettings));
    onSettingsChange?.(newSettings);
  }, [settings, applySettings, onSettingsChange]);

  const resetSettings = useCallback(() => {
    setSettings(DEFAULT_SETTINGS);
    applySettings(DEFAULT_SETTINGS);
    localStorage.removeItem('zion-accessibility-settings');
    onSettingsChange?.(DEFAULT_SETTINGS);
  }, [applySettings, onSettingsChange]);

  const increaseFontSize = useCallback(() => {
    const newSize = Math.min(settings.fontSize + 2, 24);
    updateSetting('fontSize', newSize);
  }, [settings.fontSize, updateSetting]);

  const decreaseFontSize = useCallback(() => {
    const newSize = Math.max(settings.fontSize - 2, 12);
    updateSetting('fontSize', newSize);
  }, [settings.fontSize, updateSetting]);

  const toggleHighContrast = useCallback(() => {
    updateSetting('highContrast', !settings.highContrast);
  }, [settings.highContrast, updateSetting]);

  const toggleReducedMotion = useCallback(() => {
    updateSetting('reducedMotion', !settings.reducedMotion);
  }, [settings.reducedMotion, updateSetting]);

  const toggleScreenReader = useCallback(() => {
    updateSetting('screenReader', !settings.screenReader);
  }, [settings.screenReader, updateSetting]);

  const toggleKeyboardNavigation = useCallback(() => {
    updateSetting('keyboardNavigation', !settings.keyboardNavigation);
  }, [settings.keyboardNavigation, updateSetting]);

  const toggleFocusIndicator = useCallback(() => {
    updateSetting('focusIndicator', !settings.focusIndicator);
  }, [settings.focusIndicator, updateSetting]);

  const tabs = [
    { id: 'general', label: 'General', icon: Settings },
    { id: 'visual', label: 'Visual', icon: Eye },
    { id: 'navigation', label: 'Navigation', icon: Keyboard }
  ] as const;

  return (
    <div>
      {/* Accessibility Toggle Button */}
      <button
        onClick={togglePanel}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        aria-label="Toggle accessibility options"
        title="Accessibility Options"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

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
              className="fixed bottom-24 right-6 w-96 max-h-[80vh] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <Accessibility className="w-6 h-6 text-cyan-500" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Accessibility
                  </h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-gray-200 dark:border-gray-700">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-cyan-600 border-b-2 border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20'
                          : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Content */}
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                <AnimatePresence mode="wait">
                  {activeTab === 'general' && (
                    <motion.div
                      key="general"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      {/* Font Size Control */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                          Font Size: {settings.fontSize}px
                        </label>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={decreaseFontSize}
                            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            aria-label="Decrease font size"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-cyan-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${((settings.fontSize - 12) / 12) * 100}%` }}
                            />
                          </div>
                          <button
                            onClick={increaseFontSize}
                            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            aria-label="Increase font size"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Screen Reader Support */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Volume2 className="w-5 h-5 text-gray-500" />
                          <div>
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              Screen Reader Support
                            </label>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Enhanced ARIA labels and descriptions
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={toggleScreenReader}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            settings.screenReader ? 'bg-cyan-500' : 'bg-gray-200 dark:bg-gray-700'
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
                    </motion.div>
                  )}

                  {activeTab === 'visual' && (
                    <motion.div
                      key="visual"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      {/* High Contrast */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Contrast className="w-5 h-5 text-gray-500" />
                          <div>
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              High Contrast
                            </label>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Enhanced color contrast for better visibility
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={toggleHighContrast}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            settings.highContrast ? 'bg-cyan-500' : 'bg-gray-200 dark:bg-gray-700'
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

                      {/* Reduced Motion */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <MousePointer className="w-5 h-5 text-gray-500" />
                          <div>
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              Reduced Motion
                            </label>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Minimize animations and transitions
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={toggleReducedMotion}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            settings.reducedMotion ? 'bg-cyan-500' : 'bg-gray-200 dark:bg-gray-700'
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
                    </motion.div>
                  )}

                  {activeTab === 'navigation' && (
                    <motion.div
                      key="navigation"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      {/* Keyboard Navigation */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Keyboard className="w-5 h-5 text-gray-500" />
                          <div>
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              Enhanced Keyboard Navigation
                            </label>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Improved tab order and keyboard shortcuts
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={toggleKeyboardNavigation}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            settings.keyboardNavigation ? 'bg-cyan-500' : 'bg-gray-200 dark:bg-gray-700'
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

                      {/* Focus Indicator */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Eye className="w-5 h-5 text-gray-500" />
                          <div>
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              Focus Indicators
                            </label>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Clear focus indicators for keyboard users
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={toggleFocusIndicator}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            settings.focusIndicator ? 'bg-cyan-500' : 'bg-gray-200 dark:bg-gray-700'
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
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Reset Button */}
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={resetSettings}
                    className="w-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    Reset to Defaults
                  </button>
                </div>
              </div>
              <button
                onClick={() => applySettings({ reducedMotion: !settings.reducedMotion })}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Keyboard Navigation */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Keyboard className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Keyboard Navigation</span>
              </div>
              <button
                onClick={() => applySettings({ keyboardNavigation: !settings.keyboardNavigation })}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.keyboardNavigation ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`${settings.keyboardNavigation ? 'Disable' : 'Enable'} keyboard navigation`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Focus Indicator */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Focus Indicator</span>
              </div>
              <button
                onClick={() => applySettings({ focusIndicator: !settings.focusIndicator })}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.focusIndicator ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`${settings.focusIndicator ? 'Disable' : 'Enable'} focus indicator`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              These settings are saved in your browser and will persist across sessions.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityEnhancer;>
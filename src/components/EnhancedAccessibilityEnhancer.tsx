import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, EyeOff, Volume2, VolumeX, Keyboard, MousePointer, 
  Smartphone, Monitor, Sun, Moon, Contrast, Type, 
  CheckCircle, AlertTriangle, Info, X, Settings, 
  Accessibility, ZoomIn, ZoomOut, RotateCcw
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlindFriendly: boolean;
  fontSize: number;
  zoomLevel: number;
}

interface AccessibilityEnhancerProps {
  enabled: boolean;
}

export default function EnhancedAccessibilityEnhancer({ enabled }: AccessibilityEnhancerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    colorBlindFriendly: false,
    fontSize: 16,
    zoomLevel: 100
  });

  const [activeTab, setActiveTab] = useState('general');
  const [showFocusIndicator, setShowFocusIndicator] = useState(true);

  useEffect(() => {
    if (!enabled) return;

    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
        applySettings({ ...prev, ...parsed });
      } catch (error) {
        console.error('Failed to load accessibility settings:', error);
      }
    }

    // Initialize keyboard navigation
    initializeKeyboardNavigation();
    
    // Initialize focus management
    initializeFocusManagement();

    // Apply initial settings
    applySettings(settings);
  }, [enabled]);

  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
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

    // Large text mode
    if (newSettings.largeText) {
      root.style.fontSize = '18px';
      root.style.setProperty('--heading-scale', '1.3');
    } else {
      root.style.fontSize = '16px';
      root.style.setProperty('--heading-scale', '1.0');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.01s');
      root.style.setProperty('--transition-duration', '0.01s');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }

    // Color blind friendly mode
    if (newSettings.colorBlindFriendly) {
      root.classList.add('color-blind-friendly');
    } else {
      root.classList.remove('color-blind-friendly');
    }

    // Font size adjustment
    root.style.setProperty('--base-font-size', `${newSettings.fontSize}px`);
    
    // Zoom level
    root.style.setProperty('--zoom-level', `${newSettings.zoomLevel / 100}`);

    // Save settings
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };

  const initializeKeyboardNavigation = () => {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add main content ID
    const mainContent = document.querySelector('main');
    if (mainContent && !mainContent.id) {
      mainContent.id = 'main-content';
    }

    // Keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt + A: Open accessibility menu
      if (e.altKey && e.key === 'a') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }

      // Alt + H: High contrast toggle
      if (e.altKey && e.key === 'h') {
        e.preventDefault();
        toggleSetting('highContrast');
      }

      // Alt + L: Large text toggle
      if (e.altKey && e.key === 'l') {
        e.preventDefault();
        toggleSetting('largeText');
      }

      // Alt + M: Reduced motion toggle
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        toggleSetting('reducedMotion');
      }

      // Escape: Close accessibility menu
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  };

  const initializeFocusManagement = () => {
    // Focus trap for modals
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        const focusableContent = document.querySelectorAll(focusableElements);
        const firstFocusableElement = focusableContent[0] as HTMLElement;
        const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
  };

  const toggleSetting = (setting: keyof AccessibilitySettings) => {
    const newSettings = { ...settings, [setting]: !settings[setting] };
    setSettings(newSettings);
    applySettings(newSettings);
  };

  const updateFontSize = (delta: number) => {
    const newSize = Math.max(12, Math.min(24, settings.fontSize + delta));
    const newSettings = { ...settings, fontSize: newSize };
    setSettings(newSettings);
    applySettings(newSettings);
  };

  const updateZoomLevel = (delta: number) => {
    const newZoom = Math.max(50, Math.min(200, settings.zoomLevel + delta));
    const newSettings = { ...settings, zoomLevel: newZoom };
    setSettings(newSettings);
    applySettings(newSettings);
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: true,
      colorBlindFriendly: false,
      fontSize: 16,
      zoomLevel: 100
    };
    setSettings(defaultSettings);
    applySettings(defaultSettings);
  };

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open Accessibility Settings"
        title="Accessibility Settings (Alt + A)"
      >
        <Accessibility className="w-6 h-6 text-white" />
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
      </motion.button>

      {/* Accessibility Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                    <Accessibility className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Accessibility Settings
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Customize your experience for better accessibility
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  aria-label="Close accessibility settings"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                {/* Tabs */}
                <div className="flex space-x-1 mb-6 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                  {[
                    { id: 'general', label: 'General', icon: Settings },
                    { id: 'visual', label: 'Visual', icon: Eye },
                    { id: 'navigation', label: 'Navigation', icon: Keyboard },
                    { id: 'text', label: 'Text & Font', icon: Type }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                        activeTab === tab.id
                          ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                  {activeTab === 'general' && (
                    <motion.div
                      key="general"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Quick Actions
                          </h3>
                          
                          <button
                            onClick={() => toggleSetting('highContrast')}
                            className={`w-full p-4 rounded-lg border-2 transition-all duration-200 ${
                              settings.highContrast
                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <Contrast className={`w-6 h-6 ${settings.highContrast ? 'text-blue-600' : 'text-gray-400'}`} />
                              <div className="text-left">
                                <div className="font-medium text-gray-900 dark:text-white">High Contrast</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Enhanced color contrast</div>
                              </div>
                              {settings.highContrast && <CheckCircle className="w-5 h-5 text-blue-600" />}
                            </div>
                          </button>

                          <button
                            onClick={() => toggleSetting('largeText')}
                            className={`w-full p-4 rounded-lg border-2 transition-all duration-200 ${
                              settings.largeText
                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <Type className={`w-6 h-6 ${settings.largeText ? 'text-blue-600' : 'text-gray-400'}`} />
                              <div className="text-left">
                                <div className="font-medium text-gray-900 dark:text-white">Large Text</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Increased font sizes</div>
                              </div>
                              {settings.largeText && <CheckCircle className="w-5 h-5 text-blue-600" />}
                            </div>
                          </button>

                          <button
                            onClick={() => toggleSetting('reducedMotion')}
                            className={`w-full p-4 rounded-lg border-2 transition-all duration-200 ${
                              settings.reducedMotion
                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <MousePointer className={`w-6 h-6 ${settings.reducedMotion ? 'text-blue-600' : 'text-gray-400'}`} />
                              <div className="text-left">
                                <div className="font-medium text-gray-900 dark:text-white">Reduced Motion</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Minimize animations</div>
                              </div>
                              {settings.reducedMotion && <CheckCircle className="w-5 h-5 text-blue-600" />}
                            </div>
                          </button>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Keyboard Shortcuts
                          </h3>
                          
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                              <span className="text-gray-600 dark:text-gray-400">Open Accessibility Menu</span>
                              <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">Alt + A</kbd>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                              <span className="text-gray-600 dark:text-gray-400">Toggle High Contrast</span>
                              <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">Alt + H</kbd>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                              <span className="text-gray-600 dark:text-gray-400">Toggle Large Text</span>
                              <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">Alt + L</kbd>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                              <span className="text-gray-600 dark:text-gray-400">Toggle Reduced Motion</span>
                              <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">Alt + M</kbd>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'visual' && (
                    <motion.div
                      key="visual"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Visual Enhancements
                          </h3>
                          
                          <button
                            onClick={() => toggleSetting('colorBlindFriendly')}
                            className={`w-full p-4 rounded-lg border-2 transition-all duration-200 ${
                              settings.colorBlindFriendly
                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <Eye className={`w-6 h-6 ${settings.colorBlindFriendly ? 'text-blue-600' : 'text-gray-400'}`} />
                              <div className="text-left">
                                <div className="font-medium text-gray-900 dark:text-white">Color Blind Friendly</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Optimized color schemes</div>
                              </div>
                              {settings.colorBlindFriendly && <CheckCircle className="w-5 h-5 text-blue-600" />}
                            </div>
                          </button>

                          <button
                            onClick={() => toggleSetting('focusIndicator')}
                            className={`w-full p-4 rounded-lg border-2 transition-all duration-200 ${
                              settings.focusIndicator
                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <Keyboard className={`w-6 h-6 ${settings.focusIndicator ? 'text-blue-600' : 'text-gray-400'}`} />
                              <div className="text-left">
                                <div className="font-medium text-gray-900 dark:text-white">Focus Indicators</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Highlight focused elements</div>
                              </div>
                              {settings.focusIndicator && <CheckCircle className="w-5 h-5 text-blue-600" />}
                            </div>
                          </button>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Zoom Controls
                          </h3>
                          
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600 dark:text-gray-400">Zoom Level</span>
                              <span className="text-sm font-medium text-gray-900 dark:text-white">{settings.zoomLevel}%</span>
                            </div>
                            <div className="flex space-x-2">
                              <button
                                onClick={() => updateZoomLevel(-25)}
                                className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                aria-label="Zoom out"
                              >
                                <ZoomOut className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => updateZoomLevel(25)}
                                className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                aria-label="Zoom in"
                              >
                                <ZoomIn className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => updateZoomLevel(100 - settings.zoomLevel)}
                                className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                aria-label="Reset zoom"
                              >
                                <RotateCcw className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'navigation' && (
                    <motion.div
                      key="navigation"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Navigation Options
                        </h3>
                        
                        <button
                          onClick={() => toggleSetting('keyboardNavigation')}
                          className={`w-full p-4 rounded-lg border-2 transition-all duration-200 ${
                            settings.keyboardNavigation
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <Keyboard className={`w-6 h-6 ${settings.keyboardNavigation ? 'text-blue-600' : 'text-gray-400'}`} />
                            <div className="text-left">
                              <div className="font-medium text-gray-900 dark:text-white">Enhanced Keyboard Navigation</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">Improved tab order and shortcuts</div>
                            </div>
                            {settings.keyboardNavigation && <CheckCircle className="w-5 h-5 text-blue-600" />}
                          </div>
                        </button>

                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                          <div className="flex items-start space-x-3">
                            <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                            <div className="text-sm text-blue-800 dark:text-blue-200">
                              <p className="font-medium mb-1">Navigation Tips:</p>
                              <ul className="space-y-1 list-disc list-inside">
                                <li>Use Tab to navigate between interactive elements</li>
                                <li>Use Shift + Tab to navigate backwards</li>
                                <li>Use Enter or Space to activate buttons and links</li>
                                <li>Use arrow keys to navigate within components</li>
                                <li>Use Escape to close modals and menus</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'text' && (
                    <motion.div
                      key="text"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Font Size Controls
                          </h3>
                          
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600 dark:text-gray-400">Font Size</span>
                              <span className="text-sm font-medium text-gray-900 dark:text-white">{settings.fontSize}px</span>
                            </div>
                            <div className="flex space-x-2">
                              <button
                                onClick={() => updateFontSize(-2)}
                                className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                aria-label="Decrease font size"
                              >
                                <Type className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => updateFontSize(2)}
                                className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                aria-label="Increase font size"
                              >
                                <Type className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Text Preferences
                          </h3>
                          
                          <div className="space-y-3">
                            <label className="flex items-center space-x-3">
                              <input
                                type="checkbox"
                                checked={settings.screenReader}
                                onChange={() => toggleSetting('screenReader')}
                                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                              />
                              <span className="text-sm text-gray-700 dark:text-gray-300">Screen Reader Optimized</span>
                            </label>
                            
                            <label className="flex items-center space-x-3">
                              <input
                                type="checkbox"
                                checked={settings.largeText}
                                onChange={() => toggleSetting('largeText')}
                                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                              />
                              <span className="text-sm text-gray-700 dark:text-gray-300">Large Text Mode</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Reset Button */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={resetSettings}
                    className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    Reset to Defaults
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Focus Indicator Styles */}
      <style jsx>{`
        .high-contrast {
          --text-color: #ffffff !important;
          --bg-color: #000000 !important;
          --accent-color: #ffff00 !important;
        }
        
        .color-blind-friendly {
          filter: grayscale(100%) contrast(150%);
        }
        
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: white;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          z-index: 10000;
        }
        
        .skip-link:focus {
          top: 6px;
        }
        
        [tabindex="-1"]:focus {
          outline: none !important;
        }
        
        *:focus-visible {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
      `}</style>
    </>
  );
}

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
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
  Accessibility,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface AccessibilityEnhancerProps {
  showAccessibilityPanel?: boolean;
  enableHighContrast?: boolean;
  enableLargeText?: boolean;
  enableScreenReader?: boolean;
}

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  focusIndicator: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: 'normal' | 'large' | 'xlarge';
}

export function AccessibilityEnhancer({
  showAccessibilityPanel = false,
  enableHighContrast = false,
  enableLargeText = false,
  enableScreenReader = false
}: AccessibilityEnhancerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: enableHighContrast,
    largeText: enableLargeText,
    reducedMotion: false,
    screenReader: enableScreenReader,
    focusIndicator: true,
    colorBlindness: 'none',
    fontSize: 'normal'
  });
  const [activeTab, setActiveTab] = useState<'general' | 'visual' | 'navigation' | 'audio'>('general');
  const [announcement, setAnnouncement] = useState<string>('');
  const panelRef = useRef<HTMLDivElement>(null);

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);

    // Apply high contrast
    if (updatedSettings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    // Apply large text
    if (updatedSettings.largeText) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }

    // Apply reduced motion
    if (updatedSettings.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    // Apply focus indicator
    if (updatedSettings.focusIndicator) {
      document.documentElement.classList.add('focus-visible');
    } else {
      document.documentElement.classList.remove('focus-visible');
    }

    // Apply color blindness simulation
    document.documentElement.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
    if (updatedSettings.colorBlindness !== 'none') {
      document.documentElement.classList.add(updatedSettings.colorBlindness);
    }

    // Apply font size
    document.documentElement.classList.remove('text-large', 'text-xlarge');
    if (updatedSettings.fontSize !== 'normal') {
      document.documentElement.classList.add(`text-${updatedSettings.fontSize}`);
    }

    // Announce changes to screen readers
    if (updatedSettings.screenReader) {
      const message = `Accessibility setting ${Object.keys(newSettings)[0]} updated`;
      announceToScreenReader(message);
    }

    // Save to localStorage
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Screen reader announcement
  const announceToScreenReader = useCallback((message: string) => {
    setAnnouncement(message);
    setTimeout(() => setAnnouncement(''), 1000);
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  }, []);

  // Focus management
  useEffect(() => {
    if (isOpen && panelRef.current) {
      const firstFocusable = panelRef.current.querySelector('button, input, select') as HTMLElement;
      if (firstFocusable) {
        firstFocusable.focus();
      }
    }
  }, [isOpen]);

  // Load saved settings
  useEffect(() => {
    const saved = localStorage.getItem('zion-accessibility-settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings(parsed);
        applySettings(parsed);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Auto-save settings
  useEffect(() => {
    applySettings(settings);
  }, [settings, applySettings]);

  // High contrast toggle
  const toggleHighContrast = () => {
    applySettings({ highContrast: !settings.highContrast });
  };

  // Large text toggle
  const toggleLargeText = () => {
    applySettings({ largeText: !settings.largeText });
  };

  // Reduced motion toggle
  const toggleReducedMotion = () => {
    applySettings({ reducedMotion: !settings.reducedMotion });
  };

  // Screen reader toggle
  const toggleScreenReader = () => {
    applySettings({ screenReader: !settings.screenReader });
  };

  // Focus indicator toggle
  const toggleFocusIndicator = () => {
    applySettings({ focusIndicator: !settings.focusIndicator });
  };

  // Color blindness selection
  const handleColorBlindnessChange = (value: AccessibilitySettings['colorBlindness']) => {
    applySettings({ colorBlindness: value });
  };

  // Font size selection
  const handleFontSizeChange = (value: AccessibilitySettings['fontSize']) => {
    applySettings({ fontSize: value });
  };

  // Reset all settings
  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      focusIndicator: true,
      colorBlindness: 'none',
      fontSize: 'normal'
    };
    setSettings(defaultSettings);
    applySettings(defaultSettings);
    announceToScreenReader('Accessibility settings reset to default');
  };

  if (!showAccessibilityPanel) return null;

  return (
    <>
      {/* Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-300 focus:ring-opacity-50"
        aria-label="Open accessibility settings"
        title="Accessibility Settings"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Screen Reader Announcements */}
      {announcement && (
        <div
          className="sr-only"
          aria-live="polite"
          aria-atomic="true"
        >
          {announcement}
        </div>
      )}

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            ref={panelRef}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden"
            onKeyDown={handleKeyDown}
            role="dialog"
            aria-labelledby="accessibility-panel-title"
            aria-describedby="accessibility-panel-description"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 id="accessibility-panel-title" className="text-2xl font-bold">
                    Accessibility Settings
                  </h2>
                  <p id="accessibility-panel-description" className="text-cyan-100 mt-1">
                    Customize your experience for better accessibility
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-cyan-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-full p-2"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 dark:border-slate-600">
              <nav className="flex space-x-8 px-6" aria-label="Accessibility settings tabs">
                {[
                  { id: 'general', label: 'General', icon: Settings },
                  { id: 'visual', label: 'Visual', icon: Eye },
                  { id: 'navigation', label: 'Navigation', icon: Keyboard },
                  { id: 'audio', label: 'Audio', icon: Volume2 }
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id as any)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === id
                        ? 'border-cyan-500 text-cyan-600 dark:text-cyan-400'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-slate-400 dark:hover:text-slate-300'
                    }`}
                  >
                    <Icon className="w-4 h-4 inline mr-2" />
                    {label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              {/* General Tab */}
              {activeTab === 'general' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      General Accessibility
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Screen Reader Support
                          </label>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Enable enhanced screen reader announcements
                          </p>
                        </div>
                        <button
                          onClick={toggleScreenReader}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            settings.screenReader ? 'bg-cyan-600' : 'bg-gray-200 dark:bg-slate-600'
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

                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Focus Indicators
                          </label>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Show clear focus indicators for keyboard navigation
                          </p>
                        </div>
                        <button
                          onClick={toggleFocusIndicator}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            settings.focusIndicator ? 'bg-cyan-600' : 'bg-gray-200 dark:bg-slate-600'
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
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-slate-600">
                    <button
                      onClick={resetSettings}
                      className="w-full bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      Reset to Default
                    </button>
                  </div>
                </div>
              )}

              {/* Visual Tab */}
              {activeTab === 'visual' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Visual Adjustments
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            High Contrast
                          </label>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Increase contrast for better visibility
                          </p>
                        </div>
                        <button
                          onClick={toggleHighContrast}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            settings.highContrast ? 'bg-cyan-600' : 'bg-gray-200 dark:bg-slate-600'
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
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Large Text
                          </label>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Increase text size for better readability
                          </p>
                        </div>
                        <button
                          onClick={toggleLargeText}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            settings.largeText ? 'bg-cyan-600' : 'bg-gray-200 dark:bg-slate-600'
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
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Reduced Motion
                          </label>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Reduce animations for motion sensitivity
                          </p>
                        </div>
                        <button
                          onClick={toggleReducedMotion}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            settings.reducedMotion ? 'bg-cyan-600' : 'bg-gray-200 dark:bg-slate-600'
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

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Font Size
                        </label>
                        <select
                          value={settings.fontSize}
                          onChange={(e) => handleFontSizeChange(e.target.value as AccessibilitySettings['fontSize'])}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        >
                          <option value="normal">Normal</option>
                          <option value="large">Large</option>
                          <option value="xlarge">Extra Large</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Color Blindness Support
                        </label>
                        <select
                          value={settings.colorBlindness}
                          onChange={(e) => handleColorBlindnessChange(e.target.value as AccessibilitySettings['colorBlindness'])}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        >
                          <option value="none">None</option>
                          <option value="protanopia">Protanopia (Red-Blind)</option>
                          <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                          <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Tab */}
              {activeTab === 'navigation' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Navigation & Keyboard
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                        <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                          Keyboard Shortcuts
                        </h4>
                        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                          <li><kbd className="px-2 py-1 bg-blue-100 dark:bg-blue-800 rounded text-xs">Tab</kbd> Navigate between elements</li>
                          <li><kbd className="px-2 py-1 bg-blue-100 dark:bg-blue-800 rounded text-xs">Enter</kbd> Activate buttons and links</li>
                          <li><kbd className="px-2 py-1 bg-blue-100 dark:bg-blue-800 rounded text-xs">Space</kbd> Toggle checkboxes and buttons</li>
                          <li><kbd className="px-2 py-1 bg-blue-100 dark:bg-blue-800 rounded text-xs">Escape</kbd> Close modals and panels</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                        <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">
                          Skip Navigation
                        </h4>
                        <p className="text-sm text-green-800 dark:text-green-200">
                          Press <kbd className="px-2 py-1 bg-green-100 dark:bg-green-800 rounded text-xs">Tab</kbd> to access skip navigation links for faster browsing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Audio Tab */}
              {activeTab === 'audio' && (
                <div className="space-y-6">
                  <div>
                                         <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                       Audio & Notifications
                     </h3>
                    <div className="space-y-4">
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                        <h4 className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">
                          Audio Descriptions
                        </h4>
                        <p className="text-sm text-yellow-800 dark:text-yellow-200">
                          Enable audio descriptions for video content and interactive elements.
                        </p>
                      </div>

                      <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                        <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-2">
                          Notification Sounds
                        </h4>
                        <p className="text-sm text-purple-800 dark:text-purple-200">
                          Customize notification sounds and volume levels for better accessibility.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

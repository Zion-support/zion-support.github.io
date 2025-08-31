import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  Eye, 
  EyeOff, 
  Type, 
  Volume2, 
  VolumeX, 
  Keyboard, 
  Settings, 
  X,
  Plus,
  Minus,
  Contrast,
  Sun,
  Moon,
  Monitor,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: number;
  reducedMotion: boolean;
  soundEnabled: boolean;
  theme: 'light' | 'dark' | 'auto';
  focusIndicator: boolean;
  screenReader: boolean;
}

interface EnhancedAccessibilityEnhancerProps {
  enabled?: boolean;
  showControls?: boolean;
}

export default function EnhancedAccessibilityEnhancer({
  enabled = true,
  showControls = false
}: EnhancedAccessibilityEnhancerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 16,
    reducedMotion: false,
    soundEnabled: true,
    theme: 'auto',
    focusIndicator: true,
    screenReader: false
  });

  const [isVisible, setIsVisible] = useState(false);

  // Apply accessibility settings to the document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
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

    // Font size
    root.style.fontSize = `${newSettings.fontSize}px`;

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Theme
    if (newSettings.theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else if (newSettings.theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      // Auto theme
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.add('light');
        root.classList.remove('dark');
      }
    }

    // Focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Screen reader announcements
    if (newSettings.screenReader) {
      announceToScreenReader('Accessibility settings updated');
    }
  }, []);

  // Announce to screen readers
  const announceToScreenReader = useCallback((message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Alt + A to open accessibility panel
    if (event.altKey && event.key === 'a') {
      event.preventDefault();
      setIsOpen(prev => !prev);
    }

    // Escape to close panel
    if (event.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  // Update settings
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    
    // Announce changes to screen readers
    if (newSettings.screenReader) {
      announceToScreenReader(`${key} updated to ${value}`);
    }
  }, [settings, applySettings, announceToScreenReader]);

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
    applySettings(settings);
  }, [applySettings, settings]);

  // Keyboard event listener
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Show accessibility button after a delay
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!enabled || !isVisible) return null;

  return (
    <>
      {/* Floating Accessibility Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
        aria-label="Open accessibility settings"
        title="Accessibility Settings (Alt + A)"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                    <Accessibility className="w-6 h-6 text-blue-600" />
                    <span>Accessibility Settings</span>
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    aria-label="Close accessibility settings"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* High Contrast */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Contrast className="w-5 h-5 text-blue-600" />
                      <div>
                        <label className="text-sm font-medium text-gray-900 dark:text-white">
                          High Contrast
                        </label>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Enhanced color contrast for better visibility
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => updateSetting('highContrast', !settings.highContrast)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.highContrast ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                      aria-label={`High contrast ${settings.highContrast ? 'enabled' : 'disabled'}`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Font Size */}
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <Type className="w-5 h-5 text-blue-600" />
                      <div>
                        <label className="text-sm font-medium text-gray-900 dark:text-white">
                          Font Size
                        </label>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Adjust text size for better readability
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateSetting('fontSize', Math.max(12, settings.fontSize - 2))}
                        className="p-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
                        aria-label="Decrease font size"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-sm font-mono text-gray-900 dark:text-white min-w-[3rem] text-center">
                        {settings.fontSize}px
                      </span>
                      <button
                        onClick={() => updateSetting('fontSize', Math.min(24, settings.fontSize + 2))}
                        className="p-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
                        aria-label="Increase font size"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Theme Selection */}
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <Monitor className="w-5 h-5 text-blue-600" />
                      <div>
                        <label className="text-sm font-medium text-gray-900 dark:text-white">
                          Theme
                        </label>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Choose your preferred color scheme
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {(['light', 'dark', 'auto'] as const).map((theme) => (
                        <button
                          key={theme}
                          onClick={() => updateSetting('theme', theme)}
                          className={`p-3 rounded-md border-2 transition-colors ${
                            settings.theme === theme
                              ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                              : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                          }`}
                        >
                          <div className="flex items-center justify-center space-x-2">
                            {theme === 'light' && <Sun className="w-4 h-4" />}
                            {theme === 'dark' && <Moon className="w-4 h-4" />}
                            {theme === 'auto' && <Monitor className="w-4 h-4" />}
                            <span className="text-xs capitalize">{theme}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Reduced Motion */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Eye className="w-5 h-5 text-blue-600" />
                      <div>
                        <label className="text-sm font-medium text-gray-900 dark:text-white">
                          Reduced Motion
                        </label>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Minimize animations and transitions
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                      aria-label={`Reduced motion ${settings.reducedMotion ? 'enabled' : 'disabled'}`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Focus Indicator */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Keyboard className="w-5 h-5 text-blue-600" />
                      <div>
                        <label className="text-sm font-medium text-gray-900 dark:text-white">
                          Focus Indicator
                        </label>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Show keyboard focus indicators
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => updateSetting('focusIndicator', !settings.focusIndicator)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.focusIndicator ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                      aria-label={`Focus indicator ${settings.focusIndicator ? 'enabled' : 'disabled'}`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Screen Reader Support */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Volume2 className="w-5 h-5 text-blue-600" />
                      <div>
                        <label className="text-sm font-medium text-gray-900 dark:text-white">
                          Screen Reader
                        </label>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Enable audio announcements
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => updateSetting('screenReader', !settings.screenReader)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.screenReader ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                      aria-label={`Screen reader ${settings.screenReader ? 'enabled' : 'disabled'}`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Keyboard Shortcuts Info */}
                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Keyboard Shortcuts
                  </h3>
                  <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                    <p><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded">Alt + A</kbd> Open accessibility panel</p>
                    <p><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded">Escape</kbd> Close panel</p>
                    <p><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded">Tab</kbd> Navigate options</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen reader only content */}
      <div className="sr-only">
        <p>Accessibility settings panel. Use Tab to navigate options and Enter to activate controls.</p>
      </div>
    </>
  );
}

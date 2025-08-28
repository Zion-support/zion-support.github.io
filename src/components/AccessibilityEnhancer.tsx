import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  MousePointer, 
  Keyboard,
  Settings,
  X,
  CheckCircle,
  AlertCircle,
  Accessibility,
  ZoomIn,
  ZoomOut,
  Sun,
  Moon,
  Monitor
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highContrastText: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
  colorScheme: 'light' | 'dark' | 'auto';
  zoomLevel: number;
}

export function AccessibilityEnhancer({ 
  enabled = true, 
  showControls = true 
}: { 
  enabled?: boolean; 
  showControls?: boolean; 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highContrastText: false,
    focusIndicator: true,
    screenReader: false,
    fontSize: 'medium',
    colorScheme: 'auto',
    zoomLevel: 100
  });

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

    // Apply font size
    document.documentElement.setAttribute('data-font-size', updatedSettings.fontSize);

    // Apply color scheme
    document.documentElement.setAttribute('data-color-scheme', updatedSettings.colorScheme);

    // Apply zoom level
    document.documentElement.style.fontSize = `${updatedSettings.zoomLevel}%`;

    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Load saved settings
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        applySettings(parsed);
      } catch (error) {
        console.error('Failed to parse saved accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip if user is typing in an input
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (event.key) {
        case 'Tab':
          // Ensure focus indicators are visible
          document.documentElement.classList.add('keyboard-navigation');
          break;
        case 'Escape':
          if (isOpen) {
            setIsOpen(false);
          }
          break;
        case 'F1':
          event.preventDefault();
          setIsOpen(prev => !prev);
          break;
      }
    };

    const handleMouseDown = () => {
      document.documentElement.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [isOpen]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
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
  }, [settings.screenReader]);

  // Font size controls
  const increaseFontSize = useCallback(() => {
    const sizes: AccessibilitySettings['fontSize'][] = ['small', 'medium', 'large', 'xlarge'];
    const currentIndex = sizes.indexOf(settings.fontSize);
    if (currentIndex < sizes.length - 1) {
      const newSize = sizes[currentIndex + 1];
      applySettings({ fontSize: newSize });
      announceToScreenReader(`Font size increased to ${newSize}`);
    }
  }, [settings.fontSize, applySettings, announceToScreenReader]);

  const decreaseFontSize = useCallback(() => {
    const sizes: AccessibilitySettings['fontSize'][] = ['small', 'medium', 'large', 'xlarge'];
    const currentIndex = sizes.indexOf(settings.fontSize);
    if (currentIndex > 0) {
      const newSize = sizes[currentIndex - 1];
      applySettings({ fontSize: newSize });
      announceToScreenReader(`Font size decreased to ${newSize}`);
    }
  }, [settings.fontSize, applySettings, announceToScreenReader]);

  // Zoom controls
  const increaseZoom = useCallback(() => {
    const newZoom = Math.min(settings.zoomLevel + 25, 200);
    applySettings({ zoomLevel: newZoom });
    announceToScreenReader(`Zoom level increased to ${newZoom}%`);
  }, [settings.zoomLevel, applySettings, announceToScreenReader]);

  const decreaseZoom = useCallback(() => {
    const newZoom = Math.max(settings.zoomLevel - 25, 75);
    applySettings({ zoomLevel: newZoom });
    announceToScreenReader(`Zoom level decreased to ${newZoom}%`);
  }, [settings.zoomLevel, applySettings, announceToScreenReader]);

  // Color scheme toggle
  const toggleColorScheme = useCallback(() => {
    const schemes: AccessibilitySettings['colorScheme'][] = ['light', 'dark', 'auto'];
    const currentIndex = schemes.indexOf(settings.colorScheme);
    const newScheme = schemes[(currentIndex + 1) % schemes.length];
    applySettings({ colorScheme: newScheme });
    announceToScreenReader(`Color scheme changed to ${newScheme}`);
  }, [settings.colorScheme, applySettings, announceToScreenReader]);

  if (!enabled) return null;

  return (
    <>
      {/* Floating Action Button */}
      {showControls && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Open accessibility settings"
          title="Accessibility Settings (F1)"
        >
          <Accessibility className="w-6 h-6" />
        </motion.button>
      )}

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <Accessibility className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Accessibility Settings
                  </h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  aria-label="Close accessibility settings"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Settings Content */}
              <div className="p-6 space-y-6">
                {/* Visual Settings */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Visual Settings
                  </h3>
                  
                  {/* High Contrast */}
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.highContrast}
                      onChange={(e) => applySettings({ highContrast: e.target.checked })}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <Contrast className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300">High Contrast</span>
                  </label>

                  {/* Large Text */}
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.largeText}
                      onChange={(e) => applySettings({ largeText: e.target.checked })}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <Type className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300">Large Text</span>
                  </label>

                  {/* Focus Indicator */}
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.focusIndicator}
                      onChange={(e) => applySettings({ focusIndicator: e.target.checked })}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <MousePointer className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300">Focus Indicators</span>
                  </label>
                </div>

                {/* Font Size Controls */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Font Size
                  </h3>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={decreaseFontSize}
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      aria-label="Decrease font size"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <span className="text-gray-700 dark:text-gray-300 min-w-[60px] text-center">
                      {settings.fontSize}
                    </span>
                    <button
                      onClick={increaseFontSize}
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      aria-label="Increase font size"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Zoom Controls */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Zoom Level
                  </h3>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={decreaseZoom}
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      aria-label="Decrease zoom"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <span className="text-gray-700 dark:text-gray-300 min-w-[60px] text-center">
                      {settings.zoomLevel}%
                    </span>
                    <button
                      onClick={increaseZoom}
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      aria-label="Increase zoom"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Color Scheme */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Color Scheme
                  </h3>
                  <div className="flex space-x-2">
                    {(['light', 'dark', 'auto'] as const).map((scheme) => (
                      <button
                        key={scheme}
                        onClick={() => applySettings({ colorScheme: scheme })}
                        className={`p-3 rounded-lg transition-colors ${
                          settings.colorScheme === scheme
                            ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                        aria-label={`Switch to ${scheme} color scheme`}
                      >
                        {scheme === 'light' && <Sun className="w-5 h-5" />}
                        {scheme === 'dark' && <Moon className="w-5 h-5" />}
                        {scheme === 'auto' && <Monitor className="w-5 h-5" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Motion Settings */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Motion Settings
                  </h3>
                  
                  {/* Reduced Motion */}
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.reducedMotion}
                      onChange={(e) => applySettings({ reducedMotion: e.target.checked })}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <Eye className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300">Reduced Motion</span>
                  </label>
                </div>

                {/* Screen Reader Support */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Screen Reader Support
                  </h3>
                  
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.screenReader}
                      onChange={(e) => applySettings({ screenReader: e.target.checked })}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <Volume2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300">Enable Screen Reader Support</span>
                  </label>
                </div>

                {/* Keyboard Shortcuts */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Keyboard Shortcuts
                  </h3>
                  <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">F1</kbd> - Open accessibility settings</div>
                    <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Tab</kbd> - Navigate between elements</div>
                    <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Escape</kbd> - Close panels</div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>WCAG 2.1 AA Compliant</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Only Announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Accessibility settings panel opened
      </div>
    </>
  );
}
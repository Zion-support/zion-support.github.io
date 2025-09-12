import React, { useEffect, useState, useRef } from 'react';
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
  Keyboard,
  Accessibility,
  X
} from 'lucide-react';

interface AccessibilityEnhancerProps {
  onSettingsChange?: (settings: AccessibilitySettings) => void;
}

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  onSettingsChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 'medium',
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const [announcement, setAnnouncement] = useState('');
  const focusableElements = useRef<HTMLElement[]>([]);
  const currentFocusIndex = useRef(0);

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
        applySettings({ ...prev, ...parsed });
      } catch (error) {
        console.error('Failed to parse saved accessibility settings:', error);
      }
    }

    // Apply initial settings
    applySettings(settings);

    // Set up keyboard navigation
    setupKeyboardNavigation();

    // Announce component availability
    setTimeout(() => {
      announceToScreenReader('Accessibility panel available. Press Tab to navigate.');
    }, 1000);

    return () => {
      document.removeEventListener('focusin', handleFocusChange);
      document.removeEventListener('focusout', handleBlur);
    };
  }, [currentFocus, settings.focusIndicator]);

  // Highlighter effect
  useEffect(() => {
    const handleFocusChangeWrapper = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target) {
        setCurrentFocus(target);
        announceToScreenReader(`Focused on ${target.textContent || target.tagName.toLowerCase()}`);
      }
    };

    document.addEventListener('focusin', handleFocusChangeWrapper);
    document.addEventListener('keydown', handleKeyDown);
    
    elements.forEach(element => {
      if (element instanceof HTMLElement) {
        element.style.backgroundColor = 'rgba(255, 255, 0, 0.3)';
        element.style.color = '#000000';
        element.style.padding = '2px 4px';
        element.style.borderRadius = '4px';
      }
    });

    return () => {
      document.removeEventListener('focusin', handleFocusChangeWrapper);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleFontSizeChange = (newSize: number) => {
    const newSettings = { ...settings, fontSize: newSize };
    setSettings(newSettings);
    applySettings(newSettings);
    announceToScreenReader(`Font size changed to ${newSize} pixels`);
  };

  // Toggle setting
  const toggleSetting = useCallback((key: keyof AccessibilitySettings) => {
    setSettings(prev => {
      const newSettings = { ...prev, [key]: !prev[key] };
      announceToScreenReader(`${key} ${newSettings[key] ? 'enabled' : 'disabled'}`);
      return newSettings;
    });
  }, [announceToScreenReader]);

  // Update setting
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: string | number | boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    announceToScreenReader(`${key} updated to ${value}`);
  }, [announceToScreenReader]);

  // Reset to defaults
  const resetToDefaults = useCallback(() => {
    const defaults: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: true,
      fontSize: 16,
      colorScheme: 'auto',
      focusIndicator: true,
      screenReader: false
    };
    
    setSettings(defaultSettings);
    applySettings(defaultSettings);
    announceToScreenReader('Accessibility settings reset to default');
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
        aria-label="Open accessibility settings"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {showAccessibilityPanel && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-6 bottom-24 z-40 bg-gray-900 text-white p-6 rounded-2xl shadow-2xl border border-gray-700 max-w-sm w-full"
            role="dialog"
            aria-labelledby="accessibility-panel-title"
            aria-describedby="accessibility-panel-description"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 id="accessibility-panel-title" className="text-xl font-bold">
                  Accessibility Settings
                </h2>
                <p id="accessibility-panel-description" className="text-sm text-gray-400">
                  Customize your experience
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close accessibility panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Settings */}
            <div className="space-y-4">
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <Contrast className="w-5 h-5" />
                  <span>High Contrast</span>
                </label>
                <button
                  onClick={() => handleSettingChange('highContrast', !settings.highContrast)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.highContrast ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                  aria-pressed={settings.highContrast}
                  role="switch"
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Large Text */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <Type className="w-5 h-5" />
                  <span>Large Text</span>
                </label>
                <button
                  onClick={() => handleSettingChange('largeText', !settings.largeText)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.largeText ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                  aria-pressed={settings.largeText}
                  role="switch"
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.largeText ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <Eye className="w-5 h-5" />
                  <span>Reduced Motion</span>
                </label>
                <button
                  onClick={() => handleSettingChange('reducedMotion', !settings.reducedMotion)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                  aria-pressed={settings.reducedMotion}
                  role="switch"
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Keyboard Navigation */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <Keyboard className="w-5 h-5" />
                  <span>Keyboard Navigation</span>
                </label>
                <button
                  onClick={() => handleSettingChange('keyboardNavigation', !settings.keyboardNavigation)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.keyboardNavigation ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                  aria-pressed={settings.keyboardNavigation}
                  role="switch"
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Focus Indicator */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <Eye className="w-5 h-5" />
                  <span>Focus Indicator</span>
                </label>
                <button
                  onClick={() => handleSettingChange('focusIndicator', !settings.focusIndicator)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.focusIndicator ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                  aria-pressed={settings.focusIndicator}
                  role="switch"
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Font Size Slider */}
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <ZoomIn className="w-5 h-5" />
                  <span>Font Size: {settings.fontSize}px</span>
                </label>
                <input
                  type="range"
                  min="12"
                  max="24"
                  value={settings.fontSize}
                  onChange={(e) => handleFontSizeChange(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  aria-valuemin={12}
                  aria-valuemax={24}
                  aria-valuenow={settings.fontSize}
                />
              </div>

              {/* Reset Button */}
              <button
                onClick={resetSettings}
                className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-2 px-4 rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                Reset to Default
              </button>
            </div>

            {/* Keyboard Shortcuts Help */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h3 className="font-semibold mb-2">Keyboard Shortcuts</h3>
              <div className="text-sm text-gray-400 space-y-1">
                <div>Tab: Navigate focus</div>
                <div>Enter/Space: Activate</div>
                <div>Escape: Close panel</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Announcements */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        id="accessibility-announcements"
      >
        {announcement}
      </div>

      {/* Global CSS Variables for Accessibility */}
      <style jsx global>{`
        :root {
          --font-size: ${settings.fontSize}px;
          --line-height: ${settings.lineHeight};
          --letter-spacing: ${settings.letterSpacing}px;
          --focus-visible: ${settings.focusIndicator ? '2px solid #3b82f6' : 'none'};
          --reduced-motion: ${settings.reducedMotion ? 'reduce' : 'no-preference'};
        }

        .high-contrast {
          --text-color: #ffffff;
          --bg-color: #000000;
          --accent-color: #ffff00;
          --border-color: #ffffff;
        }

        .high-contrast * {
          color: var(--text-color) !important;
          background-color: var(--bg-color) !important;
          border-color: var(--border-color) !important;
        }

        .high-contrast button,
        .high-contrast a {
          border: 2px solid black !important;
        }
        
        .large-text {
          font-size: 1.25rem !important;
        }
        
        .large-text h1 {
          font-size: 3rem !important;
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
};

export default AccessibilityEnhancer;
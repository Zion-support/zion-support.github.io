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
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
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

  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [focusHistory, setFocusHistory] = useState<HTMLElement[]>([]);

  // Initialize accessibility features
  const initializeFeatures = useCallback(() => {
    const features: AccessibilityFeature[] = [
      {
        id: 'high-contrast',
        name: 'High Contrast',
        description: 'Increase color contrast for better visibility',
        enabled: false,
        category: 'visual',
        wcagLevel: 'AA'
      },
      {
        id: 'font-size',
        name: 'Font Size Control',
        description: 'Adjustable font sizes for better readability',
        enabled: true,
        category: 'visual',
        wcagLevel: 'AA'
      },
      {
        id: 'reduced-motion',
        name: 'Reduced Motion',
        description: 'Reduce animations for users with vestibular disorders',
        enabled: false,
        category: 'cognitive',
        wcagLevel: 'A'
      },
      {
        id: 'focus-indicator',
        name: 'Focus Indicators',
        description: 'Clear focus indicators for keyboard navigation',
        enabled: true,
        category: 'motor',
        wcagLevel: 'A'
      },
      {
        id: 'skip-links',
        name: 'Skip Links',
        description: 'Skip to main content for keyboard users',
        enabled: true,
        category: 'motor',
        wcagLevel: 'A'
      },
      {
        id: 'screen-reader',
        name: 'Screen Reader Support',
        description: 'Enhanced ARIA labels and semantic markup',
        enabled: true,
        category: 'auditory',
        wcagLevel: 'AA'
      },
      {
        id: 'keyboard-navigation',
        name: 'Keyboard Navigation',
        description: 'Full keyboard accessibility',
        enabled: true,
        category: 'motor',
        wcagLevel: 'A'
      },
      {
        id: 'color-blindness',
        name: 'Color Blindness Support',
        description: 'Color-independent information design',
        enabled: false,
        category: 'visual',
        wcagLevel: 'AA'
      }
    ];
    
    // High contrast
    if (settings.highContrast) {
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--bg-secondary', '#1a1a1a');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#e5e5e5');
      root.style.setProperty('--accent-color', '#ffff00');
      root.style.setProperty('--border-color', '#ffff00');
    } else {
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--bg-secondary');
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--text-secondary');
      root.style.removeProperty('--accent-color');
      root.style.removeProperty('--border-color');
    }

    // Large text
    if (settings.largeText) {
      root.style.fontSize = '18px';
      root.style.setProperty('--text-scale', '1.2');
    } else {
      root.style.fontSize = '16px';
      root.style.setProperty('--text-scale', '1');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
    } else {
      root.style.removeProperty('--reduced-motion');
    }

    // Focus indicator
    if (settings.focusIndicator) {
      root.style.setProperty('--focus-outline', '3px solid #0066cc');
    } else {
      root.style.setProperty('--focus-outline', 'none');
    }

    // Color scheme
    if (settings.colorScheme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else if (settings.colorScheme === 'dark') {
      root.classList.remove('light');
      root.classList.add('dark');
    } else {
      root.classList.remove('light', 'dark');
    }
  }, [settings]);

  // Track focus changes
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
        setFocusHistory(prev => [target, ...prev.slice(0, 9)]);
        
        // Add focus indicator
        if (settings.focusIndicator) {
          target.style.outline = '3px solid #0066cc';
          target.style.outlineOffset = '2px';
        }
      }

      // Toggle high contrast
      if (e.key === 'c' && e.ctrlKey && e.altKey) {
        e.preventDefault();
        setContrastMode(prev => !prev);
        announceChange(contrastMode ? 'High contrast disabled' : 'High contrast enabled');
      }

      // Toggle reduced motion
      if (e.key === 'm' && e.ctrlKey && e.altKey) {
        e.preventDefault();
        setReducedMotion(prev => !prev);
        announceChange(reducedMotion ? 'Motion restored' : 'Motion reduced');
      }

      // Font size controls
      if (e.key === '=' && e.ctrlKey) {
        e.preventDefault();
        setFontSize(prev => Math.min(prev + 2, 32));
        announceChange(`Font size increased to ${fontSize + 2}px`);
      }

      if (e.key === '-' && e.ctrlKey) {
        e.preventDefault();
        setFontSize(prev => Math.max(prev - 2, 12));
        announceChange(`Font size decreased to ${fontSize - 2}px`);
      }

      // Reset font size
      if (e.key === '0' && e.ctrlKey) {
        e.preventDefault();
        setFontSize(16);
        announceChange('Font size reset to default');
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
          border: 2px solid var(--accent-color) !important;
        }

        *:focus-visible {
          outline: var(--focus-visible) !important;
          outline-offset: 2px !important;
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
};

export default AccessibilityEnhancer;

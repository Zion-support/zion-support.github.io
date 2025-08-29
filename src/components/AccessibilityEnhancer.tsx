import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  MousePointer, 
  Keyboard, 
  Sun, 
  Moon,
  Accessibility,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Settings,
  X
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlindMode: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
  theme: 'light' | 'dark' | 'auto';
}

interface AccessibilityEnhancerProps {
  onSettingsChange?: (settings: AccessibilitySettings) => void;
  showFloatingButton?: boolean;
  className?: string;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  onSettingsChange,
  showFloatingButton = true,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    colorBlindMode: 'none',
    fontSize: 'medium',
    theme: 'auto',
  });

  const [isVisible, setIsVisible] = useState(false);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('zion-accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  // Apply accessibility settings
  useEffect(() => {
    applyAccessibilitySettings(settings);
    
    // Save to localStorage
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(settings));
    
    // Notify parent component
    if (onSettingsChange) {
      onSettingsChange(settings);
    }
  }, [settings, onSettingsChange]);

  // Show floating button after a delay
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {
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

    // Color blind modes
    root.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
    if (newSettings.colorBlindMode !== 'none') {
      root.classList.add(newSettings.colorBlindMode);
    }

    // Font size
    root.classList.remove('text-small', 'text-medium', 'text-large', 'text-xlarge');
    root.classList.add(`text-${newSettings.fontSize}`);

    // Theme
    if (newSettings.theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else if (newSettings.theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      // Auto theme - respect system preference
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
      root.style.setProperty('--focus-ring', '2px solid #3b82f6');
    } else {
      root.style.setProperty('--focus-ring', 'none');
    }
  }, []);

  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  }, []);

  const resetSettings = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: true,
      colorBlindMode: 'none',
      fontSize: 'medium',
      theme: 'auto',
    };
    setSettings(defaultSettings);
  }, []);

  const togglePanel = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
      
      if (event.key === 'F1' && event.ctrlKey) {
        event.preventDefault();
        togglePanel();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, togglePanel]);

  if (!showFloatingButton) return null;

  return (
    <>
      {/* Floating Accessibility Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={togglePanel}
            className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-zion-blue hover:bg-zion-blue-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-zion-blue/30 ${className}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Accessibility Settings"
            aria-expanded={isOpen}
            aria-haspopup="dialog"
          >
            <Accessibility className="w-6 h-6 mx-auto" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white dark:bg-zion-slate rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-labelledby="accessibility-panel-title"
              aria-describedby="accessibility-panel-description"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-zion-slate-light">
                <div>
                  <h2 id="accessibility-panel-title" className="text-xl font-bold text-gray-900 dark:text-white">
                    Accessibility Settings
                  </h2>
                  <p id="accessibility-panel-description" className="text-sm text-gray-600 dark:text-gray-300">
                    Customize your experience for better accessibility
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Settings Content */}
              <div className="p-6 space-y-6">
                {/* Visual Settings */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Visual Settings
                  </h3>
                  
                  <div className="space-y-4">
                    {/* High Contrast */}
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.highContrast}
                        onChange={(e) => updateSetting('highContrast', e.target.checked)}
                        className="w-4 h-4 text-zion-blue border-gray-300 rounded focus:ring-zion-blue focus:ring-2"
                      />
                      <span className="text-gray-700 dark:text-gray-200">High Contrast</span>
                    </label>

                    {/* Large Text */}
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.largeText}
                        onChange={(e) => updateSetting('largeText', e.target.checked)}
                        className="w-4 h-4 text-zion-blue border-gray-300 rounded focus:ring-zion-blue focus:ring-2"
                      />
                      <span className="text-gray-700 dark:text-gray-200">Large Text</span>
                    </label>

                    {/* Font Size */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                        Font Size
                      </label>
                      <select
                        value={settings.fontSize}
                        onChange={(e) => updateSetting('fontSize', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-zion-slate-light rounded-md bg-white dark:bg-zion-slate text-gray-900 dark:text-white focus:ring-2 focus:ring-zion-blue focus:border-transparent"
                      >
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="xlarge">Extra Large</option>
                      </select>
                    </div>

                    {/* Color Blind Mode */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                        Color Blind Mode
                      </label>
                      <select
                        value={settings.colorBlindMode}
                        onChange={(e) => updateSetting('colorBlindMode', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-zion-slate-light rounded-md bg-white dark:bg-zion-slate text-gray-900 dark:text-white focus:ring-2 focus:ring-zion-blue focus:border-transparent"
                      >
                        <option value="none">None</option>
                        <option value="protanopia">Protanopia (Red-Blind)</option>
                        <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                        <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Motion & Navigation */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Motion & Navigation
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Reduced Motion */}
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.reducedMotion}
                        onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                        className="w-4 h-4 text-zion-blue border-gray-300 rounded focus:ring-zion-blue focus:ring-2"
                      />
                      <span className="text-gray-700 dark:text-gray-200">Reduced Motion</span>
                    </label>

                    {/* Focus Indicator */}
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.focusIndicator}
                        onChange={(e) => updateSetting('focusIndicator', e.target.checked)}
                        className="w-4 h-4 text-zion-blue border-gray-300 rounded focus:ring-zion-blue focus:ring-2"
                      />
                      <span className="text-gray-700 dark:text-gray-200">Enhanced Focus Indicator</span>
                    </label>

                    {/* Keyboard Navigation */}
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.keyboardNavigation}
                        onChange={(e) => updateSetting('keyboardNavigation', e.target.checked)}
                        className="w-4 h-4 text-zion-blue border-gray-300 rounded focus:ring-zion-blue focus:ring-2"
                      />
                      <span className="text-gray-700 dark:text-gray-200">Keyboard Navigation</span>
                    </label>
                  </div>
                </div>

                {/* Theme */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Theme
                  </h3>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {(['light', 'dark', 'auto'] as const).map((theme) => (
                      <button
                        key={theme}
                        onClick={() => updateSetting('theme', theme)}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          settings.theme === theme
                            ? 'border-zion-blue bg-zion-blue text-white'
                            : 'border-gray-300 dark:border-zion-slate-light hover:border-zion-blue/50'
                        }`}
                      >
                        {theme === 'light' && <Sun className="w-5 h-5 mx-auto mb-1" />}
                        {theme === 'dark' && <Moon className="w-5 h-5 mx-auto mb-1" />}
                        {theme === 'auto' && <Settings className="w-5 h-5 mx-auto mb-1" />}
                        <span className="text-sm capitalize">{theme}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3 pt-4 border-t border-gray-200 dark:border-zion-slate-light">
                  <button
                    onClick={resetSettings}
                    className="flex-1 px-4 py-2 text-zion-blue border border-zion-blue rounded-lg hover:bg-zion-blue hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-zion-blue focus:ring-offset-2"
                  >
                    <RotateCcw className="w-4 h-4 inline mr-2" />
                    Reset
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex-1 px-4 py-2 bg-zion-blue text-white rounded-lg hover:bg-zion-blue-dark transition-colors focus:outline-none focus:ring-2 focus:ring-zion-blue focus:ring-offset-2"
                  >
                    Done
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// CSS for accessibility features
const accessibilityStyles = `
  /* High Contrast Mode */
  .high-contrast {
    --zion-text-primary: #000000;
    --zion-text-secondary: #333333;
    --zion-bg-primary: #ffffff;
    --zion-bg-secondary: #f0f0f0;
    --zion-border-primary: #000000;
  }

  .high-contrast.dark {
    --zion-text-primary: #ffffff;
    --zion-text-secondary: #cccccc;
    --zion-bg-primary: #000000;
    --zion-bg-secondary: #333333;
    --zion-border-primary: #ffffff;
  }

  /* Large Text Mode */
  .large-text {
    font-size: 1.2em;
  }

  .large-text h1 { font-size: 2.4em; }
  .large-text h2 { font-size: 2em; }
  .large-text h3 { font-size: 1.6em; }
  .large-text p { font-size: 1.2em; }

  /* Reduced Motion */
  .reduced-motion *,
  .reduced-motion *::before,
  .reduced-motion *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  /* Color Blind Modes */
  .protanopia {
    filter: url('#protanopia-filter');
  }

  .deuteranopia {
    filter: url('#deuteranopia-filter');
  }

  .tritanopia {
    filter: url('#tritanopia-filter');
  }

  /* Font Sizes */
  .text-small { font-size: 0.875rem; }
  .text-medium { font-size: 1rem; }
  .text-large { font-size: 1.125rem; }
  .text-xlarge { font-size: 1.25rem; }

  /* Focus Indicators */
  *:focus {
    outline: var(--focus-ring, 2px solid #3b82f6);
    outline-offset: 2px;
  }

  /* Keyboard Navigation */
  .keyboard-navigation .skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: #000;
    color: #fff;
    padding: 8px;
    text-decoration: none;
    z-index: 1000;
  }

  .keyboard-navigation .skip-link:focus {
    top: 6px;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = accessibilityStyles;
  document.head.appendChild(styleElement);
}

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Sun, 
  Moon, 
  Monitor,
  Accessibility,
  Keyboard,
  MousePointer,
  Contrast,
  Type,
  Languages
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: 'small' | 'medium' | 'large';
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  language: string;
}

interface EnhancedAccessibilityProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  showSettings?: boolean;
  onSettingsChange?: (settings: AccessibilitySettings) => void;
}

export const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({
  position = 'bottom-right',
  showSettings = false,
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
    colorBlindness: 'none',
    language: 'en'
  });

  const [isVisible, setIsVisible] = useState(false);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('zion-accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applyAccessibilitySettings(parsed);
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }
    
    // Show the component after a delay for better UX
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Apply accessibility settings to the document
  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Font size
    root.style.setProperty('--font-size-multiplier', 
      newSettings.fontSize === 'small' ? '0.875' : 
      newSettings.fontSize === 'large' ? '1.25' : '1'
    );
    
    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.1s');
    } else {
      root.style.setProperty('--animation-duration', '0.3s');
    }
    
    // Color blindness
    root.style.setProperty('--color-blindness-filter', 
      newSettings.colorBlindness === 'none' ? 'none' :
      newSettings.colorBlindness === 'protanopia' ? 'protanopia' :
      newSettings.colorBlindness === 'deuteranopia' ? 'deuteranopia' :
      'tritanopia'
    );
    
    // Focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add('show-focus-indicator');
    } else {
      root.classList.remove('show-focus-indicator');
    }
    
    // Save to localStorage
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(newSettings));
    
    // Notify parent component
    onSettingsChange?.(newSettings);
  }, [onSettingsChange]);

  // Handle setting changes
  const handleSettingChange = (key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
  };

  // Toggle accessibility panel
  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  // Quick accessibility actions
  const quickActions = [
    {
      icon: <Contrast className="w-5 h-5" />,
      label: 'Toggle High Contrast',
      action: () => handleSettingChange('highContrast', !settings.highContrast),
      active: settings.highContrast
    },
    {
      icon: <Type className="w-5 h-5" />,
      label: 'Increase Font Size',
      action: () => {
        const sizes: ('small' | 'medium' | 'large')[] = ['small', 'medium', 'large'];
        const currentIndex = sizes.indexOf(settings.fontSize);
        const nextIndex = (currentIndex + 1) % sizes.length;
        handleSettingChange('fontSize', sizes[nextIndex]);
      }
    },
    {
      icon: <MousePointer className="w-5 h-5" />,
      label: 'Toggle Focus Indicator',
      action: () => handleSettingChange('focusIndicator', !settings.focusIndicator),
      active: settings.focusIndicator
    }
  ];

  // Position classes
  const getPositionClasses = () => {
    switch (position) {
      case 'top-left': return 'top-4 left-4';
      case 'top-right': return 'top-4 right-4';
      case 'bottom-left': return 'bottom-4 left-4';
      case 'bottom-right': return 'bottom-4 right-4';
      default: return 'bottom-4 right-4';
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed z-50 ${getPositionClasses()}`}>
      {/* Main Accessibility Button */}
      <motion.button
        onClick={togglePanel}
        onKeyDown={handleKeyDown}
        className={`
          relative w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 
          hover:from-blue-700 hover:to-purple-700 
          text-white rounded-full shadow-lg 
          flex items-center justify-center
          transition-all duration-300 ease-in-out
          focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50
          ${settings.highContrast ? 'ring-4 ring-yellow-400' : ''}
        `}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Accessibility Settings"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <Accessibility className="w-6 h-6" />
        
        {/* Notification badge for active features */}
        {Object.values(settings).some(setting => 
          setting === true || (typeof setting === 'string' && setting !== 'medium' && setting !== 'none' && setting !== 'en')
        ) && (
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          />
        )}
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`
              absolute ${position.includes('right') ? 'right-0' : 'left-0'} 
              ${position.includes('top') ? 'bottom-full mb-2' : 'top-full mt-2'}
              w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700
              p-4 space-y-4
            `}
            role="dialog"
            aria-label="Accessibility Settings"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Accessibility className="w-5 h-5" />
                Accessibility
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                aria-label="Close accessibility settings"
              >
                ×
              </button>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Quick Actions</h4>
              <div className="grid grid-cols-3 gap-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.action}
                    className={`
                      p-2 rounded-lg border transition-all duration-200
                      ${action.active 
                        ? 'bg-blue-100 border-blue-300 text-blue-700 dark:bg-blue-900 dark:border-blue-600 dark:text-blue-300'
                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600'
                      }
                    `}
                    aria-label={action.label}
                  >
                    {action.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Detailed Settings */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Settings</h4>
              
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Contrast className="w-4 h-4" />
                  High Contrast
                </label>
                <button
                  onClick={() => handleSettingChange('highContrast', !settings.highContrast)}
                  className={`
                    relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                    ${settings.highContrast ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'}
                  `}
                  role="switch"
                  aria-checked={settings.highContrast}
                >
                  <span
                    className={`
                      inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                      ${settings.highContrast ? 'translate-x-6' : 'translate-x-1'}
                    `}
                  />
                </button>
              </div>

              {/* Font Size */}
              <div className="space-y-2">
                <label className="text-sm text-gray-700 dark:text-gray-300">Font Size</label>
                <div className="flex gap-2">
                  {(['small', 'medium', 'large'] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSettingChange('fontSize', size)}
                      className={`
                        px-3 py-1 rounded text-sm transition-all duration-200
                        ${settings.fontSize === size
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                        }
                      `}
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Focus Indicator */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <Keyboard className="w-4 h-4" />
                  Focus Indicator
                </label>
                <button
                  onClick={() => handleSettingChange('focusIndicator', !settings.focusIndicator)}
                  className={`
                    relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                    ${settings.focusIndicator ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'}
                  `}
                  role="switch"
                  aria-checked={settings.focusIndicator}
                >
                  <span
                    className={`
                      inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                      ${settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'}
                    `}
                  />
                </button>
              </div>

              {/* Color Blindness */}
              <div className="space-y-2">
                <label className="text-sm text-gray-700 dark:text-gray-300">Color Vision</label>
                <select
                  value={settings.colorBlindness}
                  onChange={(e) => handleSettingChange('colorBlindness', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                >
                  <option value="none">Normal Vision</option>
                  <option value="protanopia">Protanopia (Red-Blind)</option>
                  <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                  <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                </select>
              </div>
            </div>

            {/* Help Text */}
            <div className="text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-3">
              <p>Use Tab to navigate, Enter to select, and Escape to close.</p>
              <p>Settings are automatically saved and applied.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedAccessibility;
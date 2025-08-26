import React, { useEffect, useState, useRef } from 'react';
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
  MousePointer,
  Accessibility,
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
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  onSettingsChange?: (settings: AccessibilitySettings) => void;
}

const defaultSettings: AccessibilitySettings = {
  highContrast: false,
  largeText: false,
  reducedMotion: false,
  screenReader: false,
  keyboardNavigation: true,
  focusIndicator: true,
  fontSize: 16,
  lineHeight: 1.5,
  letterSpacing: 0
};

export function AccessibilityEnhancer({ 
  enabled = true, 
  onSettingsChange 
}: AccessibilityEnhancerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const [isOpen, setIsOpen] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const focusHistory = useRef<HTMLElement[]>([]);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings({ ...defaultSettings, ...parsed });
        applySettings({ ...defaultSettings, ...parsed });
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  // Apply accessibility settings to the document
  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    const body = document.body;

    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      body.style.filter = 'contrast(1.5) saturate(1.2)';
    } else {
      root.classList.remove('high-contrast');
      body.style.filter = '';
    }

    // Large text
    if (newSettings.largeText) {
      root.style.fontSize = '18px';
      root.style.lineHeight = '1.6';
    } else {
      root.style.fontSize = '16px';
      root.style.lineHeight = '1.5';
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
    } else {
      root.style.setProperty('--reduced-motion', 'no-preference');
    }

    // Focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add('show-focus-indicator');
    } else {
      root.classList.remove('show-focus-indicator');
    }

    // Custom font settings
    root.style.setProperty('--font-size', `${newSettings.fontSize}px`);
    root.style.setProperty('--line-height', newSettings.lineHeight.toString());
    root.style.setProperty('--letter-spacing', `${newSettings.letterSpacing}px`);

    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    
    // Notify parent component
    if (onSettingsChange) {
      onSettingsChange(newSettings);
    }
  };

  // Handle settings change
  const handleSettingChange = (key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
  };

  // Enhanced keyboard navigation
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      
      // Tab navigation with visual feedback
      if (event.key === 'Tab') {
        setCurrentFocus(target);
        focusHistory.current.push(target);
        
        // Keep only last 10 focus elements
        if (focusHistory.current.length > 10) {
          focusHistory.current.shift();
        }
      }

      // Escape key to close modals/dropdowns
      if (event.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.classList.contains('modal')) {
          activeElement.blur();
        }
      }

      // Enter/Space key for custom elements
      if ((event.key === 'Enter' || event.key === ' ') && target.getAttribute('role') === 'button') {
        event.preventDefault();
        target.click();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Screen reader announcements
  const announceToScreenReader = (message: string) => {
    if (!settings.screenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  // Quick actions
  const quickActions = [
    {
      name: 'Toggle High Contrast',
      icon: Contrast,
      action: () => handleSettingChange('highContrast', !settings.highContrast),
      description: 'Switch between normal and high contrast mode'
    },
    {
      name: 'Increase Font Size',
      icon: ZoomIn,
      action: () => handleSettingChange('fontSize', Math.min(settings.fontSize + 2, 24)),
      description: 'Make text larger for better readability'
    },
    {
      name: 'Decrease Font Size',
      icon: ZoomOut,
      action: () => handleSettingChange('fontSize', Math.max(settings.fontSize - 2, 12)),
      description: 'Make text smaller to fit more content'
    },
    {
      name: 'Toggle Reduced Motion',
      icon: Eye,
      action: () => handleSettingChange('reducedMotion', !settings.reducedMotion),
      description: 'Reduce animations for users with motion sensitivity'
    }
  ];

  if (!enabled) return null;

  return (
    <>
      {/* Floating Accessibility Button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-zion-cyan to-zion-blue text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Accessibility Settings"
        title="Accessibility Settings"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 left-6 z-50 w-80 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Accessibility className="w-5 h-5" />
                  <h3 className="font-semibold">Accessibility</h3>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {/* Quick Actions */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                  Quick Actions
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={action.action}
                      className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      title={action.description}
                    >
                      <action.icon className="w-5 h-5 text-zion-cyan mb-2" />
                      <span className="text-xs text-gray-700 dark:text-gray-300 text-center">
                        {action.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Settings */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                  Settings
                </h4>
                <div className="space-y-3">
                  {/* High Contrast */}
                  <label className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
                    <button
                      onClick={() => handleSettingChange('highContrast', !settings.highContrast)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.highContrast ? 'bg-zion-cyan' : 'bg-gray-300'
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
                  </label>

                  {/* Large Text */}
                  <label className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>
                    <button
                      onClick={() => handleSettingChange('largeText', !settings.largeText)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.largeText ? 'bg-zion-cyan' : 'bg-gray-300'
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
                  </label>

                  {/* Reduced Motion */}
                  <label className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Reduced Motion</span>
                    <button
                      onClick={() => handleSettingChange('reducedMotion', !settings.reducedMotion)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.reducedMotion ? 'bg-zion-cyan' : 'bg-gray-300'
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
                  </label>

                  {/* Focus Indicator */}
                  <label className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Focus Indicator</span>
                    <button
                      onClick={() => handleSettingChange('focusIndicator', !settings.focusIndicator)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.focusIndicator ? 'bg-zion-cyan' : 'bg-gray-300'
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
                  </label>
                </div>
              </div>

              {/* Font Size Slider */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Font Size: {settings.fontSize}px
                </label>
                <input
                  type="range"
                  min="12"
                  max="24"
                  value={settings.fontSize}
                  onChange={(e) => handleSettingChange('fontSize', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              {/* Line Height Slider */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Line Height: {settings.lineHeight}
                </label>
                <input
                  type="range"
                  min="1.2"
                  max="2.0"
                  step="0.1"
                  value={settings.lineHeight}
                  onChange={(e) => handleSettingChange('lineHeight', parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 dark:bg-gray-800 p-3 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => {
                  setSettings(defaultSettings);
                  applySettings(defaultSettings);
                  announceToScreenReader('Accessibility settings reset to default');
                }}
                className="w-full px-3 py-2 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Reset to Default
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Focus indicator for current element */}
      {currentFocus && settings.focusIndicator && (
        <div
          className="fixed pointer-events-none z-[9999] border-2 border-zion-cyan rounded transition-all duration-200"
          style={{
            top: currentFocus.offsetTop - 2,
            left: currentFocus.offsetLeft - 2,
            width: currentFocus.offsetWidth + 4,
            height: currentFocus.offsetHeight + 4,
          }}
        />
      )}
    </>
  );
}

export default AccessibilityEnhancer;
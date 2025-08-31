import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Type, 
  Volume2, 
  VolumeX, 
  Contrast, 
  MousePointer,
  Keyboard,
  Monitor,
  Smartphone,
  Settings,
  X,
  Check,
  AlertTriangle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: 'small' | 'medium' | 'large' | 'x-large';
  reducedMotion: boolean;
  highContrastMode: boolean;
  largeText: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
}

interface EnhancedAccessibilityEnhancerProps {
  enabled?: boolean;
  showPanel?: boolean;
  onSettingsChange?: (settings: AccessibilitySettings) => void;
}

export const EnhancedAccessibilityEnhancer: React.FC<EnhancedAccessibilityEnhancerProps> = ({
  enabled = true,
  showPanel = false,
  onSettingsChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 'medium',
    reducedMotion: false,
    highContrastMode: false,
    largeText: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true
  });

  const [activeFeatures, setActiveFeatures] = useState<string[]>([]);
  const [accessibilityScore, setAccessibilityScore] = useState(85);

  // Font size mapping
  const fontSizeMap = {
    'small': '0.875rem',
    'medium': '1rem',
    'large': '1.125rem',
    'x-large': '1.25rem'
  };

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrastMode) {
      root.style.setProperty('--high-contrast', '1');
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.style.setProperty('--high-contrast', '0');
      root.style.setProperty('--bg-primary', '#0f172a');
      root.style.setProperty('--text-primary', '#f8fafc');
      root.style.setProperty('--accent-color', '#06b6d4');
    }

    // Font size
    root.style.setProperty('--font-size-base', fontSizeMap[newSettings.fontSize]);
    
    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--reduced-motion', '1');
    } else {
      root.style.setProperty('--reduced-motion', '0');
    }

    // Large text
    if (newSettings.largeText) {
      root.style.setProperty('--large-text', '1');
      root.style.setProperty('--line-height', '1.8');
      root.style.setProperty('--letter-spacing', '0.05em');
    } else {
      root.style.setProperty('--large-text', '0');
      root.style.setProperty('--line-height', '1.6');
      root.style.setProperty('--letter-spacing', 'normal');
    }

    // Focus indicator
    if (newSettings.focusIndicator) {
      root.style.setProperty('--focus-visible', '2px solid #06b6d4');
    } else {
      root.style.setProperty('--focus-visible', 'none');
    }

    setSettings(newSettings);
    onSettingsChange?.(newSettings);
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, [onSettingsChange]);

  // Load saved settings
  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        const savedSettings = JSON.parse(saved);
        setSettings(savedSettings);
        applySettings(savedSettings);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Calculate accessibility score
  useEffect(() => {
    let score = 100;
    const features: string[] = [];

    if (settings.highContrastMode) {
      score += 10;
      features.push('High Contrast');
    }
    if (settings.largeText) {
      score += 8;
      features.push('Large Text');
    }
    if (settings.reducedMotion) {
      score += 5;
      features.push('Reduced Motion');
    }
    if (settings.focusIndicator) {
      score += 7;
      features.push('Focus Indicator');
    }
    if (settings.keyboardNavigation) {
      score += 10;
      features.push('Keyboard Navigation');
    }

    setAccessibilityScore(Math.min(100, score));
    setActiveFeatures(features);
  }, [settings]);

  // Enhanced keyboard navigation
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const { key, target } = event;
      const element = target as HTMLElement;

      // Skip if in input/textarea
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') return;

      switch (key) {
        case 'Tab':
          // Enhanced tab navigation
          if (event.shiftKey) {
            // Previous element
            const prevFocusable = getPreviousFocusableElement(element);
            if (prevFocusable) {
              event.preventDefault();
              prevFocusable.focus();
            }
          } else {
            // Next element
            const nextFocusable = getNextFocusableElement(element);
            if (nextFocusable) {
              event.preventDefault();
              nextFocusable.focus();
            }
          }
          break;

        case 'Enter':
        case ' ':
          // Activate buttons and links
          if (element.tagName === 'BUTTON' || element.tagName === 'A') {
            event.preventDefault();
            element.click();
          }
          break;

        case 'Escape':
          // Close modals and panels
          if (isOpen) {
            setIsOpen(false);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation, isOpen]);

  // Helper functions for keyboard navigation
  const getNextFocusableElement = (currentElement: HTMLElement): HTMLElement | null => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const currentIndex = Array.from(focusableElements).indexOf(currentElement);
    const nextIndex = (currentIndex + 1) % focusableElements.length;
    
    return focusableElements[nextIndex] as HTMLElement;
  };

  const getPreviousFocusableElement = (currentElement: HTMLElement): HTMLElement | null => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const currentIndex = Array.from(focusableElements).indexOf(currentElement);
    const prevIndex = currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1;
    
    return focusableElements[prevIndex] as HTMLElement;
  };

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
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
  }, [settings.screenReader]);

  // Toggle settings
  const toggleSetting = useCallback((key: keyof AccessibilitySettings) => {
    const newSettings = {
      ...settings,
      [key]: !settings[key]
    };
    
    applySettings(newSettings);
    
    // Announce changes to screen reader
    const settingNames = {
      highContrastMode: 'High contrast mode',
      largeText: 'Large text mode',
      reducedMotion: 'Reduced motion mode',
      focusIndicator: 'Focus indicator',
      keyboardNavigation: 'Keyboard navigation'
    };
    
    if (newSettings[key]) {
      announceToScreenReader(`${settingNames[key]} enabled`);
    } else {
      announceToScreenReader(`${settingNames[key]} disabled`);
    }
  }, [settings, applySettings, announceToScreenReader]);

  // Change font size
  const changeFontSize = useCallback((size: AccessibilitySettings['fontSize']) => {
    const newSettings = { ...settings, fontSize: size };
    applySettings(newSettings);
    announceToScreenReader(`Font size changed to ${size}`);
  }, [settings, applySettings, announceToScreenReader]);

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-50 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Accessibility Settings"
        aria-label="Open accessibility settings"
      >
        <Settings className="w-7 h-7 text-white mx-auto" />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-xs text-white font-bold">
            {accessibilityScore}
          </span>
        </div>
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -400 }}
            className="fixed top-20 left-4 z-40 w-96 bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Eye className="w-5 h-5 text-purple-400" />
                  Accessibility Settings
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close accessibility settings"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Accessibility Score */}
              <div className="mb-6 p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Accessibility Score</span>
                  <span className={`text-2xl font-bold ${
                    accessibilityScore >= 90 ? 'text-green-500' :
                    accessibilityScore >= 70 ? 'text-yellow-500' : 'text-red-500'
                  }`}>
                    {accessibilityScore}
                  </span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      accessibilityScore >= 90 ? 'bg-green-500' :
                      accessibilityScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${accessibilityScore}%` }}
                  />
                </div>
                {activeFeatures.length > 0 && (
                  <div className="mt-2 text-xs text-gray-400">
                    Active: {activeFeatures.join(', ')}
                  </div>
                )}
              </div>

              {/* Settings Grid */}
              <div className="space-y-4">
                {/* High Contrast */}
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Contrast className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-sm font-medium text-white">High Contrast</div>
                      <div className="text-xs text-gray-400">Enhanced visibility</div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('highContrastMode')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.highContrastMode ? 'bg-purple-500' : 'bg-slate-600'
                    }`}
                    aria-label={`${settings.highContrastMode ? 'Disable' : 'Enable'} high contrast mode`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                      settings.highContrastMode ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                {/* Large Text */}
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Type className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-sm font-medium text-white">Large Text</div>
                      <div className="text-xs text-gray-400">Improved readability</div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('largeText')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.largeText ? 'bg-blue-500' : 'bg-slate-600'
                    }`}
                    aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text mode`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                      settings.largeText ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Monitor className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="text-sm font-medium text-white">Reduced Motion</div>
                      <div className="text-xs text-gray-400">Minimize animations</div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('reducedMotion')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.reducedMotion ? 'bg-green-500' : 'bg-slate-600'
                    }`}
                    aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion mode`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                      settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                {/* Focus Indicator */}
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <MousePointer className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-sm font-medium text-white">Focus Indicator</div>
                      <div className="text-xs text-gray-400">Highlight focus</div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('focusIndicator')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.focusIndicator ? 'bg-cyan-500' : 'bg-slate-600'
                    }`}
                    aria-label={`${settings.focusIndicator ? 'Disable' : 'Enable'} focus indicator`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                      settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                {/* Keyboard Navigation */}
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Keyboard className="w-5 h-5 text-orange-400" />
                    <div>
                      <div className="text-sm font-medium text-white">Keyboard Navigation</div>
                      <div className="text-xs text-gray-400">Enhanced keyboard support</div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('keyboardNavigation')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.keyboardNavigation ? 'bg-orange-500' : 'bg-slate-600'
                    }`}
                    aria-label={`${settings.keyboardNavigation ? 'Disable' : 'Enable'} keyboard navigation`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                      settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                {/* Font Size Control */}
                <div className="p-3 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Type className="w-5 h-5 text-indigo-400" />
                    <div>
                      <div className="text-sm font-medium text-white">Font Size</div>
                      <div className="text-xs text-gray-400">Adjust text size</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {(['small', 'medium', 'large', 'x-large'] as const).map((size) => (
                      <button
                        key={size}
                        onClick={() => changeFontSize(size)}
                        className={`px-3 py-1 text-xs rounded transition-colors ${
                          settings.fontSize === size
                            ? 'bg-indigo-500 text-white'
                            : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                        }`}
                        aria-label={`Set font size to ${size}`}
                      >
                        {size.charAt(0).toUpperCase() + size.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-6 pt-4 border-t border-slate-700/50">
                <h4 className="text-sm font-medium text-white mb-3">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      const newSettings = {
                        ...settings,
                        highContrastMode: true,
                        largeText: true,
                        focusIndicator: true
                      };
                      applySettings(newSettings);
                    }}
                    className="px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs rounded transition-colors"
                  >
                    Enable All
                  </button>
                  <button
                    onClick={() => {
                      const newSettings = {
                        ...settings,
                        highContrastMode: false,
                        largeText: false,
                        reducedMotion: false,
                        focusIndicator: false
                      };
                      applySettings(newSettings);
                    }}
                    className="px-3 py-2 bg-slate-600 hover:bg-slate-700 text-white text-xs rounded transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Only Class */}
      <style jsx>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>
    </>
  );
};
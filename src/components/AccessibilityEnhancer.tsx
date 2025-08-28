import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Sun, 
  Moon, 
  Contrast, 
  Type, 
  MousePointer,
  Keyboard,
  Accessibility,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  colorBlindness: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
}

interface AccessibilityEnhancerProps {
  enableHighContrast?: boolean;
  enableLargeText?: boolean;
  enableReducedMotion?: boolean;
  enableScreenReader?: boolean;
  enableKeyboardNavigation?: boolean;
  enableFocusIndicators?: boolean;
  enableColorBlindness?: boolean;
  enableFontSize?: boolean;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableHighContrast = true,
  enableLargeText = true,
  enableReducedMotion = true,
  enableScreenReader = true,
  enableKeyboardNavigation = true,
  enableFocusIndicators = true,
  enableColorBlindness = true,
  enableFontSize = true
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: false,
    colorBlindness: 'normal',
    fontSize: 'medium'
  });

  const [showPanel, setShowPanel] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [accessibilityScore, setAccessibilityScore] = useState(0);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applySettings(parsed);
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (enableHighContrast) {
      if (newSettings.highContrast) {
        root.classList.add('high-contrast');
        root.style.setProperty('--text-primary', '#ffffff');
        root.style.setProperty('--text-secondary', '#cccccc');
        root.style.setProperty('--bg-primary', '#000000');
        root.style.setProperty('--bg-secondary', '#1a1a1a');
      } else {
        root.classList.remove('high-contrast');
        root.style.removeProperty('--text-primary');
        root.style.removeProperty('--text-secondary');
        root.style.removeProperty('--bg-primary');
        root.style.removeProperty('--bg-secondary');
      }
    }

    // Large text
    if (enableLargeText) {
      const fontSizeMap = {
        small: '14px',
        medium: '16px',
        large: '18px',
        xlarge: '20px'
      };
      root.style.fontSize = fontSizeMap[newSettings.fontSize];
    }

    // Reduced motion
    if (enableReducedMotion) {
      if (newSettings.reducedMotion) {
        root.style.setProperty('--motion-reduced', 'true');
        root.classList.add('reduced-motion');
      } else {
        root.style.removeProperty('--motion-reduced');
        root.classList.remove('reduced-motion');
      }
    }

    // Focus indicators
    if (enableFocusIndicators) {
      if (newSettings.focusIndicators) {
        root.classList.add('focus-visible');
        root.style.setProperty('--focus-ring', '3px solid #3b82f6');
      } else {
        root.classList.remove('focus-visible');
        root.style.removeProperty('--focus-ring');
      }
    }

    // Color blindness
    if (enableColorBlindness) {
      root.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
      if (newSettings.colorBlindness !== 'normal') {
        root.classList.add(newSettings.colorBlindness);
      }
    }

    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, [enableHighContrast, enableLargeText, enableReducedMotion, enableFocusIndicators, enableColorBlindness]);

  // Update settings
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
  }, [settings, applySettings]);

  // Keyboard navigation enhancement
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        setCurrentFocus(document.activeElement as HTMLElement);
      }
      
      // Skip to main content
      if (event.key === 's' && event.ctrlKey) {
        event.preventDefault();
        const mainContent = document.querySelector('main') || document.querySelector('#main-content');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }
      
      // Skip to navigation
      if (event.key === 'n' && event.ctrlKey) {
        event.preventDefault();
        const navigation = document.querySelector('nav') || document.querySelector('header');
        if (navigation) {
          (navigation as HTMLElement).focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Focus management
  useEffect(() => {
    if (!enableFocusIndicators) return;

    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      setCurrentFocus(target);
      
      // Add focus ring
      target.style.outline = '3px solid #3b82f6';
      target.style.outlineOffset = '2px';
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      target.style.outline = '';
      target.style.outlineOffset = '';
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    
    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [enableFocusIndicators]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!enableScreenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, [enableScreenReader]);

  // Calculate accessibility score
  useEffect(() => {
    let score = 0;
    
    if (settings.highContrast) score += 15;
    if (settings.largeText) score += 15;
    if (settings.reducedMotion) score += 10;
    if (settings.screenReader) score += 20;
    if (settings.keyboardNavigation) score += 15;
    if (settings.focusIndicators) score += 15;
    if (settings.colorBlindness !== 'normal') score += 10;
    
    setAccessibilityScore(score);
  }, [settings]);

  // Toggle panel
  const togglePanel = () => {
    setShowPanel(!showPanel);
    announceToScreenReader(showPanel ? 'Accessibility panel closed' : 'Accessibility panel opened');
  };

  // Quick accessibility shortcuts
  const quickActions = [
    {
      label: 'Toggle High Contrast',
      action: () => updateSetting('highContrast', !settings.highContrast),
      icon: Contrast,
      active: settings.highContrast
    },
    {
      label: 'Toggle Large Text',
      action: () => updateSetting('largeText', !settings.largeText),
      icon: Type,
      active: settings.largeText
    },
    {
      label: 'Toggle Reduced Motion',
      action: () => updateSetting('reducedMotion', !settings.reducedMotion),
      icon: MousePointer,
      active: settings.reducedMotion
    }
  ];

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={togglePanel}
        className="fixed bottom-20 right-4 z-50 bg-gradient-to-r from-purple-600 to-pink-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        title="Accessibility Settings"
        aria-label="Open accessibility settings panel"
      >
        <Accessibility className="w-5 h-5" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl border-l border-gray-200 z-50 overflow-y-auto"
            role="dialog"
            aria-label="Accessibility Settings"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Accessibility</h2>
                <button
                  onClick={togglePanel}
                  className="text-gray-400 hover:text-gray-600"
                  aria-label="Close accessibility panel"
                >
                  ×
                </button>
              </div>

              {/* Accessibility Score */}
              <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Accessibility Score</span>
                  <span className="text-lg font-bold text-blue-600">{accessibilityScore}/100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${accessibilityScore}%` }}
                  />
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Actions</h3>
                <div className="space-y-2">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={action.action}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg border transition-all duration-200 ${
                        action.active
                          ? 'bg-blue-50 border-blue-200 text-blue-700'
                          : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <action.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{action.label}</span>
                      {action.active && <CheckCircle className="w-4 h-4 text-blue-600 ml-auto" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Detailed Settings */}
              <div className="space-y-6">
                {/* High Contrast */}
                {enableHighContrast && (
                  <div>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.highContrast}
                        onChange={(e) => updateSetting('highContrast', e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm font-medium text-gray-700">High Contrast</span>
                    </label>
                    <p className="text-xs text-gray-500 mt-1">Enhance text and background contrast</p>
                  </div>
                )}

                {/* Large Text */}
                {enableLargeText && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Font Size</label>
                    <select
                      value={settings.fontSize}
                      onChange={(e) => updateSetting('fontSize', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                      <option value="xlarge">Extra Large</option>
                    </select>
                  </div>
                )}

                {/* Reduced Motion */}
                {enableReducedMotion && (
                  <div>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.reducedMotion}
                        onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm font-medium text-gray-700">Reduced Motion</span>
                    </label>
                    <p className="text-xs text-gray-500 mt-1">Minimize animations and transitions</p>
                  </div>
                )}

                {/* Focus Indicators */}
                {enableFocusIndicators && (
                  <div>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={settings.focusIndicators}
                        onChange={(e) => updateSetting('focusIndicators', e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm font-medium text-gray-700">Focus Indicators</span>
                    </label>
                    <p className="text-xs text-gray-500 mt-1">Show clear focus indicators</p>
                  </div>
                )}

                {/* Color Blindness */}
                {enableColorBlindness && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Color Vision</label>
                    <select
                      value={settings.colorBlindness}
                      onChange={(e) => updateSetting('colorBlindness', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="normal">Normal</option>
                      <option value="protanopia">Protanopia (Red-Blind)</option>
                      <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                      <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Keyboard Shortcuts */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Keyboard Shortcuts</h3>
                <div className="space-y-1 text-xs text-gray-600">
                  <div><kbd className="px-1 py-0.5 bg-white border rounded">Ctrl + S</kbd> Skip to main content</div>
                  <div><kbd className="px-1 py-0.5 bg-white border rounded">Ctrl + N</kbd> Skip to navigation</div>
                  <div><kbd className="px-1 py-0.5 bg-white border rounded">Tab</kbd> Navigate elements</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Focus indicator for current element */}
      {currentFocus && settings.focusIndicators && (
        <div
          className="fixed pointer-events-none z-[9999] border-2 border-blue-500 rounded transition-all duration-200"
          style={{
            top: currentFocus.offsetTop - 2,
            left: currentFocus.offsetLeft - 2,
            width: currentFocus.offsetWidth + 4,
            height: currentFocus.offsetHeight + 4
          }}
        />
      )}
    </>
  );
};

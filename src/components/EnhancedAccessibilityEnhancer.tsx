import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  Contrast,
  Type,
  MousePointer,
  Keyboard,
  Smartphone,
  Monitor,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info,
  Accessibility,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  colorBlindMode: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  textScale: number;
  cursorSize: 'normal' | 'large' | 'extra-large';
  showFocusRings: boolean;
}

interface AccessibilityFeature {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  category: 'visual' | 'navigation' | 'audio' | 'cognitive';
  icon: React.ComponentType<any>;
  toggle: () => void;
  settings?: React.ReactNode;
}

export const EnhancedAccessibilityEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: true,
    colorBlindMode: 'none',
    textScale: 1,
    cursorSize: 'normal',
    showFocusRings: true
  });

  const [activeFeatures, setActiveFeatures] = useState<string[]>([]);
  const [accessibilityScore, setAccessibilityScore] = useState<number>(0);

  // Apply accessibility settings to the document
  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--high-contrast', '1');
    } else {
      root.classList.remove('high-contrast');
      root.style.setProperty('--high-contrast', '0');
    }

    // Large text mode
    if (newSettings.largeText) {
      root.classList.add('large-text');
      root.style.setProperty('--text-scale', '1.2');
    } else {
      root.classList.remove('large-text');
      root.style.setProperty('--text-scale', '1');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
      root.style.setProperty('--reduced-motion', '1');
    } else {
      root.classList.remove('reduced-motion');
      root.style.setProperty('--reduced-motion', '0');
    }

    // Focus indicators
    if (newSettings.showFocusRings) {
      root.classList.add('show-focus-indicators');
    } else {
      root.classList.remove('show-focus-indicators');
    }

    // Color blind mode
    root.classList.remove('protanopia-filter', 'deuteranopia-filter', 'tritanopia-filter');
    if (newSettings.colorBlindMode !== 'none') {
      root.classList.add(`${newSettings.colorBlindMode}-filter`);
    }

    // Text scale
    root.style.setProperty('--text-scale', newSettings.textScale.toString());

    // Cursor size
    root.style.setProperty('--cursor-size', newSettings.cursorSize === 'normal' ? '1' : newSettings.cursorSize === 'large' ? '2' : '3');
  }, []);

  // Update settings and apply them
  const updateSettings = useCallback((updates: Partial<AccessibilitySettings>) => {
    const newSettings = { ...settings, ...updates };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, [settings, applyAccessibilitySettings]);

  // Load saved settings on mount
  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        const savedSettings = JSON.parse(saved);
        setSettings(savedSettings);
        applyAccessibilitySettings(savedSettings);
      } catch (e) {
        console.warn('Failed to load accessibility settings:', e);
      }
    }
  }, [applyAccessibilitySettings]);

  // Calculate accessibility score
  useEffect(() => {
    let score = 0;
    const totalFeatures = Object.keys(settings).length;
    
    Object.values(settings).forEach(value => {
      if (typeof value === 'boolean' && value) score++;
      else if (typeof value === 'string' && value !== 'none') score++;
      else if (typeof value === 'number' && value > 1) score++;
    });
    
    setAccessibilityScore(Math.round((score / totalFeatures) * 100));
  }, [settings]);

  // Toggle individual features
  const toggleFeature = useCallback((featureId: string) => {
    setActiveFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  }, []);

  // Reset all settings
  const resetSettings = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicators: true,
      colorBlindMode: 'none',
      textScale: 1,
      cursorSize: 'normal',
      showFocusRings: true
    };
    
    setSettings(defaultSettings);
    applyAccessibilitySettings(defaultSettings);
    localStorage.removeItem('accessibility-settings');
  }, [applyAccessibilitySettings]);

  // Accessibility features list
  const accessibilityFeatures: AccessibilityFeature[] = [
    {
      id: 'high-contrast',
      name: 'High Contrast',
      description: 'Increase contrast for better visibility',
      enabled: settings.highContrast,
      category: 'visual',
      icon: Contrast,
      toggle: () => updateSettings({ highContrast: !settings.highContrast })
    },
    {
      id: 'large-text',
      name: 'Large Text',
      description: 'Increase text size for better readability',
      enabled: settings.largeText,
      category: 'visual',
      icon: Type,
      toggle: () => updateSettings({ largeText: !settings.largeText })
    },
    {
      id: 'reduced-motion',
      name: 'Reduced Motion',
      description: 'Reduce animations and motion effects',
      enabled: settings.reducedMotion,
      category: 'cognitive',
      icon: EyeOff,
      toggle: () => updateSettings({ reducedMotion: !settings.reducedMotion })
    },
    {
      id: 'focus-indicators',
      name: 'Focus Indicators',
      description: 'Show clear focus indicators for keyboard navigation',
      enabled: settings.showFocusRings,
      category: 'navigation',
      icon: MousePointer,
      toggle: () => updateSettings({ showFocusRings: !settings.showFocusRings })
    },
    {
      id: 'keyboard-nav',
      name: 'Keyboard Navigation',
      description: 'Enable enhanced keyboard navigation support',
      enabled: settings.keyboardNavigation,
      category: 'navigation',
      icon: Keyboard,
      toggle: () => updateSettings({ keyboardNavigation: !settings.keyboardNavigation })
    }
  ];

  // Enhanced keyboard navigation
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.target === document.body) {
        const mainContent = document.querySelector('main, [role="main"]');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }

      // Quick navigation shortcuts
      if (e.altKey) {
        switch (e.key) {
          case '1':
            e.preventDefault();
            window.location.href = '/';
            break;
          case '2':
            e.preventDefault();
            window.location.href = '/services';
            break;
          case '3':
            e.preventDefault();
            window.location.href = '/about';
            break;
          case '4':
            e.preventDefault();
            window.location.href = '/contact';
            break;
          case 'a':
            e.preventDefault();
            setIsOpen(!isOpen);
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation, isOpen]);

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

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-50 bg-gradient-to-r from-green-600 to-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open accessibility settings"
        aria-expanded={isOpen}
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed left-4 bottom-20 z-50 w-96 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-200 max-h-[80vh] overflow-hidden"
          >
            {/* Panel Header */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Accessibility className="w-5 h-5" />
                  Accessibility Center
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Close accessibility settings"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Accessibility Score */}
              <div className="mt-3 flex items-center gap-3">
                <div className="relative">
                  <svg className="w-12 h-12 transform -rotate-90">
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="transparent"
                      className="text-white/30"
                    />
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="transparent"
                      strokeDasharray={`${(accessibilityScore / 100) * 125.66} 125.66`}
                      className={`transition-all duration-1000 ${
                        accessibilityScore >= 80 ? 'text-green-300' : 
                        accessibilityScore >= 60 ? 'text-yellow-300' : 'text-red-300'
                      }`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold">{accessibilityScore}</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-white/80">Accessibility Score</div>
                  <div className="text-lg font-semibold">
                    {accessibilityScore >= 80 ? 'Excellent' : 
                     accessibilityScore >= 60 ? 'Good' : 'Needs Improvement'}
                  </div>
                </div>
              </div>
            </div>

            {/* Panel Content */}
            <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
              {/* Quick Features */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-700">Quick Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {accessibilityFeatures.slice(0, 4).map((feature) => (
                    <button
                      key={feature.id}
                      onClick={feature.toggle}
                      className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        feature.enabled
                          ? 'bg-green-100 text-green-700 border border-green-300'
                          : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
                      }`}
                      aria-pressed={feature.enabled}
                    >
                      <div className="flex items-center gap-2">
                        <feature.icon className="w-4 h-4" />
                        <span>{feature.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Advanced Settings */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-700">Advanced Settings</h3>
                
                {/* Text Scale */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">Text Scale</label>
                  <div className="flex items-center gap-2">
                    <ZoomOut className="w-4 h-4 text-gray-500" />
                    <input
                      type="range"
                      min="0.8"
                      max="2.0"
                      step="0.1"
                      value={settings.textScale}
                      onChange={(e) => updateSettings({ textScale: parseFloat(e.target.value) })}
                      className="flex-1"
                      aria-label="Adjust text size"
                    />
                    <ZoomIn className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600 w-12 text-center">
                      {Math.round(settings.textScale * 100)}%
                    </span>
                  </div>
                </div>

                {/* Color Blind Mode */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">Color Blind Mode</label>
                  <select
                    value={settings.colorBlindMode}
                    onChange={(e) => updateSettings({ colorBlindMode: e.target.value as any })}
                    className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                  >
                    <option value="none">None</option>
                    <option value="protanopia">Protanopia (Red-Blind)</option>
                    <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                    <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                  </select>
                </div>

                {/* Cursor Size */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">Cursor Size</label>
                  <div className="flex gap-2">
                    {(['normal', 'large', 'extra-large'] as const).map((size) => (
                      <button
                        key={size}
                        onClick={() => updateSettings({ cursorSize: size })}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          settings.cursorSize === size
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {size === 'normal' ? 'Normal' : size === 'large' ? 'Large' : 'Extra Large'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Keyboard Shortcuts */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-700">Keyboard Shortcuts</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Alt + 1:</span>
                    <span>Go to Home</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Alt + 2:</span>
                    <span>Go to Services</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Alt + 3:</span>
                    <span>Go to About</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Alt + 4:</span>
                    <span>Go to Contact</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Alt + A:</span>
                    <span>Toggle Accessibility</span>
                  </div>
                </div>
              </div>

              {/* Reset Button */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={resetSettings}
                  className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset All Settings
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Announcements */}
      {settings.screenReader && (
        <div
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
          id="accessibility-announcements"
        />
      )}
    </>
  );
};
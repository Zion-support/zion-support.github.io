import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  MousePointer,
  Keyboard,
  Monitor,
  Smartphone,
  X,
  Settings,
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
  colorBlindMode: boolean;
  dyslexiaFriendly: boolean;
}

interface AccessibilityFeature {
  id: keyof AccessibilitySettings;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  category: 'visual' | 'navigation' | 'reading' | 'interaction';
}

const accessibilityFeatures: AccessibilityFeature[] = [
  {
    id: 'highContrast',
    name: 'High Contrast',
    description: 'Increase contrast for better visibility',
    icon: Contrast,
    category: 'visual'
  },
  {
    id: 'largeText',
    name: 'Large Text',
    description: 'Increase font size for better readability',
    icon: Type,
    category: 'reading'
  },
  {
    id: 'reducedMotion',
    name: 'Reduced Motion',
    description: 'Reduce animations and transitions',
    icon: Eye,
    category: 'visual'
  },
  {
    id: 'screenReader',
    name: 'Screen Reader',
    description: 'Enable screen reader optimizations',
    icon: Volume2,
    category: 'reading'
  },
  {
    id: 'keyboardNavigation',
    name: 'Keyboard Navigation',
    description: 'Enhanced keyboard navigation support',
    icon: Keyboard,
    category: 'navigation'
  },
  {
    id: 'focusIndicators',
    name: 'Focus Indicators',
    description: 'Highlight focusable elements',
    icon: MousePointer,
    category: 'navigation'
  },
  {
    id: 'colorBlindMode',
    name: 'Color Blind Mode',
    description: 'Optimize colors for color blindness',
    icon: Eye,
    category: 'visual'
  },
  {
    id: 'dyslexiaFriendly',
    name: 'Dyslexia Friendly',
    description: 'Use dyslexia-friendly fonts and spacing',
    icon: Type,
    category: 'reading'
  }
];

export const EnhancedAccessibilityPanel: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'features' | 'settings' | 'help'>('features');
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: false,
    colorBlindMode: false,
    dyslexiaFriendly: false,
  });

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
  const applySettings = (newSettings: AccessibilitySettings) => {
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
    
    // Screen reader
    if (newSettings.screenReader) {
      root.setAttribute('aria-live', 'polite');
    } else {
      root.removeAttribute('aria-live');
    }
    
    // Keyboard navigation
    if (newSettings.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }
    
    // Focus indicators
    if (newSettings.focusIndicators) {
      root.classList.add('focus-indicators');
    } else {
      root.classList.remove('focus-indicators');
    }
    
    // Color blind mode
    if (newSettings.colorBlindMode) {
      root.classList.add('color-blind-mode');
    } else {
      root.classList.remove('color-blind-mode');
    }
    
    // Dyslexia friendly
    if (newSettings.dyslexiaFriendly) {
      root.classList.add('dyslexia-friendly');
    } else {
      root.classList.remove('dyslexia-friendly');
    }
  };

  // Update setting
  const updateSetting = (key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    applySettings(newSettings);
  };

  // Reset all settings
  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicators: false,
      colorBlindMode: false,
      dyslexiaFriendly: false,
    };
    setSettings(defaultSettings);
    localStorage.removeItem('accessibility-settings');
    applySettings(defaultSettings);
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl/Cmd + Shift + A to toggle accessibility panel
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        setIsVisible(!isVisible);
      }
      
      // Escape to close panel
      if (event.key === 'Escape' && isVisible) {
        setIsVisible(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isVisible]);

  const getCategoryFeatures = (category: AccessibilityFeature['category']) => {
    return accessibilityFeatures.filter(feature => feature.category === category);
  };

  const getFeatureStatus = (featureId: keyof AccessibilitySettings) => {
    return settings[featureId] ? 'enabled' : 'disabled';
  };

  if (!isVisible) {
    return (
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsVisible(true)}
        className="fixed left-4 top-4 z-50 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
        aria-label="Open accessibility panel"
        title="Accessibility Settings (Ctrl+Shift+A)"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -400 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -400 }}
        className="fixed left-4 top-20 z-50 w-80 max-h-[80vh] overflow-hidden"
      >
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Accessibility className="w-5 h-5" />
                <h3 className="font-semibold">Accessibility</h3>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                  aria-label={isExpanded ? 'Collapse panel' : 'Expand panel'}
                >
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    ▼
                  </motion.div>
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 space-y-4 max-h-[calc(80vh-80px)] overflow-y-auto"
              >
                {/* Tabs */}
                <div className="flex space-x-1 bg-gray-100 dark:bg-slate-700 rounded-lg p-1">
                  {[
                    { id: 'features', label: 'Features', icon: Settings },
                    { id: 'settings', label: 'Settings', icon: Settings },
                    { id: 'help', label: 'Help', icon: Settings }
                  ].map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`flex-1 flex items-center justify-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          activeTab === tab.id
                            ? 'bg-white dark:bg-slate-600 text-gray-900 dark:text-white shadow-sm'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                  {activeTab === 'features' && (
                    <motion.div
                      key="features"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4"
                    >
                      {(['visual', 'reading', 'navigation', 'interaction'] as const).map((category) => (
                        <div key={category} className="space-y-3">
                          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 capitalize">
                            {category} Features
                          </h4>
                          <div className="space-y-2">
                            {getCategoryFeatures(category).map((feature) => (
                              <FeatureToggle
                                key={feature.id}
                                feature={feature}
                                isEnabled={settings[feature.id]}
                                onToggle={(enabled) => updateSetting(feature.id, enabled)}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === 'settings' && (
                    <motion.div
                      key="settings"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4"
                    >
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Quick Actions
                        </h4>
                        <button
                          onClick={resetSettings}
                          className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors"
                        >
                          Reset All Settings
                        </button>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Keyboard Shortcuts
                        </h4>
                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex justify-between">
                            <span>Open Panel:</span>
                            <kbd className="px-2 py-1 bg-gray-100 dark:bg-slate-700 rounded text-xs">Ctrl+Shift+A</kbd>
                          </div>
                          <div className="flex justify-between">
                            <span>Close Panel:</span>
                            <kbd className="px-2 py-1 bg-gray-100 dark:bg-slate-700 rounded text-xs">Esc</kbd>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'help' && (
                    <motion.div
                      key="help"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4"
                    >
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Accessibility Features
                        </h4>
                        <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                          <p>
                            This panel provides various accessibility features to make the website more usable for everyone.
                          </p>
                          <p>
                            Use the Features tab to enable/disable specific accessibility options, or use the Settings tab for quick actions.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// Feature Toggle Component
const FeatureToggle: React.FC<{
  feature: AccessibilityFeature;
  isEnabled: boolean;
  onToggle: (enabled: boolean) => void;
}> = ({ feature, isEnabled, onToggle }) => {
  const Icon = feature.icon;
  const status = getFeatureStatus(feature.id);
  
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors">
      <div className="flex items-center space-x-3">
        <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        <div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">
            {feature.name}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {feature.description}
          </div>
        </div>
      </div>
      <button
        onClick={() => onToggle(!isEnabled)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          isEnabled ? 'bg-blue-600' : 'bg-gray-200 dark:bg-slate-600'
        }`}
        role="switch"
        aria-checked={isEnabled}
        aria-label={`${isEnabled ? 'Disable' : 'Enable'} ${feature.name}`}
      >
        <motion.span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            isEnabled ? 'translate-x-6' : 'translate-x-1'
          }`}
          layout
        />
      </button>
    </div>
  );
};

// Helper function
const getFeatureStatus = (featureId: keyof AccessibilitySettings): 'enabled' | 'disabled' => {
  // This would be implemented based on the actual feature state
  return 'disabled';
};
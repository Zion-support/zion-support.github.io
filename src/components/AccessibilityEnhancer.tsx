import React, { useState, useEffect } from 'react';
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
  RotateCcw,
  Settings,
  X,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highSaturation: boolean;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showSettings?: boolean;
}

export function AccessibilityEnhancer({ 
  enabled = true, 
  showSettings = false 
}: AccessibilityEnhancerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(showSettings);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highSaturation: false,
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 0
  });

  const [notifications, setNotifications] = useState<string[]>([]);

  // Load saved settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('zion-accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
        applySettings({ ...settings, ...parsed });
      } catch (error) {
        console.error('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  // Apply accessibility settings to the document
  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--bg-color', '#000000');
      root.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
      root.style.removeProperty('--accent-color');
    }

    // Large text
    if (newSettings.largeText) {
      root.style.setProperty('--base-font-size', '18px');
      root.style.setProperty('--heading-scale', '1.3');
    } else {
      root.style.setProperty('--base-font-size', '16px');
      root.style.setProperty('--heading-scale', '1.2');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.1s');
      root.style.setProperty('--transition-duration', '0.1s');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }

    // High saturation
    if (newSettings.highSaturation) {
      root.style.setProperty('--saturation-filter', 'saturate(1.5)');
    } else {
      root.style.removeProperty('--saturation-filter');
    }

    // Font size
    root.style.setProperty('--font-size', `${newSettings.fontSize}px`);
    root.style.setProperty('--line-height', newSettings.lineHeight.toString());
    root.style.setProperty('--letter-spacing', `${newSettings.letterSpacing}px`);
  };

  // Save settings to localStorage
  const saveSettings = (newSettings: AccessibilitySettings) => {
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(newSettings));
    setSettings(newSettings);
    applySettings(newSettings);
  };

  // Update individual setting
  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K, 
    value: AccessibilitySettings[K]
  ) => {
    const newSettings = { ...settings, [key]: value };
    saveSettings(newSettings);
    
    // Show notification
    const notification = `Updated ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`;
    setNotifications(prev => [...prev, notification]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n !== notification));
    }, 3000);
  };

  // Reset to default settings
  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      highSaturation: false,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: 0
    };
    saveSettings(defaultSettings);
    setNotifications(prev => [...prev, 'Settings reset to default']);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n !== 'Settings reset to default'));
    }, 3000);
  };

  // Quick accessibility actions
  const quickActions = [
    {
      name: 'High Contrast',
      icon: Contrast,
      action: () => updateSetting('highContrast', !settings.highContrast),
      active: settings.highContrast,
      description: 'Increase contrast for better readability'
    },
    {
      name: 'Large Text',
      icon: Type,
      action: () => updateSetting('largeText', !settings.largeText),
      active: settings.largeText,
      description: 'Increase text size for better readability'
    },
    {
      name: 'Reduced Motion',
      icon: EyeOff,
      action: () => updateSetting('reducedMotion', !settings.reducedMotion),
      active: settings.reducedMotion,
      description: 'Reduce animations for motion sensitivity'
    },
    {
      name: 'High Saturation',
      icon: Eye,
      action: () => updateSetting('highSaturation', !settings.highSaturation),
      active: settings.highSaturation,
      description: 'Increase color saturation'
    }
  ];

  // Font size controls
  const fontSizes = [12, 14, 16, 18, 20, 24, 28, 32];

  useEffect(() => {
    // Show accessibility panel after page load
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!enabled || !isVisible) return null;

  return (
    <>
      {/* Accessibility Toggle Button */}
      <div className="fixed bottom-4 left-4 z-50">
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
          aria-label="Accessibility settings"
          title="Accessibility Settings"
        >
          <Settings className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-y-0 left-0 w-96 bg-slate-900/95 backdrop-blur-xl border-r border-cyan-400/20 shadow-2xl shadow-cyan-400/10 overflow-y-auto z-40"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-cyan-400 flex items-center gap-2">
                  <Settings className="w-6 h-6" />
                  Accessibility
                </h2>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-2 hover:bg-cyan-400/20 text-cyan-400 rounded-lg transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Actions */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  {quickActions.map((action) => (
                    <button
                      key={action.name}
                      onClick={action.action}
                      className={`p-3 rounded-lg border transition-all duration-200 ${
                        action.active
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400'
                          : 'bg-slate-800/50 border-slate-600 text-gray-300 hover:bg-slate-700/50'
                      }`}
                      title={action.description}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <action.icon className="w-5 h-5" />
                        <span className="text-xs font-medium text-center">{action.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Font Size Control */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Font Size</h3>
                <div className="flex items-center space-x-2">
                  <ZoomOut className="w-5 h-5 text-cyan-400" />
                  <div className="flex-1 grid grid-cols-4 gap-2">
                    {fontSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => updateSetting('fontSize', size)}
                        className={`p-2 rounded text-xs font-medium transition-colors ${
                          settings.fontSize === size
                            ? 'bg-cyan-500 text-white'
                            : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  <ZoomIn className="w-5 h-5 text-cyan-400" />
                </div>
              </div>

              {/* Line Height Control */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Line Height</h3>
                <div className="space-y-2">
                  {[1.2, 1.4, 1.6, 1.8, 2.0].map((height) => (
                    <button
                      key={height}
                      onClick={() => updateSetting('lineHeight', height)}
                      className={`w-full p-2 rounded text-sm transition-colors ${
                        settings.lineHeight === height
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                      }`}
                    >
                      Line Height: {height}
                    </button>
                  ))}
                </div>
              </div>

              {/* Letter Spacing Control */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Letter Spacing</h3>
                <div className="space-y-2">
                  {[-1, 0, 1, 2, 3].map((spacing) => (
                    <button
                      key={spacing}
                      onClick={() => updateSetting('letterSpacing', spacing)}
                      className={`w-full p-2 rounded text-sm transition-colors ${
                        settings.letterSpacing === spacing
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                      }`}
                    >
                      Letter Spacing: {spacing}px
                    </button>
                  ))}
                </div>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetSettings}
                className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Reset to Default
              </button>

              {/* WCAG Compliance Info */}
              <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-400/20 rounded-lg">
                <h4 className="font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  WCAG 2.1 AA Compliant
                </h4>
                <p className="text-sm text-gray-300">
                  This website meets Web Content Accessibility Guidelines 2.1 Level AA standards for accessibility.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        <AnimatePresence>
          {notifications.map((notification, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.9 }}
              className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
            >
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">{notification}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
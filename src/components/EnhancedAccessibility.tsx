import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  MousePointer, 
  Keyboard,
  Settings,
  X,
  Check,
  AlertTriangle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  colorBlindSupport: boolean;
}

interface AccessibilityProps {
  className?: string;
  showSettings?: boolean;
}

export function EnhancedAccessibility({ 
  className = '',
  showSettings = false 
}: AccessibilityProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: true,
    colorBlindSupport: false
  });

  const [activeFeatures, setActiveFeatures] = useState<string[]>([]);
  const [complianceScore, setComplianceScore] = useState(85);

  // Apply accessibility settings to the document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      setActiveFeatures(prev => [...new Set([...prev, 'High Contrast'])]);
    } else {
      root.classList.remove('high-contrast');
      setActiveFeatures(prev => prev.filter(f => f !== 'High Contrast'));
    }

    // Large text
    if (newSettings.largeText) {
      root.classList.add('large-text');
      setActiveFeatures(prev => [...new Set([...prev, 'Large Text'])]);
    } else {
      root.classList.remove('large-text');
      setActiveFeatures(prev => prev.filter(f => f !== 'Large Text'));
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
      setActiveFeatures(prev => [...new Set([...prev, 'Reduced Motion'])]);
    } else {
      root.classList.remove('reduced-motion');
      setActiveFeatures(prev => prev.filter(f => f !== 'Reduced Motion'));
    }

    // Focus indicators
    if (newSettings.focusIndicators) {
      root.classList.add('focus-visible');
      setActiveFeatures(prev => [...new Set([...prev, 'Focus Indicators'])]);
    } else {
      root.classList.remove('focus-visible');
      setActiveFeatures(prev => prev.filter(f => f !== 'Focus Indicators'));
    }

    // Color blind support
    if (newSettings.colorBlindSupport) {
      root.classList.add('color-blind-support');
      setActiveFeatures(prev => [...new Set([...prev, 'Color Blind Support'])]);
    } else {
      root.classList.remove('color-blind-support');
      setActiveFeatures(prev => prev.filter(f => f !== 'Color Blind Support'));
    }

    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setSettings(parsed);
      applySettings(parsed);
    }
  }, [applySettings]);

  // Update compliance score
  useEffect(() => {
    let score = 100;
    
    if (!settings.focusIndicators) score -= 15;
    if (!settings.keyboardNavigation) score -= 10;
    if (!settings.screenReader) score -= 5;
    
    setComplianceScore(Math.max(0, score));
  }, [settings]);

  // Handle setting changes
  const handleSettingChange = (key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  // Screen reader announcements
  const announceToScreenReader = (message: string) => {
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

  // Quick accessibility actions
  const quickActions = [
    {
      name: 'Toggle High Contrast',
      icon: Contrast,
      action: () => handleSettingChange('highContrast', !settings.highContrast),
      active: settings.highContrast
    },
    {
      name: 'Toggle Large Text',
      icon: Type,
      action: () => handleSettingChange('largeText', !settings.largeText),
      active: settings.largeText
    },
    {
      name: 'Toggle Reduced Motion',
      icon: Eye,
      action: () => handleSettingChange('reducedMotion', !settings.reducedMotion),
      active: settings.reducedMotion
    }
  ];

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-4 right-4 z-50 p-3 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg shadow-xl hover:bg-slate-700/90 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 ${className}`}
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Settings className="w-6 h-6 text-cyan-400" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 h-full w-96 bg-slate-900/95 backdrop-blur-sm border-l border-slate-700 shadow-2xl z-40 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <h2 className="text-xl font-bold text-white">Accessibility</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded"
                aria-label="Close accessibility panel"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Compliance Score */}
            <div className="p-6 border-b border-slate-700">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-slate-300">WCAG Compliance</span>
                <span className={`text-lg font-bold ${
                  complianceScore >= 90 ? 'text-green-400' :
                  complianceScore >= 70 ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {complianceScore}%
                </span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <motion.div
                  className={`h-2 rounded-full ${
                    complianceScore >= 90 ? 'bg-green-500' :
                    complianceScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${complianceScore}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
              <p className="text-xs text-slate-400 mt-2">
                {complianceScore >= 90 ? 'Excellent accessibility compliance' :
                 complianceScore >= 70 ? 'Good accessibility compliance' : 'Needs improvement'}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="p-6 border-b border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                {quickActions.map((action) => (
                  <button
                    key={action.name}
                    onClick={action.action}
                    className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                      action.active
                        ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                        : 'bg-slate-800/50 border-slate-600 text-slate-300 hover:bg-slate-700/50'
                    }`}
                    aria-pressed={action.active}
                  >
                    <div className="flex items-center space-x-3">
                      <action.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{action.name}</span>
                    </div>
                    {action.active && <Check className="w-5 h-5" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Detailed Settings */}
            <div className="p-6 border-b border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">Detailed Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium text-slate-300">Screen Reader Support</label>
                    <p className="text-xs text-slate-400">Enhanced screen reader compatibility</p>
                  </div>
                  <button
                    onClick={() => handleSettingChange('screenReader', !settings.screenReader)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                      settings.screenReader ? 'bg-cyan-500' : 'bg-slate-600'
                    }`}
                    role="switch"
                    aria-checked={settings.screenReader}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium text-slate-300">Keyboard Navigation</label>
                    <p className="text-xs text-slate-400">Enhanced keyboard support</p>
                  </div>
                  <button
                    onClick={() => handleSettingChange('keyboardNavigation', !settings.keyboardNavigation)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                      settings.keyboardNavigation ? 'bg-cyan-500' : 'bg-slate-600'
                    }`}
                    role="switch"
                    aria-checked={settings.keyboardNavigation}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium text-slate-300">Focus Indicators</label>
                    <p className="text-xs text-slate-400">Visible focus indicators</p>
                  </div>
                  <button
                    onClick={() => handleSettingChange('focusIndicators', !settings.focusIndicators)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                      settings.focusIndicators ? 'bg-cyan-500' : 'bg-slate-600'
                    }`}
                    role="switch"
                    aria-checked={settings.focusIndicators}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.focusIndicators ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium text-slate-300">Color Blind Support</label>
                    <p className="text-xs text-slate-400">Enhanced color accessibility</p>
                  </div>
                  <button
                    onClick={() => handleSettingChange('colorBlindSupport', !settings.colorBlindSupport)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                      settings.colorBlindSupport ? 'bg-cyan-500' : 'bg-slate-600'
                    }`}
                    role="switch"
                    aria-checked={settings.colorBlindSupport}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.colorBlindSupport ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Active Features */}
            {activeFeatures.length > 0 && (
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Active Features</h3>
                <div className="space-y-2">
                  {activeFeatures.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2 text-sm text-cyan-400">
                      <Check className="w-4 h-4" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Help & Support */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Help & Support</h3>
              <div className="space-y-3">
                <button
                  onClick={() => announceToScreenReader('Accessibility help opened')}
                  className="w-full text-left p-3 bg-slate-800/50 rounded-lg border border-slate-600 text-slate-300 hover:bg-slate-700/50 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                >
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-400" />
                    <div>
                      <div className="text-sm font-medium">Accessibility Help</div>
                      <div className="text-xs text-slate-400">Get help with accessibility features</div>
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={() => announceToScreenReader('Keyboard shortcuts opened')}
                  className="w-full text-left p-3 bg-slate-800/50 rounded-lg border border-slate-600 text-slate-300 hover:bg-slate-700/50 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                >
                  <div className="flex items-center space-x-3">
                    <Keyboard className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-sm font-medium">Keyboard Shortcuts</div>
                      <div className="text-xs text-slate-400">Learn keyboard navigation</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Accessibility Styles */}
      <style jsx global>{`
        .high-contrast {
          --text-primary: #ffffff !important;
          --text-secondary: #e5e7eb !important;
          --bg-primary: #000000 !important;
          --bg-secondary: #1f2937 !important;
          --accent: #ffff00 !important;
        }

        .large-text {
          font-size: 1.2em !important;
        }

        .large-text h1 { font-size: 2.5em !important; }
        .large-text h2 { font-size: 2em !important; }
        .large-text h3 { font-size: 1.75em !important; }
        .large-text p { font-size: 1.3em !important; }

        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        .focus-visible *:focus {
          outline: 3px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }

        .color-blind-support {
          filter: contrast(1.2) saturate(1.5) !important;
        }

        .keyboard-navigation *:focus {
          outline: 3px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }

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
}

export default EnhancedAccessibility;
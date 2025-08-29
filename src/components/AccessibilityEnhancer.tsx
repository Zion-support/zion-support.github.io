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
  colorBlindFriendly: boolean;
}

export function AccessibilityEnhancer() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    // Load settings from localStorage
    const saved = localStorage.getItem('accessibility-settings');
    return saved ? JSON.parse(saved) : {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicators: true,
      colorBlindFriendly: false
    };
  });

  const [activeModifier, setActiveModifier] = useState<string | null>(null);

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    setSettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));

    // Apply high contrast
    if (newSettings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    // Apply large text
    if (newSettings.largeText) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }

    // Apply reduced motion
    if (newSettings.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    // Apply focus indicators
    if (newSettings.focusIndicators) {
      document.documentElement.classList.add('show-focus-indicators');
    } else {
      document.documentElement.classList.remove('show-focus-indicators');
    }

    // Apply color blind friendly mode
    if (newSettings.colorBlindFriendly) {
      document.documentElement.classList.add('color-blind-friendly');
    } else {
      document.documentElement.classList.remove('color-blind-friendly');
    }
  }, []);

  // Apply settings on mount
  useEffect(() => {
    applySettings(settings);
  }, [applySettings]);

  // Keyboard navigation support
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key) {
        case 'h':
        case 'H':
          // Go to home
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            window.location.href = '/';
          }
          break;
        case 's':
        case 'S':
          // Go to services
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            window.location.href = '/services';
          }
          break;
        case 'c':
        case 'C':
          // Go to contact
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            window.location.href = '/contact';
          }
          break;
        case 'a':
        case 'A':
          // Go to about
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            window.location.href = '/about';
          }
          break;
        case 'Escape':
          // Close accessibility panel
          setIsOpen(false);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

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

  // Toggle setting
  const toggleSetting = useCallback((key: keyof AccessibilitySettings) => {
    const newSettings = { ...settings, [key]: !settings[key] };
    applySettings(newSettings);
    
    const action = newSettings[key] ? 'enabled' : 'disabled';
    announceToScreenReader(`${key.replace(/([A-Z])/g, ' $1').toLowerCase()} ${action}`);
  }, [settings, applySettings, announceToScreenReader]);

  // Quick accessibility shortcuts
  const quickActions = [
    {
      name: 'High Contrast',
      icon: Contrast,
      action: () => toggleSetting('highContrast'),
      active: settings.highContrast,
      shortcut: 'Ctrl+H'
    },
    {
      name: 'Large Text',
      icon: Type,
      action: () => toggleSetting('largeText'),
      active: settings.largeText,
      shortcut: 'Ctrl+T'
    },
    {
      name: 'Reduced Motion',
      icon: Eye,
      action: () => toggleSetting('reducedMotion'),
      active: settings.reducedMotion,
      shortcut: 'Ctrl+M'
    },
    {
      name: 'Focus Indicators',
      icon: MousePointer,
      action: () => toggleSetting('focusIndicators'),
      active: settings.focusIndicators,
      shortcut: 'Ctrl+F'
    }
  ];

  return (
    <>
      {/* Floating Accessibility Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus-visible-ring"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open accessibility settings"
      >
        <Settings className="w-6 h-6 mx-auto" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Settings className="w-6 h-6 text-cyan-400" />
                  Accessibility Settings
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                  aria-label="Close accessibility settings"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Actions */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  {quickActions.map((action) => (
                    <button
                      key={action.name}
                      onClick={action.action}
                      className={`p-4 rounded-lg border transition-all duration-300 flex items-center gap-3 ${
                        action.active
                          ? 'border-cyan-500 bg-cyan-500/20 text-cyan-300'
                          : 'border-slate-600 bg-slate-700/50 text-gray-300 hover:border-slate-500 hover:bg-slate-700'
                      }`}
                    >
                      <action.icon className="w-5 h-5" />
                      <div className="text-left">
                        <div className="font-medium">{action.name}</div>
                        <div className="text-xs text-gray-400">{action.shortcut}</div>
                      </div>
                      {action.active && <Check className="w-4 h-4 ml-auto" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Detailed Settings */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-4">Detailed Settings</h3>
                
                {/* High Contrast */}
                <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Contrast className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="font-medium text-white">High Contrast</div>
                      <div className="text-sm text-gray-400">Increase color contrast for better visibility</div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('highContrast')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.highContrast ? 'bg-cyan-500' : 'bg-slate-600'
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
                </div>

                {/* Large Text */}
                <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Type className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="font-medium text-white">Large Text</div>
                      <div className="text-sm text-gray-400">Increase text size for better readability</div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('largeText')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.largeText ? 'bg-cyan-500' : 'bg-slate-600'
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
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Eye className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="font-medium text-white">Reduced Motion</div>
                      <div className="text-sm text-gray-400">Reduce animations for motion sensitivity</div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('reducedMotion')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.reducedMotion ? 'bg-cyan-500' : 'bg-slate-600'
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
                </div>

                {/* Focus Indicators */}
                <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <MousePointer className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="font-medium text-white">Focus Indicators</div>
                      <div className="text-sm text-gray-400">Show clear focus indicators for keyboard navigation</div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('focusIndicators')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
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

                {/* Color Blind Friendly */}
                <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="font-medium text-white">Color Blind Friendly</div>
                      <div className="text-sm text-gray-400">Use patterns and symbols in addition to colors</div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('colorBlindFriendly')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.colorBlindFriendly ? 'bg-cyan-500' : 'bg-slate-600'
                    }`}
                    role="switch"
                    aria-checked={settings.colorBlindFriendly}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.colorBlindFriendly ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Keyboard Shortcuts Help */}
              <div className="mt-8 p-4 bg-slate-700/30 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Keyboard className="w-5 h-5 text-cyan-400" />
                  Keyboard Shortcuts
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Ctrl+H:</span>
                    <span className="text-gray-400">Go to Home</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Ctrl+S:</span>
                    <span className="text-gray-400">Go to Services</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Ctrl+C:</span>
                    <span className="text-gray-400">Go to Contact</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Ctrl+A:</span>
                    <span className="text-gray-400">Go to About</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Escape:</span>
                    <span className="text-gray-400">Close this panel</span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-slate-700 text-center">
                <p className="text-sm text-gray-400">
                  These settings are saved in your browser and will persist across visits.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Only Content */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Accessibility settings panel is open. Use Tab to navigate between options and Enter or Space to toggle settings.
      </div>
    </>
  );
}

// CSS classes for accessibility features
const accessibilityStyles = `
  /* High Contrast Mode */
  .high-contrast {
    --background: 0 0% 0%;
    --foreground: 0 0% 100%;
    --card: 0 0% 0%;
    --card-foreground: 0 0% 100%;
    --border: 0 0% 100%;
    --input: 0 0% 100%;
    --ring: 0 0% 100%;
  }

  .high-contrast * {
    border-color: white !important;
  }

  /* Large Text Mode */
  .large-text {
    font-size: 1.2em;
  }

  .large-text h1 { font-size: 2.5em; }
  .large-text h2 { font-size: 2em; }
  .large-text h3 { font-size: 1.75em; }
  .large-text p { font-size: 1.1em; }

  /* Reduced Motion Mode */
  .reduced-motion *,
  .reduced-motion *::before,
  .reduced-motion *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  /* Focus Indicators */
  .show-focus-indicators *:focus {
    outline: 3px solid #38bdf8 !important;
    outline-offset: 2px !important;
  }

  /* Color Blind Friendly Mode */
  .color-blind-friendly .btn-primary::before {
    content: "★ ";
  }

  .color-blind-friendly .btn-secondary::before {
    content: "○ ";
  }

  .color-blind-friendly .card::before {
    content: "■ ";
  }

  /* Screen Reader Only */
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
`;

// Inject accessibility styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = accessibilityStyles;
  document.head.appendChild(style);
}
import React, { useEffect, useState, useCallback } from 'react';
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
  X,
  Settings,
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
}

export const AccessibilityEnhancer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    const saved = localStorage.getItem('accessibility-settings');
    return saved ? JSON.parse(saved) : {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicators: true
    };
  });

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    setSettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    
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
    
    // Focus indicators
    if (newSettings.focusIndicators) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  }, []);

  // Initialize accessibility features
  useEffect(() => {
    applySettings(settings);
    
    // Add keyboard navigation support
    if (settings.keyboardNavigation) {
      const handleKeyDown = (e: KeyboardEvent) => {
        // Skip to main content
        if (e.key === 'Tab' && e.altKey) {
          e.preventDefault();
          const main = document.querySelector('main');
          if (main) {
            (main as HTMLElement).focus();
          }
        }
        
        // Skip to navigation
        if (e.key === 'N' && e.altKey) {
          e.preventDefault();
          const nav = document.querySelector('nav, [role="navigation"]');
          if (nav) {
            (nav as HTMLElement).focus();
          }
        }
      };
      
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [settings, applySettings]);

  // Add ARIA labels and roles
  useEffect(() => {
    if (settings.screenReader) {
      // Add skip links
      let skipLinks = document.getElementById('skip-links');
      if (!skipLinks) {
        skipLinks = document.createElement('div');
        skipLinks.id = 'skip-links';
        skipLinks.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-2 focus:bg-blue-600 focus:text-white focus:rounded';
        skipLinks.innerHTML = `
          <a href="#main-content" class="block mb-2">Skip to main content</a>
          <a href="#navigation" class="block mb-2">Skip to navigation</a>
          <a href="#footer" class="block">Skip to footer</a>
        `;
        document.body.insertBefore(skipLinks, document.body.firstChild);
      }
      
      // Add ARIA landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('id')) {
        main.id = 'main-content';
        main.setAttribute('role', 'main');
      }
      
      const nav = document.querySelector('nav, [role="navigation"]');
      if (nav && !nav.getAttribute('id')) {
        nav.id = 'navigation';
        nav.setAttribute('role', 'navigation');
      }
      
      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('id')) {
        footer.id = 'footer';
        footer.setAttribute('role', 'contentinfo');
      }
    }
  }, [settings.screenReader]);

  // Toggle settings
  const toggleSetting = (key: keyof AccessibilitySettings) => {
    const newSettings = { ...settings, [key]: !settings[key] };
    applySettings(newSettings);
  };

  // Quick accessibility actions
  const quickActions = [
    {
      name: 'High Contrast',
      icon: Contrast,
      active: settings.highContrast,
      action: () => toggleSetting('highContrast'),
      description: 'Increase color contrast for better visibility'
    },
    {
      name: 'Large Text',
      icon: Type,
      active: settings.largeText,
      action: () => toggleSetting('largeText'),
      description: 'Increase text size for better readability'
    },
    {
      name: 'Reduced Motion',
      icon: Eye,
      active: settings.reducedMotion,
      action: () => toggleSetting('reducedMotion'),
      description: 'Reduce animations for motion sensitivity'
    },
    {
      name: 'Focus Indicators',
      icon: MousePointer,
      active: settings.focusIndicators,
      action: () => toggleSetting('focusIndicators'),
      description: 'Show clear focus indicators for keyboard navigation'
    }
  ];

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 left-6 z-50 p-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Accessibility Options"
        aria-label="Open accessibility options"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -300, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -300, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 left-20 z-40 w-80 bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-lg shadow-2xl"
            role="dialog"
            aria-labelledby="accessibility-panel-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700">
              <div className="flex items-center space-x-2">
                <Accessibility className="w-5 h-5 text-purple-400" />
                <h3 id="accessibility-panel-title" className="text-white font-semibold">
                  Accessibility Options
                </h3>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="p-1 text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 rounded"
                  title="Advanced Settings"
                  aria-label="Open advanced accessibility settings"
                >
                  <Settings className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 rounded"
                  title="Close"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {/* Quick Actions */}
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Quick Actions
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {quickActions.map((action) => (
                    <button
                      key={action.name}
                      onClick={action.action}
                      className={`p-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                        action.active
                          ? 'bg-purple-600 border-purple-500 text-white'
                          : 'bg-slate-800 border-slate-600 text-slate-300 hover:bg-slate-700'
                      }`}
                      title={action.description}
                      aria-label={`${action.name}: ${action.description}`}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <action.icon className={`w-5 h-5 ${action.active ? 'text-white' : 'text-slate-400'}`} />
                        <span className="text-xs font-medium">{action.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Keyboard Shortcuts */}
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <Keyboard className="w-4 h-4 mr-2 text-blue-400" />
                  Keyboard Shortcuts
                </h4>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex justify-between">
                    <span>Skip to main content:</span>
                    <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Alt + Tab</kbd>
                  </div>
                  <div className="flex justify-between">
                    <span>Skip to navigation:</span>
                    <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Alt + N</kbd>
                  </div>
                  <div className="flex justify-between">
                    <span>Toggle accessibility panel:</span>
                    <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Alt + A</kbd>
                  </div>
                </div>
              </div>

              {/* Status Indicators */}
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-2 text-yellow-400" />
                  Current Status
                </h4>
                <div className="space-y-2">
                  {Object.entries(settings).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between text-sm">
                      <span className="text-slate-300 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        value 
                          ? 'bg-green-600 text-white' 
                          : 'bg-slate-700 text-slate-300'
                      }`}>
                        {value ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Advanced Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-32 left-20 z-30 w-64 bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-lg shadow-2xl p-4"
            role="dialog"
            aria-labelledby="advanced-settings-title"
          >
            <h4 id="advanced-settings-title" className="text-white font-semibold mb-3">
              Advanced Settings
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Screen Reader Mode</span>
                <input
                  type="checkbox"
                  checked={settings.screenReader}
                  onChange={() => toggleSetting('screenReader')}
                  className="w-4 h-4 text-purple-600 bg-slate-700 border-slate-600 rounded focus:ring-purple-500"
                  aria-label="Enable screen reader mode"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Keyboard Navigation</span>
                <input
                  type="checkbox"
                  checked={settings.keyboardNavigation}
                  onChange={() => toggleSetting('keyboardNavigation')}
                  className="w-4 h-4 text-purple-600 bg-slate-700 border-slate-600 rounded focus:ring-purple-500"
                  aria-label="Enable enhanced keyboard navigation"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global keyboard shortcut for accessibility panel */}
      {useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
          if (e.altKey && e.key === 'A') {
            e.preventDefault();
            setIsVisible(!isVisible);
          }
        };
        
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
      }, [isVisible])}
    </>
  );
};

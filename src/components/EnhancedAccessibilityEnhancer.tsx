import React, { useEffect, useState, useCallback } from 'react';
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
  Accessibility,
  Keyboard,
  MousePointer,
  Monitor,
  Smartphone,
  Tablet
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlind: boolean;
  dyslexia: boolean;
}

interface EnhancedAccessibilityEnhancerProps {
  enabled?: boolean;
  showSettings?: boolean;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

export const EnhancedAccessibilityEnhancer: React.FC<EnhancedAccessibilityEnhancerProps> = ({
  enabled = true,
  showSettings = true,
  position = 'top-right'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: false,
    colorBlind: false,
    dyslexia: false
  });

  const [currentDevice, setCurrentDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  // Detect device type
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCurrentDevice('mobile');
      } else if (width < 1024) {
        setCurrentDevice('tablet');
      } else {
        setCurrentDevice('desktop');
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);

    // Apply high contrast
    if (updatedSettings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    // Apply large text
    if (updatedSettings.largeText) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }

    // Apply reduced motion
    if (updatedSettings.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    // Apply focus indicator
    if (updatedSettings.focusIndicator) {
      document.documentElement.classList.add('focus-visible');
    } else {
      document.documentElement.classList.remove('focus-visible');
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Load saved settings
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applySettings(parsed);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Enhanced keyboard navigation
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      
      // Skip if target is an input, textarea, or contenteditable
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.contentEditable === 'true') {
        return;
      }

      switch (event.key) {
        case 'Tab':
          // Enhanced tab navigation with visual feedback
          if (target.classList.contains('focusable')) {
            target.classList.add('keyboard-focused');
            setTimeout(() => target.classList.remove('keyboard-focused'), 2000);
          }
          break;
        
        case 'Enter':
        case ' ':
          // Enhanced enter/space key handling
          if (target.classList.contains('clickable')) {
            event.preventDefault();
            target.click();
          }
          break;
        
        case 'Escape':
          // Close modals or dropdowns
          const modals = document.querySelectorAll('[role="dialog"], [role="menu"]');
          modals.forEach(modal => {
            if (modal instanceof HTMLElement) {
              modal.style.display = 'none';
            }
          });
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Enhanced screen reader support
  useEffect(() => {
    if (!settings.screenReader) return;

    // Add ARIA live regions for dynamic content
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    document.body.appendChild(liveRegion);

    // Enhanced focus management
    const handleFocusChange = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target && liveRegion) {
        const label = target.getAttribute('aria-label') || target.textContent || target.title;
        if (label) {
          liveRegion.textContent = `Focused on: ${label}`;
        }
      }
    };

    document.addEventListener('focusin', handleFocusChange);
    
    return () => {
      document.removeEventListener('focusin', handleFocusChange);
      if (liveRegion.parentNode) {
        liveRegion.parentNode.removeChild(liveRegion);
      }
    };
  }, [settings.screenReader]);

  // Enhanced color blind support
  useEffect(() => {
    if (!settings.colorBlind) return;

    // Add color blind friendly styles
    const style = document.createElement('style');
    style.textContent = `
      .color-blind-friendly {
        filter: grayscale(100%) contrast(150%);
      }
      .color-blind-friendly * {
        border: 2px solid #000 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [settings.colorBlind]);

  // Enhanced dyslexia support
  useEffect(() => {
    if (!settings.dyslexia) return;

    // Add dyslexia friendly styles
    const style = document.createElement('style');
    style.textContent = `
      .dyslexia-friendly {
        font-family: 'OpenDyslexic', 'Comic Sans MS', 'Arial', sans-serif !important;
        line-height: 1.6 !important;
        letter-spacing: 0.1em !important;
        word-spacing: 0.2em !important;
      }
      .dyslexia-friendly p {
        margin-bottom: 1.5em !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [settings.dyslexia]);

  // Toggle settings panel
  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  // Quick accessibility shortcuts
  const quickActions = [
    {
      label: 'Toggle High Contrast',
      action: () => applySettings({ highContrast: !settings.highContrast }),
      icon: Contrast,
      active: settings.highContrast
    },
    {
      label: 'Toggle Large Text',
      action: () => applySettings({ largeText: !settings.largeText }),
      icon: Type,
      active: settings.largeText
    },
    {
      label: 'Toggle Reduced Motion',
      action: () => applySettings({ reducedMotion: !settings.reducedMotion }),
      icon: Eye,
      active: settings.reducedMotion
    },
    {
      label: 'Toggle Focus Indicator',
      action: () => applySettings({ focusIndicator: !settings.focusIndicator }),
      icon: Keyboard,
      active: settings.focusIndicator
    }
  ];

  if (!enabled) return null;

  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4'
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={togglePanel}
        className={`fixed ${positionClasses[position]} z-50 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-white`}
        aria-label="Accessibility Settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="accessibility-panel"
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed ${positionClasses[position]} top-16 z-40 w-80 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden`}
            role="dialog"
            aria-labelledby="accessibility-title"
            aria-describedby="accessibility-description"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 text-white">
              <h2 id="accessibility-title" className="text-lg font-semibold flex items-center">
                <Accessibility className="w-5 h-5 mr-2" />
                Accessibility Settings
              </h2>
              <p id="accessibility-description" className="text-sm text-cyan-100 mt-1">
                Customize your experience for better accessibility
              </p>
            </div>

            {/* Device Indicator */}
            <div className="p-4 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Current Device:
                </span>
                <div className="flex items-center space-x-2">
                  {currentDevice === 'desktop' && <Monitor className="w-4 h-4 text-blue-500" />}
                  {currentDevice === 'tablet' && <Tablet className="w-4 h-4 text-green-500" />}
                  {currentDevice === 'mobile' && <Smartphone className="w-4 h-4 text-purple-500" />}
                  <span className="text-sm text-slate-600 dark:text-slate-400 capitalize">
                    {currentDevice}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-b border-slate-200 dark:border-slate-700">
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.action}
                    className={`p-2 rounded-lg text-xs font-medium transition-all duration-200 flex items-center justify-center ${
                      action.active
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                    }`}
                    aria-pressed={action.active}
                  >
                    <action.icon className="w-3 h-3 mr-1" />
                    {action.label.split(' ')[1]}
                  </button>
                ))}
              </div>
            </div>

            {/* Detailed Settings */}
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Detailed Settings
              </h3>

              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Contrast className="w-4 h-4 text-slate-600 dark:text-slate-400 mr-2" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">High Contrast</span>
                </div>
                <button
                  onClick={() => applySettings({ highContrast: !settings.highContrast })}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.highContrast ? 'bg-cyan-500' : 'bg-slate-300'
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
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Type className="w-4 h-4 text-slate-600 dark:text-slate-400 mr-2" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">Large Text</span>
                </div>
                <button
                  onClick={() => applySettings({ largeText: !settings.largeText })}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.largeText ? 'bg-cyan-500' : 'bg-slate-300'
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
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Eye className="w-4 h-4 text-slate-600 dark:text-slate-400 mr-2" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">Reduced Motion</span>
                </div>
                <button
                  onClick={() => applySettings({ reducedMotion: !settings.reducedMotion })}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-cyan-500' : 'bg-slate-300'
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

              {/* Screen Reader */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Volume2 className="w-4 h-4 text-slate-600 dark:text-slate-400 mr-2" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">Screen Reader</span>
                </div>
                <button
                  onClick={() => applySettings({ screenReader: !settings.screenReader })}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.screenReader ? 'bg-cyan-500' : 'bg-slate-300'
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

              {/* Keyboard Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Keyboard className="w-4 h-4 text-slate-600 dark:text-slate-400 mr-2" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">Keyboard Navigation</span>
                </div>
                <button
                  onClick={() => applySettings({ keyboardNavigation: !settings.keyboardNavigation })}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.keyboardNavigation ? 'bg-cyan-500' : 'bg-slate-300'
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

              {/* Focus Indicator */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MousePointer className="w-4 h-4 text-slate-600 dark:text-slate-400 mr-2" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">Focus Indicator</span>
                </div>
                <button
                  onClick={() => applySettings({ focusIndicator: !settings.focusIndicator })}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.focusIndicator ? 'bg-cyan-500' : 'bg-slate-300'
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
              </div>

              {/* Color Blind Support */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Eye className="w-4 h-4 text-slate-600 dark:text-slate-400 mr-2" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">Color Blind Support</span>
                </div>
                <button
                  onClick={() => applySettings({ colorBlind: !settings.colorBlind })}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.colorBlind ? 'bg-cyan-500' : 'bg-slate-300'
                  }`}
                  role="switch"
                  aria-checked={settings.colorBlind}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.colorBlind ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Dyslexia Support */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Type className="w-4 h-4 text-slate-600 dark:text-slate-400 mr-2" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">Dyslexia Support</span>
                </div>
                <button
                  onClick={() => applySettings({ dyslexia: !settings.dyslexia })}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.dyslexia ? 'bg-cyan-500' : 'bg-slate-300'
                  }`}
                  role="switch"
                  aria-checked={settings.dyslexia}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.dyslexia ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-50 dark:bg-slate-700 border-t border-slate-200 dark:border-slate-600">
              <button
                onClick={() => {
                  setSettings({
                    highContrast: false,
                    largeText: false,
                    reducedMotion: false,
                    screenReader: false,
                    keyboardNavigation: false,
                    focusIndicator: false,
                    colorBlind: false,
                    dyslexia: false
                  });
                  localStorage.removeItem('accessibility-settings');
                }}
                className="w-full px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 transition-colors duration-200"
              >
                Reset to Defaults
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Accessibility Styles */}
      <style jsx global>{`
        .high-contrast {
          filter: contrast(150%) brightness(110%);
        }
        
        .high-contrast * {
          border-color: #000 !important;
        }
        
        .large-text {
          font-size: 1.2em !important;
        }
        
        .large-text h1 { font-size: 2.5em !important; }
        .large-text h2 { font-size: 2em !important; }
        .large-text h3 { font-size: 1.5em !important; }
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
        
        .keyboard-focused {
          outline: 3px solid #06b6d4 !important;
          outline-offset: 2px !important;
          box-shadow: 0 0 0 6px rgba(6, 182, 212, 0.3) !important;
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
        
        .focusable {
          cursor: pointer;
        }
        
        .clickable {
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default EnhancedAccessibilityEnhancer;

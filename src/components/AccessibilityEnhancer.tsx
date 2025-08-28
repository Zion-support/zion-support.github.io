import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  Move, 
  X,
  Settings,
  Accessibility,
  Keyboard,
  MousePointer
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highFocus: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
}

export function AccessibilityEnhancer() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highFocus: false,
    screenReader: false,
    keyboardNavigation: false
  });

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setSettings(parsed);
      applySettings(parsed);
    }

    // Initialize keyboard navigation
    initializeKeyboardNavigation();
  }, []);

  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    if (newSettings.highFocus) {
      root.classList.add('focus-highlight');
    } else {
      root.classList.remove('focus-highlight');
    }

    if (newSettings.screenReader) {
      root.setAttribute('aria-live', 'polite');
    } else {
      root.removeAttribute('aria-live');
    }

    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    const newSettings = { ...settings, [key]: !settings[key] };
    setSettings(newSettings);
    applySettings(newSettings);
  };

  const initializeKeyboardNavigation = () => {
    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-zion-cyan focus:text-black focus:rounded focus:outline-none';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add main content landmark
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.id = 'main-content';
      mainContent.setAttribute('role', 'main');
      mainContent.setAttribute('tabIndex', '-1');
    }

    // Enhanced keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  };

  const announceToScreenReader = (message: string) => {
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
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-zion-cyan text-black rounded-full shadow-lg hover:bg-zion-cyan-light focus:outline-none focus:ring-4 focus:ring-zion-cyan/50 transition-all duration-300"
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 w-80 bg-zion-slate-dark border border-zion-cyan rounded-lg shadow-2xl"
            id="accessibility-panel"
            role="dialog"
            aria-labelledby="accessibility-title"
            aria-describedby="accessibility-description"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-zion-cyan/30">
              <div>
                <h3 id="accessibility-title" className="text-lg font-semibold text-zion-cyan">
                  Accessibility Settings
                </h3>
                <p id="accessibility-description" className="text-sm text-zion-slate-light">
                  Customize your experience for better accessibility
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-zion-slate-light hover:text-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan rounded"
                aria-label="Close accessibility panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Settings */}
            <div className="p-4 space-y-4">
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Contrast className="w-5 h-5 text-zion-cyan" />
                  <div>
                    <label htmlFor="high-contrast" className="text-sm font-medium text-zion-slate-light">
                      High Contrast
                    </label>
                    <p className="text-xs text-zion-slate-light/70">
                      Enhanced color contrast for better visibility
                    </p>
                  </div>
                </div>
                <button
                  id="high-contrast"
                  onClick={() => toggleSetting('highContrast')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-slate-dark ${
                    settings.highContrast ? 'bg-zion-cyan' : 'bg-zion-slate'
                  }`}
                  role="switch"
                  aria-checked={settings.highContrast}
                  aria-labelledby="high-contrast"
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
                <div className="flex items-center space-x-3">
                  <Type className="w-5 h-5 text-zion-cyan" />
                  <div>
                    <label htmlFor="large-text" className="text-sm font-medium text-zion-slate-light">
                      Large Text
                    </label>
                    <p className="text-xs text-zion-slate-light/70">
                      Increase text size for better readability
                    </p>
                  </div>
                </div>
                <button
                  id="large-text"
                  onClick={() => toggleSetting('largeText')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-slate-dark ${
                    settings.largeText ? 'bg-zion-cyan' : 'bg-zion-slate'
                  }`}
                  role="switch"
                  aria-checked={settings.largeText}
                  aria-labelledby="large-text"
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
                <div className="flex items-center space-x-3">
                  <Move className="w-5 h-5 text-zion-cyan" />
                  <div>
                    <label htmlFor="reduced-motion" className="text-sm font-medium text-zion-slate-light">
                      Reduced Motion
                    </label>
                    <p className="text-xs text-zion-slate-light/70">
                      Minimize animations and transitions
                    </p>
                  </div>
                </div>
                <button
                  id="reduced-motion"
                  onClick={() => toggleSetting('reducedMotion')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-slate-dark ${
                    settings.reducedMotion ? 'bg-zion-cyan' : 'bg-zion-slate'
                  }`}
                  role="switch"
                  aria-checked={settings.reducedMotion}
                  aria-labelledby="reduced-motion"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* High Focus */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <MousePointer className="w-5 h-5 text-zion-cyan" />
                  <div>
                    <label htmlFor="high-focus" className="text-sm font-medium text-zion-slate-light">
                      High Focus
                    </label>
                    <p className="text-xs text-zion-slate-light/70">
                      Enhanced focus indicators
                    </p>
                  </div>
                </div>
                <button
                  id="high-focus"
                  onClick={() => toggleSetting('highFocus')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-slate-dark ${
                    settings.highFocus ? 'bg-zion-cyan' : 'bg-zion-slate'
                  }`}
                  role="switch"
                  aria-checked={settings.highFocus}
                  aria-labelledby="high-focus"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.highFocus ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Screen Reader Support */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Volume2 className="w-5 h-5 text-zion-cyan" />
                  <div>
                    <label htmlFor="screen-reader" className="text-sm font-medium text-zion-slate-light">
                      Screen Reader
                    </label>
                    <p className="text-xs text-zion-slate-light/70">
                      Enhanced screen reader support
                    </p>
                  </div>
                </div>
                <button
                  id="screen-reader"
                  onClick={() => toggleSetting('screenReader')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-slate-dark ${
                    settings.screenReader ? 'bg-zion-cyan' : 'bg-zion-slate'
                  }`}
                  role="switch"
                  aria-checked={settings.screenReader}
                  aria-labelledby="screen-reader"
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
                <div className="flex items-center space-x-3">
                  <Keyboard className="w-5 h-5 text-zion-cyan" />
                  <div>
                    <label htmlFor="keyboard-nav" className="text-sm font-medium text-zion-slate-light">
                      Keyboard Navigation
                    </label>
                    <p className="text-xs text-zion-slate-light/70">
                      Enhanced keyboard navigation
                    </p>
                  </div>
                </div>
                <button
                  id="keyboard-nav"
                  onClick={() => toggleSetting('keyboardNavigation')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-slate-dark ${
                    settings.keyboardNavigation ? 'bg-zion-cyan' : 'bg-zion-slate'
                  }`}
                  role="switch"
                  aria-checked={settings.keyboardNavigation}
                  aria-labelledby="keyboard-nav"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-zion-cyan/30 bg-zion-slate-dark/50">
              <div className="text-xs text-zion-slate-light/70 space-y-1">
                <p>Press Tab to navigate, Enter to activate</p>
                <p>Use arrow keys for fine control</p>
                <p>Press Escape to close this panel</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skip Link Styles */}
      <style jsx>{`
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #22ddd2;
          color: #000;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          z-index: 10000;
          transition: top 0.3s;
        }
        
        .skip-link:focus {
          top: 6px;
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
        
        .keyboard-navigation *:focus {
          outline: 2px solid #22ddd2 !important;
          outline-offset: 2px !important;
        }
      `}</style>
    </>
  );
}

import React, { useEffect, useState, useCallback } from 'react';
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
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  onSettingsChange?: (settings: AccessibilitySettings) => void;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  onSettingsChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: true
  });

  // Apply accessibility settings to the document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--zion-cyan', '0 255 255');
      root.style.setProperty('--zion-blue', '0 150 255');
      root.style.setProperty('--zion-slate-900', '0 0 0');
      root.style.setProperty('--zion-slate-100', '255 255 255');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--zion-cyan');
      root.style.removeProperty('--zion-blue');
      root.style.removeProperty('--zion-slate-900');
      root.style.removeProperty('--zion-slate-100');
    }
    
    // Large text
    if (newSettings.largeText) {
      root.classList.add('large-text');
      root.style.fontSize = '120%';
    } else {
      root.classList.remove('large-text');
      root.style.fontSize = '';
    }
    
    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
      root.style.setProperty('--transition-fast', '0ms');
      root.style.setProperty('--transition-normal', '0ms');
      root.style.setProperty('--transition-slow', '0ms');
    } else {
      root.classList.remove('reduced-motion');
      root.style.removeProperty('--transition-fast');
      root.style.removeProperty('--transition-normal');
      root.style.removeProperty('--transition-slow');
    }
    
    // Focus indicators
    if (newSettings.focusIndicators) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    
    // Notify parent component
    onSettingsChange?.(newSettings);
  }, [onSettingsChange]);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        setSettings(parsedSettings);
        applySettings(parsedSettings);
      } catch (error) {
        console.error('Failed to parse accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Handle setting changes
  const handleSettingChange = useCallback((key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
  }, [settings, applySettings]);

  // Toggle screen reader mode
  const toggleScreenReader = useCallback(() => {
    const newValue = !settings.screenReader;
    handleSettingChange('screenReader', newValue);
    
    if (newValue) {
      // Announce to screen readers
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = 'Screen reader mode enabled. Enhanced navigation and descriptions are now active.';
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
  }, [settings.screenReader, handleSettingChange]);

  // Toggle keyboard navigation mode
  const toggleKeyboardNavigation = useCallback(() => {
    const newValue = !settings.keyboardNavigation;
    handleSettingChange('keyboardNavigation', newValue);
    
    if (newValue) {
      // Add keyboard navigation enhancements
      document.addEventListener('keydown', handleKeyboardNavigation);
    } else {
      document.removeEventListener('keydown', handleKeyboardNavigation);
    }
  }, [settings.keyboardNavigation, handleSettingChange]);

  // Enhanced keyboard navigation
  const handleKeyboardNavigation = useCallback((event: KeyboardEvent) => {
    if (!settings.keyboardNavigation) return;
    
    switch (event.key) {
      case 'Tab':
        // Enhanced tab navigation with visual indicators
        document.querySelectorAll('a, button, input, select, textarea, [tabindex]').forEach((element) => {
          element.classList.add('keyboard-focus');
        });
        break;
        
      case 'Escape':
        // Close modals and dropdowns
        const modals = document.querySelectorAll('[role="dialog"], [role="menu"]');
        modals.forEach((modal) => {
          if (modal.getAttribute('aria-hidden') === 'false') {
            (modal as any).close?.();
          }
        });
        break;
        
      case 'Enter':
      case ' ':
        // Enhanced button and link activation
        const focusedElement = document.activeElement;
        if (focusedElement && (focusedElement.tagName === 'BUTTON' || focusedElement.tagName === 'A')) {
          event.preventDefault();
          (focusedElement as HTMLElement).click();
        }
        break;
    }
  }, [settings.keyboardNavigation]);

  // Add ARIA labels and roles to interactive elements
  useEffect(() => {
    if (!enabled) return;
    
    // Add ARIA labels to buttons without text
    document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])').forEach((button) => {
      if (!button.textContent?.trim()) {
        const icon = button.querySelector('svg, img');
        if (icon) {
          const iconName = icon.getAttribute('aria-label') || icon.className.baseVal || 'button';
          button.setAttribute('aria-label', iconName);
        }
      }
    });
    
    // Add ARIA labels to images
    document.querySelectorAll('img:not([alt])').forEach((img) => {
      img.setAttribute('alt', 'Decorative image');
      img.setAttribute('aria-hidden', 'true');
    });
    
    // Add skip links for keyboard navigation
    if (!document.getElementById('skip-to-main')) {
      const skipLink = document.createElement('a');
      skipLink.id = 'skip-to-main';
      skipLink.href = '#main-content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-zion-cyan text-white px-4 py-2 rounded-lg z-50';
      skipLink.textContent = 'Skip to main content';
      document.body.insertBefore(skipLink, document.body.firstChild);
    }
    
    // Add main content landmark
    const mainContent = document.querySelector('main') || document.querySelector('[role="main"]');
    if (mainContent && !mainContent.id) {
      mainContent.id = 'main-content';
    }
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-50 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full shadow-2xl shadow-zion-cyan/25 flex items-center justify-center text-white hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300"
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Settings className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-20 left-4 z-50 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-zion-cyan/20 overflow-hidden"
            id="accessibility-panel"
            role="dialog"
            aria-labelledby="accessibility-title"
            aria-describedby="accessibility-description"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-zion-cyan to-zion-blue p-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 id="accessibility-title" className="text-lg font-semibold">Accessibility</h2>
                  <p id="accessibility-description" className="text-sm text-white/80">
                    Customize your experience
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Settings */}
            <div className="p-4 space-y-4">
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Contrast className="w-5 h-5 text-zion-slate" />
                  <div>
                    <label htmlFor="high-contrast" className="text-sm font-medium text-zion-slate-dark">
                      High Contrast
                    </label>
                    <p className="text-xs text-zion-slate/60">Enhanced color contrast</p>
                  </div>
                </div>
                <button
                  id="high-contrast"
                  onClick={() => handleSettingChange('highContrast', !settings.highContrast)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.highContrast ? 'bg-zion-cyan' : 'bg-zion-slate/30'
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
                <div className="flex items-center space-x-3">
                  <Type className="w-5 h-5 text-zion-slate" />
                  <div>
                    <label htmlFor="large-text" className="text-sm font-medium text-zion-slate-dark">
                      Large Text
                    </label>
                    <p className="text-xs text-zion-slate/60">Increased font size</p>
                  </div>
                </div>
                <button
                  id="large-text"
                  onClick={() => handleSettingChange('largeText', !settings.largeText)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.largeText ? 'bg-zion-cyan' : 'bg-zion-slate/30'
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
                <div className="flex items-center space-x-3">
                  <MousePointer className="w-5 h-5 text-zion-slate" />
                  <div>
                    <label htmlFor="reduced-motion" className="text-sm font-medium text-zion-slate-dark">
                      Reduced Motion
                    </label>
                    <p className="text-xs text-zion-slate/60">Minimize animations</p>
                  </div>
                </div>
                <button
                  id="reduced-motion"
                  onClick={() => handleSettingChange('reducedMotion', !settings.reducedMotion)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-zion-cyan' : 'bg-zion-slate/30'
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
                <div className="flex items-center space-x-3">
                  <Volume2 className="w-5 h-5 text-zion-slate" />
                  <div>
                    <label htmlFor="screen-reader" className="text-sm font-medium text-zion-slate-dark">
                      Screen Reader
                    </label>
                    <p className="text-xs text-zion-slate/60">Enhanced descriptions</p>
                  </div>
                </div>
                <button
                  id="screen-reader"
                  onClick={toggleScreenReader}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.screenReader ? 'bg-zion-cyan' : 'bg-zion-slate/30'
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
                <div className="flex items-center space-x-3">
                  <Keyboard className="w-5 h-5 text-zion-slate" />
                  <div>
                    <label htmlFor="keyboard-nav" className="text-sm font-medium text-zion-slate-dark">
                      Keyboard Navigation
                    </label>
                    <p className="text-xs text-zion-slate/60">Enhanced keyboard support</p>
                  </div>
                </div>
                <button
                  id="keyboard-nav"
                  onClick={toggleKeyboardNavigation}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.keyboardNavigation ? 'bg-zion-cyan' : 'bg-zion-slate/30'
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

              {/* Focus Indicators */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Eye className="w-5 h-5 text-zion-slate" />
                  <div>
                    <label htmlFor="focus-indicators" className="text-sm font-medium text-zion-slate-dark">
                      Focus Indicators
                    </label>
                    <p className="text-xs text-zion-slate/60">Visible focus outlines</p>
                  </div>
                </div>
                <button
                  id="focus-indicators"
                  onClick={() => handleSettingChange('focusIndicators', !settings.focusIndicators)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.focusIndicators ? 'bg-zion-cyan' : 'bg-zion-slate/30'
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
            </div>

            {/* Status */}
            <div className="px-4 pb-4">
              <div className="bg-zion-slate/5 rounded-lg p-3">
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-zion-slate-dark">
                    {Object.values(settings).filter(Boolean).length} accessibility features enabled
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

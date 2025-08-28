import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Keyboard,
  MousePointer,
  Monitor,
  Smartphone
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  cursorSize: 'small' | 'medium' | 'large';
  showFocusIndicator: boolean;
  screenReaderMode: boolean;
}

export function AccessibilityEnhancer() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    cursorSize: 'medium',
    showFocusIndicator: true,
    screenReaderMode: false
  });
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show accessibility panel after 5 seconds of inactivity
    const timer = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Apply accessibility settings to document
    applyAccessibilitySettings();
  }, [settings]);

  useEffect(() => {
    // Handle escape key to close panel
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const applyAccessibilitySettings = () => {
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.style.setProperty('--color-primary', '#ffffff');
      root.style.setProperty('--color-background', '#000000');
      root.style.setProperty('--color-text', '#ffffff');
    } else {
      root.style.removeProperty('--color-primary');
      root.style.removeProperty('--color-background');
      root.style.removeProperty('--color-text');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.1s');
    } else {
      root.style.removeProperty('--animation-duration');
    }

    // Font size
    const fontSizeMap = {
      small: '14px',
      medium: '16px',
      large: '18px'
    };
    root.style.setProperty('--font-size-base', fontSizeMap[settings.fontSize]);

    // Cursor size
    const cursorSizeMap = {
      small: 'auto',
      medium: 'pointer',
      large: 'crosshair'
    };
    root.style.setProperty('--cursor-size', cursorSizeMap[settings.cursorSize]);

    // Focus indicator
    if (settings.showFocusIndicator) {
      root.style.setProperty('--focus-ring', '2px solid #22ddd2');
    } else {
      root.style.setProperty('--focus-ring', 'none');
    }

    // Screen reader mode
    if (settings.screenReaderMode) {
      document.body.setAttribute('aria-live', 'polite');
      document.body.setAttribute('aria-atomic', 'true');
    } else {
      document.body.removeAttribute('aria-live');
      document.body.removeAttribute('aria-atomic');
    }
  };

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const resetSettings = () => {
    setSettings({
      highContrast: false,
      reducedMotion: false,
      fontSize: 'medium',
      cursorSize: 'medium',
      showFocusIndicator: true,
      screenReaderMode: false
    });
  };

  const announceToScreenReader = (message: string) => {
    if (settings.screenReaderMode) {
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

  if (!isVisible) return null;

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        ref={buttonRef}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setIsOpen(!isOpen);
          announceToScreenReader(isOpen ? 'Accessibility panel closed' : 'Accessibility panel opened');
        }}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 w-12 h-12 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300"
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Eye className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed right-20 top-1/2 transform -translate-y-1/2 z-40 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 p-6"
            role="dialog"
            aria-labelledby="accessibility-title"
            aria-describedby="accessibility-description"
          >
            <div className="space-y-6">
              {/* Header */}
              <div className="text-center">
                <h2 id="accessibility-title" className="text-xl font-bold text-gray-900 mb-2">
                  Accessibility Settings
                </h2>
                <p id="accessibility-description" className="text-sm text-gray-600">
                  Customize your experience for better accessibility
                </p>
              </div>

              {/* High Contrast Toggle */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Eye className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">High Contrast</span>
                </div>
                <button
                  onClick={() => toggleSetting('highContrast')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                    settings.highContrast ? 'bg-cyan-600' : 'bg-gray-200'
                  }`}
                  aria-pressed={settings.highContrast}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Reduced Motion Toggle */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <RotateCcw className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Reduced Motion</span>
                </div>
                <button
                  onClick={() => toggleSetting('reducedMotion')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                    settings.reducedMotion ? 'bg-cyan-600' : 'bg-gray-200'
                  }`}
                  aria-pressed={settings.reducedMotion}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Font Size Control */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <ZoomIn className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Font Size</span>
                </div>
                <div className="flex space-x-2">
                  {(['small', 'medium', 'large'] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => updateSetting('fontSize', size)}
                      className={`px-3 py-1 text-xs rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                        settings.fontSize === size
                          ? 'bg-cyan-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                      aria-pressed={settings.fontSize === size}
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Focus Indicator Toggle */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Keyboard className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Show Focus Indicator</span>
                </div>
                <button
                  onClick={() => toggleSetting('showFocusIndicator')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                    settings.showFocusIndicator ? 'bg-cyan-600' : 'bg-gray-200'
                  }`}
                  aria-pressed={settings.showFocusIndicator}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.showFocusIndicator ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Screen Reader Mode */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Volume2 className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Screen Reader Mode</span>
                </div>
                <button
                  onClick={() => toggleSetting('screenReaderMode')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                    settings.screenReaderMode ? 'bg-cyan-600' : 'bg-gray-200'
                  }`}
                  aria-pressed={settings.screenReaderMode}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.screenReaderMode ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetSettings}
                className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                Reset to Defaults
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Only Class */}
      <style jsx>{`
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

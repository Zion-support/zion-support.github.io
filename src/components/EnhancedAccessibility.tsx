import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Volume2,
  VolumeX,
  Eye,
  EyeOff,
  Contrast,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Accessibility,
  Keyboard,
  MousePointer,
  Smartphone
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  soundEnabled: boolean;
  focusIndicator: boolean;
  keyboardNavigation: boolean;
}

export const EnhancedAccessibility: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    soundEnabled: true,
    focusIndicator: true,
    keyboardNavigation: true
  });

  const [currentZoom, setCurrentZoom] = useState(100);
  const [showFocusIndicator, setShowFocusIndicator] = useState(false);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    if (settings.focusIndicator) {
      root.classList.add('focus-indicator');
    } else {
      root.classList.remove('focus-indicator');
    }
  }, [settings]);

  // Handle zoom changes
  useEffect(() => {
    document.body.style.zoom = `${currentZoom}%`;
  }, [currentZoom]);

  // Keyboard navigation
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key) {
        case 'Tab':
          setShowFocusIndicator(true);
          break;
        case 'Escape':
          setIsOpen(false);
          break;
        case 'h':
        case 'H':
          if (e.ctrlKey) {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation, isOpen]);

  // Hide focus indicator after a delay
  useEffect(() => {
    if (showFocusIndicator) {
      const timer = setTimeout(() => setShowFocusIndicator(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showFocusIndicator]);

  const toggleSetting = useCallback((key: keyof AccessibilitySettings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const resetSettings = useCallback(() => {
    setSettings({
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      soundEnabled: true,
      focusIndicator: true,
      keyboardNavigation: true
    });
    setCurrentZoom(100);
  }, []);

  const zoomIn = useCallback(() => {
    setCurrentZoom(prev => Math.min(prev + 25, 200));
  }, []);

  const zoomOut = useCallback(() => {
    setCurrentZoom(prev => Math.max(prev - 25, 50));
  }, []);

  const resetZoom = useCallback(() => {
    setCurrentZoom(100);
  }, []);

  const playSound = useCallback(() => {
    if (!settings.soundEnabled) return;
    
    // Create a simple beep sound
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  }, [settings.soundEnabled]);

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-zion-cyan text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open accessibility menu"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Accessibility className="w-6 h-6" />
        <div className="absolute inset-0 bg-zion-cyan/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="accessibility-panel"
            className="fixed bottom-24 right-6 z-40 w-80 bg-white dark:bg-zion-slate border border-zion-cyan/20 rounded-2xl shadow-2xl backdrop-blur-lg"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-zion-cyan/20">
              <h3 className="text-lg font-semibold text-zion-slate dark:text-white flex items-center gap-2">
                <Accessibility className="w-5 h-5 text-zion-cyan" />
                Accessibility
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-zion-cyan transition-colors duration-200"
                aria-label="Close accessibility menu"
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {/* Visual Settings */}
              <div className="space-y-3">
                <h4 className="font-medium text-zion-slate dark:text-white flex items-center gap-2">
                  <Eye className="w-4 h-4 text-zion-cyan" />
                  Visual Settings
                </h4>
                
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-gray-600 dark:text-gray-300">High Contrast</span>
                  <button
                    onClick={() => toggleSetting('highContrast')}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                      settings.highContrast ? 'bg-zion-cyan' : 'bg-gray-300'
                    }`}
                    aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast`}
                  >
                    <motion.div
                      className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-md"
                      animate={{ x: settings.highContrast ? 24 : 2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </label>

                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Large Text</span>
                  <button
                    onClick={() => toggleSetting('largeText')}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                      settings.largeText ? 'bg-zion-cyan' : 'bg-gray-300'
                    }`}
                    aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text`}
                  >
                    <motion.div
                      className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-md"
                      animate={{ x: settings.largeText ? 24 : 2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </label>

                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Reduced Motion</span>
                  <button
                    onClick={() => toggleSetting('reducedMotion')}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                      settings.reducedMotion ? 'bg-zion-cyan' : 'bg-gray-300'
                    }`}
                    aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                  >
                    <motion.div
                      className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-md"
                      animate={{ x: settings.reducedMotion ? 24 : 2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </label>
              </div>

              {/* Zoom Controls */}
              <div className="space-y-3">
                <h4 className="font-medium text-zion-slate dark:text-white flex items-center gap-2">
                  <ZoomIn className="w-4 h-4 text-zion-cyan" />
                  Zoom Controls
                </h4>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Zoom: {currentZoom}%</span>
                  <div className="flex gap-2">
                    <button
                      onClick={zoomOut}
                      className="p-2 text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-colors duration-200"
                      aria-label="Zoom out"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <button
                      onClick={resetZoom}
                      className="p-2 text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-colors duration-200"
                      aria-label="Reset zoom"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                    <button
                      onClick={zoomIn}
                      className="p-2 text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-colors duration-200"
                      aria-label="Zoom in"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Navigation Settings */}
              <div className="space-y-3">
                <h4 className="font-medium text-zion-slate dark:text-white flex items-center gap-2">
                  <Keyboard className="w-4 h-4 text-zion-cyan" />
                  Navigation
                </h4>
                
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Focus Indicator</span>
                  <button
                    onClick={() => toggleSetting('focusIndicator')}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                      settings.focusIndicator ? 'bg-zion-cyan' : 'bg-gray-300'
                    }`}
                    aria-label={`${settings.focusIndicator ? 'Disable' : 'Enable'} focus indicator`}
                  >
                    <motion.div
                      className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-md"
                      animate={{ x: settings.focusIndicator ? 24 : 2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </label>

                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Keyboard Navigation</span>
                  <button
                    onClick={() => toggleSetting('keyboardNavigation')}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                      settings.keyboardNavigation ? 'bg-zion-cyan' : 'bg-gray-300'
                    }`}
                    aria-label={`${settings.keyboardNavigation ? 'Disable' : 'Enable'} keyboard navigation`}
                  >
                    <motion.div
                      className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-md"
                      animate={{ x: settings.keyboardNavigation ? 24 : 2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </label>
              </div>

              {/* Audio Settings */}
              <div className="space-y-3">
                <h4 className="font-medium text-zion-slate dark:text-white flex items-center gap-2">
                  {settings.soundEnabled ? <Volume2 className="w-4 h-4 text-zion-cyan" /> : <VolumeX className="w-4 h-4 text-zion-cyan" />}
                  Audio
                </h4>
                
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Sound Effects</span>
                  <button
                    onClick={() => toggleSetting('soundEnabled')}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                      settings.soundEnabled ? 'bg-zion-cyan' : 'bg-gray-300'
                    }`}
                    aria-label={`${settings.soundEnabled ? 'Disable' : 'Enable'} sound effects`}
                  >
                    <motion.div
                      className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-md"
                      animate={{ x: settings.soundEnabled ? 24 : 2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </label>

                <button
                  onClick={playSound}
                  className="w-full p-2 text-sm text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-colors duration-200 border border-zion-cyan/20"
                  disabled={!settings.soundEnabled}
                  aria-label="Test sound"
                >
                  Test Sound
                </button>
              </div>

              {/* Keyboard Shortcuts */}
              <div className="space-y-3">
                <h4 className="font-medium text-zion-slate dark:text-white flex items-center gap-2">
                  <Keyboard className="w-4 h-4 text-zion-cyan" />
                  Keyboard Shortcuts
                </h4>
                
                <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                  <div className="flex justify-between">
                    <span>Ctrl + H</span>
                    <span>Toggle accessibility menu</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tab</span>
                    <span>Navigate focus</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Escape</span>
                    <span>Close menu</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-zion-cyan/20">
              <button
                onClick={resetSettings}
                className="w-full p-2 text-sm text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-colors duration-200 border border-zion-cyan/20"
                aria-label="Reset all accessibility settings"
              >
                Reset to Defaults
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Focus Indicator */}
      {showFocusIndicator && (
        <div className="fixed inset-0 pointer-events-none z-30">
          <div className="absolute inset-0 border-2 border-zion-cyan border-dashed animate-pulse" />
        </div>
      )}
    </>
  );
};

// CSS classes for accessibility features
export const accessibilityStyles = `
  /* High Contrast Mode */
  .high-contrast {
    --zion-cyan: 0 255 255;
    --zion-purple: 255 0 255;
    --zion-blue: 0 0 255;
    --zion-slate: 255 255 255;
    --zion-slate-dark: 0 0 0;
  }

  .high-contrast * {
    background-color: var(--zion-slate) !important;
    color: var(--zion-slate-dark) !important;
    border-color: var(--zion-slate-dark) !important;
  }

  /* Large Text Mode */
  .large-text {
    font-size: 1.2em;
  }

  .large-text h1 { font-size: 3.5rem; }
  .large-text h2 { font-size: 3rem; }
  .large-text h3 { font-size: 2.5rem; }
  .large-text p { font-size: 1.3rem; }
  .large-text button { font-size: 1.2rem; padding: 1rem 2rem; }

  /* Reduced Motion */
  .reduced-motion *,
  .reduced-motion *::before,
  .reduced-motion *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  /* Focus Indicator */
  .focus-indicator *:focus {
    outline: 3px solid var(--zion-cyan) !important;
    outline-offset: 2px !important;
  }

  .focus-indicator button:focus,
  .focus-indicator a:focus,
  .focus-indicator input:focus,
  .focus-indicator textarea:focus,
  .focus-indicator select:focus {
    outline: 3px solid var(--zion-cyan) !important;
    outline-offset: 2px !important;
    box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.3) !important;
  }
`;

// Hook for accessibility features
export const useAccessibility = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    setIsHighContrast(root.classList.contains('high-contrast'));
    setIsLargeText(root.classList.contains('large-text'));
    setIsReducedMotion(root.classList.contains('reduced-motion'));
  }, []);

  return {
    isHighContrast,
    isLargeText,
    isReducedMotion
  };
};
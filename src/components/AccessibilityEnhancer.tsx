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
  RotateCcw,
  Keyboard,
  MousePointer,
  Accessibility
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlindMode: boolean;
}

export const AccessibilityEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: false,
    colorBlindMode: false,
  });

  const [fontSize, setFontSize] = useState(16);
  const [isMuted, setIsMuted] = useState(false);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    const savedFontSize = localStorage.getItem('accessibility-font-size');
    
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
    
    if (savedFontSize) {
      setFontSize(parseInt(savedFontSize));
    }
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem('accessibility-font-size', fontSize.toString());
  }, [fontSize]);

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast mode
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text mode
    if (settings.largeText) {
      root.style.fontSize = '18px';
    } else {
      root.style.fontSize = '16px';
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.1s');
    } else {
      root.style.setProperty('--animation-duration', '0.3s');
    }

    // Focus indicator
    if (settings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Color blind mode
    if (settings.colorBlindMode) {
      root.classList.add('color-blind-mode');
    } else {
      root.classList.remove('color-blind-mode');
    }
  }, [settings]);

  // Apply font size
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  const toggleSetting = useCallback((key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  }, []);

  const resetSettings = useCallback(() => {
    setSettings({
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: false,
      colorBlindMode: false,
    });
    setFontSize(16);
  }, []);

  const increaseFontSize = useCallback(() => {
    setFontSize(prev => Math.min(prev + 2, 24));
  }, []);

  const decreaseFontSize = useCallback(() => {
    setFontSize(prev => Math.max(prev - 2, 12));
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
    // Implement audio muting logic here
  }, []);

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
          if (e.ctrlKey) {
            e.preventDefault();
            window.location.href = '/';
          }
          break;
        case 's':
        case 'S':
          if (e.ctrlKey) {
            e.preventDefault();
            window.location.href = '/services';
          }
          break;
        case 'c':
        case 'C':
          if (e.ctrlKey) {
            e.preventDefault();
            window.location.href = '/contact';
          }
          break;
        case 'Escape':
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

  const handleSettingChange = useCallback((key: keyof AccessibilitySettings) => {
    toggleSetting(key);
    announceToScreenReader(`${key.replace(/([A-Z])/g, ' $1').toLowerCase()} ${!settings[key] ? 'enabled' : 'disabled'}`);
  }, [toggleSetting, settings, announceToScreenReader]);

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-50 w-14 h-14 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300/50"
        aria-label="Open accessibility settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed left-4 bottom-20 z-40 w-80 bg-slate-800/95 backdrop-blur-xl border border-cyan-400/30 rounded-2xl shadow-2xl p-6"
            id="accessibility-panel"
            role="dialog"
            aria-label="Accessibility settings"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Accessibility className="w-5 h-5 text-cyan-400" />
                Accessibility
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Close accessibility settings"
              >
                ×
              </button>
            </div>

            {/* Font Size Controls */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-300 mb-3">
                Font Size
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={decreaseFontSize}
                  className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white transition-colors"
                  aria-label="Decrease font size"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-white font-mono min-w-[3rem] text-center">
                  {fontSize}px
                </span>
                <button
                  onClick={increaseFontSize}
                  className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white transition-colors"
                  aria-label="Increase font size"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Accessibility Toggles */}
            <div className="space-y-4 mb-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={() => handleSettingChange('highContrast')}
                  className="w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500 focus:ring-2"
                />
                <span className="text-slate-300">High Contrast</span>
                <Contrast className="w-4 h-4 text-cyan-400" />
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.largeText}
                  onChange={() => handleSettingChange('largeText')}
                  className="w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500 focus:ring-2"
                />
                <span className="text-slate-300">Large Text</span>
                <Type className="w-4 h-4 text-cyan-400" />
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.reducedMotion}
                  onChange={() => handleSettingChange('reducedMotion')}
                  className="w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500 focus:ring-2"
                />
                <span className="text-slate-300">Reduced Motion</span>
                <Eye className="w-4 h-4 text-cyan-400" />
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.focusIndicator}
                  onChange={() => handleSettingChange('focusIndicator')}
                  className="w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500 focus:ring-2"
                />
                <span className="text-slate-300">Focus Indicator</span>
                <MousePointer className="w-4 h-4 text-cyan-400" />
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.keyboardNavigation}
                  onChange={() => handleSettingChange('keyboardNavigation')}
                  className="w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500 focus:ring-2"
                />
                <span className="text-slate-300">Keyboard Navigation</span>
                <Keyboard className="w-4 h-4 text-cyan-400" />
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.colorBlindMode}
                  onChange={() => handleSettingChange('colorBlindMode')}
                  className="w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500 focus:ring-2"
                />
                <span className="text-slate-300">Color Blind Mode</span>
                <Eye className="w-4 h-4 text-cyan-400" />
              </label>
            </div>

            {/* Audio Controls */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-300 mb-3">
                Audio
              </label>
              <button
                onClick={toggleMute}
                className={`p-2 rounded-lg transition-colors ${
                  isMuted 
                    ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' 
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}
                aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>

            {/* Reset Button */}
            <button
              onClick={resetSettings}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reset to Default
            </button>

            {/* Keyboard Shortcuts Help */}
            {settings.keyboardNavigation && (
              <div className="mt-4 p-3 bg-slate-700/50 rounded-lg">
                <h3 className="text-sm font-medium text-slate-300 mb-2">Keyboard Shortcuts</h3>
                <div className="text-xs text-slate-400 space-y-1">
                  <div>Ctrl + H: Go Home</div>
                  <div>Ctrl + S: Go to Services</div>
                  <div>Ctrl + C: Go to Contact</div>
                  <div>Escape: Close panel</div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Only Announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true"></div>
    </>
  );
};

// CSS for accessibility features
const accessibilityStyles = `
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

  .high-contrast {
    --text-color: #ffffff;
    --bg-color: #000000;
    --accent-color: #ffff00;
  }

  .high-contrast * {
    color: var(--text-color) !important;
    background-color: var(--bg-color) !important;
    border-color: var(--accent-color) !important;
  }

  .focus-visible *:focus {
    outline: 3px solid #ffff00 !important;
    outline-offset: 2px !important;
  }

  .color-blind-mode {
    filter: grayscale(100%) contrast(150%);
  }

  .reduced-motion * {
    animation-duration: 0.1s !important;
    transition-duration: 0.1s !important;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = accessibilityStyles;
  document.head.appendChild(style);
}

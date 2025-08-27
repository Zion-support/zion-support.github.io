import React, { useState, useEffect } from 'react';
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
  Braille,
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
  focusHighlight: boolean;
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
    focusHighlight: false,
    colorBlindMode: false
  });

  const [currentFocus, setCurrentFocus] = useState<string>('');

  useEffect(() => {
    // Apply accessibility settings
    if (settings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    if (settings.largeText) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }

    if (settings.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    if (settings.focusHighlight) {
      document.documentElement.classList.add('focus-highlight');
    } else {
      document.documentElement.classList.remove('focus-highlight');
    }

    if (settings.colorBlindMode) {
      document.documentElement.classList.add('color-blind-mode');
    } else {
      document.documentElement.classList.remove('color-blind-mode');
    }
  }, [settings]);

  useEffect(() => {
    // Track keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setCurrentFocus('keyboard');
        setTimeout(() => setCurrentFocus(''), 2000);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
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

  const getAccessibilityScore = () => {
    const totalSettings = Object.keys(settings).length;
    const enabledSettings = Object.values(settings).filter(Boolean).length;
    return Math.round((enabledSettings / totalSettings) * 100);
  };

  const score = getAccessibilityScore();

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-3 bg-zion-cyan text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zinc-900"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle accessibility settings"
        aria-expanded={isOpen}
      >
        <Braille className="w-5 h-5" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-0 left-0 h-full w-80 bg-zinc-900/95 backdrop-blur-md border-r border-zinc-700/50 z-40 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-zion-cyan">Accessibility</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-zinc-400 hover:text-white transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Accessibility Score */}
              <div className="mb-6 p-4 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-zinc-300">Accessibility Score</span>
                  <span className={`text-lg font-bold ${
                    score >= 80 ? 'text-green-400' : 
                    score >= 60 ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {score}/100
                  </span>
                </div>
                <div className="w-full bg-zinc-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      score >= 80 ? 'bg-green-400' : 
                      score >= 60 ? 'bg-yellow-400' : 'bg-red-400'
                    }`}
                    style={{ width: `${score}%` }}
                  />
                </div>
              </div>

              {/* Settings */}
              <div className="space-y-4">
                {/* High Contrast */}
                <div className="flex items-center justify-between p-3 bg-zinc-800/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Contrast className="w-5 h-5 text-zion-cyan" />
                    <div>
                      <div className="text-sm font-medium text-white">High Contrast</div>
                      <div className="text-xs text-zinc-400">Enhanced color contrast</div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('highContrast')}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      settings.highContrast 
                        ? 'bg-zion-cyan text-white' 
                        : 'bg-zinc-700 text-zinc-400 hover:bg-zinc-600'
                    }`}
                    aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast`}
                  >
                    {settings.highContrast ? <Check className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                {/* Large Text */}
                <div className="flex items-center justify-between p-3 bg-zinc-800/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Type className="w-5 h-5 text-zion-cyan" />
                    <div>
                      <div className="text-sm font-medium text-white">Large Text</div>
                      <div className="text-xs text-zinc-400">Increased font sizes</div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('largeText')}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      settings.largeText 
                        ? 'bg-zion-cyan text-white' 
                        : 'bg-zinc-700 text-zinc-400 hover:bg-zinc-600'
                    }`}
                    aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text`}
                  >
                    {settings.largeText ? <Check className="w-4 h-4" /> : <Type className="w-4 h-4" />}
                  </button>
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between p-3 bg-zinc-800/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <EyeOff className="w-5 h-5 text-zion-cyan" />
                    <div>
                      <div className="text-sm font-medium text-white">Reduced Motion</div>
                      <div className="text-xs text-zinc-400">Minimize animations</div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('reducedMotion')}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      settings.reducedMotion 
                        ? 'bg-zion-cyan text-white' 
                        : 'bg-zinc-700 text-zinc-400 hover:bg-zinc-600'
                    }`}
                    aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                  >
                    {settings.reducedMotion ? <Check className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                </div>

                {/* Focus Highlight */}
                <div className="flex items-center justify-between p-3 bg-zinc-800/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <MousePointer className="w-5 h-5 text-zion-cyan" />
                    <div>
                      <div className="text-sm font-medium text-white">Focus Highlight</div>
                      <div className="text-xs text-zinc-400">Enhanced focus indicators</div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('focusHighlight')}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      settings.focusHighlight 
                        ? 'bg-zion-cyan text-white' 
                        : 'bg-zinc-700 text-zinc-400 hover:bg-zinc-600'
                    }`}
                    aria-label={`${settings.focusHighlight ? 'Disable' : 'Enable'} focus highlight`}
                  >
                    {settings.focusHighlight ? <Check className="w-4 h-4" /> : <MousePointer className="w-4 h-4" />}
                  </button>
                </div>

                {/* Color Blind Mode */}
                <div className="flex items-center justify-between p-3 bg-zinc-800/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Eye className="w-5 h-5 text-zion-cyan" />
                    <div>
                      <div className="text-sm font-medium text-white">Color Blind Mode</div>
                      <div className="text-xs text-zinc-400">Color blind friendly</div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('colorBlindMode')}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      settings.colorBlindMode 
                        ? 'bg-zion-cyan text-white' 
                        : 'bg-zinc-700 text-zinc-400 hover:bg-zinc-600'
                    }`}
                    aria-label={`${settings.colorBlindMode ? 'Disable' : 'Enable'} color blind mode`}
                  >
                    {settings.colorBlindMode ? <Check className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Current Status */}
              <div className="mt-6 p-4 bg-zinc-800/30 rounded-lg border border-zinc-700/50">
                <h3 className="text-sm font-medium text-white mb-3">Current Status</h3>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <Keyboard className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zinc-300">
                      Navigation: {currentFocus === 'keyboard' ? 'Keyboard' : 'Mouse'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zinc-300">
                      Screen Reader: {settings.screenReader ? 'Enabled' : 'Disabled'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="mt-6 p-4 bg-zion-cyan/10 rounded-lg border border-zion-cyan/20">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-zion-cyan" />
                  <span className="text-sm font-medium text-zion-cyan">Accessibility Tips</span>
                </div>
                <div className="text-xs text-zinc-300 space-y-1">
                  <p>• Use Tab key to navigate between elements</p>
                  <p>• Enable high contrast for better visibility</p>
                  <p>• Use large text for easier reading</p>
                  <p>• Enable focus highlight for keyboard navigation</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

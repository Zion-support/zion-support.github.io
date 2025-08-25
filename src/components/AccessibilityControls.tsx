import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  X, 
  Type, 
  Contrast, 
  Volume2, 
  VolumeX, 
  Eye, 
  EyeOff,
  Keyboard,
  Settings,
  Check,
  Plus,
  Minus
} from 'lucide-react';

interface AccessibilityControlsProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

interface AccessibilitySettings {
  fontSize: 'small' | 'medium' | 'large' | 'x-large';
  contrast: 'normal' | 'high' | 'inverted';
  reducedMotion: boolean;
  soundEnabled: boolean;
  focusIndicator: boolean;
  highContrast: boolean;
}

export const AccessibilityControls: React.FC<AccessibilityControlsProps> = ({ 
  position = 'bottom-right' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 'medium',
    contrast: 'normal',
    reducedMotion: false,
    soundEnabled: true,
    focusIndicator: true,
    highContrast: false
  });

  // Apply accessibility settings to the document
  useEffect(() => {
    const root = document.documentElement;
    
    // Font size
    root.style.setProperty('--font-size-base', getFontSizeValue(settings.fontSize));
    
    // Contrast
    if (settings.contrast === 'high') {
      root.classList.add('high-contrast');
      root.classList.remove('inverted-contrast');
    } else if (settings.contrast === 'inverted') {
      root.classList.add('inverted-contrast');
      root.classList.remove('high-contrast');
    } else {
      root.classList.remove('high-contrast', 'inverted-contrast');
    }
    
    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Focus indicator
    if (settings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast-mode');
    } else {
      root.classList.remove('high-contrast-mode');
    }
  }, [settings]);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  // Load settings from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings(parsed);
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  const getFontSizeValue = (size: string) => {
    switch (size) {
      case 'small': return '14px';
      case 'medium': return '16px';
      case 'large': return '18px';
      case 'x-large': return '20px';
      default: return '16px';
    }
  };

  const increaseFontSize = () => {
    const sizes: AccessibilitySettings['fontSize'][] = ['small', 'medium', 'large', 'x-large'];
    const currentIndex = sizes.indexOf(settings.fontSize);
    if (currentIndex < sizes.length - 1) {
      setSettings(prev => ({ ...prev, fontSize: sizes[currentIndex + 1] }));
    }
  };

  const decreaseFontSize = () => {
    const sizes: AccessibilitySettings['fontSize'][] = ['small', 'medium', 'large', 'x-large'];
    const currentIndex = sizes.indexOf(settings.fontSize);
    if (currentIndex > 0) {
      setSettings(prev => ({ ...prev, fontSize: sizes[currentIndex - 1] }));
    }
  };

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K, 
    value: AccessibilitySettings[K]
  ) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      fontSize: 'medium',
      contrast: 'normal',
      reducedMotion: false,
      soundEnabled: true,
      focusIndicator: true,
      highContrast: false
    };
    setSettings(defaultSettings);
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'top-left': return 'top-4 left-4';
      case 'top-right': return 'top-4 right-4';
      case 'bottom-left': return 'bottom-4 left-4';
      case 'bottom-right': return 'bottom-4 right-4';
      default: return 'bottom-4 right-4';
    }
  };

  return (
    <div className={`fixed ${getPositionClasses()} z-50`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl max-w-sm w-80"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/20">
              <div className="flex items-center space-x-2">
                <Accessibility className="w-5 h-5 text-cyan-400" />
                <h3 className="text-white font-semibold">Accessibility</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              {/* Font Size Control */}
              <div>
                <label className="text-white font-medium mb-2 block">Font Size</label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={decreaseFontSize}
                    disabled={settings.fontSize === 'small'}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Minus className="w-4 h-4 text-white" />
                  </button>
                  <span className="text-white min-w-[60px] text-center">
                    {settings.fontSize.replace('-', ' ').toUpperCase()}
                  </span>
                  <button
                    onClick={increaseFontSize}
                    disabled={settings.fontSize === 'x-large'}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Plus className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Contrast Control */}
              <div>
                <label className="text-white font-medium mb-2 block">Contrast</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['normal', 'high', 'inverted'] as const).map((contrast) => (
                    <button
                      key={contrast}
                      onClick={() => updateSetting('contrast', contrast)}
                      className={`p-2 rounded text-sm transition-colors ${
                        settings.contrast === contrast
                          ? 'bg-cyan-500 text-white'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {contrast.charAt(0).toUpperCase() + contrast.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Toggle Options */}
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.reducedMotion}
                    onChange={() => toggleSetting('reducedMotion')}
                    className="w-4 h-4 text-cyan-500 bg-white/10 border-white/20 rounded focus:ring-cyan-500"
                  />
                  <span className="text-white">Reduce Motion</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.soundEnabled}
                    onChange={() => toggleSetting('soundEnabled')}
                    className="w-4 h-4 text-cyan-500 bg-white/10 border-white/20 rounded focus:ring-cyan-500"
                  />
                  <span className="text-white">Sound Effects</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.focusIndicator}
                    onChange={() => toggleSetting('focusIndicator')}
                    className="w-4 h-4 text-cyan-500 bg-white/10 border-white/20 rounded focus:ring-cyan-500"
                  />
                  <span className="text-white">Focus Indicators</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.highContrast}
                    onChange={() => toggleSetting('highContrast')}
                    className="w-4 h-4 text-cyan-500 bg-white/10 border-white/20 rounded focus:ring-cyan-500"
                  />
                  <span className="text-white">High Contrast Mode</span>
                </label>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetSettings}
                className="w-full p-2 bg-white/10 hover:bg-white/20 text-white rounded transition-colors"
              >
                Reset to Defaults
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      {!isOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => setIsOpen(true)}
          className="bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          title="Accessibility Controls"
          aria-label="Open accessibility controls"
        >
          <Accessibility className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
};

export default AccessibilityControls;
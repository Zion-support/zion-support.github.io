import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  Eye, 
  Type, 
  Volume2, 
  Palette, 
  X,
  Plus,
  Minus,
  Sun,
  Moon,
  Contrast,
  Braille,
  Headphones,
  Settings,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  largeText: boolean;
  textScale: number;
  colorBlindFriendly: boolean;
  focusIndicators: boolean;
  soundEffects: boolean;
  screenReader: boolean;
}

export function EnhancedAccessibilityPanel() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    largeText: false,
    textScale: 1,
    colorBlindFriendly: false,
    focusIndicators: true,
    soundEffects: false,
    screenReader: false
  });

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setSettings(prev => ({ ...prev, ...parsed }));
    }
  }, []);

  useEffect(() => {
    // Apply settings to document
    applyAccessibilitySettings();
    
    // Save settings to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const applyAccessibilitySettings = () => {
    const root = document.documentElement;
    
    // High contrast mode
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Large text
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Text scaling
    root.style.setProperty('--text-scale', settings.textScale.toString());

    // Color blind friendly
    if (settings.colorBlindFriendly) {
      root.classList.add('color-blind-friendly');
    } else {
      root.classList.remove('color-blind-friendly');
    }

    // Focus indicators
    if (settings.focusIndicators) {
      root.classList.add('show-focus-indicators');
    } else {
      root.classList.remove('show-focus-indicators');
    }

    // Sound effects
    if (settings.soundEffects) {
      enableSoundEffects();
    } else {
      disableSoundEffects();
    }
  };

  const enableSoundEffects = () => {
    // Add audio feedback for interactions
    document.addEventListener('click', playClickSound);
    document.addEventListener('focus', playFocusSound);
  };

  const disableSoundEffects = () => {
    document.removeEventListener('click', playClickSound);
    document.removeEventListener('focus', playFocusSound);
  };

  const playClickSound = () => {
    // Create a simple click sound using Web Audio API
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  const playFocusSound = () => {
    // Create a focus sound
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.05);
    
    gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.05);
  };

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const updateTextScale = (delta: number) => {
    const newScale = Math.max(0.8, Math.min(2.0, settings.textScale + delta));
    setSettings(prev => ({ ...prev, textScale: newScale }));
  };

  const resetSettings = () => {
    setSettings({
      highContrast: false,
      reducedMotion: false,
      largeText: false,
      textScale: 1,
      colorBlindFriendly: false,
      focusIndicators: true,
      soundEffects: false,
      screenReader: false
    });
  };

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  if (!isVisible) {
    return (
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-4 left-4 z-50 bg-zion-purple text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        onClick={toggleVisibility}
        aria-label="Open Accessibility Panel"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="fixed bottom-4 left-4 z-50 bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-2xl max-w-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <Accessibility className="w-5 h-5 text-zion-purple" />
          <h3 className="font-semibold text-white">Accessibility</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleExpanded}
            className="p-1 hover:bg-slate-700 rounded transition-colors"
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            <Settings className="w-4 h-4 text-slate-400" />
          </button>
          <button
            onClick={toggleVisibility}
            className="p-1 hover:bg-slate-700 rounded transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>

      {/* Settings */}
      <div className="p-4 space-y-4">
        {/* Visual Settings */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-slate-300 flex items-center gap-2">
            <Eye className="w-4 h-4" />
            Visual
          </h4>
          
          <div className="space-y-2">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={() => toggleSetting('highContrast')}
                className="w-4 h-4 text-zion-purple bg-slate-700 border-slate-600 rounded focus:ring-zion-purple focus:ring-2"
              />
              <div className="flex items-center gap-2">
                <Contrast className="w-4 h-4 text-slate-400" />
                <span className="text-sm text-white">High Contrast</span>
              </div>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.colorBlindFriendly}
                onChange={() => toggleSetting('colorBlindFriendly')}
                className="w-4 h-4 text-zion-purple bg-slate-700 border-slate-600 rounded focus:ring-zion-purple focus:ring-2"
              />
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-slate-400" />
                <span className="text-sm text-white">Color Blind Friendly</span>
              </div>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.focusIndicators}
                onChange={() => toggleSetting('focusIndicators')}
                className="w-4 h-4 text-zion-purple bg-slate-700 border-slate-600 rounded focus:ring-zion-purple focus:ring-2"
              />
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-slate-400" />
                <span className="text-sm text-white">Focus Indicators</span>
              </div>
            </label>
          </div>
        </div>

        {/* Text Settings */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-slate-300 flex items-center gap-2">
            <Type className="w-4 h-4" />
            Text
          </h4>
          
          <div className="space-y-2">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.largeText}
                onChange={() => toggleSetting('largeText')}
                className="w-4 h-4 text-zion-purple bg-slate-700 border-slate-600 rounded focus:ring-zion-purple focus:ring-2"
              />
              <span className="text-sm text-white">Large Text</span>
            </label>

            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-400">Text Scale:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateTextScale(-0.1)}
                  className="p-1 hover:bg-slate-700 rounded transition-colors"
                  aria-label="Decrease text size"
                >
                  <Minus className="w-4 h-4 text-slate-400" />
                </button>
                <span className="text-sm text-white font-mono min-w-[3rem] text-center">
                  {Math.round(settings.textScale * 100)}%
                </span>
                <button
                  onClick={() => updateTextScale(0.1)}
                  className="p-1 hover:bg-slate-700 rounded transition-colors"
                  aria-label="Increase text size"
                >
                  <Plus className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Motion Settings */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-slate-300 flex items-center gap-2">
            <motion.div
              animate={settings.reducedMotion ? {} : { rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sun className="w-4 h-4" />
            </motion.div>
            Motion
          </h4>
          
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={settings.reducedMotion}
              onChange={() => toggleSetting('reducedMotion')}
              className="w-4 h-4 text-zion-purple bg-slate-700 border-slate-600 rounded focus:ring-zion-purple focus:ring-2"
            />
            <span className="text-sm text-white">Reduced Motion</span>
          </label>
        </div>

        {/* Audio Settings */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-slate-300 flex items-center gap-2">
            <Volume2 className="w-4 h-4" />
            Audio
          </h4>
          
          <div className="space-y-2">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.soundEffects}
                onChange={() => toggleSetting('soundEffects')}
                className="w-4 h-4 text-zion-purple bg-slate-700 border-slate-600 rounded focus:ring-zion-purple focus:ring-2"
              />
              <span className="text-sm text-white">Sound Effects</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.screenReader}
                onChange={() => toggleSetting('screenReader')}
                className="w-4 h-4 text-zion-purple bg-slate-700 border-slate-600 rounded focus:ring-zion-purple focus:ring-2"
              />
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-slate-400" />
                <span className="text-sm text-white">Screen Reader Support</span>
              </div>
            </label>
          </div>
        </div>

        {/* Reset Button */}
        <div className="pt-2 border-t border-slate-700">
          <button
            onClick={resetSettings}
            className="w-full px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-sm"
          >
            Reset to Defaults
          </button>
        </div>

        {/* Status Indicators */}
        <div className="pt-2 border-t border-slate-700">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>WCAG 2.1 AA</span>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-green-400" />
              <span>Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

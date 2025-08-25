import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { 
  Eye, 
  EyeOff, 
  Type, 
  Volume2, 
  VolumeX, 
  Contrast, 
  ZoomIn, 
  ZoomOut,
  RotateCcw,
  Keyboard,
  MousePointer,
  Accessibility,
  HelpCircle
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6685
=======
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  Type, 
  Contrast, 
  Volume2, 
  VolumeX,
  Settings,
  X,
  Sun,
  Moon,
  Monitor
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
} from 'lucide-react';

interface AccessibilityControlsProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
<<<<<<< HEAD
<<<<<<< HEAD
}

interface AccessibilitySettings {
  fontSize: 'small' | 'medium' | 'large' | 'x-large';
  contrast: 'normal' | 'high' | 'inverted';
  reducedMotion: boolean;
  soundEnabled: boolean;
  focusIndicator: boolean;
  highContrast: boolean;
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
}

export const AccessibilityControls: React.FC<AccessibilityControlsProps> = ({ 
  position = 'bottom-right' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
<<<<<<< HEAD
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
=======
}

export function AccessibilityControls({ position = 'bottom-right' }: AccessibilityControlsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mutedAudio, setMutedAudio] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [showKeyboardShortcuts, setShowKeyboardShortcuts] = useState(false);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Alt + A to toggle accessibility panel
      if (event.altKey && event.key === 'a') {
        event.preventDefault();
        setIsOpen(prev => !prev);
      }
      
      // Alt + H for high contrast
      if (event.altKey && event.key === 'h') {
        event.preventDefault();
        setHighContrast(prev => !prev);
      }
      
      // Alt + L for large text
      if (event.altKey && event.key === 'l') {
        event.preventDefault();
        setLargeText(prev => !prev);
      }
      
      // Alt + M for reduced motion
      if (event.altKey && event.key === 'm') {
        event.preventDefault();
        setReducedMotion(prev => !prev);
      }
      
      // Alt + Z for zoom reset
      if (event.altKey && event.key === 'z') {
        event.preventDefault();
        setZoomLevel(100);
      }
      
      // Escape to close panel
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6685
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
<<<<<<< HEAD
    setSettings(defaultSettings);
  };
=======
  const [fontSize, setFontSize] = useState(16);
  const [contrast, setContrast] = useState<'normal' | 'high' | 'inverted'>('normal');
  const [isMuted, setIsMuted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('dark');
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698

  // Position classes based on prop
  const getPositionClasses = () => {
    switch (position) {
<<<<<<< HEAD
      case 'top-left': return 'top-4 left-4';
      case 'top-right': return 'top-4 right-4';
      case 'bottom-left': return 'bottom-4 left-4';
      case 'bottom-right': return 'bottom-4 right-4';
      default: return 'bottom-4 right-4';
=======

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    
    if (highContrast) {
      root.style.setProperty('--high-contrast', '1');
      root.classList.add('high-contrast');
    } else {
      root.style.setProperty('--high-contrast', '0');
      root.classList.remove('high-contrast');
=======
      case 'top-left':
        return 'top-4 left-4';
      case 'top-right':
        return 'top-4 right-4';
      case 'bottom-left':
        return 'bottom-4 left-4';
      case 'bottom-right':
      default:
        return 'bottom-4 right-4';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
    }
    
    if (largeText) {
      root.style.setProperty('--text-scale', '1.2');
      root.classList.add('large-text');
    } else {
      root.style.setProperty('--text-scale', '1');
      root.classList.remove('large-text');
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6685
    }
    
    if (reducedMotion) {
      root.style.setProperty('--reduced-motion', '1');
      root.classList.add('reduced-motion');
    } else {
      root.style.setProperty('--reduced-motion', '0');
      root.classList.remove('reduced-motion');
    }
    
    // Apply zoom
    root.style.setProperty('--zoom-level', `${zoomLevel / 100}`);
  }, [highContrast, largeText, reducedMotion, zoomLevel]);

  // Reset all settings
  const resetAll = () => {
    setHighContrast(false);
    setLargeText(false);
    setReducedMotion(false);
    setMutedAudio(false);
    setZoomLevel(100);
  };

<<<<<<< HEAD
  // Save settings to localStorage
  const saveSettings = () => {
    const settings = {
      highContrast,
      largeText,
      reducedMotion,
      mutedAudio,
      zoomLevel
    };
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(settings));
  };

  // Load settings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('zion-accessibility-settings');
    if (saved) {
      try {
        const settings = JSON.parse(saved);
        setHighContrast(settings.highContrast || false);
        setLargeText(settings.largeText || false);
        setReducedMotion(settings.reducedMotion || false);
        setMutedAudio(settings.mutedAudio || false);
        setZoomLevel(settings.zoomLevel || 100);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, []);

  // Auto-save settings
  useEffect(() => {
    saveSettings();
  }, [highContrast, largeText, reducedMotion, mutedAudio, zoomLevel]);

  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4'
  };

  const keyboardShortcuts = [
    { key: 'Alt + A', description: 'Toggle accessibility panel' },
    { key: 'Alt + H', description: 'Toggle high contrast' },
    { key: 'Alt + L', description: 'Toggle large text' },
    { key: 'Alt + M', description: 'Toggle reduced motion' },
    { key: 'Alt + Z', description: 'Reset zoom' },
    { key: 'Escape', description: 'Close panel' }
  ];

  return (
<<<<<<< HEAD
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
=======
    <div className={`fixed ${positionClasses[position]} z-50`}>
      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-zion-blue-dark border-2 border-zion-cyan/50 rounded-full flex items-center justify-center text-zion-cyan hover:bg-zion-cyan/20 hover:border-zion-cyan transition-all duration-300 shadow-lg hover:shadow-zion-cyan/25 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-blue-dark"
=======
  // Apply font size changes
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  // Apply contrast changes
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('contrast-normal', 'contrast-high', 'contrast-inverted');
    root.classList.add(`contrast-${contrast}`);
  }, [contrast]);

  // Apply theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.toggle('dark', prefersDark);
    } else {
      root.classList.toggle('dark', theme === 'dark');
    }
  }, [theme]);

  // Toggle mute state
  const toggleMute = () => {
    setIsMuted(!isMuted);
    // Here you would implement actual audio muting logic
    if (isMuted) {
      // Unmute audio
      console.log('Audio unmuted');
    } else {
      // Mute audio
      console.log('Audio muted');
    }
  };

  // Reset all settings
  const resetSettings = () => {
    setFontSize(16);
    setContrast('normal');
    setIsMuted(false);
    setTheme('dark');
  };

  return (
    <div className={`fixed ${getPositionClasses()} z-50`}>
      {/* Main Accessibility Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center group"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
        aria-label="Accessibility controls"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
<<<<<<< HEAD
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div 
          className="absolute bottom-16 right-0 w-80 bg-zion-blue-dark border border-zion-cyan/30 rounded-lg shadow-2xl backdrop-blur-sm"
          role="dialog"
          aria-label="Accessibility settings"
          aria-modal="true"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-zion-cyan/20">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Accessibility className="w-5 h-5 mr-2 text-zion-cyan" />
              Accessibility
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close accessibility panel"
            >
              ×
            </button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Contrast className="w-5 h-5 text-zion-cyan" />
                <div>
                  <label htmlFor="high-contrast" className="text-white font-medium">
                    High Contrast
                  </label>
                  <p className="text-sm text-gray-400">Enhanced color contrast</p>
                </div>
              </div>
              <button
                id="high-contrast"
                onClick={() => setHighContrast(!highContrast)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-blue-dark ${
                  highContrast ? 'bg-zion-cyan' : 'bg-gray-600'
                }`}
                aria-pressed={highContrast}
                aria-label="Toggle high contrast mode"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Large Text */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Type className="w-5 h-5 text-zion-cyan" />
                <div>
                  <label htmlFor="large-text" className="text-white font-medium">
                    Large Text
                  </label>
                  <p className="text-sm text-gray-400">Increase text size</p>
                </div>
              </div>
              <button
                id="large-text"
                onClick={() => setLargeText(!largeText)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-blue-dark ${
                  largeText ? 'bg-zion-cyan' : 'bg-gray-600'
                }`}
                aria-pressed={largeText}
                aria-label="Toggle large text mode"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    largeText ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Reduced Motion */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <MousePointer className="w-5 h-5 text-zion-cyan" />
                <div>
                  <label htmlFor="reduced-motion" className="text-white font-medium">
                    Reduced Motion
                  </label>
                  <p className="text-sm text-gray-400">Minimize animations</p>
                </div>
              </div>
              <button
                id="reduced-motion"
                onClick={() => setReducedMotion(!reducedMotion)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-blue-dark ${
                  reducedMotion ? 'bg-zion-cyan' : 'bg-gray-600'
                }`}
                aria-pressed={reducedMotion}
                aria-label="Toggle reduced motion mode"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Zoom Control */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <ZoomIn className="w-5 h-5 text-zion-cyan" />
                <label className="text-white font-medium">Zoom Level</label>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setZoomLevel(Math.max(50, zoomLevel - 10))}
                  className="p-2 bg-zion-blue-dark/50 border border-zion-cyan/30 rounded text-zion-cyan hover:bg-zion-cyan/20 transition-colors"
                  aria-label="Zoom out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-white min-w-[3rem] text-center">{zoomLevel}%</span>
                <button
                  onClick={() => setZoomLevel(Math.min(200, zoomLevel + 10))}
                  className="p-2 bg-zion-blue-dark/50 border border-zion-cyan/30 rounded text-zion-cyan hover:bg-zion-cyan/20 transition-colors"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6685
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

<<<<<<< HEAD
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
=======
        <Accessibility className="w-7 h-7" />
        
        {/* Pulse animation when open */}
        {isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-cyan-300"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute bottom-20 right-0 w-80 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden"
            role="dialog"
            aria-label="Accessibility settings"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Accessibility className="w-5 h-5 text-cyan-400" />
                Accessibility
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Close accessibility panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-6">
              {/* Font Size Control */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                  <Type className="w-4 h-4 text-cyan-400" />
                  Font Size
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                    className="w-8 h-8 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center"
                    aria-label="Decrease font size"
                  >
                    A-
                  </button>
                  <span className="text-white font-medium min-w-[3rem] text-center">
                    {fontSize}px
                  </span>
                  <button
                    onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                    className="w-8 h-8 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center"
                    aria-label="Increase font size"
                  >
                    A+
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
                  </button>
                </div>
              </div>

              {/* Contrast Control */}
              <div>
<<<<<<< HEAD
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
=======
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                  <Contrast className="w-4 h-4 text-cyan-400" />
                  Contrast
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['normal', 'high', 'inverted'] as const).map((contrastOption) => (
                    <button
                      key={contrastOption}
                      onClick={() => setContrast(contrastOption)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        contrast === contrastOption
                          ? 'bg-cyan-500 text-white shadow-lg'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {contrastOption.charAt(0).toUpperCase() + contrastOption.slice(1)}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
                    </button>
                  ))}
                </div>
              </div>

<<<<<<< HEAD
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
=======
              {/* Theme Control */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                  <Settings className="w-4 h-4 text-cyan-400" />
                  Theme
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {([
                    { value: 'light', icon: Sun, label: 'Light' },
                    { value: 'dark', icon: Moon, label: 'Dark' },
                    { value: 'auto', icon: Monitor, label: 'Auto' }
                  ] as const).map(({ value, icon: Icon, label }) => (
                    <button
                      key={value}
                      onClick={() => setTheme(value)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                        theme === value
                          ? 'bg-cyan-500 text-white shadow-lg'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Audio Control */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-red-400" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-cyan-400" />
                  )}
                  Audio
                </label>
                <button
                  onClick={toggleMute}
                  className={`w-full px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isMuted
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-green-500 text-white hover:bg-green-600'
                  }`}
                >
                  {isMuted ? 'Unmute Audio' : 'Mute Audio'}
                </button>
              </div>

              {/* Reset Button */}
              <div className="pt-4 border-t border-gray-700/50">
                <button
                  onClick={resetSettings}
                  className="w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium"
                >
                  Reset to Defaults
                </button>
              </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
            </div>
          </motion.div>
        )}
      </AnimatePresence>
<<<<<<< HEAD

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
=======
            {/* Keyboard Shortcuts */}
            <div className="space-y-2">
              <button
                onClick={() => setShowKeyboardShortcuts(!showKeyboardShortcuts)}
                className="flex items-center space-x-3 text-zion-cyan hover:text-zion-cyan-light transition-colors"
                aria-expanded={showKeyboardShortcuts}
              >
                <Keyboard className="w-5 h-5" />
                <span className="font-medium">Keyboard Shortcuts</span>
                <HelpCircle className="w-4 h-4" />
              </button>
              
              {showKeyboardShortcuts && (
                <div className="ml-8 space-y-2 text-sm">
                  {keyboardShortcuts.map((shortcut, index) => (
                    <div key={index} className="flex justify-between text-gray-300">
                      <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">{shortcut.key}</kbd>
                      <span>{shortcut.description}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Reset Button */}
            <button
              onClick={resetAll}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-zion-blue-dark/50 border border-zion-cyan/30 rounded text-zion-cyan hover:bg-zion-cyan/20 transition-colors"
              aria-label="Reset all accessibility settings"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset All</span>
            </button>
          </div>
        </div>
      )}
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
    </div>
  );
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6685

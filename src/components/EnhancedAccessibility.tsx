import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  Sun,
  Moon,
  Monitor,
  Accessibility,
  Keyboard,
  MousePointer,
  Headphones,
  Settings,
  X,
  Check,
  AlertTriangle,
  Info
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: number;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  theme: 'light' | 'dark' | 'auto';
  focusIndicator: boolean;
  soundEffects: boolean;
  autoPlay: boolean;
}

interface EnhancedAccessibilityProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  showOnLoad?: boolean;
  enableKeyboardShortcuts?: boolean;
  enableVoiceCommands?: boolean;
}

export const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({
  position = 'bottom-right',
  showOnLoad = false,
  enableKeyboardShortcuts = true,
  enableVoiceCommands = false
}) => {
  const [isOpen, setIsOpen] = useState(showOnLoad);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 100,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    colorBlindness: 'none',
    theme: 'auto',
    focusIndicator: true,
    soundEffects: false,
    autoPlay: false
  });
  const [activeTab, setActiveTab] = useState<'general' | 'visual' | 'audio' | 'navigation'>('general');
  const [showKeyboardShortcuts, setShowKeyboardShortcuts] = useState(false);
  const [voiceCommandActive, setVoiceCommandActive] = useState(false);
  const [accessibilityScore, setAccessibilityScore] = useState(85);
  const [notifications, setNotifications] = useState<string[]>([]);
  
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Keyboard shortcuts
  const keyboardShortcuts = {
    'Alt + A': 'Toggle accessibility panel',
    'Alt + H': 'Toggle high contrast',
    'Alt + F': 'Toggle focus indicator',
    'Alt + R': 'Reset all settings',
    'Alt + T': 'Toggle theme',
    'Alt + S': 'Toggle screen reader mode',
    'Alt + K': 'Show keyboard shortcuts',
    'Escape': 'Close accessibility panel'
  };

  // Voice commands
  const voiceCommands = {
    'open accessibility': () => setIsOpen(true),
    'close accessibility': () => setIsOpen(false),
    'high contrast': () => toggleHighContrast(),
    'normal contrast': () => toggleHighContrast(),
    'increase font': () => changeFontSize(10),
    'decrease font': () => changeFontSize(-10),
    'reset font': () => resetFontSize(),
    'dark theme': () => setTheme('dark'),
    'light theme': () => setTheme('light'),
    'auto theme': () => setTheme('auto')
  };

  // Apply accessibility settings
  useEffect(() => {
    applyAccessibilitySettings();
    calculateAccessibilityScore();
  }, [settings]);

  // Keyboard event handlers
  useEffect(() => {
    if (!enableKeyboardShortcuts) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Alt + A: Toggle accessibility panel
      if (event.altKey && event.key === 'a') {
        event.preventDefault();
        setIsOpen(prev => !prev);
      }
      
      // Alt + H: Toggle high contrast
      if (event.altKey && event.key === 'h') {
        event.preventDefault();
        toggleHighContrast();
      }
      
      // Alt + F: Toggle focus indicator
      if (event.altKey && event.key === 'f') {
        event.preventDefault();
        toggleFocusIndicator();
      }
      
      // Alt + R: Reset all settings
      if (event.altKey && event.key === 'r') {
        event.preventDefault();
        resetAllSettings();
      }
      
      // Alt + T: Toggle theme
      if (event.altKey && event.key === 't') {
        event.preventDefault();
        cycleTheme();
      }
      
      // Alt + S: Toggle screen reader mode
      if (event.altKey && event.key === 's') {
        event.preventDefault();
        toggleScreenReader();
      }
      
      // Alt + K: Show keyboard shortcuts
      if (event.altKey && event.key === 'k') {
        event.preventDefault();
        setShowKeyboardShortcuts(true);
      }
      
      // Escape: Close panel
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        if (buttonRef.current) {
          buttonRef.current.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, enableKeyboardShortcuts]);

  // Voice command recognition
  useEffect(() => {
    if (!enableVoiceCommands || !('webkitSpeechRecognition' in window)) return;

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event: any) => {
      const command = event.results[0][0].transcript.toLowerCase();
      executeVoiceCommand(command);
    };

    recognition.onstart = () => {
      setVoiceCommandActive(true);
      addNotification('Voice recognition active. Speak a command.');
    };

    recognition.onend = () => {
      setVoiceCommandActive(false);
    };

    if (voiceCommandActive) {
      recognition.start();
    }

    return () => {
      recognition.stop();
    };
  }, [enableVoiceCommands, voiceCommandActive]);

  // Apply accessibility settings to DOM
  const applyAccessibilitySettings = useCallback(() => {
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Font size
    root.style.setProperty('--font-size-multiplier', `${settings.fontSize / 100}`);
    
    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Color blindness
    root.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
    if (settings.colorBlindness !== 'none') {
      root.classList.add(settings.colorBlindness);
    }
    
    // Focus indicator
    if (settings.focusIndicator) {
      root.classList.add('show-focus-indicator');
    } else {
      root.classList.remove('show-focus-indicator');
    }
    
    // Theme
    if (settings.theme === 'dark' || (settings.theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Screen reader enhancements
    if (settings.screenReader) {
      root.setAttribute('data-screen-reader', 'true');
      addNotification('Screen reader mode enabled');
    } else {
      root.removeAttribute('data-screen-reader');
    }
    
    // Keyboard navigation
    if (settings.keyboardNavigation) {
      root.setAttribute('data-keyboard-nav', 'true');
      addNotification('Keyboard navigation mode enabled');
    } else {
      root.removeAttribute('data-keyboard-nav');
    }
  }, [settings]);

  // Calculate accessibility score
  const calculateAccessibilityScore = useCallback(() => {
    let score = 100;
    
    if (!settings.focusIndicator) score -= 15;
    if (!settings.screenReader) score -= 10;
    if (!settings.keyboardNavigation) score -= 10;
    if (settings.fontSize < 100) score -= 5;
    if (settings.reducedMotion) score -= 5;
    if (settings.colorBlindness !== 'none') score += 5; // Bonus for color blindness support
    
    setAccessibilityScore(Math.max(0, Math.min(100, score)));
  }, [settings]);

  // Toggle functions
  const toggleHighContrast = () => {
    setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
    addNotification(`High contrast ${!settings.highContrast ? 'enabled' : 'disabled'}`);
  };

  const toggleFocusIndicator = () => {
    setSettings(prev => ({ ...prev, focusIndicator: !prev.focusIndicator }));
    addNotification(`Focus indicator ${!settings.focusIndicator ? 'enabled' : 'disabled'}`);
  };

  const toggleScreenReader = () => {
    setSettings(prev => ({ ...prev, screenReader: !prev.screenReader }));
  };

  const toggleKeyboardNavigation = () => {
    setSettings(prev => ({ ...prev, keyboardNavigation: !prev.keyboardNavigation }));
  };

  const changeFontSize = (delta: number) => {
    const newSize = Math.max(50, Math.min(200, settings.fontSize + delta));
    setSettings(prev => ({ ...prev, fontSize: newSize }));
    addNotification(`Font size: ${newSize}%`);
  };

  const resetFontSize = () => {
    setSettings(prev => ({ ...prev, fontSize: 100 }));
    addNotification('Font size reset to 100%');
  };

  const setTheme = (theme: 'light' | 'dark' | 'auto') => {
    setSettings(prev => ({ ...prev, theme }));
    addNotification(`Theme set to ${theme}`);
  };

  const cycleTheme = () => {
    const themes: ('light' | 'dark' | 'auto')[] = ['light', 'dark', 'auto'];
    const currentIndex = themes.indexOf(settings.theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
  };

  const resetAllSettings = () => {
    setSettings({
      highContrast: false,
      fontSize: 100,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      colorBlindness: 'none',
      theme: 'auto',
      focusIndicator: true,
      soundEffects: false,
      autoPlay: false
    });
    addNotification('All settings reset to default');
  };

  const executeVoiceCommand = (command: string) => {
    for (const [key, action] of Object.entries(voiceCommands)) {
      if (command.includes(key)) {
        action();
        addNotification(`Voice command executed: ${key}`);
        return;
      }
    }
    addNotification('Voice command not recognized');
  };

  const addNotification = (message: string) => {
    const id = Date.now();
    setNotifications(prev => [...prev, message]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n !== message));
    }, 3000);
  };

  // Position classes
  const getPositionClasses = () => {
    switch (position) {
      case 'top-left': return 'top-6 left-6';
      case 'top-right': return 'top-6 right-6';
      case 'bottom-left': return 'bottom-6 left-6';
      case 'bottom-right': return 'bottom-6 right-6';
      default: return 'bottom-6 right-6';
    }
  };

  return (
    <>
      {/* Accessibility Button */}
      <motion.button
        ref={buttonRef}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${getPositionClasses()} z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50`}
        aria-label="Accessibility Settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            id="accessibility-panel"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`fixed ${getPositionClasses()} z-50 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 w-96 max-h-[80vh] overflow-y-auto`}
            role="dialog"
            aria-labelledby="accessibility-title"
            aria-describedby="accessibility-description"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 id="accessibility-title" className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Accessibility className="w-5 h-5" />
                  Accessibility
                </h2>
                <p id="accessibility-description" className="text-sm text-gray-600 dark:text-gray-400">
                  Customize your experience
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Close accessibility panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Accessibility Score */}
            <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Accessibility Score</span>
                <span className={`text-sm font-medium ${
                  accessibilityScore >= 90 ? 'text-green-600' : 
                  accessibilityScore >= 70 ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {accessibilityScore}/100
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${
                    accessibilityScore >= 90 ? 'bg-green-500' : 
                    accessibilityScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${accessibilityScore}%` }}
                />
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-6 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              {(['general', 'visual', 'audio', 'navigation'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === tab
                      ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-4">
              {/* General Tab */}
              {activeTab === 'general' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Theme
                    </label>
                    <select
                      value={settings.theme}
                      onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'auto')}
                      className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    >
                      <option value="auto">Auto</option>
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Focus Indicator
                    </label>
                    <button
                      onClick={toggleFocusIndicator}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.focusIndicator ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                </div>
              )}

              {/* Visual Tab */}
              {activeTab === 'visual' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      High Contrast
                    </label>
                    <button
                      onClick={toggleHighContrast}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.highContrast ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Font Size: {settings.fontSize}%
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => changeFontSize(-10)}
                        className="p-2 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                        aria-label="Decrease font size"
                      >
                        <ZoomOut className="w-4 h-4" />
                      </button>
                      <button
                        onClick={resetFontSize}
                        className="px-3 py-2 text-sm bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        Reset
                      </button>
                      <button
                        onClick={() => changeFontSize(10)}
                        className="p-2 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                        aria-label="Increase font size"
                      >
                        <ZoomIn className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Color Blindness Support
                    </label>
                    <select
                      value={settings.colorBlindness}
                      onChange={(e) => setSettings(prev => ({ ...prev, colorBlindness: e.target.value as any }))}
                      className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    >
                      <option value="none">None</option>
                      <option value="protanopia">Protanopia (Red-Blind)</option>
                      <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                      <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Reduced Motion
                    </label>
                    <button
                      onClick={() => setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }))}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                </div>
              )}

              {/* Audio Tab */}
              {activeTab === 'audio' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Sound Effects
                    </label>
                    <button
                      onClick={() => setSettings(prev => ({ ...prev, soundEffects: !prev.soundEffects }))}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.soundEffects ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.soundEffects ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Auto-play Media
                    </label>
                    <button
                      onClick={() => setSettings(prev => ({ ...prev, autoPlay: !prev.autoPlay }))}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.autoPlay ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.autoPlay ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  {enableVoiceCommands && (
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <button
                        onClick={() => setVoiceCommandActive(!voiceCommandActive)}
                        className={`w-full px-4 py-2 rounded-lg font-medium transition-colors ${
                          voiceCommandActive
                            ? 'bg-red-600 hover:bg-red-700 text-white'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                      >
                        {voiceCommandActive ? 'Stop Voice Commands' : 'Start Voice Commands'}
                      </button>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                        Say commands like "high contrast", "increase font", "dark theme"
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Navigation Tab */}
              {activeTab === 'navigation' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Screen Reader Mode
                    </label>
                    <button
                      onClick={toggleScreenReader}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.screenReader ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Keyboard Navigation
                    </label>
                    <button
                      onClick={toggleKeyboardNavigation}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.keyboardNavigation ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => setShowKeyboardShortcuts(true)}
                      className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors"
                    >
                      Show Keyboard Shortcuts
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={resetAllSettings}
                className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors"
              >
                Reset All
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Apply
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Keyboard Shortcuts Modal */}
      <AnimatePresence>
        {showKeyboardShortcuts && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowKeyboardShortcuts(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Keyboard className="w-5 h-5" />
                  Keyboard Shortcuts
                </h3>
                <button
                  onClick={() => setShowKeyboardShortcuts(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-3">
                {Object.entries(keyboardShortcuts).map(([shortcut, description]) => (
                  <div key={shortcut} className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                    <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono">
                      {shortcut}
                    </kbd>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {description}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notifications */}
      <div className="fixed top-6 right-6 z-50 space-y-2">
        {notifications.map((notification, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 max-w-sm"
          >
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-900 dark:text-white">{notification}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default EnhancedAccessibility;
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  Eye, 
  EyeOff, 
  Type, 
  Volume2, 
  VolumeX, 
  Type, 
  Palette, 
  MousePointer, 
  Keyboard, 
  Monitor, 
  Settings,
  X,
  Check,
  AlertTriangle,
  Info,
  Sun,
  Moon,
  Smartphone,
  Headphones,
  Mic,
  MicOff,
  ArrowUp,
  ArrowDown,
  RotateCcw,
  HelpCircle,
  Zap
} from 'lucide-react';

interface AccessibilitySettings {
  // Visual
  highContrast: boolean;
  fontSize: number; // 50% to 200%
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  reducedMotion: boolean;
  darkMode: 'auto' | 'light' | 'dark';
  
  // Audio
  soundEffects: boolean;
  autoPlayMedia: boolean;
  voiceCommands: boolean;
  
  // Navigation
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  
  // Advanced
  dyslexia: boolean;
  lineSpacing: number; // 1.0 to 2.0
  wordSpacing: number; // 0.5 to 2.0
  letterSpacing: number; // -0.5 to 2.0
}

interface VoiceCommand {
  command: string;
  action: string;
  description: string;
}

const EnhancedAccessibility: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'general' | 'visual' | 'audio' | 'navigation'>('general');
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 16,
    reducedMotion: false,
    darkMode: 'auto',
    soundEffects: true,
    autoPlayMedia: true,
    voiceCommands: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: false,
    dyslexia: false,
    lineSpacing: 1.5,
    wordSpacing: 1.0,
    letterSpacing: 0.0
  });
  
  const [accessibilityScore, setAccessibilityScore] = useState(85);
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);
  const [showKeyboardShortcuts, setShowKeyboardShortcuts] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);

  // Voice commands
  const voiceCommands: VoiceCommand[] = [
    { command: 'open accessibility', action: 'open', description: 'Open accessibility panel' },
    { command: 'close accessibility', action: 'close', description: 'Close accessibility panel' },
    { command: 'high contrast', action: 'highContrast', description: 'Toggle high contrast mode' },
    { command: 'normal contrast', action: 'normalContrast', description: 'Disable high contrast mode' },
    { command: 'increase font', action: 'increaseFont', description: 'Increase font size' },
    { command: 'decrease font', action: 'decreaseFont', description: 'Decrease font size' },
    { command: 'reset font', action: 'resetFont', description: 'Reset font size to default' },
    { command: 'dark theme', action: 'darkTheme', description: 'Switch to dark theme' },
    { command: 'light theme', action: 'lightTheme', description: 'Switch to light theme' },
    { command: 'auto theme', action: 'autoTheme', description: 'Switch to auto theme' },
    { command: 'screen reader', action: 'screenReader', description: 'Toggle screen reader mode' },
    { command: 'keyboard navigation', action: 'keyboardNav', description: 'Toggle keyboard navigation' },
    { command: 'focus indicator', action: 'focusIndicator', description: 'Toggle focus indicator' },
    { command: 'reduced motion', action: 'reducedMotion', description: 'Toggle reduced motion' },
    { command: 'help', action: 'help', description: 'Show keyboard shortcuts' }
  ];

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
      
      recognition.onresult = (event: any) => {
        const command = event.results[0][0].transcript.toLowerCase();
        handleVoiceCommand(command);
      };
      
      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
      setRecognition(recognition);
    }
  }, []);

  // Apply accessibility settings
  useEffect(() => {
    applyAccessibilitySettings();
    calculateAccessibilityScore();
  }, [settings]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey) {
        switch (event.key.toLowerCase()) {
          case 'a':
            event.preventDefault();
            setIsVisible(!isVisible);
            break;
          case 'h':
            event.preventDefault();
            setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
            break;
          case 'f':
            event.preventDefault();
            setSettings(prev => ({ ...prev, focusIndicator: !prev.focusIndicator }));
            break;
          case 'r':
            event.preventDefault();
            resetAllSettings();
            break;
          case 't':
            event.preventDefault();
            setSettings(prev => ({ 
              ...prev, 
              darkMode: prev.darkMode === 'light' ? 'dark' : 'light' 
            }));
            break;
          case 's':
            event.preventDefault();
            setSettings(prev => ({ ...prev, screenReader: !prev.screenReader }));
            break;
          case 'k':
            event.preventDefault();
            setShowKeyboardShortcuts(!showKeyboardShortcuts);
            break;
        }
      }
      
      if (event.key === 'Escape') {
        setIsVisible(false);
        setShowKeyboardShortcuts(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, settings]);

  // Apply accessibility settings to DOM
  const applyAccessibilitySettings = useCallback(() => {
    const root = document.documentElement;
    
    // Font size
    root.style.fontSize = `${settings.fontSize}%`;
    
    // Line spacing
    root.style.setProperty('--line-spacing', settings.lineSpacing.toString());
    
    // Word spacing
    root.style.setProperty('--word-spacing', `${settings.wordSpacing}em`);
    
    // Letter spacing
    root.style.setProperty('--letter-spacing', `${settings.letterSpacing}em`);
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Color blindness
    root.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
    if (settings.colorBlindness !== 'none') {
      root.classList.add(settings.colorBlindness);
    }
    
    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Dark mode
    if (settings.darkMode === 'dark' || 
        (settings.darkMode === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Focus indicator
    if (settings.focusIndicator) {
      root.classList.add('focus-indicator');
    } else {
      root.classList.remove('focus-indicator');
    }
    
    // Dyslexia support
    if (settings.dyslexia) {
      root.classList.add('dyslexia-friendly');
    } else {
      root.classList.remove('dyslexia-friendly');
    }
  }, [settings]);

  // Toggle setting with announcement
  const toggleSetting = (key: keyof AccessibilitySettings) => {
    const newSettings = { ...settings, [key]: !settings[key] };
    setSettings(newSettings);
    
    // Visual accessibility
    if (settings.highContrast) score += 5;
    if (settings.fontSize > 100) score += 3;
    if (settings.reducedMotion) score += 2;
    if (settings.colorBlindness !== 'none') score += 3;
    
    // Audio accessibility
    if (settings.voiceCommands) score += 5;
    if (!settings.autoPlayMedia) score += 2;
    
    // Navigation accessibility
    if (settings.screenReader) score += 5;
    if (settings.keyboardNavigation) score += 5;
    if (settings.focusIndicator) score += 3;
    
    // Advanced accessibility
    if (settings.dyslexia) score += 3;
    if (settings.lineSpacing > 1.2) score += 2;
    
    setAccessibilityScore(Math.min(100, score));
  }, [settings]);

  // Handle voice commands
  const handleVoiceCommand = useCallback((command: string) => {
    const matchedCommand = voiceCommands.find(cmd => 
      command.includes(cmd.command) || cmd.command.includes(command)
    );
    
    if (matchedCommand) {
      switch (matchedCommand.action) {
        case 'open':
          setIsVisible(true);
          break;
        case 'close':
          setIsVisible(false);
          break;
        case 'highContrast':
          setSettings(prev => ({ ...prev, highContrast: true }));
          break;
        case 'normalContrast':
          setSettings(prev => ({ ...prev, highContrast: false }));
          break;
        case 'increaseFont':
          setSettings(prev => ({ ...prev, fontSize: Math.min(200, prev.fontSize + 10) }));
          break;
        case 'decreaseFont':
          setSettings(prev => ({ ...prev, fontSize: Math.max(50, prev.fontSize - 10) }));
          break;
        case 'resetFont':
          setSettings(prev => ({ ...prev, fontSize: 100 }));
          break;
        case 'darkTheme':
          setSettings(prev => ({ ...prev, darkMode: 'dark' }));
          break;
        case 'lightTheme':
          setSettings(prev => ({ ...prev, darkMode: 'light' }));
          break;
        case 'autoTheme':
          setSettings(prev => ({ ...prev, darkMode: 'auto' }));
          break;
        case 'screenReader':
          setSettings(prev => ({ ...prev, screenReader: !prev.screenReader }));
          break;
        case 'keyboardNav':
          setSettings(prev => ({ ...prev, keyboardNavigation: !prev.keyboardNavigation }));
          break;
        case 'focusIndicator':
          setSettings(prev => ({ ...prev, focusIndicator: !prev.focusIndicator }));
          break;
        case 'reducedMotion':
          setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }));
          break;
        case 'help':
          setShowKeyboardShortcuts(true);
          break;
      }
      
      // Play confirmation sound
      if (audioRef.current && settings.soundEffects) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [voiceCommands, settings.soundEffects]);

  // Start voice recognition
  const startVoiceRecognition = useCallback(() => {
    if (recognition && settings.voiceCommands) {
      try {
        recognition.start();
        setIsListening(true);
      } catch (error) {
        console.error('Error starting voice recognition:', error);
      }
    }
  }, [recognition, settings.voiceCommands]);

  // Reset all settings
  const resetAllSettings = useCallback(() => {
    setSettings({
      highContrast: false,
      fontSize: 100,
      colorBlindness: 'none',
      reducedMotion: false,
      darkMode: 'auto',
      soundEffects: true,
      autoPlayMedia: true,
      voiceCommands: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: false,
      dyslexia: false,
      lineSpacing: 1.5,
      wordSpacing: 1.0,
      letterSpacing: 0.0
    });
  }, []);

  // Tab component
  const TabButton: React.FC<{ id: string; icon: React.ReactNode; label: string }> = ({ 
    id, icon, label 
  }) => (
    <button
      onClick={() => setActiveTab(id as any)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
        activeTab === id
          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
          : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
      }`}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );

  if (!isVisible) {
    return (
      <motion.button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 z-50 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Accessibility Settings (Alt + A)"
        aria-label="Open accessibility settings"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -100, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -100, scale: 0.9 }}
        className="fixed bottom-4 left-4 z-50 w-96 max-h-[80vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Accessibility className="w-6 h-6" />
              <h3 className="text-lg font-semibold">Accessibility</h3>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close accessibility settings"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Accessibility Score */}
          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm opacity-90">Accessibility Score</span>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4" />
              <span className="text-xl font-bold">{accessibilityScore}</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 p-3 bg-gray-50 dark:bg-gray-800">
          <TabButton id="general" icon={<Settings className="w-4 h-4" />} label="General" />
          <TabButton id="visual" icon={<Eye className="w-4 h-4" />} label="Visual" />
          <TabButton id="audio" icon={<Volume2 className="w-4 h-4" />} label="Audio" />
          <TabButton id="navigation" icon={<Keyboard className="w-4 h-4" />} label="Navigation" />
        </div>

        {/* Content */}
        <div className="p-4 space-y-4 max-h-[50vh] overflow-y-auto">
          {/* General Tab */}
          {activeTab === 'general' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Voice Commands
                </span>
                <button
                  onClick={() => setSettings(prev => ({ ...prev, voiceCommands: !prev.voiceCommands }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.voiceCommands ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.voiceCommands ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {settings.voiceCommands && (
                <div className="space-y-3">
                  <button
                    onClick={startVoiceRecognition}
                    disabled={isListening}
                    className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      isListening
                        ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200'
                        : 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-800'
                    }`}
                  >
                    {isListening ? (
                      <>
                        <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                        <span>Listening...</span>
                      </>
                    ) : (
                      <>
                        <Mic className="w-4 h-4" />
                        <span>Start Voice Commands</span>
                      </>
                    )}
                  </button>
                  
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    <p className="font-medium mb-2">Available Commands:</p>
                    <div className="grid grid-cols-1 gap-1">
                      {voiceCommands.slice(0, 5).map((cmd, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="font-mono">"{cmd.command}"</span>
                          <span>{cmd.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Sound Effects
                </span>
                <button
                  onClick={() => setSettings(prev => ({ ...prev, soundEffects: !prev.soundEffects }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.soundEffects ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.soundEffects ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Auto-play Media
                </span>
                <button
                  onClick={() => setSettings(prev => ({ ...prev, autoPlayMedia: !prev.autoPlayMedia }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    !settings.autoPlayMedia ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      !settings.autoPlayMedia ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <button
                onClick={resetAllSettings}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset All Settings</span>
              </button>
            </div>
          )}

          {/* Visual Tab */}
          {activeTab === 'visual' && (
            <div className="space-y-4">
              <div className="space-y-3">
                <label className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    High Contrast
                  </span>
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.highContrast ? 'bg-orange-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </label>

                <label className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Reduced Motion
                  </span>
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.reducedMotion ? 'bg-green-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </label>
              </div>

              <div className="space-y-3">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    Font Size: {settings.fontSize}%
                  </span>
                  <input
                    type="range"
                    min="50"
                    max="200"
                    step="10"
                    value={settings.fontSize}
                    onChange={(e) => setSettings(prev => ({ ...prev, fontSize: parseInt(e.target.value) }))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>50%</span>
                    <span>100%</span>
                    <span>200%</span>
                  </div>
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    Line Spacing: {settings.lineSpacing.toFixed(1)}x
                  </span>
                  <input
                    type="range"
                    min="1.0"
                    max="2.0"
                    step="0.1"
                    value={settings.lineSpacing}
                    onChange={(e) => setSettings(prev => ({ ...prev, lineSpacing: parseFloat(e.target.value) }))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </label>
              </div>

              <div className="space-y-3">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    Color Blindness Support
                  </span>
                  <select
                    value={settings.colorBlindness}
                    onChange={(e) => setSettings(prev => ({ ...prev, colorBlindness: e.target.value as any }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option value="none">None</option>
                    <option value="protanopia">Protanopia (Red-Blind)</option>
                    <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                    <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    Theme
                  </span>
                  <div className="flex space-x-2">
                    {(['light', 'auto', 'dark'] as const).map((theme) => (
                      <button
                        key={theme}
                        onClick={() => setSettings(prev => ({ ...prev, darkMode: theme }))}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg border transition-colors ${
                          settings.darkMode === theme
                            ? 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                            : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                        }`}
                      >
                        {theme === 'light' && <Sun className="w-4 h-4" />}
                        {theme === 'auto' && <Smartphone className="w-4 h-4" />}
                        {theme === 'dark' && <Moon className="w-4 h-4" />}
                        <span className="capitalize">{theme}</span>
                      </button>
                    ))}
                  </div>
                </label>
              </div>
            </div>
          )}

          {/* Audio Tab */}
          {activeTab === 'audio' && (
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Voice Commands
                  </span>
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, voiceCommands: !prev.voiceCommands }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.voiceCommands ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.voiceCommands ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Sound Effects
                  </span>
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, soundEffects: !prev.soundEffects }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.soundEffects ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.soundEffects ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Auto-play Media
                  </span>
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, autoPlayMedia: !prev.autoPlayMedia }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      !settings.autoPlayMedia ? 'bg-green-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        !settings.autoPlayMedia ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {settings.voiceCommands && (
                <div className="space-y-3">
                  <button
                    onClick={startVoiceRecognition}
                    disabled={isListening}
                    className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      isListening
                        ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200'
                        : 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-800'
                    }`}
                  >
                    {isListening ? (
                      <>
                        <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                        <span>Listening...</span>
                      </>
                    ) : (
                      <>
                        <Mic className="w-4 h-4" />
                        <span>Start Voice Commands</span>
                      </>
                    )}
                  </button>
                  
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    <p className="font-medium mb-2">Voice Commands:</p>
                    <div className="space-y-1">
                      {voiceCommands.map((cmd, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="font-mono">"{cmd.command}"</span>
                          <span>{cmd.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Navigation Tab */}
          {activeTab === 'navigation' && (
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Screen Reader Mode
                  </span>
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, screenReader: !prev.screenReader }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.screenReader ? 'bg-green-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Enhanced Keyboard Navigation
                  </span>
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, keyboardNavigation: !prev.keyboardNavigation }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.keyboardNavigation ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Focus Indicator
                  </span>
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, focusIndicator: !prev.focusIndicator }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.focusIndicator ? 'bg-yellow-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                  
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="px-3 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    {isExpanded ? 'Less' : 'More'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Dyslexia Support
                  </span>
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, dyslexia: !prev.dyslexia }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.dyslexia ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.dyslexia ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {settings.dyslexia && (
                  <div className="space-y-3">
                    <label className="block">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                        Word Spacing: {settings.wordSpacing.toFixed(1)}em
                      </span>
                      <input
                        type="range"
                        min="0.5"
                        max="2.0"
                        step="0.1"
                        value={settings.wordSpacing}
                        onChange={(e) => setSettings(prev => ({ ...prev, wordSpacing: parseFloat(e.target.value) }))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                        Letter Spacing: {settings.letterSpacing.toFixed(1)}em
                      </span>
                      <input
                        type="range"
                        min="-0.5"
                        max="2.0"
                        step="0.1"
                        value={settings.letterSpacing}
                        onChange={(e) => setSettings(prev => ({ ...prev, letterSpacing: parseFloat(e.target.value) }))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </label>
                  </div>
                )}
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-800 dark:text-blue-200">
                    <p className="font-medium mb-1">Keyboard Shortcuts:</p>
                    <p>Alt + A: Toggle accessibility panel</p>
                    <p>Alt + H: Toggle high contrast</p>
                    <p>Alt + F: Toggle focus indicator</p>
                    <p>Alt + K: Show all shortcuts</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 dark:bg-gray-800 p-3 flex items-center justify-between">
          <button
            onClick={() => setShowKeyboardShortcuts(!showKeyboardShortcuts)}
            className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Keyboard Shortcuts</span>
          </button>
          
          <div className="text-xs text-gray-500">
            Score: {accessibilityScore}/100
          </div>
        </div>

        {/* Keyboard Shortcuts Modal */}
        <AnimatePresence>
          {showKeyboardShortcuts && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 flex items-center justify-center z-10"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
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
                  {[
                    { key: 'Alt + A', action: 'Toggle accessibility panel' },
                    { key: 'Alt + H', action: 'Toggle high contrast' },
                    { key: 'Alt + F', action: 'Toggle focus indicator' },
                    { key: 'Alt + R', action: 'Reset all settings' },
                    { key: 'Alt + T', action: 'Toggle theme' },
                    { key: 'Alt + S', action: 'Toggle screen reader mode' },
                    { key: 'Alt + K', action: 'Show keyboard shortcuts' },
                    { key: 'Escape', action: 'Close panels' }
                  ].map((shortcut, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-sm font-mono">
                        {shortcut.key}
                      </kbd>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {shortcut.action}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hidden audio element for sound effects */}
        <audio ref={audioRef} preload="none">
          <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT" type="audio/wav" />
        </audio>
      </motion.div>
    </AnimatePresence>
  );
};
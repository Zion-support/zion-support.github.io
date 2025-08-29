import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  Volume2, 
  VolumeX, 
  Eye, 
  EyeOff, 
  Type, 
  MousePointer, 
  Keyboard, 
  HelpCircle, 
  X,
  Settings,
  Play,
  Pause,
  RotateCcw,
  Sun,
  Moon,
  Contrast
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: number;
  reducedMotion: boolean;
  darkMode: boolean;
  screenReader: boolean;
  voiceNavigation: boolean;
  keyboardOnly: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
}

export function EnhancedAccessibilityPanel() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 16,
    reducedMotion: false,
    darkMode: false,
    screenReader: false,
    voiceNavigation: false,
    keyboardOnly: false,
    colorBlindness: 'none'
  });
  const [isListening, setIsListening] = useState(false);
  const [voiceFeedback, setVoiceFeedback] = useState('');
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Initialize speech recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result.transcript)
          .join('');
        
        if (event.results[0].isFinal) {
          handleVoiceCommand(transcript.toLowerCase());
        }
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
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
    
    // Font size
    root.style.fontSize = `${settings.fontSize}px`;
    
    // High contrast
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
    
    // Dark mode
    if (settings.darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Color blindness simulation
    root.style.filter = getColorBlindnessFilter();
    
    // Screen reader optimizations
    if (settings.screenReader) {
      document.body.setAttribute('aria-live', 'polite');
      document.body.setAttribute('aria-atomic', 'true');
    } else {
      document.body.removeAttribute('aria-live');
      document.body.removeAttribute('aria-atomic');
    }
  };

  const getColorBlindnessFilter = () => {
    switch (settings.colorBlindness) {
      case 'protanopia':
        return 'url(#protanopia)';
      case 'deuteranopia':
        return 'url(#deuteranopia)';
      case 'tritanopia':
        return 'url(#tritanopia)';
      default:
        return 'none';
    }
  };

  const handleVoiceCommand = (command: string) => {
    let feedback = '';
    
    if (command.includes('increase font')) {
      setSettings(prev => ({ ...prev, fontSize: Math.min(prev.fontSize + 2, 24) }));
      feedback = 'Font size increased';
    } else if (command.includes('decrease font')) {
      setSettings(prev => ({ ...prev, fontSize: Math.max(prev.fontSize - 2, 12) }));
      feedback = 'Font size decreased';
    } else if (command.includes('high contrast')) {
      setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
      feedback = `High contrast ${settings.highContrast ? 'disabled' : 'enabled'}`;
    } else if (command.includes('dark mode')) {
      setSettings(prev => ({ ...prev, darkMode: !prev.darkMode }));
      feedback = `Dark mode ${settings.darkMode ? 'enabled' : 'disabled'}`;
    } else if (command.includes('reduced motion')) {
      setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }));
      feedback = `Reduced motion ${settings.reducedMotion ? 'enabled' : 'disabled'}`;
    } else if (command.includes('close')) {
      setIsVisible(false);
      feedback = 'Accessibility panel closed';
    } else {
      feedback = 'Command not recognized. Try saying "increase font", "high contrast", or "dark mode"';
    }
    
    setVoiceFeedback(feedback);
    speakText(feedback);
    
    // Clear feedback after 3 seconds
    setTimeout(() => setVoiceFeedback(''), 3000);
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    }
  };

  const toggleVoiceNavigation = () => {
    if (settings.voiceNavigation) {
      setIsListening(false);
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    } else {
      setIsListening(true);
      if (recognitionRef.current) {
        recognitionRef.current.start();
      }
    }
    setSettings(prev => ({ ...prev, voiceNavigation: !prev.voiceNavigation }));
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      fontSize: 16,
      reducedMotion: false,
      darkMode: false,
      screenReader: false,
      voiceNavigation: false,
      keyboardOnly: false,
      colorBlindness: 'none'
    };
    setSettings(defaultSettings);
    speakText('Settings reset to default');
  };

  if (!isVisible) {
    return (
      <motion.button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 z-50 p-3 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open accessibility panel"
      >
        <Accessibility className="w-6 h-6 text-white" />
      </motion.button>
    );
  }

  return (
    <>
      {/* Color blindness filters */}
      <svg style={{ position: 'absolute', left: '-9999px' }}>
        <defs>
          <filter id="protanopia">
            <feColorMatrix type="matrix" values="0.567,0.433,0,0,0 0.558,0.442,0,0,0 0,0.242,0.758,0,0 0,0,0,1,0"/>
          </filter>
          <filter id="deuteranopia">
            <feColorMatrix type="matrix" values="0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0"/>
          </filter>
          <filter id="tritanopia">
            <feColorMatrix type="matrix" values="0.95,0.05,0,0,0 0,0.433,0.567,0,0 0,0.475,0.525,0,0 0,0,0,1,0"/>
          </filter>
        </defs>
      </svg>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed bottom-4 left-4 z-50 w-80 bg-zion-slate-light/95 backdrop-blur-md rounded-xl shadow-2xl border border-zion-purple/20"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">
          <div className="flex items-center gap-2">
            <Accessibility className="w-5 h-5 text-zion-purple" />
            <h3 className="text-white font-semibold">Accessibility</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 text-zion-purple hover:text-white transition-colors"
              title={isExpanded ? 'Collapse' : 'Expand'}
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 text-gray-400 hover:text-white transition-colors"
              aria-label="Close accessibility panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Voice Navigation */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white font-medium">Voice Navigation</span>
              <button
                onClick={toggleVoiceNavigation}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  settings.voiceNavigation 
                    ? 'bg-zion-purple text-white' 
                    : 'bg-zion-slate/50 text-gray-400'
                }`}
              >
                {isListening ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
            </div>
            {settings.voiceNavigation && (
              <div className="text-xs text-gray-400">
                Say: "increase font", "high contrast", "dark mode", "close"
              </div>
            )}
          </div>

          {/* Voice Feedback */}
          {voiceFeedback && (
            <div className="mb-4 p-3 bg-zion-purple/20 rounded-lg">
              <div className="text-sm text-zion-purple-light">{voiceFeedback}</div>
            </div>
          )}

          {/* Quick Controls */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <button
              onClick={() => setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }))}
              className={`p-3 rounded-lg transition-all duration-300 ${
                settings.highContrast 
                  ? 'bg-zion-purple text-white' 
                  : 'bg-zion-slate/50 text-gray-400 hover:bg-zion-slate/70'
              }`}
            >
              <Contrast className="w-5 h-5 mx-auto mb-2" />
              <span className="text-xs">High Contrast</span>
            </button>
            
            <button
              onClick={() => setSettings(prev => ({ ...prev, darkMode: !prev.darkMode }))}
              className={`p-3 rounded-lg transition-all duration-300 ${
                settings.darkMode 
                  ? 'bg-zion-purple text-white' 
                  : 'bg-zion-slate/50 text-gray-400 hover:bg-zion-slate/70'
              }`}
            >
              {settings.darkMode ? (
                <Moon className="w-5 h-5 mx-auto mb-2" />
              ) : (
                <Sun className="w-5 h-5 mx-auto mb-2" />
              )}
              <span className="text-xs">Dark Mode</span>
            </button>
          </div>

          {/* Font Size Control */}
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2">
              Font Size: {settings.fontSize}px
            </label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSettings(prev => ({ ...prev, fontSize: Math.max(prev.fontSize - 2, 12) }))}
                className="p-2 bg-zion-slate/50 text-white rounded-lg hover:bg-zion-slate/70 transition-colors"
                aria-label="Decrease font size"
              >
                <Type className="w-4 h-4" />
              </button>
              <input
                type="range"
                min="12"
                max="24"
                step="2"
                value={settings.fontSize}
                onChange={(e) => setSettings(prev => ({ ...prev, fontSize: parseInt(e.target.value) }))}
                className="flex-1 h-2 bg-zion-slate/50 rounded-lg appearance-none cursor-pointer slider"
              />
              <button
                onClick={() => setSettings(prev => ({ ...prev, fontSize: Math.min(prev.fontSize + 2, 24) }))}
                className="p-2 bg-zion-slate/50 text-white rounded-lg hover:bg-zion-slate/70 transition-colors"
                aria-label="Increase font size"
              >
                <Type className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Advanced Settings */}
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="space-y-3"
            >
              {/* Reduced Motion */}
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.reducedMotion}
                  onChange={(e) => setSettings(prev => ({ ...prev, reducedMotion: e.target.checked }))}
                  className="w-4 h-4 text-zion-purple bg-zion-slate/50 border-zion-purple/30 rounded focus:ring-zion-purple focus:ring-2"
                />
                <span className="text-white text-sm">Reduced Motion</span>
              </label>

              {/* Screen Reader */}
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.screenReader}
                  onChange={(e) => setSettings(prev => ({ ...prev, screenReader: e.target.checked }))}
                  className="w-4 h-4 text-zion-purple bg-zion-slate/50 border-zion-purple/30 rounded focus:ring-zion-purple focus:ring-2"
                />
                <span className="text-white text-sm">Screen Reader Optimizations</span>
              </label>

              {/* Keyboard Only */}
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.keyboardOnly}
                  onChange={(e) => setSettings(prev => ({ ...prev, keyboardOnly: e.target.checked }))}
                  className="w-4 h-4 text-zion-purple bg-zion-slate/50 border-zion-purple/30 rounded focus:ring-zion-purple focus:ring-2"
                />
                <span className="text-white text-sm">Keyboard Only Navigation</span>
              </label>

              {/* Color Blindness */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Color Blindness Simulation
                </label>
                <select
                  value={settings.colorBlindness}
                  onChange={(e) => setSettings(prev => ({ ...prev, colorBlindness: e.target.value as any }))}
                  className="w-full p-2 bg-zion-slate/50 text-white rounded-lg border border-zion-purple/30 focus:ring-2 focus:ring-zion-purple focus:border-transparent"
                >
                  <option value="none">None</option>
                  <option value="protanopia">Protanopia (Red-Blind)</option>
                  <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                  <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                </select>
              </div>
            </motion.div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2 mt-4">
            <button
              onClick={resetSettings}
              className="flex-1 p-2 bg-zion-slate/50 text-white rounded-lg hover:bg-zion-slate/70 transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex-1 p-2 bg-zion-purple text-white rounded-lg hover:bg-zion-purple-dark transition-colors flex items-center justify-center gap-2"
            >
              {isExpanded ? 'Less' : 'More'} Options
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
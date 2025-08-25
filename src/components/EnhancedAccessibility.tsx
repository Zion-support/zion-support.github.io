import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Settings, 
  X, 
  Plus, 
  Minus, 
  RotateCcw,
  Sun,
  Moon,
  Monitor,
  Keyboard,
  Headphones,
  Accessibility,
  Highlighter,
  Type,
  Palette,
  Navigation,
  MousePointer,
  Mic,
  MicOff
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: number;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  reducedMotion: boolean;
  soundEffects: boolean;
  autoPlayMedia: boolean;
  voiceCommands: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  theme: 'light' | 'dark' | 'auto';
}

const EnhancedAccessibility: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'general' | 'visual' | 'audio' | 'navigation'>('general');
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 100,
    colorBlindness: 'none',
    reducedMotion: false,
    soundEffects: true,
    autoPlayMedia: false,
    voiceCommands: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    theme: 'auto'
  });
  const [accessibilityScore, setAccessibilityScore] = useState(85);
  const [isListening, setIsListening] = useState(false);

  // Apply accessibility settings to the document
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.style.setProperty('--accent-color', '#ffffff');
      root.style.setProperty('--text-color', '#000000');
      root.style.setProperty('--bg-color', '#ffffff');
      root.style.setProperty('--border-color', '#000000');
    } else {
      root.style.removeProperty('--accent-color');
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
      root.style.removeProperty('--border-color');
    }

    // Font size
    root.style.fontSize = `${settings.fontSize}%`;

    // Color blindness
    if (settings.colorBlindness !== 'none') {
      const filters = {
        protanopia: 'url(#protanopia)',
        deuteranopia: 'url(#deuteranopia)',
        tritanopia: 'url(#tritanopia)'
      };
      root.style.filter = filters[settings.colorBlindness];
    } else {
      root.style.filter = 'none';
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--motion-reduce', '1');
    } else {
      root.style.removeProperty('--motion-reduce');
    }

    // Theme
    if (settings.theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else if (settings.theme === 'dark') {
      root.classList.remove('light');
      root.classList.add('dark');
    } else {
      root.classList.remove('light', 'dark');
    }

    // Focus indicator
    if (settings.focusIndicator) {
      root.style.setProperty('--focus-visible', '2px solid #10B981');
    } else {
      root.style.setProperty('--focus-visible', 'none');
    }

    // Calculate accessibility score
    calculateAccessibilityScore();
  }, [settings]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey) {
        switch (e.key.toLowerCase()) {
          case 'a':
            e.preventDefault();
            setIsOpen(!isOpen);
            break;
          case 'h':
            e.preventDefault();
            setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
            break;
          case 'f':
            e.preventDefault();
            setSettings(prev => ({ ...prev, focusIndicator: !prev.focusIndicator }));
            break;
          case 'r':
            e.preventDefault();
            resetSettings();
            break;
          case 't':
            e.preventDefault();
            setSettings(prev => ({ 
              ...prev, 
              theme: prev.theme === 'light' ? 'dark' : prev.theme === 'dark' ? 'auto' : 'light' 
            }));
            break;
          case 's':
            e.preventDefault();
            setSettings(prev => ({ ...prev, screenReader: !prev.screenReader }));
            break;
          case 'k':
            e.preventDefault();
            showKeyboardShortcuts();
            break;
        }
      }
      
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Voice commands
  useEffect(() => {
    if (settings.voiceCommands && isListening) {
      startVoiceRecognition();
    }
  }, [settings.voiceCommands, isListening]);

  const calculateAccessibilityScore = useCallback(() => {
    let score = 100;
    
    if (!settings.highContrast) score -= 5;
    if (settings.fontSize < 100) score -= 3;
    if (settings.colorBlindness !== 'none') score += 5; // Bonus for color blindness support
    if (settings.reducedMotion) score += 3; // Bonus for motion sensitivity support
    if (!settings.soundEffects) score -= 2;
    if (settings.autoPlayMedia) score -= 5;
    if (settings.voiceCommands) score += 5; // Bonus for voice control
    if (settings.screenReader) score += 5; // Bonus for screen reader support
    if (settings.keyboardNavigation) score += 5; // Bonus for keyboard navigation
    if (!settings.focusIndicator) score -= 5;
    
    setAccessibilityScore(Math.max(0, Math.min(100, score)));
  }, [settings]);

  const startVoiceRecognition = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
      
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        handleVoiceCommand(transcript);
      };
      
      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
      recognition.start();
    } else {
      alert('Speech recognition not supported in this browser');
      setIsListening(false);
    }
  };

  const handleVoiceCommand = (command: string) => {
    if (command.includes('open accessibility') || command.includes('open panel')) {
      setIsOpen(true);
    } else if (command.includes('close accessibility') || command.includes('close panel')) {
      setIsOpen(false);
    } else if (command.includes('high contrast')) {
      setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
    } else if (command.includes('normal contrast')) {
      setSettings(prev => ({ ...prev, highContrast: false }));
    } else if (command.includes('increase font') || command.includes('bigger font')) {
      setSettings(prev => ({ ...prev, fontSize: Math.min(200, prev.fontSize + 10) }));
    } else if (command.includes('decrease font') || command.includes('smaller font')) {
      setSettings(prev => ({ ...prev, fontSize: Math.max(50, prev.fontSize - 10) }));
    } else if (command.includes('reset font')) {
      setSettings(prev => ({ ...prev, fontSize: 100 }));
    } else if (command.includes('dark theme')) {
      setSettings(prev => ({ ...prev, theme: 'dark' }));
    } else if (command.includes('light theme')) {
      setSettings(prev => ({ ...prev, theme: 'light' }));
    } else if (command.includes('auto theme')) {
      setSettings(prev => ({ ...prev, theme: 'auto' }));
    }
  };

  const resetSettings = () => {
    setSettings({
      highContrast: false,
      fontSize: 100,
      colorBlindness: 'none',
      reducedMotion: false,
      soundEffects: true,
      autoPlayMedia: false,
      voiceCommands: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: true,
      theme: 'auto'
    });
  };

  const showKeyboardShortcuts = () => {
    alert(`
Keyboard Shortcuts:
Alt + A: Toggle accessibility panel
Alt + H: Toggle high contrast
Alt + F: Toggle focus indicator
Alt + R: Reset all settings
Alt + T: Toggle theme
Alt + S: Toggle screen reader mode
Alt + K: Show keyboard shortcuts
Escape: Close panels
    `);
  };

  const toggleVoiceCommands = () => {
    if (settings.voiceCommands) {
      setIsListening(!isListening);
    } else {
      setSettings(prev => ({ ...prev, voiceCommands: true }));
      setIsListening(true);
    }
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open accessibility settings"
        title="Accessibility Settings (Alt + A)"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Accessibility className="w-8 h-8" />
                    <div>
                      <h2 className="text-2xl font-bold">Accessibility Settings</h2>
                      <p className="text-green-100">Customize your experience</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold">{accessibilityScore}</div>
                      <div className="text-sm text-green-100">Accessibility Score</div>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:text-green-200 transition-colors"
                      aria-label="Close accessibility panel"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200 dark:border-gray-700">
                {[
                  { id: 'general', label: 'General', icon: Settings },
                  { id: 'visual', label: 'Visual', icon: Eye },
                  { id: 'audio', label: 'Audio', icon: Volume2 },
                  { id: 'navigation', label: 'Navigation', icon: Navigation }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'text-green-600 border-b-2 border-green-600'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                {/* General Tab */}
                {activeTab === 'general' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Theme & Display</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Theme</label>
                          <select
                            value={settings.theme}
                            onChange={(e) => setSettings(prev => ({ ...prev, theme: e.target.value as any }))}
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          >
                            <option value="auto">Auto (System)</option>
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Font Size</label>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => setSettings(prev => ({ ...prev, fontSize: Math.max(50, prev.fontSize - 10) }))}
                              className="p-2 bg-gray-100 dark:bg-gray-600 rounded hover:bg-gray-200 dark:hover:bg-gray-500"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="min-w-[4rem] text-center font-medium">{settings.fontSize}%</span>
                            <button
                              onClick={() => setSettings(prev => ({ ...prev, fontSize: Math.min(200, prev.fontSize + 10) }))}
                              className="p-2 bg-gray-100 dark:bg-gray-600 rounded hover:bg-gray-200 dark:hover:bg-gray-500"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <button
                          onClick={() => setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }))}
                          className={`p-3 rounded-lg border transition-colors ${
                            settings.highContrast
                              ? 'bg-green-100 border-green-500 text-green-700'
                              : 'bg-gray-100 dark:bg-gray-600 border-gray-300 dark:border-gray-500'
                          }`}
                        >
                          <Highlighter className="w-6 h-6 mx-auto mb-2" />
                          High Contrast
                        </button>
                        <button
                          onClick={() => setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }))}
                          className={`p-3 rounded-lg border transition-colors ${
                            settings.reducedMotion
                              ? 'bg-green-100 border-green-500 text-green-700'
                              : 'bg-gray-100 dark:bg-gray-600 border-gray-300 dark:border-gray-500'
                          }`}
                        >
                          <MousePointer className="w-6 h-6 mx-auto mb-2" />
                          Reduced Motion
                        </button>
                        <button
                          onClick={() => setSettings(prev => ({ ...prev, focusIndicator: !prev.focusIndicator }))}
                          className={`p-3 rounded-lg border transition-colors ${
                            settings.focusIndicator
                              ? 'bg-green-100 border-green-500 text-green-700'
                              : 'bg-gray-100 dark:bg-gray-600 border-gray-300 dark:border-gray-500'
                          }`}
                        >
                          <Keyboard className="w-6 h-6 mx-auto mb-2" />
                          Focus Indicator
                        </button>
                        <button
                          onClick={resetSettings}
                          className="p-3 rounded-lg border border-gray-300 dark:border-gray-500 bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
                        >
                          <RotateCcw className="w-6 h-6 mx-auto mb-2" />
                          Reset All
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Visual Tab */}
                {activeTab === 'visual' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Visual Enhancements</h3>
                      <div className="space-y-4">
                        <label className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={settings.highContrast}
                            onChange={(e) => setSettings(prev => ({ ...prev, highContrast: e.target.checked }))}
                            className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                          />
                          <span>High Contrast Mode</span>
                        </label>
                        
                        <div>
                          <label className="block text-sm font-medium mb-2">Color Blindness Support</label>
                          <select
                            value={settings.colorBlindness}
                            onChange={(e) => setSettings(prev => ({ ...prev, colorBlindness: e.target.value as any }))}
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          >
                            <option value="none">No Color Blindness</option>
                            <option value="protanopia">Protanopia (Red-Blind)</option>
                            <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                            <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                          </select>
                        </div>

                        <label className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={settings.reducedMotion}
                            onChange={(e) => setSettings(prev => ({ ...prev, reducedMotion: e.target.checked }))}
                            className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                          />
                          <span>Reduced Motion</span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Audio Tab */}
                {activeTab === 'audio' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Audio Controls</h3>
                      <div className="space-y-4">
                        <label className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={settings.soundEffects}
                            onChange={(e) => setSettings(prev => ({ ...prev, soundEffects: e.target.checked }))}
                            className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                          />
                          <span>Sound Effects</span>
                        </label>
                        
                        <label className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={settings.autoPlayMedia}
                            onChange={(e) => setSettings(prev => ({ ...prev, autoPlayMedia: e.target.checked }))}
                            className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                          />
                          <span>Auto-play Media</span>
                        </label>

                        <div>
                          <label className="block text-sm font-medium mb-2">Voice Commands</label>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={toggleVoiceCommands}
                              className={`px-4 py-2 rounded-lg border transition-colors ${
                                isListening
                                  ? 'bg-red-100 border-red-500 text-red-700'
                                  : settings.voiceCommands
                                  ? 'bg-green-100 border-green-500 text-green-700'
                                  : 'bg-gray-100 dark:bg-gray-600 border-gray-300 dark:border-gray-500'
                              }`}
                            >
                              {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                              {isListening ? 'Listening...' : settings.voiceCommands ? 'Voice Active' : 'Enable Voice'}
                            </button>
                            {isListening && (
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                Try saying: "open accessibility", "high contrast", "increase font"
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Tab */}
                {activeTab === 'navigation' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Navigation Support</h3>
                      <div className="space-y-4">
                        <label className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={settings.screenReader}
                            onChange={(e) => setSettings(prev => ({ ...prev, screenReader: e.target.checked }))}
                            className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                          />
                          <span>Screen Reader Mode</span>
                        </label>
                        
                        <label className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={settings.keyboardNavigation}
                            onChange={(e) => setSettings(prev => ({ ...prev, keyboardNavigation: e.target.checked }))}
                            className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                          />
                          <span>Enhanced Keyboard Navigation</span>
                        </label>

                        <label className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={settings.focusIndicator}
                            onChange={(e) => setSettings(prev => ({ ...prev, focusIndicator: e.target.checked }))}
                            className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                          />
                          <span>Focus Indicator</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Keyboard Shortcuts</h3>
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                          <div><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded">Alt + A</kbd> Toggle panel</div>
                          <div><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded">Alt + H</kbd> High contrast</div>
                          <div><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded">Alt + F</kbd> Focus indicator</div>
                          <div><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded">Alt + R</kbd> Reset settings</div>
                          <div><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded">Alt + T</kbd> Toggle theme</div>
                          <div><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded">Escape</kbd> Close panels</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Color Blindness Filters */}
      <svg style={{ position: 'absolute', left: '-9999px', width: '0', height: '0' }}>
        <defs>
          <filter id="protanopia">
            <feColorMatrix type="matrix" values="0.567, 0.433, 0, 0, 0 0.558, 0.442, 0, 0, 0 0, 0.242, 0.758, 0, 0 0, 0, 0, 1, 0"/>
          </filter>
          <filter id="deuteranopia">
            <feColorMatrix type="matrix" values="0.625, 0.375, 0, 0, 0 0.7, 0.3, 0, 0, 0 0, 0.3, 0.7, 0, 0 0, 0, 0, 1, 0"/>
          </filter>
          <filter id="tritanopia">
            <feColorMatrix type="matrix" values="0.95, 0.05, 0, 0, 0 0, 0.433, 0.567, 0, 0 0, 0.475, 0.525, 0, 0 0, 0, 0, 1, 0"/>
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default EnhancedAccessibility;
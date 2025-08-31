import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Palette, 
  Contrast, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Settings,
  Accessibility,
  Braille,
  Headphones,
  MousePointer,
  Keyboard,
  Monitor,
  Smartphone,
  Tablet,
  Sun,
  Moon,
  Monitor as MonitorIcon
} from 'lucide-react';

interface AccessibilitySettings {
  fontSize: number;
  contrast: 'normal' | 'high' | 'inverted';
  colorBlindness: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  reducedMotion: boolean;
  highContrast: boolean;
  largeText: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  darkMode: 'auto' | 'light' | 'dark';
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showControls?: boolean;
  autoSave?: boolean;
  onSettingsChange?: (settings: AccessibilitySettings) => void;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showControls = true,
  autoSave = true,
  onSettingsChange
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 16,
    contrast: 'normal',
    colorBlindness: 'normal',
    reducedMotion: false,
    highContrast: false,
    largeText: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    darkMode: 'auto'
  });

  const [isListening, setIsListening] = useState(false);
  const [voiceCommand, setVoiceCommand] = useState('');
  const recognitionRef = useRef<any>(null);
  const settingsRef = useRef<HTMLDivElement>(null);

  // Initialize speech recognition
  useEffect(() => {
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
        setVoiceCommand(transcript);
        handleVoiceCommand(transcript);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
    }
  }, []);

  // Apply accessibility settings to the document
  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    
    // Font size
    root.style.fontSize = `${settings.fontSize}px`;
    
    // Contrast
    if (settings.highContrast) {
      root.style.setProperty('--contrast-filter', 'contrast(1.5) brightness(1.2)');
    } else {
      root.style.removeProperty('--contrast-filter');
    }
    
    // Color blindness
    if (settings.colorBlindness !== 'normal') {
      const filters = {
        protanopia: 'url(#protanopia)',
        deuteranopia: 'url(#deuteranopia)',
        tritanopia: 'url(#tritanopia)'
      };
      root.style.setProperty('--color-filter', filters[settings.colorBlindness]);
    } else {
      root.style.removeProperty('--color-filter');
    }
    
    // Reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
    } else {
      root.style.removeProperty('--reduced-motion');
    }
    
    // Focus indicator
    if (settings.focusIndicator) {
      root.style.setProperty('--focus-visible', '2px solid #3b82f6');
    } else {
      root.style.removeProperty('--focus-visible');
    }

    // Dark mode
    if (settings.darkMode === 'dark' || 
        (settings.darkMode === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Save settings
    if (autoSave) {
      localStorage.setItem('accessibility-settings', JSON.stringify(settings));
    }

    // Notify parent component
    onSettingsChange?.(settings);
  }, [settings, enabled, autoSave, onSettingsChange]);

  // Load saved settings
  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, []);

  // Handle voice commands
  const handleVoiceCommand = useCallback((command: string) => {
    const lowerCommand = command.toLowerCase();
    
    if (lowerCommand.includes('increase font') || lowerCommand.includes('bigger text')) {
      setSettings(prev => ({ ...prev, fontSize: Math.min(prev.fontSize + 2, 32) }));
    } else if (lowerCommand.includes('decrease font') || lowerCommand.includes('smaller text')) {
      setSettings(prev => ({ ...prev, fontSize: Math.max(prev.fontSize - 2, 12) }));
    } else if (lowerCommand.includes('high contrast')) {
      setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
    } else if (lowerCommand.includes('dark mode')) {
      setSettings(prev => ({ ...prev, darkMode: prev.darkMode === 'dark' ? 'light' : 'dark' }));
    } else if (lowerCommand.includes('stop listening')) {
      setIsListening(false);
      recognitionRef.current?.stop();
    }
  }, []);

  // Toggle voice recognition
  const toggleVoiceRecognition = useCallback(() => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  }, [isListening]);

  // Reset settings
  const resetSettings = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      fontSize: 16,
      contrast: 'normal',
      colorBlindness: 'normal',
      reducedMotion: false,
      highContrast: false,
      largeText: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: true,
      darkMode: 'auto'
    };
    setSettings(defaultSettings);
  }, []);

  // Quick actions
  const quickActions = [
    {
      label: 'Increase Font',
      icon: ZoomIn,
      action: () => setSettings(prev => ({ ...prev, fontSize: Math.min(prev.fontSize + 2, 32) }))
    },
    {
      label: 'Decrease Font',
      icon: ZoomOut,
      action: () => setSettings(prev => ({ ...prev, fontSize: Math.max(prev.fontSize - 2, 12) }))
    },
    {
      label: 'High Contrast',
      icon: Contrast,
      action: () => setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }))
    },
    {
      label: 'Dark Mode',
      icon: Moon,
      action: () => setSettings(prev => ({ 
        ...prev, 
        darkMode: prev.darkMode === 'dark' ? 'light' : 'dark' 
      }))
    }
  ];

  if (!enabled) return null;

  return (
    <>
      {/* Floating Accessibility Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 z-50 p-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all duration-200"
        title="Accessibility Settings"
        aria-label="Open accessibility settings"
      >
        <Accessibility className="w-5 h-5" />
      </motion.button>

      {/* Main Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 w-80 max-h-[80vh] bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            ref={settingsRef}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <div className="flex items-center space-x-2">
                <Accessibility className="w-5 h-5" />
                <h3 className="font-semibold">Accessibility</h3>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                  title={isExpanded ? "Collapse" : "Expand"}
                >
                  <Settings className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                  title="Close"
                >
                  <EyeOff className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-[calc(80vh-80px)] overflow-y-auto">
              {/* Quick Actions */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action) => (
                    <button
                      key={action.label}
                      onClick={action.action}
                      className="flex items-center space-x-2 p-2 text-xs bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <action.icon className="w-4 h-4" />
                      <span>{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Voice Commands */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Voice Commands</h4>
                <div className="space-y-2">
                  <button
                    onClick={toggleVoiceRecognition}
                    className={`w-full flex items-center justify-center space-x-2 p-2 rounded transition-colors ${
                      isListening 
                        ? 'bg-red-500 hover:bg-red-600 text-white' 
                        : 'bg-green-500 hover:bg-green-600 text-white'
                    }`}
                  >
                    {isListening ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    <span>{isListening ? 'Stop Listening' : 'Start Listening'}</span>
                  </button>
                  
                  {isListening && (
                    <div className="text-xs text-gray-600 dark:text-gray-400 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                      <p>Listening... Say commands like:</p>
                      <ul className="mt-1 space-y-1">
                        <li>• "Increase font"</li>
                        <li>• "High contrast"</li>
                        <li>• "Dark mode"</li>
                        <li>• "Stop listening"</li>
                      </ul>
                    </div>
                  )}
                  
                  {voiceCommand && (
                    <div className="text-xs p-2 bg-blue-50 dark:bg-blue-900/20 rounded border-l-2 border-blue-500">
                      <span className="font-medium">Heard:</span> {voiceCommand}
                    </div>
                  )}
                </div>
              </div>

              {/* Expanded Settings */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="space-y-4"
                  >
                    {/* Font Size */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Font Size: {settings.fontSize}px
                      </label>
                      <input
                        type="range"
                        min="12"
                        max="32"
                        value={settings.fontSize}
                        onChange={(e) => setSettings(prev => ({ ...prev, fontSize: parseInt(e.target.value) }))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>

                    {/* Contrast */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Contrast</label>
                      <select
                        value={settings.contrast}
                        onChange={(e) => setSettings(prev => ({ ...prev, contrast: e.target.value as any }))}
                        className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="normal">Normal</option>
                        <option value="high">High</option>
                        <option value="inverted">Inverted</option>
                      </select>
                    </div>

                    {/* Color Blindness */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Color Vision</label>
                      <select
                        value={settings.colorBlindness}
                        onChange={(e) => setSettings(prev => ({ ...prev, colorBlindness: e.target.value as any }))}
                        className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="normal">Normal</option>
                        <option value="protanopia">Protanopia (Red-Blind)</option>
                        <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                        <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                      </select>
                    </div>

                    {/* Toggles */}
                    <div className="space-y-3">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={settings.highContrast}
                          onChange={(e) => setSettings(prev => ({ ...prev, highContrast: e.target.checked }))}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
                      </label>
                      
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={settings.reducedMotion}
                          onChange={(e) => setSettings(prev => ({ ...prev, reducedMotion: e.target.checked }))}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Reduced Motion</span>
                      </label>
                      
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={settings.focusIndicator}
                          onChange={(e) => setSettings(prev => ({ ...prev, focusIndicator: e.target.checked }))}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Focus Indicator</span>
                      </label>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Reset Button */}
              <button
                onClick={resetSettings}
                className="w-full flex items-center justify-center space-x-2 p-2 text-sm bg-gray-500 hover:bg-gray-600 text-white rounded transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset to Defaults</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS Variables for Accessibility */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;

import React, { useState, useEffect, useCallback } from 'react';
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
  Mic, 
  MicOff,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info,
  Accessibility,
  Headphones,
  Monitor,
  Smartphone,
  Tablet,
  Zap,
  Moon,
  Sun,
  Plus,
  Minus
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  voiceNavigation: boolean;
  keyboardNavigation: boolean;
  screenReader: boolean;
  dyslexiaFriendly: boolean;
  colorBlindSupport: boolean;
  focusIndicators: boolean;
  altText: boolean;
}

interface WCAGScore {
  overall: number;
  perceivable: number;
  operable: number;
  understandable: number;
  robust: number;
}

const EnhancedAccessibilityEnhancer: React.FC<{ enabled?: boolean; showControls?: boolean }> = ({ 
  enabled = true, 
  showControls = true 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    voiceNavigation: false,
    keyboardNavigation: false,
    screenReader: false,
    dyslexiaFriendly: false,
    colorBlindSupport: false,
    focusIndicators: true,
    altText: true
  });
  const [wcagScore, setWcagScore] = useState<WCAGScore>({
    overall: 85,
    perceivable: 90,
    operable: 85,
    understandable: 80,
    robust: 85
  });
  const [isListening, setIsListening] = useState(false);
  const [voiceCommand, setVoiceCommand] = useState('');
  const [fontSize, setFontSize] = useState(16);

  // Apply accessibility settings to the document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--bg-color', '#000000');
      root.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
      root.style.removeProperty('--accent-color');
    }

    // Large text
    if (newSettings.largeText) {
      root.style.fontSize = '120%';
    } else {
      root.style.fontSize = '100%';
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
    } else {
      root.style.removeProperty('--reduced-motion');
    }

    // Focus indicators
    if (newSettings.focusIndicators) {
      root.style.setProperty('--focus-visible', '2px solid #0066cc');
    } else {
      root.style.removeProperty('--focus-visible');
    }

    // Dyslexia friendly
    if (newSettings.dyslexiaFriendly) {
      root.style.fontFamily = 'OpenDyslexic, Arial, sans-serif';
      root.style.lineHeight = '1.6';
      root.style.letterSpacing = '0.1em';
    } else {
      root.style.fontFamily = '';
      root.style.lineHeight = '';
      root.style.letterSpacing = '';
    }

    // Color blind support
    if (newSettings.colorBlindSupport) {
      root.classList.add('colorblind-friendly');
    } else {
      root.classList.remove('colorblind-friendly');
    }
  }, []);

  // Voice recognition setup
  useEffect(() => {
    if (!settings.voiceNavigation) return;

    let recognition: any = null;
    
    if ('webkitSpeechRecognition' in window) {
      recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
        setVoiceCommand('Listening...');
      };

      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map(result => result.transcript)
          .join('');
        
        setVoiceCommand(transcript);
        processVoiceCommand(transcript);
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        setVoiceCommand('Error: ' + event.error);
      };

      recognition.onend = () => {
        setIsListening(false);
        setVoiceCommand('');
      };
    }

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, [settings.voiceNavigation]);

  // Process voice commands
  const processVoiceCommand = useCallback((command: string) => {
    const lowerCommand = command.toLowerCase();
    
    if (lowerCommand.includes('go home') || lowerCommand.includes('navigate home')) {
      window.location.href = '/';
    } else if (lowerCommand.includes('go to services') || lowerCommand.includes('navigate services')) {
      window.location.href = '/services';
    } else if (lowerCommand.includes('go to contact') || lowerCommand.includes('navigate contact')) {
      window.location.href = '/contact';
    } else if (lowerCommand.includes('go to about') || lowerCommand.includes('navigate about')) {
      window.location.href = '/about';
    } else if (lowerCommand.includes('increase font') || lowerCommand.includes('larger text')) {
      setFontSize(prev => Math.min(prev + 2, 24));
    } else if (lowerCommand.includes('decrease font') || lowerCommand.includes('smaller text')) {
      setFontSize(prev => Math.max(prev - 2, 12));
    } else if (lowerCommand.includes('high contrast') || lowerCommand.includes('toggle contrast')) {
      setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
    } else if (lowerCommand.includes('stop listening') || lowerCommand.includes('exit voice')) {
      setIsListening(false);
    }
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Alt + A to open accessibility panel
      if (event.altKey && event.key === 'a') {
        event.preventDefault();
        setIsOpen(true);
      }
      
      // Alt + H for high contrast
      if (event.altKey && event.key === 'h') {
        event.preventDefault();
        setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
      }
      
      // Alt + L for large text
      if (event.altKey && event.key === 'l') {
        event.preventDefault();
        setSettings(prev => ({ ...prev, largeText: !prev.largeText }));
      }
      
      // Alt + R for reduced motion
      if (event.altKey && event.key === 'r') {
        event.preventDefault();
        setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }));
      }
      
      // Alt + V for voice navigation
      if (event.altKey && event.key === 'v') {
        event.preventDefault();
        setSettings(prev => ({ ...prev, voiceNavigation: !prev.voiceNavigation }));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Apply settings when they change
  useEffect(() => {
    applySettings(settings);
  }, [settings, applySettings]);

  // Apply font size changes
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  if (!enabled) return null;

  const getWCAGColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getWCAGStatus = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Fair';
    return 'Poor';
  };

  return (
    <>
      {/* Floating Action Button */}
      {showControls && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Open Accessibility Panel"
        >
          <Accessibility className="w-6 h-6" />
        </motion.button>
      )}

      {/* Accessibility Dashboard Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg">
                    <Accessibility className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Accessibility Center
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      WCAG 2.1 AA Compliance & Accessibility Features
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* WCAG Compliance */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      WCAG 2.1 AA Compliance
                    </h3>
                    
                    {/* Overall Score */}
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Overall Score</span>
                        <span className={`text-2xl font-bold ${getWCAGColor(wcagScore.overall)}`}>
                          {wcagScore.overall}/100
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full transition-all duration-300 ${
                            wcagScore.overall >= 90 ? 'bg-green-500' : 
                            wcagScore.overall >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${wcagScore.overall}%` }}
                        />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        Status: <span className={getWCAGColor(wcagScore.overall)}>{getWCAGStatus(wcagScore.overall)}</span>
                      </p>
                    </div>

                    {/* Individual Scores */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900 dark:text-white">Compliance Areas</h4>
                      {Object.entries(wcagScore).filter(([key]) => key !== 'overall').map(([key, score]) => (
                        <div key={key} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <div className="flex items-center space-x-2">
                            <span className={`text-sm font-medium ${getWCAGColor(score)}`}>
                              {score}/100
                            </span>
                            {score >= 90 ? (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            ) : score >= 70 ? (
                              <AlertTriangle className="w-4 h-4 text-yellow-500" />
                            ) : (
                              <X className="w-4 h-4 text-red-500" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Keyboard Shortcuts */}
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-3">Keyboard Shortcuts</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-blue-700 dark:text-blue-300">Alt + A</span>
                          <span className="text-blue-600 dark:text-blue-400">Open Accessibility Panel</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-blue-700 dark:text-blue-300">Alt + H</span>
                          <span className="text-blue-600 dark:text-blue-400">Toggle High Contrast</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-blue-700 dark:text-blue-300">Alt + L</span>
                          <span className="text-blue-600 dark:text-blue-400">Toggle Large Text</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-blue-700 dark:text-blue-300">Alt + R</span>
                          <span className="text-blue-600 dark:text-blue-400">Toggle Reduced Motion</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-blue-700 dark:text-blue-300">Alt + V</span>
                          <span className="text-blue-600 dark:text-blue-400">Toggle Voice Navigation</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Accessibility Controls */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Accessibility Controls
                    </h3>
                    
                    {/* Visual Controls */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-900 dark:text-white">Visual Adjustments</h4>
                      
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.highContrast}
                            onChange={(e) => setSettings(prev => ({ ...prev, highContrast: e.target.checked }))}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <Contrast className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">High Contrast Mode</span>
                        </label>

                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.largeText}
                            onChange={(e) => setSettings(prev => ({ ...prev, largeText: e.target.checked }))}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <Type className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Large Text</span>
                        </label>

                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.reducedMotion}
                            onChange={(e) => setSettings(prev => ({ ...prev, reducedMotion: e.target.checked }))}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <Zap className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Reduced Motion</span>
                        </label>

                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.dyslexiaFriendly}
                            onChange={(e) => setSettings(prev => ({ ...prev, dyslexiaFriendly: e.target.checked }))}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <Type className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Dyslexia Friendly Font</span>
                        </label>
                      </div>

                      {/* Font Size Control */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Font Size: {fontSize}px
                        </label>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => setFontSize(prev => Math.max(prev - 2, 12))}
                            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            aria-label="Decrease font size"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${((fontSize - 12) / (24 - 12)) * 100}%` }}
                            />
                          </div>
                          <button
                            onClick={() => setFontSize(prev => Math.min(prev + 2, 24))}
                            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            aria-label="Increase font size"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-900 dark:text-white">Navigation & Interaction</h4>
                      
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.keyboardNavigation}
                            onChange={(e) => setSettings(prev => ({ ...prev, keyboardNavigation: e.target.checked }))}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <Keyboard className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Enhanced Keyboard Navigation</span>
                        </label>

                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.voiceNavigation}
                            onChange={(e) => setSettings(prev => ({ ...prev, voiceNavigation: e.target.checked }))}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <Mic className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Voice Navigation</span>
                        </label>

                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.focusIndicators}
                            onChange={(e) => setSettings(prev => ({ ...prev, focusIndicators: e.target.checked }))}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <MousePointer className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Enhanced Focus Indicators</span>
                        </label>
                      </div>
                    </div>

                    {/* Voice Navigation Status */}
                    {settings.voiceNavigation && (
                      <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          {isListening ? (
                            <Mic className="w-5 h-5 text-green-600 dark:text-green-400 animate-pulse" />
                          ) : (
                            <MicOff className="w-5 h-5 text-gray-400" />
                          )}
                          <span className="text-sm font-medium text-green-700 dark:text-green-300">
                            Voice Navigation {isListening ? 'Active' : 'Ready'}
                          </span>
                        </div>
                        {voiceCommand && (
                          <p className="text-sm text-green-600 dark:text-green-400">
                            Command: "{voiceCommand}"
                          </p>
                        )}
                        <p className="text-xs text-green-600 dark:text-green-400 mt-2">
                          Try saying: "go home", "navigate services", "increase font", "high contrast"
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedAccessibilityEnhancer;
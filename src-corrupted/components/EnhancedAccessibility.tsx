import React, { useState, useEffect, useCallback } from 'react';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  MousePointer,
  Keyboard,
  EyeOff as Braille,
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
  focusIndicator: boolean;
  colorBlindMode: boolean;
  dyslexiaFriendly: boolean;
}

interface EnhancedAccessibilityProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  showLabels?: boolean;
  enableVoiceControl?: boolean;
  enableKeyboardShortcuts?: boolean;
}

export const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({
  position = 'bottom-right',
  showLabels = true,
  enableVoiceControl = true,
  enableKeyboardShortcuts = true
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    colorBlindMode: false,
    dyslexiaFriendly: false
  });
  const [activeVoiceCommand, setActiveVoiceCommand] = useState<string>('');
  const [isListening, setIsListening] = useState(false);

  // Load saved settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
        applySettings({ ...settings, ...parsed });
      } catch (error) {
        console.warn('Failed to parse saved accessibility settings');
      }
    }
  }, []);

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

    // Large text mode
    if (newSettings.largeText) {
      root.style.fontSize = '1.2em';
      root.style.lineHeight = '1.6';
    } else {
      root.style.fontSize = '';
      root.style.lineHeight = '';
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.1s');
      root.style.setProperty('--transition-duration', '0.1s');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }

    // Screen reader optimizations
    if (newSettings.screenReader) {
      document.body.setAttribute('aria-live', 'polite');
      // Add more screen reader specific optimizations
    } else {
      document.body.removeAttribute('aria-live');
    }

    // Keyboard navigation
    if (newSettings.keyboardNavigation) {
      document.body.classList.add('keyboard-navigation');
      // Enable tab navigation for all elements
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      focusableElements.forEach(el => {
        (el as HTMLElement).tabIndex = 0;
      });
    } else {
      document.body.classList.remove('keyboard-navigation');
    }

    // Focus indicator
    if (newSettings.focusIndicator) {
      root.style.setProperty('--focus-outline', '3px solid #00ffff');
    } else {
      root.style.setProperty('--focus-outline', 'none');
    }

    // Color blind mode
    if (newSettings.colorBlindMode) {
      root.classList.add('color-blind-mode');
      // Apply color blind friendly color schemes
      root.style.setProperty('--primary-color', '#0066cc');
      root.style.setProperty('--secondary-color', '#cc6600');
      root.style.setProperty('--success-color', '#006600');
      root.style.setProperty('--error-color', '#cc0000');
    } else {
      root.classList.remove('color-blind-mode');
      root.style.removeProperty('--primary-color');
      root.style.removeProperty('--secondary-color');
      root.style.removeProperty('--success-color');
      root.style.removeProperty('--error-color');
    }

    // Dyslexia friendly mode
    if (newSettings.dyslexiaFriendly) {
      root.style.fontFamily = 'OpenDyslexic, Arial, sans-serif';
      root.style.letterSpacing = '0.1em';
      root.style.wordSpacing = '0.2em';
    } else {
      root.style.fontFamily = '';
      root.style.letterSpacing = '';
      root.style.wordSpacing = '';
    }

    // Save settings to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Update settings
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
  }, [settings, applySettings]);

  // Voice control functionality
  const startVoiceControl = useCallback(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
        setActiveVoiceCommand('Listening...');
      };

      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result.transcript)
          .join('');
        
        setActiveVoiceCommand(transcript);
        
        // Process voice commands
        processVoiceCommand(transcript.toLowerCase());
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        setActiveVoiceCommand('');
      };

      recognition.onend = () => {
        setIsListening(false);
        setActiveVoiceCommand('');
      };

      recognition.start();
    } else {
      alert('Speech recognition is not supported in this browser');
    }
  }, []);

  // Process voice commands
  const processVoiceCommand = useCallback((command: string) => {
    if (command.includes('open accessibility')) {
      setIsOpen(true);
    } else if (command.includes('close accessibility')) {
      setIsOpen(false);
    } else if (command.includes('high contrast')) {
      updateSetting('highContrast', !settings.highContrast);
    } else if (command.includes('large text')) {
      updateSetting('largeText', !settings.largeText);
    } else if (command.includes('reduced motion')) {
      updateSetting('reducedMotion', !settings.reducedMotion);
    } else if (command.includes('screen reader')) {
      updateSetting('screenReader', !settings.screenReader);
    }
  }, [settings, updateSetting]);

  // Keyboard shortcuts
  useEffect(() => {
    if (!enableKeyboardShortcuts) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Alt + A: Toggle accessibility panel
      if (event.altKey && event.key === 'a') {
        event.preventDefault();
        setIsOpen(!isOpen);
      }
      
      // Alt + H: Toggle high contrast
      if (event.altKey && event.key === 'h') {
        event.preventDefault();
        updateSetting('highContrast', !settings.highContrast);
      }
      
      // Alt + L: Toggle large text
      if (event.altKey && event.key === 'l') {
        event.preventDefault();
        updateSetting('largeText', !settings.largeText);
      }
      
      // Alt + M: Toggle reduced motion
      if (event.altKey && event.key === 'm') {
        event.preventDefault();
        updateSetting('reducedMotion', !settings.reducedMotion);
      }
      
      // Escape: Close accessibility panel
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, settings, updateSetting, enableKeyboardShortcuts]);

  // Position classes
  const getPositionClasses = () => {
    switch (position) {
      case 'top-left': return 'top-4 left-4';
      case 'top-right': return 'top-4 right-4';
      case 'bottom-left': return 'bottom-4 left-4';
      case 'bottom-right': return 'bottom-4 right-4';
      default: return 'bottom-4 right-4';
    }
  };

  // Accessibility features list
  const accessibilityFeatures = [
    {
      key: 'highContrast' as keyof AccessibilitySettings,
      label: 'High Contrast',
      icon: Contrast,
      description: 'Increase color contrast for better visibility'
    },
    {
      key: 'largeText' as keyof AccessibilitySettings,
      label: 'Large Text',
      icon: Type,
      description: 'Increase text size for better readability'
    },
    {
      key: 'reducedMotion' as keyof AccessibilitySettings,
      label: 'Reduced Motion',
      icon: MousePointer,
      description: 'Reduce animations and transitions'
    },
    {
      key: 'screenReader' as keyof AccessibilitySettings,
      label: 'Screen Reader',
      icon: Braille,
      description: 'Optimize for screen readers'
    },
    {
      key: 'keyboardNavigation' as keyof AccessibilitySettings,
      label: 'Keyboard Navigation',
      icon: Keyboard,
      description: 'Enable enhanced keyboard navigation'
    },
    {
      key: 'focusIndicator' as keyof AccessibilitySettings,
      label: 'Focus Indicator',
      icon: MousePointer,
      description: 'Show clear focus indicators'
    },
    {
      key: 'colorBlindMode' as keyof AccessibilitySettings,
      label: 'Color Blind Mode',
      icon: Eye,
      description: 'Use color blind friendly colors'
    },
    {
      key: 'dyslexiaFriendly' as keyof AccessibilitySettings,
      label: 'Dyslexia Friendly',
      icon: Type,
      description: 'Use dyslexia friendly fonts and spacing'
    }
  ];

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${getPositionClasses()} z-50 bg-gradient-to-r from-cyan-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300 focus:ring-opacity-50`}
        aria-label="Accessibility Settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Settings className="w-6 h-6" />
        {showLabels && (
          <span className="absolute left-full ml-2 bg-black text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Accessibility
          </span>
        )}
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div
          id="accessibility-panel"
          className={`fixed ${getPositionClasses()} z-50 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-2xl max-w-sm w-full transition-all duration-300`}
          role="dialog"
          aria-labelledby="accessibility-title"
          aria-describedby="accessibility-description"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <div>
              <h2 id="accessibility-title" className="text-lg font-semibold text-gray-900 dark:text-white">
                Accessibility Settings
              </h2>
              <p id="accessibility-description" className="text-sm text-gray-600 dark:text-gray-400">
                Customize your experience for better accessibility
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Close accessibility panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Voice Control Section */}
          {enableVoiceControl && (
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900 dark:text-white">Voice Control</h3>
                <button
                  onClick={startVoiceControl}
                  disabled={isListening}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isListening
                      ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800'
                  }`}
                  aria-label={isListening ? 'Stop voice control' : 'Start voice control'}
                >
                  {isListening ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  {isListening ? 'Listening...' : 'Voice Control'}
                </button>
              </div>
              {activeVoiceCommand && (
                <div className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded">
                  <strong>Command:</strong> {activeVoiceCommand}
                </div>
              )}
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Try saying: "Open accessibility", "High contrast", "Large text"
              </p>
            </div>
          )}

          {/* Keyboard Shortcuts Section */}
          {enableKeyboardShortcuts && (
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Keyboard Shortcuts</h3>
              <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                <div><kbd className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">Alt + A</kbd> Toggle panel</div>
                <div><kbd className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">Alt + H</kbd> High contrast</div>
                <div><kbd className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">Alt + L</kbd> Large text</div>
                <div><kbd className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">Alt + M</kbd> Reduced motion</div>
                <div><kbd className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">Esc</kbd> Close panel</div>
              </div>
            </div>
          )}

          {/* Accessibility Features */}
          <div className="p-4 max-h-96 overflow-y-auto">
            <div className="space-y-3">
              {accessibilityFeatures.map((feature) => {
                const Icon = feature.icon;
                const isEnabled = settings[feature.key];
                
                return (
                  <div key={feature.key} className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <Icon className={`w-5 h-5 mt-0.5 ${
                        isEnabled ? 'text-green-600 dark:text-green-400' : 'text-gray-400 dark:text-gray-500'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-gray-900 dark:text-white cursor-pointer">
                          {feature.label}
                        </label>
                        <button
                          onClick={() => updateSetting(feature.key, !isEnabled)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                            isEnabled ? 'bg-cyan-600' : 'bg-gray-200 dark:bg-gray-700'
                          }`}
                          role="switch"
                          aria-checked={isEnabled}
                          aria-label={`Toggle ${feature.label}`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              isEnabled ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
              <AlertTriangle className="w-4 h-4" />
              <span>Settings are automatically saved and will persist across sessions</span>
            </div>
          </div>
        </div>
      )}

      {/* Focus indicator styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .high-contrast {
            --text-color: #ffffff !important;
            --bg-color: #000000 !important;
            --accent-color: #ffff00 !important;
          }
          
          .keyboard-navigation *:focus {
            outline: var(--focus-outline, 3px solid #00ffff) !important;
            outline-offset: 2px !important;
          }
          
          .color-blind-mode {
            --primary-color: #0066cc !important;
            --secondary-color: #cc6600 !important;
            --success-color: #006600 !important;
            --error-color: #cc0000 !important;
          }
          
          .reduced-motion * {
            animation-duration: var(--animation-duration, 0.1s) !important;
            transition-duration: var(--transition-duration, 0.1s) !important;
          }
        `
      }} />
    </>
  );
};

export default EnhancedAccessibility;
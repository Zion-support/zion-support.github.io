import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  Smartphone,
  Monitor,
  Settings,
  X,
  Check,
  AlertTriangle,
  Info
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highContrastMode: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: 'normal' | 'large' | 'xlarge';
  lineSpacing: 'normal' | 'relaxed' | 'very-relaxed';
}

interface AccessibilityEnhancerProps {
  enabled: boolean;
  showControls?: boolean;
  autoDetect?: boolean;
  onSettingsChange?: (settings: AccessibilitySettings) => void;
}

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showControls = true,
  autoDetect = true,
  onSettingsChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highContrastMode: false,
    focusIndicator: true,
    screenReader: false,
    keyboardNavigation: true,
    colorBlindness: 'none',
    fontSize: 'normal',
    lineSpacing: 'normal'
  });

  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [focusHistory, setFocusHistory] = useState<HTMLElement[]>([]);
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [isListening, setIsListening] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const speechSynthesisRef = useRef<SpeechSynthesis | null>(null);

  // Load settings from localStorage
  useEffect(() => {
    if (!enabled) return;

    const savedSettings = localStorage.getItem('zion-accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.warn('Failed to parse accessibility settings');
      }
    }

    // Auto-detect user preferences
    if (autoDetect) {
      detectUserPreferences();
    }
  }, [enabled, autoDetect]);

  // Save settings to localStorage
  useEffect(() => {
    if (!enabled) return;

    localStorage.setItem('zion-accessibility-settings', JSON.stringify(settings));
    
    // Apply settings
    applyAccessibilitySettings(settings);
    
    // Notify parent component
    if (onSettingsChange) {
      onSettingsChange(settings);
    }
  }, [settings, enabled, onSettingsChange]);

  // Auto-detect user preferences
  const detectUserPreferences = useCallback(() => {
    // Detect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Detect high contrast preference
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    // Detect color scheme preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast,
      highContrastMode: prefersDark
    }));
  }, []);

  // Apply accessibility settings
  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.style.setProperty('--color-primary', '#ffffff');
      root.style.setProperty('--color-secondary', '#000000');
      root.style.setProperty('--color-background', '#000000');
      root.style.setProperty('--color-text', '#ffffff');
      root.style.setProperty('--color-accent', '#ffff00');
    } else {
      root.style.removeProperty('--color-primary');
      root.style.removeProperty('--color-secondary');
      root.style.removeProperty('--color-background');
      root.style.removeProperty('--color-text');
      root.style.removeProperty('--color-accent');
    }

    // Large text
    if (newSettings.largeText) {
      root.style.setProperty('--font-size-base', '18px');
      root.style.setProperty('--font-size-lg', '20px');
      root.style.setProperty('--font-size-xl', '24px');
    } else {
      root.style.removeProperty('--font-size-base');
      root.style.removeProperty('--font-size-lg');
      root.style.removeProperty('--font-size-xl');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.1s');
      root.style.setProperty('--transition-duration', '0.1s');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }

    // Focus indicator
    if (newSettings.focusIndicator) {
      root.style.setProperty('--focus-ring', '2px solid #0ea5e9');
      root.style.setProperty('--focus-ring-offset', '2px');
    } else {
      root.style.removeProperty('--focus-ring');
      root.style.removeProperty('--focus-ring-offset');
    }

    // Color blindness simulation
    applyColorBlindnessFilter(newSettings.colorBlindness);

    // Font size
    applyFontSize(newSettings.fontSize);

    // Line spacing
    applyLineSpacing(newSettings.lineSpacing);
  }, []);

  // Apply color blindness filter
  const applyColorBlindnessFilter = useCallback((type: string) => {
    const root = document.documentElement;
    
    switch (type) {
      case 'protanopia':
        root.style.setProperty('--color-filter', 'url(#protanopia)');
        break;
      case 'deuteranopia':
        root.style.setProperty('--color-filter', 'url(#deuteranopia)');
        break;
      case 'tritanopia':
        root.style.setProperty('--color-filter', 'url(#tritanopia)');
        break;
      default:
        root.style.removeProperty('--color-filter');
    }
  }, []);

  // Apply font size
  const applyFontSize = useCallback((size: string) => {
    const root = document.documentElement;
    
    switch (size) {
      case 'large':
        root.style.setProperty('--font-size-multiplier', '1.2');
        break;
      case 'xlarge':
        root.style.setProperty('--font-size-multiplier', '1.4');
        break;
      default:
        root.style.removeProperty('--font-size-multiplier');
    }
  }, []);

  // Apply line spacing
  const applyLineSpacing = useCallback((spacing: string) => {
    const root = document.documentElement;
    
    switch (spacing) {
      case 'relaxed':
        root.style.setProperty('--line-height', '1.6');
        break;
      case 'very-relaxed':
        root.style.setProperty('--line-height', '2.0');
        break;
      default:
        root.style.removeProperty('--line-height');
    }
  }, []);

  // Focus management
  useEffect(() => {
    if (!enabled || !settings.keyboardNavigation) return;

    const handleFocusChange = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      setCurrentFocus(target);
      setFocusHistory(prev => [...prev.slice(-4), target]);
      
      // Announce focus changes for screen readers
      if (settings.screenReader && target.getAttribute('aria-label')) {
        announceToScreenReader(target.getAttribute('aria-label')!);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.altKey) {
        event.preventDefault();
        const mainContent = document.querySelector('main') || document.querySelector('#main-content');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }

      // Skip to navigation
      if (event.key === 'Tab' && event.altKey) {
        event.preventDefault();
        const navigation = document.querySelector('nav') || document.querySelector('[role="navigation"]');
        if (navigation) {
          (navigation as HTMLElement).focus();
        }
      }
    };

    document.addEventListener('focusin', handleFocusChange);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('focusin', handleFocusChange);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [enabled, settings.keyboardNavigation, settings.screenReader]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!settings.screenReader) return;

    // Use Speech Synthesis API if available
    if ('speechSynthesis' in window) {
      if (!speechSynthesisRef.current) {
        speechSynthesisRef.current = window.speechSynthesis;
      }
      
      const utterance = new SpeechSynthesisUtterance(message);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      speechSynthesisRef.current.speak(utterance);
    }

    // Fallback: Add to announcements list
    setAnnouncements(prev => [...prev, message]);
    setTimeout(() => {
      setAnnouncements(prev => prev.filter(announcement => announcement !== message));
    }, 5000);
  }, [settings.screenReader]);

  // Audio feedback for interactions
  const playAudioFeedback = useCallback((type: 'focus' | 'click' | 'error' | 'success') => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    const audioContext = audioContextRef.current;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Different frequencies for different feedback types
    const frequencies = {
      focus: 800,
      click: 1000,
      error: 400,
      success: 1200
    };

    oscillator.frequency.setValueAtTime(frequencies[type], audioContext.currentTime);
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  }, []);

  // Update setting
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    
    // Play audio feedback
    if (value) {
      playAudioFeedback('success');
    }
  }, [playAudioFeedback]);

  // Reset to defaults
  const resetToDefaults = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      highContrastMode: false,
      focusIndicator: true,
      screenReader: false,
      keyboardNavigation: true,
      colorBlindness: 'none',
      fontSize: 'normal',
      lineSpacing: 'normal'
    };
    
    setSettings(defaultSettings);
    playAudioFeedback('success');
  }, [playAudioFeedback]);

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Controls Button */}
      {showControls && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-50 p-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Open Accessibility Settings"
          onFocus={() => playAudioFeedback('focus')}
        >
          <Settings className="w-6 h-6" />
          <div className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
        </motion.button>
      )}

      {/* Accessibility Settings Modal */}
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
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Accessibility Settings
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Customize your experience for better accessibility
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                  onFocus={() => playAudioFeedback('focus')}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="space-y-6">
                  {/* Visual Enhancements */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Visual Enhancements
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.highContrast}
                          onChange={(e) => updateSetting('highContrast', e.target.checked)}
                          className="w-4 h-4 text-cyan-500 rounded focus:ring-cyan-500"
                        />
                        <span className="text-gray-700 dark:text-gray-300">High Contrast</span>
                      </label>

                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.largeText}
                          onChange={(e) => updateSetting('largeText', e.target.checked)}
                          className="w-4 h-4 text-cyan-500 rounded focus:ring-cyan-500"
                        />
                        <span className="text-gray-700 dark:text-gray-300">Large Text</span>
                      </label>

                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.focusIndicator}
                          onChange={(e) => updateSetting('focusIndicator', e.target.checked)}
                          className="w-4 h-4 text-cyan-500 rounded focus:ring-cyan-500"
                        />
                        <span className="text-gray-700 dark:text-gray-300">Focus Indicators</span>
                      </label>

                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.reducedMotion}
                          onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                          className="w-4 h-4 text-cyan-500 rounded focus:ring-cyan-500"
                        />
                        <span className="text-gray-700 dark:text-gray-300">Reduced Motion</span>
                      </label>
                    </div>
                  </div>

                  {/* Font Size */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Font Size
                    </h3>
                    <div className="flex space-x-2">
                      {(['normal', 'large', 'xlarge'] as const).map((size) => (
                        <button
                          key={size}
                          onClick={() => updateSetting('fontSize', size)}
                          className={`px-4 py-2 rounded-lg border transition-colors ${
                            settings.fontSize === size
                              ? 'bg-cyan-500 text-white border-cyan-500'
                              : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-700'
                          }`}
                          onFocus={() => playAudioFeedback('focus')}
                        >
                          {size.charAt(0).toUpperCase() + size.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Line Spacing */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Line Spacing
                    </h3>
                    <div className="flex space-x-2">
                      {(['normal', 'relaxed', 'very-relaxed'] as const).map((spacing) => (
                        <button
                          key={spacing}
                          onClick={() => updateSetting('lineSpacing', spacing)}
                          className={`px-4 py-2 rounded-lg border transition-colors ${
                            settings.lineSpacing === spacing
                              ? 'bg-cyan-500 text-white border-cyan-500'
                              : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-700'
                          }`}
                          onFocus={() => playAudioFeedback('focus')}
                        >
                          {spacing.charAt(0).toUpperCase() + spacing.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Color Blindness */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Color Blindness Support
                    </h3>
                    <select
                      value={settings.colorBlindness}
                      onChange={(e) => updateSetting('colorBlindness', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      onFocus={() => playAudioFeedback('focus')}
                    >
                      <option value="none">No Color Blindness</option>
                      <option value="protanopia">Protanopia (Red-Blind)</option>
                      <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                      <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                    </select>
                  </div>

                  {/* Navigation */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Navigation
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.keyboardNavigation}
                          onChange={(e) => updateSetting('keyboardNavigation', e.target.checked)}
                          className="w-4 h-4 text-cyan-500 rounded focus:ring-cyan-500"
                        />
                        <span className="text-gray-700 dark:text-gray-300">Keyboard Navigation</span>
                      </label>

                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.screenReader}
                          onChange={(e) => updateSetting('screenReader', e.target.checked)}
                          className="w-4 h-4 text-cyan-500 rounded focus:ring-cyan-500"
                        />
                        <span className="text-gray-700 dark:text-gray-300">Screen Reader Support</span>
                      </label>
                    </div>
                  </div>

                  {/* Reset Button */}
                  <div className="pt-4 border-t border-gray-200 dark:border-slate-700">
                    <button
                      onClick={resetToDefaults}
                      className="w-full px-4 py-2 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                      onFocus={() => playAudioFeedback('focus')}
                    >
                      Reset to Defaults
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Announcements */}
      {announcements.length > 0 && (
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          {announcements[announcements.length - 1]}
        </div>
      )}

      {/* Focus History Indicator (Development Only) */}
      {process.env.NODE_ENV === 'development' && currentFocus && (
        <div className="fixed top-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs z-50 max-w-xs">
          <div className="font-bold mb-1">Current Focus</div>
          <div className="text-cyan-400">{currentFocus.tagName.toLowerCase()}</div>
          {currentFocus.textContent && (
            <div className="text-gray-300 truncate">{currentFocus.textContent}</div>
          )}
        </div>
      )}
    </>
  );
};
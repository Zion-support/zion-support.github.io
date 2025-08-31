import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Eye,
  EyeOff,
  Type,
  Minus,
  Plus,
  MousePointer,
  Keyboard,
  Volume2,
  VolumeX,
  Settings,
  RotateCcw,
  Contrast,
  Palette,
  Navigation,
  Focus,
  Target,
  Accessibility
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  textScale: number;
  reducedMotion: boolean;
  colorBlindMode: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  focusIndicators: boolean;
  keyboardNavigation: boolean;
  screenReaderOptimized: boolean;
  audioDescription: boolean;
  touchOptimized: boolean;
  readingGuide: boolean;
  dyslexiaFont: boolean;
  invertColors: boolean;
  saturation: number;
  brightness: number;
}

interface AccessibilityPreset {
  name: string;
  icon: React.ReactNode;
  description: string;
  settings: Partial<AccessibilitySettings>;
}

export const EnhancedAccessibility: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    // Load settings from localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('accessibility-settings');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.warn('Failed to parse accessibility settings');
        }
      }
    }
    
    return {
      highContrast: false,
      largeText: false,
      textScale: 1,
      reducedMotion: false,
      colorBlindMode: 'normal',
      focusIndicators: false,
      keyboardNavigation: false,
      screenReaderOptimized: false,
      audioDescription: false,
      touchOptimized: false,
      readingGuide: false,
      dyslexiaFont: false,
      invertColors: false,
      saturation: 1,
      brightness: 1,
    };
  });

  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'visual' | 'motor' | 'cognitive' | 'hearing'>('visual');
  const [announcement, setAnnouncement] = useState('');
  const [isReading, setIsReading] = useState(false);
  
  const menuRef = useRef<HTMLDivElement>(null);
  const announcementRef = useRef<HTMLDivElement>(null);

  // Accessibility presets
  const presets: AccessibilityPreset[] = [
    {
      name: 'Low Vision',
      icon: <Eye className="w-4 h-4" />,
      description: 'High contrast, large text, and enhanced focus indicators',
      settings: {
        highContrast: true,
        largeText: true,
        textScale: 1.5,
        focusIndicators: true,
        brightness: 1.2
      }
    },
    {
      name: 'Motor Impairment',
      icon: <MousePointer className="w-4 h-4" />,
      description: 'Large touch targets, keyboard navigation, and reduced motion',
      settings: {
        touchOptimized: true,
        keyboardNavigation: true,
        reducedMotion: true,
        focusIndicators: true
      }
    },
    {
      name: 'Cognitive Support',
      icon: <Focus className="w-4 h-4" />,
      description: 'Dyslexia-friendly font, reading guide, and simplified interface',
      settings: {
        dyslexiaFont: true,
        readingGuide: true,
        reducedMotion: true,
        screenReaderOptimized: true
      }
    },
    {
      name: 'Color Blind',
      icon: <Palette className="w-4 h-4" />,
      description: 'Color blind friendly mode with enhanced patterns',
      settings: {
        colorBlindMode: 'deuteranopia',
        highContrast: true,
        focusIndicators: true
      }
    }
  ];

  // Apply accessibility settings to document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const { documentElement } = document;
    
    // High contrast
    documentElement.classList.toggle('high-contrast', newSettings.highContrast);
    
    // Large text
    documentElement.classList.toggle('large-text', newSettings.largeText);
    
    // Text scale
    documentElement.style.setProperty('--text-scale', newSettings.textScale.toString());
    
    // Reduced motion
    documentElement.classList.toggle('reduced-motion', newSettings.reducedMotion);
    
    // Color blind mode
    documentElement.className = documentElement.className.replace(/color-blind-\w+/g, '');
    if (newSettings.colorBlindMode !== 'normal') {
      documentElement.classList.add(`color-blind-${newSettings.colorBlindMode}`);
    }
    
    // Focus indicators
    documentElement.classList.toggle('enhanced-focus', newSettings.focusIndicators);
    
    // Keyboard navigation
    documentElement.classList.toggle('keyboard-navigation', newSettings.keyboardNavigation);
    
    // Screen reader optimization
    documentElement.classList.toggle('screen-reader-optimized', newSettings.screenReaderOptimized);
    
    // Touch optimization
    documentElement.classList.toggle('touch-optimized', newSettings.touchOptimized);
    
    // Dyslexia font
    documentElement.classList.toggle('dyslexia-font', newSettings.dyslexiaFont);
    
    // Invert colors
    documentElement.classList.toggle('invert-colors', newSettings.invertColors);
    
    // Saturation and brightness
    documentElement.style.setProperty('--saturation', newSettings.saturation.toString());
    documentElement.style.setProperty('--brightness', newSettings.brightness.toString());
    
    // Reading guide
    if (newSettings.readingGuide) {
      enableReadingGuide();
    } else {
      disableReadingGuide();
    }
  }, []);

  // Enable reading guide
  const enableReadingGuide = useCallback(() => {
    if (document.getElementById('reading-guide')) return;
    
    const guide = document.createElement('div');
    guide.id = 'reading-guide';
    guide.className = 'reading-guide';
    guide.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, #22d3ee, #a855f7);
      z-index: 9999;
      pointer-events: none;
      transform: translateY(-100%);
      transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(guide);
    
    let mouseY = 0;
    const updateGuide = (e: MouseEvent) => {
      mouseY = e.clientY;
      guide.style.transform = `translateY(${mouseY - 1}px)`;
    };
    
    document.addEventListener('mousemove', updateGuide);
    
    // Store cleanup function
    (guide as any).cleanup = () => {
      document.removeEventListener('mousemove', updateGuide);
      guide.remove();
    };
  }, []);

  // Disable reading guide
  const disableReadingGuide = useCallback(() => {
    const guide = document.getElementById('reading-guide');
    if (guide && (guide as any).cleanup) {
      (guide as any).cleanup();
    }
  }, []);

  // Screen reader announcement
  const announce = useCallback((message: string) => {
    setAnnouncement(message);
    setTimeout(() => setAnnouncement(''), 1000);
    
    // Also use aria-live region
    if (announcementRef.current) {
      announcementRef.current.textContent = message;
    }
  }, []);

  // Update settings and apply them
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => {
      const newSettings = { ...prev, [key]: value };
      applySettings(newSettings);
      
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
      }
      
      // Announce change
      announce(`${key.replace(/([A-Z])/g, ' $1').toLowerCase()} ${value ? 'enabled' : 'disabled'}`);
      
      return newSettings;
    });
  }, [applySettings, announce]);

  // Apply preset
  const applyPreset = useCallback((preset: AccessibilityPreset) => {
    setSettings(prev => {
      const newSettings = { ...prev, ...preset.settings };
      applySettings(newSettings);
      
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
      }
      
      announce(`Applied ${preset.name} preset`);
      
      return newSettings;
    });
  }, [applySettings, announce]);

  // Reset all settings
  const resetSettings = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      textScale: 1,
      reducedMotion: false,
      colorBlindMode: 'normal',
      focusIndicators: false,
      keyboardNavigation: false,
      screenReaderOptimized: false,
      audioDescription: false,
      touchOptimized: false,
      readingGuide: false,
      dyslexiaFont: false,
      invertColors: false,
      saturation: 1,
      brightness: 1,
    };
    
    setSettings(defaultSettings);
    applySettings(defaultSettings);
    
    if (typeof window !== 'undefined') {
      localStorage.removeItem('accessibility-settings');
    }
    
    announce('Accessibility settings reset');
  }, [applySettings, announce]);

  // Text-to-speech
  const speakText = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      
      setIsReading(true);
      utterance.onend = () => setIsReading(false);
      utterance.onerror = () => setIsReading(false);
      
      speechSynthesis.speak(utterance);
    }
  }, []);

  // Stop speaking
  const stopSpeaking = useCallback(() => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      setIsReading(false);
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt + A to toggle accessibility menu
      if (e.altKey && e.key === 'a') {
        e.preventDefault();
        setIsOpen(prev => !prev);
        announce('Accessibility menu toggled');
      }
      
      // Escape to close menu
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        announce('Accessibility menu closed');
      }
      
      // Arrow keys for navigation when menu is open
      if (isOpen && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
        // Handle arrow key navigation here
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, announce]);

  // Apply settings on mount
  useEffect(() => {
    applySettings(settings);
  }, []);

  // Focus management
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const firstFocusable = menuRef.current.querySelector('button, [tabindex]:not([tabindex="-1"])') as HTMLElement;
      firstFocusable?.focus();
    }
  }, [isOpen]);

  const TabButton: React.FC<{ tab: typeof activeTab; children: React.ReactNode }> = ({ tab, children }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
        activeTab === tab
          ? 'bg-cyan-600 text-white'
          : 'text-gray-300 hover:text-white hover:bg-slate-700'
      }`}
      aria-pressed={activeTab === tab}
    >
      {children}
    </button>
  );

  const SettingToggle: React.FC<{
    label: string;
    description: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    icon?: React.ReactNode;
  }> = ({ label, description, checked, onChange, icon }) => (
    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors">
      {icon && <div className="text-cyan-400 mt-1">{icon}</div>}
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-white cursor-pointer">
            {label}
          </label>
          <button
            onClick={() => onChange(!checked)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 ${
              checked ? 'bg-cyan-600' : 'bg-gray-600'
            }`}
            role="switch"
            aria-checked={checked}
            aria-labelledby={`${label.replace(/\s+/g, '-').toLowerCase()}-label`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                checked ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-1">{description}</p>
      </div>
    </div>
  );

  return (
    <>
      {/* Accessibility Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-50 bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
        title="Open Accessibility Options (Alt + A)"
        aria-label="Open Accessibility Options"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Live Region for Announcements */}
      <div
        ref={announcementRef}
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />

      {/* Accessibility Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              onClick={(e) => e.stopPropagation()}
              className="h-full w-full max-w-md bg-slate-900 shadow-2xl overflow-hidden"
              role="dialog"
              aria-labelledby="accessibility-title"
              aria-modal="true"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <Accessibility className="w-5 h-5 text-cyan-400" />
                  <h2 id="accessibility-title" className="text-lg font-semibold text-white">
                    Accessibility Options
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={resetSettings}
                    className="p-2 text-gray-400 hover:text-white hover:bg-slate-700 rounded"
                    title="Reset all settings"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-400 hover:text-white hover:bg-slate-700 rounded"
                    title="Close accessibility options"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Quick Presets */}
              <div className="p-4 border-b border-slate-700">
                <h3 className="text-sm font-semibold text-gray-300 mb-3">Quick Presets</h3>
                <div className="grid grid-cols-2 gap-2">
                  {presets.map((preset) => (
                    <button
                      key={preset.name}
                      onClick={() => applyPreset(preset)}
                      className="flex items-center gap-2 p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-left transition-colors"
                      title={preset.description}
                    >
                      <div className="text-cyan-400">{preset.icon}</div>
                      <span className="text-sm text-white">{preset.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Tabs */}
              <div className="p-4 border-b border-slate-700">
                <div className="flex gap-1 bg-slate-800 rounded-lg p-1">
                  <TabButton tab="visual">Visual</TabButton>
                  <TabButton tab="motor">Motor</TabButton>
                  <TabButton tab="cognitive">Cognitive</TabButton>
                  <TabButton tab="hearing">Hearing</TabButton>
                </div>
              </div>

              {/* Settings Content */}
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {activeTab === 'visual' && (
                  <>
                    <SettingToggle
                      label="High Contrast"
                      description="Increase contrast for better readability"
                      checked={settings.highContrast}
                      onChange={(checked) => updateSetting('highContrast', checked)}
                      icon={<Contrast className="w-4 h-4" />}
                    />
                    
                    <SettingToggle
                      label="Large Text"
                      description="Increase text size across the site"
                      checked={settings.largeText}
                      onChange={(checked) => updateSetting('largeText', checked)}
                      icon={<Type className="w-4 h-4" />}
                    />
                    
                    <div className="p-3 rounded-lg hover:bg-slate-700/50">
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-white">Text Scale</label>
                        <span className="text-sm text-gray-400">{Math.round(settings.textScale * 100)}%</span>
                      </div>
                      <input
                        type="range"
                        min="0.8"
                        max="2"
                        step="0.1"
                        value={settings.textScale}
                        onChange={(e) => updateSetting('textScale', parseFloat(e.target.value))}
                        className="w-full accent-cyan-600"
                      />
                    </div>
                    
                    <SettingToggle
                      label="Invert Colors"
                      description="Invert all colors for better visibility"
                      checked={settings.invertColors}
                      onChange={(checked) => updateSetting('invertColors', checked)}
                      icon={<Palette className="w-4 h-4" />}
                    />
                    
                    <div className="p-3 rounded-lg hover:bg-slate-700/50">
                      <label className="text-sm font-medium text-white mb-2 block">Color Blind Mode</label>
                      <select
                        value={settings.colorBlindMode}
                        onChange={(e) => updateSetting('colorBlindMode', e.target.value)}
                        className="w-full bg-slate-800 border border-slate-600 rounded px-3 py-2 text-white"
                      >
                        <option value="normal">Normal</option>
                        <option value="protanopia">Protanopia (Red-blind)</option>
                        <option value="deuteranopia">Deuteranopia (Green-blind)</option>
                        <option value="tritanopia">Tritanopia (Blue-blind)</option>
                      </select>
                    </div>
                  </>
                )}

                {activeTab === 'motor' && (
                  <>
                    <SettingToggle
                      label="Touch Optimization"
                      description="Larger touch targets for easier interaction"
                      checked={settings.touchOptimized}
                      onChange={(checked) => updateSetting('touchOptimized', checked)}
                      icon={<MousePointer className="w-4 h-4" />}
                    />
                    
                    <SettingToggle
                      label="Keyboard Navigation"
                      description="Enhanced keyboard navigation support"
                      checked={settings.keyboardNavigation}
                      onChange={(checked) => updateSetting('keyboardNavigation', checked)}
                      icon={<Keyboard className="w-4 h-4" />}
                    />
                    
                    <SettingToggle
                      label="Enhanced Focus"
                      description="More visible focus indicators"
                      checked={settings.focusIndicators}
                      onChange={(checked) => updateSetting('focusIndicators', checked)}
                      icon={<Target className="w-4 h-4" />}
                    />
                    
                    <SettingToggle
                      label="Reduced Motion"
                      description="Minimize animations and transitions"
                      checked={settings.reducedMotion}
                      onChange={(checked) => updateSetting('reducedMotion', checked)}
                      icon={<Navigation className="w-4 h-4" />}
                    />
                  </>
                )}

                {activeTab === 'cognitive' && (
                  <>
                    <SettingToggle
                      label="Dyslexia-Friendly Font"
                      description="Use font designed for dyslexia"
                      checked={settings.dyslexiaFont}
                      onChange={(checked) => updateSetting('dyslexiaFont', checked)}
                      icon={<Type className="w-4 h-4" />}
                    />
                    
                    <SettingToggle
                      label="Reading Guide"
                      description="Highlight current reading line"
                      checked={settings.readingGuide}
                      onChange={(checked) => updateSetting('readingGuide', checked)}
                      icon={<Eye className="w-4 h-4" />}
                    />
                    
                    <SettingToggle
                      label="Screen Reader Optimized"
                      description="Optimize content for screen readers"
                      checked={settings.screenReaderOptimized}
                      onChange={(checked) => updateSetting('screenReaderOptimized', checked)}
                      icon={<Volume2 className="w-4 h-4" />}
                    />
                  </>
                )}

                {activeTab === 'hearing' && (
                  <>
                    <SettingToggle
                      label="Audio Descriptions"
                      description="Enable audio descriptions for media"
                      checked={settings.audioDescription}
                      onChange={(checked) => updateSetting('audioDescription', checked)}
                      icon={<Volume2 className="w-4 h-4" />}
                    />
                    
                    <div className="p-3 rounded-lg hover:bg-slate-700/50">
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-white">Text to Speech</label>
                        <button
                          onClick={isReading ? stopSpeaking : () => speakText('Text to speech is now available')}
                          className={`px-3 py-1 rounded text-sm ${
                            isReading ? 'bg-red-600 hover:bg-red-700' : 'bg-cyan-600 hover:bg-cyan-700'
                          } text-white transition-colors`}
                        >
                          {isReading ? 'Stop' : 'Test'}
                        </button>
                      </div>
                      <p className="text-xs text-gray-400">Click to test text-to-speech functionality</p>
                    </div>
                  </>
                )}
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-slate-700 bg-slate-800/50">
                <p className="text-xs text-gray-400 text-center">
                  Press Alt + A to toggle this menu at any time
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Announcement popup */}
      <AnimatePresence>
        {announcement && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 left-4 bg-slate-900 text-white px-4 py-2 rounded-lg shadow-lg z-50"
            role="status"
            aria-live="polite"
          >
            {announcement}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

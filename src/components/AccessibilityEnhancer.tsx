import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Type, 
  Volume2, 
  VolumeX, 
  Keyboard, 
  MousePointer, 
  Settings,
  X,
  Contrast,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Accessibility,
  Braille,
  Headphones
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: 'small' | 'medium' | 'large' | 'extra-large';
  reducedMotion: boolean;
  soundEnabled: boolean;
  keyboardNavigation: boolean;
  mouseNavigation: boolean;
  screenReader: boolean;
  focusIndicator: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
}

interface AccessibilityEnhancerProps {
  showPanel?: boolean;
  onSettingsChange?: (settings: AccessibilitySettings) => void;
}

export function AccessibilityEnhancer({
  showPanel = true,
  onSettingsChange
}: AccessibilityEnhancerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 'medium',
    reducedMotion: false,
    soundEnabled: true,
    keyboardNavigation: true,
    mouseNavigation: true,
    screenReader: false,
    focusIndicator: true,
    colorBlindness: 'none'
  });

  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);

  // Apply accessibility settings to the document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Font size
    root.classList.remove('font-small', 'font-medium', 'font-large', 'font-extra-large');
    root.classList.add(`font-${newSettings.fontSize}`);

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Color blindness simulation
    root.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
    if (newSettings.colorBlindness !== 'none') {
      root.classList.add(newSettings.colorBlindness);
    }

    // Focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    
    // Notify parent component
    if (onSettingsChange) {
      onSettingsChange(newSettings);
    }
  }, [onSettingsChange]);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        setSettings(parsedSettings);
        applySettings(parsedSettings);
      } catch (error) {
        console.warn('Failed to parse saved accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Apply settings when they change
  useEffect(() => {
    applySettings(settings);
  }, [settings, applySettings]);

  // Keyboard navigation support
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      const currentIndex = Array.from(focusableElements).findIndex(el => el === document.activeElement);
      
      switch (event.key) {
        case 'Tab':
          // Let default tab behavior work
          break;
        case 'ArrowRight':
        case 'ArrowDown':
          event.preventDefault();
          const nextIndex = (currentIndex + 1) % focusableElements.length;
          (focusableElements[nextIndex] as HTMLElement)?.focus();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          event.preventDefault();
          const prevIndex = currentIndex <= 0 ? focusableElements.length - 1 : currentIndex - 1;
          (focusableElements[prevIndex] as HTMLElement)?.focus();
          break;
        case 'Enter':
        case ' ':
          if (document.activeElement instanceof HTMLElement) {
            document.activeElement.click();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Focus tracking for screen reader announcements
  useEffect(() => {
    if (!settings.screenReader) return;

    const handleFocusChange = () => {
      const focusedElement = document.activeElement as HTMLElement;
      if (focusedElement && focusedElement !== currentFocus) {
        setCurrentFocus(focusedElement);
        
        // Announce focus change to screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = `Focused on ${focusedElement.textContent || focusedElement.getAttribute('aria-label') || 'element'}`;
        
        document.body.appendChild(announcement);
        setTimeout(() => document.body.removeChild(announcement), 1000);
      }
    };

    document.addEventListener('focusin', handleFocusChange);
    return () => document.removeEventListener('focusin', handleFocusChange);
  }, [settings.screenReader, currentFocus]);

  // Sound effects for interactions
  const playSound = useCallback((type: 'click' | 'focus' | 'error' | 'success') => {
    if (!settings.soundEnabled) return;

    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    const frequencies = {
      click: 800,
      focus: 1200,
      error: 400,
      success: 1000
    };

    oscillator.frequency.setValueAtTime(frequencies[type], audioContext.currentTime);
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  }, [settings.soundEnabled]);

  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  }, []);

  const resetSettings = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      fontSize: 'medium',
      reducedMotion: false,
      soundEnabled: true,
      keyboardNavigation: true,
      mouseNavigation: true,
      screenReader: false,
      focusIndicator: true,
      colorBlindness: 'none'
    };
    setSettings(defaultSettings);
  }, []);

  if (!showPanel) return null;

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsOpen(!isOpen);
          playSound('click');
        }}
        className="fixed top-4 right-4 z-50 bg-zion-purple hover:bg-zion-purple/80 text-white p-3 rounded-full shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2"
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 h-full w-80 bg-zion-slate-dark/95 backdrop-blur-xl border-l border-zion-purple/20 shadow-2xl z-40 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                  <Accessibility className="w-6 h-6 text-zion-cyan" />
                  <span>Accessibility</span>
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-zion-purple/20 rounded-lg transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5 text-zion-slate-light" />
                </button>
              </div>

              {/* Settings Sections */}
              <div className="space-y-6">
                {/* Visual Settings */}
                <section>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                    <Eye className="w-5 h-5 text-zion-cyan" />
                    <span>Visual</span>
                  </h3>
                  
                  <div className="space-y-4">
                    {/* High Contrast */}
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.highContrast}
                        onChange={(e) => updateSetting('highContrast', e.target.checked)}
                        className="w-4 h-4 text-zion-cyan bg-zion-slate-light border-zion-purple rounded focus:ring-zion-cyan"
                      />
                      <span className="text-zion-slate-light">High Contrast</span>
                    </label>

                    {/* Font Size */}
                    <div>
                      <label className="block text-sm font-medium text-zion-slate-light mb-2">
                        Font Size
                      </label>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateSetting('fontSize', 'small')}
                          className={`p-2 rounded ${settings.fontSize === 'small' ? 'bg-zion-purple text-white' : 'bg-zion-slate-light/20 text-zion-slate-light'}`}
                        >
                          <ZoomOut className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => updateSetting('fontSize', 'medium')}
                          className={`p-2 rounded ${settings.fontSize === 'medium' ? 'bg-zion-purple text-white' : 'bg-zion-slate-light/20 text-zion-slate-light'}`}
                        >
                          <Type className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => updateSetting('fontSize', 'large')}
                          className={`p-2 rounded ${settings.fontSize === 'large' ? 'bg-zion-purple text-white' : 'bg-zion-slate-light/20 text-zion-slate-light'}`}
                        >
                          <ZoomIn className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Color Blindness */}
                    <div>
                      <label className="block text-sm font-medium text-zion-slate-light mb-2">
                        Color Blindness Support
                      </label>
                      <select
                        value={settings.colorBlindness}
                        onChange={(e) => updateSetting('colorBlindness', e.target.value)}
                        className="w-full p-2 bg-zion-slate-light/20 border border-zion-purple/20 rounded text-zion-slate-light focus:ring-2 focus:ring-zion-cyan"
                      >
                        <option value="none">None</option>
                        <option value="protanopia">Protanopia (Red-Blind)</option>
                        <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                        <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                      </select>
                    </div>
                  </div>
                </section>

                {/* Motion & Sound */}
                <section>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                    <Volume2 className="w-5 h-5 text-zion-cyan" />
                    <span>Motion & Sound</span>
                  </h3>
                  
                  <div className="space-y-4">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.reducedMotion}
                        onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                        className="w-4 h-4 text-zion-cyan bg-zion-slate-light border-zion-purple rounded focus:ring-zion-cyan"
                      />
                      <span className="text-zion-slate-light">Reduce Motion</span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.soundEnabled}
                        onChange={(e) => updateSetting('soundEnabled', e.target.checked)}
                        className="w-4 h-4 text-zion-cyan bg-zion-slate-light border-zion-purple rounded focus:ring-zion-cyan"
                      />
                      <span className="text-zion-slate-light">Sound Effects</span>
                    </label>
                  </div>
                </section>

                {/* Navigation */}
                <section>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                    <Keyboard className="w-5 h-5 text-zion-cyan" />
                    <span>Navigation</span>
                  </h3>
                  
                  <div className="space-y-4">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.keyboardNavigation}
                        onChange={(e) => updateSetting('keyboardNavigation', e.target.checked)}
                        className="w-4 h-4 text-zion-cyan bg-zion-slate-light border-zion-purple rounded focus:ring-zion-cyan"
                      />
                      <span className="text-zion-slate-light">Enhanced Keyboard Navigation</span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.focusIndicator}
                        onChange={(e) => updateSetting('focusIndicator', e.target.checked)}
                        className="w-4 h-4 text-zion-cyan bg-zion-slate-light border-zion-purple rounded focus:ring-zion-cyan"
                      />
                      <span className="text-zion-slate-light">Focus Indicators</span>
                    </label>
                  </div>
                </section>

                {/* Screen Reader */}
                <section>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                    <Headphones className="w-5 h-5 text-zion-cyan" />
                    <span>Screen Reader</span>
                  </h3>
                  
                  <div className="space-y-4">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.screenReader}
                        onChange={(e) => updateSetting('screenReader', e.target.checked)}
                        className="w-4 h-4 text-zion-cyan bg-zion-slate-light border-zion-purple rounded focus:ring-zion-cyan"
                      />
                      <span className="text-zion-slate-light">Enhanced Screen Reader Support</span>
                    </label>
                  </div>
                </section>

                {/* Reset Button */}
                <section>
                  <button
                    onClick={resetSettings}
                    className="w-full py-3 px-4 bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border border-zion-purple/30 rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reset to Defaults</span>
                  </button>
                </section>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Only Content */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Accessibility panel {isOpen ? 'opened' : 'closed'}
      </div>
    </>
  );
}

// CSS classes for accessibility features
const accessibilityStyles = `
  /* High Contrast Mode */
  .high-contrast {
    --zion-slate-dark: #000000;
    --zion-slate-light: #ffffff;
    --zion-purple: #ffff00;
    --zion-cyan: #00ffff;
  }

  /* Font Sizes */
  .font-small { font-size: 0.875rem; }
  .font-medium { font-size: 1rem; }
  .font-large { font-size: 1.125rem; }
  .font-extra-large { font-size: 1.25rem; }

  /* Reduced Motion */
  .reduced-motion * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  /* Focus Indicators */
  .focus-visible *:focus {
    outline: 3px solid var(--zion-cyan) !important;
    outline-offset: 2px !important;
  }

  /* Color Blindness Support */
  .protanopia { filter: url('#protanopia'); }
  .deuteranopia { filter: url('#deuteranopia'); }
  .tritanopia { filter: url('#tritanopia'); }

  /* Screen Reader Only */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

// Inject styles into document head
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = accessibilityStyles;
  document.head.appendChild(styleElement);
}

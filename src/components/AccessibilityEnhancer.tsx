import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  Accessibility,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info,
  Keyboard,
  MousePointer,
  Monitor,
  Smartphone,
  Headphones,
  Braille,
  Languages,
  Palette
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  focusIndicator: boolean;
  colorBlind: boolean;
  dyslexia: boolean;
  keyboardOnly: boolean;
  highSaturation: boolean;
  darkMode: boolean;
}

interface AccessibilityEnhancerProps {
  showPanel?: boolean;
  autoDetect?: boolean;
  enableVoiceControl?: boolean;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  showPanel = true,
  autoDetect = true,
  enableVoiceControl = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    focusIndicator: true,
    colorBlind: false,
    dyslexia: false,
    keyboardOnly: false,
    highSaturation: false,
    darkMode: false
  });
  const [fontSize, setFontSize] = useState(16);
  const [lineHeight, setLineHeight] = useState(1.5);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [accessibilityIssues, setAccessibilityIssues] = useState<string[]>([]);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [voiceControlActive, setVoiceControlActive] = useState(false);
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [showAnnouncements, setShowAnnouncements] = useState(false);
  const focusTrapRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Auto-detect accessibility preferences
  useEffect(() => {
    if (!autoDetect) return;

    const detectPreferences = () => {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Check for high contrast preference
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      
      // Check for large text preference
      const prefersLargeText = window.matchMedia('(min-resolution: 2dppx)').matches;

      // Check for dark mode preference
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

      setSettings(prev => ({
        ...prev,
        reducedMotion: prefersReducedMotion,
        highContrast: prefersHighContrast,
        largeText: prefersLargeText,
        darkMode: prefersDarkMode
      }));
    };

    detectPreferences();

    // Listen for preference changes
    const mediaQueries = [
      window.matchMedia('(prefers-reduced-motion: reduce)'),
      window.matchMedia('(prefers-contrast: high)'),
      window.matchMedia('(min-resolution: 2dppx)'),
      window.matchMedia('(prefers-color-scheme: dark)')
    ];

    const handleChange = () => detectPreferences();
    mediaQueries.forEach(query => query.addEventListener('change', handleChange));

    return () => {
      mediaQueries.forEach(query => query.removeEventListener('change', handleChange));
    };
  }, [autoDetect]);

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    // High contrast mode
    if (settings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--background-color', '#000000');
      root.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--background-color');
      root.style.removeProperty('--accent-color');
    }

    // Large text mode
    if (settings.largeText) {
      root.style.setProperty('--base-font-size', '20px');
      root.style.setProperty('--heading-scale', '1.3');
    } else {
      root.style.removeProperty('--base-font-size');
      root.style.removeProperty('--heading-scale');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
      root.style.setProperty('--animation-duration', '0.01ms');
    } else {
      root.classList.remove('reduced-motion');
      root.style.removeProperty('--animation-duration');
    }

    // Focus indicator
    if (settings.focusIndicator) {
      root.classList.add('focus-visible');
      root.style.setProperty('--focus-outline', '3px solid #22ddd2');
    } else {
      root.classList.remove('focus-visible');
      root.style.removeProperty('--focus-outline');
    }

    // Color blind support
    if (settings.colorBlind) {
      root.classList.add('color-blind-support');
      root.style.setProperty('--color-blind-filter', 'grayscale(100%) contrast(150%)');
    } else {
      root.classList.remove('color-blind-support');
      root.style.removeProperty('--color-blind-filter');
    }

    // Dyslexia support
    if (settings.dyslexia) {
      root.classList.add('dyslexia-support');
      root.style.setProperty('--font-family', 'OpenDyslexic, Arial, sans-serif');
      root.style.setProperty('--line-height', '1.8');
      root.style.setProperty('--letter-spacing', '0.1em');
    } else {
      root.classList.remove('dyslexia-support');
      root.style.removeProperty('--font-family');
      root.style.removeProperty('--line-height');
      root.style.removeProperty('--letter-spacing');
    }

    // High saturation
    if (settings.highSaturation) {
      root.style.setProperty('--saturation-filter', 'saturate(200%)');
    } else {
      root.style.removeProperty('--saturation-filter');
    }

    // Dark mode
    if (settings.darkMode) {
      root.classList.add('dark-mode');
      root.style.setProperty('--color-scheme', 'dark');
    } else {
      root.classList.remove('dark-mode');
      root.style.removeProperty('--color-scheme');
    }

    // Apply custom font size
    root.style.setProperty('--custom-font-size', `${fontSize}px`);
    root.style.setProperty('--custom-line-height', lineHeight.toString());
    root.style.setProperty('--custom-letter-spacing', `${letterSpacing}px`);

  }, [settings, fontSize, lineHeight, letterSpacing]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (settings.keyboardOnly) {
        // Enhanced keyboard navigation
        switch (e.key) {
          case 'Tab':
            // Enhanced tab navigation with focus indicators
            break;
          case 'Escape':
            // Close modals, dropdowns, etc.
            if (isVisible) setIsVisible(false);
            break;
          case 'Enter':
          case ' ':
            // Enhanced enter/space key support
            break;
        }
      }
    };

    if (settings.keyboardOnly) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [settings.keyboardOnly, isVisible]);

  // Focus management
  useEffect(() => {
    const handleFocusChange = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      setCurrentFocus(target);
      
      // Announce focus changes for screen readers
      if (settings.screenReader && target) {
        const announcement = `Focused on ${target.textContent || target.tagName.toLowerCase()}`;
        announceToScreenReader(announcement);
      }
    };

    document.addEventListener('focusin', handleFocusChange);
    return () => document.removeEventListener('focusin', handleFocusChange);
  }, [settings.screenReader]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!settings.screenReader) return;

    // Create live region for announcements
    let liveRegion = document.getElementById('accessibility-live-region');
    if (!liveRegion) {
      liveRegion = document.createElement('div');
      liveRegion.id = 'accessibility-live-region';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.style.position = 'absolute';
      liveRegion.style.left = '-10000px';
      liveRegion.style.width = '1px';
      liveRegion.style.height = '1px';
      liveRegion.style.overflow = 'hidden';
      document.body.appendChild(liveRegion);
    }

    liveRegion.textContent = message;
    setAnnouncements(prev => [...prev, message]);
  }, [settings.screenReader]);

  // Voice control support
  useEffect(() => {
    if (!enableVoiceControl || !settings.screenReader) return;

    const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event: any) => {
      const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
      
      if (transcript.includes('open accessibility')) {
        setIsVisible(true);
        announceToScreenReader('Accessibility panel opened');
      } else if (transcript.includes('close accessibility')) {
        setIsVisible(false);
        announceToScreenReader('Accessibility panel closed');
      } else if (transcript.includes('high contrast')) {
        setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
        announceToScreenReader(`High contrast ${!settings.highContrast ? 'enabled' : 'disabled'}`);
      } else if (transcript.includes('large text')) {
        setSettings(prev => ({ ...prev, largeText: !prev.largeText }));
        announceToScreenReader(`Large text ${!settings.largeText ? 'enabled' : 'disabled'}`);
      }
    };

    if (voiceControlActive) {
      recognition.start();
    }

    return () => {
      recognition.stop();
    };
  }, [enableVoiceControl, settings.screenReader, voiceControlActive, announceToScreenReader]);

  // Accessibility audit
  const runAccessibilityAudit = useCallback(() => {
    const issues: string[] = [];
    
    // Check for missing alt text
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        issues.push(`Image missing alt text: ${img.src}`);
      }
    });

    // Check for proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        issues.push(`Heading level skipped: ${heading.tagName} after h${previousLevel}`);
      }
      previousLevel = level;
    });

    // Check for proper form labels
    const formControls = document.querySelectorAll('input, select, textarea');
    formControls.forEach(control => {
      const id = control.getAttribute('id');
      const label = document.querySelector(`label[for="${id}"]`);
      const ariaLabel = control.getAttribute('aria-label');
      if (!label && !ariaLabel) {
        issues.push(`Form control missing label: ${control.tagName}`);
      }
    });

    // Check for color contrast (simplified)
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    textElements.forEach(element => {
      const style = window.getComputedStyle(element);
      const color = style.color;
      const backgroundColor = style.backgroundColor;
      // This is a simplified check - in production, use a proper contrast checker
      if (color === backgroundColor) {
        issues.push(`Potential contrast issue: ${element.textContent?.substring(0, 50)}`);
      }
    });

    setAccessibilityIssues(issues);
  }, []);

  // Toggle voice control
  const toggleVoiceControl = useCallback(() => {
    setVoiceControlActive(!voiceControlActive);
    if (!voiceControlActive) {
      announceToScreenReader('Voice control activated. Say "open accessibility" to open the panel.');
    } else {
      announceToScreenReader('Voice control deactivated');
    }
  }, [voiceControlActive, announceToScreenReader]);

  // Reset all settings
  const resetSettings = useCallback(() => {
    setSettings({
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      focusIndicator: true,
      colorBlind: false,
      dyslexia: false,
      keyboardOnly: false,
      highSaturation: false,
      darkMode: false
    });
    setFontSize(16);
    setLineHeight(1.5);
    setLetterSpacing(0);
    announceToScreenReader('All accessibility settings reset to default');
  }, [announceToScreenReader]);

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 left-6 z-50 bg-zion-purple hover:bg-zion-purple/80 text-white font-bold py-3 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open accessibility panel"
        aria-expanded={isVisible}
      >
        <Accessibility className="w-5 h-5" />
        <span className="hidden sm:inline">Accessibility</span>
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.8 }}
            className="fixed bottom-24 left-6 z-40 w-80 max-h-96 bg-zion-slate/95 backdrop-blur-xl border border-zion-purple/30 rounded-2xl shadow-2xl overflow-hidden"
            ref={focusTrapRef}
            role="dialog"
            aria-labelledby="accessibility-panel-title"
            aria-describedby="accessibility-panel-description"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 p-4 border-b border-zion-purple/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Accessibility className="w-5 h-5 text-zion-purple" />
                  <h3 id="accessibility-panel-title" className="text-white font-bold">
                    Accessibility Settings
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowSettings(!showSettings)}
                    className="p-2 hover:bg-zion-purple/20 rounded-lg transition-colors"
                    aria-label="Accessibility settings"
                  >
                    <Settings className="w-4 h-4 text-zion-purple" />
                  </button>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="p-2 hover:bg-zion-purple/20 rounded-lg transition-colors"
                    aria-label="Close accessibility panel"
                  >
                    <X className="w-4 h-4 text-zion-purple" />
                  </button>
                </div>
              </div>
              
              <p id="accessibility-panel-description" className="text-xs text-zion-purple mt-2">
                Customize your browsing experience for better accessibility
              </p>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-64 overflow-y-auto">
              {/* Quick Settings */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold text-sm flex items-center gap-2">
                  <Palette className="w-4 h-4 text-zion-purple" />
                  Visual Settings
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center gap-2 text-xs text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.highContrast}
                      onChange={(e) => setSettings(prev => ({ ...prev, highContrast: e.target.checked }))}
                      className="w-4 h-4 text-zion-purple bg-zion-slate border-zion-purple/30 rounded focus:ring-zion-purple"
                    />
                    High Contrast
                  </label>
                  <label className="flex items-center gap-2 text-xs text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.largeText}
                      onChange={(e) => setSettings(prev => ({ ...prev, largeText: e.target.checked }))}
                      className="w-4 h-4 text-zion-purple bg-zion-slate border-zion-purple/30 rounded focus:ring-zion-purple"
                    />
                    Large Text
                  </label>
                  <label className="flex items-center gap-2 text-xs text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.reducedMotion}
                      onChange={(e) => setSettings(prev => ({ ...prev, reducedMotion: e.target.checked }))}
                      className="w-4 h-4 text-zion-purple bg-zion-slate border-zion-purple/30 rounded focus:ring-zion-purple"
                    />
                    Reduced Motion
                  </label>
                  <label className="flex items-center gap-2 text-xs text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.focusIndicator}
                      onChange={(e) => setSettings(prev => ({ ...prev, focusIndicator: e.target.checked }))}
                      className="w-4 h-4 text-zion-purple bg-zion-slate border-zion-purple/30 rounded focus:ring-zion-purple"
                    />
                    Focus Indicator
                  </label>
                </div>
              </div>

              {/* Font Controls */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold text-sm flex items-center gap-2">
                  <Type className="w-4 h-4 text-zion-purple" />
                  Text Settings
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-zion-purple">Font Size: {fontSize}px</span>
                    <input
                      type="range"
                      min="12"
                      max="24"
                      value={fontSize}
                      onChange={(e) => setFontSize(Number(e.target.value))}
                      className="w-20 h-2 bg-zion-slate rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zion-purple">Line Height: {lineHeight}</span>
                    <input
                      type="range"
                      min="1.2"
                      max="2.5"
                      step="0.1"
                      value={lineHeight}
                      onChange={(e) => setLineHeight(Number(e.target.value))}
                      className="w-20 h-2 bg-zion-slate rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>
                </div>
              </div>

              {/* Advanced Settings */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold text-sm flex items-center gap-2">
                  <Settings className="w-4 h-4 text-zion-purple" />
                  Advanced Features
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center gap-2 text-xs text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.screenReader}
                      onChange={(e) => setSettings(prev => ({ ...prev, screenReader: e.target.checked }))}
                      className="w-4 h-4 text-zion-purple bg-zion-slate border-zion-purple/30 rounded focus:ring-zion-purple"
                    />
                    Screen Reader
                  </label>
                  <label className="flex items-center gap-2 text-xs text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.keyboardOnly}
                      onChange={(e) => setSettings(prev => ({ ...prev, keyboardOnly: e.target.checked }))}
                      className="w-4 h-4 text-zion-purple bg-zion-slate border-zion-purple/30 rounded focus:ring-zion-purple"
                    />
                    Keyboard Only
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button
                  onClick={runAccessibilityAudit}
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple/80 hover:to-zion-cyan/80 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
                >
                  Run Accessibility Audit
                </button>
                
                {enableVoiceControl && (
                  <button
                    onClick={toggleVoiceControl}
                    className={`w-full font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                      voiceControlActive
                        ? 'bg-red-600 hover:bg-red-700 text-white'
                        : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                  >
                    {voiceControlActive ? 'Disable Voice Control' : 'Enable Voice Control'}
                  </button>
                )}
                
                <button
                  onClick={resetSettings}
                  className="w-full bg-zion-slate hover:bg-zion-slate/80 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
                >
                  Reset to Default
                </button>
              </div>

              {/* Accessibility Issues */}
              {accessibilityIssues.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-white font-semibold text-sm flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                    Issues Found ({accessibilityIssues.length})
                  </h4>
                  <div className="max-h-32 overflow-y-auto space-y-1">
                    {accessibilityIssues.map((issue, index) => (
                      <div key={index} className="text-xs text-yellow-300 bg-yellow-500/10 p-2 rounded">
                        {issue}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Announcements */}
              {announcements.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-white font-semibold text-sm flex items-center gap-2">
                    <Info className="w-4 h-4 text-zion-cyan" />
                    Recent Announcements
                  </h4>
                  <div className="max-h-32 overflow-y-auto space-y-1">
                    {announcements.slice(-3).map((announcement, index) => (
                      <div key={index} className="text-xs text-zion-cyan bg-zion-cyan/10 p-2 rounded">
                        {announcement}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Live region for screen reader announcements */}
      <div
        id="accessibility-live-region"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />
    </>
  );
};

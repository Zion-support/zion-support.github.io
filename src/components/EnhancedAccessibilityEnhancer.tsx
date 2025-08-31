import React, { useEffect, useState, useCallback } from 'react';
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
  Monitor,
  Smartphone,
  Accessibility,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showPanel?: boolean;
  autoHide?: boolean;
}

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showPanel = true,
  autoHide = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: true,
    colorBlindness: 'none',
    fontSize: 'medium'
  });

  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [focusHistory, setFocusHistory] = useState<HTMLElement[]>([]);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  // Apply accessibility settings to document
  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    const body = document.body;

    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
      body.style.setProperty('--high-contrast', '1');
    } else {
      root.classList.remove('high-contrast');
      body.style.setProperty('--high-contrast', '0');
    }

    // Large text
    if (settings.largeText) {
      root.classList.add('large-text');
      body.style.setProperty('--large-text', '1');
    } else {
      root.classList.remove('large-text');
      body.style.setProperty('--large-text', '0');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
      body.style.setProperty('--reduced-motion', '1');
    } else {
      root.classList.remove('reduced-motion');
      body.style.setProperty('--reduced-motion', '0');
    }

    // Focus indicators
    if (settings.focusIndicators) {
      root.classList.add('focus-visible');
      body.style.setProperty('--focus-visible', '1');
    } else {
      root.classList.remove('focus-visible');
      body.style.setProperty('--focus-visible', '0');
    }

    // Color blindness
    root.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
    if (settings.colorBlindness !== 'none') {
      root.classList.add(settings.colorBlindness);
    }

    // Font size
    root.classList.remove('text-small', 'text-medium', 'text-large', 'text-xlarge');
    root.classList.add(`text-${settings.fontSize}`);
  }, [settings, enabled]);

  // Enhanced keyboard navigation
  useEffect(() => {
    if (!enabled || !settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      
      // Skip if target is input, textarea, or contenteditable
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.contentEditable === 'true') {
        return;
      }

      switch (event.key) {
        case 'Tab':
          // Enhanced tab navigation with visual feedback
          if (event.shiftKey) {
            // Shift+Tab: navigate backwards
            setFocusHistory(prev => [...prev.slice(0, -1)]);
          } else {
            // Tab: navigate forwards
            setFocusHistory(prev => [...prev, target]);
          }
          setCurrentFocus(target);
          break;

        case 'Escape':
          // Close modals, dropdowns, etc.
          const modals = document.querySelectorAll('[role="dialog"], [data-modal="true"]');
          modals.forEach(modal => {
            if (modal instanceof HTMLElement) {
              modal.style.display = 'none';
            }
          });
          break;

        case 'Enter':
        case ' ':
          // Activate buttons and links
          if (target.tagName === 'BUTTON' || target.tagName === 'A') {
            event.preventDefault();
            target.click();
          }
          break;

        case 'ArrowUp':
        case 'ArrowDown':
          // Navigate through lists, menus, etc.
          const listItems = target.closest('ul, ol, [role="list"], [role="menu"]');
          if (listItems) {
            event.preventDefault();
            const items = Array.from(listItems.querySelectorAll('li, [role="listitem"], [role="menuitem"]'));
            const currentIndex = items.indexOf(target);
            let nextIndex = 0;

            if (event.key === 'ArrowUp') {
              nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
            } else {
              nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
            }

            (items[nextIndex] as HTMLElement).focus();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enabled, settings.keyboardNavigation]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!settings.screenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, [settings.screenReader]);

  // Focus management
  useEffect(() => {
    if (!enabled) return;

    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      setCurrentFocus(target);
      
      // Announce focus changes to screen reader
      if (settings.screenReader) {
        const label = target.getAttribute('aria-label') || 
                     target.getAttribute('title') || 
                     target.textContent?.trim() || 
                     target.tagName.toLowerCase();
        announceToScreenReader(`Focused on ${label}`);
      }

      // Enhanced focus indicators
      if (settings.focusIndicators) {
        target.style.outline = '3px solid #06b6d4';
        target.style.outlineOffset = '2px';
        
        setTimeout(() => {
          if (target.style.outline === '3px solid #06b6d4') {
            target.style.outline = '';
            target.style.outlineOffset = '';
          }
        }, 2000);
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      target.style.outline = '';
      target.style.outlineOffset = '';
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [enabled, settings.screenReader, settings.focusIndicators, announceToScreenReader]);

  // Show accessibility panel after delay
  useEffect(() => {
    if (!enabled || !showPanel) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
      if (autoHide) {
        setTimeout(() => setIsVisible(false), 15000);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [enabled, showPanel, autoHide]);

  if (!enabled) return null;

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    
    // Announce changes to screen reader
    if (settings.screenReader) {
      announceToScreenReader(`${key.replace(/([A-Z])/g, ' $1').toLowerCase()} ${value ? 'enabled' : 'disabled'}`);
    }
  };

  const getAccessibilityScore = () => {
    let score = 0;
    if (settings.highContrast) score += 20;
    if (settings.largeText) score += 20;
    if (settings.reducedMotion) score += 15;
    if (settings.screenReader) score += 15;
    if (settings.keyboardNavigation) score += 15;
    if (settings.focusIndicators) score += 15;
    return Math.min(100, score);
  };

  const score = getAccessibilityScore();
  const scoreColor = score >= 80 ? 'text-green-500' : score >= 60 ? 'text-yellow-500' : 'text-red-500';
  const scoreIcon = score >= 80 ? <CheckCircle className="w-4 h-4" /> : 
                   score >= 60 ? <AlertTriangle className="w-4 h-4" /> : 
                   <Info className="w-4 h-4" />;

  return (
    <>
      {/* Accessibility Toggle Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setShowSettings(!showSettings)}
            className="fixed top-20 right-4 z-50 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            aria-label="Accessibility settings"
            title="Accessibility Settings"
          >
            <Accessibility className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Accessibility Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-l border-slate-700 shadow-2xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700">
              <div className="flex items-center gap-2">
                <Accessibility className="w-5 h-5 text-cyan-400" />
                <span className="font-semibold text-white">Accessibility</span>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="p-1 hover:bg-slate-700 rounded transition-colors"
                aria-label="Close accessibility panel"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>

            {/* Accessibility Score */}
            <div className="p-4 border-b border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Accessibility Score</span>
                {scoreIcon}
              </div>
              <div className={`text-2xl font-bold ${scoreColor}`}>{score}/100</div>
              <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                <motion.div
                  className={`h-2 rounded-full ${score >= 80 ? 'bg-green-500' : score >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${score}%` }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </div>

            {/* Settings */}
            <div className="p-4 space-y-4">
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Contrast className="w-4 h-4 text-cyan-400" />
                  <span className="text-white">High Contrast</span>
                </div>
                <button
                  onClick={() => updateSetting('highContrast', !settings.highContrast)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.highContrast ? 'bg-cyan-500' : 'bg-slate-600'
                  }`}
                  aria-label={`High contrast ${settings.highContrast ? 'enabled' : 'disabled'}`}
                >
                  <motion.div
                    className="w-4 h-4 bg-white rounded-full ml-1"
                    animate={{ x: settings.highContrast ? 24 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </button>
              </div>

              {/* Large Text */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Type className="w-4 h-4 text-cyan-400" />
                  <span className="text-white">Large Text</span>
                </div>
                <button
                  onClick={() => updateSetting('largeText', !settings.largeText)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.largeText ? 'bg-cyan-500' : 'bg-slate-600'
                  }`}
                  aria-label={`Large text ${settings.largeText ? 'enabled' : 'disabled'}`}
                >
                  <motion.div
                    className="w-4 h-4 bg-white rounded-full ml-1"
                    animate={{ x: settings.largeText ? 24 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </button>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span className="text-white">Reduced Motion</span>
                </div>
                <button
                  onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-cyan-500' : 'bg-slate-600'
                  }`}
                  aria-label={`Reduced motion ${settings.reducedMotion ? 'enabled' : 'disabled'}`}
                >
                  <motion.div
                    className="w-4 h-4 bg-white rounded-full ml-1"
                    animate={{ x: settings.reducedMotion ? 24 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </button>
              </div>

              {/* Screen Reader */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-cyan-400" />
                  <span className="text-white">Screen Reader</span>
                </div>
                <button
                  onClick={() => updateSetting('screenReader', !settings.screenReader)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.screenReader ? 'bg-cyan-500' : 'bg-slate-600'
                  }`}
                  aria-label={`Screen reader ${settings.screenReader ? 'enabled' : 'disabled'}`}
                >
                  <motion.div
                    className="w-4 h-4 bg-white rounded-full ml-1"
                    animate={{ x: settings.screenReader ? 24 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </button>
              </div>

              {/* Keyboard Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Keyboard className="w-4 h-4 text-cyan-400" />
                  <span className="text-white">Keyboard Navigation</span>
                </div>
                <button
                  onClick={() => updateSetting('keyboardNavigation', !settings.keyboardNavigation)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.keyboardNavigation ? 'bg-cyan-500' : 'bg-slate-600'
                  }`}
                  aria-label={`Keyboard navigation ${settings.keyboardNavigation ? 'enabled' : 'disabled'}`}
                >
                  <motion.div
                    className="w-4 h-4 bg-white rounded-full ml-1"
                    animate={{ x: settings.keyboardNavigation ? 24 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </button>
              </div>

              {/* Focus Indicators */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MousePointer className="w-4 h-4 text-cyan-400" />
                  <span className="text-white">Focus Indicators</span>
                </div>
                <button
                  onClick={() => updateSetting('focusIndicators', !settings.focusIndicators)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.focusIndicators ? 'bg-cyan-500' : 'bg-slate-600'
                  }`}
                  aria-label={`Focus indicators ${settings.focusIndicators ? 'enabled' : 'disabled'}`}
                >
                  <motion.div
                    className="w-4 h-4 bg-white rounded-full ml-1"
                    animate={{ x: settings.focusIndicators ? 24 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </button>
              </div>

              {/* Font Size */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Type className="w-4 h-4 text-cyan-400" />
                  <span className="text-white">Font Size</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {(['small', 'medium', 'large', 'xlarge'] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => updateSetting('fontSize', size)}
                      className={`px-3 py-2 text-xs rounded transition-colors ${
                        settings.fontSize === size
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                      }`}
                      aria-label={`Font size ${size}`}
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Blindness */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span className="text-white">Color Blindness</span>
                </div>
                <select
                  value={settings.colorBlindness}
                  onChange={(e) => updateSetting('colorBlindness', e.target.value)}
                  className="w-full px-3 py-2 bg-slate-700 text-white rounded border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  aria-label="Color blindness filter"
                >
                  <option value="none">None</option>
                  <option value="protanopia">Protanopia (Red-Blind)</option>
                  <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                  <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                </select>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-t border-slate-700">
              <h3 className="text-sm font-medium text-gray-400 mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <button
                  onClick={() => {
                    updateSetting('highContrast', true);
                    updateSetting('largeText', true);
                    updateSetting('focusIndicators', true);
                  }}
                  className="w-full px-3 py-2 bg-cyan-500/20 text-cyan-400 rounded hover:bg-cyan-500/30 transition-colors text-sm"
                >
                  Enable All Accessibility Features
                </button>
                <button
                  onClick={() => {
                    updateSetting('highContrast', false);
                    updateSetting('largeText', false);
                    updateSetting('reducedMotion', false);
                    updateSetting('screenReader', false);
                    updateSetting('keyboardNavigation', false);
                    updateSetting('focusIndicators', false);
                    updateSetting('colorBlindness', 'none');
                    updateSetting('fontSize', 'medium');
                  }}
                  className="w-full px-3 py-2 bg-slate-700 text-gray-300 rounded hover:bg-slate-600 transition-colors text-sm"
                >
                  Reset to Default
                </button>
              </div>
            </div>

            {/* Current Focus Info */}
            {currentFocus && (
              <div className="p-4 border-t border-slate-700">
                <h3 className="text-sm font-medium text-gray-400 mb-2">Current Focus</h3>
                <div className="text-xs text-gray-300 bg-slate-800 p-2 rounded">
                  <div><strong>Element:</strong> {currentFocus.tagName.toLowerCase()}</div>
                  <div><strong>Text:</strong> {currentFocus.textContent?.slice(0, 50) || 'No text content'}</div>
                  <div><strong>Role:</strong> {currentFocus.getAttribute('role') || 'No role'}</div>
                  <div><strong>Label:</strong> {currentFocus.getAttribute('aria-label') || 'No label'}</div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Only Class */}
      <style jsx>{`
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
      `}</style>
    </>
  );
};
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
  Smartphone,
  Monitor,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info,
  Accessibility,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highSaturation: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  zoomLevel: number;
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showPanel?: boolean;
  onSettingsChange?: (settings: AccessibilitySettings) => void;
}

const defaultSettings: AccessibilitySettings = {
  highContrast: false,
  largeText: false,
  reducedMotion: false,
  highSaturation: false,
  focusIndicator: true,
  screenReader: false,
  keyboardNavigation: true,
  zoomLevel: 100
};

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showPanel = false,
  onSettingsChange
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const [isPanelOpen, setIsPanelOpen] = useState(showPanel);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [isKeyboardUser, setIsKeyboardUser] = useState(false);

  // Initialize accessibility features
  useEffect(() => {
    if (!enabled) return;

    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.warn('Failed to parse saved accessibility settings');
      }
    }

    // Apply initial settings
    applyAccessibilitySettings(settings);

    // Detect keyboard user
    const handleKeyDown = () => setIsKeyboardUser(true);
    const handleMouseDown = () => setIsKeyboardUser(false);
    
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    // Focus management
    const handleFocusChange = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      setCurrentFocus(target);
      
      if (settings.focusIndicator) {
        target.style.outline = '2px solid #06b6d4';
        target.style.outlineOffset = '2px';
      }
    };

    const handleFocusOut = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      target.style.outline = '';
      target.style.outlineOffset = '';
    };

    document.addEventListener('focusin', handleFocusChange);
    document.addEventListener('focusout', handleFocusOut);

    // Screen reader announcements
    const announcementDiv = document.createElement('div');
    announcementDiv.setAttribute('aria-live', 'polite');
    announcementDiv.setAttribute('aria-atomic', 'true');
    announcementDiv.className = 'sr-only';
    document.body.appendChild(announcementDiv);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('focusin', handleFocusChange);
      document.removeEventListener('focusout', handleFocusOut);
      document.body.removeChild(announcementDiv);
    };
  }, [enabled, settings.focusIndicator]);

  // Apply accessibility settings to the document
  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.style.setProperty('--color-primary', '#ffffff');
      root.style.setProperty('--color-secondary', '#000000');
      root.style.setProperty('--color-background', '#000000');
      root.style.setProperty('--color-text', '#ffffff');
    } else {
      root.style.removeProperty('--color-primary');
      root.style.removeProperty('--color-secondary');
      root.style.removeProperty('--color-background');
      root.style.removeProperty('--color-text');
    }

    // Large text
    if (newSettings.largeText) {
      root.style.fontSize = '18px';
      root.style.setProperty('--text-scale', '1.2');
    } else {
      root.style.fontSize = '';
      root.style.removeProperty('--text-scale');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--motion-reduced', 'true');
    } else {
      root.style.removeProperty('--motion-reduced');
    }

    // High saturation
    if (newSettings.highSaturation) {
      root.style.setProperty('--saturation-high', 'true');
    } else {
      root.style.removeProperty('--saturation-high');
    }

    // Zoom level
    root.style.setProperty('--zoom-level', `${newSettings.zoomLevel}%`);

    // Save settings to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    
    // Notify parent component
    onSettingsChange?.(newSettings);
  }, [onSettingsChange]);

  // Handle setting changes
  const handleSettingChange = useCallback((key: keyof AccessibilitySettings, value: boolean | number) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
    
    // Announce changes for screen readers
    if (settings.screenReader) {
      announceToScreenReader(`Setting ${key} changed to ${value}`);
    }
  }, [settings, applyAccessibilitySettings]);

  // Announce to screen reader
  const announceToScreenReader = useCallback((message: string) => {
    const announcementDiv = document.querySelector('[aria-live="polite"]') as HTMLElement;
    if (announcementDiv) {
      announcementDiv.textContent = message;
      setTimeout(() => {
        announcementDiv.textContent = '';
      }, 1000);
    }
    
    // Also add to announcements list for visual display
    setAnnouncements(prev => [...prev, message]);
    setTimeout(() => {
      setAnnouncements(prev => prev.filter(announcement => announcement !== message));
    }, 3000);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    if (!enabled || !settings.keyboardNavigation) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      // Alt + A: Toggle accessibility panel
      if (e.altKey && e.key === 'a') {
        e.preventDefault();
        setIsPanelOpen(prev => !prev);
      }
      
      // Alt + H: Toggle high contrast
      if (e.altKey && e.key === 'h') {
        e.preventDefault();
        handleSettingChange('highContrast', !settings.highContrast);
      }
      
      // Alt + L: Toggle large text
      if (e.altKey && e.key === 'l') {
        e.preventDefault();
        handleSettingChange('largeText', !settings.largeText);
      }
      
      // Alt + M: Toggle reduced motion
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        handleSettingChange('reducedMotion', !settings.reducedMotion);
      }
      
      // Alt + Plus: Zoom in
      if (e.altKey && e.key === '=') {
        e.preventDefault();
        handleSettingChange('zoomLevel', Math.min(settings.zoomLevel + 10, 200));
      }
      
      // Alt + Minus: Zoom out
      if (e.altKey && e.key === '-') {
        e.preventDefault();
        handleSettingChange('zoomLevel', Math.max(settings.zoomLevel - 10, 50));
      }
      
      // Alt + 0: Reset zoom
      if (e.altKey && e.key === '0') {
        e.preventDefault();
        handleSettingChange('zoomLevel', 100);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [enabled, settings, handleSettingChange]);

  // Skip to main content functionality
  const handleSkipToContent = useCallback(() => {
    const mainContent = document.querySelector('main') || document.querySelector('#main-content');
    if (mainContent) {
      (mainContent as HTMLElement).focus();
      announceToScreenReader('Moved to main content');
    }
  }, [announceToScreenReader]);

  if (!enabled) return null;

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded focus:outline-none"
        onClick={handleSkipToContent}
      >
        Skip to main content
      </a>

      {/* Accessibility Panel Toggle Button */}
      <button
        onClick={() => setIsPanelOpen(prev => !prev)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Accessibility settings"
        aria-expanded={isPanelOpen}
        aria-controls="accessibility-panel"
      >
        <Accessibility className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isPanelOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3 }}
            id="accessibility-panel"
            className="fixed top-0 right-0 h-full w-96 bg-white dark:bg-slate-800 shadow-2xl z-40 overflow-y-auto"
            role="dialog"
            aria-labelledby="accessibility-panel-title"
            aria-modal="true"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 id="accessibility-panel-title" className="text-xl font-bold text-gray-900 dark:text-white">
                  Accessibility Settings
                </h2>
                <button
                  onClick={() => setIsPanelOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Settings */}
              <div className="space-y-6">
                {/* Visual Settings */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Visual Settings
                  </h3>
                  <div className="space-y-4">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.highContrast}
                        onChange={(e) => handleSettingChange('highContrast', e.target.checked)}
                        className="w-4 h-4 text-cyan-500 border-gray-300 rounded focus:ring-cyan-500"
                      />
                      <span className="text-gray-700 dark:text-gray-300">High Contrast</span>
                      <Contrast className="w-4 h-4 text-gray-500" />
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.largeText}
                        onChange={(e) => handleSettingChange('largeText', e.target.checked)}
                        className="w-4 h-4 text-cyan-500 border-gray-300 rounded focus:ring-cyan-500"
                      />
                      <span className="text-gray-700 dark:text-gray-300">Large Text</span>
                      <Type className="w-4 h-4 text-gray-500" />
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.highSaturation}
                        onChange={(e) => handleSettingChange('highSaturation', e.target.checked)}
                        className="w-4 h-4 text-cyan-500 border-gray-300 rounded focus:ring-cyan-500"
                      />
                      <span className="text-gray-700 dark:text-gray-300">High Saturation</span>
                      <Eye className="w-4 h-4 text-gray-500" />
                    </label>
                  </div>
                </div>

                {/* Motion Settings */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Motion Settings
                  </h3>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.reducedMotion}
                      onChange={(e) => handleSettingChange('reducedMotion', e.target.checked)}
                      className="w-4 h-4 text-cyan-500 border-gray-300 rounded focus:ring-cyan-500"
                    />
                    <span className="text-gray-700 dark:text-gray-300">Reduce Motion</span>
                    <EyeOff className="w-4 h-4 text-gray-500" />
                  </label>
                </div>

                {/* Navigation Settings */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Navigation Settings
                  </h3>
                  <div className="space-y-4">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.focusIndicator}
                        onChange={(e) => handleSettingChange('focusIndicator', e.target.checked)}
                        className="w-4 h-4 text-cyan-500 border-gray-300 rounded focus:ring-cyan-500"
                      />
                      <span className="text-gray-700 dark:text-gray-300">Focus Indicators</span>
                      <MousePointer className="w-4 h-4 text-gray-500" />
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.keyboardNavigation}
                        onChange={(e) => handleSettingChange('keyboardNavigation', e.target.checked)}
                        className="w-4 h-4 text-cyan-500 border-gray-300 rounded focus:ring-cyan-500"
                      />
                      <span className="text-gray-700 dark:text-gray-300">Keyboard Navigation</span>
                      <Keyboard className="w-4 h-4 text-gray-500" />
                    </label>
                  </div>
                </div>

                {/* Zoom Control */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Zoom Control
                  </h3>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleSettingChange('zoomLevel', Math.max(settings.zoomLevel - 10, 50))}
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      aria-label="Zoom out"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    
                    <span className="text-gray-700 dark:text-gray-300 min-w-[60px] text-center">
                      {settings.zoomLevel}%
                    </span>
                    
                    <button
                      onClick={() => handleSettingChange('zoomLevel', Math.min(settings.zoomLevel + 10, 200))}
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      aria-label="Zoom in"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={() => handleSettingChange('zoomLevel', 100)}
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      aria-label="Reset zoom"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Keyboard Shortcuts */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Keyboard Shortcuts
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Alt + A</kbd> Toggle panel</div>
                    <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Alt + H</kbd> High contrast</div>
                    <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Alt + L</kbd> Large text</div>
                    <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Alt + M</kbd> Reduce motion</div>
                    <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Alt + +/-</kbd> Zoom in/out</div>
                    <div><kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Alt + 0</kbd> Reset zoom</div>
                  </div>
                </div>

                {/* Reset Button */}
                <button
                  onClick={() => {
                    setSettings(defaultSettings);
                    applyAccessibilitySettings(defaultSettings);
                    announceToScreenReader('Accessibility settings reset to default');
                  }}
                  className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Reset to Default
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Announcements */}
      <AnimatePresence>
        {announcements.length > 0 && (
          <div className="fixed top-4 left-4 z-50 space-y-2">
            {announcements.map((announcement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="bg-cyan-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2"
              >
                <CheckCircle className="w-4 h-4" />
                <span>{announcement}</span>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Focus indicator styles */}
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
        
        [data-motion-reduced="true"] * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        [data-zoom-level] {
          transform: scale(var(--zoom-level, 1));
          transform-origin: top left;
        }
      `}</style>
    </>
  );
};
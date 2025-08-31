import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  ZoomIn, 
  ZoomOut, 
  Contrast, 
  Sun, 
  Moon,
  Monitor,
  Smartphone,
  Tablet,
  Accessibility,
  Keyboard,
  MousePointer,
  Highlighter,
  Palette,
  Type,
  Braille,
  Languages,
  Settings,
  X,
  Check,
  AlertCircle,
  Info,
  HelpCircle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  language: string;
  theme: 'light' | 'dark' | 'auto';
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showPanel?: boolean;
  autoDetect?: boolean;
}

export default function EnhancedAccessibilityEnhancer({ 
  enabled = true, 
  showPanel = false,
  autoDetect = true 
}: AccessibilityEnhancerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 'medium',
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: true,
    focusIndicator: true,
    colorBlindness: 'none',
    language: 'en',
    theme: 'auto'
  });
  
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [focusHistory, setFocusHistory] = useState<HTMLElement[]>([]);
  const [accessibilityIssues, setAccessibilityIssues] = useState<string[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  
  const focusRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);

  // Auto-detect accessibility preferences
  useEffect(() => {
    if (!autoDetect || !enabled) return;

    // Detect system preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');

    setSettings(prev => ({
      ...prev,
      reducedMotion: mediaQuery.matches,
      theme: prefersDark.matches ? 'dark' : 'light',
      highContrast: prefersHighContrast.matches
    }));

    // Listen for changes
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
    };

    const handleThemeChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, theme: e.matches ? 'dark' : 'light' }));
    };

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, highContrast: e.matches }));
    };

    mediaQuery.addEventListener('change', handleMotionChange);
    prefersDark.addEventListener('change', handleThemeChange);
    prefersHighContrast.addEventListener('change', handleContrastChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      prefersDark.removeEventListener('change', handleThemeChange);
      prefersHighContrast.removeEventListener('change', handleContrastChange);
    };
  }, [autoDetect, enabled]);

  // Apply accessibility settings
  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    const body = document.body;

    // Apply high contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
      body.style.filter = 'contrast(1.5) saturate(1.2)';
    } else {
      root.classList.remove('high-contrast');
      body.style.filter = '';
    }

    // Apply font size
    const fontSizeMap = {
      small: '0.875rem',
      medium: '1rem',
      large: '1.125rem',
      xlarge: '1.25rem'
    };
    root.style.fontSize = fontSizeMap[settings.fontSize];

    // Apply reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.01ms');
      root.style.setProperty('--transition-duration', '0.01ms');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }

    // Apply color blindness filters
    const colorBlindnessFilters = {
      none: '',
      protanopia: 'url(#protanopia)',
      deuteranopia: 'url(#deuteranopia)',
      tritanopia: 'url(#tritanopia)'
    };
    body.style.filter = colorBlindnessFilters[settings.colorBlindness];

    // Apply theme
    if (settings.theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else if (settings.theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.remove('dark', 'light');
    }

    // Apply focus indicator
    if (settings.focusIndicator) {
      root.style.setProperty('--focus-ring', '2px solid #3b82f6');
    } else {
      root.style.setProperty('--focus-ring', 'none');
    }

    // Apply keyboard navigation
    if (settings.keyboardNavigation) {
      body.classList.add('keyboard-navigation');
    } else {
      body.classList.remove('keyboard-navigation');
    }

  }, [settings, enabled]);

  // Focus management
  useEffect(() => {
    if (!enabled || !settings.keyboardNavigation) return;

    const handleFocus = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      setCurrentFocus(target);
      setFocusHistory(prev => [...prev, target].slice(-5));
      
      // Add focus indicator
      target.style.outline = 'var(--focus-ring)';
      target.style.outlineOffset = '2px';
    };

    const handleBlur = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      target.style.outline = '';
      target.style.outlineOffset = '';
    };

    document.addEventListener('focusin', handleFocus);
    document.addEventListener('focusout', handleBlur);

    return () => {
      document.removeEventListener('focusin', handleFocus);
      document.removeEventListener('focusout', handleBlur);
    };
  }, [enabled, settings.keyboardNavigation]);

  // Accessibility scanning
  const scanAccessibility = useCallback(async () => {
    if (!enabled) return;

    setIsScanning(true);
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
        issues.push(`Heading level skipped: ${heading.tagName} after ${previousLevel}`);
      }
      previousLevel = level;
    });

    // Check for proper form labels
    const formControls = document.querySelectorAll('input, select, textarea');
    formControls.forEach(control => {
      if (!control.getAttribute('aria-label') && !control.getAttribute('aria-labelledby')) {
        const label = control.closest('label');
        if (!label) {
          issues.push(`Form control missing label: ${control.tagName}`);
        }
      }
    });

    // Check for color contrast
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    textElements.forEach(element => {
      const style = window.getComputedStyle(element);
      const color = style.color;
      const backgroundColor = style.backgroundColor;
      
      // Simple contrast check (this is a basic implementation)
      if (color && backgroundColor && color !== backgroundColor) {
        // Add more sophisticated contrast checking here
      }
    });

    setAccessibilityIssues(issues);
    setIsScanning(false);
  }, [enabled]);

  // Keyboard shortcuts
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt + A: Toggle accessibility panel
      if (e.altKey && e.key === 'a') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }

      // Alt + S: Toggle settings
      if (e.altKey && e.key === 's') {
        e.preventDefault();
        setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
      }

      // Alt + M: Toggle reduced motion
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }));
      }

      // Alt + T: Cycle through themes
      if (e.altKey && e.key === 't') {
        e.preventDefault();
        setSettings(prev => ({
          ...prev,
          theme: prev.theme === 'light' ? 'dark' : prev.theme === 'dark' ? 'auto' : 'light'
        }));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enabled]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!enabled || !settings.screenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, [enabled, settings.screenReader]);

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(prev => !prev)}
        className="fixed bottom-4 right-4 z-50 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        aria-label="Accessibility Settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
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
            className="fixed top-0 right-0 h-full w-96 bg-slate-900/95 backdrop-blur-sm border-l border-slate-700 z-40 overflow-y-auto"
            id="accessibility-panel"
            ref={settingsRef}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <Accessibility className="w-6 h-6 mr-2 text-cyan-400" />
                  Accessibility
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Quick Actions */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }))}
                    className={`p-3 rounded-lg border transition-all duration-300 flex items-center justify-center ${
                      settings.highContrast 
                        ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400' 
                        : 'border-slate-600 hover:border-slate-500 text-slate-300'
                    }`}
                  >
                    <Contrast className="w-5 h-5 mr-2" />
                    High Contrast
                  </button>
                  
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }))}
                    className={`p-3 rounded-lg border transition-all duration-300 flex items-center justify-center ${
                      settings.reducedMotion 
                        ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400' 
                        : 'border-slate-600 hover:border-slate-500 text-slate-300'
                    }`}
                  >
                    <Eye className="w-5 h-5 mr-2" />
                    Reduce Motion
                  </button>
                </div>
              </div>

              {/* Font Size */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Font Size</h3>
                <div className="grid grid-cols-4 gap-2">
                  {(['small', 'medium', 'large', 'xlarge'] as const).map(size => (
                    <button
                      key={size}
                      onClick={() => setSettings(prev => ({ ...prev, fontSize: size }))}
                      className={`p-2 rounded border transition-all duration-300 ${
                        settings.fontSize === size 
                          ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400' 
                          : 'border-slate-600 hover:border-slate-500 text-slate-300'
                      }`}
                    >
                      {size === 'small' && <Type className="w-4 h-4 mx-auto" />}
                      {size === 'medium' && <Type className="w-5 h-5 mx-auto" />}
                      {size === 'large' && <Type className="w-6 h-6 mx-auto" />}
                      {size === 'xlarge' && <Type className="w-7 h-7 mx-auto" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Theme Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Theme</h3>
                <div className="grid grid-cols-3 gap-2">
                  {(['light', 'dark', 'auto'] as const).map(theme => (
                    <button
                      key={theme}
                      onClick={() => setSettings(prev => ({ ...prev, theme }))}
                      className={`p-3 rounded-lg border transition-all duration-300 flex items-center justify-center ${
                        settings.theme === theme 
                          ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400' 
                          : 'border-slate-600 hover:border-slate-500 text-slate-300'
                      }`}
                    >
                      {theme === 'light' && <Sun className="w-5 h-5" />}
                      {theme === 'dark' && <Moon className="w-5 h-5" />}
                      {theme === 'auto' && <Monitor className="w-5 h-5" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Blindness */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Color Blindness Support</h3>
                <select
                  value={settings.colorBlindness}
                  onChange={(e) => setSettings(prev => ({ ...prev, colorBlindness: e.target.value as any }))}
                  className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white"
                >
                  <option value="none">No Color Blindness</option>
                  <option value="protanopia">Protanopia (Red-Blind)</option>
                  <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                  <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                </select>
              </div>

              {/* Accessibility Scan */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Accessibility Check</h3>
                <button
                  onClick={scanAccessibility}
                  disabled={isScanning}
                  className="w-full p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50"
                >
                  {isScanning ? 'Scanning...' : 'Scan for Issues'}
                </button>
                
                {accessibilityIssues.length > 0 && (
                  <div className="mt-3 p-3 bg-slate-800 rounded-lg">
                    <h4 className="text-sm font-medium text-cyan-400 mb-2">Issues Found: {accessibilityIssues.length}</h4>
                    <ul className="text-xs text-slate-300 space-y-1">
                      {accessibilityIssues.slice(0, 3).map((issue, index) => (
                        <li key={index} className="flex items-start">
                          <AlertCircle className="w-3 h-3 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                          {issue}
                        </li>
                      ))}
                      {accessibilityIssues.length > 3 && (
                        <li className="text-cyan-400 text-xs">
                          +{accessibilityIssues.length - 3} more issues
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>

              {/* Keyboard Shortcuts */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Keyboard Shortcuts</h3>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex justify-between">
                    <span>Alt + A:</span>
                    <span>Toggle Panel</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Alt + S:</span>
                    <span>High Contrast</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Alt + M:</span>
                    <span>Reduce Motion</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Alt + T:</span>
                    <span>Cycle Theme</span>
                  </div>
                </div>
              </div>

              {/* Focus Indicator */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Focus Management</h3>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={settings.focusIndicator}
                      onChange={(e) => setSettings(prev => ({ ...prev, focusIndicator: e.target.checked }))}
                      className="mr-3 w-4 h-4 text-cyan-500 bg-slate-800 border-slate-600 rounded focus:ring-cyan-500"
                    />
                    Show Focus Indicator
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={settings.keyboardNavigation}
                      onChange={(e) => setSettings(prev => ({ ...prev, keyboardNavigation: e.target.checked }))}
                      className="mr-3 w-4 h-4 text-cyan-500 bg-slate-800 border-slate-600 rounded focus:ring-cyan-500"
                    />
                    Enhanced Keyboard Navigation
                  </label>
                </div>
              </div>

              {/* Current Focus Info */}
              {currentFocus && (
                <div className="mb-6 p-3 bg-slate-800 rounded-lg">
                  <h3 className="text-sm font-medium text-cyan-400 mb-2">Current Focus</h3>
                  <div className="text-xs text-slate-300">
                    <div className="mb-1">
                      <strong>Element:</strong> {currentFocus.tagName.toLowerCase()}
                    </div>
                    {currentFocus.textContent && (
                      <div className="mb-1">
                        <strong>Text:</strong> {currentFocus.textContent.slice(0, 50)}...
                      </div>
                    )}
                    {currentFocus.getAttribute('aria-label') && (
                      <div>
                        <strong>ARIA Label:</strong> {currentFocus.getAttribute('aria-label')}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Focus History Indicator */}
      {focusHistory.length > 0 && settings.focusIndicator && (
        <div className="fixed top-4 left-4 z-30">
          <div className="bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-3 text-white text-sm">
            <div className="flex items-center mb-2">
              <MousePointer className="w-4 h-4 mr-2 text-cyan-400" />
              <span className="font-medium">Focus History</span>
            </div>
            <div className="space-y-1 text-xs text-slate-300">
              {focusHistory.slice(-3).reverse().map((element, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                  {element.tagName.toLowerCase()}
                  {element.textContent && (
                    <span className="ml-2 text-slate-400">
                      {element.textContent.slice(0, 20)}...
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Screen Reader Announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Accessibility panel {isOpen ? 'opened' : 'closed'}
      </div>
    </>
  );
}

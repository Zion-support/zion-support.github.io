import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  Eye, 
  EyeOff, 
  Type, 
  Volume2, 
  VolumeX, 
  Contrast, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info,
  Keyboard,
  MousePointer,
  Smartphone,
  Monitor,
  Tablet
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
  cursorSize: 'small' | 'medium' | 'large';
  lineSpacing: 'tight' | 'normal' | 'loose';
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showPanel?: boolean;
  autoApply?: boolean;
}

export function EnhancedAccessibilityEnhancer({ 
  enabled = true, 
  showPanel = false,
  autoApply = true 
}: AccessibilityEnhancerProps) {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    colorBlindness: 'none',
    fontSize: 'medium',
    cursorSize: 'medium',
    lineSpacing: 'normal'
  });

  const [isPanelOpen, setIsPanelOpen] = useState(showPanel);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [focusHistory, setFocusHistory] = useState<HTMLElement[]>([]);
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [isNavigating, setIsNavigating] = useState(false);
  const focusRef = useRef<HTMLDivElement>(null);

  // Apply accessibility settings to the document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    const body = document.body;

    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--accent-color');
    }

    // Large text
    if (newSettings.largeText) {
      root.style.fontSize = '18px';
      root.style.lineHeight = '1.6';
    } else {
      root.style.fontSize = '';
      root.style.lineHeight = '';
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
      root.classList.add('reduced-motion');
    } else {
      root.style.removeProperty('--reduced-motion');
      root.classList.remove('reduced-motion');
    }

    // Focus indicator
    if (newSettings.focusIndicator) {
      root.style.setProperty('--focus-outline', '3px solid #06b6d4');
      root.style.setProperty('--focus-outline-offset', '2px');
    } else {
      root.style.removeProperty('--focus-outline');
      root.style.removeProperty('--focus-outline-offset');
    }

    // Color blindness simulation
    if (newSettings.colorBlindness !== 'none') {
      const filters = {
        protanopia: 'brightness(0.567) saturate(2.643) hue-rotate(0deg)',
        deuteranopia: 'brightness(0.625) saturate(2.246) hue-rotate(0deg)',
        tritanopia: 'brightness(0.95) saturate(0.1) hue-rotate(15deg)'
      };
      body.style.filter = filters[newSettings.colorBlindness];
    } else {
      body.style.filter = '';
    }

    // Font size
    const fontSizes = {
      small: '14px',
      medium: '16px',
      large: '18px',
      xlarge: '20px'
    };
    root.style.setProperty('--base-font-size', fontSizes[newSettings.fontSize]);

    // Cursor size
    const cursorSizes = {
      small: 'auto',
      medium: 'pointer',
      large: 'crosshair'
    };
    body.style.cursor = cursorSizes[newSettings.cursorSize];

    // Line spacing
    const lineSpacings = {
      tight: '1.2',
      normal: '1.5',
      loose: '2.0'
    };
    root.style.setProperty('--line-height', lineSpacings[newSettings.lineSpacing]);

    setSettings(newSettings);
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Load saved settings
  useEffect(() => {
    if (autoApply) {
      const saved = localStorage.getItem('zion-accessibility-settings');
      if (saved) {
        try {
          const savedSettings = JSON.parse(saved);
          applySettings(savedSettings);
        } catch (error) {
          console.warn('Failed to load accessibility settings:', error);
        }
      }
    }
  }, [autoApply, applySettings]);

  // Keyboard navigation enhancement
  useEffect(() => {
    if (!enabled || !settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const { key, target, shiftKey, ctrlKey, altKey } = event;
      const element = target as HTMLElement;

      // Skip if in input fields
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        return;
      }

      switch (key) {
        case 'Tab':
          // Enhanced tab navigation
          if (shiftKey) {
            // Navigate backwards
            const focusableElements = getFocusableElements();
            const currentIndex = focusableElements.indexOf(element);
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
            focusableElements[prevIndex]?.focus();
            event.preventDefault();
          }
          break;

        case 'Escape':
          // Close modals, panels, etc.
          const modals = document.querySelectorAll('[role="dialog"], [data-modal="true"]');
          if (modals.length > 0) {
            const lastModal = modals[modals.length - 1] as HTMLElement;
            lastModal.focus();
            // Trigger close event
            lastModal.dispatchEvent(new CustomEvent('close'));
          }
          break;

        case 'h':
        case 'H':
          if (ctrlKey) {
            // Go to home
            window.location.href = '/';
            event.preventDefault();
          }
          break;

        case 's':
        case 'S':
          if (ctrlKey) {
            // Go to services
            window.location.href = '/services';
            event.preventDefault();
          }
          break;

        case 'c':
        case 'C':
          if (ctrlKey) {
            // Go to contact
            window.location.href = '/contact';
            event.preventDefault();
          }
          break;

        case 'a':
        case 'A':
          if (ctrlKey) {
            // Go to about
            window.location.href = '/about';
            event.preventDefault();
          }
          break;

        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
          if (altKey) {
            // Quick navigation to headings
            const headingLevel = parseInt(key);
            const headings = document.querySelectorAll(`h${headingLevel}`);
            if (headings.length > 0) {
              const firstHeading = headings[0] as HTMLElement;
              firstHeading.focus();
              firstHeading.scrollIntoView({ behavior: 'smooth' });
              event.preventDefault();
            }
          }
          break;

        case 'm':
        case 'M':
          if (altKey) {
            // Toggle main navigation
            const nav = document.querySelector('nav, [role="navigation"]');
            if (nav) {
              const isExpanded = nav.getAttribute('aria-expanded') === 'true';
              nav.setAttribute('aria-expanded', (!isExpanded).toString());
              event.preventDefault();
            }
          }
          break;

        case 'f':
        case 'F':
          if (altKey) {
            // Focus search
            const searchInput = document.querySelector('input[type="search"], input[placeholder*="search"], input[aria-label*="search"]');
            if (searchInput) {
              (searchInput as HTMLElement).focus();
              event.preventDefault();
            }
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enabled, settings.keyboardNavigation]);

  // Focus management
  useEffect(() => {
    if (!enabled) return;

    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      setCurrentFocus(target);
      setFocusHistory(prev => [...prev.slice(-9), target]);

      // Announce focus changes for screen readers
      if (settings.screenReader) {
        const announcement = getFocusAnnouncement(target);
        if (announcement) {
          announceToScreenReader(announcement);
        }
      }

      // Enhanced focus indicator
      if (settings.focusIndicator) {
        target.style.outline = '3px solid #06b6d4';
        target.style.outlineOffset = '2px';
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (settings.focusIndicator) {
        target.style.outline = '';
        target.style.outlineOffset = '';
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [enabled, settings.screenReader, settings.focusIndicator]);

  // Get focusable elements
  const getFocusableElements = useCallback(() => {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ];

    return Array.from(document.querySelectorAll(focusableSelectors.join(','))) as HTMLElement[];
  }, []);

  // Get focus announcement text
  const getFocusAnnouncement = useCallback((element: HTMLElement): string | null => {
    const ariaLabel = element.getAttribute('aria-label');
    const ariaLabelledBy = element.getAttribute('aria-labelledby');
    const title = element.getAttribute('title');
    const alt = element.getAttribute('alt');
    const textContent = element.textContent?.trim();

    if (ariaLabel) return ariaLabel;
    if (ariaLabelledBy) {
      const labelElement = document.getElementById(ariaLabelledBy);
      return labelElement?.textContent?.trim() || null;
    }
    if (title) return title;
    if (alt) return alt;
    if (textContent) return textContent;

    return null;
  }, []);

  // Announce to screen reader
  const announceToScreenReader = useCallback((message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);

    setAnnouncements(prev => [...prev, message]);
  }, []);

  // Toggle setting
  const toggleSetting = useCallback((key: keyof AccessibilitySettings, value?: any) => {
    const newSettings = {
      ...settings,
      [key]: value !== undefined ? value : !settings[key]
    };
    applySettings(newSettings);
  }, [settings, applySettings]);

  // Reset to defaults
  const resetToDefaults = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: true,
      colorBlindness: 'none',
      fontSize: 'medium',
      cursorSize: 'medium',
      lineSpacing: 'normal'
    };
    applySettings(defaultSettings);
  }, [applySettings]);

  if (!enabled) return null;

  return (
    <>
      {/* Floating Accessibility Button */}
      <motion.button
        onClick={() => setIsPanelOpen(!isPanelOpen)}
        className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Accessibility Settings"
        aria-label="Open accessibility settings panel"
      >
        <Accessibility className="w-7 h-7 text-white mx-auto" />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
          <CheckCircle className="w-4 h-4 text-white" />
        </div>
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isPanelOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-20 right-6 z-40 w-96 bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl"
            role="dialog"
            aria-labelledby="accessibility-panel-title"
            aria-describedby="accessibility-panel-description"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 id="accessibility-panel-title" className="text-lg font-semibold text-white flex items-center gap-2">
                  <Accessibility className="w-5 h-5 text-purple-400" />
                  Accessibility Settings
                </h3>
                <button
                  onClick={() => setIsPanelOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p id="accessibility-panel-description" className="text-sm text-gray-300 mb-6">
                Customize your experience with enhanced accessibility features
              </p>

              {/* Visual Enhancements */}
              <div className="space-y-4 mb-6">
                <h4 className="text-sm font-medium text-white flex items-center gap-2">
                  <Eye className="w-4 h-4 text-purple-400" />
                  Visual Enhancements
                </h4>
                
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.highContrast}
                      onChange={() => toggleSetting('highContrast')}
                      className="w-4 h-4 text-purple-600 bg-slate-700 border-slate-600 rounded focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-300">High Contrast</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.largeText}
                      onChange={() => toggleSetting('largeText')}
                      className="w-4 h-4 text-purple-600 bg-slate-700 border-slate-600 rounded focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-300">Large Text</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.reducedMotion}
                      onChange={() => toggleSetting('reducedMotion')}
                      className="w-4 h-4 text-purple-600 bg-slate-700 border-slate-600 rounded focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-300">Reduced Motion</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.focusIndicator}
                      onChange={() => toggleSetting('focusIndicator')}
                      className="w-4 h-4 text-purple-600 bg-slate-700 border-slate-600 rounded focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-300">Focus Indicator</span>
                  </label>
                </div>
              </div>

              {/* Navigation & Interaction */}
              <div className="space-y-4 mb-6">
                <h4 className="text-sm font-medium text-white flex items-center gap-2">
                  <Keyboard className="w-4 h-4 text-purple-400" />
                  Navigation & Interaction
                </h4>
                
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.keyboardNavigation}
                      onChange={() => toggleSetting('keyboardNavigation')}
                      className="w-4 h-4 text-purple-600 bg-slate-700 border-slate-600 rounded focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-300">Enhanced Keyboard Navigation</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.screenReader}
                      onChange={() => toggleSetting('screenReader')}
                      className="w-4 h-4 text-purple-600 bg-slate-700 border-slate-600 rounded focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-300">Screen Reader Support</span>
                  </label>
                </div>
              </div>

              {/* Customization Options */}
              <div className="space-y-4 mb-6">
                <h4 className="text-sm font-medium text-white flex items-center gap-2">
                  <Settings className="w-4 h-4 text-purple-400" />
                  Customization
                </h4>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Font Size</label>
                    <select
                      value={settings.fontSize}
                      onChange={(e) => toggleSetting('fontSize', e.target.value as AccessibilitySettings['fontSize'])}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                      <option value="xlarge">Extra Large</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Cursor Size</label>
                    <select
                      value={settings.cursorSize}
                      onChange={(e) => toggleSetting('cursorSize', e.target.value as AccessibilitySettings['cursorSize'])}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Line Spacing</label>
                    <select
                      value={settings.lineSpacing}
                      onChange={(e) => toggleSetting('lineSpacing', e.target.value as AccessibilitySettings['lineSpacing'])}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="tight">Tight</option>
                      <option value="normal">Normal</option>
                      <option value="loose">Loose</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={resetToDefaults}
                  className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset
                </button>
                
                <button
                  onClick={() => setIsPanelOpen(false)}
                  className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>

              {/* Keyboard Shortcuts Help */}
              {settings.keyboardNavigation && (
                <div className="mt-4 p-3 bg-slate-800/50 rounded-lg">
                  <h5 className="text-xs font-medium text-white mb-2">Keyboard Shortcuts</h5>
                  <div className="text-xs text-gray-400 space-y-1">
                    <div>Alt + H: Go to Home</div>
                    <div>Alt + S: Go to Services</div>
                    <div>Alt + C: Go to Contact</div>
                    <div>Alt + A: Go to About</div>
                    <div>Alt + M: Toggle Navigation</div>
                    <div>Alt + F: Focus Search</div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Focus Indicator */}
      {currentFocus && settings.focusIndicator && (
        <div
          ref={focusRef}
          className="fixed pointer-events-none z-50 border-2 border-cyan-400 rounded transition-all duration-200"
          style={{
            left: currentFocus.offsetLeft - 4,
            top: currentFocus.offsetTop - 4,
            width: currentFocus.offsetWidth + 8,
            height: currentFocus.offsetHeight + 8
          }}
        />
      )}

      {/* Screen Reader Announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcements.map((announcement, index) => (
          <div key={index}>{announcement}</div>
        ))}
      </div>
    </>
  );
}
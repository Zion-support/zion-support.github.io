import React, { useState, useEffect, useCallback } from 'react';
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
  RotateCcw, 
  Settings, 
  X, 
  CheckCircle, 
  AlertTriangle,
  Keyboard,
  MousePointer,
  Smartphone,
  Monitor,
  Sun,
  Moon,
  Palette,
  Accessibility,
  Braille,
  Headphones,
  HelpCircle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlind: boolean;
  dyslexia: boolean;
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showControls?: boolean;
  defaultSettings?: Partial<AccessibilitySettings>;
}

export function AccessibilityEnhancer({ 
  enabled = true, 
  showControls = false,
  defaultSettings = {}
}: AccessibilityEnhancerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: false,
    colorBlind: false,
    dyslexia: false,
    ...defaultSettings
  });

  const [fontSize, setFontSize] = useState(16);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | 'high-contrast'>('light');
  const [accessibilityScore, setAccessibilityScore] = useState(85);

  // Apply accessibility settings to the document
  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.style.setProperty('--zion-cyan', '#ffffff');
      root.style.setProperty('--zion-slate', '#000000');
      root.style.setProperty('--zion-purple', '#ffff00');
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--zion-cyan');
      root.style.removeProperty('--zion-slate');
      root.style.removeProperty('--zion-purple');
    }

    // Large text
    if (newSettings.largeText) {
      root.style.fontSize = '18px';
      root.style.setProperty('--text-scale', '1.2');
    } else {
      root.style.fontSize = '16px';
      root.style.setProperty('--text-scale', '1');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.1s');
      root.style.setProperty('--transition-duration', '0.1s');
    } else {
      root.style.setProperty('--animation-duration', '0.3s');
      root.style.setProperty('--transition-duration', '0.2s');
    }

    // Focus indicator
    if (newSettings.focusIndicator) {
      root.style.setProperty('--focus-ring', '2px solid #06b6d4');
      root.style.setProperty('--focus-ring-offset', '2px');
    } else {
      root.style.setProperty('--focus-ring', 'none');
      root.style.setProperty('--focus-ring-offset', '0');
    }

    // Color blind friendly
    if (newSettings.colorBlind) {
      root.classList.add('colorblind-friendly');
    } else {
      root.classList.remove('colorblind-friendly');
    }

    // Dyslexia friendly
    if (newSettings.dyslexia) {
      root.style.fontFamily = 'OpenDyslexic, Arial, sans-serif';
      root.style.setProperty('--line-height', '1.8');
      root.style.setProperty('--letter-spacing', '0.1em');
    } else {
      root.style.fontFamily = '';
      root.style.setProperty('--line-height', '1.6');
      root.style.setProperty('--letter-spacing', 'normal');
    }

    setSettings(newSettings);
  }, []);

  // Font size controls
  const changeFontSize = useCallback((delta: number) => {
    const newSize = Math.max(12, Math.min(24, fontSize + delta));
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`;
  }, [fontSize]);

  // Zoom controls
  const changeZoom = useCallback((delta: number) => {
    const newZoom = Math.max(50, Math.min(200, zoomLevel + delta));
    setZoomLevel(newZoom);
    document.documentElement.style.zoom = `${newZoom}%`;
  }, [zoomLevel]);

  // Theme switching
  const switchTheme = useCallback((theme: 'light' | 'dark' | 'high-contrast') => {
    setCurrentTheme(theme);
    const root = document.documentElement;
    
    root.classList.remove('light', 'dark', 'high-contrast');
    root.classList.add(theme);
    
    if (theme === 'high-contrast') {
      applyAccessibilitySettings({ ...settings, highContrast: true });
    } else {
      applyAccessibilitySettings({ ...settings, highContrast: false });
    }
  }, [settings, applyAccessibilitySettings]);

  // Keyboard navigation enhancement
  const enhanceKeyboardNavigation = useCallback(() => {
    if (!settings.keyboardNavigation) return;

    // Add skip links
    const skipLinks = document.createElement('div');
    skipLinks.className = 'skip-links';
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    `;
    document.body.insertBefore(skipLinks, document.body.firstChild);

    // Enhanced focus management
    const focusableElements = document.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach((element) => {
      element.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && element.tagName === 'A') {
          e.preventDefault();
          (element as HTMLAnchorElement).click();
        }
      });
    });

    // Focus trap for modals
    const modals = document.querySelectorAll('[role="dialog"]');
    modals.forEach((modal) => {
      const focusableElements = modal.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length > 0) {
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        
        modal.addEventListener('keydown', (e) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
              }
            } else {
              if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
              }
            }
          }
        });
      }
    });
  }, [settings.keyboardNavigation]);

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

  // Accessibility audit
  const runAccessibilityAudit = useCallback(() => {
    const issues: string[] = [];
    let score = 100;

    // Check for alt text on images
    const images = document.querySelectorAll('img');
    const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
    if (imagesWithoutAlt.length > 0) {
      issues.push(`${imagesWithoutAlt.length} images missing alt text`);
      score -= 10;
    }

    // Check for form labels
    const inputs = document.querySelectorAll('input, select, textarea');
    const inputsWithoutLabels = Array.from(inputs).filter(input => {
      const id = input.id;
      const label = document.querySelector(`label[for="${id}"]`);
      const ariaLabel = input.getAttribute('aria-label');
      return !label && !ariaLabel;
    });
    if (inputsWithoutLabels.length > 0) {
      issues.push(`${inputsWithoutLabels.length} form inputs missing labels`);
      score -= 15;
    }

    // Check for heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    let headingIssues = 0;
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        headingIssues++;
      }
      previousLevel = level;
    });
    if (headingIssues > 0) {
      issues.push(`${headingIssues} heading hierarchy issues`);
      score -= 10;
    }

    // Check for color contrast (simplified)
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    const lowContrastElements = Array.from(textElements).filter(element => {
      const style = window.getComputedStyle(element);
      const color = style.color;
      const backgroundColor = style.backgroundColor;
      // This is a simplified check - in production you'd want a proper contrast ratio calculation
      return color === backgroundColor;
    });
    if (lowContrastElements.length > 0) {
      issues.push(`${lowContrastElements.length} potential contrast issues`);
      score -= 15;
    }

    setAccessibilityScore(Math.max(0, score));
    return { score: Math.max(0, score), issues };
  }, []);

  // Initialize accessibility features
  useEffect(() => {
    if (!enabled) return;

    // Apply initial settings
    applyAccessibilitySettings(settings);

    // Run initial audit
    const timer = setTimeout(() => {
      runAccessibilityAudit();
    }, 2000);

    return () => clearTimeout(timer);
  }, [enabled, applyAccessibilitySettings, settings, runAccessibilityAudit]);

  // Apply keyboard navigation when setting changes
  useEffect(() => {
    if (settings.keyboardNavigation) {
      enhanceKeyboardNavigation();
    }
  }, [settings.keyboardNavigation, enhanceKeyboardNavigation]);

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        className="fixed bottom-4 left-4 z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-200"
        onClick={() => setIsVisible(!isVisible)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Accessibility Settings"
        aria-expanded={isVisible}
        aria-controls="accessibility-panel"
      >
        <Accessibility className="w-5 h-5" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            id="accessibility-panel"
            className="fixed bottom-20 left-4 w-96 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 z-50 max-h-[80vh] overflow-y-auto"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-labelledby="accessibility-title"
          >
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h2 id="accessibility-title" className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Accessibility className="w-5 h-5 text-blue-500" />
                  Accessibility Settings
                </h2>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  aria-label="Close accessibility settings"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-4 space-y-6">
              {/* Accessibility Score */}
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Accessibility Score</span>
                  <button
                    onClick={runAccessibilityAudit}
                    className="text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Refresh
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`text-2xl font-bold ${
                    accessibilityScore >= 90 ? 'text-green-500' :
                    accessibilityScore >= 70 ? 'text-yellow-500' : 'text-red-500'
                  }`}>
                    {accessibilityScore}%
                  </div>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${
                        accessibilityScore >= 90 ? 'bg-green-500' :
                        accessibilityScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${accessibilityScore}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Visual Adjustments */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Visual Adjustments
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={settings.highContrast}
                      onChange={(e) => applyAccessibilitySettings({ ...settings, highContrast: e.target.checked })}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
                  </label>
                  
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={settings.largeText}
                      onChange={(e) => applyAccessibilitySettings({ ...settings, largeText: e.target.checked })}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>
                  </label>

                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={settings.colorBlind}
                      onChange={(e) => applyAccessibilitySettings({ ...settings, colorBlind: e.target.checked })}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Color Blind Friendly</span>
                  </label>

                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={settings.dyslexia}
                      onChange={(e) => applyAccessibilitySettings({ ...settings, dyslexia: e.target.checked })}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Dyslexia Friendly</span>
                  </label>
                </div>
              </div>

              {/* Motion & Interaction */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <MousePointer className="w-4 h-4" />
                  Motion & Interaction
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={settings.reducedMotion}
                      onChange={(e) => applyAccessibilitySettings({ ...settings, reducedMotion: e.target.checked })}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Reduced Motion</span>
                  </label>

                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={settings.keyboardNavigation}
                      onChange={(e) => applyAccessibilitySettings({ ...settings, keyboardNavigation: e.target.checked })}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Enhanced Keyboard Navigation</span>
                  </label>

                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={settings.focusIndicator}
                      onChange={(e) => applyAccessibilitySettings({ ...settings, focusIndicator: e.target.checked })}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Enhanced Focus Indicators</span>
                  </label>
                </div>
              </div>

              {/* Font Size Controls */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Type className="w-4 h-4" />
                  Font Size
                </h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => changeFontSize(-1)}
                    className="p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    aria-label="Decrease font size"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-sm text-gray-700 dark:text-gray-300 min-w-[3rem] text-center">
                    {fontSize}px
                  </span>
                  <button
                    onClick={() => changeFontSize(1)}
                    className="p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    aria-label="Increase font size"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Theme Selection */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Palette className="w-4 h-4" />
                  Theme
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { key: 'light', icon: Sun, label: 'Light' },
                    { key: 'dark', icon: Moon, label: 'Dark' },
                    { key: 'high-contrast', icon: Contrast, label: 'High Contrast' }
                  ].map((theme) => (
                    <button
                      key={theme.key}
                      onClick={() => switchTheme(theme.key as 'light' | 'dark' | 'high-contrast')}
                      className={`p-3 rounded-lg border-2 transition-all duration-200 flex flex-col items-center gap-2 ${
                        currentTheme === theme.key
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                      }`}
                    >
                      <theme.icon className="w-5 h-5" />
                      <span className="text-xs">{theme.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Reset Button */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => {
                    const defaultSettings = {
                      highContrast: false,
                      largeText: false,
                      reducedMotion: false,
                      screenReader: false,
                      keyboardNavigation: false,
                      focusIndicator: false,
                      colorBlind: false,
                      dyslexia: false,
                    };
                    applyAccessibilitySettings(defaultSettings);
                    setFontSize(16);
                    setZoomLevel(100);
                    switchTheme('light');
                    announceToScreenReader('Accessibility settings reset to default');
                  }}
                  className="w-full bg-gray-500 hover:bg-gray-600 text-white text-sm py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset to Default
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skip Links (rendered when keyboard navigation is enabled) */}
      {settings.keyboardNavigation && (
        <div className="skip-links">
          <style>{`
            .skip-links {
              position: absolute;
              top: -40px;
              left: 6px;
              z-index: 1000;
            }
            .skip-link {
              position: absolute;
              top: -40px;
              left: 6px;
              background: #06b6d4;
              color: white;
              padding: 8px;
              text-decoration: none;
              border-radius: 4px;
              transition: top 0.3s;
            }
            .skip-link:focus {
              top: 6px;
            }
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
        </div>
      )}
    </>
  );
}
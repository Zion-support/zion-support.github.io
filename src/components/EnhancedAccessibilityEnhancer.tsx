import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, EyeOff, Volume2, VolumeX, Keyboard, MousePointer, 
  Monitor, Smartphone, Tablet, Accessibility, Settings, 
  CheckCircle, AlertTriangle, Info, HelpCircle, X
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: 'small' | 'medium' | 'large' | 'extra-large';
  lineSpacing: 'tight' | 'normal' | 'loose';
  cursorSize: 'small' | 'medium' | 'large';
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showPanel?: boolean;
  autoDetect?: boolean;
}

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showPanel = false,
  autoDetect = true
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    colorBlindness: 'none',
    fontSize: 'medium',
    lineSpacing: 'normal',
    cursorSize: 'medium'
  });

  const [isOpen, setIsOpen] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [accessibilityIssues, setAccessibilityIssues] = useState<string[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const focusHistory = useRef<HTMLElement[]>([]);

  // Auto-detect accessibility preferences
  useEffect(() => {
    if (!autoDetect) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    const prefersLargeText = window.matchMedia('(prefers-contrast: more)').matches;

    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast,
      largeText: prefersLargeText
    }));
  }, [autoDetect]);

  // Apply accessibility settings
  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    const body = document.body;

    // High contrast mode
    if (settings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--color-primary', '#ffffff');
      root.style.setProperty('--color-secondary', '#000000');
      root.style.setProperty('--color-background', '#000000');
      root.style.setProperty('--color-text', '#ffffff');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--color-primary');
      root.style.removeProperty('--color-secondary');
      root.style.removeProperty('--color-background');
      root.style.removeProperty('--color-text');
    }

    // Large text mode
    if (settings.largeText) {
      root.style.fontSize = '18px';
      root.style.lineHeight = '1.6';
    } else {
      root.style.fontSize = '16px';
      root.style.lineHeight = '1.5';
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--transition-duration', '0.01ms');
      root.style.setProperty('--animation-duration', '0.01ms');
    } else {
      root.style.removeProperty('--transition-duration');
      root.style.removeProperty('--animation-duration');
    }

    // Focus indicator
    if (settings.focusIndicator) {
      root.style.setProperty('--focus-outline', '3px solid #3b82f6');
      root.style.setProperty('--focus-outline-offset', '2px');
    } else {
      root.style.removeProperty('--focus-outline');
      root.style.removeProperty('--focus-outline-offset');
    }

    // Color blindness simulation
    if (settings.colorBlindness !== 'none') {
      const filters = {
        protanopia: 'brightness(0.567) saturate(2.643) hue-rotate(318deg)',
        deuteranopia: 'brightness(0.625) saturate(2.246) hue-rotate(2deg)',
        tritanopia: 'brightness(0.95) saturate(0.938) hue-rotate(14deg)'
      };
      body.style.filter = filters[settings.colorBlindness];
    } else {
      body.style.filter = 'none';
    }

    // Font size
    const fontSizes = {
      small: '14px',
      medium: '16px',
      large: '18px',
      'extra-large': '20px'
    };
    root.style.setProperty('--font-size-base', fontSizes[settings.fontSize]);

    // Line spacing
    const lineSpacings = {
      tight: '1.2',
      normal: '1.5',
      loose: '1.8'
    };
    root.style.setProperty('--line-height-base', lineSpacings[settings.lineSpacing]);

    // Cursor size
    const cursorSizes = {
      small: 'default',
      medium: 'pointer',
      large: 'crosshair'
    };
    body.style.cursor = cursorSizes[settings.cursorSize];

  }, [enabled, settings]);

  // Keyboard navigation support
  useEffect(() => {
    if (!enabled || !settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const focusableElements = document.querySelectorAll(
        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as HTMLElement);

      switch (event.key) {
        case 'Tab':
          // Normal tab behavior
          break;
        case 'ArrowDown':
        case 'ArrowRight':
          event.preventDefault();
          const nextIndex = (currentIndex + 1) % focusableElements.length;
          (focusableElements[nextIndex] as HTMLElement).focus();
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
          event.preventDefault();
          const prevIndex = currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1;
          (focusableElements[prevIndex] as HTMLElement).focus();
          break;
        case 'Home':
          event.preventDefault();
          (focusableElements[0] as HTMLElement).focus();
          break;
        case 'End':
          event.preventDefault();
          (focusableElements[focusableElements.length - 1] as HTMLElement).focus();
          break;
        case 'Escape':
          setIsOpen(false);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enabled, settings.keyboardNavigation]);

  // Focus management
  useEffect(() => {
    if (!enabled) return;

    const handleFocusChange = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      setCurrentFocus(target);
      
      if (target) {
        focusHistory.current.push(target);
        if (focusHistory.current.length > 10) {
          focusHistory.current.shift();
        }
      }
    };

    document.addEventListener('focusin', handleFocusChange);
    return () => document.removeEventListener('focusin', handleFocusChange);
  }, [enabled]);

  // Accessibility scanning
  const scanAccessibility = useCallback(async () => {
    if (!enabled) return;

    setIsScanning(true);
    const issues: string[] = [];

    try {
      // Check for missing alt text
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.alt && !img.ariaLabel) {
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

      // Check for form labels
      const formInputs = document.querySelectorAll('input, textarea, select');
      formInputs.forEach(input => {
        const id = input.getAttribute('id');
        const label = document.querySelector(`label[for="${id}"]`);
        const ariaLabel = input.getAttribute('aria-label');
        
        if (!label && !ariaLabel && !input.getAttribute('aria-labelledby')) {
          issues.push(`Form input missing label: ${input.tagName}`);
        }
      });

      // Check for color contrast (simplified)
      const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
      textElements.forEach(element => {
        const style = window.getComputedStyle(element);
        const color = style.color;
        const backgroundColor = style.backgroundColor;
        
        if (color === backgroundColor) {
          issues.push(`Poor color contrast detected: ${element.tagName}`);
        }
      });

      // Check for keyboard accessibility
      const interactiveElements = document.querySelectorAll('button, a, input, textarea, select');
      interactiveElements.forEach(element => {
        if (element.getAttribute('tabindex') === '-1' && !element.hasAttribute('aria-hidden')) {
          issues.push(`Interactive element not keyboard accessible: ${element.tagName}`);
        }
      });

    } catch (error) {
      console.warn('Accessibility scanning failed:', error);
    }

    setAccessibilityIssues(issues);
    setIsScanning(false);
  }, [enabled]);

  // Auto-scan on mount
  useEffect(() => {
    if (enabled && autoDetect) {
      setTimeout(scanAccessibility, 2000);
    }
  }, [enabled, autoDetect, scanAccessibility]);

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-sm border-l border-gray-700 z-50 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Accessibility className="w-6 h-6 text-cyan-400" />
                  Accessibility
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3 mb-6">
                <button
                  onClick={() => setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }))}
                  className={`w-full p-3 rounded-lg border transition-colors flex items-center gap-3 ${
                    settings.highContrast
                      ? 'bg-cyan-600 border-cyan-500 text-white'
                      : 'bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {settings.highContrast ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                  High Contrast
                </button>

                <button
                  onClick={() => setSettings(prev => ({ ...prev, largeText: !prev.largeText }))}
                  className={`w-full p-3 rounded-lg border transition-colors flex items-center gap-3 ${
                    settings.largeText
                      ? 'bg-cyan-600 border-cyan-500 text-white'
                      : 'bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <Monitor className="w-5 h-5" />
                  Large Text
                </button>

                <button
                  onClick={() => setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }))}
                  className={`w-full p-3 rounded-lg border transition-colors flex items-center gap-3 ${
                    settings.reducedMotion
                      ? 'bg-cyan-600 border-cyan-500 text-white'
                      : 'bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {settings.reducedMotion ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  Reduced Motion
                </button>
              </div>

              {/* Font Size Control */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-3">Font Size</label>
                <div className="grid grid-cols-2 gap-2">
                  {(['small', 'medium', 'large', 'extra-large'] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => setSettings(prev => ({ ...prev, fontSize: size }))}
                      className={`p-2 rounded text-sm transition-colors ${
                        settings.fontSize === size
                          ? 'bg-cyan-600 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {size.replace('-', ' ')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Blindness Simulation */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-3">Color Vision</label>
                <select
                  value={settings.colorBlindness}
                  onChange={(e) => setSettings(prev => ({ ...prev, colorBlindness: e.target.value as any }))}
                  className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-gray-300"
                >
                  <option value="none">Normal Vision</option>
                  <option value="protanopia">Protanopia (Red-Blind)</option>
                  <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                  <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                </select>
              </div>

              {/* Accessibility Scanner */}
              <div className="mb-6">
                <button
                  onClick={scanAccessibility}
                  disabled={isScanning}
                  className="w-full p-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isScanning ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border border-white border-t-transparent"></div>
                      Scanning...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Scan Accessibility
                    </>
                  )}
                </button>

                {accessibilityIssues.length > 0 && (
                  <div className="mt-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded">
                    <div className="flex items-center gap-2 text-yellow-400 mb-2">
                      <AlertTriangle className="w-4 h-4" />
                      Issues Found: {accessibilityIssues.length}
                    </div>
                    <ul className="text-xs text-gray-300 space-y-1 max-h-32 overflow-y-auto">
                      {accessibilityIssues.slice(0, 5).map((issue, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-yellow-400">•</span>
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Focus History */}
              {currentFocus && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-3">Current Focus</label>
                  <div className="p-3 bg-gray-800 rounded text-xs text-gray-300">
                    <div className="font-medium">{currentFocus.tagName.toLowerCase()}</div>
                    {currentFocus.textContent && (
                      <div className="text-gray-400 truncate">{currentFocus.textContent}</div>
                    )}
                  </div>
                </div>
              )}

              {/* Help Section */}
              <div className="border-t border-gray-700 pt-4">
                <button className="w-full p-2 text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  Accessibility Help
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Accessibility Button */}
      <div className="fixed top-4 left-4 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-900/80 hover:bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-full p-3 transition-all hover:scale-105"
          title="Accessibility Settings"
          aria-label="Open accessibility settings"
        >
          <div className="relative">
            <Accessibility className="w-6 h-6 text-cyan-400" />
            {accessibilityIssues.length > 0 && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full text-xs text-black flex items-center justify-center font-bold">
                {Math.min(accessibilityIssues.length, 9)}
              </div>
            )}
          </div>
        </button>
      </div>

      {/* Skip Links */}
      <div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50">
        <a
          href="#main-content"
          className="bg-cyan-600 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          Skip to main content
        </a>
        <a
          href="#navigation"
          className="bg-cyan-600 text-white px-4 py-2 rounded-lg shadow-lg ml-2"
        >
          Skip to navigation
        </a>
      </div>
    </>
  );
};
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  Contrast,
  Type,
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
  Headphones,
  RotateCcw,
  Tablet,
  Check,
  ChevronDown,
  ChevronUp,
  Minus,
  Plus
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  colorBlindSupport: boolean;
  dyslexiaFriendly: boolean;
  zoomLevel: number;
  language: string;
}

interface AccessibilityEnhancerProps {
  enabled: boolean;
  showPanel?: boolean;
  autoEnhance?: boolean;
}

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled,
  showPanel = false,
  autoEnhance = true
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: true,
    colorBlindSupport: false,
    dyslexiaFriendly: false,
    zoomLevel: 100,
    language: 'en'
  });

  const [accessibilityIssues, setAccessibilityIssues] = useState<string[]>([]);
  const [isScanning, setIsScanning] = useState(false);

  // Enhanced accessibility scanning
  const scanAccessibility = useCallback(() => {
    if (!enabled) return;
    
    setIsScanning(true);
    const issues: string[] = [];

    // Check for missing alt text
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt && !img.hasAttribute('aria-label')) {
        issues.push(`Image ${index + 1} missing alt text or aria-label`);
      }
    });

    // Check for proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        issues.push(`Heading structure issue: ${heading.tagName} follows ${previousLevel > 0 ? `h${previousLevel}` : 'no heading'}`);
      }
      previousLevel = level;
    });

    // Check for proper form labels
    const formInputs = document.querySelectorAll('input, select, textarea');
    formInputs.forEach((input, index) => {
      if (!input.hasAttribute('aria-label') && !input.hasAttribute('aria-labelledby')) {
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (!label && !input.hasAttribute('placeholder')) {
          issues.push(`Form input ${index + 1} missing label or aria-label`);
        }
      }
    });

    // Check for keyboard navigation
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    interactiveElements.forEach((element, index) => {
      if (!element.hasAttribute('tabindex') && element.tagName !== 'A' && element.tagName !== 'BUTTON') {
        issues.push(`Interactive element ${index + 1} may not be keyboard accessible`);
      }
    });

    // Check for color contrast (basic check)
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    textElements.forEach((element, index) => {
      const style = window.getComputedStyle(element);
      const color = style.color;
      const backgroundColor = style.backgroundColor;
      
      if (color === backgroundColor || color === 'transparent') {
        issues.push(`Potential contrast issue with text element ${index + 1}`);
      }
    });

    setAccessibilityIssues(issues);
    setIsScanning(false);
  }, [enabled]);

  // Apply accessibility enhancements
  const applyAccessibilityEnhancements = useCallback(() => {
    if (!enabled) return;

    // Apply high contrast
    if (settings.highContrast) {
      document.documentElement.classList.add('high-contrast');
      document.documentElement.style.setProperty('--text-color', '#ffffff');
      document.documentElement.style.setProperty('--bg-color', '#000000');
      document.documentElement.style.setProperty('--accent-color', '#ffff00');
    } else {
      document.documentElement.classList.remove('high-contrast');
      document.documentElement.style.removeProperty('--text-color');
      document.documentElement.style.removeProperty('--bg-color');
      document.documentElement.style.removeProperty('--accent-color');
    }

    // Apply large text
    if (settings.largeText) {
      document.documentElement.style.fontSize = '18px';
      document.documentElement.style.lineHeight = '1.6';
    } else {
      document.documentElement.style.fontSize = '16px';
      document.documentElement.style.lineHeight = '1.5';
    }

    // Apply reduced motion
    if (settings.reducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
      document.documentElement.style.setProperty('--transition-duration', '0.1s');
    } else {
      document.documentElement.style.removeProperty('--animation-duration');
      document.documentElement.style.removeProperty('--transition-duration');
    }

    // Apply focus indicators
    if (settings.focusIndicators) {
      document.documentElement.style.setProperty('--focus-outline', '3px solid #00ffff');
      document.documentElement.style.setProperty('--focus-outline-offset', '2px');
    } else {
      document.documentElement.style.removeProperty('--focus-outline');
      document.documentElement.style.removeProperty('--focus-outline-offset');
    }

    // Apply dyslexia-friendly font
    if (settings.dyslexiaFriendly) {
      document.documentElement.style.fontFamily = 'OpenDyslexic, Arial, sans-serif';
      document.documentElement.style.letterSpacing = '0.1em';
      document.documentElement.style.wordSpacing = '0.2em';
    } else {
      document.documentElement.style.fontFamily = '';
      document.documentElement.style.letterSpacing = '';
      document.documentElement.style.wordSpacing = '';
    }

    // Apply zoom level
    document.documentElement.style.zoom = `${settings.zoomLevel}%`;
  }, [enabled, settings]);

  // Enhanced keyboard navigation
  useEffect(() => {
    if (!enabled || !settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip if user is typing in an input
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (event.key) {
        case 'Tab':
          // Enhanced tab navigation
          const focusableElements = document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
          break;

        case 'Escape':
          // Close modals and panels
          const modals = document.querySelectorAll('[role="dialog"], [aria-modal="true"]');
          modals.forEach(modal => {
            if (modal instanceof HTMLElement) {
              modal.style.display = 'none';
              modal.setAttribute('aria-hidden', 'true');
            }
          });
          break;

        case 'h':
          // Navigate to next heading
          if (event.ctrlKey) {
            event.preventDefault();
            const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
            const currentHeading = Array.from(headings).findIndex(h => h === document.activeElement);
            const nextHeading = headings[(currentHeading + 1) % headings.length] as HTMLElement;
            nextHeading?.focus();
          }
          break;

        case 'l':
          // Navigate to next link
          if (event.ctrlKey) {
            event.preventDefault();
            const links = document.querySelectorAll('a[href]');
            const currentLink = Array.from(links).findIndex(l => l === document.activeElement);
            const nextLink = links[(currentLink + 1) % links.length] as HTMLElement;
            nextLink?.focus();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enabled, settings.keyboardNavigation]);

  // Apply settings when they change
  useEffect(() => {
    applyAccessibilityEnhancements();
  }, [applyAccessibilityEnhancements]);

  // Auto-enhance on mount
  useEffect(() => {
    if (enabled && autoEnhance) {
      scanAccessibility();
    }
  }, [enabled, autoEnhance, scanAccessibility]);

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-purple-500 to-pink-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Accessibility Settings"
        aria-label="Open accessibility settings panel"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed left-6 bottom-24 z-50 w-80 max-h-[80vh] bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden"
            role="dialog"
            aria-labelledby="accessibility-panel-title"
            aria-modal="true"
          >
            {/* Panel Header */}
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-600/20 p-4 border-b border-slate-700/50">
              <div className="flex items-center justify-between">
                <h3 id="accessibility-panel-title" className="text-lg font-semibold text-white flex items-center space-x-2">
                  <Accessibility className="w-5 h-5 text-purple-400" />
                  <span>Accessibility</span>
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p id="accessibility-panel-description" className="text-sm text-gray-300 mt-1">
                Customize your experience for better accessibility
              </p>
            </div>

            {/* Panel Content */}
            <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
              {/* Visual Enhancements */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                  Visual Enhancements
                </h4>
                
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.highContrast}
                    onChange={(e) => setSettings(prev => ({ ...prev, highContrast: e.target.checked }))}
                    className="w-4 h-4 text-purple-600 bg-slate-800 border-slate-600 rounded focus:ring-purple-500"
                  />
                  <Contrast className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-white">High Contrast</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.largeText}
                    onChange={(e) => setSettings(prev => ({ ...prev, largeText: e.target.checked }))}
                    className="w-4 h-4 text-purple-600 bg-slate-800 border-slate-600 rounded focus:ring-purple-500"
                  />
                  <Type className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-white">Large Text</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.dyslexiaFriendly}
                    onChange={(e) => setSettings(prev => ({ ...prev, dyslexiaFriendly: e.target.checked }))}
                    className="w-4 h-4 text-purple-600 bg-slate-800 border-slate-600 rounded focus:ring-purple-500"
                  />
                  <RotateCcw className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-white">Dyslexia Friendly</span>
                </label>
              </div>

              {/* Navigation & Interaction */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                  Navigation & Interaction
                </h4>
                
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.keyboardNavigation}
                    onChange={(e) => setSettings(prev => ({ ...prev, keyboardNavigation: e.target.checked }))}
                    className="w-4 h-4 text-purple-600 bg-slate-800 border-slate-600 rounded focus:ring-purple-500"
                  />
                  <Keyboard className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-white">Enhanced Keyboard Navigation</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.focusIndicators}
                    onChange={(e) => setSettings(prev => ({ ...prev, focusIndicators: e.target.checked }))}
                    className="w-4 h-4 text-purple-600 bg-slate-800 border-slate-600 rounded focus:ring-purple-500"
                  />
                  <MousePointer className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-white">Focus Indicators</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.reducedMotion}
                    onChange={(e) => setSettings(prev => ({ ...prev, reducedMotion: e.target.checked }))}
                    className="w-4 h-4 text-purple-600 bg-slate-800 border-slate-600 rounded focus:ring-purple-500"
                  />
                  <Eye className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-white">Reduced Motion</span>
                </label>
              </div>

              {/* Zoom Control */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                  Zoom Control
                </h4>
                
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, zoomLevel: Math.max(50, prev.zoomLevel - 10) }))}
                    className="p-2 bg-slate-800/50 text-purple-400 rounded-lg hover:bg-slate-700/50 transition-colors"
                    aria-label="Zoom out"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  
                  <span className="text-sm text-white min-w-[4rem] text-center">
                    {settings.zoomLevel}%
                  </span>
                  
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, zoomLevel: Math.min(200, prev.zoomLevel + 10) }))}
                    className="p-2 bg-slate-800/50 text-purple-400 rounded-lg hover:bg-slate-700/50 transition-colors"
                    aria-label="Zoom in"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Accessibility Scan */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                  Accessibility Scan
                </h4>
                
                <button
                  onClick={scanAccessibility}
                  disabled={isScanning}
                  className="w-full flex items-center justify-center space-x-2 p-3 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors disabled:opacity-50"
                >
                  {isScanning ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Settings className="w-4 h-4" />
                    </motion.div>
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                  <span className="text-sm">
                    {isScanning ? 'Scanning...' : 'Scan for Issues'}
                  </span>
                </button>

                {accessibilityIssues.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-yellow-400">
                      <AlertTriangle className="w-4 h-4" />
                      <span>{accessibilityIssues.length} issues found</span>
                    </div>
                    <div className="max-h-32 overflow-y-auto space-y-1">
                      {accessibilityIssues.slice(0, 5).map((issue, index) => (
                        <div key={index} className="text-xs text-gray-400 bg-slate-800/50 p-2 rounded">
                          {issue}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                  Quick Actions
                </h4>
                
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }))}
                    className="flex items-center justify-center space-x-2 p-2 bg-slate-800/50 text-gray-300 hover:text-white rounded-lg transition-colors"
                  >
                    <Contrast className="w-4 h-4" />
                    <span className="text-xs">Toggle Contrast</span>
                  </button>
                  
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, largeText: !prev.largeText }))}
                    className="flex items-center justify-center space-x-2 p-2 bg-slate-800/50 text-gray-300 hover:text-white rounded-lg transition-colors"
                  >
                    <Type className="w-4 h-4" />
                    <span className="text-xs">Toggle Text Size</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
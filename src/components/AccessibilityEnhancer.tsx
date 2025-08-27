import React, { useState, useEffect } from 'react';
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
  Monitor,
  Smartphone,
  X
} from 'lucide-react';

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showControls?: boolean;
}

export function AccessibilityEnhancer({ 
  enabled = true, 
  showControls = true 
}: AccessibilityEnhancerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [focusIndicator, setFocusIndicator] = useState(true);
  const [screenReader, setScreenReader] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    // Apply accessibility settings
    applyAccessibilitySettings();
    
    // Setup keyboard shortcuts
    setupKeyboardShortcuts();
    
    // Monitor focus for better navigation
    monitorFocus();
    
    // Setup screen reader announcements
    setupScreenReader();
  }, [enabled, highContrast, largeText, reducedMotion, focusIndicator]);

  const applyAccessibilitySettings = () => {
    const root = document.documentElement;
    
    // High contrast mode
    if (highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--zion-cyan', '#00ffff');
      root.style.setProperty('--zion-cyan-light', '#80ffff');
      root.style.setProperty('--zion-cyan-dark', '#008080');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--zion-cyan');
      root.style.removeProperty('--zion-cyan-light');
      root.style.removeProperty('--zion-cyan-dark');
    }
    
    // Large text mode
    if (largeText) {
      root.classList.add('large-text');
      root.style.fontSize = '18px';
    } else {
      root.classList.remove('large-text');
      root.style.fontSize = '';
    }
    
    // Reduced motion
    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Focus indicator
    if (focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  };

  const setupKeyboardShortcuts = () => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt + A: Toggle accessibility panel
      if (e.altKey && e.key === 'a') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      
      // Alt + H: Toggle high contrast
      if (e.altKey && e.key === 'h') {
        e.preventDefault();
        setHighContrast(prev => !prev);
      }
      
      // Alt + L: Toggle large text
      if (e.altKey && e.key === 'l') {
        e.preventDefault();
        setLargeText(prev => !prev);
      }
      
      // Alt + M: Toggle reduced motion
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        setReducedMotion(prev => !prev);
      }
      
      // Alt + F: Toggle focus indicator
      if (e.altKey && e.key === 'f') {
        e.preventDefault();
        setFocusIndicator(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  };

  const monitorFocus = () => {
    const handleFocusChange = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      
      // Add focus ring to focused elements
      if (focusIndicator && target) {
        target.style.outline = '2px solid #0ea5e9';
        target.style.outlineOffset = '2px';
        
        // Remove focus ring after focus is lost
        setTimeout(() => {
          if (target !== document.activeElement) {
            target.style.outline = '';
            target.style.outlineOffset = '';
          }
        }, 100);
      }
    };

    document.addEventListener('focusin', handleFocusChange);
    document.addEventListener('focusout', handleFocusChange);
    
    return () => {
      document.removeEventListener('focusin', handleFocusChange);
      document.removeEventListener('focusout', handleFocusChange);
    };
  };

  const setupScreenReader = () => {
    if (screenReader) {
      // Create live region for announcements
      let liveRegion = document.getElementById('accessibility-live-region');
      if (!liveRegion) {
        liveRegion = document.createElement('div');
        liveRegion.id = 'accessibility-live-region';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        document.body.appendChild(liveRegion);
      }
    }
  };

  const announceToScreenReader = (message: string) => {
    if (screenReader) {
      const liveRegion = document.getElementById('accessibility-live-region');
      if (liveRegion) {
        liveRegion.textContent = message;
        setTimeout(() => {
          liveRegion.textContent = '';
        }, 1000);
      }
    }
  };

  const toggleHighContrast = () => {
    setHighContrast(prev => {
      const newValue = !prev;
      announceToScreenReader(`High contrast mode ${newValue ? 'enabled' : 'disabled'}`);
      return newValue;
    });
  };

  const toggleLargeText = () => {
    setLargeText(prev => {
      const newValue = !prev;
      announceToScreenReader(`Large text mode ${newValue ? 'enabled' : 'disabled'}`);
      return newValue;
    });
  };

  const toggleReducedMotion = () => {
    setReducedMotion(prev => {
      const newValue = !prev;
      announceToScreenReader(`Reduced motion mode ${newValue ? 'enabled' : 'disabled'}`);
      return newValue;
    });
  };

  const toggleFocusIndicator = () => {
    setFocusIndicator(prev => {
      const newValue = !prev;
      announceToScreenReader(`Focus indicator ${newValue ? 'enabled' : 'disabled'}`);
      return newValue;
    });
  };

  const toggleScreenReader = () => {
    setScreenReader(prev => {
      const newValue = !prev;
      if (newValue) {
        announceToScreenReader('Screen reader mode enabled');
      }
      return newValue;
    });
  };

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Toggle Button */}
      {showControls && (
        <button
          onClick={() => setIsOpen(prev => !prev)}
          className="fixed top-4 right-4 z-50 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
          aria-label="Accessibility controls"
          aria-expanded={isOpen}
          aria-controls="accessibility-panel"
        >
          <Eye className="w-5 h-5" />
        </button>
      )}

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="accessibility-panel"
            className="fixed top-20 right-4 z-50 w-80 bg-slate-900/95 backdrop-blur-md border border-cyan-400/30 rounded-xl shadow-2xl shadow-cyan-500/20"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-label="Accessibility settings"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Accessibility</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Contrast className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">High Contrast</span>
                  </div>
                  <button
                    onClick={toggleHighContrast}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      highContrast ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                    role="switch"
                    aria-checked={highContrast}
                    aria-label="Toggle high contrast mode"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        highContrast ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Large Text */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Type className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">Large Text</span>
                  </div>
                  <button
                    onClick={toggleLargeText}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      largeText ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                    role="switch"
                    aria-checked={largeText}
                    aria-label="Toggle large text mode"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        largeText ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <MousePointer className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">Reduced Motion</span>
                  </div>
                  <button
                    onClick={toggleReducedMotion}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      reducedMotion ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                    role="switch"
                    aria-checked={reducedMotion}
                    aria-label="Toggle reduced motion mode"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        reducedMotion ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Focus Indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Keyboard className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">Focus Indicator</span>
                  </div>
                  <button
                    onClick={toggleFocusIndicator}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      focusIndicator ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                    role="switch"
                    aria-checked={focusIndicator}
                    aria-label="Toggle focus indicator"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        focusIndicator ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Screen Reader */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Monitor className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">Screen Reader</span>
                  </div>
                  <button
                    onClick={toggleScreenReader}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      screenReader ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                    role="switch"
                    aria-checked={screenReader}
                    aria-label="Toggle screen reader mode"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        screenReader ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Keyboard Shortcuts Help */}
              <div className="mt-6 p-4 bg-slate-800/50 rounded-lg">
                <h3 className="text-sm font-semibold text-cyan-400 mb-2">Keyboard Shortcuts</h3>
                <div className="text-xs text-gray-300 space-y-1">
                  <div>Alt + A: Toggle accessibility panel</div>
                  <div>Alt + H: Toggle high contrast</div>
                  <div>Alt + L: Toggle large text</div>
                  <div>Alt + M: Toggle reduced motion</div>
                  <div>Alt + F: Toggle focus indicator</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Live Region */}
      <div id="accessibility-live-region" className="sr-only" aria-live="polite" aria-atomic="true" />
    </>
  );
}
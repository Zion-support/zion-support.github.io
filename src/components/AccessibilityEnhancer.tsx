import React, { memo, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Volume2, VolumeX, Keyboard, MousePointer, Sun, Moon, Contrast, ZoomIn, ZoomOut } from 'lucide-react';

interface AccessibilityEnhancerProps {
  showControls?: boolean;
}

export const AccessibilityEnhancer = memo<AccessibilityEnhancerProps>(({ showControls = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isMuted, setIsMuted] = useState(false);
  const [showKeyboardShortcuts, setShowKeyboardShortcuts] = useState(false);

  // Keyboard shortcuts
  const handleKeyboardShortcuts = useCallback((e: KeyboardEvent) => {
    // Ctrl/Cmd + Plus to increase font size
    if ((e.ctrlKey || e.metaKey) && e.key === '=') {
      e.preventDefault();
      setFontSize(prev => Math.min(prev + 2, 24));
    }
    
    // Ctrl/Cmd + Minus to decrease font size
    if ((e.ctrlKey || e.metaKey) && e.key === '-') {
      e.preventDefault();
      setFontSize(prev => Math.max(prev - 2, 12));
    }
    
    // Ctrl/Cmd + 0 to reset font size
    if ((e.ctrlKey || e.metaKey) && e.key === '0') {
      e.preventDefault();
      setFontSize(16);
    }
    
    // Alt + H to toggle high contrast
    if (e.altKey && e.key === 'h') {
      e.preventDefault();
      setHighContrast(prev => !prev);
    }
    
    // Alt + M to toggle reduced motion
    if (e.altKey && e.key === 'm') {
      e.preventDefault();
      setReducedMotion(prev => !prev);
    }
  }, []);

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    
    // Apply font size
    root.style.fontSize = `${fontSize}px`;
    
    // Apply high contrast
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Apply reduced motion
    if (reducedMotion) {
      root.classList.add('reduce-motion');
    } else {
      root.classList.remove('reduce-motion');
    }
  }, [fontSize, highContrast, reducedMotion]);

  // Setup keyboard shortcuts
  useEffect(() => {
    document.addEventListener('keydown', handleKeyboardShortcuts);
    return () => document.removeEventListener('keydown', handleKeyboardShortcuts);
  }, [handleKeyboardShortcuts]);

  // Focus management
  useEffect(() => {
    const focusableElements = document.querySelectorAll(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach((el, index) => {
      if (el instanceof HTMLElement) {
        el.setAttribute('tabindex', index.toString());
      }
    });
  }, []);

  // Screen reader announcements
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
  }, []);

  const toggleHighContrast = useCallback(() => {
    setHighContrast(prev => {
      const newValue = !prev;
      announceToScreenReader(`High contrast mode ${newValue ? 'enabled' : 'disabled'}`);
      return newValue;
    });
  }, [announceToScreenReader]);

  const toggleReducedMotion = useCallback(() => {
    setReducedMotion(prev => {
      const newValue = !prev;
      announceToScreenReader(`Reduced motion ${newValue ? 'enabled' : 'disabled'}`);
      return newValue;
    });
  }, [announceToScreenReader]);

  const increaseFontSize = useCallback(() => {
    setFontSize(prev => {
      const newSize = Math.min(prev + 2, 24);
      announceToScreenReader(`Font size increased to ${newSize}px`);
      return newSize;
    });
  }, [announceToScreenReader]);

  const decreaseFontSize = useCallback(() => {
    setFontSize(prev => {
      const newSize = Math.max(prev - 2, 12);
      announceToScreenReader(`Font size decreased to ${newSize}px`);
      return newSize;
    });
  }, [announceToScreenReader]);

  const resetFontSize = useCallback(() => {
    setFontSize(16);
    announceToScreenReader('Font size reset to default');
  }, [announceToScreenReader]);

  if (!showControls) return null;

  return (
    <>
      {/* Accessibility Controls */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 right-4 bg-zion-slate-light/95 backdrop-blur-sm border border-zion-cyan/30 rounded-lg p-4 text-white shadow-2xl z-50"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <span className="font-semibold text-zion-cyan">Accessibility</span>
        </div>
        
        <div className="space-y-3">
          {/* Font Size Controls */}
          <div className="flex items-center gap-2">
            <ZoomOut className="w-4 h-4 text-zion-cyan" />
            <button
              onClick={decreaseFontSize}
              className="px-2 py-1 bg-zion-cyan/20 hover:bg-zion-cyan/30 rounded text-xs transition-colors"
              aria-label="Decrease font size"
            >
              A-
            </button>
            <span className="text-xs min-w-[2rem] text-center">{fontSize}px</span>
            <button
              onClick={increaseFontSize}
              className="px-2 py-1 bg-zion-cyan/20 hover:bg-zion-cyan/30 rounded text-xs transition-colors"
              aria-label="Increase font size"
            >
              A+
            </button>
            <button
              onClick={resetFontSize}
              className="px-2 py-1 bg-zion-cyan/20 hover:bg-zion-cyan/30 rounded text-xs transition-colors"
              aria-label="Reset font size"
            >
              Reset
            </button>
          </div>
          
          {/* High Contrast Toggle */}
          <button
            onClick={toggleHighContrast}
            className={`w-full flex items-center gap-2 px-3 py-2 rounded transition-colors ${
              highContrast 
                ? 'bg-zion-cyan text-white' 
                : 'bg-zion-cyan/20 hover:bg-zion-cyan/30'
            }`}
            aria-label={`${highContrast ? 'Disable' : 'Enable'} high contrast mode`}
          >
            <Contrast className="w-4 h-4" />
            <span className="text-xs">High Contrast</span>
          </button>
          
          {/* Reduced Motion Toggle */}
          <button
            onClick={toggleReducedMotion}
            className={`w-full flex items-center gap-2 px-3 py-2 rounded transition-colors ${
              reducedMotion 
                ? 'bg-zion-cyan text-white' 
                : 'bg-zion-cyan/20 hover:bg-zion-cyan/30'
            }`}
            aria-label={`${reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
          >
            {reducedMotion ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            <span className="text-xs">Reduced Motion</span>
          </button>
          
          {/* Keyboard Shortcuts Help */}
          <button
            onClick={() => setShowKeyboardShortcuts(!showKeyboardShortcuts)}
            className="w-full flex items-center gap-2 px-3 py-2 bg-zion-cyan/20 hover:bg-zion-cyan/30 rounded transition-colors"
            aria-label="Show keyboard shortcuts"
          >
            <Keyboard className="w-4 h-4" />
            <span className="text-xs">Keyboard Shortcuts</span>
          </button>
        </div>
      </motion.div>

      {/* Keyboard Shortcuts Modal */}
      <AnimatePresence>
        {showKeyboardShortcuts && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowKeyboardShortcuts(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zion-slate-light border border-zion-cyan/30 rounded-lg p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold text-zion-cyan mb-4">Keyboard Shortcuts</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Increase Font Size:</span>
                  <kbd className="px-2 py-1 bg-zion-slate rounded text-xs">Ctrl/Cmd + +</kbd>
                </div>
                <div className="flex justify-between">
                  <span>Decrease Font Size:</span>
                  <kbd className="px-2 py-1 bg-zion-slate rounded text-xs">Ctrl/Cmd + -</kbd>
                </div>
                <div className="flex justify-between">
                  <span>Reset Font Size:</span>
                  <kbd className="px-2 py-1 bg-zion-slate rounded text-xs">Ctrl/Cmd + 0</kbd>
                </div>
                <div className="flex justify-between">
                  <span>Toggle High Contrast:</span>
                  <kbd className="px-2 py-1 bg-zion-slate rounded text-xs">Alt + H</kbd>
                </div>
                <div className="flex justify-between">
                  <span>Toggle Reduced Motion:</span>
                  <kbd className="px-2 py-1 bg-zion-slate rounded text-xs">Alt + M</kbd>
                </div>
              </div>
              <button
                onClick={() => setShowKeyboardShortcuts(false)}
                className="mt-4 w-full px-4 py-2 bg-zion-cyan hover:bg-zion-cyan/80 rounded transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Only Styles */}
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
        
        .high-contrast {
          --zion-bg-primary: 0 0 0;
          --zion-bg-secondary: 255 255 255;
          --zion-text-primary: 255 255 255;
          --zion-text-secondary: 0 0 0;
        }
        
        .reduce-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `}</style>
    </>
  );
});

AccessibilityEnhancer.displayName = 'AccessibilityEnhancer';
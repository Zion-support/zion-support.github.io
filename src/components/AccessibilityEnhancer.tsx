import React, { useEffect, useState } from 'react';
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
  X
} from 'lucide-react';

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showControls?: boolean;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showControls = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [focusIndicator, setFocusIndicator] = useState(true);
  const [screenReader, setScreenReader] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    // Apply accessibility enhancements
    const root = document.documentElement;
    
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    if (focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Add ARIA landmarks
    const addAriaLandmarks = () => {
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
        main.setAttribute('aria-label', 'Main content');
      }

      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Main navigation');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }
    };

    addAriaLandmarks();

    // Enhance form accessibility
    const enhanceForms = () => {
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
          const label = input.previousElementSibling;
          if (label && label.tagName === 'LABEL') {
            input.setAttribute('aria-labelledby', label.id || 'label-' + Math.random().toString(36).substr(2, 9));
          }
        }
      });
    };

    enhanceForms();

    // Add skip links
    const addSkipLinks = () => {
      if (!document.getElementById('skip-to-main')) {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.id = 'skip-to-main';
        skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded z-50';
        document.body.insertBefore(skipLink, document.body.firstChild);
      }
    };

    addSkipLinks();

  }, [enabled, highContrast, largeText, reducedMotion, focusIndicator]);

  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key to close modals
      if (e.key === 'Escape') {
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach(modal => {
          if (modal.classList.contains('open')) {
            modal.classList.remove('open');
          }
        });
      }

      // Tab key navigation enhancement
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  // Screen reader announcements
  const announceToScreenReader = (message: string) => {
    if (screenReader) {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    announceToScreenReader(`High contrast ${!highContrast ? 'enabled' : 'disabled'}`);
  };

  const toggleLargeText = () => {
    setLargeText(!largeText);
    announceToScreenReader(`Large text ${!largeText ? 'enabled' : 'disabled'}`);
  };

  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion);
    announceToScreenReader(`Reduced motion ${!reducedMotion ? 'enabled' : 'disabled'}`);
  };

  const toggleFocusIndicator = () => {
    setFocusIndicator(!focusIndicator);
    announceToScreenReader(`Focus indicator ${!focusIndicator ? 'enabled' : 'disabled'}`);
  };

  if (!enabled || !showControls) return null;

  return (
    <>
      {/* Accessibility Controls */}
      <motion.div
        className="fixed top-4 right-4 z-50"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-black/80 hover:bg-black text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
          aria-label="Accessibility options"
          aria-expanded={isVisible}
        >
          <Eye className="w-5 h-5" />
        </button>
      </motion.div>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed top-20 right-4 bg-black/90 backdrop-blur-md rounded-lg p-6 text-white z-50 min-w-80"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Accessibility</h3>
              <button
                onClick={() => setIsVisible(false)}
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
                  <span>High Contrast</span>
                </div>
                <button
                  onClick={toggleHighContrast}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    highContrast 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-pressed={highContrast}
                >
                  {highContrast ? 'On' : 'Off'}
                </button>
              </div>

              {/* Large Text */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Type className="w-5 h-5 text-green-400" />
                  <span>Large Text</span>
                </div>
                <button
                  onClick={toggleLargeText}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    largeText 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-pressed={largeText}
                >
                  {largeText ? 'On' : 'Off'}
                </button>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <MousePointer className="w-5 h-5 text-purple-400" />
                  <span>Reduced Motion</span>
                </div>
                <button
                  onClick={toggleReducedMotion}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    reducedMotion 
                      ? 'bg-purple-500 text-white' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-pressed={reducedMotion}
                >
                  {reducedMotion ? 'On' : 'Off'}
                </button>
              </div>

              {/* Focus Indicator */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Keyboard className="w-5 h-5 text-yellow-400" />
                  <span>Focus Indicator</span>
                </div>
                <button
                  onClick={toggleFocusIndicator}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    focusIndicator 
                      ? 'bg-yellow-500 text-white' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-pressed={focusIndicator}
                >
                  {focusIndicator ? 'On' : 'Off'}
                </button>
              </div>

              {/* Device Detection */}
              <div className="pt-4 border-t border-gray-600">
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  {navigator.userAgent.includes('Mobile') ? (
                    <Smartphone className="w-4 h-4" />
                  ) : (
                    <Monitor className="w-4 h-4" />
                  )}
                  <span>
                    {navigator.userAgent.includes('Mobile') ? 'Mobile' : 'Desktop'} detected
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global CSS Classes for Accessibility */}
      <style jsx global>{`
        .high-contrast {
          --tw-bg-opacity: 1;
          --tw-text-opacity: 1;
        }
        
        .high-contrast * {
          background-color: black !important;
          color: white !important;
          border-color: white !important;
        }
        
        .large-text {
          font-size: 1.2em;
        }
        
        .large-text * {
          font-size: 1.2em;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .focus-visible *:focus {
          outline: 3px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }
        
        .keyboard-navigation *:focus {
          outline: 3px solid #06b6d4 !important;
          outline-offset: 2px !important;
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
    </>
  );
};

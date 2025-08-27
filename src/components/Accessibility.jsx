import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SkipForward, 
  Volume2, 
  VolumeX, 
  Eye, 
  EyeOff, 
  Sun, 
  Moon,
  Accessibility,
  X
} from 'lucide-react';

export function AccessibilityProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    // Check user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);

    // Apply accessibility settings
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    if (reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    // Apply font size
    document.documentElement.style.fontSize = fontSize === 'large' ? '18px' : 
                                           fontSize === 'xlarge' ? '20px' : '16px';
  }, [highContrast, reducedMotion, fontSize]);

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
  };

  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion);
  };

  const increaseFontSize = () => {
    if (fontSize === 'normal') setFontSize('large');
    else if (fontSize === 'large') setFontSize('xlarge');
  };

  const decreaseFontSize = () => {
    if (fontSize === 'xlarge') setFontSize('large');
    else if (fontSize === 'large') setFontSize('normal');
  };

  const resetSettings = () => {
    setHighContrast(false);
    setReducedMotion(false);
    setFontSize('normal');
    setMuted(false);
  };

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-zion-cyan focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2"
      >
        Skip to main content
      </a>

      {/* Accessibility toolbar */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-zion-cyan text-white rounded-full shadow-lg hover:bg-zion-cyan-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2"
          aria-label="Accessibility settings"
          aria-expanded={isOpen}
        >
          <Accessibility className="w-5 h-5" />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 right-0 w-80 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Accessibility</h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-zion-slate-light hover:text-white transition-colors"
                    aria-label="Close accessibility panel"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  {/* High Contrast */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Eye className="w-5 h-5 text-zion-cyan" />
                      <span className="text-white">High Contrast</span>
                    </div>
                    <button
                      onClick={toggleHighContrast}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        highContrast ? 'bg-zion-cyan' : 'bg-zion-slate'
                      }`}
                      aria-pressed={highContrast}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          highContrast ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Reduced Motion */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <SkipForward className="w-5 h-5 text-zion-cyan" />
                      <span className="text-white">Reduced Motion</span>
                    </div>
                    <button
                      onClick={toggleReducedMotion}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        reducedMotion ? 'bg-zion-cyan' : 'bg-zion-slate'
                      }`}
                      aria-pressed={reducedMotion}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          reducedMotion ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Font Size */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Eye className="w-5 h-5 text-zion-cyan" />
                      <span className="text-white">Font Size</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={decreaseFontSize}
                        disabled={fontSize === 'normal'}
                        className="px-3 py-1 bg-zion-slate rounded text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zion-slate-light transition-colors"
                        aria-label="Decrease font size"
                      >
                        A-
                      </button>
                      <span className="text-zion-slate-light text-sm min-w-[3rem] text-center">
                        {fontSize === 'normal' ? 'Normal' : fontSize === 'large' ? 'Large' : 'X-Large'}
                      </span>
                      <button
                        onClick={increaseFontSize}
                        disabled={fontSize === 'xlarge'}
                        className="px-3 py-1 bg-zion-slate rounded text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zion-slate-light transition-colors"
                        aria-label="Increase font size"
                      >
                        A+
                      </button>
                    </div>
                  </div>

                  {/* Reset Button */}
                  <button
                    onClick={resetSettings}
                    className="w-full px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-lg hover:bg-zion-cyan/30 transition-colors duration-300"
                  >
                    Reset to Defaults
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main content wrapper with ID for skip link */}
      <main id="main-content">
        {children}
      </main>
    </>
  );
}

export function SkipLink({ href, children }) {
  return (
    <a
      href={href}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-zion-cyan focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2"
    >
      {children}
    </a>
  );
}

export function FocusTrap({ children, isActive = false }) {
  useEffect(() => {
    if (!isActive) return;

    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const firstFocusableElement = document.querySelector(focusableElements);
    const focusableContent = document.querySelectorAll(focusableElements);
    const lastFocusableElement = focusableContent[focusableContent.length - 1];

    const handleTabKey = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    firstFocusableElement?.focus();

    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [isActive]);

  return children;
}

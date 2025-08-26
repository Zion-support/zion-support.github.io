import React, { useEffect, useState, useCallback } from 'react';
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
  Accessibility,
  X
} from 'lucide-react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mutedAudio, setMutedAudio] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);

  // Load accessibility preferences from localStorage
  useEffect(() => {
    const savedPreferences = localStorage.getItem('accessibility-preferences');
    if (savedPreferences) {
      const prefs = JSON.parse(savedPreferences);
      setHighContrast(prefs.highContrast || false);
      setLargeText(prefs.largeText || false);
      setReducedMotion(prefs.reducedMotion || false);
      setMutedAudio(prefs.mutedAudio || false);
    }
  }, []);

  // Save preferences to localStorage
  const savePreferences = useCallback(() => {
    const preferences = {
      highContrast,
      largeText,
      reducedMotion,
      mutedAudio
    };
    localStorage.setItem('accessibility-preferences', JSON.stringify(preferences));
  }, [highContrast, largeText, reducedMotion, mutedAudio]);

  // Apply accessibility features
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast mode
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text mode
    if (largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Reduced motion
    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    savePreferences();
  }, [highContrast, largeText, reducedMotion, savePreferences]);

  // Focus management
  useEffect(() => {
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setFocusVisible(true);
        document.body.classList.add('focus-visible');
      }
    };

    const handleMouseDown = () => {
      setFocusVisible(false);
      document.body.classList.remove('focus-visible');
    };

    document.addEventListener('keydown', handleTabKey);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleTabKey);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  // Audio muting
  useEffect(() => {
    const audioElements = document.querySelectorAll('audio, video');
    audioElements.forEach((element: HTMLAudioElement | HTMLVideoElement) => {
      element.muted = mutedAudio;
    });
  }, [mutedAudio]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key to close accessibility panel
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }

      // Alt + A to toggle accessibility panel
      if (e.altKey && e.key === 'a') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Accessibility Options"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="accessibility-panel"
            className="fixed bottom-24 right-6 z-50 w-80 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Accessibility Options
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors"
                aria-label="Close accessibility panel"
              >
                <X className="w-5 h-5 text-slate-500 dark:text-slate-400" />
              </button>
            </div>

            {/* Options */}
            <div className="p-4 space-y-4">
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Contrast className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  <span className="text-slate-700 dark:text-slate-300">High Contrast</span>
                </div>
                <button
                  onClick={() => setHighContrast(!highContrast)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                    highContrast ? 'bg-cyan-600' : 'bg-slate-200 dark:bg-slate-600'
                  }`}
                  aria-label={`${highContrast ? 'Disable' : 'Enable'} high contrast mode`}
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
                <div className="flex items-center gap-3">
                  <ZoomIn className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  <span className="text-slate-700 dark:text-slate-300">Large Text</span>
                </div>
                <button
                  onClick={() => setLargeText(!largeText)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                    largeText ? 'bg-cyan-600' : 'bg-slate-200 dark:bg-slate-600'
                  }`}
                  aria-label={`${largeText ? 'Disable' : 'Enable'} large text mode`}
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
                <div className="flex items-center gap-3">
                  <Sun className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  <span className="text-slate-700 dark:text-slate-300">Reduced Motion</span>
                </div>
                <button
                  onClick={() => setReducedMotion(!reducedMotion)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                    reducedMotion ? 'bg-cyan-600' : 'bg-slate-200 dark:bg-slate-600'
                  }`}
                  aria-label={`${reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      reducedMotion ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Audio Muting */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {mutedAudio ? (
                    <VolumeX className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  )}
                  <span className="text-slate-700 dark:text-slate-300">Mute Audio</span>
                </div>
                <button
                  onClick={() => setMutedAudio(!mutedAudio)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                    mutedAudio ? 'bg-cyan-600' : 'bg-slate-200 dark:bg-slate-600'
                  }`}
                  aria-label={`${mutedAudio ? 'Unmute' : 'Mute'} audio`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      mutedAudio ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-700">
              <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                Press Alt + A to toggle this panel
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Apply accessibility features to children */}
      <div className={`
        ${highContrast ? 'high-contrast' : ''}
        ${largeText ? 'large-text' : ''}
        ${reducedMotion ? 'reduced-motion' : ''}
        ${focusVisible ? 'focus-visible' : ''}
      `}>
        {children}
      </div>
    </>
  );
};

// CSS classes for accessibility features
export const accessibilityStyles = `
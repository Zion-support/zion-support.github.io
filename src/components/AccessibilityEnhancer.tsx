import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  Keyboard,
  Accessibility,
  X
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showControls?: boolean;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showControls = true
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: false
  });

  // Apply accessibility settings to the document
  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    
    // High contrast mode
    if (settings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#e5e7eb');
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--bg-secondary', '#1f2937');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--text-secondary');
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--bg-secondary');
    }

    // Large text mode
    if (settings.largeText) {
      root.style.fontSize = '18px';
      root.style.lineHeight = '1.6';
    } else {
      root.style.fontSize = '';
      root.style.lineHeight = '';
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.1s');
      root.style.setProperty('--transition-duration', '0.1s');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }

    // Focus indicator
    if (settings.focusIndicator) {
      root.classList.add('enhanced-focus');
    } else {
      root.classList.remove('enhanced-focus');
    }

    // Screen reader announcements
    if (settings.screenReader) {
      const announce = (message: string) => {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
          document.body.removeChild(announcement);
        }, 1000);
      };

      // Announce page changes
      announce('Accessibility settings updated');
    }

  }, [settings, enabled]);

  // Keyboard navigation support
  useEffect(() => {
    if (!enabled || !settings.keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key) {
        case 'Tab':
          // Enhanced tab navigation
          const focusableElements = document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
          break;

        case 'Escape':
          // Close modals or return to main content
          const modals = document.querySelectorAll('[role="dialog"]');
          if (modals.length > 0) {
            const lastModal = modals[modals.length - 1] as HTMLElement;
            lastModal.focus();
          }
          break;

        case 'h':
        case 'H':
          // Navigate to home
          if (e.ctrlKey) {
            e.preventDefault();
            const homeLink = document.querySelector('a[href="/"]') as HTMLAnchorElement;
            if (homeLink) homeLink.click();
          }
          break;

        case 's':
        case 'S':
          // Navigate to services
          if (e.ctrlKey) {
            e.preventDefault();
            const servicesLink = document.querySelector('a[href="/services"]') as HTMLAnchorElement;
            if (servicesLink) servicesLink.click();
          }
          break;

        case 'c':
        case 'C':
          // Navigate to contact
          if (e.ctrlKey) {
            e.preventDefault();
            const contactLink = document.querySelector('a[href="/contact"]') as HTMLAnchorElement;
            if (contactLink) contactLink.click();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enabled, settings.keyboardNavigation]);

  // Skip to main content functionality
  useEffect(() => {
    if (!enabled) return;

    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded z-50';
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    return () => {
      if (document.body.contains(skipLink)) {
        document.body.removeChild(skipLink);
      }
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Controls Button */}
      {showControls && (
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 right-4 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Accessibility Settings"
          aria-expanded={isOpen}
        >
          <Accessibility size={20} />
        </motion.button>
      )}

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-20 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-2xl p-6 w-80 z-50"
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                Accessibility Settings
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label="Close accessibility settings"
              >
                <X size={20} />
              </button>
            </div>

            {/* Settings */}
            <div className="space-y-4">
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Contrast size={18} className="text-cyan-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
                </div>
                <button
                  onClick={() => setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.highContrast ? 'bg-cyan-500' : 'bg-gray-300'
                  }`}
                  aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast mode`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Large Text */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Type size={18} className="text-cyan-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>
                </div>
                <button
                  onClick={() => setSettings(prev => ({ ...prev, largeText: !prev.largeText }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.largeText ? 'bg-cyan-500' : 'bg-gray-300'
                  }`}
                  aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text mode`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.largeText ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Eye size={18} className="text-cyan-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Reduced Motion</span>
                </div>
                <button
                  onClick={() => setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-cyan-500' : 'bg-gray-300'
                  }`}
                  aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Enhanced Focus */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Keyboard size={18} className="text-cyan-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Enhanced Focus</span>
                </div>
                <button
                  onClick={() => setSettings(prev => ({ ...prev, focusIndicator: !prev.focusIndicator }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.focusIndicator ? 'bg-cyan-500' : 'bg-gray-300'
                  }`}
                  aria-label={`${settings.focusIndicator ? 'Disable' : 'Enable'} enhanced focus indicators`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Keyboard Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Keyboard size={18} className="text-cyan-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Keyboard Nav</span>
                </div>
                <button
                  onClick={() => setSettings(prev => ({ ...prev, keyboardNavigation: !prev.keyboardNavigation }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.keyboardNavigation ? 'bg-cyan-500' : 'bg-gray-300'
                  }`}
                  aria-label={`${settings.keyboardNavigation ? 'Disable' : 'Enable'} enhanced keyboard navigation`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Keyboard Shortcuts Help */}
            {settings.keyboardNavigation && (
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Keyboard Shortcuts
                </h3>
                <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                  <div>Ctrl + H: Go to Home</div>
                  <div>Ctrl + S: Go to Services</div>
                  <div>Ctrl + C: Go to Contact</div>
                  <div>Tab: Navigate elements</div>
                  <div>Escape: Close modals</div>
                </div>
              </div>
            )}

            {/* Reset Button */}
            <button
              onClick={() => setSettings({
                highContrast: false,
                largeText: false,
                reducedMotion: false,
                screenReader: false,
                keyboardNavigation: false,
                focusIndicator: false
              })}
              className="mt-4 w-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Reset to Default
            </button>
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
          color-scheme: dark;
        }
        
        .enhanced-focus *:focus {
          outline: 3px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }
        
        .skip-link:focus {
          position: absolute !important;
          width: auto !important;
          height: auto !important;
          padding: 8px 16px !important;
          margin: 0 !important;
          overflow: visible !important;
          clip: auto !important;
          white-space: normal !important;
        }
      `}</style>
    </>
  );
};
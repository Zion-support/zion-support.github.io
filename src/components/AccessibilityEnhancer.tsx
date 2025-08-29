import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Volume2, VolumeX, Keyboard, MousePointer } from 'lucide-react';

interface AccessibilityEnhancerProps {
  enableHighContrast?: boolean;
  enableLargeText?: boolean;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableHighContrast = true,
  enableLargeText = true,
  enableKeyboardNavigation = true,
  enableScreenReader = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);

  // Initialize accessibility features
  useEffect(() => {
    // Check user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);

    // Apply focus-visible styles
    if (enableKeyboardNavigation) {
      document.documentElement.classList.add('focus-visible');
      setFocusVisible(true);
    }

    // Listen for preference changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [enableKeyboardNavigation]);

  // High contrast mode
  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
      document.documentElement.style.setProperty('--color-primary', '#ffffff');
      document.documentElement.style.setProperty('--color-secondary', '#000000');
      document.documentElement.style.setProperty('--color-accent', '#ffff00');
    } else {
      document.documentElement.classList.remove('high-contrast');
      document.documentElement.style.removeProperty('--color-primary');
      document.documentElement.style.removeProperty('--color-secondary');
      document.documentElement.style.removeProperty('--color-accent');
    }
  }, [highContrast]);

  // Large text mode
  useEffect(() => {
    if (largeText) {
      document.documentElement.classList.add('large-text');
      document.documentElement.style.fontSize = '18px';
      document.documentElement.style.lineHeight = '1.6';
    } else {
      document.documentElement.classList.remove('large-text');
      document.documentElement.style.fontSize = '';
      document.documentElement.style.lineHeight = '';
    }
  }, [largeText]);

  // Reduced motion
  useEffect(() => {
    if (reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
      document.documentElement.style.setProperty('--transition-duration', '0.01ms');
    } else {
      document.documentElement.classList.remove('reduced-motion');
      document.documentElement.style.removeProperty('--transition-duration');
    }
  }, [reducedMotion]);

  // Keyboard navigation enhancements
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.altKey) {
        e.preventDefault();
        const mainContent = document.querySelector('main') || document.querySelector('#main');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }

      // Toggle accessibility panel
      if (e.key === 'F1') {
        e.preventDefault();
        setIsVisible(!isVisible);
      }
    };

    // Enhanced focus management
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.tagName === 'INPUT') {
        target.setAttribute('aria-describedby', 'focus-description');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
    };
  }, [enableKeyboardNavigation, isVisible]);

  // Screen reader announcements
  const announceToScreenReader = (message: string) => {
    if (!enableScreenReader) return;

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

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    announceToScreenReader(`High contrast mode ${!highContrast ? 'enabled' : 'disabled'}`);
  };

  const toggleLargeText = () => {
    setLargeText(!largeText);
    announceToScreenReader(`Large text mode ${!largeText ? 'enabled' : 'disabled'}`);
  };

  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion);
    announceToScreenReader(`Reduced motion mode ${!reducedMotion ? 'enabled' : 'disabled'}`);
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed top-4 right-4 z-50 p-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
        aria-label="Open accessibility options"
        title="Accessibility Options (F1)"
      >
        <Eye className="w-5 h-5" />
      </button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed top-4 right-4 z-50 bg-slate-900/95 backdrop-blur-lg border border-cyan-400/30 rounded-xl p-6 max-w-sm shadow-2xl"
      role="dialog"
      aria-labelledby="accessibility-title"
      aria-describedby="accessibility-description"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 id="accessibility-title" className="text-lg font-semibold text-cyan-400">
          Accessibility Options
        </h2>
        <button
          onClick={() => setIsVisible(false)}
          className="text-slate-400 hover:text-white transition-colors"
          aria-label="Close accessibility options"
        >
          <EyeOff className="w-5 h-5" />
        </button>
      </div>

      <div id="accessibility-description" className="space-y-4">
        {/* High Contrast */}
        <div className="flex items-center justify-between">
          <div>
            <label htmlFor="high-contrast" className="text-sm font-medium text-slate-200">
              High Contrast
            </label>
            <p className="text-xs text-slate-400">Enhanced color contrast for better visibility</p>
          </div>
          <button
            id="high-contrast"
            onClick={toggleHighContrast}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 ${
              highContrast ? 'bg-cyan-600' : 'bg-slate-600'
            }`}
            aria-pressed={highContrast}
            aria-describedby="high-contrast-desc"
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
          <div>
            <label htmlFor="large-text" className="text-sm font-medium text-slate-200">
              Large Text
            </label>
            <p className="text-xs text-slate-400">Increase text size for better readability</p>
          </div>
          <button
            id="large-text"
            onClick={toggleLargeText}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 ${
              largeText ? 'bg-cyan-600' : 'bg-slate-600'
            }`}
            aria-pressed={largeText}
            aria-describedby="large-text-desc"
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
          <div>
            <label htmlFor="reduced-motion" className="text-sm font-medium text-slate-200">
              Reduced Motion
            </label>
            <p className="text-xs text-slate-400">Minimize animations and transitions</p>
          </div>
          <button
            id="reduced-motion"
            onClick={toggleReducedMotion}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 ${
              reducedMotion ? 'bg-cyan-600' : 'bg-slate-600'
            }`}
            aria-pressed={reducedMotion}
            aria-describedby="reduced-motion-desc"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                reducedMotion ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Keyboard Navigation Info */}
        <div className="pt-4 border-t border-slate-700">
          <div className="flex items-center gap-2 text-sm text-slate-300 mb-2">
            <Keyboard className="w-4 h-4" />
            <span>Keyboard Shortcuts</span>
          </div>
          <div className="text-xs text-slate-400 space-y-1">
            <div>• <kbd className="px-1 py-0.5 bg-slate-700 rounded text-xs">F1</kbd> Toggle this panel</div>
            <div>• <kbd className="px-1 py-0.5 bg-slate-700 rounded text-xs">Alt + Tab</kbd> Skip to main content</div>
            <div>• <kbd className="px-1 py-0.5 bg-slate-700 rounded text-xs">Tab</kbd> Navigate elements</div>
          </div>
        </div>

        {/* Screen Reader Status */}
        {enableScreenReader && (
          <div className="pt-4 border-t border-slate-700">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Volume2 className="w-4 h-4" />
              <span>Screen Reader Support</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Enhanced ARIA labels and semantic markup for better screen reader experience
            </p>
          </div>
        )}
      </div>

      {/* Hidden descriptions for screen readers */}
      <div className="sr-only">
        <div id="high-contrast-desc">Toggle high contrast mode for enhanced visibility</div>
        <div id="large-text-desc">Toggle large text mode for better readability</div>
        <div id="reduced-motion-desc">Toggle reduced motion mode to minimize animations</div>
      </div>
    </motion.div>
  );
};
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SkipForward, Volume2, VolumeX, Braille, Sun, Moon } from 'lucide-react';

interface AccessibilityContextType {
  highContrast: boolean;
  toggleHighContrast: () => void;
  reducedMotion: boolean;
  toggleReducedMotion: () => void;
  fontSize: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
  showSkipLinks: boolean;
  setShowSkipLinks: (show: boolean) => void;
  voiceNavigation: boolean;
  toggleVoiceNavigation: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

interface AccessibilityProviderProps {
  children: ReactNode;
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [showSkipLinks, setShowSkipLinks] = useState(false);
  const [voiceNavigation, setVoiceNavigation] = useState(false);

  // Load accessibility preferences from localStorage
  useEffect(() => {
    const savedHighContrast = localStorage.getItem('zion-high-contrast') === 'true';
    const savedReducedMotion = localStorage.getItem('zion-reduced-motion') === 'true';
    const savedFontSize = localStorage.getItem('zion-font-size');
    const savedVoiceNavigation = localStorage.getItem('zion-voice-navigation') === 'true';

    setHighContrast(savedHighContrast);
    setReducedMotion(savedReducedMotion);
    setFontSize(savedFontSize ? parseInt(savedFontSize) : 16);
    setVoiceNavigation(savedVoiceNavigation);
  }, []);

  // Apply accessibility settings to document
  useEffect(() => {
    const root = document.documentElement;

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

    // Apply font size
    root.style.fontSize = `${fontSize}px`;
  }, [highContrast, reducedMotion, fontSize]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip links (Alt + S)
      if (event.altKey && event.key === 's') {
        event.preventDefault();
        setShowSkipLinks(true);
        setTimeout(() => setShowSkipLinks(false), 5000);
      }

      // High contrast toggle (Alt + H)
      if (event.altKey && event.key === 'h') {
        event.preventDefault();
        toggleHighContrast();
      }

      // Font size controls (Alt + Plus/Minus)
      if (event.altKey && event.key === '+') {
        event.preventDefault();
        increaseFontSize();
      }
      if (event.altKey && event.key === '-') {
        event.preventDefault();
        decreaseFontSize();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleHighContrast = () => {
    const newValue = !highContrast;
    setHighContrast(newValue);
    localStorage.setItem('zion-high-contrast', newValue.toString());
  };

  const toggleReducedMotion = () => {
    const newValue = !reducedMotion;
    setReducedMotion(newValue);
    localStorage.setItem('zion-reduced-motion', newValue.toString());
  };

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 2, 24);
    setFontSize(newSize);
    localStorage.setItem('zion-font-size', newSize.toString());
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 2, 12);
    setFontSize(newSize);
    localStorage.setItem('zion-font-size', newSize.toString());
  };

  const resetFontSize = () => {
    setFontSize(16);
    localStorage.setItem('zion-font-size', '16');
  };

  const toggleVoiceNavigation = () => {
    const newValue = !voiceNavigation;
    setVoiceNavigation(newValue);
    localStorage.setItem('zion-voice-navigation', newValue.toString());
  };

  const value = {
    highContrast,
    toggleHighContrast,
    reducedMotion,
    toggleReducedMotion,
    fontSize,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    showSkipLinks,
    setShowSkipLinks,
    voiceNavigation,
    toggleVoiceNavigation,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {/* Skip Links */}
      <AnimatePresence>
        {showSkipLinks && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 right-0 z-50 bg-zion-cyan text-black p-4 text-center"
          >
            <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
              <a
                href="#main-content"
                className="px-4 py-2 bg-white rounded-lg font-semibold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
              >
                Skip to main content
              </a>
              <a
                href="#navigation"
                className="px-4 py-2 bg-white rounded-lg font-semibold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
              >
                Skip to navigation
              </a>
              <button
                onClick={() => setShowSkipLinks(false)}
                className="px-4 py-2 bg-white rounded-lg font-semibold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Accessibility Controls */}
      <div className="fixed bottom-4 left-4 z-40">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-zion-slate border border-zion-cyan/20 rounded-lg p-2 shadow-2xl"
        >
          <div className="flex flex-col gap-2">
            <button
              onClick={toggleHighContrast}
              className={`p-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan ${
                highContrast ? 'bg-zion-cyan text-black' : 'bg-zion-slate-light text-zion-cyan hover:bg-zion-cyan/10'
              }`}
              aria-label="Toggle high contrast"
              title="Toggle high contrast (Alt + H)"
            >
              <Braille className="w-4 h-4" />
            </button>

            <button
              onClick={toggleReducedMotion}
              className={`p-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan ${
                reducedMotion ? 'bg-zion-cyan text-black' : 'bg-zion-slate-light text-zion-cyan hover:bg-zion-cyan/10'
              }`}
              aria-label="Toggle reduced motion"
              title="Toggle reduced motion"
            >
              {reducedMotion ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            <button
              onClick={increaseFontSize}
              className="p-2 rounded-md bg-zion-slate-light text-zion-cyan hover:bg-zion-cyan/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              aria-label="Increase font size"
              title="Increase font size (Alt + +)"
            >
              A+
            </button>

            <button
              onClick={decreaseFontSize}
              className="p-2 rounded-md bg-zion-slate-light text-zion-cyan hover:bg-zion-cyan/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              aria-label="Decrease font size"
              title="Decrease font size (Alt + -)"
            >
              A-
            </button>

            <button
              onClick={resetFontSize}
              className="p-2 rounded-md bg-zion-slate-light text-zion-cyan hover:bg-zion-cyan/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              aria-label="Reset font size"
              title="Reset font size"
            >
              A
            </button>
          </div>
        </motion.div>
      </div>

      {children}
    </AccessibilityContext.Provider>
  );
};

// Focus trap component for modals
export const FocusTrap: React.FC<{ children: ReactNode; isActive?: boolean }> = ({
  children,
  isActive = true
}) => {
  const [focusedElement, setFocusedElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!isActive) return;

    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isActive]);

  return <>{children}</>;
};
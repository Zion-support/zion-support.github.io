import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
import { SkipForward, Volume2, VolumeX, Eye, Sun, Moon  } from 'lucide-react';

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
  if (context === undefined) {
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

  useEffect(() => {
    // Load settings from localStorage
    const savedHighContrast = localStorage.getItem('zion-high-contrast');
    const savedReducedMotion = localStorage.getItem('zion-reduced-motion');
    const savedFontSize = localStorage.getItem('zion-font-size');
    const savedVoiceNavigation = localStorage.getItem('zion-voice-navigation');

    if (savedHighContrast) setHighContrast(savedHighContrast === 'true');
    if (savedReducedMotion) setReducedMotion(savedReducedMotion === 'true');
    if (savedFontSize) setFontSize(parseInt(savedFontSize));
    if (savedVoiceNavigation) setVoiceNavigation(savedVoiceNavigation === 'true');
  }, []);

  useEffect(() => {
    // Apply settings to document
    const root = document.documentElement;
    
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    root.style.fontSize = `${fontSize}px`;
  }, [highContrast, reducedMotion, fontSize]);

  useEffect(() => {
    // Keyboard shortcuts
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey) {
        switch (event.key) {
          case '=':
          case '+':
            event.preventDefault();
            increaseFontSize();
            break;
          case '-':
            event.preventDefault();
            decreaseFontSize();
            break;
          case '0':
            event.preventDefault();
            resetFontSize();
            break;
        }
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
    toggleVoiceNavigation
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
            className="fixed top-0 left-0 right-0 z-50 bg-blue-600 text-white p-4 text-center"
          >
            <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center">
              <a
                href="#main-content"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <SkipForward className="w-4 h-4" />
                Skip to main content
              </a>
              <a
                href="#navigation"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <SkipForward className="w-4 h-4" />
                Skip to navigation
              </a>
              <a
                href="#footer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <SkipForward className="w-4 h-4" />
                Skip to footer
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Accessibility Controls */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
        <button
          onClick={() => setShowSkipLinks(!showSkipLinks)}
          className="w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
          aria-label="Toggle skip links"
        >
          <SkipForward className="w-5 h-5" />
        </button>
        
        <button
          onClick={toggleHighContrast}
          className={`w-12 h-12 rounded-full shadow-lg transition-colors flex items-center justify-center ${
            highContrast 
              ? 'bg-yellow-600 text-white hover:bg-yellow-700' 
              : 'bg-gray-600 text-white hover:bg-gray-700'
          }`}
          aria-label="Toggle high contrast"
        >
          <Eye className="w-5 h-5" />
        </button>

        <button
          onClick={toggleVoiceNavigation}
          className={`w-12 h-12 rounded-full shadow-lg transition-colors flex items-center justify-center ${
            voiceNavigation 
              ? 'bg-green-600 text-white hover:bg-green-700' 
              : 'bg-gray-600 text-white hover:bg-gray-700'
          }`}
          aria-label="Toggle voice navigation"
        >
          {voiceNavigation ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </button>
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
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

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
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isActive]);

  return <>{children}</>;
};

<<<<<<< HEAD
import { AnimatePresence, motion } from 'framer-motion';
import { Accessibility, Volume2, VolumeX } from 'lucide-react';
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';

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

=======

const AccessibilityProvider: React.FC = () => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">AccessibilityProvider</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default AccessibilityProvider;

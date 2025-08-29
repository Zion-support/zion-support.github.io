import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Eye, EyeOff, Keyboard, MousePointer, Sun, Moon } from 'lucide-react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

export function AccessibilityEnhancer({ children }: AccessibilityEnhancerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isKeyboardMode, setIsKeyboardMode] = useState(false);
  const [isScreenReaderMode, setIsScreenReaderMode] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const focusIndicatorRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Tab navigation indicator
      if (e.key === 'Tab') {
        setIsKeyboardMode(true);
        setTimeout(() => setIsKeyboardMode(false), 3000);
      }

      // Escape key to close modals or menus
      if (e.key === 'Escape') {
        // Close any open modals or dropdowns
        const activeModals = document.querySelectorAll('[data-modal="open"]');
        activeModals.forEach(modal => {
          (modal as HTMLElement).setAttribute('data-modal', 'closed');
        });
      }

      // Enter key for button activation
      if (e.key === 'Enter' && document.activeElement?.tagName === 'BUTTON') {
        (document.activeElement as HTMLButtonElement).click();
      }

      // Space key for button activation
      if (e.key === ' ' && document.activeElement?.tagName === 'BUTTON') {
        e.preventDefault();
        (document.activeElement as HTMLButtonElement).click();
      }
    };

    const handleFocusChange = () => {
      const activeElement = document.activeElement as HTMLElement;
      setCurrentFocus(activeElement);
      
      if (activeElement && focusIndicatorRef.current) {
        const rect = activeElement.getBoundingClientRect();
        focusIndicatorRef.current.style.left = `${rect.left}px`;
        focusIndicatorRef.current.style.top = `${rect.top}px`;
        focusIndicatorRef.current.style.width = `${rect.width}px`;
        focusIndicatorRef.current.style.height = `${rect.height}px`;
        focusIndicatorRef.current.style.display = 'block';
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusChange);
    document.addEventListener('focusout', () => {
      if (focusIndicatorRef.current) {
        focusIndicatorRef.current.style.display = 'none';
      }
    });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusChange);
    };
  }, []);

  // Apply accessibility features
  useEffect(() => {
    const root = document.documentElement;
    
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (isLargeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    if (isScreenReaderMode) {
      root.classList.add('screen-reader-mode');
    } else {
      root.classList.remove('screen-reader-mode');
    }
  }, [isHighContrast, isLargeText, isReducedMotion, isScreenReaderMode]);

  // Screen reader announcements
  const announceToScreenReader = (message: string) => {
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

  const toggleMute = () => {
    setIsMuted(!isMuted);
    announceToScreenReader(isMuted ? 'Sound enabled' : 'Sound disabled');
  };

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    announceToScreenReader(isHighContrast ? 'High contrast disabled' : 'High contrast enabled');
  };

  const toggleLargeText = () => {
    setIsLargeText(!isLargeText);
    announceToScreenReader(isLargeText ? 'Large text disabled' : 'Large text enabled');
  };

  const toggleReducedMotion = () => {
    setIsReducedMotion(!isReducedMotion);
    announceToScreenReader(isReducedMotion ? 'Reduced motion disabled' : 'Reduced motion enabled');
  };

  const toggleScreenReaderMode = () => {
    setIsScreenReaderMode(!isScreenReaderMode);
    announceToScreenReader(isScreenReaderMode ? 'Screen reader mode disabled' : 'Screen reader mode enabled');
  };

  return (
    <>
      {children}
      
      {/* Accessibility Controls Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 right-4 bg-zion-slate-dark border border-zion-cyan/30 rounded-lg p-4 shadow-2xl z-50 max-w-sm"
            role="region"
            aria-label="Accessibility Controls"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Accessibility</h3>
              <button
                onClick={() => setIsVisible(false)}
                className="text-zion-slate-light hover:text-white transition-colors"
                aria-label="Close accessibility panel"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={toggleMute}
                className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                  isMuted 
                    ? 'bg-zion-purple/20 text-zion-purple border border-zion-purple/30' 
                    : 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30 hover:bg-zion-cyan/30'
                }`}
                aria-pressed={isMuted}
              >
                <span>{isMuted ? 'Unmute' : 'Mute'}</span>
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <button
                onClick={toggleHighContrast}
                className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                  isHighContrast 
                    ? 'bg-zion-purple/20 text-zion-purple border border-zion-purple/30' 
                    : 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30 hover:bg-zion-cyan/30'
                }`}
                aria-pressed={isHighContrast}
              >
                <span>High Contrast</span>
                {isHighContrast ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>

              <button
                onClick={toggleLargeText}
                className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                  isLargeText 
                    ? 'bg-zion-purple/20 text-zion-purple border border-zion-purple/30' 
                    : 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30 hover:bg-zion-cyan/30'
                }`}
                aria-pressed={isLargeText}
              >
                <span>Large Text</span>
                {isLargeText ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>

              <button
                onClick={toggleReducedMotion}
                className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                  isReducedMotion 
                    ? 'bg-zion-purple/20 text-zion-purple border border-zion-purple/30' 
                    : 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30 hover:bg-zion-cyan/30'
                }`}
                aria-pressed={isReducedMotion}
              >
                <span>Reduced Motion</span>
                <div className="w-4 h-4 flex items-center justify-center">
                  {isReducedMotion ? '—' : '~'}
                </div>
              </button>

              <button
                onClick={toggleScreenReaderMode}
                className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                  isScreenReaderMode 
                    ? 'bg-zion-purple/20 text-zion-purple border border-zion-purple/30' 
                    : 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30 hover:bg-zion-cyan/30'
                }`}
                aria-pressed={isScreenReaderMode}
              >
                <span>Screen Reader Mode</span>
                <div className="w-4 h-4 flex items-center justify-center">
                  {isScreenReaderMode ? 'SR' : 'SR'}
                </div>
              </button>
            </div>

            <div className="mt-4 pt-3 border-t border-zion-slate-light/20">
              <p className="text-xs text-zion-slate-light">
                Use Tab to navigate, Enter/Space to activate buttons
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center justify-center text-white"
        aria-label="Toggle accessibility controls"
        aria-expanded={isVisible}
      >
        <div className="w-6 h-6 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white rounded-full" />
          <div className="w-2 h-2 bg-white rounded-full ml-1" />
        </div>
      </button>

      {/* Keyboard Mode Indicator */}
      <AnimatePresence>
        {isKeyboardMode && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-4 right-4 bg-zion-cyan text-zion-slate-dark px-3 py-2 rounded-lg shadow-lg z-50 flex items-center gap-2"
          >
            <Keyboard className="w-4 h-4" />
            <span className="text-sm font-medium">Keyboard Mode</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Focus Indicator */}
      <div
        ref={focusIndicatorRef}
        className="fixed pointer-events-none z-50 border-2 border-zion-cyan rounded transition-all duration-200"
        style={{ display: 'none' }}
        aria-hidden="true"
      />

      {/* Screen Reader Only Content */}
      <div className="sr-only">
        <p>Zion Tech Group - AI-powered technology solutions and services</p>
        <p>Use Tab to navigate through the website</p>
        <p>Press Enter or Space to activate buttons and links</p>
        <p>Press Escape to close modals and menus</p>
      </div>
    </>
  );
}

// Keyboard navigation hook
export function useKeyboardNavigation() {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const itemsRef = useRef<(HTMLElement | null)[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent, itemCount: number) => {
    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault();
        setFocusedIndex((prev) => (prev + 1) % itemCount);
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault();
        setFocusedIndex((prev) => (prev - 1 + itemCount) % itemCount);
        break;
      case 'Home':
        e.preventDefault();
        setFocusedIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setFocusedIndex(itemCount - 1);
        break;
    }
  };

  useEffect(() => {
    if (itemsRef.current[focusedIndex]) {
      itemsRef.current[focusedIndex]?.focus();
    }
  }, [focusedIndex]);

  return {
    focusedIndex,
    setFocusedIndex,
    itemsRef,
    handleKeyDown
  };
}

// Skip to content link
export function SkipToContent() {
  const handleClick = () => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href="#main-content"
      onClick={handleClick}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-zion-cyan text-zion-slate-dark px-4 py-2 rounded-lg shadow-lg z-50 font-medium"
    >
      Skip to main content
    </a>
  );
}

// ARIA live region for announcements
export function LiveRegion({ 
  message, 
  type = 'polite' 
}: { 
  message: string; 
  type?: 'polite' | 'assertive' 
}) {
  return (
    <div
      aria-live={type}
      aria-atomic="true"
      className="sr-only"
    >
      {message}
    </div>
  );
}
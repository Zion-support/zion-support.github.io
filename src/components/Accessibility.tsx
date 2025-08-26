import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Volume2, 
  VolumeX, 
  Eye, 
  EyeOff, 
  Contrast, 
  Type, 
  MousePointer,
  Keyboard,
  SkipForward,
  SkipBack,
  Play,
  Pause
} from 'lucide-react';

interface AccessibilityProps {
  className?: string;
}

export const Accessibility: React.FC<AccessibilityProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    // Apply accessibility preferences to document
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    if (largeText) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }

    if (reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  }, [highContrast, largeText, reducedMotion]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // Implement audio muting logic here
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
  };

  const toggleLargeText = () => {
    setLargeText(!largeText);
  };

  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion);
  };

  const toggleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };

  const skipToContent = () => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skipToNavigation = () => {
    const navigation = document.querySelector('nav, [role="navigation"]');
    if (navigation) {
      navigation.focus();
      navigation.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-zion-cyan/50 ${className}`}
        aria-label="Accessibility options"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Eye className="w-6 h-6 mx-auto" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="accessibility-panel"
            className="fixed bottom-24 right-6 z-50 w-80 bg-zion-slate-dark/95 backdrop-blur-lg rounded-2xl border border-zion-cyan/20 shadow-2xl"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-label="Accessibility options"
          >
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Eye className="w-5 h-5 mr-2 text-zion-cyan" />
                Accessibility Options
              </h3>

              <div className="space-y-4">
                {/* Skip Links */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-zion-slate-light">Skip to:</h4>
                  <div className="flex space-x-2">
                    <button
                      onClick={skipToNavigation}
                      className="flex-1 px-3 py-2 text-sm bg-zion-slate-light/20 text-white rounded-lg hover:bg-zion-slate-light/30 transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    >
                      <SkipBack className="w-4 h-4 mr-1" />
                      Navigation
                    </button>
                    <button
                      onClick={skipToContent}
                      className="flex-1 px-3 py-2 text-sm bg-zion-slate-light/20 text-white rounded-lg hover:bg-zion-slate-light/30 transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    >
                      <SkipForward className="w-4 h-4 mr-1" />
                      Content
                    </button>
                  </div>
                </div>

                {/* Visual Options */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-zion-slate-light">Visual Options:</h4>
                  
                  <button
                    onClick={toggleHighContrast}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                      highContrast 
                        ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/40' 
                        : 'bg-zion-slate-light/10 text-white hover:bg-zion-slate-light/20'
                    }`}
                    aria-pressed={highContrast}
                  >
                    <div className="flex items-center">
                      <Contrast className="w-4 h-4 mr-2" />
                      High Contrast
                    </div>
                    <div className={`w-4 h-4 rounded border-2 ${
                      highContrast ? 'bg-zion-cyan border-zion-cyan' : 'border-zion-slate-light'
                    }`} />
                  </button>

                  <button
                    onClick={toggleLargeText}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                      largeText 
                        ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/40' 
                        : 'bg-zion-slate-light/10 text-white hover:bg-zion-slate-light/20'
                    }`}
                    aria-pressed={largeText}
                  >
                    <div className="flex items-center">
                      <Type className="w-4 h-4 mr-2" />
                      Large Text
                    </div>
                    <div className={`w-4 h-4 rounded border-2 ${
                      largeText ? 'bg-zion-cyan border-zion-cyan' : 'border-zion-slate-light'
                    }`} />
                  </button>

                  <button
                    onClick={toggleReducedMotion}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                      reducedMotion 
                        ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/40' 
                        : 'bg-zion-slate-light/10 text-white hover:bg-zion-slate-light/20'
                    }`}
                    aria-pressed={reducedMotion}
                  >
                    <div className="flex items-center">
                      <MousePointer className="w-4 h-4 mr-2" />
                      Reduced Motion
                    </div>
                    <div className={`w-4 h-4 rounded border-2 ${
                      reducedMotion ? 'bg-zion-cyan border-zion-cyan' : 'border-zion-slate-light'
                    }`} />
                  </button>
                </div>

                {/* Audio Options */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-zion-slate-light">Audio Options:</h4>
                  
                  <button
                    onClick={toggleMute}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                      isMuted 
                        ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/40' 
                        : 'bg-zion-slate-light/10 text-white hover:bg-zion-slate-light/20'
                    }`}
                    aria-pressed={isMuted}
                  >
                    <div className="flex items-center">
                      {isMuted ? <VolumeX className="w-4 h-4 mr-2" /> : <Volume2 className="w-4 h-4 mr-2" />}
                      {isMuted ? 'Unmute Audio' : 'Mute Audio'}
                    </div>
                  </button>

                  <button
                    onClick={toggleAutoPlay}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                      autoPlay 
                        ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/40' 
                        : 'bg-zion-slate-light/10 text-white hover:bg-zion-slate-light/20'
                    }`}
                    aria-pressed={autoPlay}
                  >
                    <div className="flex items-center">
                      {autoPlay ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                      {autoPlay ? 'Disable Auto-play' : 'Enable Auto-play'}
                    </div>
                  </button>
                </div>

                {/* Keyboard Shortcuts */}
                <div className="pt-3 border-t border-zion-slate-light/20">
                  <h4 className="text-sm font-medium text-zion-slate-light mb-2">Keyboard Shortcuts:</h4>
                  <div className="text-xs text-zion-slate-light space-y-1">
                    <div className="flex justify-between">
                      <span>Skip to navigation:</span>
                      <kbd className="px-2 py-1 bg-zion-slate-light/20 rounded text-zion-cyan">Tab</kbd>
                    </div>
                    <div className="flex justify-between">
                      <span>Skip to content:</span>
                      <kbd className="px-2 py-1 bg-zion-slate-light/20 rounded text-zion-cyan">Enter</kbd>
                    </div>
                    <div className="flex justify-between">
                      <span>Toggle accessibility:</span>
                      <kbd className="px-2 py-1 bg-zion-slate-light/20 rounded text-zion-cyan">A</kbd>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Accessibility hook for keyboard navigation
export const useKeyboardNavigation = () => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Accessibility toggle
      if (event.key === 'a' || event.key === 'A') {
        // Toggle accessibility panel
        const accessibilityButton = document.querySelector('[aria-label="Accessibility options"]') as HTMLButtonElement;
        if (accessibilityButton) {
          accessibilityButton.click();
        }
      }

      // Skip to content
      if (event.key === 'Enter' && event.target === document.body) {
        const mainContent = document.querySelector('main');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
};

// Focus trap for modals
export const useFocusTrap = (isActive: boolean) => {
  useEffect(() => {
    if (!isActive) return;

    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
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
      }
    };

    document.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => document.removeEventListener('keydown', handleTabKey);
  }, [isActive]);
};

// Screen reader announcements
export const useScreenReaderAnnouncement = () => {
  const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  return { announce };
};
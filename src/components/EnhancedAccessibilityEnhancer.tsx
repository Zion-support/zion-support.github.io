import React, { useEffect, useRef, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  Move, 
  Keyboard,
  Accessibility,
  Settings,
  X,
  Check,
  AlertTriangle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
}

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableLargeText?: boolean;
  enableReducedMotion?: boolean;
}

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableLargeText = true,
  enableReducedMotion = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: true,
    focusIndicators: true,
  });
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [currentAnnouncement, setCurrentAnnouncement] = useState<string>('');
  const [isMuted, setIsMuted] = useState(false);
  
  const focusableElementsRef = useRef<HTMLElement[]>([]);
  const currentFocusIndexRef = useRef<number>(-1);
  const announcementTimeoutRef = useRef<NodeJS.Timeout>();

  // Load accessibility settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('zion-accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  // Apply accessibility settings to document
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.style.setProperty('--high-contrast', '1');
      root.classList.add('high-contrast');
    } else {
      root.style.setProperty('--high-contrast', '0');
      root.classList.remove('high-contrast');
    }
    
    // Large text
    if (settings.largeText) {
      root.style.setProperty('--large-text', '1');
      root.classList.add('large-text');
    } else {
      root.style.setProperty('--large-text', '0');
      root.classList.remove('large-text');
    }
    
    // Reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--reduced-motion', '1');
      root.classList.add('reduced-motion');
    } else {
      root.style.setProperty('--reduced-motion', '0');
      root.classList.remove('reduced-motion');
    }
    
    // Focus indicators
    if (settings.focusIndicators) {
      root.style.setProperty('--focus-indicators', '1');
      root.classList.add('focus-indicators');
    } else {
      root.style.setProperty('--focus-indicators', '0');
      root.classList.remove('focus-indicators');
    }
  }, [settings]);

  // Enhanced keyboard navigation
  useEffect(() => {
    if (!enableKeyboardNavigation || !settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const { key, target, ctrlKey, altKey, shiftKey } = event;
      
      // Skip if user is typing in input fields
      if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (key) {
        case 'Tab':
          // Enhanced tab navigation with visual indicators
          if (shiftKey) {
            // Shift+Tab - navigate backwards
            event.preventDefault();
            navigateFocus('backward');
          } else {
            // Tab - navigate forwards
            event.preventDefault();
            navigateFocus('forward');
          }
          break;
          
        case 'Escape':
          // Close modals, dropdowns, etc.
          closeAllModals();
          break;
          
        case 'Enter':
        case ' ':
          // Activate focused element
          if (target instanceof HTMLElement) {
            target.click();
          }
          break;
          
        case 'ArrowUp':
        case 'ArrowDown':
          // Navigate through lists, menus, etc.
          if (ctrlKey) {
            event.preventDefault();
            navigateVertical(key === 'ArrowUp' ? 'up' : 'down');
          }
          break;
          
        case 'ArrowLeft':
        case 'ArrowRight':
          // Navigate through tabs, carousels, etc.
          if (ctrlKey) {
            event.preventDefault();
            navigateHorizontal(key === 'ArrowLeft' ? 'left' : 'right');
          }
          break;
          
        case 'Home':
          // Jump to beginning
          if (ctrlKey) {
            event.preventDefault();
            jumpToElement('first');
          }
          break;
          
        case 'End':
          // Jump to end
          if (ctrlKey) {
            event.preventDefault();
            jumpToElement('last');
          }
          break;
          
        case 'h':
          // Quick navigation to header
          if (ctrlKey) {
            event.preventDefault();
            navigateToSection('header');
          }
          break;
          
        case 'm':
          // Quick navigation to main content
          if (ctrlKey) {
            event.preventDefault();
            navigateToSection('main');
          }
          break;
          
        case 'f':
          // Quick navigation to footer
          if (ctrlKey) {
            event.preventDefault();
            navigateToSection('footer');
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation, settings.keyboardNavigation]);

  // Focus management
  const navigateFocus = useCallback((direction: 'forward' | 'backward') => {
    const focusableElements = getFocusableElements();
    if (focusableElements.length === 0) return;

    if (currentFocusIndexRef.current === -1) {
      currentFocusIndexRef.current = direction === 'forward' ? 0 : focusableElements.length - 1;
    } else {
      if (direction === 'forward') {
        currentFocusIndexRef.current = (currentFocusIndexRef.current + 1) % focusableElements.length;
      } else {
        currentFocusIndexRef.current = currentFocusIndexRef.current === 0 
          ? focusableElements.length - 1 
          : currentFocusIndexRef.current - 1;
      }
    }

    const targetElement = focusableElements[currentFocusIndexRef.current];
    if (targetElement) {
      targetElement.focus();
      highlightFocusableElement(targetElement);
      announceToScreenReader(`Focused on ${targetElement.textContent || targetElement.tagName.toLowerCase()}`);
    }
  }, []);

  const getFocusableElements = useCallback((): HTMLElement[] => {
    const selector = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]',
    ].join(',');
    
    return Array.from(document.querySelectorAll(selector)) as HTMLElement[];
  }, []);

  const highlightFocusableElement = useCallback((element: HTMLElement) => {
    // Remove previous highlights
    document.querySelectorAll('.focus-highlight').forEach(el => {
      el.classList.remove('focus-highlight');
    });
    
    // Add highlight to current element
    element.classList.add('focus-highlight');
    
    // Remove highlight after animation
    setTimeout(() => {
      element.classList.remove('focus-highlight');
    }, 2000);
  }, []);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!enableScreenReader || !settings.screenReader || isMuted) return;

    setAnnouncements(prev => [...prev, message]);
    setCurrentAnnouncement(message);
    
    // Clear announcement after delay
    if (announcementTimeoutRef.current) {
      clearTimeout(announcementTimeoutRef.current);
    }
    
    announcementTimeoutRef.current = setTimeout(() => {
      setCurrentAnnouncement('');
    }, 3000);
  }, [enableScreenReader, settings.screenReader, isMuted]);

  // Navigation helpers
  const navigateVertical = useCallback((direction: 'up' | 'down') => {
    // Implementation for vertical navigation
    announceToScreenReader(`Navigating ${direction}`);
  }, [announceToScreenReader]);

  const navigateHorizontal = useCallback((direction: 'left' | 'right') => {
    // Implementation for horizontal navigation
    announceToScreenReader(`Navigating ${direction}`);
  }, [announceToScreenReader]);

  const jumpToElement = useCallback((position: 'first' | 'last') => {
    const focusableElements = getFocusableElements();
    if (focusableElements.length === 0) return;

    const targetIndex = position === 'first' ? 0 : focusableElements.length - 1;
    const targetElement = focusableElements[targetIndex];
    
    if (targetElement) {
      targetElement.focus();
      highlightFocusableElement(targetElement);
      announceToScreenReader(`Jumped to ${position} element`);
    }
  }, [getFocusableElements, highlightFocusableElement, announceToScreenReader]);

  const navigateToSection = useCallback((section: string) => {
    const sectionElement = document.querySelector(`[role="${section}"], .${section}, #${section}`);
    if (sectionElement instanceof HTMLElement) {
      sectionElement.focus();
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      announceToScreenReader(`Navigated to ${section} section`);
    }
  }, [announceToScreenReader]);

  const closeAllModals = useCallback(() => {
    // Close any open modals, dropdowns, etc.
    const modals = document.querySelectorAll('[role="dialog"], .modal, .dropdown');
    modals.forEach(modal => {
      if (modal instanceof HTMLElement) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
      }
    });
    announceToScreenReader('Closed all modals');
  }, [announceToScreenReader]);

  // Toggle accessibility features
  const toggleSetting = useCallback((key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
    
    const action = settings[key] ? 'disabled' : 'enabled';
    announceToScreenReader(`${key.replace(/([A-Z])/g, ' $1').toLowerCase()} ${action}`);
  }, [settings, announceToScreenReader]);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
    announceToScreenReader(isMuted ? 'Screen reader announcements enabled' : 'Screen reader announcements muted');
  }, [isMuted, announceToScreenReader]);

  return (
    <>
      {/* Accessibility Toolbar */}
      <motion.div
        initial={{ x: 300 }}
        animate={{ x: isOpen ? 0 : 300 }}
        className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-slate-900/95 backdrop-blur-md border-l border-slate-700/50 rounded-l-lg shadow-2xl z-50 transition-all duration-300"
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-l-lg transition-colors"
          aria-label={isOpen ? 'Close accessibility menu' : 'Open accessibility menu'}
        >
          <Accessibility className="w-5 h-5" />
        </button>

        {/* Accessibility Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-80 p-6 text-white"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-cyan-400">Accessibility</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close accessibility menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Settings */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">High Contrast</span>
                  <button
                    onClick={() => toggleSetting('highContrast')}
                    className={`p-2 rounded transition-colors ${
                      settings.highContrast ? 'bg-cyan-600 text-white' : 'bg-slate-700 text-gray-300'
                    }`}
                    aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast`}
                  >
                    {settings.highContrast ? <Check className="w-4 h-4" /> : <Contrast className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Large Text</span>
                  <button
                    onClick={() => toggleSetting('largeText')}
                    className={`p-2 rounded transition-colors ${
                      settings.largeText ? 'bg-cyan-600 text-white' : 'bg-slate-700 text-gray-300'
                    }`}
                    aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text`}
                  >
                    {settings.largeText ? <Check className="w-4 h-4" /> : <Type className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Reduced Motion</span>
                  <button
                    onClick={() => toggleSetting('reducedMotion')}
                    className={`p-2 rounded transition-colors ${
                      settings.reducedMotion ? 'bg-cyan-600 text-white' : 'bg-slate-700 text-gray-300'
                    }`}
                    aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                  >
                    {settings.reducedMotion ? <Check className="w-4 h-4" /> : <Move className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Screen Reader</span>
                  <button
                    onClick={() => toggleSetting('screenReader')}
                    className={`p-2 rounded transition-colors ${
                      settings.screenReader ? 'bg-cyan-600 text-white' : 'bg-slate-700 text-gray-300'
                    }`}
                    aria-label={`${settings.screenReader ? 'Disable' : 'Enable'} screen reader support`}
                  >
                    {settings.screenReader ? <Check className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Focus Indicators</span>
                  <button
                    onClick={() => toggleSetting('focusIndicators')}
                    className={`p-2 rounded transition-colors ${
                      settings.focusIndicators ? 'bg-cyan-600 text-white' : 'bg-slate-700 text-gray-300'
                    }`}
                    aria-label={`${settings.focusIndicators ? 'Disable' : 'Enable'} focus indicators`}
                  >
                    {settings.focusIndicators ? <Check className="w-4 h-4" /> : <Keyboard className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Mute Announcements</span>
                  <button
                    onClick={toggleMute}
                    className={`p-2 rounded transition-colors ${
                      isMuted ? 'bg-red-600 text-white' : 'bg-slate-700 text-gray-300'
                    }`}
                    aria-label={`${isMuted ? 'Unmute' : 'Mute'} screen reader announcements`}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Keyboard Shortcuts Help */}
              <div className="mt-6 p-4 bg-slate-800/50 rounded-lg">
                <h3 className="text-sm font-medium text-cyan-400 mb-2">Keyboard Shortcuts</h3>
                <div className="text-xs space-y-1 text-gray-300">
                  <div>Tab / Shift+Tab - Navigate elements</div>
                  <div>Ctrl+H - Go to header</div>
                  <div>Ctrl+M - Go to main content</div>
                  <div>Ctrl+F - Go to footer</div>
                  <div>Escape - Close modals</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Screen Reader Announcements */}
      <AnimatePresence>
        {currentAnnouncement && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed bottom-4 left-4 bg-cyan-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 max-w-md"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="flex items-center gap-2">
              <Volume2 className="w-4 h-4" />
              <span className="text-sm">{currentAnnouncement}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Focus Highlight Styles */}
      <style jsx>{`
        .focus-highlight {
          outline: 3px solid #06b6d4 !important;
          outline-offset: 2px !important;
          box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.3) !important;
          transition: outline 0.2s ease-in-out !important;
        }
        
        .high-contrast {
          --text-primary: #ffffff !important;
          --text-secondary: #e5e7eb !important;
          --bg-primary: #000000 !important;
          --bg-secondary: #1f2937 !important;
          --accent: #06b6d4 !important;
        }
        
        .large-text {
          font-size: 1.2em !important;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .focus-indicators *:focus {
          outline: 2px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }
      `}</style>

      {children}
    </>
  );
};
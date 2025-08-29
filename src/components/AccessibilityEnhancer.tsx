import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Move, 
  Type, 
  Contrast, 
  Accessibility,
  X,
  Settings,
  Keyboard,
  MousePointer,
  Monitor,
  Smartphone
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  focusHighlight: boolean;
  screenReaderMode: boolean;
  highContrastText: boolean;
  increasedSpacing: boolean;
  cursorEnhancement: boolean;
  keyboardNavigation: boolean;
  colorBlindnessSupport: boolean;
}

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

interface AccessibilityAnnouncement {
  message: string;
  priority: 'polite' | 'assertive';
  id: number;
  timestamp: number;
}

export function AccessibilityEnhancer({ showAccessibilityPanel = false }: { showAccessibilityPanel?: boolean }) {
  const [features, setFeatures] = useState<AccessibilityFeatures>({
    highContrast: false,
    largeText: false,
    focusHighlight: false,
    screenReaderMode: false,
    highContrastText: false,
    increasedSpacing: false,
    cursorEnhancement: false,
    keyboardNavigation: false,
    colorBlindnessSupport: false
  });

    // Focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Screen reader announcements
    if (newSettings.screenReader) {
      announceToScreenReader('Accessibility settings updated');
    }
  }, []);

  // Update settings and apply them
  const updateSettings = useCallback((key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
    
    // Announce changes to screen readers
    if (newSettings.screenReader) {
      announceToScreenReader(`${key} ${value ? 'enabled' : 'disabled'}`);
    }
  }, [settings, applyAccessibilitySettings]);

  // Screen reader announcement
  const announceToScreenReader = useCallback((message: string) => {
    setAnnouncement(message);
    
    // Create live region for screen readers
    let liveRegion = document.getElementById('accessibility-live-region');
    if (!liveRegion) {
      liveRegion = document.createElement('div');
      liveRegion.id = 'accessibility-live-region';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      document.body.appendChild(liveRegion);
    }
    
    liveRegion.textContent = message;
    
    // Clear announcement after a delay
    setTimeout(() => {
      setAnnouncement('');
    }, 3000);
  }, []);

  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip if user is typing in an input field
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (event.key) {
        case 'Tab':
          // Enhanced focus management
          enhanceFocusManagement();
          break;
        case 'Escape':
          // Close modals and menus
          closeAllModals();
          break;
        case 'h':
          if (event.ctrlKey || event.metaKey) {
            // Ctrl/Cmd + H to toggle high contrast
            event.preventDefault();
            updateSettings('highContrast', !settings.highContrast);
          }
          break;
        case 'l':
          if (event.ctrlKey || event.metaKey) {
            // Ctrl/Cmd + L to toggle large text
            event.preventDefault();
            updateSettings('largeText', !settings.largeText);
          }
          break;
        case 'm':
          if (event.ctrlKey || event.metaKey) {
            // Ctrl/Cmd + M to toggle reduced motion
            event.preventDefault();
            updateSettings('reducedMotion', !settings.reducedMotion);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings, updateSettings]);

  // Enhanced focus management
  const enhanceFocusManagement = useCallback(() => {
    // Add focus indicators to all focusable elements
    const focusableElements = document.querySelectorAll(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach(element => {
      element.addEventListener('focus', () => {
        element.classList.add('focused');
        element.setAttribute('aria-describedby', 'focus-description');
      });

      element.addEventListener('blur', () => {
        element.classList.remove('focused');
        element.removeAttribute('aria-describedby');
      });
    });
  }, []);

  // Close all modals and menus
  const closeAllModals = useCallback(() => {
    const modals = document.querySelectorAll('[role="dialog"], [role="menu"]');
    modals.forEach(modal => {
      if (modal instanceof HTMLElement) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
      }
    });
    setIsMenuOpen(false);
  }, []);
  
  const [features, setFeatures] = useState<AccessibilityFeatures>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusHighlight: true,
    screenReaderMode: false,
    highContrastText: false,
    increasedSpacing: false,
    cursorEnhancement: false,
    keyboardNavigation: false,
    colorBlindnessSupport: false
  });

  const [announcements, setAnnouncements] = useState<AccessibilityAnnouncement[]>([]);
  const [currentAnnouncement, setCurrentAnnouncement] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'visual' | 'navigation' | 'audio' | 'advanced'>('visual');
  const [fontSize, setFontSize] = useState(16);
  const [lineHeight, setLineHeight] = useState(1.5);
  const [letterSpacing, setLetterSpacing] = useState(0);
  
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const focusableElementsRef = useRef<HTMLElement[]>([]);

  // Screen reader announcements with better management
  const announce = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement: AccessibilityAnnouncement = { 
      message, 
      priority, 
      id: Date.now(),
      timestamp: Date.now()
    };
    
    setAnnouncements(prev => [...prev, announcement]);
    setCurrentAnnouncement(message);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      setAnnouncements(prev => prev.filter(a => a.id !== announcement.id));
      if (currentAnnouncement === message) {
        setCurrentAnnouncement('');
      }
    }, 5000);
  }, [currentAnnouncement]);

  // Enhanced high contrast mode
  const toggleHighContrast = useCallback(() => {
    setFeatures(prev => {
      const newFeatures = { ...prev, highContrast: !prev.highContrast };
      
      if (newFeatures.highContrast) {
        document.documentElement.classList.add('high-contrast');
        announce('High contrast mode enabled', 'assertive');
      } else {
        document.documentElement.classList.remove('high-contrast');
        announce('High contrast mode disabled', 'assertive');
      }
      
      return newFeatures;
    });
  }, [announce]);

  // Enhanced reduced motion mode
  const toggleReducedMotion = useCallback(() => {
    setFeatures(prev => {
      const newFeatures = { ...prev, reducedMotion: !prev.reducedMotion };
      
      if (newFeatures.reducedMotion) {
        document.documentElement.classList.add('reduced-motion');
        announce('Reduced motion enabled', 'assertive');
      } else {
        document.documentElement.classList.remove('reduced-motion');
        document.documentElement.classList.remove('reduced-animations');
        announce('Reduced motion disabled', 'assertive');
      }
      
      return newFeatures;
    });
  }, [announce]);

  // Enhanced large text mode with customizable sizing
  const toggleLargeText = useCallback(() => {
    setFeatures(prev => {
      const newFeatures = { ...prev, largeText: !prev.largeText };
      
      if (newFeatures.largeText) {
        document.documentElement.classList.add('large-text');
        setFontSize(20);
        setLineHeight(1.8);
        announce('Large text mode enabled', 'assertive');
      } else {
        document.documentElement.classList.remove('large-text');
        setFontSize(16);
        setLineHeight(1.5);
        announce('Large text mode disabled', 'assertive');
      }
      
      return newFeatures;
    });
  }, [announce]);

  // Enhanced focus highlight mode
  const toggleFocusHighlight = useCallback(() => {
    setFeatures(prev => {
      const newFeatures = { ...prev, focusHighlight: !prev.focusHighlight };
      
      if (newFeatures.focusHighlight) {
        document.documentElement.classList.add('focus-highlight');
        announce('Focus highlighting enabled', 'assertive');
      } else {
        document.documentElement.classList.remove('focus-highlight');
        announce('Focus highlighting disabled', 'assertive');
      }
      
      return newFeatures;
    });
  }, [announce]);

  // Enhanced screen reader mode
  const toggleScreenReaderMode = useCallback(() => {
    setFeatures(prev => {
      const newFeatures = { ...prev, screenReaderMode: !prev.screenReaderMode };
      
      if (newFeatures.screenReaderMode) {
        document.documentElement.classList.add('screen-reader-mode');
        announce('Screen reader mode enabled', 'assertive');
      } else {
        document.documentElement.classList.remove('screen-reader-mode');
        announce('Screen reader mode disabled', 'assertive');
      }
      
      return newFeatures;
    });
  }, [announce]);

  // High contrast text mode
  const toggleHighContrastText = useCallback(() => {
    setFeatures(prev => {
      const newFeatures = { ...prev, highContrastText: !prev.highContrastText };
      
      if (newFeatures.highContrastText) {
        document.documentElement.classList.add('high-contrast-text');
        announce('High contrast text enabled', 'assertive');
      } else {
        document.documentElement.classList.remove('high-contrast-text');
        announce('High contrast text disabled', 'assertive');
      }
      
      return newFeatures;
    });
  }, [announce]);

  // Increased spacing mode
  const toggleIncreasedSpacing = useCallback(() => {
    setFeatures(prev => {
      const newFeatures = { ...prev, increasedSpacing: !prev.increasedSpacing };
      
      if (newFeatures.increasedSpacing) {
        document.documentElement.classList.add('increased-spacing');
        setLineHeight(2.0);
        setLetterSpacing(0.1);
        announce('Increased spacing enabled', 'assertive');
      } else {
        document.documentElement.classList.remove('increased-spacing');
        setLineHeight(1.5);
        setLetterSpacing(0);
        announce('Increased spacing disabled', 'assertive');
      }
      
      return newFeatures;
    });
  }, [announce]);

  // Cursor enhancement mode
  const toggleCursorEnhancement = useCallback(() => {
    setFeatures(prev => {
      const newFeatures = { ...prev, cursorEnhancement: !prev.cursorEnhancement };
      
      if (newFeatures.cursorEnhancement) {
        document.documentElement.classList.add('cursor-enhancement');
        announce('Cursor enhancement enabled', 'assertive');
      } else {
        document.documentElement.classList.remove('cursor-enhancement');
        announce('Cursor enhancement disabled', 'assertive');
      }
      
      return newFeatures;
    });
  }, [announce]);

  // Keyboard navigation mode
  const toggleKeyboardNavigation = useCallback(() => {
    setFeatures(prev => {
      const newFeatures = { ...prev, keyboardNavigation: !prev.keyboardNavigation };
      
      if (newFeatures.keyboardNavigation) {
        document.documentElement.classList.add('keyboard-navigation');
        announce('Keyboard navigation mode enabled', 'assertive');
      } else {
        document.documentElement.classList.remove('keyboard-navigation');
        announce('Keyboard navigation mode disabled', 'assertive');
      }
      
      return newFeatures;
    });
  }, [announce]);

  // Color blindness support
  const toggleColorBlindnessSupport = useCallback(() => {
    setFeatures(prev => {
      const newFeatures = { ...prev, colorBlindnessSupport: !prev.colorBlindnessSupport };
      
      if (newFeatures.colorBlindnessSupport) {
        document.documentElement.classList.add('color-blindness-support');
        announce('Color blindness support enabled', 'assertive');
      } else {
        document.documentElement.classList.remove('color-blindness-support');
        announce('Color blindness support disabled', 'assertive');
      }
      
      return newFeatures;
    });
  }, [announce]);

  // Focus trap implementation
  const createFocusTrap = useCallback((config: FocusTrapConfig) => {
    const { containerRef, onEscape, returnFocus } = config;
    
    if (!containerRef.current) return;
    
    const focusableElements = containerRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElementsRef.current = Array.from(focusableElements) as HTMLElement[];
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onEscape) {
        onEscape();
        return;
      }
      
      if (e.key === 'Tab') {
        e.preventDefault();
        
        const currentIndex = focusableElementsRef.current.indexOf(document.activeElement as HTMLElement);
        let nextIndex: number;
        
        if (e.shiftKey) {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : focusableElementsRef.current.length - 1;
        } else {
          nextIndex = currentIndex < focusableElementsRef.current.length - 1 ? currentIndex + 1 : 0;
        }
        
        focusableElementsRef.current[nextIndex]?.focus();
      }
    };
    
    containerRef.current.addEventListener('keydown', handleKeyDown);
    
    // Focus first element
    if (focusableElementsRef.current.length > 0) {
      focusableElementsRef.current[0].focus();
    }
    
    return () => {
      containerRef.current?.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt + A to toggle accessibility menu
      if (e.altKey && e.key === 'a') {
        e.preventDefault();
        setIsMenuOpen(prev => !prev);
      }
      
      // Alt + H to toggle high contrast
      if (e.altKey && e.key === 'h') {
        e.preventDefault();
        toggleHighContrast();
      }
      
      // Alt + M to toggle reduced motion
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        toggleReducedMotion();
      }
      
      // Alt + L to toggle large text
      if (e.altKey && e.key === 'l') {
        e.preventDefault();
        toggleLargeText();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [toggleHighContrast, toggleReducedMotion, toggleLargeText]);

  // Apply accessibility features to document
  useEffect(() => {
    const root = document.documentElement;
    
    // Apply CSS custom properties for accessibility
    root.style.setProperty('--accessibility-font-size', `${fontSize}px`);
    root.style.setProperty('--accessibility-line-height', lineHeight.toString());
    root.style.setProperty('--accessibility-letter-spacing', `${letterSpacing}em`);
    
    // Apply feature classes
    Object.entries(features).forEach(([feature, enabled]) => {
      if (enabled) {
        root.classList.add(feature.replace(/([A-Z])/g, '-$1').toLowerCase());
      } else {
        root.classList.remove(feature.replace(/([A-Z])/g, '-$1').toLowerCase());
      }
    });
  }, [features, fontSize, lineHeight, letterSpacing]);

  // Focus trap for menu
  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      return createFocusTrap({
        containerRef: menuRef,
        onEscape: () => setIsMenuOpen(false)
      });
    }
  }, [isMenuOpen, createFocusTrap]);

  // Accessibility menu component
  const renderAccessibilityMenu = () => (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="fixed top-20 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 z-50 w-80 max-h-[80vh] overflow-hidden"
          role="dialog"
          aria-labelledby="accessibility-menu-title"
          aria-describedby="accessibility-menu-description"
        >
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h2 id="accessibility-menu-title" className="text-lg font-semibold text-gray-900 dark:text-white">
                Accessibility Settings
              </h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                aria-label="Close accessibility menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p id="accessibility-menu-description" className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Customize your browsing experience with these accessibility features
            </p>
          </div>

          <div className="p-4">
            <div className="flex space-x-2 mb-4">
              {(['visual', 'navigation', 'audio', 'advanced'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === tab
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                      : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {activeTab === 'visual' && (
                <>
                  <AccessibilityToggle
                    label="High Contrast"
                    description="Increase contrast for better visibility"
                    enabled={features.highContrast}
                    onToggle={toggleHighContrast}
                    icon={Contrast}
                  />
                  <AccessibilityToggle
                    label="High Contrast Text"
                    description="Optimize text contrast"
                    enabled={features.highContrastText}
                    onToggle={toggleHighContrastText}
                    icon={Type}
                  />
                  <AccessibilityToggle
                    label="Large Text"
                    description="Increase text size for better readability"
                    enabled={features.largeText}
                    onToggle={toggleLargeText}
                    icon={Type}
                  />
                  <AccessibilityToggle
                    label="Increased Spacing"
                    description="Add more space between elements"
                    enabled={features.increasedSpacing}
                    onToggle={toggleIncreasedSpacing}
                    icon={Move}
                  />
                </>
              )}

              {activeTab === 'navigation' && (
                <>
                  <AccessibilityToggle
                    label="Focus Highlight"
                    description="Highlight focused elements"
                    enabled={features.focusHighlight}
                    onToggle={toggleFocusHighlight}
                    icon={Keyboard}
                  />
                  <AccessibilityToggle
                    label="Keyboard Navigation"
                    description="Enhanced keyboard navigation"
                    enabled={features.keyboardNavigation}
                    onToggle={toggleKeyboardNavigation}
                    icon={Keyboard}
                  />
                  <AccessibilityToggle
                    label="Cursor Enhancement"
                    description="Make cursor more visible"
                    enabled={features.cursorEnhancement}
                    onToggle={toggleCursorEnhancement}
                    icon={MousePointer}
                  />
                </>
              )}

              {activeTab === 'audio' && (
                <>
                  <AccessibilityToggle
                    label="Screen Reader Mode"
                    description="Optimize for screen readers"
                    enabled={features.screenReaderMode}
                    onToggle={toggleScreenReaderMode}
                    icon={Volume2}
                  />
                </>
              )}

              {activeTab === 'advanced' && (
                <>
                  <AccessibilityToggle
                    label="Reduced Motion"
                    description="Reduce animations and transitions"
                    enabled={features.reducedMotion}
                    onToggle={toggleReducedMotion}
                    icon={Move}
                  />
                  <AccessibilityToggle
                    label="Color Blindness Support"
                    description="Optimize colors for color blindness"
                    enabled={features.colorBlindnessSupport}
                    onToggle={toggleColorBlindnessSupport}
                    icon={Eye}
                  />
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                <p><strong>Keyboard Shortcuts:</strong></p>
                <p>Alt + A: Toggle this menu</p>
                <p>Alt + H: Toggle high contrast</p>
                <p>Alt + M: Toggle reduced motion</p>
                <p>Alt + L: Toggle large text</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Accessibility toggle component
  const AccessibilityToggle = ({ 
    label, 
    description, 
    enabled, 
    onToggle, 
    icon: Icon 
  }: {
    label: string;
    description: string;
    enabled: boolean;
    onToggle: () => void;
    icon: React.ComponentType<any>;
  }) => (
    <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
      <div className="flex items-center space-x-3">
        <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        <div>
          <label className="text-sm font-medium text-gray-900 dark:text-white cursor-pointer">
            {label}
          </label>
          <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
        </div>
      </div>
      <button
        onClick={onToggle}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          enabled ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
        }`}
        role="switch"
        aria-checked={enabled}
        aria-label={`${label} ${enabled ? 'enabled' : 'disabled'}`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );


  // Skip to main content link
  const skipToMainContent = useCallback(() => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
      announceToScreenReader('Moved to main content');
    }
  }, [announceToScreenReader]);

  // Toggle accessibility menu
  const toggleAccessibilityMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      announceToScreenReader('Accessibility menu opened');
    }
  }, [isMenuOpen, announceToScreenReader]);

  return (
    <>

            </div>

            {/* Keyboard shortcuts help */}
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Keyboard Shortcuts</h3>
              <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                <div>Ctrl/Cmd + H: Toggle High Contrast</div>
                <div>Ctrl/Cmd + L: Toggle Large Text</div>
                <div>Ctrl/Cmd + M: Toggle Reduced Motion</div>
                <div>Tab: Navigate elements</div>
                <div>Escape: Close menus</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen reader announcements */}
      {announcement && (
        <div
          id="accessibility-live-region"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          {announcement}
        </div>
      )}

      {/* Focus description */}
      <div id="focus-description" className="sr-only">
        This element is currently focused
      </div>

      {/* High contrast styles */}
      <style jsx>{`
        .high-contrast {
          --text-color: #ffffff !important;
          --bg-color: #000000 !important;
          --accent-color: #ffff00 !important;
        }
        
        .high-contrast * {
          color: var(--text-color) !important;
          background-color: var(--bg-color) !important;
          border-color: var(--accent-color) !important;
        }
        
        .large-text {
          font-size: 18px !important;
        }
        
        .large-text * {
          font-size: 1.125em !important;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .focus-visible {
          outline: 3px solid var(--accent-color, #3b82f6) !important;
          outline-offset: 2px !important;
        }
        
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
        
        .focused {
          outline: 3px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
      `}</style>
    </>
  );
};

// Accessibility hook for components
export const useAccessibility = () => {
  const [announcement, setAnnouncement] = useState<string>('');

  const announce = useCallback((message: string) => {
    setAnnouncement(message);
    setTimeout(() => setAnnouncement(''), 3000);
  }, []);

  const enhanceFocus = useCallback((element: HTMLElement) => {
    element.addEventListener('focus', () => {
      element.classList.add('focused');
    });
    
    element.addEventListener('blur', () => {
      element.classList.remove('focused');
    });
  }, []);

  return { announcement, announce, enhanceFocus };
};

// Accessible button component
export const AccessibleButton: React.FC<{
  children: React.ReactNode;
  onClick: () => void;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  disabled?: boolean;
  className?: string;
}> = ({ children, onClick, ariaLabel, ariaDescribedBy, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={`px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className || ''}`}
    >
      {children}
    </button>
  );
};

// Accessible link component
export const AccessibleLink: React.FC<{
  children: React.ReactNode;
  href: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  className?: string;
  external?: boolean;
}> = ({ children, href, ariaLabel, ariaDescribedBy, className, external }) => {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={`text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className || ''}`}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {children}
      {external && (
        <span className="sr-only"> (opens in new window)</span>
      )}
    </a>
  );
};
      {/* Floating accessibility button */}
      <button
        ref={buttonRef}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-40 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Open accessibility settings"
        aria-expanded={isMenuOpen}
        aria-haspopup="dialog"
      >
        <Accessibility className="w-5 h-5" />
      </button>

      {/* Accessibility menu */}
      {renderAccessibilityMenu()}

      {/* Screen reader announcements */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {currentAnnouncement}
      </div>

      {/* Visual announcements for non-screen reader users */}
      <AnimatePresence>
        {announcements.map((announcement) => (
          <motion.div
            key={announcement.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed bottom-20 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 max-w-sm"
            role="status"
            aria-live={announcement.priority}
          >
            <p className="text-sm">{announcement.message}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}

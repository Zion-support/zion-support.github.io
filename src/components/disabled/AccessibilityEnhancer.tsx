import React, { useEffect, useRef, useState, useCallback } from 'react';
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

interface AccessibilityFeatures {

  highContrast: boolean;
  reducedMotion: boolean;
  largeText: boolean;
  focusHighlight: boolean;
  screenReaderMode: boolean;
  highContrastText: boolean;
  increasedSpacing: boolean;
  cursorEnhancement: boolean;
  keyboardNavigation: boolean;
  colorBlindnessSupport: boolean;
}

interface FocusTrapConfig {

  containerRef: React.RefObject<HTMLElement>;
  onEscape?: () => void;
  returnFocus?: boolean;
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
    reducedMotion: false,
    largeText: false,
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

  return (
    <>
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

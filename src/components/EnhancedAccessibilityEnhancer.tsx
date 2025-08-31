import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Accessibility,
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  MousePointer,
  Keyboard,
  Monitor,
  Smartphone,
  Tablet,
  Sun,
  Moon,
  Contrast,
  Type,
  Move,
  X,
  Settings,
  CheckCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Enter,
  Escape,
  Tab,
  Space
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
  theme: 'light' | 'dark' | 'auto';
  soundEffects: boolean;
  autoRead: boolean;
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showPanel?: boolean;
  autoDetect?: boolean;
}

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showPanel = false,
  autoDetect = true
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'general' | 'visual' | 'audio' | 'keyboard' | 'help'>('general');
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: true,
    focusIndicators: true,
    colorBlindness: 'none',
    fontSize: 'medium',
    theme: 'auto',
    soundEffects: false,
    autoRead: false
  });
  
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [focusHistory, setFocusHistory] = useState<HTMLElement[]>([]);
  const [isNavigating, setIsNavigating] = useState(false);
  const [announcement, setAnnouncement] = useState<string>('');
  const [showAnnouncement, setShowAnnouncement] = useState(false);
  
  const focusableElements = useRef<HTMLElement[]>([]);
  const announcementRef = useRef<HTMLDivElement>(null);

  // Auto-detect accessibility preferences
  useEffect(() => {
    if (!autoDetect) return;

    // Detect system preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    const prefersLargeText = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      theme: prefersDarkMode ? 'dark' : 'light',
      highContrast: prefersHighContrast,
      largeText: prefersLargeText
    }));
  }, [autoDetect]);

  // Apply accessibility settings
  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    const body = document.body;

    // Apply high contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
      body.style.setProperty('--contrast-multiplier', '1.5');
    } else {
      root.classList.remove('high-contrast');
      body.style.removeProperty('--contrast-multiplier');
    }

    // Apply large text
    const fontSizeMap = {
      small: '14px',
      medium: '16px',
      large: '18px',
      xlarge: '20px'
    };
    root.style.fontSize = fontSizeMap[settings.fontSize];

    // Apply reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
      body.style.setProperty('--animation-duration', '0.01ms');
    } else {
      root.classList.remove('reduced-motion');
      body.style.removeProperty('--animation-duration');
    }

    // Apply color blindness filters
    if (settings.colorBlindness !== 'none') {
      const filterMap = {
        protanopia: 'url(#protanopia)',
        deuteranopia: 'url(#deuteranopia)',
        tritanopia: 'url(#tritanopia)'
      };
      root.style.filter = filterMap[settings.colorBlindness];
    } else {
      root.style.filter = 'none';
    }

    // Apply focus indicators
    if (settings.focusIndicators) {
      root.classList.add('show-focus-indicators');
    } else {
      root.classList.remove('show-focus-indicators');
    }

    // Apply theme
    if (settings.theme === 'dark' || (settings.theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

  }, [settings, enabled]);

  // Enhanced keyboard navigation
  const handleKeyNavigation = useCallback((event: KeyboardEvent) => {
    if (!settings.keyboardNavigation || !enabled) return;

    const { key, ctrlKey, altKey, shiftKey } = event;

    // Alt + A to open accessibility panel
    if (altKey && key === 'a') {
      event.preventDefault();
      setIsOpen(!isOpen);
      announce('Accessibility panel opened');
      return;
    }

    // Escape to close panels
    if (key === 'Escape') {
      if (isOpen) {
        setIsOpen(false);
        announce('Accessibility panel closed');
        return;
      }
    }

    // Tab navigation enhancement
    if (key === 'Tab') {
      if (!shiftKey) {
        // Forward tab
        const nextElement = getNextFocusableElement();
        if (nextElement) {
          nextElement.focus();
          setCurrentFocus(nextElement);
          announce(`Focused on ${getElementDescription(nextElement)}`);
        }
      } else {
        // Backward tab
        const prevElement = getPreviousFocusableElement();
        if (prevElement) {
          prevElement.focus();
          setCurrentFocus(prevElement);
          announce(`Focused on ${getElementDescription(prevElement)}`);
        }
      }
    }

    // Arrow key navigation for interactive elements
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
      const target = event.target as HTMLElement;
      if (isInteractiveElement(target)) {
        const direction = key.replace('Arrow', '').toLowerCase();
        const nextElement = getNextElementInDirection(target, direction);
        if (nextElement) {
          nextElement.focus();
          setCurrentFocus(nextElement);
          announce(`Navigated to ${getElementDescription(nextElement)}`);
        }
      }
    }

    // Enter and Space for activation
    if (['Enter', ' '].includes(key)) {
      const target = event.target as HTMLElement;
      if (isInteractiveElement(target)) {
        announce(`Activating ${getElementDescription(target)}`);
      }
    }
  }, [settings.keyboardNavigation, enabled, isOpen]);

  // Get next focusable element
  const getNextFocusableElement = (): HTMLElement | null => {
    if (!focusableElements.current.length) return null;
    
    const currentIndex = focusableElements.current.findIndex(el => el === currentFocus);
    const nextIndex = (currentIndex + 1) % focusableElements.current.length;
    return focusableElements.current[nextIndex];
  };

  // Get previous focusable element
  const getPreviousFocusableElement = (): HTMLElement | null => {
    if (!focusableElements.current.length) return null;
    
    const currentIndex = focusableElements.current.findIndex(el => el === currentFocus);
    const prevIndex = currentIndex === 0 ? focusableElements.current.length - 1 : currentIndex - 1;
    return focusableElements.current[prevIndex];
  };

  // Get element in specific direction
  const getNextElementInDirection = (element: HTMLElement, direction: string): HTMLElement | null => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    let bestElement: HTMLElement | null = null;
    let bestDistance = Infinity;

    focusableElements.current.forEach(el => {
      if (el === element) return;
      
      const elRect = el.getBoundingClientRect();
      const elCenterX = elRect.left + elRect.width / 2;
      const elCenterY = elRect.top + elRect.height / 2;

      let distance = Infinity;
      
      switch (direction) {
        case 'up':
          if (elCenterY < centerY) {
            distance = Math.abs(elCenterX - centerX) + Math.abs(elCenterY - centerY);
          }
          break;
        case 'down':
          if (elCenterY > centerY) {
            distance = Math.abs(elCenterX - centerX) + Math.abs(elCenterY - centerY);
          }
          break;
        case 'left':
          if (elCenterX < centerX) {
            distance = Math.abs(elCenterX - centerX) + Math.abs(elCenterY - centerY);
          }
          break;
        case 'right':
          if (elCenterX > centerX) {
            distance = Math.abs(elCenterX - centerX) + Math.abs(elCenterY - centerY);
          }
          break;
      }

      if (distance < bestDistance) {
        bestDistance = distance;
        bestElement = el;
      }
    });

    return bestElement;
  };

  // Check if element is interactive
  const isInteractiveElement = (element: HTMLElement): boolean => {
    const interactiveTags = ['button', 'input', 'select', 'textarea', 'a'];
    const interactiveRoles = ['button', 'link', 'menuitem', 'tab', 'checkbox', 'radio'];
    
    return (
      interactiveTags.includes(element.tagName.toLowerCase()) ||
      interactiveRoles.includes(element.getAttribute('role') || '') ||
      element.onclick !== null ||
      element.getAttribute('tabindex') !== null
    );
  };

  // Get element description for screen readers
  const getElementDescription = (element: HTMLElement): string => {
    const ariaLabel = element.getAttribute('aria-label');
    const ariaLabelledBy = element.getAttribute('aria-labelledby');
    const title = element.getAttribute('title');
    const alt = element.getAttribute('alt');
    const textContent = element.textContent?.trim();
    
    return ariaLabel || ariaLabelledBy || title || alt || textContent || 'element';
  };

  // Announce to screen readers
  const announce = useCallback((message: string) => {
    if (!settings.screenReader) return;
    
    setAnnouncement(message);
    setShowAnnouncement(true);
    
    setTimeout(() => {
      setShowAnnouncement(false);
    }, 3000);
  }, [settings.screenReader]);

  // Update focusable elements
  useEffect(() => {
    const updateFocusableElements = () => {
      const elements = Array.from(document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [role="button"], [role="link"], [role="menuitem"], [role="tab"]'
      )) as HTMLElement[];
      
      focusableElements.current = elements.filter(el => 
        !el.hidden && 
        el.offsetParent !== null && 
        el.style.display !== 'none' &&
        el.style.visibility !== 'hidden'
      );
    };

    updateFocusableElements();
    
    // Update on DOM changes
    const observer = new MutationObserver(updateFocusableElements);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  }, []);

  // Keyboard event listeners
  useEffect(() => {
    if (!enabled) return;

    document.addEventListener('keydown', handleKeyNavigation);
    
    return () => {
      document.removeEventListener('keydown', handleKeyNavigation);
    };
  }, [handleKeyNavigation, enabled]);

  // Focus tracking
  useEffect(() => {
    const handleFocusChange = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      setCurrentFocus(target);
      setFocusHistory(prev => [...prev.slice(-9), target]);
      
      if (settings.autoRead) {
        announce(getElementDescription(target));
      }
    };

    document.addEventListener('focusin', handleFocusChange);
    
    return () => {
      document.removeEventListener('focusin', handleFocusChange);
    };
  }, [settings.autoRead, announce]);

  if (!enabled) return null;

  return (
    <>
      {/* Floating Accessibility Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Accessibility Settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="accessibility-panel"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed bottom-24 left-6 z-40 w-96 max-h-[80vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            role="dialog"
            aria-labelledby="accessibility-panel-title"
            aria-describedby="accessibility-panel-description"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <div className="flex items-center space-x-2">
                <Accessibility className="w-5 h-5" />
                <h3 id="accessibility-panel-title" className="font-semibold">Accessibility</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close accessibility panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              {[
                { key: 'general', label: 'General', icon: Settings },
                { key: 'visual', label: 'Visual', icon: Eye },
                { key: 'audio', label: 'Audio', icon: Volume2 },
                { key: 'keyboard', label: 'Keyboard', icon: Keyboard },
                { key: 'help', label: 'Help', icon: HelpCircle }
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as any)}
                  className={`flex-1 flex items-center justify-center space-x-2 px-3 py-2 text-sm font-medium transition-colors ${
                    activeTab === key
                      ? 'text-purple-600 border-b-2 border-purple-600'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                  aria-selected={activeTab === key}
                  role="tab"
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-[calc(80vh-140px)] overflow-y-auto">
              {/* General Tab */}
              {activeTab === 'general' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={settings.screenReader}
                        onChange={(e) => setSettings(prev => ({ ...prev, screenReader: e.target.checked }))}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span>Screen Reader Support</span>
                    </label>
                    <Info className="w-4 h-4 text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={settings.autoRead}
                        onChange={(e) => setSettings(prev => ({ ...prev, autoRead: e.target.checked }))}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        disabled={!settings.screenReader}
                      />
                      <span>Auto-read focused elements</span>
                    </label>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Theme</label>
                    <select
                      value={settings.theme}
                      onChange={(e) => setSettings(prev => ({ ...prev, theme: e.target.value as any }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="auto">Auto (System)</option>
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Visual Tab */}
              {activeTab === 'visual' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={settings.highContrast}
                        onChange={(e) => setSettings(prev => ({ ...prev, highContrast: e.target.checked }))}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span>High Contrast</span>
                    </label>
                    <Contrast className="w-4 h-4 text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={settings.largeText}
                        onChange={(e) => setSettings(prev => ({ ...prev, largeText: e.target.checked }))}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span>Large Text</span>
                    </label>
                    <Type className="w-4 h-4 text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={settings.reducedMotion}
                        onChange={(e) => setSettings(prev => ({ ...prev, reducedMotion: e.target.checked }))}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span>Reduced Motion</span>
                    </label>
                    <Move className="w-4 h-4 text-gray-400" />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Font Size</label>
                    <select
                      value={settings.fontSize}
                      onChange={(e) => setSettings(prev => ({ ...prev, fontSize: e.target.value as any }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                      <option value="xlarge">Extra Large</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Color Blindness Support</label>
                    <select
                      value={settings.colorBlindness}
                      onChange={(e) => setSettings(prev => ({ ...prev, colorBlindness: e.target.value as any }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="none">None</option>
                      <option value="protanopia">Protanopia (Red-Blind)</option>
                      <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                      <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Audio Tab */}
              {activeTab === 'audio' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={settings.soundEffects}
                        onChange={(e) => setSettings(prev => ({ ...prev, soundEffects: e.target.checked }))}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span>Sound Effects</span>
                    </label>
                    {settings.soundEffects ? <Volume2 className="w-4 h-4 text-green-500" /> : <VolumeX className="w-4 h-4 text-gray-400" />}
                  </div>

                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-medium mb-2">Audio Feedback</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Enable sound effects for better audio feedback during navigation and interactions.
                    </p>
                  </div>
                </div>
              )}

              {/* Keyboard Tab */}
              {activeTab === 'keyboard' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={settings.keyboardNavigation}
                        onChange={(e) => setSettings(prev => ({ ...prev, keyboardNavigation: e.target.checked }))}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span>Enhanced Keyboard Navigation</span>
                    </label>
                    <Keyboard className="w-4 h-4 text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={settings.focusIndicators}
                        onChange={(e) => setSettings(prev => ({ ...prev, focusIndicators: e.target.checked }))}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span>Focus Indicators</span>
                    </label>
                    <MousePointer className="w-4 h-4 text-gray-400" />
                  </div>

                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h4 className="font-medium mb-2 text-blue-900 dark:text-blue-100">Keyboard Shortcuts</h4>
                    <div className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
                      <div className="flex items-center space-x-2">
                        <kbd className="px-2 py-1 bg-blue-100 dark:bg-blue-800 rounded text-xs">Alt + A</kbd>
                        <span>Open accessibility panel</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <kbd className="px-2 py-1 bg-blue-100 dark:bg-blue-800 rounded text-xs">Tab</kbd>
                        <span>Navigate between elements</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <kbd className="px-2 py-1 bg-blue-100 dark:bg-blue-800 rounded text-xs">Arrow Keys</kbd>
                        <span>Navigate within groups</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <kbd className="px-2 py-1 bg-blue-100 dark:bg-blue-800 rounded text-xs">Enter/Space</kbd>
                        <span>Activate elements</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <kbd className="px-2 py-1 bg-blue-100 dark:bg-blue-800 rounded text-xs">Escape</kbd>
                        <span>Close panels</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Help Tab */}
              {activeTab === 'help' && (
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <h4 className="font-medium mb-2 text-green-900 dark:text-green-100">Getting Started</h4>
                    <p className="text-sm text-green-800 dark:text-green-200">
                      Use Alt + A to quickly open this panel. Navigate with Tab and Arrow keys, and use Enter or Space to activate options.
                    </p>
                  </div>

                  <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <h4 className="font-medium mb-2 text-yellow-900 dark:text-yellow-100">Tips</h4>
                    <ul className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
                      <li>• Enable screen reader support for better accessibility</li>
                      <li>• Use high contrast mode in bright environments</li>
                      <li>• Reduce motion if animations cause discomfort</li>
                      <li>• Adjust font size for better readability</li>
                    </ul>
                  </div>

                  <div className="text-center">
                    <button
                      onClick={() => {
                        // Reset to defaults
                        setSettings({
                          highContrast: false,
                          largeText: false,
                          reducedMotion: false,
                          screenReader: false,
                          keyboardNavigation: true,
                          focusIndicators: true,
                          colorBlindness: 'none',
                          fontSize: 'medium',
                          theme: 'auto',
                          soundEffects: false,
                          autoRead: false
                        });
                        announce('Settings reset to defaults');
                      }}
                      className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Reset to Defaults
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Announcements */}
      <div
        ref={announcementRef}
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {announcement}
      </div>

      {/* Visual Announcement */}
      <AnimatePresence>
        {showAnnouncement && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 bg-purple-600 text-white rounded-lg shadow-lg"
          >
            {announcement}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Focus History Indicator */}
      {settings.focusIndicators && currentFocus && (
        <div className="fixed top-4 right-4 z-50 p-2 bg-blue-600 text-white rounded text-xs">
          Focus: {getElementDescription(currentFocus)}
        </div>
      )}
    </>
  );
};
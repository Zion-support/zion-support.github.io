import React, { useEffect, useState, useCallback } from 'react';
import { Eye, EyeOff, Volume2, VolumeX, Type, Palette, MousePointer, Keyboard    } from 'lucide-react';

interface AccessibilitySettings {



  highContrast: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  {/* Removed stray closing brace */}



}

const DEFAULT_SETTINGS: AccessibilitySettings = {
  fontSize: 16,
  highContrast: false,
  reducedMotion: false,
  screenReader: false,
  keyboardNavigation: false,
  focusIndicator: true
};

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  className = '',
  showPanel = false,
  onSettingsChange
}) => {
  const [isOpen, setIsOpen] = useState(showPanel);
  const [settings, setSettings] = useState<AccessibilitySettings>(DEFAULT_SETTINGS);
  const [activeTab, setActiveTab] = useState<'general' | 'visual' | 'navigation'>('general');

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: anyPartial<AccessibilitySettings>)    => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    
    // Apply high contrast
    if (updatedSettings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    // Apply large text
    if (updatedSettings.largeText) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }

    // Apply reduced motion
    if (updatedSettings.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    // Apply focus indicator
    if (updatedSettings.focusIndicator) {
      document.documentElement.classList.add('focus-visible');
    } else {
      document.documentElement.classList.remove('focus-visible');
    }

    // Color blindness simulation
    if (newSettings.colorBlindness !== 'normal') {
      root.classList.add(`color-blind-${newSettings.colorBlindness}`);
    } else {
      root.classList.remove('color-blind-protanopia', 'color-blind-deuteranopia', 'color-blind-tritanopia');
    }

    // Font size
    root.classList.remove('font-size-normal', 'font-size-large', 'font-size-xlarge');
    root.classList.add(`font-size-${newSettings.fontSize}`);
  }, []);

  // Enhanced keyboard navigation
  const setupKeyboardNavigation = useCallback(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.altKey) {
        e.preventDefault();
        const mainContent = document.querySelector('main');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4210
      }
    };

<<<<<<< HEAD
    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation')
};

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown)
};
  }, [fontSize]);
=======
      // Skip to navigation
      if (e.key === 'Tab' && e.shiftKey && e.altKey) {
        e.preventDefault();
        const navigation = document.querySelector('nav');
        if (navigation) {
          (navigation as HTMLElement).focus();
        }
      }

      // Skip to footer
      if (e.key === 'Tab' && e.ctrlKey) {
        e.preventDefault();
        const footer = document.querySelector('footer');
        if (footer) {
          (footer as HTMLElement).focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!settings.screenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, [settings.screenReader]);

  // Enhanced focus management
  const setupFocusManagement = useCallback(() => {
    if (!settings.focusIndicator) return;

    const focusableElements = document.querySelectorAll(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach(element => {
      element.addEventListener('focus', () => {
        element.classList.add('focus-ring');
        announceToScreenReader(`${element.textContent || element.getAttribute('aria-label') || 'Element'} focused`);
      });

      element.addEventListener('blur', () => {
        element.classList.remove('focus-ring');
      });
    });
  }, [settings.focusIndicator, announceToScreenReader]);

  // Apply settings when they change
  useEffect(() => {
    applyAccessibilitySettings(settings);
  }, [settings, applyAccessibilitySettings]);

  // Setup keyboard navigation and focus management
  useEffect(() => {
    const cleanupKeyboard = setupKeyboardNavigation();
    const cleanupFocus = setupFocusManagement();

    return () => {
      cleanupKeyboard?.();
      cleanupFocus?.();
    };
  }, [setupKeyboardNavigation, setupFocusManagement]);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  // Load saved settings
  useEffect(() => {
    const savedSettings = localStorage.getItem('zion-accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings({ ...DEFAULT_SETTINGS, ...parsed });
        applySettings({ ...DEFAULT_SETTINGS, ...parsed });
      } catch (error) {
        // // // console.warn('Failed to parse saved accessibility settings');
      }
    };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event: anyKeyboardEvent)    => {
      // Skip if not in keyboard navigation mode
      if (!settings.keyboardNavigation) return;

      const target = event.target as HTMLElement;
      
      // Tab navigation enhancement
      if (event.key === 'Tab') {
        const focusableElements = document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        [data-skip-to-main] {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          z-index: 1000;
          transition: top 0.3s;
        }
        
        [data-skip-to-main]:focus {
          top: 6px;
        }
      `;
      document.head.appendChild(style);
    };

    // Add skip to main content link
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.setAttribute('data-skip-to-main', 'true');
      skipLink.className = 'sr-only focus:not-sr-only';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Enhance form accessibility
    const enhanceForms = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach((input, index) => {
          const inputElement = input as HTMLInputElement;
          if (!inputElement.id) {
            inputElement.id = `input-${index}`;
          }
          
          const label = form.querySelector(`label[for="${inputElement.id}"]`);
          if (!label && inputElement.placeholder) {
            const labelElement = document.createElement('label');
            labelElement.htmlFor = inputElement.id;
            labelElement.textContent = inputElement.placeholder;
            labelElement.className = 'sr-only';
            inputElement.parentNode?.insertBefore(labelElement, inputElement);
          }
        });
      });
    };

    // Add ARIA labels to interactive elements
    const addAriaLabels = () => {
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach(button => {
        const buttonElement = button as HTMLButtonElement;
        if (!buttonElement.textContent?.trim()) {
          buttonElement.setAttribute('aria-label', 'Button');
        }
      });

      const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
      links.forEach(link => {
        const linkElement = link as HTMLAnchorElement;
        if (!linkElement.textContent?.trim() && !linkElement.title) {
          linkElement.setAttribute('aria-label', 'Link');
        }
      });
    };

    // Initialize accessibility enhancements
    addFocusStyles();
    addSkipLink();
    enhanceForms();
    addAriaLabels();

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);

  // Arrow key navigation helper
  const navigateWithArrows = (container: anyElement, direction: string)    => {
    const focusableElements = Array.from(container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )).filter(el => !(el as HTMLElement).hidden);

    const currentIndex = focusableElements.findIndex(el => el === document.activeElement);
    let nextIndex = currentIndex;

    switch (direction) {
      case 'ArrowRight':
      case 'ArrowDown':
        nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        nextIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
        break;
    }

    (focusableElements[nextIndex] as HTMLElement)?.focus();
  };

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string)    => {
    if (settings.screenReader) {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
  }, [settings.screenReader]);

  // Add accessibility attributes to interactive elements
  useEffect(() => {
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    
    interactiveElements.forEach(element => {
      const el = element as HTMLElement;
      
      // Add role if missing
      if (el.tagName === 'BUTTON' && !el.getAttribute('role')) {
        el.setAttribute('role', 'button');
      }
      
      // Add aria-label for elements without text
      if (!el.textContent?.trim() && !el.getAttribute('aria-label')) {
        const title = el.getAttribute('title');
        if (title) {
          el.setAttribute('aria-label', title);
        }
      }
      
      // Add focus indicator
      if (settings.focusIndicator) {
        el.classList.add('focus-visible');
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return ()    => {
      document.head.removeChild(style);
    };
  }, []);

  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Apply font size
    root.style.setProperty('--zion-font-size-base', `${newSettings.fontSize}px`);
    root.style.setProperty('--zion-font-size-sm', `${newSettings.fontSize * 0.875}px`);
    root.style.setProperty('--zion-font-size-lg', `${newSettings.fontSize * 1.125}px`);
    root.style.setProperty('--zion-font-size-xl', `${newSettings.fontSize * 1.25}px`);
    
    // Apply high contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--zion-bg-primary', '#000000');
      root.style.setProperty('--zion-bg-secondary', '#1a1a1a');
      root.style.setProperty('--zion-text-primary', '#ffffff');
      root.style.setProperty('--zion-text-secondary', '#e5e5e5');
      root.style.setProperty('--zion-border-color', '#ffffff');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--zion-bg-primary');
      root.style.removeProperty('--zion-bg-secondary');
      root.style.removeProperty('--zion-text-primary');
      root.style.removeProperty('--zion-text-secondary');
      root.style.removeProperty('--zion-border-color');
    }
    
    // Apply reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Apply focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
    
    // Apply keyboard navigation
    if (newSettings.keyboardNavigation) {
      document.body.classList.add('keyboard-navigation');
    } else {
      document.body.classList.remove('keyboard-navigation');
    }
  }, []);

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast')
};

  const toggleReducedMotion = () => {
    setIsReducedMotion(!isReducedMotion);
    document.documentElement.classList.toggle('reduce-motion')
};

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 2, 24);
    setFontSize(newSize);
    document.documentElement.style.setProperty('--font-size', `${newSize}px`)
};

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 2, 12);
    setFontSize(newSize);
    document.documentElement.style.setProperty('--font-size', `${newSize}px`)
};

  return (
  {/* Empty JSX fragment */}
      {/* Accessibility Toggle Button */}
      <button
        onClick={togglePanel}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        aria-label="Toggle accessibility options"
        title="Accessibility Options"
      >
        Skip to main content
      </a>
      
      {children}
    </>
  )
};

export default AccessibilityEnhancer;
=======
      {/* Accessibility Controls Button */}
      {showControls && (
        <motion.button
          className="fixed bottom-4 left-4 bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-lg z-50 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Accessibility Settings"
          aria-expanded={isOpen}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Accessibility className="w-6 h-6" />
        </motion.button>
      )}

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="fixed bottom-24 right-6 w-96 max-h-[80vh] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <Accessibility className="w-6 h-6 text-cyan-500" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Accessibility
                  </h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-gray-200 dark:border-gray-700">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-cyan-600 border-b-2 border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20'
                          : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Content */}
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                <AnimatePresence mode="wait">
                  {activeTab === 'general' && (
                    <motion.div
                      key="general"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      {/* Font Size Control */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                          Font Size: {settings.fontSize}px
                        </label>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={decreaseFontSize}
                            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            aria-label="Decrease font size"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-cyan-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${((settings.fontSize - 12) / 12) * 100}%` }}
                            />
                          </div>
                          <button
                            onClick={increaseFontSize}
                            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            aria-label="Increase font size"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Screen Reader Support */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Volume2 className="w-5 h-5 text-gray-500" />
                          <div>
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              Screen Reader Support
                            </label>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Enhanced ARIA labels and descriptions
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={toggleScreenReader}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            settings.screenReader ? 'bg-cyan-500' : 'bg-gray-200 dark:bg-gray-700'
                          }`}
                          role="switch"
                          aria-checked={settings.screenReader}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'visual' && (
                    <motion.div
                      key="visual"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      {/* High Contrast */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Contrast className="w-5 h-5 text-gray-500" />
                          <div>
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              High Contrast
                            </label>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Enhanced color contrast for better visibility
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={toggleHighContrast}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            settings.highContrast ? 'bg-cyan-500' : 'bg-gray-200 dark:bg-gray-700'
                          }`}
                          role="switch"
                          aria-checked={settings.highContrast}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>

                      {/* Reduced Motion */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <MousePointer className="w-5 h-5 text-gray-500" />
                          <div>
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              Reduced Motion
                            </label>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Minimize animations and transitions
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={toggleReducedMotion}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            settings.reducedMotion ? 'bg-cyan-500' : 'bg-gray-200 dark:bg-gray-700'
                          }`}
                          role="switch"
                          aria-checked={settings.reducedMotion}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'navigation' && (
                    <motion.div
                      key="navigation"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      {/* Keyboard Navigation */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Keyboard className="w-5 h-5 text-gray-500" />
                          <div>
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              Enhanced Keyboard Navigation
                            </label>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Improved tab order and keyboard shortcuts
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={toggleKeyboardNavigation}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            settings.keyboardNavigation ? 'bg-cyan-500' : 'bg-gray-200 dark:bg-gray-700'
                          }`}
                          role="switch"
                          aria-checked={settings.keyboardNavigation}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>

                      {/* Focus Indicator */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Eye className="w-5 h-5 text-gray-500" />
                          <div>
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              Focus Indicators
                            </label>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Clear focus indicators for keyboard users
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={toggleFocusIndicator}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            settings.focusIndicator ? 'bg-cyan-500' : 'bg-gray-200 dark:bg-gray-700'
                          }`}
                          role="switch"
                          aria-checked={settings.focusIndicator}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Reset Button */}
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={resetSettings}
                    className="w-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    Reset to Defaults
                  </button>
                </div>
              </div>
              <button
                onClick={() => applySettings({ reducedMotion: !settings.reducedMotion })}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </React.Fragment>
  )}

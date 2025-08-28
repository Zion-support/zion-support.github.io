import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  ZoomIn, 
  ZoomOut,
  Palette,
  Settings,
  X,
  Accessibility,
  Braille,
  Headphones,
  Keyboard,
  MousePointer,
  Smartphone,
  Monitor,
  Sun,
  Moon,
  Highlighter,
  Languages
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  colorBlind: boolean;
  dyslexia: boolean;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  focusIndicator: boolean;
  keyboardNavigation: boolean;
  voiceControl: boolean;
  darkMode: boolean;
  language: string;
}

interface Props {
  enabled?: boolean;
  showControls?: boolean;
}

export default function EnhancedAccessibilityEnhancer({ enabled = true, showControls = true }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTab, setCurrentTab] = useState<'visual' | 'navigation' | 'audio' | 'advanced'>('visual');
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    colorBlind: false,
    dyslexia: false,
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 0,
    focusIndicator: true,
    keyboardNavigation: true,
    voiceControl: false,
    darkMode: false,
    language: 'en'
  });

  const settingsRef = useRef<HTMLDivElement>(null);
  const focusableElements = useRef<HTMLElement[]>([]);

  // Enhanced accessibility settings application
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--bg-color', '#000000');
      root.style.setProperty('--accent-color', '#ffff00');
      root.style.setProperty('--border-color', '#ffffff');
      root.style.setProperty('--shadow-color', 'rgba(255, 255, 255, 0.3)');
    } else {
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
      root.style.removeProperty('--accent-color');
      root.style.removeProperty('--border-color');
      root.style.removeProperty('--shadow-color');
    }

    // Large text mode
    if (newSettings.largeText) {
      root.style.setProperty('--base-font-size', '20px');
      root.style.setProperty('--heading-scale', '1.3');
    } else {
      root.style.setProperty('--base-font-size', '16px');
      root.style.setProperty('--heading-scale', '1.0');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.01ms');
      root.style.setProperty('--transition-duration', '0.01ms');
      root.style.setProperty('--scroll-behavior', 'auto');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
      root.style.removeProperty('--scroll-behavior');
    }

    // Font size and spacing
    root.style.setProperty('--font-size', `${newSettings.fontSize}px`);
    root.style.setProperty('--line-height', newSettings.lineHeight.toString());
    root.style.setProperty('--letter-spacing', `${newSettings.letterSpacing}px`);

    // Color blind support
    if (newSettings.colorBlind) {
      root.style.setProperty('--color-blind-mode', 'true');
      root.style.setProperty('--primary-color', '#0000ff');
      root.style.setProperty('--secondary-color', '#ff0000');
      root.style.setProperty('--success-color', '#00ff00');
      root.style.setProperty('--warning-color', '#ffff00');
      root.style.setProperty('--error-color', '#ff00ff');
    } else {
      root.style.removeProperty('--color-blind-mode');
      root.style.removeProperty('--primary-color');
      root.style.removeProperty('--secondary-color');
      root.style.removeProperty('--success-color');
      root.style.removeProperty('--warning-color');
      root.style.removeProperty('--error-color');
    }

    // Dyslexia support
    if (newSettings.dyslexia) {
      root.style.setProperty('--dyslexia-font', 'OpenDyslexic, Arial, sans-serif');
      root.style.setProperty('--dyslexia-spacing', '0.35em');
      root.style.setProperty('--dyslexia-line-height', '1.8');
      root.style.setProperty('--dyslexia-margin', '2em');
    } else {
      root.style.removeProperty('--dyslexia-font');
      root.style.removeProperty('--dyslexia-spacing');
      root.style.removeProperty('--dyslexia-line-height');
      root.style.removeProperty('--dyslexia-margin');
    }

    // Focus indicator
    if (newSettings.focusIndicator) {
      root.style.setProperty('--focus-outline', '3px solid #0066cc');
      root.style.setProperty('--focus-outline-offset', '2px');
    } else {
      root.style.removeProperty('--focus-outline');
      root.style.removeProperty('--focus-outline-offset');
    }

    // Dark mode
    if (newSettings.darkMode) {
      root.style.setProperty('--bg-primary', '#1a1a1a');
      root.style.setProperty('--bg-secondary', '#2d2d2d');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#cccccc');
    } else {
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--bg-secondary');
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--text-secondary');
    }

    // Language support
    root.style.setProperty('--language', newSettings.language);
    document.documentElement.lang = newSettings.language;

    // Apply to body for global accessibility
    document.body.setAttribute('data-accessibility', JSON.stringify(newSettings));
    
    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Enhanced keyboard navigation
  const setupKeyboardNavigation = useCallback(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip if user is typing in input fields
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (event.key) {
        case 'Tab':
          // Enhanced tab navigation with visual indicators
          if (event.shiftKey) {
            // Previous element
            const prevElement = getPreviousFocusableElement();
            if (prevElement) {
              event.preventDefault();
              prevElement.focus();
              highlightFocusableElement(prevElement);
            }
          } else {
            // Next element
            const nextElement = getNextFocusableElement();
            if (nextElement) {
              event.preventDefault();
              nextElement.focus();
              highlightFocusableElement(nextElement);
            }
          }
          break;

        case 'Escape':
          // Close modals and dropdowns
          const modals = document.querySelectorAll('[role="dialog"], [role="menu"]');
          modals.forEach(modal => {
            if (modal.getAttribute('aria-hidden') === 'false') {
              modal.setAttribute('aria-hidden', 'true');
              modal.classList.remove('open');
            }
          });
          break;

        case 'Enter':
        case ' ':
          // Activate buttons and links
          if (document.activeElement instanceof HTMLElement) {
            const activeElement = document.activeElement;
            if (activeElement.getAttribute('role') === 'button' || 
                activeElement.tagName === 'BUTTON' || 
                activeElement.tagName === 'A') {
              event.preventDefault();
              activeElement.click();
            }
          }
          break;

        case 'ArrowUp':
        case 'ArrowDown':
          // Navigate through lists and menus
          const listItems = document.querySelectorAll('[role="listitem"], [role="menuitem"]');
          if (listItems.length > 0) {
            event.preventDefault();
            const currentIndex = Array.from(listItems).findIndex(item => 
              item === document.activeElement || item.contains(document.activeElement)
            );
            const nextIndex = event.key === 'ArrowDown' 
              ? (currentIndex + 1) % listItems.length 
              : (currentIndex - 1 + listItems.length) % listItems.length;
            (listItems[nextIndex] as HTMLElement).focus();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Get focusable elements
  const getFocusableElements = useCallback(() => {
    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])',
      '[role="button"]',
      '[role="link"]',
      '[role="menuitem"]',
      '[role="tab"]'
    ];
    
    return Array.from(document.querySelectorAll(focusableSelectors.join(','))) as HTMLElement[];
  }, []);

  // Get next focusable element
  const getNextFocusableElement = useCallback(() => {
    const elements = getFocusableElements();
    const currentIndex = elements.findIndex(el => el === document.activeElement);
    return elements[(currentIndex + 1) % elements.length];
  }, [getFocusableElements]);

  // Get previous focusable element
  const getPreviousFocusableElement = useCallback(() => {
    const elements = getFocusableElements();
    const currentIndex = elements.findIndex(el => el === document.activeElement);
    return elements[(currentIndex - 1 + elements.length) % elements.length];
  }, [getFocusableElements]);

  // Highlight focusable element
  const highlightFocusableElement = useCallback((element: HTMLElement) => {
    // Remove previous highlights
    document.querySelectorAll('.focus-highlight').forEach(el => 
      el.classList.remove('focus-highlight')
    );
    
    // Add highlight to current element
    element.classList.add('focus-highlight');
    
    // Scroll element into view if needed
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, []);

  // Enhanced screen reader support
  const setupScreenReader = useCallback(() => {
    if (!settings.screenReader) return;

    // Add ARIA live regions for dynamic content
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    document.body.appendChild(liveRegion);

    // Announce page changes
    const announcePageChange = (message: string) => {
      liveRegion.textContent = message;
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    };

    // Listen for route changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement && node.getAttribute('role') === 'main') {
              announcePageChange('Page content loaded');
            }
          });
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      liveRegion.remove();
    };
  }, [settings.screenReader]);

  // Voice control setup
  const setupVoiceControl = useCallback(() => {
    if (!settings.voiceControl || !('webkitSpeechRecognition' in window)) return;

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event: any) => {
      const command = event.results[event.results.length - 1][0].transcript.toLowerCase();
      
      // Voice commands
      if (command.includes('scroll down')) {
        window.scrollBy(0, 100);
      } else if (command.includes('scroll up')) {
        window.scrollBy(0, -100);
      } else if (command.includes('go to top')) {
        window.scrollTo(0, 0);
      } else if (command.includes('go to bottom')) {
        window.scrollTo(0, document.body.scrollHeight);
      } else if (command.includes('click')) {
        // Find and click the focused element
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.click();
        }
      }
    };

    recognition.start();
    return () => recognition.stop();
  }, [settings.voiceControl]);

  // Load saved settings
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Failed to parse saved accessibility settings');
      }
    }
  }, []);

  // Apply settings when they change
  useEffect(() => {
    applySettings(settings);
  }, [settings, applySettings]);

  // Setup keyboard navigation
  useEffect(() => {
    const cleanup = setupKeyboardNavigation();
    return cleanup;
  }, [setupKeyboardNavigation]);

  // Setup screen reader support
  useEffect(() => {
    const cleanup = setupScreenReader();
    return cleanup;
  }, [setupScreenReader]);

  // Setup voice control
  useEffect(() => {
    const cleanup = setupVoiceControl();
    return cleanup;
  }, [setupVoiceControl]);

  // Handle escape key to close panel
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isVisible) {
        setIsVisible(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isVisible]);

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility toggle button */}
      <div className="fixed bottom-4 left-4 z-50">
        <motion.button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Accessibility Settings"
          aria-expanded={isVisible}
          aria-controls="accessibility-panel"
        >
          <Accessibility className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Accessibility panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            id="accessibility-panel"
            ref={settingsRef}
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.9 }}
            className="fixed bottom-20 left-4 w-96 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 p-6 z-50"
            role="dialog"
            aria-labelledby="accessibility-title"
            aria-describedby="accessibility-description"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 id="accessibility-title" className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Accessibility className="w-5 h-5 text-green-600" />
                Accessibility Settings
              </h2>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                aria-label="Close accessibility settings"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p id="accessibility-description" className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Customize your experience with enhanced accessibility features
            </p>

            {/* Tab navigation */}
            <div className="flex space-x-1 mb-4 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
              {[
                { id: 'visual', label: 'Visual', icon: Eye },
                { id: 'navigation', label: 'Navigation', icon: Keyboard },
                { id: 'audio', label: 'Audio', icon: Volume2 },
                { id: 'advanced', label: 'Advanced', icon: Settings }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setCurrentTab(id as any)}
                  className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentTab === id
                      ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                  aria-selected={currentTab === id}
                  role="tab"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>

            {/* Tab panels */}
            <div className="space-y-4">
              {/* Visual Settings */}
              {currentTab === 'visual' && (
                <div role="tabpanel" aria-labelledby="visual-tab">
                  <div className="space-y-3">
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={settings.highContrast}
                        onChange={(e) => setSettings(prev => ({ ...prev, highContrast: e.target.checked }))}
                        className="w-4 h-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
                      />
                      <Contrast className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
                    </label>

                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={settings.largeText}
                        onChange={(e) => setSettings(prev => ({ ...prev, largeText: e.target.checked }))}
                        className="w-4 h-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
                      />
                      <Type className="w-4 h-4 text-purple-600" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>
                    </label>

                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={settings.reducedMotion}
                        onChange={(e) => setSettings(prev => ({ ...prev, reducedMotion: e.target.checked }))}
                        className="w-4 h-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
                      />
                      <Eye className="w-4 h-4 text-orange-600" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Reduced Motion</span>
                    </label>

                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={settings.colorBlind}
                        onChange={(e) => setSettings(prev => ({ ...prev, colorBlind: e.target.checked }))}
                        className="w-4 h-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
                      />
                      <Palette className="w-4 h-4 text-red-600" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Color Blind Support</span>
                    </label>

                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={settings.dyslexia}
                        onChange={(e) => setSettings(prev => ({ ...prev, dyslexia: e.target.checked }))}
                        className="w-4 h-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
                      />
                      <Highlighter className="w-4 h-4 text-yellow-600" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Dyslexia Support</span>
                    </label>

                    <div className="pt-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Font Size: {settings.fontSize}px
                      </label>
                      <input
                        type="range"
                        min="12"
                        max="24"
                        value={settings.fontSize}
                        onChange={(e) => setSettings(prev => ({ ...prev, fontSize: parseInt(e.target.value) }))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Settings */}
              {currentTab === 'navigation' && (
                <div role="tabpanel" aria-labelledby="navigation-tab">
                  <div className="space-y-3">
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={settings.keyboardNavigation}
                        onChange={(e) => setSettings(prev => ({ ...prev, keyboardNavigation: e.target.checked }))}
                        className="w-4 h-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
                      />
                      <Keyboard className="w-4 h-4 text-indigo-600" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Enhanced Keyboard Navigation</span>
                    </label>

                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={settings.focusIndicator}
                        onChange={(e) => setSettings(prev => ({ ...prev, focusIndicator: e.target.checked }))}
                        className="w-4 h-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
                      />
                      <MousePointer className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Focus Indicators</span>
                    </label>

                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Keyboard Shortcuts</h4>
                      <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                        <div><kbd className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">Tab</kbd> Navigate elements</div>
                        <div><kbd className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">Enter</kbd> Activate buttons</div>
                        <div><kbd className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">Escape</kbd> Close modals</div>
                        <div><kbd className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">↑↓</kbd> Navigate lists</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Audio Settings */}
              {currentTab === 'audio' && (
                <div role="tabpanel" aria-labelledby="audio-tab">
                  <div className="space-y-3">
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={settings.screenReader}
                        onChange={(e) => setSettings(prev => ({ ...prev, screenReader: e.target.checked }))}
                        className="w-4 h-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
                      />
                      <Headphones className="w-4 h-4 text-purple-600" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Screen Reader Support</span>
                    </label>

                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={settings.voiceControl}
                        onChange={(e) => setSettings(prev => ({ ...prev, voiceControl: e.target.checked }))}
                        className="w-4 h-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
                      />
                      <Volume2 className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Voice Control</span>
                    </label>

                    {settings.voiceControl && (
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Voice Commands</h4>
                        <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                          <div>"Scroll down" - Scroll down the page</div>
                          <div>"Go to top" - Scroll to top</div>
                          <div>"Click" - Click focused element</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Advanced Settings */}
              {currentTab === 'advanced' && (
                <div role="tabpanel" aria-labelledby="advanced-tab">
                  <div className="space-y-3">
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={settings.darkMode}
                        onChange={(e) => setSettings(prev => ({ ...prev, darkMode: e.target.checked }))}
                        className="w-4 h-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
                      />
                      {settings.darkMode ? <Moon className="w-4 h-4 text-blue-600" /> : <Sun className="w-4 h-4 text-yellow-600" />}
                      <span className="text-sm text-gray-700 dark:text-gray-300">Dark Mode</span>
                    </label>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Language
                      </label>
                      <select
                        value={settings.language}
                        onChange={(e) => setSettings(prev => ({ ...prev, language: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      >
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                        <option value="de">Deutsch</option>
                        <option value="zh">中文</option>
                      </select>
                    </div>

                    <div className="pt-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Line Height: {settings.lineHeight}
                      </label>
                      <input
                        type="range"
                        min="1.2"
                        max="2.0"
                        step="0.1"
                        value={settings.lineHeight}
                        onChange={(e) => setSettings(prev => ({ ...prev, lineHeight: parseFloat(e.target.value) }))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>

                    <div className="pt-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Letter Spacing: {settings.letterSpacing}px
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="2"
                        step="0.1"
                        value={settings.letterSpacing}
                        onChange={(e) => setSettings(prev => ({ ...prev, letterSpacing: parseFloat(e.target.value) }))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick actions */}
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setSettings({
                      highContrast: false,
                      largeText: false,
                      reducedMotion: false,
                      screenReader: false,
                      colorBlind: false,
                      dyslexia: false,
                      fontSize: 16,
                      lineHeight: 1.5,
                      letterSpacing: 0,
                      focusIndicator: true,
                      keyboardNavigation: true,
                      voiceControl: false,
                      darkMode: false,
                      language: 'en'
                    });
                  }}
                  className="flex-1 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  Reset to Default
                </button>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? 'Collapse' : 'Expand'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global accessibility styles */}
      <style jsx global>{`
        /* Focus indicators */
        .focus-highlight {
          outline: 3px solid #0066cc !important;
          outline-offset: 2px !important;
          box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.3) !important;
        }

        /* High contrast mode */
        [data-accessibility*='"highContrast":true'] {
          --text-color: #ffffff !important;
          --bg-color: #000000 !important;
          --accent-color: #ffff00 !important;
        }

        /* Large text mode */
        [data-accessibility*='"largeText":true'] {
          font-size: 20px !important;
        }

        /* Reduced motion */
        [data-accessibility*='"reducedMotion":true'] * {
          animation-duration: 0.01ms !important;
          transition-duration: 0.01ms !important;
        }

        /* Dyslexia support */
        [data-accessibility*='"dyslexia":true'] {
          font-family: OpenDyslexic, Arial, sans-serif !important;
          letter-spacing: 0.35em !important;
          line-height: 1.8 !important;
          margin: 2em !important;
        }

        /* Screen reader only content */
        .sr-only {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0, 0, 0, 0) !important;
          white-space: nowrap !important;
          border: 0 !important;
        }

        /* Custom slider styles */
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </>
  );
}
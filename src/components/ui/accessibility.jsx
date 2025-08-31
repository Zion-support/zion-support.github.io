import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Sun, 
  Moon, 
  Monitor, 
  Type, 
  MousePointer,
  Keyboard,
  Headphones,
  Accessibility,
  Settings,
  X,
  Plus,
  Minus
} from 'lucide-react';

const AccessibilityPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('system');
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [screenReader, setScreenReader] = useState(false);
  const [keyboardNavigation, setKeyboardNavigation] = useState(false);
  const [focusIndicator, setFocusIndicator] = useState(true);
  const [audioDescriptions, setAudioDescriptions] = useState(false);
  const [captions, setCaptions] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const panelRef = useRef(null);
  const dragRef = useRef(null);

  // Theme management
  useEffect(() => {
    const savedTheme = localStorage.getItem('accessibility-theme') || 'system';
    setCurrentTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (theme) => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      // System theme
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.add('light');
        root.classList.remove('dark');
      }
    }
    localStorage.setItem('accessibility-theme', theme);
  };

  // Font size management
  useEffect(() => {
    const savedFontSize = localStorage.getItem('accessibility-font-size') || 16;
    setFontSize(parseInt(savedFontSize));
    document.documentElement.style.fontSize = `${savedFontSize}px`;
  }, []);

  const changeFontSize = (delta) => {
    const newSize = Math.max(12, Math.min(24, fontSize + delta));
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`;
    localStorage.setItem('accessibility-font-size', newSize.toString());
  };

  // High contrast mode
  useEffect(() => {
    const savedHighContrast = localStorage.getItem('accessibility-high-contrast') === 'true';
    setHighContrast(savedHighContrast);
    if (savedHighContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, []);

  const toggleHighContrast = () => {
    const newValue = !highContrast;
    setHighContrast(newValue);
    if (newValue) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
    localStorage.setItem('accessibility-high-contrast', newValue.toString());
  };

  // Reduced motion
  useEffect(() => {
    const savedReducedMotion = localStorage.getItem('accessibility-reduced-motion') === 'true';
    setReducedMotion(savedReducedMotion);
    if (savedReducedMotion) {
      document.documentElement.style.setProperty('--reduced-motion', 'reduce');
    } else {
      document.documentElement.style.setProperty('--reduced-motion', 'no-preference');
    }
  }, []);

  const toggleReducedMotion = () => {
    const newValue = !reducedMotion;
    setReducedMotion(newValue);
    if (newValue) {
      document.documentElement.style.setProperty('--reduced-motion', 'reduce');
    } else {
      document.documentElement.style.setProperty('--reduced-motion', 'no-preference');
    }
    localStorage.setItem('accessibility-reduced-motion', newValue.toString());
  };

  // Focus indicator
  useEffect(() => {
    const savedFocusIndicator = localStorage.getItem('accessibility-focus-indicator') !== 'false';
    setFocusIndicator(savedFocusIndicator);
    if (savedFocusIndicator) {
      document.body.classList.add('show-focus-indicator');
    } else {
      document.body.classList.remove('show-focus-indicator');
    }
  }, []);

  const toggleFocusIndicator = () => {
    const newValue = !focusIndicator;
    setFocusIndicator(newValue);
    if (newValue) {
      document.body.classList.add('show-focus-indicator');
    } else {
      document.body.classList.remove('show-focus-indicator');
    }
    localStorage.setItem('accessibility-focus-indicator', newValue.toString());
  };

  // Keyboard navigation
  useEffect(() => {
    const savedKeyboardNav = localStorage.getItem('accessibility-keyboard-nav') === 'true';
    setKeyboardNavigation(savedKeyboardNav);
    if (savedKeyboardNav) {
      enableKeyboardNavigation();
    } else {
      disableKeyboardNavigation();
    }
  }, []);

  const enableKeyboardNavigation = () => {
    document.addEventListener('keydown', handleKeyboardNavigation);
    document.body.classList.add('keyboard-navigation');
  };

  const disableKeyboardNavigation = () => {
    document.removeEventListener('keydown', handleKeyboardNavigation);
    document.body.classList.remove('keyboard-navigation');
  };

  const handleKeyboardNavigation = (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  };

  const toggleKeyboardNavigation = () => {
    const newValue = !keyboardNavigation;
    setKeyboardNavigation(newValue);
    if (newValue) {
      enableKeyboardNavigation();
    } else {
      disableKeyboardNavigation();
    }
    localStorage.setItem('accessibility-keyboard-nav', newValue.toString());
  };

  // Dragging functionality
  const handleMouseDown = (e) => {
    if (e.target === dragRef.current) {
      setIsDragging(true);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - (panelRef.current?.offsetWidth / 2 || 0),
        y: e.clientY - (dragRef.current?.offsetHeight / 2 || 0)
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  // Screen reader announcements
  const announceToScreenReader = (message) => {
    if (screenReader) {
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
  };

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
    applyTheme(theme);
    announceToScreenReader(`Theme changed to ${theme}`);
  };

  const handleFontSizeChange = (delta) => {
    changeFontSize(delta);
    announceToScreenReader(`Font size changed to ${fontSize + delta}px`);
  };

  return (
    <>
      {/* Floating Accessibility Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-3 bg-zion-purple text-white rounded-full shadow-lg hover:bg-zion-purple/80 transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2"
        aria-label="Open accessibility panel"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, scale: 0.8, x: 300 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 300 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-4 right-4 z-40 w-80 bg-white dark:bg-zion-slate-dark rounded-lg shadow-2xl border border-zion-purple/20 overflow-hidden"
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`
            }}
          >
            {/* Panel Header */}
            <div
              ref={dragRef}
              className="bg-zion-purple text-white p-4 cursor-move select-none"
              onMouseDown={handleMouseDown}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Accessibility className="w-5 h-5" />
                  <h2 className="text-lg font-semibold">Accessibility</h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Panel Content */}
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {/* Theme Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Theme
                </label>
                <div className="flex space-x-2">
                  {[
                    { value: 'light', icon: Sun, label: 'Light' },
                    { value: 'dark', icon: Moon, label: 'Dark' },
                    { value: 'system', icon: Monitor, label: 'System' }
                  ].map(({ value, icon: Icon, label }) => (
                    <button
                      key={value}
                      onClick={() => handleThemeChange(value)}
                      className={`flex-1 flex items-center justify-center space-x-2 p-2 rounded-lg border transition-colors ${
                        currentTheme === value
                          ? 'bg-zion-purple text-white border-zion-purple'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Font Size Control */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Font Size: {fontSize}px
                </label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleFontSizeChange(-1)}
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Decrease font size"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div
                      className="bg-zion-purple h-2 rounded-full transition-all"
                      style={{ width: `${((fontSize - 12) / (24 - 12)) * 100}%` }}
                    />
                  </div>
                  <button
                    onClick={() => handleFontSizeChange(1)}
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Increase font size"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Accessibility Toggles */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Accessibility Features
                </label>
                
                <div className="space-y-2">
                  {[
                    {
                      state: highContrast,
                      setState: toggleHighContrast,
                      icon: Eye,
                      label: 'High Contrast',
                      description: 'Increase color contrast for better visibility'
                    },
                    {
                      state: reducedMotion,
                      setState: toggleReducedMotion,
                      icon: MousePointer,
                      label: 'Reduced Motion',
                      description: 'Reduce animations and motion effects'
                    },
                    {
                      state: focusIndicator,
                      setState: toggleFocusIndicator,
                      icon: Keyboard,
                      label: 'Focus Indicator',
                      description: 'Show clear focus indicators'
                    },
                    {
                      state: keyboardNavigation,
                      setState: toggleKeyboardNavigation,
                      icon: Keyboard,
                      label: 'Keyboard Navigation',
                      description: 'Enable enhanced keyboard navigation'
                    },
                    {
                      state: screenReader,
                      setState: setScreenReader,
                      icon: Headphones,
                      label: 'Screen Reader Support',
                      description: 'Enable screen reader announcements'
                    },
                    {
                      state: audioDescriptions,
                      setState: setAudioDescriptions,
                      icon: Volume2,
                      label: 'Audio Descriptions',
                      description: 'Provide audio descriptions for content'
                    },
                    {
                      state: captions,
                      setState: setCaptions,
                      icon: Type,
                      label: 'Captions',
                      description: 'Show captions for audio content'
                    }
                  ].map(({ state, setState, icon: Icon, label, description }) => (
                    <div key={label} className="flex items-start space-x-3">
                      <button
                        onClick={() => setState(!state)}
                        className={`mt-1 p-2 rounded-lg transition-colors ${
                          state
                            ? 'bg-zion-purple text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                        aria-label={`${state ? 'Disable' : 'Enable'} ${label.toLowerCase()}`}
                      >
                        <Icon className="w-4 h-4" />
                      </button>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {label}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Quick Actions
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setFontSize(16);
                      document.documentElement.style.fontSize = '16px';
                      localStorage.setItem('accessibility-font-size', '16');
                      announceToScreenReader('Font size reset to default');
                    }}
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    Reset Font Size
                  </button>
                  <button
                    onClick={() => {
                      setCurrentTheme('system');
                      applyTheme('system');
                      announceToScreenReader('Theme reset to system default');
                    }}
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    Reset Theme
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Only Content */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Accessibility panel {isOpen ? 'opened' : 'closed'}
      </div>
    </>
  );
};

export default AccessibilityPanel;

import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Contrast, 
  Type, 
  MousePointer, 
  Keyboard,
  Accessibility,
  Settings,
  X,
  CheckCircle,
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
  enableHighContrast?: boolean;
  enableLargeText?: boolean;
  enableReducedMotion?: boolean;
  enableScreenReader?: boolean;
  enableKeyboardNavigation?: boolean;
  enableFocusIndicators?: boolean;
}

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableHighContrast = true,
  enableLargeText = true,
  enableReducedMotion = true,
  enableScreenReader = true,
  enableKeyboardNavigation = true,
  enableFocusIndicators = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: false,
  });
  const [notifications, setNotifications] = useState<string[]>([]);

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
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

    // Apply focus indicators
    if (updatedSettings.focusIndicators) {
      document.documentElement.classList.add('focus-indicators');
    } else {
      document.documentElement.classList.remove('focus-indicators');
    }

    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
    
    // Show notification
    const settingName = Object.keys(newSettings)[0];
    if (settingName) {
      const action = newSettings[settingName as keyof AccessibilitySettings] ? 'enabled' : 'disabled';
      addNotification(`${settingName.replace(/([A-Z])/g, ' $1').toLowerCase()} ${action}`);
    }
  }, [settings]);

  // Load saved settings
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applySettings(parsed);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Keyboard navigation support
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip if user is typing in an input
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (event.key) {
        case 'Tab':
          // Ensure focus is visible
          document.documentElement.classList.add('focus-visible');
          break;
        case 'Escape':
          setIsOpen(false);
          break;
        case 'h':
        case 'H':
          if (event.ctrlKey) {
            event.preventDefault();
            setIsOpen(!isOpen);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation, isOpen]);

  // Focus management
  useEffect(() => {
    if (!enableFocusIndicators) return;

    const handleFocusChange = () => {
      const focusedElement = document.activeElement;
      if (focusedElement) {
        // Add focus indicator class
        focusedElement.classList.add('focus-visible');
        
        // Remove after focus is lost
        const removeFocusIndicator = () => {
          focusedElement.classList.remove('focus-visible');
          focusedElement.removeEventListener('blur', removeFocusIndicator);
        };
        focusedElement.addEventListener('blur', removeFocusIndicator);
      }
    };

    document.addEventListener('focusin', handleFocusChange);
    return () => document.removeEventListener('focusin', handleFocusChange);
  }, [enableFocusIndicators]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!enableScreenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, [enableScreenReader]);

  // Add notification
  const addNotification = useCallback((message: string) => {
    const newNotification = `${message} - ${new Date().toLocaleTimeString()}`;
    setNotifications(prev => [...prev, newNotification]);
    
    // Announce to screen reader
    announceToScreenReader(message);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n !== newNotification));
    }, 5000);
  }, [announceToScreenReader]);

  // Accessibility panel
  const AccessibilityPanel = () => (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
      className="fixed right-0 top-0 h-full w-80 bg-zion-slate-dark border-l border-zion-purple/20 shadow-2xl z-50 overflow-y-auto"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Accessibility className="w-6 h-6 text-zion-cyan" />
            Accessibility
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-zion-slate-light hover:text-white hover:bg-zion-purple/20 rounded-lg transition-colors"
            aria-label="Close accessibility panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* High Contrast */}
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={(e) => applySettings({ highContrast: e.target.checked })}
                className="w-4 h-4 text-zion-cyan bg-zion-slate-darker border-zion-purple/30 rounded focus:ring-zion-cyan focus:ring-2"
              />
              <Contrast className="w-5 h-5 text-zion-cyan" />
              <span className="text-white font-medium">High Contrast</span>
            </label>
            <p className="text-sm text-zion-slate-light ml-7">
              Increases contrast for better visibility
            </p>
          </div>

          {/* Large Text */}
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.largeText}
                onChange={(e) => applySettings({ largeText: e.target.checked })}
                className="w-4 h-4 text-zion-cyan bg-zion-slate-darker border-zion-purple/30 rounded focus:ring-zion-cyan focus:ring-2"
              />
              <Type className="w-5 h-5 text-zion-cyan" />
              <span className="text-white font-medium">Large Text</span>
            </label>
            <p className="text-sm text-zion-slate-light ml-7">
              Increases text size for better readability
            </p>
          </div>

          {/* Reduced Motion */}
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={(e) => applySettings({ reducedMotion: e.target.checked })}
                className="w-4 h-4 text-zion-cyan bg-zion-slate-darker border-zion-purple/30 rounded focus:ring-zion-cyan focus:ring-2"
              />
              <Eye className="w-5 h-5 text-zion-cyan" />
              <span className="text-white font-medium">Reduced Motion</span>
            </label>
            <p className="text-sm text-zion-slate-light ml-7">
              Reduces animations for users sensitive to motion
            </p>
          </div>

          {/* Focus Indicators */}
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.focusIndicators}
                onChange={(e) => applySettings({ focusIndicators: e.target.checked })}
                className="w-4 h-4 text-zion-cyan bg-zion-slate-darker border-zion-purple/30 rounded focus:ring-zion-cyan focus:ring-2"
              />
              <MousePointer className="w-5 h-5 text-zion-cyan" />
              <span className="text-white font-medium">Focus Indicators</span>
            </label>
            <p className="text-sm text-zion-slate-light ml-7">
              Shows clear focus indicators for keyboard navigation
            </p>
          </div>

          {/* Keyboard Shortcuts */}
          <div className="pt-4 border-t border-zion-purple/20">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Keyboard className="w-5 h-5 text-zion-cyan" />
              Keyboard Shortcuts
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-zion-slate-light">Open/Close Panel:</span>
                <kbd className="px-2 py-1 bg-zion-slate-darker text-zion-cyan rounded text-xs">Ctrl + H</kbd>
              </div>
              <div className="flex justify-between">
                <span className="text-zion-slate-light">Close Panel:</span>
                <kbd className="px-2 py-1 bg-zion-slate-darker text-zion-cyan rounded text-xs">Escape</kbd>
              </div>
              <div className="flex justify-between">
                <span className="text-zion-slate-light">Navigate:</span>
                <kbd className="px-2 py-1 bg-zion-slate-darker text-zion-cyan rounded text-xs">Tab</kbd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      {children}
      
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 p-3 bg-zion-cyan text-zion-slate-dark rounded-full shadow-lg hover:bg-zion-cyan/90 transition-all duration-300 z-40 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-zion-slate-dark"
        aria-label="Open accessibility settings"
        aria-expanded={isOpen}
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && <AccessibilityPanel />}
      </AnimatePresence>

      {/* Notifications */}
      <div className="fixed top-4 left-4 space-y-2 z-50">
        {notifications.map((notification, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="bg-zion-slate-dark border border-zion-purple/20 rounded-lg p-3 shadow-lg max-w-sm"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-white text-sm">{notification}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Screen Reader Only Content */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Accessibility panel is {isOpen ? 'open' : 'closed'}
      </div>
    </>
  );
};
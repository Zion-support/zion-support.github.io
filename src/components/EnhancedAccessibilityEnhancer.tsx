import React, { useEffect, useRef, useCallback, useState } from 'react';
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
  HelpCircle,
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
  enabled?: boolean;
  showPanel?: boolean;
  autoDetect?: boolean;
}

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showPanel = false,
  autoDetect = true
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: false,
  });

  const focusableElements = useRef<HTMLElement[]>([]);
  const currentFocusIndex = useRef(0);

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);

    // Apply high contrast
    if (updatedSettings.highContrast) {
      document.documentElement.style.setProperty('--high-contrast', 'true');
      document.body.classList.add('high-contrast');
    } else {
      document.documentElement.style.removeProperty('--high-contrast');
      document.body.classList.remove('high-contrast');
    }

    // Apply large text
    if (updatedSettings.largeText) {
      document.documentElement.style.fontSize = '18px';
      document.body.classList.add('large-text');
    } else {
      document.documentElement.style.fontSize = '16px';
      document.body.classList.remove('large-text');
    }

    // Apply reduced motion
    if (updatedSettings.reducedMotion) {
      document.documentElement.style.setProperty('--reduced-motion', 'true');
      document.body.classList.add('reduced-motion');
    } else {
      document.documentElement.style.removeProperty('--reduced-motion');
      document.body.classList.remove('reduced-motion');
    }

    // Apply focus indicators
    if (updatedSettings.focusIndicators) {
      document.documentElement.style.setProperty('--focus-visible', 'auto');
    } else {
      document.documentElement.style.setProperty('--focus-visible', 'none');
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        applySettings(parsedSettings);
=======
    focusIndicator: true
  });
  
  const [isPanelOpen, setIsPanelOpen] = useState(showPanel);
  const [notifications, setNotifications] = useState<Array<{ id: string; type: 'success' | 'warning' | 'info'; message: string }>>([]);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const focusHistoryRef = useRef<HTMLElement[]>([]);
  const skipLinkRef = useRef<HTMLAnchorElement>(null);

  // Auto-detect user preferences
  useEffect(() => {
    if (!enabled || !autoDetect) return;

    const mediaQueries = {
      prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)'),
      prefersHighContrast: window.matchMedia('(prefers-contrast: high)'),
      prefersLargeText: window.matchMedia('(prefers-contrast: more)')
    };

    const handleMediaChange = () => {
      setSettings(prev => ({
        ...prev,
        reducedMotion: mediaQueries.prefersReducedMotion.matches,
        highContrast: mediaQueries.prefersHighContrast.matches,
        largeText: mediaQueries.prefersLargeText.matches
      }));
    };

    // Set initial values
    handleMediaChange();

    // Listen for changes
    mediaQueries.prefersReducedMotion.addEventListener('change', handleMediaChange);
    mediaQueries.prefersHighContrast.addEventListener('change', handleMediaChange);
    mediaQueries.prefersLargeText.addEventListener('change', handleMediaChange);

    return () => {
      mediaQueries.prefersReducedMotion.removeEventListener('change', handleMediaChange);
      mediaQueries.prefersHighContrast.removeEventListener('change', handleMediaChange);
      mediaQueries.prefersLargeText.removeEventListener('change', handleMediaChange);
    };
  }, [enabled, autoDetect]);

  // Apply accessibility settings
  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.style.setProperty('--zion-slate-light', '#ffffff');
      root.style.setProperty('--zion-slate', '#e2e8f0');
      root.style.setProperty('--zion-slate-dark', '#1e293b');
      root.style.setProperty('--zion-slate-darker', '#0f172a');
    } else {
      root.style.removeProperty('--zion-slate-light');
      root.style.removeProperty('--zion-slate');
      root.style.removeProperty('--zion-slate-dark');
      root.style.removeProperty('--zion-slate-darker');
    }

    // Large text
    if (settings.largeText) {
      root.style.fontSize = '18px';
      root.style.setProperty('--text-base', '1.125rem');
      root.style.setProperty('--text-lg', '1.25rem');
      root.style.setProperty('--text-xl', '1.5rem');
    } else {
      root.style.fontSize = '16px';
      root.style.removeProperty('--text-base');
      root.style.removeProperty('--text-lg');
      root.style.removeProperty('--text-xl');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--transition-duration', '0.1s');
      root.style.setProperty('--animation-duration', '0.1s');
    } else {
      root.style.removeProperty('--transition-duration');
      root.style.removeProperty('--animation-duration');
    }

    // Focus indicator
    if (settings.focusIndicator) {
      root.style.setProperty('--focus-ring', '2px solid #06b6d4');
    } else {
      root.style.setProperty('--focus-ring', 'none');
    }

  }, [enabled, settings]);

  // Keyboard navigation enhancement
  useEffect(() => {
    if (!enabled || !settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.altKey) {
        event.preventDefault();
        const mainContent = document.querySelector('main');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }

      // Enhanced tab navigation
      if (event.key === 'Tab') {
        const focusableElements = document.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        
        const currentIndex = Array.from(focusableElements).indexOf(target);
        const nextIndex = event.shiftKey ? currentIndex - 1 : currentIndex + 1;
        
        if (nextIndex >= 0 && nextIndex < focusableElements.length) {
          event.preventDefault();
          (focusableElements[nextIndex] as HTMLElement).focus();
        }
      }

      // Escape key to close modals/panels
      if (event.key === 'Escape') {
        const openModals = document.querySelectorAll('[role="dialog"][aria-modal="true"]');
        if (openModals.length > 0) {
          const lastModal = openModals[openModals.length - 1] as HTMLElement;
          lastModal.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enabled, settings.keyboardNavigation]);

  // Focus management
  useEffect(() => {
    if (!enabled) return;

    const handleFocusChange = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      setCurrentFocus(target);
      
      // Track focus history
      if (target && !focusHistoryRef.current.includes(target)) {
        focusHistoryRef.current.push(target);
        if (focusHistoryRef.current.length > 10) {
          focusHistoryRef.current.shift();
        }
      }

      // Announce focus changes for screen readers
      if (settings.screenReader && target) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = `Focused on ${target.textContent || target.tagName.toLowerCase()}`;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
          document.body.removeChild(announcement);
        }, 1000);
      }
    };

    document.addEventListener('focusin', handleFocusChange);
    return () => document.removeEventListener('focusin', handleFocusChange);
  }, [enabled, settings.screenReader]);

  // Add notification
  const addNotification = useCallback((type: 'success' | 'warning' | 'info', message: string) => {
    const id = Date.now().toString();
    setNotifications(prev => [...prev, { id, type, message }]);
    
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  }, []);

  // Toggle setting
  const toggleSetting = useCallback((key: keyof AccessibilitySettings) => {
    setSettings(prev => {
      const newSettings = { ...prev, [key]: !prev[key] };
      
      // Save to localStorage
      localStorage.setItem('zion-accessibility-settings', JSON.stringify(newSettings));
      
      // Show notification
      const action = newSettings[key] ? 'enabled' : 'disabled';
      addNotification('success', `${key.replace(/([A-Z])/g, ' $1').toLowerCase()} ${action}`);
      
      return newSettings;
    });
  }, [addNotification]);

  // Load saved settings
  useEffect(() => {
    if (!enabled) return;

    const saved = localStorage.getItem('zion-accessibility-settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings(prev => ({ ...prev, ...parsed }));
>>>>>>> cursor/analyze-improve-and-deploy-application-75e8
      } catch (error) {
        console.error('Failed to parse accessibility settings:', error);
      }
    }
<<<<<<< HEAD
  }, [applySettings]);

  // Keyboard navigation support
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        // Update focusable elements
        focusableElements.current = Array.from(
          document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        ) as HTMLElement[];
      }

      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        const direction = event.key === 'ArrowDown' ? 1 : -1;
        currentFocusIndex.current = Math.max(
          0,
          Math.min(
            focusableElements.current.length - 1,
            currentFocusIndex.current + direction
          )
        );
        focusableElements.current[currentFocusIndex.current]?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!enableScreenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
  }, [enableScreenReader]);

  const toggleAccessibility = () => {
    setIsOpen(!isOpen);
    announceToScreenReader(isOpen ? 'Accessibility panel closed' : 'Accessibility panel opened');
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicators: true,
    };
    applySettings(defaultSettings);
    announceToScreenReader('Accessibility settings reset to default');
  };

  return (
    <>
      {children}
      
      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={toggleAccessibility}
        className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Accessibility Settings"
        aria-expanded={isOpen}
      >
        <Accessibility size={24} />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
=======
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Skip to main content link */}
      <a
        ref={skipLinkRef}
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-zion-cyan focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2"
      >
        Skip to main content
      </a>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isPanelOpen && (
>>>>>>> cursor/analyze-improve-and-deploy-application-75e8
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
<<<<<<< HEAD
            className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-40 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Accessibility Settings
                </h2>
                <button
                  onClick={toggleAccessibility}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Settings */}
              <div className="space-y-6">
                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Contrast size={20} className="text-gray-600 dark:text-gray-400" />
                    <div>
                      <label className="text-sm font-medium text-gray-900 dark:text-white">
                        High Contrast
                      </label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Increase contrast for better visibility
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => applySettings({ highContrast: !settings.highContrast })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.highContrast ? 'bg-cyan-500' : 'bg-gray-200'
                    }`}
                    aria-label={`High contrast ${settings.highContrast ? 'enabled' : 'disabled'}`}
=======
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Accessibility className="w-6 h-6 text-zion-cyan" />
                  Accessibility
                </h2>
                <button
                  onClick={() => setIsPanelOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Contrast className="w-5 h-5 text-zion-cyan" />
                    <span className="text-sm font-medium">High Contrast</span>
                  </div>
                  <button
                    onClick={() => toggleSetting('highContrast')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.highContrast ? 'bg-zion-cyan' : 'bg-gray-200'
                    }`}
                    aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast`}
>>>>>>> cursor/analyze-improve-and-deploy-application-75e8
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Large Text */}
                <div className="flex items-center justify-between">
<<<<<<< HEAD
                  <div className="flex items-center space-x-3">
                    <Type size={20} className="text-gray-600 dark:text-gray-400" />
                    <div>
                      <label className="text-sm font-medium text-gray-900 dark:text-white">
                        Large Text
                      </label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Increase text size for better readability
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => applySettings({ largeText: !settings.largeText })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.largeText ? 'bg-cyan-500' : 'bg-gray-200'
                    }`}
                    aria-label={`Large text ${settings.largeText ? 'enabled' : 'disabled'}`}
=======
                  <div className="flex items-center gap-3">
                    <Type className="w-5 h-5 text-zion-cyan" />
                    <span className="text-sm font-medium">Large Text</span>
                  </div>
                  <button
                    onClick={() => toggleSetting('largeText')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.largeText ? 'bg-zion-cyan' : 'bg-gray-200'
                    }`}
                    aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text`}
>>>>>>> cursor/analyze-improve-and-deploy-application-75e8
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.largeText ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between">
<<<<<<< HEAD
                  <div className="flex items-center space-x-3">
                    <Move size={20} className="text-gray-600 dark:text-gray-400" />
                    <div>
                      <label className="text-sm font-medium text-gray-900 dark:text-white">
                        Reduced Motion
                      </label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Reduce animations and motion
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => applySettings({ reducedMotion: !settings.reducedMotion })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.reducedMotion ? 'bg-cyan-500' : 'bg-gray-200'
                    }`}
                    aria-label={`Reduced motion ${settings.reducedMotion ? 'enabled' : 'disabled'}`}
=======
                  <div className="flex items-center gap-3">
                    <Eye className="w-5 h-5 text-zion-cyan" />
                    <span className="text-sm font-medium">Reduced Motion</span>
                  </div>
                  <button
                    onClick={() => toggleSetting('reducedMotion')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.reducedMotion ? 'bg-zion-cyan' : 'bg-gray-200'
                    }`}
                    aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
>>>>>>> cursor/analyze-improve-and-deploy-application-75e8
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

<<<<<<< HEAD
                {/* Focus Indicators */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Keyboard size={20} className="text-gray-600 dark:text-gray-400" />
                    <div>
                      <label className="text-sm font-medium text-gray-900 dark:text-white">
                        Focus Indicators
                      </label>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Show keyboard focus indicators
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => applySettings({ focusIndicators: !settings.focusIndicators })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.focusIndicators ? 'bg-cyan-500' : 'bg-gray-200'
                    }`}
                    aria-label={`Focus indicators ${settings.focusIndicators ? 'enabled' : 'disabled'}`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.focusIndicators ? 'translate-x-6' : 'translate-x-1'
=======
                {/* Focus Indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MousePointer className="w-5 h-5 text-zion-cyan" />
                    <span className="text-sm font-medium">Focus Indicator</span>
                  </div>
                  <button
                    onClick={() => toggleSetting('focusIndicator')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.focusIndicator ? 'bg-zion-cyan' : 'bg-gray-200'
                    }`}
                    aria-label={`${settings.focusIndicator ? 'Disable' : 'Enable'} focus indicator`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
>>>>>>> cursor/analyze-improve-and-deploy-application-75e8
                      }`}
                    />
                  </button>
                </div>
<<<<<<< HEAD
              </div>

              {/* Reset Button */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={resetSettings}
                  className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                >
                  Reset to Default
                </button>
              </div>

              {/* Status Indicator */}
              <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <Check size={16} className="text-green-500" />
                  <span>Accessibility features active</span>
=======

                {/* Keyboard Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Keyboard className="w-5 h-5 text-zion-cyan" />
                    <span className="text-sm font-medium">Enhanced Keyboard</span>
                  </div>
                  <button
                    onClick={() => toggleSetting('keyboardNavigation')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.keyboardNavigation ? 'bg-zion-cyan' : 'bg-gray-200'
                    }`}
                    aria-label={`${settings.keyboardNavigation ? 'Disable' : 'Enable'} enhanced keyboard navigation`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Help */}
                <div className="pt-4 border-t border-gray-200">
                  <button
                    onClick={() => addNotification('info', 'Keyboard shortcuts: Tab to navigate, Shift+Tab to go back, Escape to close modals')}
                    className="flex items-center gap-2 text-sm text-zion-cyan hover:text-zion-cyan-dark transition-colors"
                  >
                    <HelpCircle className="w-4 h-4" />
                    Keyboard Shortcuts
                  </button>
>>>>>>> cursor/analyze-improve-and-deploy-application-75e8
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

<<<<<<< HEAD
      {/* Screen Reader Only Styles */}
      <style jsx>{`
=======
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsPanelOpen(!isPanelOpen)}
        className="fixed bottom-4 left-4 p-3 bg-zion-cyan text-white rounded-full shadow-lg hover:bg-zion-cyan-dark transition-colors z-40 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2"
        aria-label="Open accessibility panel"
        aria-expanded={isPanelOpen}
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        <AnimatePresence>
          {notifications.map(notification => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              className={`flex items-center gap-3 p-4 rounded-lg shadow-lg max-w-sm ${
                notification.type === 'success' ? 'bg-green-500 text-white' :
                notification.type === 'warning' ? 'bg-yellow-500 text-white' :
                'bg-blue-500 text-white'
              }`}
            >
              {notification.type === 'success' && <CheckCircle className="w-5 h-5" />}
              {notification.type === 'warning' && <AlertTriangle className="w-5 h-5" />}
              {notification.type === 'info' && <HelpCircle className="w-5 h-5" />}
              <span className="text-sm font-medium">{notification.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Focus indicator styles */}
      <style jsx>{`
        *:focus {
          outline: var(--focus-ring, 2px solid #06b6d4) !important;
          outline-offset: 2px !important;
        }
        
>>>>>>> cursor/analyze-improve-and-deploy-application-75e8
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
<<<<<<< HEAD
        
        .high-contrast {
          --text-color: #000000;
          --bg-color: #ffffff;
          --accent-color: #0000ff;
        }
        
        .large-text {
          font-size: 1.2em;
        }
        
        .reduced-motion {
          --animation-duration: 0.01ms;
        }
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-75e8
      `}</style>
    </>
  );
};
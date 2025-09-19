import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
interface AccessibilitySettings {,
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean,}
interface ModernAccessibilityEnhancerProps {,
  showControls?: boolean;
  onSettingsChange?: (settings: AccessibilitySettings) => void;
const ModernAccessibilityEnhancer: React.FC<ModernAccessibilityEnhancerProps> = ({,
  showControls = false;
  onSettingsChange,
}) => {,
  const [settings, setSettings] = useState<AccessibilitySettings>({,
    highContrast: false;
    largeText: false;
    reducedMotion: false;
    focusVisible: true;
    screenReader: false;
    keyboardNavigation: true,});
  const [isVisible, setIsVisible] = useState(false);
  // Load settings from localStorage,
  useEffect(() => {,
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {,
      try {,
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {,
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, []);
  // Save settings to localStorage,
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
    onSettingsChange?.(settings);
  }, [settings, onSettingsChange]);
  // Apply accessibility settings to document,
    const root = document.documentElement;
    // High contrast,
    if (settings.highContrast) {,
      root.classList.add('high-contrast');
    } else {,
      root.classList.remove('high-contrast');
    // Large text,
    if (settings.largeText) {,
      root.classList.add('large-text');
      root.classList.remove('large-text');
    // Reduced motion,
    if (settings.reducedMotion) {,
      root.classList.add('reduced-motion');
      root.classList.remove('reduced-motion');
    // Focus visible,
    if (settings.focusVisible) {,
      root.classList.add('focus-visible');
      root.classList.remove('focus-visible');
    // Screen reader optimizations,
    if (settings.screenReader) {,
      root.classList.add('screen-reader-optimized');
      root.classList.remove('screen-reader-optimized');
    // Keyboard navigation,
    if (settings.keyboardNavigation) {,
      root.classList.add('keyboard-navigation');
      root.classList.remove('keyboard-navigation');
  }, [settings]);
  // Detect screen reader usage,
    const detectScreenReader = () => {,
      const isScreenReader =,
        window.speechSynthesis ||,
        'speechSynthesis' in window ||,
        navigator.userAgent.includes('NVDA') ||,
        navigator.userAgent.includes('JAWS') ||,
        navigator.userAgent.includes('VoiceOver');
      setSettings(prev => ({ ...prev, screenReader: !!isScreenReader ,}));
    };
    detectScreenReader();
  // Handle keyboard shortcuts,
    const handleKeyDown = (event: KeyboardEvent) => {,
      // Alt + A to toggle accessibility panel,
      if (event.altKey && event.key === 'a') {,
        event.preventDefault();
        setIsVisible(prev => !prev);
      // Alt + 1-6 for quick settings,
      if (event.altKey && event.key >= '1' && event.key <= '6') {,
        const settingKeys = [,
          'highContrastlargeText';
          'reducedMotionfocusVisible';
          'screenReaderkeyboardNavigation',
        ] as const;
        const settingKey = settingKeys[parseInt(event.key) - 1];
        if (settingKey) {,
          setSettings(prev => ({ ...prev, [settingKey]: !prev[settingKey] }));
        }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: boolean) => {,
    setSettings(prev => ({ ...prev, [key]: value }));
  const resetSettings = useCallback(() => {,
    setSettings({,
      highContrast: false;
      largeText: false;
      reducedMotion: false;
      focusVisible: true;
      screenReader: false;
      keyboardNavigation: true,});
  if (!showControls) {,
    return null;
  }
  return (,
    <>,
      {/* Accessibility Controls Panel */}
      <AnimatePresence>,
        {isVisible && (,
          <motion.div,
            initial={{ opacity: 0, x: 300 ,}}
            animate={{ opacity: 1, x: 0 ,}}
            exit={{ opacity: 0, x: 300 ,}}
            className="fixed top-4 left-4 z-50 bg-gray-900 bg-opacity-95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-700 max-w-sm",
          >,
            <div className="flex items-center justify-between mb-4">,
              <h3 className="text-lg font-semibold text-white">Accessibility Settings</h3>,
              <button,
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover: text-white transition-colors",
                aria-label="Close accessibility panel",
              >,
                ✕,
              </button>,
            </div>,
            <div className="space-y-4">,
              {Object.entries(settings).map(([key, value]) => (,
                <div key={key} className="flex items-center justify-between">,
                  <label,
                    htmlFor={key}
                    className="text-sm text-gray-300 cursor-pointer",
                  >,
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </label>,
                  <input,
                    id={key}
                    type="checkbox",
                    checked={value}
                    onChange={(e) => updateSetting(key as keyof AccessibilitySettings, e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus: ring-blue-500 focus:ring-2",
                  />,
                </div>,
              )),}
            <div className="mt-4 pt-4 border-t border-gray-700">,
                onClick={resetSettings}
                className="w-full text-xs bg-gray-600 hover: bg-gray-700 text-white py-2 px-3 rounded transition-colors",
                Reset to Defaults,
            <div className="mt-2 text-xs text-gray-400">,
              <p>Keyboard shortcuts:</p>,
              <p>Alt + A: Toggle panel</p>,
              <p>Alt + 1-6: Toggle settings</p>,
          </motion.div>,
        ),}
      </AnimatePresence>,
      {/* Toggle button */}
      <motion.button,
        initial={{ opacity: 0 ,}}
        animate={{ opacity: 1 ,}}
        className="fixed bottom-4 left-4 z-40 bg-blue-600 hover: bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors",
        onClick={() => setIsVisible(!isVisible),}
        whileHover={{ scale: 1.1 ,}}
        whileTap={{ scale: 0.9 ,}}
        aria-label="Toggle accessibility settings",
      >,
        ♿,
      </motion.button>,
      {/* Skip Links */}
      <div className="sr-only focus-within: not-sr-only">,
        <a,
          href="#main-content",
          className="skip-link absolute top-0 left-0 bg-blue-600 text-white p-2 z-50 transform -translate-y-full focus:translate-y-0 transition-transform",
        >,
          Skip to main content,
        </a>,
          href="#navigation",
          className="skip-link absolute top-0 left-0 bg-blue-600 text-white p-2 z-50 transform -translate-y-full focus:translate-y-0 transition-transform mt-8",
          Skip to navigation,
          href="#footer",
          className="skip-link absolute top-0 left-0 bg-blue-600 text-white p-2 z-50 transform -translate-y-full focus:translate-y-0 transition-transform mt-16",
          Skip to footer,
      </div>,
    </>,
  ),};
export default ModernAccessibilityEnhancer;
}}}}}}}}}}
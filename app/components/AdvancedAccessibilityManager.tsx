import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
}

interface AdvancedAccessibilityManagerProps {
  children: React.ReactNode;
}

const AdvancedAccessibilityManager: React.FC<AdvancedAccessibilityManagerProps> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: true,
    screenReader: false,
    keyboardNavigation: false
  });

  const [isVisible, setIsVisible] = useState(false);

  // Detect screen reader usage
  const detectScreenReader = useCallback(() => {
    const hasScreenReader = 
      window.navigator.userAgent.includes('NVDA') ||
      window.navigator.userAgent.includes('JAWS') ||
      window.navigator.userAgent.includes('VoiceOver') ||
      window.navigator.userAgent.includes('TalkBack') ||
      (window as any).speechSynthesis?.speaking ||
      document.querySelector('[aria-live]') !== null;
    
    setSettings(prev => ({ ...prev, screenReader: hasScreenReader }));
  }, []);

  // Apply accessibility settings to document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Large text
    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Focus visible
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
    
    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Load settings from localStorage
  const loadSettings = useCallback(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        const parsedSettings = JSON.parse(saved);
        setSettings(parsedSettings);
        applySettings(parsedSettings);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Update setting
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
  }, [settings, applySettings]);

  // Keyboard navigation handler
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      setSettings(prev => ({ ...prev, keyboardNavigation: true }));
    }
    
    // Toggle accessibility panel with Ctrl+Shift+A
    if (e.ctrlKey && e.shiftKey && e.key === 'A') {
      setIsVisible(prev => !prev);
    }
  }, []);

  // Mouse interaction handler
  const handleMouseDown = useCallback(() => {
    setSettings(prev => ({ ...prev, keyboardNavigation: false }));
  }, []);

  // Initialize
  useEffect(() => {
    loadSettings();
    detectScreenReader();
    
    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);
    
    // Detect system preferences
    if (window.matchMedia) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (prefersReducedMotion.matches) {
        updateSetting('reducedMotion', true);
      }
      
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
      if (prefersHighContrast.matches) {
        updateSetting('highContrast', true);
      }
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [loadSettings, detectScreenReader, handleKeyDown, handleMouseDown, updateSetting]);

  // Announce changes to screen readers
  useEffect(() => {
    if (settings.screenReader) {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = 'Accessibility settings updated';
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
  }, [settings]);

  return (
    <>
      {children}
      
      {/* Accessibility Panel */}
      {isVisible && (
        <div className="fixed top-4 right-4 bg-slate-800/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-cyan-500/20 z-50 max-w-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Accessibility Settings</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors text-xl"
              aria-label="Close accessibility panel"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-3">
            {/* High Contrast */}
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={(e) => updateSetting('highContrast', e.target.checked)}
                className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
              />
              <span className="text-white text-sm">High Contrast</span>
            </label>
            
            {/* Large Text */}
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.largeText}
                onChange={(e) => updateSetting('largeText', e.target.checked)}
                className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
              />
              <span className="text-white text-sm">Large Text</span>
            </label>
            
            {/* Reduced Motion */}
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
              />
              <span className="text-white text-sm">Reduced Motion</span>
            </label>
            
            {/* Focus Visible */}
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.focusVisible}
                onChange={(e) => updateSetting('focusVisible', e.target.checked)}
                className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
              />
              <span className="text-white text-sm">Enhanced Focus</span>
            </label>
          </div>
          
          {/* Status Indicators */}
          <div className="mt-4 pt-3 border-t border-gray-700">
            <div className="text-xs text-gray-400 space-y-1">
              {settings.screenReader && (
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Screen Reader Detected</span>
                </div>
              )}
              {settings.keyboardNavigation && (
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Keyboard Navigation Active</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Keyboard Shortcuts */}
          <div className="mt-3 pt-3 border-t border-gray-700">
            <p className="text-xs text-gray-400 mb-2">Keyboard Shortcuts:</p>
            <div className="text-xs text-gray-500 space-y-1">
              <div>Ctrl+Shift+A - Toggle this panel</div>
              <div>Tab - Navigate elements</div>
              <div>Enter/Space - Activate buttons</div>
            </div>
          </div>
        </div>
      )}
      
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-lg font-medium z-50"
      >
        Skip to main content
      </a>
    </>
  );
};

export default AdvancedAccessibilityManager;
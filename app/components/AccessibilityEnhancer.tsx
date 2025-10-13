import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  largeText: boolean;
  reducedMotion: boolean;
  highContrast: boolean;
  keyboardNavigation: boolean;
  screenReader: boolean;
  focusManagement: boolean;
}

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    largeText: false,
    reducedMotion: false,
    highContrast: false,
    keyboardNavigation: true,
    screenReader: false,
    focusManagement: true,
  });

  const [isVisible, setIsVisible] = useState(false);

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Large text mode
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

    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Keyboard navigation
    if (newSettings.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }

    // Screen reader optimizations
    if (newSettings.screenReader) {
      root.classList.add('screen-reader-optimized');
    } else {
      root.classList.remove('screen-reader-optimized');
    }

    // Focus management
    if (newSettings.focusManagement) {
      root.classList.add('focus-management');
    } else {
      root.classList.remove('focus-management');
    }
  };

  useEffect(() => {
    // Load saved settings
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings);
      setSettings(parsedSettings);
      applyAccessibilitySettings(parsedSettings);
    } else {
      applyAccessibilitySettings(settings);
    }

    // Keyboard shortcut to toggle accessibility panel (Ctrl+Shift+A)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const updateSetting = (key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };

  return (
    <>
      {children}
      
      {/* Accessibility Panel */}
      {isVisible && (
        <div className="fixed top-4 left-4 bg-black/90 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-cyan-400">Accessibility Settings</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white text-xs"
            >
              ✕
            </button>
          </div>
          
          <div className="space-y-3 text-xs">
            <label className="flex items-center justify-between">
              <span>Large Text</span>
              <input
                type="checkbox"
                checked={settings.largeText}
                onChange={(e) => updateSetting('largeText', e.target.checked)}
                className="w-4 h-4"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span>Reduced Motion</span>
              <input
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                className="w-4 h-4"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span>High Contrast</span>
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={(e) => updateSetting('highContrast', e.target.checked)}
                className="w-4 h-4"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span>Keyboard Navigation</span>
              <input
                type="checkbox"
                checked={settings.keyboardNavigation}
                onChange={(e) => updateSetting('keyboardNavigation', e.target.checked)}
                className="w-4 h-4"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span>Screen Reader Optimized</span>
              <input
                type="checkbox"
                checked={settings.screenReader}
                onChange={(e) => updateSetting('screenReader', e.target.checked)}
                className="w-4 h-4"
              />
            </label>
            
            <label className="flex items-center justify-between">
              <span>Focus Management</span>
              <input
                type="checkbox"
                checked={settings.focusManagement}
                onChange={(e) => updateSetting('focusManagement', e.target.checked)}
                className="w-4 h-4"
              />
            </label>
          </div>
          
          <div className="mt-4 pt-2 border-t border-gray-600 text-xs text-gray-400">
            Press Ctrl+Shift+A to toggle
          </div>
        </div>
      )}

      {/* Skip Link */}
      <a
        href="#main-content"
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-cyan-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      {/* Accessibility Styles */}
      <style jsx>{`
        .large-text {
          font-size: 1.2em;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .high-contrast {
          filter: contrast(150%) brightness(120%);
        }
        
        .keyboard-navigation *:focus {
          outline: 2px solid #06b6d4;
          outline-offset: 2px;
        }
        
        .screen-reader-optimized {
          /* Enhanced screen reader support */
        }
        
        .focus-management {
          /* Focus management styles */
        }
        
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #06b6d4;
          color: white;
          padding: 8px;
          text-decoration: none;
          z-index: 1000;
          border-radius: 4px;
        }
        
        .skip-link:focus {
          top: 6px;
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
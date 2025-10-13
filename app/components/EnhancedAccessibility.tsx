import React, { useEffect, useState } from 'react';
import SkipLink from './SkipLink';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  screenReader: boolean;
}

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: false,
    screenReader: false
  });

  useEffect(() => {
    // Detect user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    }));

    // Apply accessibility settings
    applyAccessibilitySettings({
      ...settings,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    });
  }, []);

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

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

    // Focus visible
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  };

  const toggleSetting = (setting: keyof AccessibilitySettings) => {
    const newSettings = {
      ...settings,
      [setting]: !settings[setting] origin/cursor/analyze-improve-and-deploy-application-1460
 origin/cursor/analyze-improve-and-deploy-application-1507
    };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
  };

'use client';
import React, { useEffect, useState } from 'react';
import { Eye, EyeOff, Volume2, VolumeX, Type, Contrast } from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  screenReader: boolean;
  keyboardNavigation: boolean;
}

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
} origin/cursor/analyze-improve-and-deploy-application-1247

  return (
    <>
      {children}
      {process.env['NODE_ENV'] === 'development' && (
        <div className="fixed bottom-4 left-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold">Accessibility Monitor</h3>
            <div className={`w-3 h-3 rounded-full ${
              accessibilityScore >= 90 ? 'bg-green-500' : 
              accessibilityScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
            }`} />
          </div>
          
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span>Accessibility Score:</span>
              <span className="font-mono">{accessibilityScore}/100</span>
            </div>
            
            <div className="flex justify-between">
              <span>Focusable Elements:</span>
              <span className="font-mono">{metrics.focusableElements}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Alt Text Coverage:</span>
              <span className="font-mono">{Math.round(metrics.altTexts)}%</span>
            </div>
            
            <div className="flex justify-between">
              <span>ARIA Labels:</span>
              <span className="font-mono">{metrics.ariaLabels}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Keyboard Nav:</span>
              <span className="font-mono">{metrics.keyboardNavigation ? '✓' : '✗'}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Screen Reader:</span>
              <span className="font-mono">{metrics.screenReaderCompatible ? '✓' : '✗'}</span>
            </div>
          </div>
        </div>
      )}
    </>
}
export default EnhancedAccessibility;
 origin/cursor/analyze-improve-and-deploy-application-1232
interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  screenReader: boolean;
keyboardNavigation: boolean;
}

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  updateSettings: (settings: Partial<AccessibilitySettings>) => void;
  announceToScreenReader: (message: string) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => { origin/cursor/analyze-improve-and-deploy-application-1232
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
screenReader: false,
    keyboardNavigation: true
  });

  const [showSettings, setShowSettings] = useState(false); origin/cursor/analyze-improve-and-deploy-application-1247

  // Load settings from localStorage
  useEffect(() => {
const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast origin/cursor/analyze-improve-and-deploy-application-1247
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Font size
    root.classList.remove('font-small', 'font-medium', 'font-large');
    root.classList.add(`font-${settings.fontSize}`);
// Screen reader
    if (settings.screenReader) {
      root.classList.add('screen-reader-mode');
    } else {
      root.classList.remove('screen-reader-mode');
    }
  }, [settings]);

  // Keyboard navigation origin/cursor/analyze-improve-and-deploy-application-1247
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.altKey) {
        event.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
}
      }

      // Toggle accessibility settings
      if (event.key === 'Escape' && event.altKey) {
        event.preventDefault();
        setShowSettings(!showSettings); origin/cursor/analyze-improve-and-deploy-application-1247
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
}, [enableKeyboardNavigation, showSettings]); origin/cursor/analyze-improve-and-deploy-application-1247

  // Announce page changes to screen readers
  useEffect(() => {
screenReader: false,
    keyboardNavigation: true
  });

  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  useEffect(() => {
    // Apply accessibility settings
    if (settings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    if (settings.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    document.documentElement.style.fontSize = settings.fontSize === 'small' ? '14px' : 
                                            settings.fontSize === 'large' ? '18px' : '16px';
  }, [settings]);

  return (
    <AccessibilityContext.Provider value={{ settings, updateSettings, announceToScreenReader }}>
      {children}
    </AccessibilityContext.Provider> origin/cursor/analyze-improve-and-deploy-application-1232
 origin/cursor/analyze-improve-and-deploy-application-1507
        }

if (!enableFocusManagement) return;

    const manageFocus = () => {
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      focusableElements.forEach((element) => {
        element.addEventListener('focus', () => {
          element.classList.add('focus-visible');
        });

        element.addEventListener('blur', () => {
          element.classList.remove('focus-visible');
        });
      });
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', manageFocus);
    } else {
      manageFocus();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', manageFocus);
    };
  }, [enableFocusManagement]);

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <>
      {children}
      
      {/* Accessibility Settings Panel */}
      {showSettings && (
        <div className="fixed top-4 right-4 bg-slate-800 border border-slate-700 rounded-lg p-4 z-50 shadow-lg">
          <h3 className="text-white font-semibold mb-4">Accessibility Settings</h3>
          
          <div className="space-y-3">
            <label className="flex items-center space-x-2 text-white">
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={(e) => updateSetting('highContrast', e.target.checked)}
                className="rounded"
              />
              <Contrast className="w-4 h-4" />
              <span>High Contrast</span>
            </label>

            <label className="flex items-center space-x-2 text-white">
              <input
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                className="rounded"
              />
              <span>Reduce Motion</span>
            </label>

            <label className="flex items-center space-x-2 text-white">
              <input
                type="checkbox"
                checked={settings.screenReader}
                onChange={(e) => updateSetting('screenReader', e.target.checked)}
                className="rounded"
              />
              {settings.screenReader ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>Screen Reader Mode</span>
            </label>

            <div className="flex items-center space-x-2 text-white">
              <Type className="w-4 h-4" />
              <span>Font Size:</span>
              <select
                value={settings.fontSize}
                onChange={(e) => updateSetting('fontSize', e.target.value)}
                className="bg-slate-700 text-white rounded px-2 py-1"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
          </div>

          <button
            onClick={() => setShowSettings(false)}
            className="mt-4 w-full bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded transition-colors"
          >
            Close
          </button>
        </div>
      )}

      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setShowSettings(!showSettings)}
        className="fixed bottom-4 right-4 bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-lg z-40 transition-colors"
        aria-label="Toggle accessibility settings"
      >
        <Eye className="w-5 h-5" />
      </button>
    </>
  );
};

export default EnhancedAccessibility; origin/cursor/analyze-improve-and-deploy-application-1247
 origin/cursor/analyze-improve-and-deploy-application-1507

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
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    screenReader: false,
    keyboardNavigation: true
  });

  const [showSettings, setShowSettings] = useState(false);

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
    
    // High contrast
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

  // Keyboard navigation
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

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
        setShowSettings(!showSettings);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation, showSettings]);

  // Focus management
  useEffect(() => {
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

export default EnhancedAccessibility;
import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilityMetrics {
  contrastRatio: number;
  focusableElements: number;
  headingStructure: number;
  altTexts: number;
  ariaLabels: number;
  keyboardNavigation: boolean;
  screenReaderCompatible: boolean;
'use client';
import React, { useEffect, useState } from 'react';

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
  enableHighContrast = false,
  enableFocusManagement = true
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: enableHighContrast,
    reducedMotion: false,
    fontSize: 'medium',
    screenReader: enableScreenReaderSupport,
    keyboardNavigation: enableKeyboardNavigation
  });

  useEffect(() => {
    // Apply accessibility settings
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
    const fontSizeMap = {
      small: '14px',
      medium: '16px',
      large: '18px'
    };
    root.style.fontSize = fontSizeMap[settings.fontSize];

    // Screen reader support
    if (settings.screenReader) {
      root.setAttribute('aria-live', 'polite');
    } else {
      root.removeAttribute('aria-live');
    }
  }, [settings]);

  useEffect(() => {
    // Keyboard navigation
    if (settings.keyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
          if (skipLink) {
            skipLink.focus();
            event.preventDefault();
          }
        }

        // Escape key handling
        if (event.key === 'Escape') {
          const activeElement = document.activeElement as HTMLElement;
          if (activeElement && activeElement.blur) {
            activeElement.blur();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [settings.keyboardNavigation]);

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="enhanced-accessibility">
      {/* Accessibility Controls */}
      <div className="accessibility-panel fixed top-4 right-4 z-50 bg-slate-800 p-4 rounded-lg shadow-lg border border-slate-700 min-w-64">
        <h3 className="text-white text-sm font-semibold mb-4">Accessibility Settings</h3>
        
        <div className="space-y-4">
          {/* High Contrast */}
          <div className="flex items-center justify-between">
            <label className="text-sm text-gray-300">High Contrast</label>
            <button
              onClick={() => updateSetting('highContrast', !settings.highContrast)}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.highContrast ? 'bg-cyan-500' : 'bg-gray-600'
              }`}
              aria-label="Toggle high contrast mode"
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                settings.highContrast ? 'translate-x-6' : 'translate-x-0.5'
              }`} />
            </button>
          </div>

          {/* Reduced Motion */}
          <div className="flex items-center justify-between">
            <label className="text-sm text-gray-300">Reduce Motion</label>
            <button
              onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.reducedMotion ? 'bg-cyan-500' : 'bg-gray-600'
              }`}
              aria-label="Toggle reduced motion"
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                settings.reducedMotion ? 'translate-x-6' : 'translate-x-0.5'
              }`} />
            </button>
          </div>

          {/* Font Size */}
          <div>
            <label className="text-sm text-gray-300 mb-2 block">Font Size</label>
            <div className="flex space-x-2">
              {(['small', 'medium', 'large'] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => updateSetting('fontSize', size)}
                  className={`px-3 py-1 text-xs rounded ${
                    settings.fontSize === size
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                  }`}
                >
                  {size.charAt(0).toUpperCase() + size.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Screen Reader */}
          <div className="flex items-center justify-between">
            <label className="text-sm text-gray-300">Screen Reader</label>
            <button
              onClick={() => updateSetting('screenReader', !settings.screenReader)}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.screenReader ? 'bg-cyan-500' : 'bg-gray-600'
              }`}
              aria-label="Toggle screen reader support"
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                settings.screenReader ? 'translate-x-6' : 'translate-x-0.5'
              }`} />
            </button>
          </div>

          {/* Keyboard Navigation */}
          <div className="flex items-center justify-between">
            <label className="text-sm text-gray-300">Keyboard Nav</label>
            <button
              onClick={() => updateSetting('keyboardNavigation', !settings.keyboardNavigation)}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.keyboardNavigation ? 'bg-cyan-500' : 'bg-gray-600'
              }`}
              aria-label="Toggle keyboard navigation"
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-0.5'
              }`} />
            </button>
          </div>
        </div>
      </div>

      {children}
    </div>
  );

import React from 'react';

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
'use client';
import React, { useEffect } from 'react';

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
  enableReducedMotion?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({
  children,
  enableReducedMotion = true,
  enableHighContrast = false,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    if (enableReducedMotion) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }

    if (enableHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    return () => {
      document.documentElement.classList.remove('reduce-motion', 'high-contrast');
    };
  }, [enableReducedMotion, enableHighContrast]);

  return <>{children}</>;
};

export default EnhancedAccessibility;

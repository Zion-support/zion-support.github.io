'use client';
import React, { useState, useEffect } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  focusVisible: boolean;
  zoomLevel: number;
  colorBlind: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
}

interface AccessibilityProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableReducedMotion?: boolean;
  enableColorBlindSupport?: boolean;
  enableZoomControl?: boolean;
}

const EnhancedAccessibility: React.FC<AccessibilityProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableReducedMotion = true,
  enableColorBlindSupport = true,
  enableZoomControl = true
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    focusVisible: true,
    zoomLevel: 100,
    colorBlind: 'none'
  });

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }

    // Detect screen reader
    const hasScreenReader = window.speechSynthesis !== undefined;
    setSettings(prev => ({ ...prev, screenReader: hasScreenReader }));

    // Apply initial settings
    applyAccessibilitySettings(settings);
  }, []);

  useEffect(() => {
    applyAccessibilitySettings(settings);
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
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

    // Zoom level
    root.style.zoom = `${newSettings.zoomLevel}%`;

    // Color blind support
    root.setAttribute('data-color-blind', newSettings.colorBlind);
  };

  const toggleHighContrast = () => {
    setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
  };

  const toggleLargeText = () => {
    setSettings(prev => ({ ...prev, largeText: !prev.largeText }));
  };

  const toggleReducedMotion = () => {
    setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }));
  };

  const setZoomLevel = (level: number) => {
    setSettings(prev => ({ ...prev, zoomLevel: Math.max(50, Math.min(200, level)) }));
  };

  const setColorBlind = (type: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia') => {
    setSettings(prev => ({ ...prev, colorBlind: type }));
  };

  // Keyboard navigation
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.altKey) {
        event.preventDefault();
        const main = document.querySelector('main');
        if (main) {
          main.focus();
        }
      }

      // Skip to navigation
      if (event.key === 'Tab' && event.altKey) {
        event.preventDefault();
        const nav = document.querySelector('nav');
        if (nav) {
          nav.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Focus management
  useEffect(() => {
    if (!enableFocusManagement) return;

    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target && target.classList.contains('focus-trap')) {
        target.style.outline = '2px solid #0066cc';
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target && target.classList.contains('focus-trap')) {
        target.style.outline = '';
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [enableFocusManagement]);

  return (
    <div className="accessibility-controls">
      <style jsx>{`
        .accessibility-controls {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
          background: white;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          max-width: 300px;
        }

        .accessibility-controls h3 {
          margin: 0 0 16px 0;
          font-size: 16px;
          font-weight: bold;
        }

        .control-group {
          margin-bottom: 12px;
        }

        .control-group label {
          display: flex;
          align-items: center;
          font-size: 14px;
          cursor: pointer;
        }

        .control-group input[type="checkbox"] {
          margin-right: 8px;
        }

        .control-group select {
          margin-left: 8px;
          padding: 4px 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .control-group input[type="range"] {
          width: 100%;
          margin-top: 4px;
        }

        .zoom-display {
          font-size: 12px;
          color: #666;
          margin-top: 4px;
        }

        .high-contrast {
          filter: contrast(150%) brightness(120%);
        }

        .large-text {
          font-size: 1.2em;
        }

        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        .focus-visible *:focus {
          outline: 2px solid #0066cc !important;
          outline-offset: 2px !important;
        }

        [data-color-blind="protanopia"] {
          filter: hue-rotate(90deg);
        }

        [data-color-blind="deuteranopia"] {
          filter: hue-rotate(120deg);
        }

        [data-color-blind="tritanopia"] {
          filter: hue-rotate(180deg);
        }
      `}</style>

      <h3>Accessibility Controls</h3>
      
      <div className="control-group">
        <label>
          <input
            type="checkbox"
            checked={settings.highContrast}
            onChange={toggleHighContrast}
          />
          High Contrast
        </label>
      </div>

      <div className="control-group">
        <label>
          <input
            type="checkbox"
            checked={settings.largeText}
            onChange={toggleLargeText}
          />
          Large Text
        </label>
      </div>

      <div className="control-group">
        <label>
          <input
            type="checkbox"
            checked={settings.reducedMotion}
            onChange={toggleReducedMotion}
          />
          Reduced Motion
        </label>
      </div>

      <div className="control-group">
        <label>
          Zoom Level: {settings.zoomLevel}%
          <input
            type="range"
            min="50"
            max="200"
            value={settings.zoomLevel}
            onChange={(e) => setZoomLevel(Number(e.target.value))}
          />
        </label>
      </div>

      <div className="control-group">
        <label>
          Color Blind Support:
          <select
            value={settings.colorBlind}
            onChange={(e) => setColorBlind(e.target.value as any)}
          >
            <option value="none">None</option>
            <option value="protanopia">Protanopia</option>
            <option value="deuteranopia">Deuteranopia</option>
            <option value="tritanopia">Tritanopia</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default EnhancedAccessibility;
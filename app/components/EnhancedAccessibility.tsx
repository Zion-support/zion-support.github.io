'use client';

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
      [setting]: !settings[setting]
    };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
  };

  return (
    <>
      <SkipLink />
      <div className="accessibility-container">
        {/* Accessibility Toolbar */}
        <div className="accessibility-toolbar" role="toolbar" aria-label="Accessibility options">
          <button
            onClick={() => toggleSetting('highContrast')}
            className={`accessibility-btn ${settings.highContrast ? 'active' : ''}`}
            aria-pressed={settings.highContrast}
            title="Toggle high contrast mode"
          >
            <span aria-hidden="true">🔆</span>
            <span className="sr-only">High Contrast</span>
          </button>
          
          <button
            onClick={() => toggleSetting('largeText')}
            className={`accessibility-btn ${settings.largeText ? 'active' : ''}`}
            aria-pressed={settings.largeText}
            title="Toggle large text mode"
          >
            <span aria-hidden="true">🔍</span>
            <span className="sr-only">Large Text</span>
          </button>
          
          <button
            onClick={() => toggleSetting('reducedMotion')}
            className={`accessibility-btn ${settings.reducedMotion ? 'active' : ''}`}
            aria-pressed={settings.reducedMotion}
            title="Toggle reduced motion"
          >
            <span aria-hidden="true">⏸️</span>
            <span className="sr-only">Reduced Motion</span>
          </button>
        </div>

        {/* Main Content */}
        <div className={`accessibility-content ${settings.highContrast ? 'high-contrast' : ''} ${settings.largeText ? 'large-text' : ''}`}>
          {children}
        </div>
      </div>

      <style jsx>{`
        .accessibility-toolbar {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
          display: flex;
          gap: 8px;
          background: rgba(0, 0, 0, 0.8);
          padding: 8px;
          border-radius: 8px;
          backdrop-filter: blur(10px);
        }

        .accessibility-btn {
          background: transparent;
          border: 2px solid #fff;
          color: #fff;
          padding: 8px;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 16px;
        }

        .accessibility-btn:hover,
        .accessibility-btn:focus {
          background: #fff;
          color: #000;
        }

        .accessibility-btn.active {
          background: #8b5cf6;
          border-color: #8b5cf6;
        }

        .accessibility-btn:focus {
          outline: 2px solid #8b5cf6;
          outline-offset: 2px;
        }

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

        .high-contrast {
          --text-primary: #ffffff;
          --text-secondary: #e5e7eb;
          --bg-primary: #000000;
          --bg-secondary: #1f2937;
          --accent: #ffff00;
        }

        .large-text {
          font-size: 1.2em;
        }

        .large-text h1 { font-size: 3em; }
        .large-text h2 { font-size: 2.5em; }
        .large-text h3 { font-size: 2em; }
        .large-text p { font-size: 1.3em; }

        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        .focus-visible *:focus {
          outline: 3px solid #8b5cf6;
          outline-offset: 2px;
        }
      `}</style>
    </>
  );
};

export default EnhancedAccessibility;

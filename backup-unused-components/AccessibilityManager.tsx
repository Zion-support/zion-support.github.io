import React from 'react';
import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  screenReader: boolean;
}

const AccessibilityManager: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
//     highContrast: false,
//     largeText: false,
//     reducedMotion: false,
//     focusVisible: true,
//     screenReader: false
  });

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Detect screen reader usage
    const detectScreenReader = () => {
      const isScreenReader =
//         window.speechSynthesis ||
        window.navigator.userAgent.includes('NVDA') ||
        window.navigator.userAgent.includes('JAWS') ||
        window.navigator.userAgent.includes('VoiceOver');

      setSettings(prev => ({ ...prev, screenReader: !!isScreenReader }));
    };

    detectScreenReader();

    // Listen for system preferences
    if (window.matchMedia) {
      const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
      const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

      const handleHighContrastChange = (e: MediaQueryListEvent) => {
        setSettings(prev => ({ ...prev, highContrast: e.matches }));
      };

      const handleReducedMotionChange = (e: MediaQueryListEvent) => {
        setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
      };

      highContrastQuery.addEventListener('change', handleHighContrastChange);
      reducedMotionQuery.addEventListener('change', handleReducedMotionChange);

      return () => {
        highContrastQuery.removeEventListener('change', handleHighContrastChange);
        reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
      };
    }
  }, []);

  useEffect(() => {
    // Apply accessibility settings
    const root = document.documentElement;

    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Focus visible
    if (settings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Screen reader
    if (settings.screenReader) {
      root.classList.add('screen-reader');
    } else {
      root.classList.remove('screen-reader');
    }

    // Save settings
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

interface AccessibilityManagerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AccessibilityManager({ className = '', children }: AccessibilityManagerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
  </div>
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
    </div>
    <div className="accessibility-manager">
<span>High Contrast</span>
//         <button
          className={settings.highContrast ? 'active' : ''}
          onClick={() => toggleSetting('highContrast')}
          aria-pressed={settings.highContrast}
//         >
          {settings.highContrast ? 'ON' : 'OFF'}
</button>
</div>

      <div className="accessibility-toggle">
<span>Reduced Motion</span>
//         <button
          className={settings.reducedMotion ? 'active' : ''}
          onClick={() => toggleSetting('reducedMotion')}
          aria-pressed={settings.reducedMotion}
//         >
          {settings.reducedMotion ? 'ON' : 'OFF'}
</button>
</div>

      <div className="accessibility-toggle">
<span>Focus Indicators</span>
//         <button
          className={settings.focusVisible ? 'active' : ''}
          onClick={() => toggleSetting('focusVisible')}
          aria-pressed={settings.focusVisible}
//         >
          {settings.focusVisible ? 'ON' : 'OFF'}
</button>
</div>
</div>
  );

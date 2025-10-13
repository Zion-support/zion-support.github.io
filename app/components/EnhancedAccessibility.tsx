'use client';
import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: number;
  reducedMotion: boolean;
  screenReader: boolean;
}

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 16,
    reducedMotion: false,
    screenReader: false
  });

  useEffect(() => {
    // Load saved accessibility settings
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
    const detectScreenReader = () => {
      const hasScreenReader = 
        window.speechSynthesis ||
        window.navigator.userAgent.includes('NVDA') ||
        window.navigator.userAgent.includes('JAWS') ||
        window.navigator.userAgent.includes('VoiceOver');
      
      setSettings(prev => ({ ...prev, screenReader: !!hasScreenReader }));
    };

    detectScreenReader();

    // Listen for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setSettings(prev => ({ ...prev, reducedMotion: mediaQuery.matches }));

    const handleChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
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

    // Font size
    root.style.fontSize = `${settings.fontSize}px`;

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Screen reader optimizations
    if (settings.screenReader) {
      root.classList.add('screen-reader-optimized');
    } else {
      root.classList.remove('screen-reader-optimized');
    }

    // Save settings
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const updateSetting = (key: keyof AccessibilitySettings, value: boolean | number) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="accessibility-wrapper">
      {/* Accessibility Controls */}
      <div className="accessibility-controls fixed bottom-4 right-4 z-50">
        <div className="bg-slate-800 rounded-lg p-4 shadow-lg border border-white/20">
          <h3 className="text-white text-sm font-semibold mb-3">Accessibility</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-gray-300 text-sm">
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={(e) => updateSetting('highContrast', e.target.checked)}
                className="rounded"
              />
              <span>High Contrast</span>
            </label>
            <label className="flex items-center space-x-2 text-gray-300 text-sm">
              <input
                type="range"
                min="12"
                max="24"
                value={settings.fontSize}
                onChange={(e) => updateSetting('fontSize', parseInt(e.target.value))}
                className="w-full"
              />
              <span>Font Size: {settings.fontSize}px</span>
            </label>
            <label className="flex items-center space-x-2 text-gray-300 text-sm">
              <input
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                className="rounded"
              />
              <span>Reduce Motion</span>
            </label>
          </div>
        </div>
      </div>

      {/* Main Content */}
      {children}
    </div>
  );
};

export default EnhancedAccessibility;
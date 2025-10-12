'use client';
import React, { useEffect, useState } from 'react';
import { useAnalytics } from './EnhancedAnalytics';

interface AccessibilitySettings {
  fontSize: 'small' | 'medium' | 'large';
  highContrast: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
}

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 'medium',
    highContrast: false,
    reducedMotion: false,
    screenReader: false,
  });

  const { trackEvent } = useAnalytics();

  useEffect(() => {
    // Apply accessibility settings
    const applySettings = () => {
      const root = document.documentElement;
      
      // Font size
      root.style.setProperty('--font-size', settings.fontSize === 'small' ? '14px' : settings.fontSize === 'large' ? '18px' : '16px');
      
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
    };

    applySettings();
  }, [settings]);

  useEffect(() => {
    // Detect screen reader
    const detectScreenReader = () => {
      const isScreenReader = window.speechSynthesis && window.speechSynthesis.getVoices().length > 0;
      setSettings(prev => ({ ...prev, screenReader: isScreenReader }));
    };

    detectScreenReader();
    trackEvent('accessibility_settings', 'user_preference', 'screen_reader_detected');
  }, [trackEvent]);

  return <>{children}</>;
};

export default EnhancedAccessibility;
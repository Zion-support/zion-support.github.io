'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { logger } from '../utils/logger';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  screenReader: boolean;
}

export const AccessibilityEnhancer: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: false,
    screenReader: false,
  });

  const [isVisible, setIsVisible] = useState(false);

  // Check for screen reader
  const detectScreenReader = useCallback(() => {
    if (typeof window === 'undefined') return false;
    
    const screenReaderIndicators = [
      'speechSynthesis' in window,
      'speechSynthesis' in window && window.speechSynthesis.getVoices().length > 0,
      navigator.userAgent.includes('NVDA'),
      navigator.userAgent.includes('JAWS'),
      navigator.userAgent.includes('VoiceOver'),
      navigator.userAgent.includes('TalkBack'),
    ];

    return screenReaderIndicators.some(indicator => indicator);
  }, []);

  // Apply accessibility settings
  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--neon-cyan', '#00ffff');
      root.style.setProperty('--neon-pink', '#ff00ff');
      root.style.setProperty('--cyber-dark', '#000000');
      root.style.setProperty('--cyber-darker', '#000000');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text mode
    if (newSettings.largeText) {
      root.classList.add('large-text');
      root.style.fontSize = '1.2em';
    } else {
      root.classList.remove('large-text');
      root.style.fontSize = '';
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
      root.style.setProperty('--animation-speed', '0.01s');
    } else {
      root.classList.remove('reduced-motion');
      root.style.setProperty('--animation-speed', '0.3s');
    }

    // Focus visible
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    
    logger.info('Accessibility settings applied', newSettings);
  }, []);

  // Initialize accessibility settings
  useEffect(() => {
    // Load saved settings
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applyAccessibilitySettings(parsed);
      } catch (error) {
        logger.error('Failed to parse accessibility settings', error);
      }
    }

    // Detect screen reader
    const hasScreenReader = detectScreenReader();
    setSettings(prev => ({ ...prev, screenReader: hasScreenReader }));

    // Check for system preferences
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      
      setSettings(prev => ({
        ...prev,
        reducedMotion: prefersReducedMotion,
        highContrast: prefersHighContrast,
      }));
    }

    // Show accessibility panel after a delay
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, [detectScreenReader, applyAccessibilitySettings]);

  // Handle setting changes
  const handleSettingChange = useCallback((key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
  }, [settings, applyAccessibilitySettings]);

  // Announce changes to screen readers
  const announceChange = useCallback((message: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(message);
      utterance.volume = 0.5;
      speechSynthesis.speak(utterance);
    }
  }, []);

  // Skip to main content functionality
  const handleSkipToMain = useCallback(() => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
      announceChange('Skipped to main content');
    }
  }, [announceChange]);

  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Alt + A to toggle accessibility panel
      if (event.altKey && event.key === 'a') {
        event.preventDefault();
        setIsVisible(prev => !prev);
        announceChange(settings.screenReader ? 'Accessibility panel toggled' : '');
      }

      // Alt + S to skip to main content
      if (event.altKey && event.key === 's') {
        event.preventDefault();
        handleSkipToMain();
      }

      // Escape to close accessibility panel
      if (event.key === 'Escape') {
        setIsVisible(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleSkipToMain, announceChange, settings.screenReader]);

  if (!isVisible) return null;

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-white"
        onClick={handleSkipToMain}
      >
        Skip to main content
      </a>

      {/* Accessibility Panel */}
      <div className="fixed top-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
        <h3 className="text-lg font-bold mb-4">Accessibility Settings</h3>
        
        <div className="space-y-3">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={settings.highContrast}
              onChange={(e) => {
                handleSettingChange('highContrast', e.target.checked);
                announceChange(e.target.checked ? 'High contrast enabled' : 'High contrast disabled');
              }}
              className="rounded"
            />
            <span>High Contrast</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={settings.largeText}
              onChange={(e) => {
                handleSettingChange('largeText', e.target.checked);
                announceChange(e.target.checked ? 'Large text enabled' : 'Large text disabled');
              }}
              className="rounded"
            />
            <span>Large Text</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={settings.reducedMotion}
              onChange={(e) => {
                handleSettingChange('reducedMotion', e.target.checked);
                announceChange(e.target.checked ? 'Reduced motion enabled' : 'Reduced motion disabled');
              }}
              className="rounded"
            />
            <span>Reduce Motion</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={settings.focusVisible}
              onChange={(e) => {
                handleSettingChange('focusVisible', e.target.checked);
                announceChange(e.target.checked ? 'Focus indicators enabled' : 'Focus indicators disabled');
              }}
              className="rounded"
            />
            <span>Focus Indicators</span>
          </label>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-700">
          <p className="text-sm text-gray-300">
            Keyboard shortcuts: Alt+A (toggle panel), Alt+S (skip to main), Esc (close)
          </p>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
          aria-label="Close accessibility panel"
        >
          ×
        </button>
      </div>

      {/* Screen reader announcements */}
      <div
        id="sr-announcements"
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      />
    </>
  );
};

export default AccessibilityEnhancer;
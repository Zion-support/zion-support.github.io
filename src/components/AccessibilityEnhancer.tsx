import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
}

interface AccessibilityEnhancerProps {
  onSettingsChange?: (settings: AccessibilitySettings) => void;
  enableKeyboardShortcuts?: boolean;
  enableVoiceCommands?: boolean;
}

export default function AccessibilityEnhancer({
  onSettingsChange,
  enableKeyboardShortcuts = true,
  enableVoiceCommands = false
}: AccessibilityEnhancerProps): null {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: true,
    screenReader: false,
    keyboardNavigation: true
  });

  // Apply accessibility settings to the document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
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

    // Screen reader optimizations
    if (newSettings.screenReader) {
      root.classList.add('screen-reader-optimized');
    } else {
      root.classList.remove('screen-reader-optimized');
    }

    // Keyboard navigation
    if (newSettings.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        setSettings(parsedSettings);
        applySettings(parsedSettings);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Update settings when they change
  useEffect(() => {
    applySettings(settings);
    onSettingsChange?.(settings);
  }, [settings, applySettings, onSettingsChange]);

  // Keyboard shortcuts
  useEffect(() => {
    if (!enableKeyboardShortcuts) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Alt + 1: Toggle high contrast
      if (event.altKey && event.key === '1') {
        event.preventDefault();
        setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
      }
      
      // Alt + 2: Toggle large text
      if (event.altKey && event.key === '2') {
        event.preventDefault();
        setSettings(prev => ({ ...prev, largeText: !prev.largeText }));
      }
      
      // Alt + 3: Toggle reduced motion
      if (event.altKey && event.key === '3') {
        event.preventDefault();
        setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }));
      }
      
      // Alt + 4: Toggle focus visible
      if (event.altKey && event.key === '4') {
        event.preventDefault();
        setSettings(prev => ({ ...prev, focusVisible: !prev.focusVisible }));
      }
      
      // Alt + 5: Toggle screen reader mode
      if (event.altKey && event.key === '5') {
        event.preventDefault();
        setSettings(prev => ({ ...prev, screenReader: !prev.screenReader }));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardShortcuts]);

  // Voice commands (experimental)
  useEffect(() => {
    if (!enableVoiceCommands || typeof window === 'undefined') return;

    const recognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    if (!recognition) return;

    const speechRecognition = new recognition();
    speechRecognition.continuous = true;
    speechRecognition.interimResults = false;
    speechRecognition.lang = 'en-US';

    speechRecognition.onresult = (event: any) => {
      const command = event.results[event.results.length - 1][0].transcript.toLowerCase();
      
      if (command.includes('high contrast')) {
        setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
      } else if (command.includes('large text')) {
        setSettings(prev => ({ ...prev, largeText: !prev.largeText }));
      } else if (command.includes('reduced motion')) {
        setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }));
      } else if (command.includes('focus visible')) {
        setSettings(prev => ({ ...prev, focusVisible: !prev.focusVisible }));
      } else if (command.includes('screen reader')) {
        setSettings(prev => ({ ...prev, screenReader: !prev.screenReader }));
      }
    };

    speechRecognition.start();
    return () => speechRecognition.stop();
  }, [enableVoiceCommands]);

  // Add ARIA live region for announcements
  useEffect(() => {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'accessibility-announcements';
    document.body.appendChild(liveRegion);

    return () => {
      const existingRegion = document.getElementById('accessibility-announcements');
      if (existingRegion) {
        existingRegion.remove();
      }
    };
  }, []);

  // Announce setting changes
  useEffect(() => {
    const liveRegion = document.getElementById('accessibility-announcements');
    if (liveRegion) {
      const changes = [];
      if (settings.highContrast) changes.push('High contrast enabled');
      if (settings.largeText) changes.push('Large text enabled');
      if (settings.reducedMotion) changes.push('Reduced motion enabled');
      if (settings.focusVisible) changes.push('Focus visible enabled');
      if (settings.screenReader) changes.push('Screen reader mode enabled');
      
      if (changes.length > 0) {
        liveRegion.textContent = changes.join(', ');
      }
    }
  }, [settings]);

  return null;
}

// Hook for using accessibility settings in components
export function useAccessibility() {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: true,
    screenReader: false,
    keyboardNavigation: true
  });

  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        setSettings(parsedSettings);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, []);

  const updateSettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    setSettings(prev => {
      const updated = { ...prev, ...newSettings };
      localStorage.setItem('accessibility-settings', JSON.stringify(updated));
      return updated;
    });
  }, []);

  return { settings, updateSettings };
}

// Utility function to check if user prefers reduced motion
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Utility function to check if user prefers high contrast
export function prefersHighContrast(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-contrast: high)').matches;
}

// Utility function to check if user prefers dark mode
export function prefersDarkMode(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}
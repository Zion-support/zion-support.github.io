'use client';

import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  largeText: boolean;
  focusVisible: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
}

interface EnhancedAccessibilityManagerProps {
  children: React.ReactNode;
  enableAutoDetection?: boolean;
  enableKeyboardShortcuts?: boolean;
}

export const EnhancedAccessibilityManager: React.FC<EnhancedAccessibilityManagerProps> = ({
  children,
  enableAutoDetection = true,
  enableKeyboardShortcuts = true,
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    largeText: false,
    focusVisible: true,
    screenReader: false,
    keyboardNavigation: true,
  });

  const [isActive, setIsActive] = useState(false);

  // Auto-detect accessibility preferences
  const detectAccessibilityPreferences = useCallback(() => {
    if (typeof window === 'undefined' || !enableAutoDetection) return;

    try {
      // Detect reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Detect high contrast preference
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      
      // Detect screen reader usage
      const hasScreenReader = 'speechSynthesis' in window && 'speechSynthesis' in window;
      
      // Detect keyboard navigation
      const hasKeyboardNavigation = document.querySelector('[tabindex]') !== null;

      setSettings(prev => ({
        ...prev,
        reducedMotion: prefersReducedMotion,
        highContrast: prefersHighContrast,
        screenReader: hasScreenReader,
        keyboardNavigation: hasKeyboardNavigation,
      }));

      setIsActive(true);
    } catch (error) {
      console.warn('Accessibility detection error:', error);
    }
  }, [enableAutoDetection]);

  // Apply accessibility settings
  const applyAccessibilitySettings = useCallback(() => {
    if (typeof document === 'undefined') return;

    try {
      const root = document.documentElement;
      
      // Apply high contrast
      if (settings.highContrast) {
        root.classList.add('high-contrast');
      } else {
        root.classList.remove('high-contrast');
      }

      // Apply reduced motion
      if (settings.reducedMotion) {
        root.classList.add('reduced-motion');
      } else {
        root.classList.remove('reduced-motion');
      }

      // Apply large text
      if (settings.largeText) {
        root.classList.add('large-text');
      } else {
        root.classList.remove('large-text');
      }

      // Apply focus visible
      if (settings.focusVisible) {
        root.classList.add('focus-visible');
      } else {
        root.classList.remove('focus-visible');
      }

      // Apply keyboard navigation
      if (settings.keyboardNavigation) {
        root.classList.add('keyboard-navigation');
      } else {
        root.classList.remove('keyboard-navigation');
      }

    } catch (error) {
      console.warn('Accessibility settings application error:', error);
    }
  }, [settings]);

  // Keyboard shortcuts
  const handleKeyboardShortcuts = useCallback((event: KeyboardEvent) => {
    if (!enableKeyboardShortcuts) return;

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

    // Alt + 0: Reset all settings
    if (event.altKey && event.key === '0') {
      event.preventDefault();
      setSettings({
        highContrast: false,
        reducedMotion: false,
        largeText: false,
        focusVisible: true,
        screenReader: false,
        keyboardNavigation: true,
      });
    }
  }, [enableKeyboardShortcuts]);

  // Initialize accessibility features
  useEffect(() => {
    detectAccessibilityPreferences();
  }, [detectAccessibilityPreferences]);

  // Apply settings when they change
  useEffect(() => {
    applyAccessibilitySettings();
  }, [applyAccessibilitySettings]);

  // Add keyboard event listeners
  useEffect(() => {
    if (enableKeyboardShortcuts) {
      document.addEventListener('keydown', handleKeyboardShortcuts);
      return () => {
        document.removeEventListener('keydown', handleKeyboardShortcuts);
      };
    }
  }, [handleKeyboardShortcuts, enableKeyboardShortcuts]);

  // Announce changes to screen readers
  useEffect(() => {
    if (settings.screenReader && typeof window !== 'undefined') {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = 'Accessibility settings updated';
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
  }, [settings, settings.screenReader]);

  return (
    <div className="accessibility-manager">
      {children}
      
      {/* Accessibility controls panel */}
      {isActive && (
        <div className="accessibility-controls" style={{ 
          position: 'fixed', 
          top: '10px', 
          right: '10px', 
          zIndex: 9999,
          background: 'rgba(0,0,0,0.8)',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          fontSize: '12px',
          display: 'none' // Hidden by default, can be shown with Alt + A
        }}>
          <div>Accessibility Controls:</div>
          <div>Alt + 1: High Contrast</div>
          <div>Alt + 2: Large Text</div>
          <div>Alt + 3: Reduced Motion</div>
          <div>Alt + 0: Reset</div>
          <div>Alt + A: Show/Hide Controls</div>
        </div>
      )}
    </div>
  );
};

export default EnhancedAccessibilityManager;
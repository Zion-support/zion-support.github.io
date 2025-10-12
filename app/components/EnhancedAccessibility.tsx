'use client';
import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  focusVisible: boolean;
  screenReader: boolean;
}

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    focusVisible: true,
    screenReader: false
  });

  const [announcements, setAnnouncements] = useState<string[]>([]);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    }));

    // Detect screen reader
    const screenReaderDetected = 
      'speechSynthesis' in window && 
      window.speechSynthesis.getVoices().length > 0;
    
    setSettings(prev => ({
      ...prev,
      screenReader: screenReaderDetected
    }));

    // Apply initial settings
    applyAccessibilitySettings({
      ...settings,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast,
      screenReader: screenReaderDetected
    });

    // Listen for preference changes
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
    };

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, highContrast: e.matches }));
    };

    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  useEffect(() => {
    applyAccessibilitySettings(settings);
  }, [settings]);

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Font size
    root.classList.remove('font-small', 'font-medium', 'font-large');
    root.classList.add(`font-${newSettings.fontSize}`);

    // Focus visible
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  };

  const announceToScreenReader = (message: string) => {
    if (settings.screenReader) {
      setAnnouncements(prev => [...prev, message]);
      
      // Clear announcement after 5 seconds
      setTimeout(() => {
        setAnnouncements(prev => prev.slice(1));
      }, 5000);
    }
  };

  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  // Add keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content (Alt + M)
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          announceToScreenReader('Skipped to main content');
        }
      }

      // Toggle high contrast (Alt + H)
      if (e.altKey && e.key === 'h') {
        e.preventDefault();
        updateSettings({ highContrast: !settings.highContrast });
        announceToScreenReader(
          `High contrast ${settings.highContrast ? 'disabled' : 'enabled'}`
        );
      }

      // Toggle reduced motion (Alt + R)
      if (e.altKey && e.key === 'r') {
        e.preventDefault();
        updateSettings({ reducedMotion: !settings.reducedMotion });
        announceToScreenReader(
          `Reduced motion ${settings.reducedMotion ? 'disabled' : 'enabled'}`
        );
      }

      // Increase font size (Alt + Plus)
      if (e.altKey && e.key === '+') {
        e.preventDefault();
        const sizes = ['small', 'medium', 'large'] as const;
        const currentIndex = sizes.indexOf(settings.fontSize);
        if (currentIndex < sizes.length - 1) {
          updateSettings({ fontSize: sizes[currentIndex + 1] });
          announceToScreenReader(`Font size increased to ${sizes[currentIndex + 1]}`);
        }
      }

      // Decrease font size (Alt + Minus)
      if (e.altKey && e.key === '-') {
        e.preventDefault();
        const sizes = ['small', 'medium', 'large'] as const;
        const currentIndex = sizes.indexOf(settings.fontSize);
        if (currentIndex > 0) {
          updateSettings({ fontSize: sizes[currentIndex - 1] });
          announceToScreenReader(`Font size decreased to ${sizes[currentIndex - 1]}`);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings]);

  return (
    <div className="accessibility-wrapper">
      {/* Screen reader announcements */}
      <div
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      >
        {announcements.map((announcement, index) => (
          <div key={index}>{announcement}</div>
        ))}
      </div>

      {/* Accessibility controls (only in development) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 right-4 bg-white bg-opacity-90 p-4 rounded-lg shadow-lg z-50 text-sm">
          <h3 className="font-bold mb-2">Accessibility Controls</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={(e) => updateSettings({ highContrast: e.target.checked })}
                className="mr-2"
              />
              High Contrast
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={(e) => updateSettings({ reducedMotion: e.target.checked })}
                className="mr-2"
              />
              Reduced Motion
            </label>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Font Size:</label>
              <select
                value={settings.fontSize}
                onChange={(e) => updateSettings({ fontSize: e.target.value as any })}
                className="text-xs border rounded px-1"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-600">
            <p>Keyboard shortcuts:</p>
            <p>Alt+M: Skip to main content</p>
            <p>Alt+H: Toggle high contrast</p>
            <p>Alt+R: Toggle reduced motion</p>
            <p>Alt+Plus: Increase font size</p>
            <p>Alt+Minus: Decrease font size</p>
          </div>
        </div>
      )}

      {children}
    </div>
  );
};

export default EnhancedAccessibility;
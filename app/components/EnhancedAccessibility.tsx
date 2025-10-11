'use client';
import React, { useEffect, useState } from 'react';
import { useAnalytics } from './EnhancedAnalytics';

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
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    screenReader: false,
    keyboardNavigation: false
  });

  const analytics = useAnalytics();

  useEffect(() => {
    // Detect user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    }));
  }, []);

  useEffect(() => {
    // Apply accessibility settings
    if (settings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    if (settings.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    // Apply font size
    document.documentElement.style.fontSize = settings.fontSize === 'small' ? '14px' : 
                                            settings.fontSize === 'large' ? '18px' : '16px';
  }, [settings]);

  useEffect(() => {
    // Keyboard navigation
    if (enableKeyboardNavigation) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      };

      const handleMouseDown = () => {
        document.body.classList.remove('keyboard-navigation');
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
      };
    }
  }, [enableKeyboardNavigation]);

  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
    
    // Track accessibility usage
    if (analytics) {
      analytics.track('accessibility_settings_updated', newSettings);
    }
  };

  return (
    <div className="accessibility-enhanced">
      {children}
      
      {/* Accessibility Controls */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => updateSettings({ highContrast: !settings.highContrast })}
          className="bg-cyan-500 text-white p-2 rounded-lg mb-2 hover:bg-cyan-600 transition-colors"
          aria-label="Toggle high contrast"
        >
          {settings.highContrast ? '🌙' : '☀️'}
        </button>
        
        <button
          onClick={() => updateSettings({ fontSize: settings.fontSize === 'small' ? 'medium' : settings.fontSize === 'medium' ? 'large' : 'small' })}
          className="bg-cyan-500 text-white p-2 rounded-lg mb-2 hover:bg-cyan-600 transition-colors"
          aria-label="Change font size"
        >
          A
        </button>
      </div>
    </div>
  );
};

export default EnhancedAccessibility;
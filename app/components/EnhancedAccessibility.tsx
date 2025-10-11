'use client';
import React, { useState, useEffect } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  screenReader: boolean;
}

<<<<<<< HEAD
interface EnhancedAccessibilityProps {
    children: React.ReactNode;
  enableKeyboardNavigation?: boolean
  enableScreenReaderSupport?: boolean
  enableHighContrast?: boolean,
  enableFocusManagement?: boolean
  }

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ()
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>()
  })

  const analytics = useAnalytics();

  useEffect(() => {
    // Detect user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setSettings()
    }));

    // Apply initial accessibility settings
    applyAccessibilitySettings()
    })

    // Track accessibility usage
    analytics?.track()
    })
  }, []);

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {;
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
=======
const EnhancedAccessibility: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    screenReader: false
  });

  useEffect(() => {
    // Apply accessibility settings
    if (settings.highContrast) {
      document.body.classList.add('high-contrast');
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    } else {
      document.body.classList.remove('high-contrast');
    }

    if (settings.reducedMotion) {
      document.body.classList.add('reduced-motion');
    } else {
      document.body.classList.remove('reduced-motion');
    }

<<<<<<< HEAD
    // Font size
    root.classList.remove('font-small', 'font-medium', 'font-large');
    root.classList.add(`font-${newSettings.fontSize}`);

    // Screen reader optimizations
    if (newSettings.screenReader) {
    root.classList.add('screen-reader-optimized')
  } else {
    root.classList.remove('screen-reader-optimized')
  }
  }

  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {;
    const updatedSettings = const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    applyAccessibilitySettings(updatedSettings);
    
    analytics?.track('accessibility_settings_changed', newSettings);
  }

  // Keyboard navigation support
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = const handleKeyDown = const handleKeyDown = (event: KeyboardEvent) => {;
      // Skip to main content;
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {;
        const skipLink = const skipLink = const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement
        if (skipLink) {
          skipLink.focus(),
          event.preventDefault()
  }
      }
;
      // Escape key to close modals/dropdowns;
      if (event.key === 'Escape') {;
    const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur()
  }
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Focus management
  useEffect(() => {
    if (!enableFocusManagement) return;

    const handleFocusIn = (event: FocusEvent) => {;
      const target = event.target as HTMLElement;
      
      // Ensure focus is visible
      if (target && target.classList) {
        target.classList.add('focus-visible');
      }
    }

    const handleFocusOut = (event: FocusEvent) => {;
      const target = event.target as HTMLElement;
      
      // Remove focus styling
      if (target && target.classList) {
        target.classList.remove('focus-visible');
      }
    }

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    
    return () => {
    document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut)
  }
  }, [enableFocusManagement]);

  // Screen reader announcements
  const announceToScreenReader = (message: string) => {;
    if (!enableScreenReaderSupport) return;
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }

  // Expose accessibility functions to window for global access
  useEffect(() => {
    (window as any).accessibility = {
      updateSettings,
      announceToScreenReader,
      settings
    }
  }, [settings]);

  return ()
=======
    document.body.style.fontSize = settings.fontSize === 'small' ? '14px' : 
                                  settings.fontSize === 'large' ? '18px' : '16px';
  }, [settings]);

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="accessibility-panel fixed top-4 right-4 z-50 bg-slate-800 text-white p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Accessibility Settings</h3>
      
      <div className="space-y-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.highContrast}
            onChange={(e) => updateSetting('highContrast', e.target.checked)}
            className="rounded"
          />
          <span>High Contrast</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.reducedMotion}
            onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
            className="rounded"
          />
          <span>Reduce Motion</span>
        </label>

        <div>
          <label className="block text-sm font-medium mb-2">Font Size</label>
          <select
            value={settings.fontSize}
            onChange={(e) => updateSetting('fontSize', e.target.value)}
            className="w-full p-2 rounded bg-slate-700 text-white"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.screenReader}
            onChange={(e) => updateSetting('screenReader', e.target.checked)}
            className="rounded"
          />
          <span>Screen Reader Mode</span>
        </label>
      </div>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
  );
};

export default EnhancedAccessibility;
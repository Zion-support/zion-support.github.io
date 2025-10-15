import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilitySettings {
  enableKeyboard: boolean;
  enableScreenReader: boolean;
  enableHighContrast: boolean;
  enableFocusManagement: boolean;
  enableLargeText: boolean;
  enableReducedMotion: boolean;
}

interface AccessibilityEnhancerProps {
  isHighContrast?: boolean;
  isReducedMotion?: boolean;
  isLargeText?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  isHighContrast = false,
  isReducedMotion = false,
  isLargeText = false
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    enableKeyboard: true,
    enableScreenReader: true,
    enableHighContrast: isHighContrast,
    enableFocusManagement: true,
    enableLargeText: isLargeText,
    enableReducedMotion: isReducedMotion
  });

  const [isVisible, setIsVisible] = useState(false);

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast mode
    if (settings.enableHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text mode
    if (settings.enableLargeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Reduced motion
    if (settings.enableReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Focus management
    if (settings.enableFocusManagement) {
      root.classList.add('focus-management');
    } else {
      root.classList.remove('focus-management');
    }
  }, [settings]);

  // Keyboard navigation
  useEffect(() => {
    if (!settings.enableKeyboard) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
        e.preventDefault();
        const mainContent = document.querySelector('main, [role="main"]');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }

      // Escape key to close modals
      if (e.key === 'Escape') {
        const modal = document.querySelector('[role="dialog"]');
        if (modal) {
          (modal as HTMLElement).blur();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.enableKeyboard]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!settings.enableScreenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, [settings.enableScreenReader]);

  // Focus management
  useEffect(() => {
    if (!settings.enableFocusManagement) return;

    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target) {
        target.classList.add('focus-visible');
      }
    };

    const handleFocusOut = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target) {
        target.classList.remove('focus-visible');
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [settings.enableFocusManagement]);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const resetSettings = () => {
    setSettings({
      enableKeyboard: true,
      enableScreenReader: true,
      enableHighContrast: false,
      enableFocusManagement: true,
      enableLargeText: false,
      enableReducedMotion: false
    });
  };

  return (
    <>
      {/* Accessibility Controls */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-slate-800 text-white p-3 rounded-full shadow-lg hover:bg-slate-700 transition-colors"
          aria-label="Toggle accessibility settings"
          title="Accessibility Settings"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
          </svg>
        </button>

        {isVisible && (
          <div className="absolute bottom-16 right-0 bg-slate-800 text-white p-4 rounded-lg shadow-xl min-w-64">
            <h3 className="text-lg font-semibold mb-4">Accessibility Settings</h3>
            
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings.enableKeyboard}
                  onChange={() => toggleSetting('enableKeyboard')}
                  className="rounded"
                />
                <span>Keyboard Navigation</span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings.enableScreenReader}
                  onChange={() => toggleSetting('enableScreenReader')}
                  className="rounded"
                />
                <span>Screen Reader Support</span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings.enableHighContrast}
                  onChange={() => toggleSetting('enableHighContrast')}
                  className="rounded"
                />
                <span>High Contrast</span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings.enableFocusManagement}
                  onChange={() => toggleSetting('enableFocusManagement')}
                  className="rounded"
                />
                <span>Focus Management</span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings.enableLargeText}
                  onChange={() => toggleSetting('enableLargeText')}
                  className="rounded"
                />
                <span>Large Text</span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings.enableReducedMotion}
                  onChange={() => toggleSetting('enableReducedMotion')}
                  className="rounded"
                />
                <span>Reduced Motion</span>
              </label>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-600">
              <button
                onClick={resetSettings}
                className="text-sm text-cyan-400 hover:text-cyan-300"
              >
                Reset to Defaults
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Screen Reader Only Content */}
      <div className="sr-only">
        <h1>Zion Tech Group - Advanced AI & IT Solutions</h1>
        <p>Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services.</p>
      </div>
    </>
  );
};

export default AccessibilityEnhancer;
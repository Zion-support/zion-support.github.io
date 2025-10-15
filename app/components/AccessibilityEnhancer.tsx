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
  fontSize?: number;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  isHighContrast = false,
  isReducedMotion = false,
  fontSize = 16
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    enableKeyboard: true,
    enableScreenReader: true,
    enableHighContrast: isHighContrast,
    enableFocusManagement: true,
    enableLargeText: false,
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

    // Reduced motion
    if (settings.enableReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Large text
    if (settings.enableLargeText) {
      root.style.fontSize = '18px';
    } else {
      root.style.fontSize = '16px';
    }

    // Focus management
    if (settings.enableFocusManagement) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

  }, [settings]);

  // Keyboard navigation
  useEffect(() => {
    if (!settings.enableKeyboard) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey) {
        const skipLink = document.querySelector('.skip-link');
        if (skipLink) {
          (skipLink as HTMLElement).focus();
        }
      }

      // Escape key to close modals
      if (e.key === 'Escape') {
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach(modal => {
          if (modal.getAttribute('aria-hidden') === 'false') {
            (modal as HTMLElement).click();
          }
        });
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
      
      // Ensure focus is visible
      if (target && target.classList) {
        target.classList.add('focus-visible');
      }
    };

    const handleFocusOut = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      
      if (target && target.classList) {
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

  // Show accessibility panel in development
  useEffect(() => {
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('debug-accessibility') === 'true';
    setIsVisible(shouldShow);
  }, []);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg text-xs z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">Accessibility</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.enableHighContrast}
            onChange={() => toggleSetting('enableHighContrast')}
            className="rounded"
          />
          <span>High Contrast</span>
        </label>
        
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.enableReducedMotion}
            onChange={() => toggleSetting('enableReducedMotion')}
            className="rounded"
          />
          <span>Reduced Motion</span>
        </label>
        
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.enableLargeText}
            onChange={() => toggleSetting('enableLargeText')}
            className="rounded"
          />
          <span>Large Text</span>
        </label>
        
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.enableKeyboard}
            onChange={() => toggleSetting('enableKeyboard')}
            className="rounded"
          />
          <span>Keyboard Nav</span>
        </label>
      </div>
      
      <div className="mt-2 pt-2 border-t border-slate-600 text-xs text-gray-400">
        Press F12 for more details
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;
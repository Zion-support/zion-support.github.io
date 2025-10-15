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
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableFocusManagement?: boolean;
  enableLargeText?: boolean;
  enableReducedMotion?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  isHighContrast = false,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableFocusManagement = true,
  enableLargeText = false,
  enableReducedMotion = false
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    enableKeyboard: enableKeyboardNavigation,
    enableScreenReader: enableScreenReader,
    enableHighContrast: isHighContrast,
    enableFocusManagement: enableFocusManagement,
    enableLargeText: enableLargeText,
    enableReducedMotion: enableReducedMotion
  });

  const [isVisible, setIsVisible] = useState(false);

  const updateSettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  }, []);

  useEffect(() => {
    // Apply high contrast mode
    if (settings.enableHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    // Apply large text mode
    if (settings.enableLargeText) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }

    // Apply reduced motion
    if (settings.enableReducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    // Apply focus management
    if (settings.enableFocusManagement) {
      document.documentElement.classList.add('focus-management');
    } else {
      document.documentElement.classList.remove('focus-management');
    }
  }, [settings]);

  useEffect(() => {
    // Keyboard navigation
    if (settings.enableKeyboard) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.altKey) {
          event.preventDefault();
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
          }
        }

        // Escape key handling
        if (event.key === 'Escape') {
          const activeElement = document.activeElement as HTMLElement;
          if (activeElement && activeElement.blur) {
            activeElement.blur();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [settings.enableKeyboard]);

  useEffect(() => {
    // Screen reader announcements
    if (settings.enableScreenReader) {
      const announceToScreenReader = (message: string) => {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
          document.body.removeChild(announcement);
        }, 1000);
      };

      // Announce page changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            const addedNode = mutation.addedNodes[0] as Element;
            if (addedNode && addedNode.getAttribute && addedNode.getAttribute('aria-label')) {
              announceToScreenReader(addedNode.getAttribute('aria-label')!);
            }
          }
        });
      });

      observer.observe(document.body, { childList: true, subtree: true });
      return () => observer.disconnect();
    }
  }, [settings.enableScreenReader]);

  const toggleSetting = (setting: keyof AccessibilitySettings) => {
    updateSettings({ [setting]: !settings[setting] });
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Open accessibility settings"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-80 max-h-96 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Accessibility Settings</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Close accessibility settings"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="space-y-3">
        <label className="flex items-center justify-between">
          <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
          <input
            type="checkbox"
            checked={settings.enableHighContrast}
            onChange={() => toggleSetting('enableHighContrast')}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
        </label>

        <label className="flex items-center justify-between">
          <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>
          <input
            type="checkbox"
            checked={settings.enableLargeText}
            onChange={() => toggleSetting('enableLargeText')}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
        </label>

        <label className="flex items-center justify-between">
          <span className="text-sm text-gray-700 dark:text-gray-300">Reduced Motion</span>
          <input
            type="checkbox"
            checked={settings.enableReducedMotion}
            onChange={() => toggleSetting('enableReducedMotion')}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
        </label>

        <label className="flex items-center justify-between">
          <span className="text-sm text-gray-700 dark:text-gray-300">Focus Management</span>
          <input
            type="checkbox"
            checked={settings.enableFocusManagement}
            onChange={() => toggleSetting('enableFocusManagement')}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
        </label>

        <label className="flex items-center justify-between">
          <span className="text-sm text-gray-700 dark:text-gray-300">Keyboard Navigation</span>
          <input
            type="checkbox"
            checked={settings.enableKeyboard}
            onChange={() => toggleSetting('enableKeyboard')}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
        </label>

        <label className="flex items-center justify-between">
          <span className="text-sm text-gray-700 dark:text-gray-300">Screen Reader</span>
          <input
            type="checkbox"
            checked={settings.enableScreenReader}
            onChange={() => toggleSetting('enableScreenReader')}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
        </label>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-600">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Press Alt+Shift+Tab to skip to main content
        </p>
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;
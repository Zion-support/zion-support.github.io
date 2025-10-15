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
  enableKeyboard?: boolean;
  enableScreenReader?: boolean;
  enableFocusManagement?: boolean;
  enableLargeText?: boolean;
  enableReducedMotion?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  isHighContrast = false,
  enableKeyboard = true,
  enableScreenReader = true,
  enableFocusManagement = true,
  enableLargeText = false,
  enableReducedMotion = false,
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    enableKeyboard,
    enableScreenReader,
    enableHighContrast: isHighContrast,
    enableFocusManagement,
    enableLargeText,
    enableReducedMotion,
  });

  const [isVisible, setIsVisible] = useState(false);

  const applyAccessibilitySettings = useCallback(() => {
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
  }, [settings]);

  useEffect(() => {
    applyAccessibilitySettings();
  }, [applyAccessibilitySettings]);

  useEffect(() => {
    // Keyboard navigation enhancements
    if (settings.enableKeyboard) {
      const handleKeyDown = (e: KeyboardEvent) => {
        // Skip to main content
        if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
            e.preventDefault();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [settings.enableKeyboard]);

  useEffect(() => {
    // Focus management
    if (settings.enableFocusManagement) {
      const handleFocusIn = (e: FocusEvent) => {
        const target = e.target as HTMLElement;
        if (target) {
          target.setAttribute('data-focused', 'true');
        }
      };

      const handleFocusOut = (e: FocusEvent) => {
        const target = e.target as HTMLElement;
        if (target) {
          target.removeAttribute('data-focused');
        }
      };

      document.addEventListener('focusin', handleFocusIn);
      document.addEventListener('focusout', handleFocusOut);
      
      return () => {
        document.removeEventListener('focusin', handleFocusIn);
        document.removeEventListener('focusout', handleFocusOut);
      };
    }
  }, [settings.enableFocusManagement]);

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
            const addedNode = mutation.addedNodes[0] as HTMLElement;
            if (addedNode && addedNode.tagName === 'H1') {
              announceToScreenReader(`Page loaded: ${addedNode.textContent}`);
            }
          }
        });
      });

      observer.observe(document.body, { childList: true, subtree: true });
      
      return () => observer.disconnect();
    }
  }, [settings.enableScreenReader]);

  const toggleSetting = (setting: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        aria-label="Open accessibility settings"
      >
        ♿
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Accessibility Settings</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Close accessibility settings"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-3">
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
            checked={settings.enableLargeText}
            onChange={() => toggleSetting('enableLargeText')}
            className="rounded"
          />
          <span>Large Text</span>
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
            checked={settings.enableKeyboard}
            onChange={() => toggleSetting('enableKeyboard')}
            className="rounded"
          />
          <span>Keyboard Navigation</span>
        </label>
        
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.enableScreenReader}
            onChange={() => toggleSetting('enableScreenReader')}
            className="rounded"
          />
          <span>Screen Reader Support</span>
        </label>
        
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.enableFocusManagement}
            onChange={() => toggleSetting('enableFocusManagement')}
            className="rounded"
          />
          <span>Focus Management</span>
        </label>
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;

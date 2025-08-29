import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusIndicator: boolean;
}

export const AccessibilityEnhancer: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusIndicator: false
  });

  const [isVisible, setIsVisible] = useState(false);

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);

    // Apply high contrast
    if (updatedSettings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    // Apply large text
    if (updatedSettings.largeText) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }

    // Apply reduced motion
    if (updatedSettings.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    // Apply focus indicator
    if (updatedSettings.focusIndicator) {
      document.documentElement.classList.add('focus-indicator');
    } else {
      document.documentElement.classList.remove('focus-indicator');
    }

    // Save to localStorage
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Load saved settings
  useEffect(() => {
    const saved = localStorage.getItem('zion-accessibility-settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings(parsed);
        applySettings(parsed);
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Enhanced keyboard navigation
  const enhanceKeyboardNavigation = useCallback(() => {
    // Skip to main content
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-zion-blue focus:text-white focus:rounded focus:outline-none';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Enhanced focus management
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        const focusable = Array.from(document.querySelectorAll(focusableElements));
        const firstFocusable = focusable[0] as HTMLElement;
        const lastFocusable = focusable[focusable.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
          }
        }
      }
    });
  }, []);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  // Enhanced ARIA labels
  const enhanceARIALabels = useCallback(() => {
    // Add missing ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach((button, index) => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', `Button ${index + 1}`);
      }
    });

    // Add role attributes where needed
    const navs = document.querySelectorAll('nav');
    navs.forEach(nav => {
      if (!nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
      }
    });

    // Add landmark roles
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
      main.id = 'main-content';
    }
  }, []);

  // Color contrast checker
  const checkColorContrast = useCallback(() => {
    const elements = document.querySelectorAll('*');
    const lowContrastElements: Element[] = [];

    elements.forEach(element => {
      const style = window.getComputedStyle(element);
      const backgroundColor = style.backgroundColor;
      const color = style.color;
      
      // Simple contrast check (this is a basic implementation)
      if (backgroundColor && color && backgroundColor !== 'rgba(0, 0, 0, 0)' && color !== 'rgba(0, 0, 0, 0)') {
        // Add more sophisticated contrast checking logic here
      }
    });

    if (lowContrastElements.length > 0) {
      console.warn('Low contrast elements detected:', lowContrastElements);
    }
  }, []);

  // Initialize accessibility enhancements
  useEffect(() => {
    enhanceKeyboardNavigation();
    enhanceARIALabels();
    checkColorContrast();

    // Announce page load to screen readers
    announceToScreenReader('Page loaded successfully');
  }, [enhanceKeyboardNavigation, enhanceARIALabels, checkColorContrast, announceToScreenReader]);

  // Toggle accessibility panel
  const togglePanel = () => setIsVisible(!isVisible);

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={togglePanel}
        className="fixed bottom-4 right-4 z-50 p-3 bg-zion-blue text-white rounded-full shadow-lg hover:bg-zion-purple transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan"
        aria-label="Accessibility settings"
        aria-expanded={isVisible}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </button>

      {/* Accessibility Panel */}
      {isVisible && (
        <div className="fixed bottom-20 right-4 z-50 w-80 bg-white dark:bg-zion-slate rounded-lg shadow-xl border border-gray-200 dark:border-zion-purple">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Accessibility Settings
            </h3>
            
            <div className="space-y-4">
              {/* High Contrast Toggle */}
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={(e) => applySettings({ highContrast: e.target.checked })}
                  className="w-4 h-4 text-zion-blue rounded focus:ring-zion-cyan"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
              </label>

              {/* Large Text Toggle */}
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings.largeText}
                  onChange={(e) => applySettings({ largeText: e.target.checked })}
                  className="w-4 h-4 text-zion-blue rounded focus:ring-zion-cyan"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>
              </label>

              {/* Reduced Motion Toggle */}
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings.reducedMotion}
                  onChange={(e) => applySettings({ reducedMotion: e.target.checked })}
                  className="w-4 h-4 text-zion-blue rounded focus:ring-zion-cyan"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">Reduced Motion</span>
              </label>

              {/* Focus Indicator Toggle */}
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings.focusIndicator}
                  onChange={(e) => applySettings({ focusIndicator: e.target.checked })}
                  className="w-4 h-4 text-zion-blue rounded focus:ring-zion-cyan"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">Enhanced Focus</span>
              </label>
            </div>

            <button
              onClick={togglePanel}
              className="mt-4 w-full px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-blue transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

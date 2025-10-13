import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  keyboardNavigation: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true,
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: true,
    keyboardNavigation: true,
  });

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applyAccessibilitySettings(parsed);
      } catch (e) {
        console.warn('Failed to parse accessibility settings');
      }
    }

    // Skip to main content functionality
    const addSkipLink = () => {
      const existingSkipLink = document.getElementById('skip-to-main');
      if (existingSkipLink) return;

      const skipLink = document.createElement('a');
      skipLink.id = 'skip-to-main';
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg z-50';
      skipLink.style.cssText = `
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      `;
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Keyboard navigation enhancements
    const enhanceKeyboardNavigation = () => {
      if (!enableKeyboardNavigation) return () => {};

      const handleKeyDown = (e: KeyboardEvent) => {
        // Escape key to close modals/dropdowns
        if (e.key === 'Escape') {
          const activeElement = document.activeElement as HTMLElement;
          if (activeElement?.closest('[role="dialog"]')) {
            const closeButton = activeElement.closest('[role="dialog"]')?.querySelector('[aria-label="Close"]') as HTMLElement;
            closeButton?.click();
          } else if (activeElement && activeElement.blur) {
            activeElement.blur();
          }
        }

        // Tab navigation improvements
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }

        // Arrow key navigation for menus
        if (['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
          const menu = document.activeElement?.closest('[role="menu"]');
          if (menu) {
            e.preventDefault();
            const items = Array.from(menu.querySelectorAll('[role="menuitem"]')) as HTMLElement[];
            const currentIndex = items.indexOf(document.activeElement as HTMLElement);
            
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
              const nextIndex = (currentIndex + 1) % items.length;
              items[nextIndex]?.focus();
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
              const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
              items[prevIndex]?.focus();
            }
          }
        }
      };

      // Remove keyboard navigation class on mouse use
      const handleMouseDown = () => {
        document.body.classList.remove('keyboard-navigation');
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
      };
    };

    // Focus management
    const enhanceFocusManagement = () => {
      if (!enableFocusManagement) return () => {};

      const trapFocus = (element: HTMLElement) => {
        const focusableElements = element.querySelectorAll(
          'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
        );
        const firstFocusableElement = focusableElements[0] as HTMLElement;
        const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
                e.preventDefault();
              }
            }
          }
        };

        element.addEventListener('keydown', handleTabKey);
        firstFocusableElement?.focus();

        return () => {
          element.removeEventListener('keydown', handleTabKey);
        };
      };

      // Apply focus trap to modals and dropdowns
      const modals = document.querySelectorAll('[role="dialog"], [role="menu"]');
      const cleanupFunctions = Array.from(modals).map(modal => trapFocus(modal as HTMLElement));

      return () => {
        cleanupFunctions.forEach(cleanup => cleanup());
      };
    };

    // Screen reader enhancements
    const enhanceScreenReader = () => {
      if (!enableScreenReader) return () => {};

      // Add live region for announcements
      const addLiveRegion = () => {
        const existingLiveRegion = document.getElementById('live-region');
        if (existingLiveRegion) return;

        const liveRegion = document.createElement('div');
        liveRegion.id = 'live-region';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        document.body.appendChild(liveRegion);
      };

      // Announce page changes
      const announcePageChange = (pageTitle: string) => {
        const liveRegion = document.getElementById('live-region');
        if (liveRegion) {
          liveRegion.textContent = `Navigated to ${pageTitle}`;
        }
      };

      // Listen for route changes (if using React Router)
      const handleRouteChange = () => {
        const pageTitle = document.title;
        announcePageChange(pageTitle);
      };

      // Monitor for dynamic content changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            const addedNode = mutation.addedNodes[0] as Element;
            if (addedNode && addedNode.getAttribute && addedNode.getAttribute('aria-live')) {
              const liveRegion = document.getElementById('live-region');
              if (liveRegion) {
                liveRegion.textContent = addedNode.textContent || '';
              }
            }
          }
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      addLiveRegion();

      return () => {
        observer.disconnect();
      };
    };

    // Initialize all enhancements
    addSkipLink();
    const cleanupKeyboard = enhanceKeyboardNavigation();
    const cleanupFocus = enhanceFocusManagement();
    const cleanupScreenReader = enhanceScreenReader();

    return () => {
      cleanupKeyboard();
      cleanupFocus();
      cleanupScreenReader();
    };
  }, [enableKeyboardNavigation, enableScreenReader, enableHighContrast, enableFocusManagement]);

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
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

    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };

  const updateSetting = (key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      focusVisible: true,
      keyboardNavigation: true,
    };
    setSettings(defaultSettings);
    applyAccessibilitySettings(defaultSettings);
  };

  return (
    <div className="accessibility-enhancer">
      {children}
      
      {/* Accessibility Settings Panel */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          className="bg-cyan-500 text-white p-3 rounded-full shadow-lg hover:bg-cyan-600 transition-colors"
          onClick={() => {
            const panel = document.getElementById('accessibility-panel');
            if (panel) {
              panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
            }
          }}
          aria-label="Open accessibility settings"
        >
          ♿
        </button>
        
        <div
          id="accessibility-panel"
          className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border min-w-64"
          style={{ display: 'none' }}
        >
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
            Accessibility Settings
          </h3>
          
          <div className="space-y-3">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={(e) => updateSetting('highContrast', e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
            </label>
            
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={settings.largeText}
                onChange={(e) => updateSetting('largeText', e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>
            </label>
            
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Reduce Motion</span>
            </label>
            
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={settings.focusVisible}
                onChange={(e) => updateSetting('focusVisible', e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Focus Indicators</span>
            </label>
          </div>
          
          <button
            onClick={resetSettings}
            className="mt-3 w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Reset to Defaults
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;
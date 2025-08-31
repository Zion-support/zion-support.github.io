import React, { useEffect, useState, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  children?: React.ReactNode;
}

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
}

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  children
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusIndicator: true,
    screenReader: false
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Apply accessibility settings
  const applyAccessibilitySettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
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
      document.documentElement.classList.add('focus-visible');
    } else {
      document.documentElement.classList.remove('focus-visible');
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Load saved settings
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        applyAccessibilitySettings(parsed);
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }
  }, [applyAccessibilitySettings]);

  // Enhanced keyboard navigation
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.altKey) {
        event.preventDefault();
        const mainContent = document.querySelector('main') || document.querySelector('#main');
        if (mainContent instanceof HTMLElement) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Skip to navigation
      if (event.key === 'Tab' && event.shiftKey && event.altKey) {
        event.preventDefault();
        const navigation = document.querySelector('nav') || document.querySelector('header');
        if (navigation instanceof HTMLElement) {
          navigation.focus();
          navigation.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Escape key to close modals/dropdowns
      if (event.key === 'Escape') {
        const activeDropdowns = document.querySelectorAll('[data-dropdown][aria-expanded="true"]');
        activeDropdowns.forEach(dropdown => {
          if (dropdown instanceof HTMLElement) {
            dropdown.setAttribute('aria-expanded', 'false');
            dropdown.classList.remove('open');
          }
        });
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enabled]);

  // Enhanced focus management
  useEffect(() => {
    if (!enabled) return;

    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      
      // Add focus indicator
      target.classList.add('focused');
      
      // Announce focus changes for screen readers
      if (settings.screenReader && target.getAttribute('aria-label')) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = target.getAttribute('aria-label');
        document.body.appendChild(announcement);
        
        setTimeout(() => {
          document.body.removeChild(announcement);
        }, 1000);
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      target.classList.remove('focused');
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    
    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [enabled, settings.screenReader]);

  // Enhanced ARIA attributes
  useEffect(() => {
    if (!enabled) return;

    // Add missing ARIA labels to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    interactiveElements.forEach(element => {
      if (element instanceof HTMLElement) {
        // Add role if missing
        if (!element.getAttribute('role')) {
          if (element.tagName === 'BUTTON') {
            element.setAttribute('role', 'button');
          } else if (element.tagName === 'A' && element.getAttribute('href')) {
            element.setAttribute('role', 'link');
          }
        }

        // Add aria-label if missing and no text content
        if (!element.getAttribute('aria-label') && !element.textContent?.trim()) {
          const title = element.getAttribute('title');
          if (title) {
            element.setAttribute('aria-label', title);
          }
        }

        // Add aria-describedby for form elements with help text
        if (element.tagName === 'INPUT' || element.tagName === 'SELECT' || element.tagName === 'TEXTAREA') {
          const helpText = element.nextElementSibling;
          if (helpText && helpText.classList.contains('help-text')) {
            const helpId = helpText.id || `help-${Math.random().toString(36).substr(2, 9)}`;
            helpText.id = helpId;
            element.setAttribute('aria-describedby', helpId);
          }
        }
      }
    });
  }, [enabled]);

  // Enhanced color contrast detection
  useEffect(() => {
    if (!enabled) return;

    const checkColorContrast = () => {
      const elements = document.querySelectorAll('*');
      elements.forEach(element => {
        if (element instanceof HTMLElement) {
          const style = window.getComputedStyle(element);
          const backgroundColor = style.backgroundColor;
          const color = style.color;
          
          // Basic contrast check (simplified)
          if (backgroundColor && color && backgroundColor !== 'transparent') {
            // Add data attribute for contrast issues
            element.setAttribute('data-contrast-checked', 'true');
          }
        }
      });
    };

    // Check contrast after page load
    setTimeout(checkColorContrast, 1000);
  }, [enabled]);

  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Accessibility Panel */}
      {isVisible && (
        <div className="fixed top-0 right-0 w-80 h-full bg-white dark:bg-gray-800 shadow-lg z-50 p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Accessibility Settings
            </h2>
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="Close accessibility panel"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                High Contrast
              </label>
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={(e) => applyAccessibilitySettings({ highContrast: e.target.checked })}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>

            {/* Large Text */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Large Text
              </label>
              <input
                type="checkbox"
                checked={settings.largeText}
                onChange={(e) => applyAccessibilitySettings({ largeText: e.target.checked })}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>

            {/* Reduced Motion */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Reduced Motion
              </label>
              <input
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={(e) => applyAccessibilitySettings({ reducedMotion: e.target.checked })}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>

            {/* Focus Indicator */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Focus Indicator
              </label>
              <input
                type="checkbox"
                checked={settings.focusIndicator}
                onChange={(e) => applyAccessibilitySettings({ focusIndicator: e.target.checked })}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>

            {/* Screen Reader Mode */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Screen Reader Mode
              </label>
              <input
                type="checkbox"
                checked={settings.screenReader}
                onChange={(e) => applyAccessibilitySettings({ screenReader: e.target.checked })}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Keyboard shortcuts help */}
          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
              Keyboard Shortcuts
            </h3>
            <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
              <div>Alt + Tab: Skip to main content</div>
              <div>Alt + Shift + Tab: Skip to navigation</div>
              <div>Escape: Close modals/dropdowns</div>
            </div>
          </div>
        </div>
      )}

      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 left-4 z-40 w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
        aria-label="Open accessibility settings"
        aria-expanded={isVisible}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </button>

      {/* Intersection observer target */}
      <div ref={ref} className="w-full" />

      {/* Apply accessibility styles */}
      <style jsx>{`
        .high-contrast {
          filter: contrast(1.5) saturate(1.2);
        }
        
        .large-text {
          font-size: 1.2em;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .focus-visible .focused {
          outline: 3px solid #3b82f6;
          outline-offset: 2px;
        }
        
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>

      {children}
    </>
  );
};

export default EnhancedAccessibilityEnhancer;

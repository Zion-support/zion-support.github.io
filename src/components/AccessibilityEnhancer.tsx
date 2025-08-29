import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
}

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusIndicator: true,
    screenReader: false
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [announcement, setAnnouncement] = useState<string>('');

  // Initialize accessibility features
  useEffect(() => {
    // Check user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    }));

    // Apply initial settings
    applyAccessibilitySettings({
      ...settings,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    });
  }, []);

  // Apply accessibility settings to the document
  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--bg-color', '#000000');
      root.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
      root.style.removeProperty('--accent-color');
    }

    // Large text mode
    if (newSettings.largeText) {
      root.style.fontSize = '18px';
      root.classList.add('large-text');
    } else {
      root.style.fontSize = '16px';
      root.classList.remove('large-text');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Screen reader announcements
    if (newSettings.screenReader) {
      announceToScreenReader('Accessibility settings updated');
    }
  }, []);

  // Update settings and apply them
  const updateSettings = useCallback((key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
    
    // Announce changes to screen readers
    if (newSettings.screenReader) {
      announceToScreenReader(`${key} ${value ? 'enabled' : 'disabled'}`);
    }
  }, [settings, applyAccessibilitySettings]);

  // Screen reader announcement
  const announceToScreenReader = useCallback((message: string) => {
    setAnnouncement(message);
    
    // Create live region for screen readers
    let liveRegion = document.getElementById('accessibility-live-region');
    if (!liveRegion) {
      liveRegion = document.createElement('div');
      liveRegion.id = 'accessibility-live-region';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      document.body.appendChild(liveRegion);
    }
    
    liveRegion.textContent = message;
    
    // Clear announcement after a delay
    setTimeout(() => {
      setAnnouncement('');
    }, 3000);
  }, []);

  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip if user is typing in an input field
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (event.key) {
        case 'Tab':
          // Enhanced focus management
          enhanceFocusManagement();
          break;
        case 'Escape':
          // Close modals and menus
          closeAllModals();
          break;
        case 'h':
          if (event.ctrlKey || event.metaKey) {
            // Ctrl/Cmd + H to toggle high contrast
            event.preventDefault();
            updateSettings('highContrast', !settings.highContrast);
          }
          break;
        case 'l':
          if (event.ctrlKey || event.metaKey) {
            // Ctrl/Cmd + L to toggle large text
            event.preventDefault();
            updateSettings('largeText', !settings.largeText);
          }
          break;
        case 'm':
          if (event.ctrlKey || event.metaKey) {
            // Ctrl/Cmd + M to toggle reduced motion
            event.preventDefault();
            updateSettings('reducedMotion', !settings.reducedMotion);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings, updateSettings]);

  // Enhanced focus management
  const enhanceFocusManagement = useCallback(() => {
    // Add focus indicators to all focusable elements
    const focusableElements = document.querySelectorAll(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach(element => {
      element.addEventListener('focus', () => {
        element.classList.add('focused');
        element.setAttribute('aria-describedby', 'focus-description');
      });

      element.addEventListener('blur', () => {
        element.classList.remove('focused');
        element.removeAttribute('aria-describedby');
      });
    });
  }, []);

  // Close all modals and menus
  const closeAllModals = useCallback(() => {
    const modals = document.querySelectorAll('[role="dialog"], [role="menu"]');
    modals.forEach(modal => {
      if (modal instanceof HTMLElement) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
      }
    });
    setIsMenuOpen(false);
  }, []);

  // Skip to main content link
  const skipToMainContent = useCallback(() => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
      announceToScreenReader('Moved to main content');
    }
  }, [announceToScreenReader]);

  // Toggle accessibility menu
  const toggleAccessibilityMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      announceToScreenReader('Accessibility menu opened');
    }
  }, [isMenuOpen, announceToScreenReader]);

  return (
    <>
      {children}
      
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
        onClick={skipToMainContent}
      >
        Skip to main content
      </a>

      {/* Accessibility menu button */}
      <button
        aria-label="Accessibility settings"
        aria-expanded={isMenuOpen}
        aria-controls="accessibility-menu"
        onClick={toggleAccessibilityMenu}
        className="fixed top-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      </button>

      {/* Accessibility menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            id="accessibility-menu"
            role="dialog"
            aria-labelledby="accessibility-menu-title"
            className="fixed top-20 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-6 z-50 min-w-[300px]"
          >
            <h2 id="accessibility-menu-title" className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Accessibility Settings
            </h2>
            
            <div className="space-y-4">
              {/* High Contrast */}
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={(e) => updateSettings('highContrast', e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-900 dark:text-white">High Contrast</span>
              </label>

              {/* Large Text */}
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings.largeText}
                  onChange={(e) => updateSettings('largeText', e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-900 dark:text-white">Large Text</span>
              </label>

              {/* Reduced Motion */}
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings.reducedMotion}
                  onChange={(e) => updateSettings('reducedMotion', e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-900 dark:text-white">Reduced Motion</span>
              </label>

              {/* Focus Indicator */}
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings.focusIndicator}
                  onChange={(e) => updateSettings('focusIndicator', e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-900 dark:text-white">Enhanced Focus</span>
              </label>

              {/* Screen Reader */}
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings.screenReader}
                  onChange={(e) => updateSettings('screenReader', e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-900 dark:text-white">Screen Reader</span>
              </label>
            </div>

            {/* Keyboard shortcuts help */}
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Keyboard Shortcuts</h3>
              <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                <div>Ctrl/Cmd + H: Toggle High Contrast</div>
                <div>Ctrl/Cmd + L: Toggle Large Text</div>
                <div>Ctrl/Cmd + M: Toggle Reduced Motion</div>
                <div>Tab: Navigate elements</div>
                <div>Escape: Close menus</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen reader announcements */}
      {announcement && (
        <div
          id="accessibility-live-region"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          {announcement}
        </div>
      )}

      {/* Focus description */}
      <div id="focus-description" className="sr-only">
        This element is currently focused
      </div>

      {/* High contrast styles */}
      <style jsx>{`
        .high-contrast {
          --text-color: #ffffff !important;
          --bg-color: #000000 !important;
          --accent-color: #ffff00 !important;
        }
        
        .high-contrast * {
          color: var(--text-color) !important;
          background-color: var(--bg-color) !important;
          border-color: var(--accent-color) !important;
        }
        
        .large-text {
          font-size: 18px !important;
        }
        
        .large-text * {
          font-size: 1.125em !important;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .focus-visible {
          outline: 3px solid var(--accent-color, #3b82f6) !important;
          outline-offset: 2px !important;
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
        
        .focused {
          outline: 3px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
      `}</style>
    </>
  );
};

// Accessibility hook for components
export const useAccessibility = () => {
  const [announcement, setAnnouncement] = useState<string>('');

  const announce = useCallback((message: string) => {
    setAnnouncement(message);
    setTimeout(() => setAnnouncement(''), 3000);
  }, []);

  const enhanceFocus = useCallback((element: HTMLElement) => {
    element.addEventListener('focus', () => {
      element.classList.add('focused');
    });
    
    element.addEventListener('blur', () => {
      element.classList.remove('focused');
    });
  }, []);

  return { announcement, announce, enhanceFocus };
};

// Accessible button component
export const AccessibleButton: React.FC<{
  children: React.ReactNode;
  onClick: () => void;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  disabled?: boolean;
  className?: string;
}> = ({ children, onClick, ariaLabel, ariaDescribedBy, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={`px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className || ''}`}
    >
      {children}
    </button>
  );
};

// Accessible link component
export const AccessibleLink: React.FC<{
  children: React.ReactNode;
  href: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  className?: string;
  external?: boolean;
}> = ({ children, href, ariaLabel, ariaDescribedBy, className, external }) => {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={`text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className || ''}`}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {children}
      {external && (
        <span className="sr-only"> (opens in new window)</span>
      )}
    </a>
  );
};

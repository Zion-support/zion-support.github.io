'use client';

import React, { useEffect, useState } from 'react';
import { Eye, EyeOff, Volume2, VolumeX, Type, Contrast } from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  focusVisible: boolean;
}
;
const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {;
const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    focusVisible: true
  });
const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load saved settings from localStorage;
const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Apply initial settings
    applyAccessibilitySettings(settings);
  }, []);
const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {;
const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text
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

    // Screen reader optimizations
    if (newSettings.screenReader) {
      root.classList.add('screen-reader-optimized');
    } else {
      root.classList.remove('screen-reader-optimized');
    }

    // Focus visible
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  }
const updateSetting = (key: keyof AccessibilitySettings, value: boolean) => {;
const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };

  return (
    <>
      {children}
      
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Toggle accessibility settings"
      >
        <Eye className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 bg-white rounded-lg shadow-xl p-6 w-80 max-h-96 overflow-y-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Accessibility Settings</h3>
          
          <div className="space-y-4">
            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Contrast className="w-5 h-5 mr-2 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">High Contrast</span>
              </div>
              <button
                onClick={() => updateSetting('highContrast', !settings.highContrast)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.highContrast ? 'bg-blue-600' : 'bg-gray-200'
                }`}
                aria-label="Toggle high contrast"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Large Text */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Type className="w-5 h-5 mr-2 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Large Text</span>
              </div>
              <button
                onClick={() => updateSetting('largeText', !settings.largeText);
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.largeText ? 'bg-blue-600' : 'bg-gray-200'
                }`}
                aria-label="Toggle large text"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.largeText ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Reduced Motion */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <VolumeX className="w-5 h-5 mr-2 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Reduce Motion</span>
              </div>
              <button
                onClick={() => updateSetting('reducedMotion', !settings.reducedMotion);
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-200'
                }`}
                aria-label="Toggle reduced motion"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Screen Reader */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Volume2 className="w-5 h-5 mr-2 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Screen Reader Mode</span>
              </div>
              <button
                onClick={() => updateSetting('screenReader', !settings.screenReader);
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.screenReader ? 'bg-blue-600' : 'bg-gray-200'
                }`}
                aria-label="Toggle screen reader mode"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Focus Visible */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Eye className="w-5 h-5 mr-2 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Enhanced Focus</span>
              </div>
              <button
                onClick={() => updateSetting('focusVisible', !settings.focusVisible);
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.focusVisible ? 'bg-blue-600' : 'bg-gray-200'
                }`}
                aria-label="Toggle enhanced focus"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.focusVisible ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <button
              onClick={() => setIsOpen(false);
              className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>);
      <style jsx global>{`
        .high-contrast {
          --tw-bg-opacity: 1;
          --tw-text-opacity: 1;
        }
        
        .high-contrast * {
          background-color: white !important;
          color: black !important;
          border-color: black !important;
        }
        
        .large-text {
          font-size: 1.25rem;
        }
        
        .large-text h1 { font-size: 3rem; }
        .large-text h2 { font-size: 2.5rem; }
        .large-text h3 { font-size: 2rem; }
        .large-text h4 { font-size: 1.75rem; }
        .large-text h5 { font-size: 1.5rem; }
        .large-text h6 { font-size: 1.25rem; }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .screen-reader-optimized {
          /* Enhanced focus indicators */
        }
        
        .screen-reader-optimized *:focus {
          outline: 3px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        
        .focus-visible *:focus-visible {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
      `}</style>
    </>
  );
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50';
      skipLink.style.position = 'absolute';
      skipLink.style.left = '-9999px';
      skipLink.style.top = '0';
      skipLink.style.zIndex = '9999';
      skipLink.style.padding = '8px 16px';
      skipLink.style.backgroundColor = '#4f46e5';
      skipLink.style.color = 'white';
      skipLink.style.borderRadius = '4px';
      skipLink.style.textDecoration = 'none';
      skipLink.style.fontWeight = 'bold';
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.left = '16px';
        skipLink.style.top = '16px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.left = '-9999px';
        skipLink.style.top = '0';
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    }

    // Keyboard navigation enhancements
    if ($1) { const handleKeyDown = (event: KeyboardEvent) => {
        // Escape key to close modals/dropdowns
        if ($1) { const activeElement = document.activeElement as HTMLElement;
          if (activeElement && activeElement.blur) {
            activeElement.blur();
          }
        }
        
        // Tab navigation improvements
        if (event.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      }
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

    // Screen reader announcements
    if ($1) { const announceToScreenReader = (message: string) => {;
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

      // Announce page changes;
const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if ($1) { const addedNode = mutation.addedNodes[0] as Element;
            if (addedNode && addedNode.getAttribute && addedNode.getAttribute('role') === 'main') {
              announceToScreenReader('Main content has loaded');
            }
          }
        });
      });

      observer.observe(document.body, { childList: true, subtree: true });

      return () => {
        observer.disconnect();
      };
    }

    // High contrast mode detection
    if ($1) { const mediaQuery = window.matchMedia('(prefers-contrast: high)');
const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      };

      mediaQuery.addEventListener('change', handleContrastChange);
      handleContrastChange(mediaQuery);

      return () => {
        mediaQuery.removeEventListener('change', handleContrastChange);
      };
    }

    // Reduced motion support
    if ($1) { const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const handleMotionChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.body.classList.add('reduced-motion');
        } else {
          document.body.classList.remove('reduced-motion');
        }
      };

      mediaQuery.addEventListener('change', handleMotionChange);
      handleMotionChange(mediaQuery);

      return () => {
        mediaQuery.removeEventListener('change', handleMotionChange);
      };
    }

    // Focus management
    if ($1) { const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
const trapFocus = (element: HTMLElement) => {;
const focusableContent = element.querySelectorAll(focusableElements);
const firstFocusableElement = focusableContent[0] as HTMLElement;
const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

        element.addEventListener('keydown', (e) => {
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
        });
      };

      // Apply focus trapping to modals and dropdowns;
const modals = document.querySelectorAll('[role="dialog"], [role="menu"]');
      modals.forEach(modal => trapFocus(modal as HTMLElement));
    }
  }, [enableKeyboardNavigation, enableScreenReaderSupport, enableHighContrast, enableFocusManagement, enableReducedMotion]);

  return null;
}
export default EnhancedAccessibility;
    // Enhance focus management;
const enhanceFocusManagement = () => {
      // Add focus indicators;
const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #06b6d4 !important;
          outline-offset: 2px !important}
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0}
        .sr-only.focus:not-sr-only {
          position: static;
          width: auto;
          height: auto;
          padding: inherit;
          margin: inherit;
          overflow: visible;
          clip: auto;
          white-space: normal}
      `;
      document.head.appendChild(style);
    // Initialize accessibility enhancements
    addLandmarks();
    addSkipLinks();
    enhanceFocusManagement();

    // Cleanup function
    return () => {;
const skipLink = document.querySelector('a[href="#main-content"]');
      if (skipLink) {
        skipLink.remove();
    }}, []);

  return <React.Fragment>{children}</React.Fragment>}
export default EnhancedAccessibility;

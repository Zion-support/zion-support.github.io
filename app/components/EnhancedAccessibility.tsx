'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { Eye, EyeOff, Volume2, VolumeX, Type, MousePointer, Keyboard, Monitor } from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusVisible: boolean;
  colorBlind: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: 'small' | 'medium' | 'large' | 'extra-large';
}

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableReducedMotion?: boolean;
  enableColorBlindSupport?: boolean;
  enableFontSizeControl?: boolean;
}

const EnhancedAccessibility: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableReducedMotion = true,
  enableColorBlindSupport = true,
  enableFontSizeControl = true
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusVisible: true,
    colorBlind: 'none',
    fontSize: 'medium'
  });

  const [showControls, setShowControls] = useState(false);
  const [announcements, setAnnouncements] = useState<string[]>([]);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  // Apply accessibility settings
  useEffect(() => {
    applyAccessibilitySettings();
  }, [settings]);

  const applyAccessibilitySettings = useCallback(() => {
    const root = document.documentElement;
    const body = document.body;

    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Screen reader support
    if (settings.screenReader) {
      root.classList.add('screen-reader-mode');
    } else {
      root.classList.remove('screen-reader-mode');
    }

    // Keyboard navigation
    if (settings.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }

    // Focus visible
    if (settings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Color blind support
    if (settings.colorBlind !== 'none') {
      root.classList.add(`color-blind-${settings.colorBlind}`);
    } else {
      root.classList.remove('color-blind-protanopia', 'color-blind-deuteranopia', 'color-blind-tritanopia');
    }

    // Font size
    root.classList.remove('font-small', 'font-medium', 'font-large', 'font-extra-large');
    root.classList.add(`font-${settings.fontSize}`);
  }, [settings]);

  // Announce changes to screen readers
  const announce = useCallback((message: string) => {
    setAnnouncements(prev => [...prev, message]);
    
    // Create live region for screen reader announcements
    const liveRegion = document.getElementById('accessibility-announcements') || 
      (() => {
        const region = document.createElement('div');
        region.id = 'accessibility-announcements';
        region.setAttribute('aria-live', 'polite');
        region.setAttribute('aria-atomic', 'true');
        region.className = 'sr-only';
        document.body.appendChild(region);
        return region;
      })();
    
    liveRegion.textContent = message;
    
    // Clear announcement after a delay
    setTimeout(() => {
      setAnnouncements(prev => prev.slice(1));
    }, 3000);
  }, []);

  // Update setting
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
    announce(`${key} ${value ? 'enabled' : 'disabled'}`);
  }, [announce]);

  // Keyboard navigation setup
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip if not in keyboard navigation mode
      if (!settings.keyboardNavigation) return;

      // Tab navigation
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation-active');
      }

      // Escape key to exit keyboard navigation
      if (event.key === 'Escape' && settings.keyboardNavigation) {
        updateSetting('keyboardNavigation', false);
        announce('Keyboard navigation disabled');
      }

      // Arrow key navigation for custom elements
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        const focusableElements = document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as Element);
        
        if (currentIndex !== -1) {
          let nextIndex = currentIndex;
          
          switch (event.key) {
            case 'ArrowDown':
            case 'ArrowRight':
              nextIndex = (currentIndex + 1) % focusableElements.length;
              break;
            case 'ArrowUp':
            case 'ArrowLeft':
              nextIndex = currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1;
              break;
          }
          
          (focusableElements[nextIndex] as HTMLElement)?.focus();
          event.preventDefault();
        }
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation-active');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [enableKeyboardNavigation, settings.keyboardNavigation, updateSetting]);

  // Focus management
  useEffect(() => {
    if (!enableFocusManagement) return;

    // Trap focus in modals
    const trapFocus = (element: HTMLElement) => {
      const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement?.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement?.focus();
              e.preventDefault();
            }
          }
        }
      };

      element.addEventListener('keydown', handleTabKey);
      firstElement?.focus();

      return () => {
        element.removeEventListener('keydown', handleTabKey);
      };
    };

    // Apply to all modals
    const modals = document.querySelectorAll('[role="dialog"], [role="modal"]');
    modals.forEach(modal => trapFocus(modal as HTMLElement));
  }, [enableFocusManagement]);

  // Screen reader announcements
  useEffect(() => {
    if (!enableScreenReaderSupport) return;

    // Add skip links
    const skipLinks = document.querySelectorAll('.skip-link');
    skipLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector((link as HTMLAnchorElement).getAttribute('href') || '');
        if (target) {
          (target as HTMLElement).focus();
          announce('Skipped to main content');
        }
      });
    });
  }, [enableScreenReaderSupport, announce]);

  return (
    <>
      {/* Accessibility Controls */}
      <div className="accessibility-controls">
        <button
          className="fixed bottom-4 left-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
          onClick={() => setShowControls(!showControls)}
          aria-label="Toggle accessibility controls"
          title="Accessibility Settings"
        >
          <Monitor className="w-5 h-5" />
        </button>

        {showControls && (
          <div className="fixed bottom-20 left-4 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg z-50 min-w-64">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Accessibility Settings
            </h3>
            
            <div className="space-y-3">
              {/* High Contrast */}
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={(e) => updateSetting('highContrast', e.target.checked)}
                  className="rounded"
                />
                <Eye className="w-4 h-4" />
                <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
              </label>

              {/* Large Text */}
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={settings.largeText}
                  onChange={(e) => updateSetting('largeText', e.target.checked)}
                  className="rounded"
                />
                <Type className="w-4 h-4" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>
              </label>

              {/* Reduced Motion */}
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={settings.reducedMotion}
                  onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                  className="rounded"
                />
                <EyeOff className="w-4 h-4" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Reduce Motion</span>
              </label>

              {/* Keyboard Navigation */}
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={settings.keyboardNavigation}
                  onChange={(e) => updateSetting('keyboardNavigation', e.target.checked)}
                  className="rounded"
                />
                <Keyboard className="w-4 h-4" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Keyboard Navigation</span>
              </label>

              {/* Font Size */}
              <div className="space-y-1">
                <label className="text-sm text-gray-700 dark:text-gray-300">Font Size</label>
                <select
                  value={settings.fontSize}
                  onChange={(e) => updateSetting('fontSize', e.target.value)}
                  className="w-full p-1 border rounded text-sm"
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                  <option value="extra-large">Extra Large</option>
                </select>
              </div>

              {/* Color Blind Support */}
              <div className="space-y-1">
                <label className="text-sm text-gray-700 dark:text-gray-300">Color Blind Support</label>
                <select
                  value={settings.colorBlind}
                  onChange={(e) => updateSetting('colorBlind', e.target.value)}
                  className="w-full p-1 border rounded text-sm"
                >
                  <option value="none">None</option>
                  <option value="protanopia">Protanopia</option>
                  <option value="deuteranopia">Deuteranopia</option>
                  <option value="tritanopia">Tritanopia</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Screen Reader Announcements */}
      <div
        id="accessibility-announcements"
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      >
        {announcements[0]}
      </div>

      {/* Skip Links */}
      <div className="skip-links">
        <a href="#main-content" className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50">
          Skip to main content
        </a>
        <a href="#navigation" className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-32 bg-blue-600 text-white px-4 py-2 rounded z-50">
          Skip to navigation
        </a>
      </div>
    </>
  );
};

export default EnhancedAccessibility;
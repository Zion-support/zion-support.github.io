'use client';
import React, { useEffect, useState, ReactNode } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'normal' | 'large' | 'extra-large';
  focusVisible: boolean;
}

interface EnhancedAccessibilityProps {
  children: ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'normal',
    focusVisible: true
  });

  useEffect(() => {
    // Load saved accessibility settings
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Apply accessibility settings
    applyAccessibilitySettings(settings);
  }, [settings]);

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;

    // High contrast mode
    if (enableHighContrast) {
      if (newSettings.highContrast) {
        root.classList.add('high-contrast');
      } else {
        root.classList.remove('high-contrast');
      }
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Font size
    root.classList.remove('font-normal', 'font-large', 'font-extra-large');
    root.classList.add(`font-${newSettings.fontSize}`);

    // Focus visible
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  };

  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
  };

  useEffect(() => {
    // Keyboard navigation
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
          if (skipLink) {
            skipLink.focus();
          }
        }

        // Escape key handling
        if (event.key === 'Escape') {
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
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    // Screen reader support
    if (enableScreenReaderSupport) {
      // Add ARIA landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }

      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);

      // Announce page changes
      const announcePageChange = () => {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = `Page loaded: ${document.title}`;
        document.body.appendChild(announcement);
        setTimeout(() => document.body.removeChild(announcement), 1000);
      };

      announcePageChange();
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    // Focus management
    if (enableFocusManagement) {
      const manageFocus = () => {
        const focusableElements = document.querySelectorAll(
          'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );

        focusableElements.forEach(element => {
          element.addEventListener('focus', () => {
            element.classList.add('focus-visible');
          });

          element.addEventListener('blur', () => {
            element.classList.remove('focus-visible');
          });
        });
      };

      manageFocus();
    }
  }, [enableFocusManagement]);

  return (
    <div className="accessibility-wrapper">
      {children}
    </div>
  );
};

EnhancedAccessibility.displayName = 'EnhancedAccessibility';

export default EnhancedAccessibility;
<<<<<<< HEAD
'use client'
import React, { useEffect, useState } from 'react'

interface AccessibilitySettings {
  highContrast: boolean
  fontSize: number
  reducedMotion: boolean
}

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 16,
    reducedMotion: false
  })

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings')
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings))
    }

    // Apply settings
    applySettings(settings)
  }, [settings])

  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement

    // Apply high contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }

    // Apply font size
    root.style.fontSize = `${newSettings.fontSize}px`

    // Apply reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.01ms')
      root.style.setProperty('--animation-iteration-count', '1')
    } else {
      root.style.removeProperty('--animation-duration')
      root.style.removeProperty('--animation-iteration-count')
    }
  }

  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings }
    setSettings(updatedSettings)
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings))
  }

  return (
    <div className="accessibility-enhanced">
      {children}
      
      {/* Accessibility Controls */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-white rounded-lg shadow-lg p-4 space-y-2">
          <h3 className="text-sm font-semibold text-gray-900">Accessibility</h3>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={settings.highContrast}
              onChange={(e) => updateSettings({ highContrast: e.target.checked })}
              className="rounded"
            />
            <span className="text-sm text-gray-700">High Contrast</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={settings.reducedMotion}
              onChange={(e) => updateSettings({ reducedMotion: e.target.checked })}
              className="rounded"
            />
            <span className="text-sm text-gray-700">Reduce Motion</span>
          </label>
          
          <div className="space-y-1">
            <label className="text-sm text-gray-700">Font Size</label>
            <input
              type="range"
              min="12"
              max="24"
              value={settings.fontSize}
              onChange={(e) => updateSettings({ fontSize: parseInt(e.target.value) })}
              className="w-full"
            />
            <div className="text-xs text-gray-500 text-center">{settings.fontSize}px</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnhancedAccessibility
=======
'use client';
import React, { useEffect, useState } from 'react';

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Keyboard navigation enhancement
      if (enableKeyboardNavigation) {
        const handleKeyDown = (event: KeyboardEvent) => {
          // Skip to main content
          if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
            const skipLink = document.querySelector('[href="#main-content"]') as HTMLAnchorElement;
            if (skipLink) {
              skipLink.focus();
              event.preventDefault();
            }
          }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
      }
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Screen reader enhancements
      if (enableScreenReader) {
        // Add ARIA landmarks
        const main = document.querySelector('main');
        if (main && !main.getAttribute('role')) {
          main.setAttribute('role', 'main');
        }

        // Add skip links
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
        document.body.insertBefore(skipLink, document.body.firstChild);
      }
    }
  }, [enableScreenReader]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // High contrast mode
      if (enableHighContrast) {
        const mediaQuery = window.matchMedia('(prefers-contrast: high)');
        setIsHighContrast(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => {
          setIsHighContrast(e.matches);
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
      }
    }
  }, [enableHighContrast]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Focus management
      if (enableFocusManagement) {
        // Trap focus in modals
        const handleFocusTrap = (event: FocusEvent) => {
          const modal = document.querySelector('[role="dialog"]');
          if (modal && !modal.contains(event.target as Node)) {
            const focusableElements = modal.querySelectorAll(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            if (focusableElements.length > 0) {
              (focusableElements[0] as HTMLElement).focus();
            }
          }
        };

        document.addEventListener('focusin', handleFocusTrap);
        return () => document.removeEventListener('focusin', handleFocusTrap);
      }
    }
  }, [enableFocusManagement]);

  return (
    <div className={isHighContrast ? 'high-contrast' : ''}>
      {children}
    </div>
  );
};

export default EnhancedAccessibility;
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa

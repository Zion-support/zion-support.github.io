<<<<<<< HEAD
'use client'
import React, { useEffect, useState } from 'react'
import { useAnalytics } from './EnhancedAnalytics'
=======
'use client';
import React, { useEffect, useState } from 'react';
import { Eye, EyeOff, Volume2, VolumeX, Type, Contrast } from 'lucide-react';

>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
interface AccessibilitySettings {
    highContrast: boolean
  reducedMotion: boolean
  fontSize: 'small' | 'medium' | 'large'
  screenReader: boolean,
  keyboardNavigation: boolean
  }

interface EnhancedAccessibilityProps {
    children: React.ReactNode
  enableKeyboardNavigation?: boolean
  enableScreenReaderSupport?: boolean
  enableHighContrast?: boolean,
  enableFocusManagement?: boolean
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
    fontSize: 'medium',
    screenReader: false,
    keyboardNavigation: false
  })

<<<<<<< HEAD
  const analytics = useAnalytics()
  useEffect(() => {
    // Detect user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches
    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    }))
    // Apply initial accessibility settings
    applyAccessibilitySettings({
      ...settings,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    })

    // Track accessibility usage
    analytics?.track('accessibility_initialized', {
      reduced_motion: prefersReducedMotion,
      high_contrast: prefersHighContrast
    })
  }, []);

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast')
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion')
=======
  const updateSetting = (key: keyof AccessibilitySettings, value: boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    // Apply accessibility settings to document
    const root = document.documentElement;
    
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    } else {
      root.classList.remove('reduced-motion')
    }
<<<<<<< HEAD

    // Font size
    root.classList.remove('font-small', 'font-medium', 'font-large')
    root.classList.add(`font-${newSettings.fontSize}`)
    // Screen reader optimizations
    if (newSettings.screenReader) {
    root.classList.add('screen-reader-optimized')
  } else {
    root.classList.remove('screen-reader-optimized')
  }
  }

  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings }
    setSettings(updatedSettings)
    applyAccessibilitySettings(updatedSettings)
    analytics?.track('accessibility_settings_changed', newSettings)
  }

  // Keyboard navigation support
  useEffect(() => {
    if (!enableKeyboardNavigation) return
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement
        if (skipLink) {
          skipLink.focus(),
          event.preventDefault()
  }
      }

      // Escape key to close modals/dropdowns
      if (event.key === 'Escape') {
    const activeElement = document.activeElement as HTMLElement
        if (activeElement && activeElement.blur) {
          activeElement.blur()
  }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [enableKeyboardNavigation]);

  // Focus management
  useEffect(() => {
    if (!enableFocusManagement) return;
=======
    
    if (settings.screenReader) {
      root.classList.add('screen-reader-mode');
    } else {
      root.classList.remove('screen-reader-mode');
    }
    
    if (settings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  }, [settings]);
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7

    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      
<<<<<<< HEAD
      // Ensure focus is visible
      if (target && target.classList) {
        target.classList.add('focus-visible')
      }
    }

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement
      // Remove focus styling
      if (target && target.classList) {
        target.classList.remove('focus-visible')
      }
    }

    document.addEventListener('focusin', handleFocusIn)
    document.addEventListener('focusout', handleFocusOut)
    return () => {
    document.removeEventListener('focusin', handleFocusIn)
      document.removeEventListener('focusout', handleFocusOut)
  }
  }, [enableFocusManagement])
  // Screen reader announcements
  const announceToScreenReader = (message: string) => {
    if (!enableScreenReaderSupport) return
    const announcement = document.createElement('div')
    announcement.setAttribute('aria-live', 'polite')
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message
    document.body.appendChild(announcement)
    setTimeout(() => {
      document.body.removeChild(announcement)
    }, 1000)
  }

  // Expose accessibility functions to window for global access
  useEffect(() => {
    (window as any).accessibility = {
      updateSettings,
      announceToScreenReader,
      settings
    }
  }, [settings])
  return (
    <div 
      className={`accessibility-wrapper ${settings.highContrast ? 'high-contrast' : ''} ${settings.reducedMotion ? 'reduced-motion' : ''}`}
      data-font-size={settings.fontSize}
      data-screen-reader={settings.screenReader}
    >
      {children}
    </div>
  )
}

export default EnhancedAccessibility
=======
      {/* Accessibility Panel */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          aria-label="Open accessibility settings"
        >
          <Eye className="w-5 h-5" />
        </button>
        
        {isOpen && (
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-6 w-80 border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Accessibility Settings</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Close accessibility settings"
              >
                <EyeOff className="w-5 h-5" />
              </button>
            </div>
            
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
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
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
                  onClick={() => updateSetting('largeText', !settings.largeText)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.largeText ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                  aria-label="Toggle large text"
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
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
                  onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                  aria-label="Toggle reduced motion"
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
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
                  onClick={() => updateSetting('screenReader', !settings.screenReader)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.screenReader ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                  aria-label="Toggle screen reader mode"
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                  }`}
                  />
                </button>
              </div>
              
              {/* Focus Visible */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Focus Indicators</span>
                </div>
                <button
                  onClick={() => updateSetting('focusVisible', !settings.focusVisible)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.focusVisible ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                  aria-label="Toggle focus indicators"
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.focusVisible ? 'translate-x-6' : 'translate-x-1'
                  }`}
                  />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EnhancedAccessibility;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7

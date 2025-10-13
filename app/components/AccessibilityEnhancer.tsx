'use client'
import { useEffect, useState } from 'react'

interface AccessibilitySettings {
  fontSize: 'small' | 'medium' | 'large'
  highContrast: boolean
  reducedMotion: boolean
  screenReader: boolean
  keyboardNavigation: boolean
}

const AccessibilityEnhancer = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 'medium',
    highContrast: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false
  })

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Detect user preferences
    const detectPreferences = () => {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      
      // Check for high contrast preference
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches
      
      // Check for screen reader
      const hasScreenReader = window.speechSynthesis !== undefined
      
      setSettings(prev => ({
        ...prev,
        reducedMotion: prefersReducedMotion,
        highContrast: prefersHighContrast,
        screenReader: hasScreenReader
      }))
    }

    detectPreferences()

    // Apply accessibility settings
    applyAccessibilitySettings(settings)
  }, [settings])

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement

    // Font size
    root.style.setProperty('--font-size-multiplier', 
      newSettings.fontSize === 'small' ? '0.875' : 
      newSettings.fontSize === 'large' ? '1.25' : '1'
    )

    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion')
    } else {
      root.classList.remove('reduced-motion')
    }

    // Keyboard navigation
    if (newSettings.keyboardNavigation) {
      root.classList.add('keyboard-navigation')
    } else {
      root.classList.remove('keyboard-navigation')
    }
  }

  const updateSetting = (key: keyof AccessibilitySettings, value: boolean | string) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const announceToScreenReader = (message: string) => {
    if (settings.screenReader) {
      const announcement = document.createElement('div')
      announcement.setAttribute('aria-live', 'polite')
      announcement.setAttribute('aria-atomic', 'true')
      announcement.className = 'sr-only'
      announcement.textContent = message
      document.body.appendChild(announcement)
      
      setTimeout(() => {
        document.body.removeChild(announcement)
      }, 1000)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        aria-label="Open accessibility settings"
        aria-expanded={isOpen}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div 
          className="fixed bottom-20 right-4 z-50 bg-white rounded-lg shadow-xl p-6 w-80 max-h-96 overflow-y-auto"
          role="dialog"
          aria-labelledby="accessibility-title"
          aria-modal="true"
        >
          <h3 id="accessibility-title" className="text-lg font-semibold mb-4">
            Accessibility Settings
          </h3>

          <div className="space-y-4">
            {/* Font Size */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Font Size
              </label>
              <select
                value={settings.fontSize}
                onChange={(e) => updateSetting('fontSize', e.target.value as any)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>

            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                High Contrast
              </label>
              <button
                onClick={() => {
                  updateSetting('highContrast', !settings.highContrast)
                  announceToScreenReader(
                    `High contrast ${!settings.highContrast ? 'enabled' : 'disabled'}`
                  )
                }}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.highContrast ? 'bg-blue-600' : 'bg-gray-200'
                }`}
                role="switch"
                aria-checked={settings.highContrast}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Reduced Motion */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Reduced Motion
              </label>
              <button
                onClick={() => {
                  updateSetting('reducedMotion', !settings.reducedMotion)
                  announceToScreenReader(
                    `Reduced motion ${!settings.reducedMotion ? 'enabled' : 'disabled'}`
                  )
                }}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-200'
                }`}
                role="switch"
                aria-checked={settings.reducedMotion}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Keyboard Navigation */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Enhanced Keyboard Navigation
              </label>
              <button
                onClick={() => {
                  updateSetting('keyboardNavigation', !settings.keyboardNavigation)
                  announceToScreenReader(
                    `Enhanced keyboard navigation ${!settings.keyboardNavigation ? 'enabled' : 'disabled'}`
                  )
                }}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.keyboardNavigation ? 'bg-blue-600' : 'bg-gray-200'
                }`}
                role="switch"
                aria-checked={settings.keyboardNavigation}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Close
          </button>
        </div>
      )}

      {/* Screen Reader Only Content */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Accessibility settings panel is {isOpen ? 'open' : 'closed'}
      </div>
    </>
  )
}

export default AccessibilityEnhancer
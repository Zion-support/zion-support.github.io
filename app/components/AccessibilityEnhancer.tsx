import React, { useEffect, useState } from 'react'
import { Eye, EyeOff, Volume2, VolumeX, Type, Type as TypeIcon } from 'lucide-react'

interface AccessibilitySettings {
  highContrast: boolean
  largeText: boolean
  reducedMotion: boolean
  screenReader: boolean
  focusVisible: boolean
}

const AccessibilityEnhancer: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    focusVisible: true
  })

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings')
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings)
        setSettings(prev => ({ ...prev, ...parsed }))
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error)
      }
    }

    // Check for system preferences
    if (window.matchMedia) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches
      
      setSettings(prev => ({
        ...prev,
        reducedMotion: prefersReducedMotion,
        highContrast: prefersHighContrast
      }))
    }
  }, [])

  useEffect(() => {
    // Apply accessibility settings
    const root = document.documentElement
    
    // High contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }

    // Large text
    if (settings.largeText) {
      root.classList.add('large-text')
    } else {
      root.classList.remove('large-text')
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion')
    } else {
      root.classList.remove('reduced-motion')
    }

    // Focus visible
    if (settings.focusVisible) {
      root.classList.add('focus-visible')
    } else {
      root.classList.remove('focus-visible')
    }

    // Save settings
    localStorage.setItem('accessibility-settings', JSON.stringify(settings))
  }, [settings])

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
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
        className="fixed bottom-4 left-4 bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        aria-label="Open accessibility settings"
        aria-expanded={isOpen}
      >
        <Eye className="w-5 h-5" />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div 
          className="fixed bottom-20 left-4 bg-gray-800 rounded-lg shadow-xl p-6 w-80 z-50 border border-gray-700"
          role="dialog"
          aria-labelledby="accessibility-title"
          aria-modal="true"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 id="accessibility-title" className="text-lg font-semibold text-white">
              Accessibility Settings
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close accessibility settings"
            >
              ×
            </button>
          </div>

          <div className="space-y-4">
            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Eye className="w-4 h-4 text-cyan-400" />
                <span className="text-white">High Contrast</span>
              </div>
              <button
                onClick={() => {
                  toggleSetting('highContrast')
                  announceToScreenReader(settings.highContrast ? 'High contrast disabled' : 'High contrast enabled')
                }}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-800 ${
                  settings.highContrast ? 'bg-cyan-600' : 'bg-gray-600'
                }`}
                aria-pressed={settings.highContrast}
                aria-label="Toggle high contrast mode"
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
              <div className="flex items-center space-x-3">
                <Type className="w-4 h-4 text-cyan-400" />
                <span className="text-white">Large Text</span>
              </div>
              <button
                onClick={() => {
                  toggleSetting('largeText')
                  announceToScreenReader(settings.largeText ? 'Large text disabled' : 'Large text enabled')
                }}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-800 ${
                  settings.largeText ? 'bg-cyan-600' : 'bg-gray-600'
                }`}
                aria-pressed={settings.largeText}
                aria-label="Toggle large text mode"
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
              <div className="flex items-center space-x-3">
                <VolumeX className="w-4 h-4 text-cyan-400" />
                <span className="text-white">Reduce Motion</span>
              </div>
              <button
                onClick={() => {
                  toggleSetting('reducedMotion')
                  announceToScreenReader(settings.reducedMotion ? 'Motion effects enabled' : 'Motion effects reduced')
                }}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-800 ${
                  settings.reducedMotion ? 'bg-cyan-600' : 'bg-gray-600'
                }`}
                aria-pressed={settings.reducedMotion}
                aria-label="Toggle reduced motion"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Focus Visible */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <TypeIcon className="w-4 h-4 text-cyan-400" />
                <span className="text-white">Enhanced Focus</span>
              </div>
              <button
                onClick={() => {
                  toggleSetting('focusVisible')
                  announceToScreenReader(settings.focusVisible ? 'Enhanced focus disabled' : 'Enhanced focus enabled')
                }}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-800 ${
                  settings.focusVisible ? 'bg-cyan-600' : 'bg-gray-600'
                }`}
                aria-pressed={settings.focusVisible}
                aria-label="Toggle enhanced focus indicators"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.focusVisible ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-700">
            <p className="text-xs text-gray-400">
              These settings are saved locally and will persist across sessions.
            </p>
          </div>
        </div>
      )}

      {/* CSS for accessibility features */}
      <style jsx global>{`
        .high-contrast {
          --tw-bg-opacity: 1;
          --tw-text-opacity: 1;
        }
        
        .high-contrast * {
          background-color: var(--tw-bg-opacity) !important;
          color: var(--tw-text-opacity) !important;
          border-color: currentColor !important;
        }
        
        .large-text {
          font-size: 1.125rem;
        }
        
        .large-text h1 { font-size: 3rem; }
        .large-text h2 { font-size: 2.25rem; }
        .large-text h3 { font-size: 1.875rem; }
        .large-text h4 { font-size: 1.5rem; }
        .large-text h5 { font-size: 1.25rem; }
        .large-text h6 { font-size: 1.125rem; }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .focus-visible *:focus {
          outline: 2px solid #06b6d4 !important;
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
      `}</style>
    </>
  )
}

export default AccessibilityEnhancer
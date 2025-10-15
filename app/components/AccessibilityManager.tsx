import React, { useEffect, useState, useCallback } from 'react'

interface AccessibilitySettings {
  highContrast: boolean
  largeText: boolean
  reducedMotion: boolean
  screenReader: boolean
  focusVisible: boolean
  keyboardNavigation: boolean
}

interface AccessibilityManagerProps {
  children: React.ReactNode
}

const AccessibilityManager: React.FC<AccessibilityManagerProps> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    focusVisible: true,
    keyboardNavigation: true
  })
  const [isVisible, setIsVisible] = useState(false)

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings')
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings))
      } catch (error) {
        console.error('Error loading accessibility settings:', error)
      }
    }
  }, [])

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement
    
    // High contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }
    
    // Large text mode
    if (newSettings.largeText) {
      root.classList.add('large-text')
    } else {
      root.classList.remove('large-text')
    }
    
    // Reduced motion mode
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion')
    } else {
      root.classList.remove('reduced-motion')
    }
    
    // Screen reader mode
    if (newSettings.screenReader) {
      root.classList.add('screen-reader')
    } else {
      root.classList.remove('screen-reader')
    }
    
    // Focus visible mode
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible')
    } else {
      root.classList.remove('focus-visible')
    }
    
    // Keyboard navigation mode
    if (newSettings.keyboardNavigation) {
      root.classList.add('keyboard-navigation')
    } else {
      root.classList.remove('keyboard-navigation')
    }
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings))
  }, [])

  // Update settings when they change
  useEffect(() => {
    applySettings(settings)
  }, [settings, applySettings])

  // Handle setting changes
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: boolean) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }))
  }, [])

  // Reset all settings
  const resetSettings = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      focusVisible: true,
      keyboardNavigation: true
    }
    setSettings(defaultSettings)
  }, [])

  return (
    <>
      {children}
      
      {/* Accessibility Controls */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors"
          aria-label="Toggle accessibility settings"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
          </svg>
        </button>
        
        {isVisible && (
          <div className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-80 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Accessibility Settings
            </h3>
            
            <div className="space-y-3">
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={(e) => updateSetting('highContrast', e.target.checked)}
                  className="rounded"
                />
              </label>
              
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>
                <input
                  type="checkbox"
                  checked={settings.largeText}
                  onChange={(e) => updateSetting('largeText', e.target.checked)}
                  className="rounded"
                />
              </label>
              
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">Reduced Motion</span>
                <input
                  type="checkbox"
                  checked={settings.reducedMotion}
                  onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                  className="rounded"
                />
              </label>
              
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">Screen Reader</span>
                <input
                  type="checkbox"
                  checked={settings.screenReader}
                  onChange={(e) => updateSetting('screenReader', e.target.checked)}
                  className="rounded"
                />
              </label>
              
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">Focus Visible</span>
                <input
                  type="checkbox"
                  checked={settings.focusVisible}
                  onChange={(e) => updateSetting('focusVisible', e.target.checked)}
                  className="rounded"
                />
              </label>
              
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">Keyboard Navigation</span>
                <input
                  type="checkbox"
                  checked={settings.keyboardNavigation}
                  onChange={(e) => updateSetting('keyboardNavigation', e.target.checked)}
                  className="rounded"
                />
              </label>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={resetSettings}
                className="w-full text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Reset to Defaults
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default AccessibilityManager
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
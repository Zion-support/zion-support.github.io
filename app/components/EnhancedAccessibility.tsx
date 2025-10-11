'use client'
import React, { useEffect, useState } from 'react'

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: number;
  reducedMotion: boolean;
}

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 16,
    reducedMotion: false,
  })

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings')
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings)
        setSettings(parsed)
      } catch (error) {
        console.error('Error parsing accessibility settings:', error)
      }
    }
  }, [])

  useEffect(() => {
    // Apply accessibility settings
    const root = document.documentElement
    
    if (settings.highContrast) {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }
    
    root.style.fontSize = `${settings.fontSize}px`
    
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion')
    } else {
      root.classList.remove('reduced-motion')
    }
  }, [settings])

  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    const updated = { ...settings, ...newSettings }
    setSettings(updated)
    localStorage.setItem('accessibility-settings', JSON.stringify(updated))
  }

  return (
    <div className="accessibility-wrapper">
      {children}
      <div className="accessibility-controls fixed bottom-4 right-4 z-50">
        <button
          onClick={() => updateSettings({ highContrast: !settings.highContrast })}
          className="bg-cyan-500 text-white px-3 py-2 rounded-md text-sm mr-2"
          aria-label="Toggle high contrast"
        >
          {settings.highContrast ? 'Normal' : 'High Contrast'}
        </button>
        <button
          onClick={() => updateSettings({ fontSize: Math.min(settings.fontSize + 2, 24) })}
          className="bg-cyan-500 text-white px-3 py-2 rounded-md text-sm mr-2"
          aria-label="Increase font size"
        >
          A+
        </button>
        <button
          onClick={() => updateSettings({ fontSize: Math.max(settings.fontSize - 2, 12) })}
          className="bg-cyan-500 text-white px-3 py-2 rounded-md text-sm mr-2"
          aria-label="Decrease font size"
        >
          A-
        </button>
        <button
          onClick={() => updateSettings({ reducedMotion: !settings.reducedMotion })}
          className="bg-cyan-500 text-white px-3 py-2 rounded-md text-sm"
          aria-label="Toggle reduced motion"
        >
          {settings.reducedMotion ? 'Motion On' : 'Motion Off'}
        </button>
      </div>
    </div>
  )
}

export default EnhancedAccessibility
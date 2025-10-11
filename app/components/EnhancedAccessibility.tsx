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
    reducedMotion: false
  })

  useEffect(() => {
    // Load saved accessibility settings
    const savedSettings = localStorage.getItem('accessibility-settings')
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings))
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
    
    // Save settings
    localStorage.setItem('accessibility-settings', JSON.stringify(settings))
  }, [settings])

  const updateSetting = (key: keyof AccessibilitySettings, value: boolean | number) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  return (
    <div className="accessibility-wrapper">
      {/* Accessibility Controls */}
      <div className="accessibility-controls fixed top-4 right-4 z-50 bg-gray-800 p-4 rounded-lg shadow-lg">
        <h3 className="text-white text-sm font-semibold mb-3">Accessibility</h3>
        
        <div className="space-y-3">
          <label className="flex items-center space-x-2 text-white text-sm">
            <input
              type="checkbox"
              checked={settings.highContrast}
              onChange={(e) => updateSetting('highContrast', e.target.checked)}
              className="rounded"
            />
            <span>High Contrast</span>
          </label>
          
          <label className="flex items-center space-x-2 text-white text-sm">
            <input
              type="range"
              min="12"
              max="24"
              value={settings.fontSize}
              onChange={(e) => updateSetting('fontSize', parseInt(e.target.value))}
              className="w-full"
            />
            <span>Font Size: {settings.fontSize}px</span>
          </label>
          
          <label className="flex items-center space-x-2 text-white text-sm">
            <input
              type="checkbox"
              checked={settings.reducedMotion}
              onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
              className="rounded"
            />
            <span>Reduce Motion</span>
          </label>
        </div>
      </div>
      
      {children}
    </div>
  )
}

export default EnhancedAccessibility
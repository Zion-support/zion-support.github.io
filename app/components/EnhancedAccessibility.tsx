'use client'
import React, { useEffect, useState, useCallback } from 'react'

interface AccessibilitySettings {
  highContrast: boolean
  reducedMotion: boolean
  fontSize: 'normal' | 'large' | 'extra-large'
  focusVisible: boolean
}

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'normal',
    focusVisible: false
  })

  useEffect(() => {
    // Add ARIA landmarks
    const addLandmarks = () => {
      const main = document.querySelector('main')
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main')
      }
      const nav = document.querySelector('nav')
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation')
      }
      const footer = document.querySelector('footer')
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo')
      }
    }

    addLandmarks()
  }, [])

  const updateSettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }))
  }, [])

  useEffect(() => {
    // Apply accessibility settings
    const root = document.documentElement
    
    if (settings.highContrast) {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }
    
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion')
    } else {
      root.classList.remove('reduced-motion')
    }
    
    root.setAttribute('data-font-size', settings.fontSize)
  }, [settings])

  return (
    <div className="accessibility-wrapper">
      {children}
    </div>
  )
}

export default EnhancedAccessibility
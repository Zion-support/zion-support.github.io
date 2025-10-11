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
    // Apply accessibility settings
    if (settings.highContrast) {
      document.documentElement.classList.add('high-contrast')
    } else {
      document.documentElement.classList.remove('high-contrast')
    }

    document.documentElement.style.fontSize = `${settings.fontSize}px`

    if (settings.reducedMotion) {
      document.documentElement.classList.add('reduce-motion')
    } else {
      document.documentElement.classList.remove('reduce-motion')
    }

    // Add high contrast mode support
    const addHighContrastSupport = () => {
      const style = document.createElement('style')
      style.textContent = `
        @media (prefers-contrast: high) {
          .text-gray-300 { color: #ffffff !important; }
          .text-gray-400 { color: #e5e7eb !important; }
          .bg-slate-800 { background-color: #000000 !important; }
          .border-gray-700 { border-color: #ffffff !important; }
        }
      `
      document.head.appendChild(style)
    }

    // Add reduced motion support
    const addReducedMotionSupport = () => {
      const style = document.createElement('style')
      style.textContent = `
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `
      document.head.appendChild(style)
    }

    // Add focus indicators
    const addFocusIndicators = () => {
      const style = document.createElement('style')
      style.textContent = `
        .keyboard-navigation *:focus {
          outline: 2px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }
      `
      document.head.appendChild(style)
    }

    addHighContrastSupport()
    addReducedMotionSupport()
    addFocusIndicators()

    // Listen for system preferences changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }))
    }

    mediaQuery.addEventListener('change', handleMotionChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange)
    }
  }, [settings])

  return (
    <div className={`enhanced-accessibility ${settings.highContrast ? 'high-contrast' : ''} ${settings.reducedMotion ? 'reduce-motion' : ''}`}>
      {children}
    </div>
  )
}

export default EnhancedAccessibility
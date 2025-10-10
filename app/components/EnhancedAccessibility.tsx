'use client'
import React, { useEffect, useState } from 'react'

interface AccessibilitySettings {
  highContrast: boolean
  reducedMotion: boolean
  fontSize: string
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

    // Setup keyboard navigation
    const setupKeyboardNavigation = () => {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation')
        }
      })

      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation')
      })
    }

    // Setup focus management
    const setupFocusManagement = () => {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          const focusable = Array.from(document.querySelectorAll(focusableElements))
          const firstFocusable = focusable[0] as HTMLElement
          const lastFocusable = focusable[focusable.length - 1] as HTMLElement

          if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
              lastFocusable?.focus()
              e.preventDefault()
            }
          } else {
            if (document.activeElement === lastFocusable) {
              firstFocusable?.focus()
              e.preventDefault()
            }
          }
        }
      })
    }

    // Apply accessibility settings
    const applySettings = () => {
      if (settings.highContrast) {
        document.body.classList.add('high-contrast')
      } else {
        document.body.classList.remove('high-contrast')
      }

      if (settings.reducedMotion) {
        document.body.classList.add('reduced-motion')
      } else {
        document.body.classList.remove('reduced-motion')
      }

      document.body.style.fontSize = settings.fontSize === 'large' ? '1.2em' : '1em'
    }

    // Initialize
    addLandmarks()
    setupKeyboardNavigation()
    setupFocusManagement()
    applySettings()

    // Listen for system preferences
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const contrastQuery = window.matchMedia('(prefers-contrast: high)')

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }))
    }

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, highContrast: e.matches }))
    }

    motionQuery.addEventListener('change', handleMotionChange)
    contrastQuery.addEventListener('change', handleContrastChange)

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange)
      contrastQuery.removeEventListener('change', handleContrastChange)
    }
  }, [settings])

  return <React.Fragment>{children}</React.Fragment>
}

export default EnhancedAccessibility
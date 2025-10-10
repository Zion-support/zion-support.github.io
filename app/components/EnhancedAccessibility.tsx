'use client'
import React, { useEffect, useState } from 'react'
interface AccessibilitySettings {
  highContrast: boolean
  reducedMotion: boolean
  fontSize: 'small' | 'normal' | 'large'
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
        main.setAttribute('aria-label', 'Main content')
      }
    }
    // Add skip links
    const addSkipLinks = () => {
      const skipLink = document.createElement('a')
      skipLink.href = '#main-content'
      skipLink.textContent = 'Skip to main content'
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold z-50'
      document.body.insertBefore(skipLink, document.body.firstChild)
    }
    // Enhance focus management
    const enhanceFocusManagement = () => {
      const style = document.createElement('style')
      style.textContent = `
        *:focus {
          outline: 2px solid #06b6d4 !important
          outline-offset: 2px !important
        }
        .sr-only {
          position: absolute
          width: 1px
          height: 1px
          padding: 0
          margin: -1px
          overflow: hidden
          clip: rect(0, 0, 0, 0)
          white-space: nowrap
          border: 0
        }
        .sr-only.focus:not-sr-only {
          position: static
          width: auto
          height: auto
          padding: inherit
          margin: inherit
          overflow: visible
          clip: auto
          white-space: normal
        }
      `
      document.head.appendChild(style)
    }
    // Apply accessibility settings
    const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
      document.documentElement.setAttribute('data-high-contrast', newSettings.highContrast.toString())
      document.documentElement.setAttribute('data-reduced-motion', newSettings.reducedMotion.toString())
      document.documentElement.setAttribute('data-font-size', newSettings.fontSize)
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
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches
    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    }))
    // Apply initial settings
    applyAccessibilitySettings({
      ...settings,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    })
    // Initialize accessibility enhancements
    addLandmarks()
    addSkipLinks()
    enhanceFocusManagement()
    setupKeyboardNavigation()
    setupFocusManagement()
    // Listen for preference changes
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const contrastQuery = window.matchMedia('(prefers-contrast: high)')
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }))
      applyAccessibilitySettings({ ...settings, reducedMotion: e.matches })
    }
    const handleContrastChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, highContrast: e.matches }))
      applyAccessibilitySettings({ ...settings, highContrast: e.matches })
    }
    motionQuery.addEventListener('change', handleMotionChange)
    contrastQuery.addEventListener('change', handleContrastChange)
    // Cleanup function
    return () => {
      const skipLink = document.querySelector('a[href="#main-content"]')
      if (skipLink) {
        skipLink.remove()
      }
      motionQuery.removeEventListener('change', handleMotionChange)
      contrastQuery.removeEventListener('change', handleContrastChange)
    }
  }, [settings])
  return <React.Fragment>{children}
}
export default EnhancedAccessibility
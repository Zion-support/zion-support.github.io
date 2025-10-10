'use client'
import React, { useEffect, useState } from 'react'

interface AccessibilitySettings {
  reducedMotion: boolean
  highContrast: boolean
  largeText: boolean
  focusVisible: boolean
}

interface EnhancedAccessibilityProps {
  children: React.ReactNode
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    reducedMotion: false,
    highContrast: false,
    largeText: false,
    focusVisible: true
  })

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement
    
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion')
    } else {
      root.classList.remove('reduced-motion')
    }
    
    if (newSettings.highContrast) {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }
    
    if (newSettings.largeText) {
      root.classList.add('large-text')
    } else {
      root.classList.remove('large-text')
    }
    
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible')
    } else {
      root.classList.remove('focus-visible')
    }
  }

  const setupKeyboardNavigation = () => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.target === document.body) {
        const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement
        if (skipLink) {
          skipLink.focus()
        }
      }
      
      // Close dropdowns with Escape
      if (event.key === 'Escape') {
        const openDropdowns = document.querySelectorAll('[aria-expanded="true"]')
        openDropdowns.forEach(dropdown => {
          (dropdown as HTMLElement).setAttribute('aria-expanded', 'false')
        })
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }

  const setupFocusManagement = () => {
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement
      if (target.matches(focusableElements)) {
        target.classList.add('focus-visible')
      }
    }

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement
      target.classList.remove('focus-visible')
    }

    document.addEventListener('focusin', handleFocusIn)
    document.addEventListener('focusout', handleFocusOut)
    
    return () => {
      document.removeEventListener('focusin', handleFocusIn)
      document.removeEventListener('focusout', handleFocusOut)
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Check for user preferences
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const contrastQuery = window.matchMedia('(prefers-contrast: high)')
    
    setSettings({
      reducedMotion: motionQuery.matches,
      highContrast: contrastQuery.matches,
      largeText: false,
      focusVisible: true
    })

    // Apply initial settings
    applyAccessibilitySettings({
      reducedMotion: motionQuery.matches,
      highContrast: contrastQuery.matches,
      largeText: false,
      focusVisible: true
    })

    // Listen for preference changes
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

    // Setup keyboard navigation
    const keyboardCleanup = setupKeyboardNavigation()

    // Setup focus management
    const focusCleanup = setupFocusManagement()

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange)
      contrastQuery.removeEventListener('change', handleContrastChange)
      keyboardCleanup()
      focusCleanup()
    }
  }, [])

  return <React.Fragment>{children}</React.Fragment>
}

export default EnhancedAccessibility
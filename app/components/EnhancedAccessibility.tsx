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

    const addSkipLinks = () => {
      const skipLink = document.createElement('a')
      skipLink.href = '#main-content'
      skipLink.textContent = 'Skip to main content'
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold z-50'
      document.body.insertBefore(skipLink, document.body.firstChild)
    }

    const enhanceFocusManagement = () => {
      // Add focus indicators
      const style = document.createElement('style')
      style.textContent = `
        *:focus {
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
        .sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: inherit;
          margin: inherit;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
      `
      document.head.appendChild(style)
    }

    const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
      const root = document.documentElement
      
      if (newSettings.highContrast) {
        root.classList.add('high-contrast')
      } else {
        root.classList.remove('high-contrast')
      }
      
      if (newSettings.reducedMotion) {
        root.classList.add('reduced-motion')
      } else {
        root.classList.remove('reduced-motion')
      }
      
      root.classList.remove('font-small', 'font-normal', 'font-large')
      root.classList.add(`font-${newSettings.fontSize}`)
    }

    const setupKeyboardNavigation = () => {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement
          if (skipLink) {
            skipLink.focus()
            event.preventDefault()
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
      // Focus visible polyfill
      const handleFocusIn = (event: FocusEvent) => {
        if (event.target instanceof HTMLElement) {
          event.target.classList.add('focus-visible')
        }
      }
      
      const handleFocusOut = (event: FocusEvent) => {
        if (event.target instanceof HTMLElement) {
          event.target.classList.remove('focus-visible')
        }
      }
      
      document.addEventListener('focusin', handleFocusIn)
      document.addEventListener('focusout', handleFocusOut)
      
      return () => {
        document.removeEventListener('focusin', handleFocusIn)
        document.removeEventListener('focusout', handleFocusOut)
      }
    }

    // Initialize accessibility features
    addLandmarks()
    addSkipLinks()
    enhanceFocusManagement()
    applyAccessibilitySettings(settings)

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

    // Setup keyboard navigation
    const cleanupKeyboard = setupKeyboardNavigation()

    // Setup focus management
    const cleanupFocus = setupFocusManagement()

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange)
      contrastQuery.removeEventListener('change', handleContrastChange)
      cleanupKeyboard?.()
      cleanupFocus?.()
    }
  }, [settings])

  return <React.Fragment>{children}</React.Fragment>
}

EnhancedAccessibility.displayName = 'EnhancedAccessibility'

export default EnhancedAccessibility
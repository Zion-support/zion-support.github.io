'use client'
import React, { useEffect } from 'react'

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean
  enableScreenReaderSupport?: boolean
  enableHighContrast?: boolean
  enableFocusManagement?: boolean
  children: React.ReactNode
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = false,
  enableFocusManagement = true,
  children
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Add skip links
    const addSkipLinks = () => {
      const skipLink = document.createElement('a')
      skipLink.href = '#main-content'
      skipLink.textContent = 'Skip to main content'
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-md z-50'
      document.body.insertBefore(skipLink, document.body.firstChild)
    }

    // Add ARIA labels to interactive elements
    const addAriaLabels = () => {
      const buttons = document.querySelectorAll('button:not([aria-label])')
      buttons.forEach(button => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button')
        }
      })
    }

    // Add focus management
    const addFocusManagement = () => {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      const focusable = document.querySelectorAll(focusableElements)
      focusable.forEach(element => {
        element.addEventListener('keydown', (e) => {
          if (e.key === 'Tab') {
            element.classList.add('focus-visible')
          }
        })
        element.addEventListener('blur', () => {
          element.classList.remove('focus-visible')
        })
      })
    }

    // Add high contrast mode
    const addHighContrastMode = () => {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)')
      const updateContrast = (e) => {
        if (e.matches) {
          document.body.classList.add('high-contrast')
        } else {
          document.body.classList.remove('high-contrast')
        }
      }
      mediaQuery.addListener(updateContrast)
      updateContrast(mediaQuery)
    }

    // Add screen reader announcements
    const addScreenReaderAnnouncements = () => {
      const announce = (message) => {
        const announcement = document.createElement('div')
        announcement.setAttribute('aria-live', 'polite')
        announcement.setAttribute('aria-atomic', 'true')
        announcement.className = 'sr-only'
        announcement.textContent = message
        document.body.appendChild(announcement)
        setTimeout(() => {
          document.body.removeChild(announcement)
        }, 1000)
      }
      // Announce page changes
      window.addEventListener('popstate', () => {
        announce('Page changed')
      })
    }

    // Initialize all accessibility features
    if (enableKeyboardNavigation) addSkipLinks()
    if (enableScreenReaderSupport) addAriaLabels()
    if (enableFocusManagement) addFocusManagement()
    if (enableHighContrast) addHighContrastMode()
    if (enableScreenReaderSupport) addScreenReaderAnnouncements()

    return () => {
      // Cleanup code if needed
    }
  }, [enableKeyboardNavigation, enableScreenReaderSupport, enableHighContrast, enableFocusManagement])

  return <>{children}</>
}

export default AccessibilityEnhancer

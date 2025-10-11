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
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          document.body.classList.add('keyboard-navigation')
        }
      }

      const handleMouseDown = () => {
        document.body.classList.remove('keyboard-navigation')
      }

      document.addEventListener('keydown', handleKeyDown)
      document.addEventListener('mousedown', handleMouseDown)

      return () => {
        document.removeEventListener('keydown', handleKeyDown)
        document.removeEventListener('mousedown', handleMouseDown)
      }
    }
  }, [enableKeyboardNavigation])

  useEffect(() => {
    if (enableScreenReaderSupport) {
      // Add screen reader specific attributes
      const mainContent = document.querySelector('main')
      if (mainContent) {
        mainContent.setAttribute('role', 'main')
        mainContent.setAttribute('aria-label', 'Main content')
      }

      // Add skip links
      const skipLink = document.createElement('a')
      skipLink.href = '#main-content'
      skipLink.textContent = 'Skip to main content'
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'
      document.body.insertBefore(skipLink, document.body.firstChild)
    }
  }, [enableScreenReaderSupport])

  useEffect(() => {
    if (enableHighContrast) {
      document.body.classList.add('high-contrast')
    } else {
      document.body.classList.remove('high-contrast')
    }
  }, [enableHighContrast])

  useEffect(() => {
    if (enableFocusManagement) {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      
      const handleTabKey = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          const focusable = Array.from(document.querySelectorAll(focusableElements))
          const firstFocusable = focusable[0] as HTMLElement
          const lastFocusable = focusable[focusable.length - 1] as HTMLElement

          if (event.shiftKey) {
            if (document.activeElement === firstFocusable) {
              lastFocusable?.focus()
              event.preventDefault()
            }
          } else {
            if (document.activeElement === lastFocusable) {
              firstFocusable?.focus()
              event.preventDefault()
            }
          }
        }
      }

      document.addEventListener('keydown', handleTabKey)
      return () => document.removeEventListener('keydown', handleTabKey)
    }
  }, [enableFocusManagement])

  return (
    <div className="accessibility-enhanced">
      {children}
    </div>
  )
}

export default AccessibilityEnhancer
'use client'
import React, { useEffect } from 'react'

interface AccessibilityEnhancerProps {
  children: React.ReactNode
  enableKeyboardNavigation?: boolean
  enableScreenReaderSupport?: boolean
  enableHighContrast?: boolean
  enableFocusManagement?: boolean
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = false,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    // Keyboard navigation enhancements
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const skipLink = document.querySelector('[href="#main-content"]') as HTMLElement
          if (skipLink) {
            skipLink.focus()
            event.preventDefault()
          }
        }
      }

      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [enableKeyboardNavigation])

  useEffect(() => {
    // Screen reader support
    if (enableScreenReaderSupport) {
      // Add ARIA landmarks
      const main = document.querySelector('main')
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main')
      }

      // Add skip links
      const skipLink = document.querySelector('[href="#main-content"]')
      if (skipLink && !skipLink.getAttribute('aria-label')) {
        skipLink.setAttribute('aria-label', 'Skip to main content')
      }
    }
  }, [enableScreenReaderSupport])

  useEffect(() => {
    // High contrast mode
    if (enableHighContrast) {
      document.documentElement.classList.add('high-contrast')
    } else {
      document.documentElement.classList.remove('high-contrast')
    }
  }, [enableHighContrast])

  useEffect(() => {
    // Focus management
    if (enableFocusManagement) {
      const manageFocus = () => {
        const focusableElements = document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )

        focusableElements.forEach(element => {
          if (!element.getAttribute('tabindex')) {
            element.setAttribute('tabindex', '0')
          }
        })
      }

      manageFocus()
    }
  }, [enableFocusManagement])

  return <>{children}</>
}

export default AccessibilityEnhancer

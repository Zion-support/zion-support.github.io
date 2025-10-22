'use client'
import React, { useEffect } from 'react'

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean
  enableScreenReader?: boolean
  enableHighContrast?: boolean
  enableFocusIndicators?: boolean
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = false,
  enableFocusIndicators = true
}) => {
  useEffect(() => {
    if (enableKeyboardNavigation && typeof window !== 'undefined') {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement
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
    if (enableHighContrast && typeof window !== 'undefined') {
      document.documentElement.classList.add('high-contrast')
      return () => document.documentElement.classList.remove('high-contrast')
    }
  }, [enableHighContrast])

  useEffect(() => {
    if (enableFocusIndicators && typeof window !== 'undefined') {
      document.documentElement.classList.add('focus-visible')
      return () => document.documentElement.classList.remove('focus-visible')
    }
  }, [enableFocusIndicators])

  return null
}

export default AccessibilityEnhancer
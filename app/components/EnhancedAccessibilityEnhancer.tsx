'use client'
import React, { useEffect } from 'react'

interface AccessibilityEnhancerProps {
  children: React.ReactNode
  enableKeyboardNavigation?: boolean
  enableScreenReader?: boolean
  enableHighContrast?: boolean
  enableFocusManagement?: boolean
}

const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    if (enableKeyboardNavigation) {
      // Add keyboard navigation support
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          // Ensure focus is visible
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
    if (enableScreenReader) {
      // Add screen reader announcements
      const announceToScreenReader = (message: string) => {
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

      // Make announcement function available globally
      ;(window as Window & { announceToScreenReader?: (message: string) => void }).announceToScreenReader = announceToScreenReader
    }
  }, [enableScreenReader])

  useEffect(() => {
    if (enableHighContrast) {
      // Add high contrast mode support
      const mediaQuery = window.matchMedia('(prefers-contrast: high)')
      
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.body.classList.add('high-contrast')
        } else {
          document.body.classList.remove('high-contrast')
        }
      }

      mediaQuery.addEventListener('change', handleContrastChange)
      
      // Apply initial state
      if (mediaQuery.matches) {
        document.body.classList.add('high-contrast')
      }

      return () => {
        mediaQuery.removeEventListener('change', handleContrastChange)
      }
    }
  }, [enableHighContrast])

  useEffect(() => {
    if (enableFocusManagement) {
      // Manage focus for better accessibility
      const manageFocus = () => {
        const focusableElements = document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        
        // Add focus indicators
        focusableElements.forEach(element => {
          element.addEventListener('focus', () => {
            element.classList.add('focus-visible')
          })
          
          element.addEventListener('blur', () => {
            element.classList.remove('focus-visible')
          })
        })
      }

      // Run on mount and when DOM changes
      manageFocus()
      
      const observer = new MutationObserver(manageFocus)
      observer.observe(document.body, { childList: true, subtree: true })

      return () => {
        observer.disconnect()
      }
    }
  }, [enableFocusManagement])

  return <>{children}</>
}

export default EnhancedAccessibilityEnhancer
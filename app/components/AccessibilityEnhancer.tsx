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
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    // Keyboard navigation
    if (enableKeyboardNavigation && typeof window !== 'undefined') {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
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

    // Screen reader support
    if (enableScreenReaderSupport && typeof window !== 'undefined') {
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

      addLandmarks()
    }

    // High contrast support
    if (enableHighContrast && typeof window !== 'undefined') {
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

    // Focus management
    if (enableFocusManagement && typeof window !== 'undefined') {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      
      const trapFocus = (container: HTMLElement) => {
        const focusableContent = container.querySelectorAll(focusableElements)
        const firstFocusableElement = focusableContent[0] as HTMLElement
        const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement

        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstFocusableElement) {
                lastFocusableElement?.focus()
                e.preventDefault()
              }
            } else {
              if (document.activeElement === lastFocusableElement) {
                firstFocusableElement?.focus()
                e.preventDefault()
              }
            }
          }
        }

        container.addEventListener('keydown', handleTabKey)

        return () => {
          container.removeEventListener('keydown', handleTabKey)
        }
      }

      // Apply focus management to modals and dropdowns
      const modals = document.querySelectorAll('[role="dialog"], [role="menu"]')
      modals.forEach(modal => {
        trapFocus(modal as HTMLElement)
      })
    }
  }, [enableKeyboardNavigation, enableScreenReaderSupport, enableHighContrast, enableFocusManagement])

  return <React.Fragment>{children}</React.Fragment>
}

export default AccessibilityEnhancer
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

    // Keyboard navigation support
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
    if (typeof window === 'undefined') return

    // Screen reader support
    if (enableScreenReaderSupport) {
      // Add skip links
      const skipLinks = document.createElement('div')
      skipLinks.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'
      skipLinks.innerHTML = `
        <a href="#main-content">Skip to main content</a>
        <a href="#navigation">Skip to navigation</a>
        <a href="#footer">Skip to footer</a>
      `
      document.body.insertBefore(skipLinks, document.body.firstChild)

      // Add ARIA landmarks
      const main = document.querySelector('main')
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main')
        main.setAttribute('id', 'main-content')
      }

      return () => {
        if (skipLinks.parentNode) {
          skipLinks.parentNode.removeChild(skipLinks)
        }
      }
    }
  }, [enableScreenReaderSupport])

  useEffect(() => {
    if (typeof window === 'undefined') return

    // High contrast mode
    if (enableHighContrast) {
      document.body.classList.add('high-contrast')
      return () => {
        document.body.classList.remove('high-contrast')
      }
    }
  }, [enableHighContrast])

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Focus management
    if (enableFocusManagement) {
      const handleFocusIn = (event: FocusEvent) => {
        const target = event.target as HTMLElement
        if (target && target.scrollIntoView) {
          target.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }

      document.addEventListener('focusin', handleFocusIn)
      return () => {
        document.removeEventListener('focusin', handleFocusIn)
      }
    }
  }, [enableFocusManagement])

  return <>{children}</>
}

export default AccessibilityEnhancer
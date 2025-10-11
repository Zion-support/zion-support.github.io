'use client'
import React, { useEffect, useState } from 'react'

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
  const [isHighContrast, setIsHighContrast] = useState(enableHighContrast)

  useEffect(() => {
    if (enableHighContrast) {
      document.documentElement.classList.add('high-contrast')
    } else {
      document.documentElement.classList.remove('high-contrast')
    }

    return () => {
      document.documentElement.classList.remove('high-contrast')
    }
  }, [enableHighContrast])

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
      // Add screen reader specific enhancements
      const skipLinks = document.querySelectorAll('a[href^="#"]')
      skipLinks.forEach(link => {
        link.setAttribute('aria-label', 'Skip to main content')
      })
    }
  }, [enableScreenReaderSupport])

  useEffect(() => {
    if (enableFocusManagement) {
      // Manage focus for better accessibility
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      
      const handleFocus = (event: FocusEvent) => {
        const target = event.target as HTMLElement
        if (target && target.matches(focusableElements)) {
          target.classList.add('focus-visible')
        }
      }

      const handleBlur = (event: FocusEvent) => {
        const target = event.target as HTMLElement
        if (target && target.matches(focusableElements)) {
          target.classList.remove('focus-visible')
        }
      }

      document.addEventListener('focusin', handleFocus)
      document.addEventListener('focusout', handleBlur)

      return () => {
        document.removeEventListener('focusin', handleFocus)
        document.removeEventListener('focusout', handleBlur)
      }
    }
  }, [enableFocusManagement])

  return (
    <div className={`accessibility-enhancer ${isHighContrast ? 'high-contrast' : ''}`}>
      {children}
    </div>
  )
}

export default AccessibilityEnhancer
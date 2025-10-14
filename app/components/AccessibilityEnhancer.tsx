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

      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [enableKeyboardNavigation])

  useEffect(() => {
    if (enableScreenReaderSupport) {
      // Add screen reader support
      const addScreenReaderSupport = () => {
        const style = document.createElement('style')
        style.textContent = `
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
        `
        document.head.appendChild(style)
      }

      addScreenReaderSupport()
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
      
      const handleFocus = (e: FocusEvent) => {
        const target = e.target as HTMLElement
        if (target.matches(focusableElements)) {
          target.style.outline = '2px solid #06b6d4'
          target.style.outlineOffset = '2px'
        }
      }

      const handleBlur = (e: FocusEvent) => {
        const target = e.target as HTMLElement
        if (target.matches(focusableElements)) {
          target.style.outline = 'none'
        }
      }

      document.addEventListener('focus', handleFocus, true)
      document.addEventListener('blur', handleBlur, true)

      return () => {
        document.removeEventListener('focus', handleFocus, true)
        document.removeEventListener('blur', handleBlur, true)
      }
    }
  }, [enableFocusManagement])

  return <>{children}</>
}

export default AccessibilityEnhancer
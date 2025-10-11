'use client'
import React, { useEffect } from 'react'

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Add high contrast mode support
    const addHighContrastSupport = () => {
      const style = document.createElement('style')
      style.textContent = `
        @media (prefers-contrast: high) {
          .text-gray-300 { color: #ffffff !important; }
          .text-gray-400 { color: #e5e7eb !important; }
          .bg-slate-800 { background-color: #000000 !important; }
          .border-gray-700 { border-color: #ffffff !important; }
        }
      `
      document.head.appendChild(style)
    }

    // Add reduced motion support
    const addReducedMotionSupport = () => {
      const style = document.createElement('style')
      style.textContent = `
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `
      document.head.appendChild(style)
    }

    // Add focus management
    const addFocusManagement = () => {
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
    }

    // Add keyboard navigation support
    const addKeyboardNavigation = () => {
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
    }

    addHighContrastSupport()
    addReducedMotionSupport()
    addFocusManagement()
    addKeyboardNavigation()
  }, [])

  return <>{children}</>
}

export default EnhancedAccessibility
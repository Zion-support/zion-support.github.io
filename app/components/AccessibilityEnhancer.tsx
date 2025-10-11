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
    if (typeof window !== 'undefined') {
      // Add keyboard navigation support
      if (enableKeyboardNavigation) {
        document.body.classList.add('keyboard-navigation')
      }

      // Add screen reader support
      if (enableScreenReaderSupport) {
        // Add skip links
        const skipLinks = document.createElement('div')
        skipLinks.innerHTML = `
          <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-lg z-50">
            Skip to main content
          </a>
        `
        document.body.insertBefore(skipLinks, document.body.firstChild)
      }

      // Add high contrast mode
      if (enableHighContrast) {
        document.body.classList.add('high-contrast')
      }

      // Add focus management
      if (enableFocusManagement) {
        const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        const focusableContent = document.querySelectorAll(focusableElements)
        
        focusableContent.forEach(element => {
          element.addEventListener('focus', () => {
            element.classList.add('focus-visible')
          })
          element.addEventListener('blur', () => {
            element.classList.remove('focus-visible')
          })
        })
      }
    }
  }, [enableKeyboardNavigation, enableScreenReaderSupport, enableHighContrast, enableFocusManagement])

  return <>{children}</>
}

export default AccessibilityEnhancer

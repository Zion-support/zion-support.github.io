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
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          const openDropdowns = document.querySelectorAll('[aria-expanded="true"]')
          openDropdowns.forEach(dropdown => {
            (dropdown as HTMLElement).setAttribute('aria-expanded', 'false')
          })
        }
      }
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [enableKeyboardNavigation])

  useEffect(() => {
    // Screen reader support
    if (enableScreenReaderSupport && typeof window !== 'undefined') {
      const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement
      if (skipLink) {
        skipLink.addEventListener('click', (e) => {
          e.preventDefault()
          const mainContent = document.getElementById('main-content')
          if (mainContent) {
            mainContent.focus()
            mainContent.scrollIntoView()
          }
        })
      }
    }
  }, [enableScreenReaderSupport])

  useEffect(() => {
    // High contrast mode
    if (enableHighContrast && typeof window !== 'undefined') {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)')
      const updateHighContrast = () => {
        if (prefersHighContrast.matches) {
          document.documentElement.classList.add('high-contrast')
        } else {
          document.documentElement.classList.remove('high-contrast')
        }
      }
      
      updateHighContrast()
      prefersHighContrast.addEventListener('change', updateHighContrast)
      
      return () => prefersHighContrast.removeEventListener('change', updateHighContrast)
    }
  }, [enableHighContrast])

  useEffect(() => {
    // Focus management
    if (enableFocusManagement && typeof window !== 'undefined') {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      
      const trapFocus = (container: HTMLElement) => {
        const focusableContent = container.querySelectorAll(focusableElements)
        const firstFocusableElement = focusableContent[0] as HTMLElement
        const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement

        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key !== 'Tab') return
          
          if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus()
              e.preventDefault()
            }
          } else {
            if (document.activeElement === lastFocusableElement) {
              firstFocusableElement.focus()
              e.preventDefault()
            }
          }
        }

        container.addEventListener('keydown', handleTabKey)
        return () => container.removeEventListener('keydown', handleTabKey)
      }

      // Apply focus trapping to modal dialogs
      const modals = document.querySelectorAll('[role="dialog"]')
      const cleanupFunctions: (() => void)[] = []
      
      modals.forEach(modal => {
        const cleanup = trapFocus(modal as HTMLElement)
        cleanupFunctions.push(cleanup)
      })

      return () => {
        cleanupFunctions.forEach(cleanup => cleanup())
      }
    }
  }, [enableFocusManagement])

  return (
    <div className="accessibility-enhanced">
      {children}
    </div>
  )
}

export default AccessibilityEnhancer
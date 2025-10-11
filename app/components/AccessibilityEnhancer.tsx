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

      // Announce page changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            const addedNode = mutation.addedNodes[0] as Element
            if (addedNode && addedNode.getAttribute && addedNode.getAttribute('aria-label')) {
              announceToScreenReader(addedNode.getAttribute('aria-label') || '')
            }
          }
        })
      })

      observer.observe(document.body, {
        childList: true,
        subtree: true
      })

      return () => {
        observer.disconnect()
      }
    }
  }, [enableScreenReaderSupport])

  useEffect(() => {
    if (enableFocusManagement) {
      // Manage focus for modals and dropdowns
      const manageFocus = () => {
        const focusableElements = document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                lastElement?.focus()
                e.preventDefault()
              }
            } else {
              if (document.activeElement === lastElement) {
                firstElement?.focus()
                e.preventDefault()
              }
            }
          }
        }

        document.addEventListener('keydown', handleTabKey)

        return () => {
          document.removeEventListener('keydown', handleTabKey)
        }
      }

      const cleanup = manageFocus()
      return cleanup
    }
  }, [enableFocusManagement])

  return (
    <div className={`accessibility-enhanced ${isHighContrast ? 'high-contrast' : ''}`}>
      {children}
    </div>
  )
}

export default AccessibilityEnhancer
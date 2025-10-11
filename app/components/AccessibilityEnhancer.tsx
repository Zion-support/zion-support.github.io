'use client'
import React, { useEffect } from 'react'

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean
  enableScreenReaderSupport?: boolean
  enableHighContrast?: boolean
  enableFocusManagement?: boolean
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    // Keyboard navigation enhancement
    if (enableKeyboardNavigation) {
      const handleKeyDown = (e: KeyboardEvent) => {
        // Skip to main content with Enter key
        if (e.key === 'Enter' && e.target instanceof HTMLElement) {
          if (e.target.classList.contains('skip-link')) {
            const target = document.querySelector(e.target.getAttribute('href') || '')
            if (target) {
              target.focus()
              target.scrollIntoView()
            }
          }
        }
      }

      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }

    // Add screen reader support
    if (enableScreenReaderSupport) {
      // Add skip links
      const skipLinks = document.createElement('div')
      skipLinks.className = 'sr-only'
      skipLinks.innerHTML = `
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <a href="#navigation" class="skip-link">Skip to navigation</a>
      `
      document.body.insertBefore(skipLinks, document.body.firstChild)

      // Add ARIA labels to interactive elements
      const buttons = document.querySelectorAll('button:not([aria-label])')
      buttons.forEach(button => {
        if (!button.getAttribute('aria-label')) {
          button.setAttribute('aria-label', button.textContent || 'Button')
        }
      })
    }

    // High contrast mode
    if (enableHighContrast) {
      const style = document.createElement('style')
      style.textContent = `
        .high-contrast {
          filter: contrast(150%) brightness(1.2);
        }
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          z-index: 1000;
        }
        .skip-link:focus {
          top: 6px;
        }
      `
      document.head.appendChild(style)
    }

    // Focus management
    if (enableFocusManagement) {
      const focusableElements = document.querySelectorAll(
        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      )
      
      focusableElements.forEach(element => {
        element.addEventListener('focus', (e) => {
          e.target.style.outline = '2px solid #3b82f6'
          e.target.style.outlineOffset = '2px'
        })
        
        element.addEventListener('blur', (e) => {
          e.target.style.outline = 'none'
        })
      })
    }

    // Cleanup
    return () => {
      // Remove any added elements or event listeners
      const skipLinks = document.querySelector('.sr-only')
      if (skipLinks) {
        skipLinks.remove()
      }
    }
  }, [enableKeyboardNavigation, enableScreenReaderSupport, enableHighContrast, enableFocusManagement])

  return null // This component doesn't render anything visible
}

export default AccessibilityEnhancer
'use client'
import React, { useEffect, useState } from 'react'

const AccessibilityEnhancer: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [fontSize, setFontSize] = useState(16)

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches
    
    setIsReducedMotion(prefersReducedMotion)
    setIsHighContrast(prefersHighContrast)

    // Apply accessibility enhancements
    applyAccessibilityEnhancements()

    // Listen for preference changes
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const contrastQuery = window.matchMedia('(prefers-contrast: high)')
    
    const handleMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches)
    const handleContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches)
    
    motionQuery.addEventListener('change', handleMotionChange)
    contrastQuery.addEventListener('change', handleContrastChange)

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange)
      contrastQuery.removeEventListener('change', handleContrastChange)
    }
  }, [])

  const applyAccessibilityEnhancements = () => {
    // Add focus indicators
    const style = document.createElement('style')
    style.textContent = `
      /* Enhanced focus indicators */
      *:focus {
        outline: 2px solid #06b6d4 !important;
        outline-offset: 2px !important;
      }
      
      /* Skip links */
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        border-radius: 4px;
      }
      
      .skip-link:focus {
        top: 6px;
      }
      
      /* High contrast mode */
      .high-contrast {
        filter: contrast(150%) brightness(1.2);
      }
      
      /* Reduced motion */
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
      
      /* Focus trap for modals */
      .focus-trap {
        position: relative;
      }
      
      /* Screen reader only content */
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

    // Add skip links
    addSkipLinks()
    
    // Enhance form accessibility
    enhanceFormAccessibility()
    
    // Add ARIA landmarks
    addAriaLandmarks()
    
    // Enhance keyboard navigation
    enhanceKeyboardNavigation()
  }

  const addSkipLinks = () => {
    const skipLinks = document.createElement('div')
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    `
    document.body.insertBefore(skipLinks, document.body.firstChild)
  }

  const enhanceFormAccessibility = () => {
    // Add labels to form inputs without labels
    const inputs = document.querySelectorAll('input:not([type="hidden"]):not([aria-label]):not([aria-labelledby])')
    inputs.forEach((input, index) => {
      if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
        const placeholder = input.getAttribute('placeholder')
        if (placeholder) {
          input.setAttribute('aria-label', placeholder)
        } else {
          input.setAttribute('aria-label', `Input field ${index + 1}`)
        }
      }
    })

    // Add error messages to form fields
    const requiredInputs = document.querySelectorAll('input[required]')
    requiredInputs.forEach(input => {
      if (!input.getAttribute('aria-describedby')) {
        const errorId = `error-${Math.random().toString(36).substr(2, 9)}`
        input.setAttribute('aria-describedby', errorId)
        input.setAttribute('aria-invalid', 'false')
      }
    })
  }

  const addAriaLandmarks = () => {
    // Add main landmark
    const main = document.querySelector('main')
    if (main && !main.getAttribute('id')) {
      main.setAttribute('id', 'main-content')
      main.setAttribute('role', 'main')
    }

    // Add navigation landmark
    const nav = document.querySelector('nav')
    if (nav && !nav.getAttribute('id')) {
      nav.setAttribute('id', 'navigation')
      nav.setAttribute('role', 'navigation')
    }

    // Add footer landmark
    const footer = document.querySelector('footer')
    if (footer && !footer.getAttribute('id')) {
      footer.setAttribute('id', 'footer')
      footer.setAttribute('role', 'contentinfo')
    }
  }

  const enhanceKeyboardNavigation = () => {
    // Add keyboard navigation for custom components
    document.addEventListener('keydown', (e) => {
      // Escape key to close modals
      if (e.key === 'Escape') {
        const modals = document.querySelectorAll('[role="dialog"]')
        modals.forEach(modal => {
          if (modal.getAttribute('aria-hidden') === 'false') {
            const closeButton = modal.querySelector('[aria-label="Close"]')
            if (closeButton) {
              (closeButton as HTMLElement).click()
            }
          }
        })
      }

      // Tab navigation enhancement
      if (e.key === 'Tab') {
        const focusableElements = document.querySelectorAll(
          'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        )
        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    })
  }

  useEffect(() => {
    // Apply high contrast mode
    if (isHighContrast) {
      document.body.classList.add('high-contrast')
    } else {
      document.body.classList.remove('high-contrast')
    }

    // Apply reduced motion
    if (isReducedMotion) {
      document.body.classList.add('reduced-motion')
    } else {
      document.body.classList.remove('reduced-motion')
    }

    // Apply font size
    document.documentElement.style.fontSize = `${fontSize}px`
  }, [isHighContrast, isReducedMotion, fontSize])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyboardShortcuts = (e: KeyboardEvent) => {
      // Alt + 1: Skip to main content
      if (e.altKey && e.key === '1') {
        e.preventDefault()
        const main = document.getElementById('main-content')
        if (main) main.focus()
      }

      // Alt + 2: Skip to navigation
      if (e.altKey && e.key === '2') {
        e.preventDefault()
        const nav = document.getElementById('navigation')
        if (nav) nav.focus()
      }

      // Alt + 3: Skip to footer
      if (e.altKey && e.key === '3') {
        e.preventDefault()
        const footer = document.getElementById('footer')
        if (footer) footer.focus()
      }

      // Alt + +: Increase font size
      if (e.altKey && e.key === '+') {
        e.preventDefault()
        setFontSize(prev => Math.min(prev + 2, 24))
      }

      // Alt + -: Decrease font size
      if (e.altKey && e.key === '-') {
        e.preventDefault()
        setFontSize(prev => Math.max(prev - 2, 12))
      }

      // Alt + 0: Reset font size
      if (e.altKey && e.key === '0') {
        e.preventDefault()
        setFontSize(16)
      }
    }

    document.addEventListener('keydown', handleKeyboardShortcuts)
    return () => document.removeEventListener('keydown', handleKeyboardShortcuts)
  }, [])

  return null
}

export default AccessibilityEnhancer
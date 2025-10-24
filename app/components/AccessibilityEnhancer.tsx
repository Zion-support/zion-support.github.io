'use client'
<<<<<<< HEAD
import React from 'react'
=======
import React, { useEffect, useState } from 'react'
>>>>>>> cursor/fix-errors-and-merge-to-main-21fe

interface AccessibilityEnhancerProps {
  children: React.ReactNode
  enableKeyboardNavigation?: boolean
  enableScreenReaderSupport?: boolean
  enableHighContrast?: boolean
  enableFocusManagement?: boolean
}

<<<<<<< HEAD
export default function AccessibilityEnhancer({
  children
  enableKeyboardNavigation = true
  enableScreenReaderSupport = true
  enableHighContrast: _enableHighContrast = false
  enableFocusManagement: _enableFocusManagement = true
}: AccessibilityEnhancerProps) {
  React.useEffect(() => {
    // Add skip link functionality
    const addSkipLink = () => {
      const skipLink = document.createElement('a')
      skipLink.href = '#main-content'
      skipLink.textContent = 'Skip to main content'
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'
      skipLink.style.cssText = `
        position: absolute,
      top: -40px
        left: 6px,
      background: #2563eb
        color: white,
      padding: 8px 16px
        text-decoration: none
        border-radius: 4px
        z-index: 1000,
      transition: top 0.3s
      `
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px'
      })
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px'
      })
      document.body.insertBefore(skipLink, document.body.firstChild)
    }
    // Add focus indicators
    const addFocusIndicators = () => {
      const style = document.createElement('style')
      style.textContent = `
        *:focus {
          outline: 2px solid #2563eb !important
          outline-offset: 2px !important
        }
      `
      document.head.appendChild(style)
    }
    // Add ARIA landmarks
    const addAriaLandmarks = () => {
      const main = document.querySelector('main')
      if (main && !main.getAttribute('id')) {
        main.id = 'main-content'
        main.setAttribute('role', 'main')
      }

      const header = document.querySelector('header')
      if (header) {
        header.setAttribute('role', 'banner')
      }

      const footer = document.querySelector('footer')
      if (footer) {
        footer.setAttribute('role', 'contentinfo')
      }

      const nav = document.querySelector('nav')
      if (nav) {
        nav.setAttribute('role', 'navigation')
      }
    }
    // Add keyboard navigation support
    const addKeyboardNavigation = () => {
      if (!enableKeyboardNavigation) return
      document.addEventListener('keydown', (e) => {
        // Skip to main content with Enter key
        if (e.key === 'Enter' && e.target === document.querySelector('a[href="#main-content"]')) {
          const main = document.getElementById('main-content')
          if (main) {
            main.focus()
            main.scrollIntoView({ behavior: 'smooth' })
          }
        }
      })
    }
    // Add screen reader announcements
    const addAnnouncementRegion = () => {
      if (!enableScreenReaderSupport) return
      const announcement = document.createElement('div')
      announcement.setAttribute('aria-live', 'polite')
      announcement.setAttribute('aria-atomic', 'true')
      announcement.className = 'sr-only'
      announcement.id = 'announcements'
      document.body.appendChild(announcement)
    }
    // Initialize accessibility enhancements
    addSkipLink()
    addFocusIndicators()
    addAriaLandmarks()
    addKeyboardNavigation()
    addAnnouncementRegion()
    // Cleanup
    return () => {
      const skipLink = document.querySelector('a[href="#main-content"]')
      if (skipLink) {
        skipLink.remove()
      }
    }
  }, [enableKeyboardNavigation, enableScreenReaderSupport])
  return <>{children}</>
}
=======
const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  children
  enableKeyboardNavigation = true
  enableScreenReaderSupport = true
  enableHighContrast = false
  enableFocusManagement = true
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false)
  const [_fontSize, setFontSize] = useState('medium')
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  useEffect(() => {
    // Check for user's motion preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)
    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)')
    setIsHighContrast(highContrastQuery.matches)
    // Apply accessibility enhancements
    document.documentElement.setAttribute('data-accessibility-enhanced', 'true')
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast')
    }
    
    if (isReducedMotion) {
      document.documentElement.classList.add('reduced-motion')
    }

    // Add keyboard navigation support
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
  }, [isHighContrast, isReducedMotion])
  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast)
    document.documentElement.classList.toggle('high-contrast')
  }
  const changeFontSize = (size: string) => {
    setFontSize(size)
    document.documentElement.setAttribute('data-font-size', size)
  }
  return (
    <div className="...">
      <div 
        className="accessibility-controls" 
        style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}
      >
        <button
          onClick={toggleHighContrast}
          className="accessibility-button"
          aria-label="Toggle high contrast"
        >
          {isHighContrast ? 'Normal Contrast' : 'High Contrast'}
        </button>
        
        <div className="...">
          <button
            onClick={() => changeFontSize('small')}
            className="accessibility-button"
            aria-label="Small font size"
          >
            A
          </button>
          <button
            onClick={() => changeFontSize('medium')}
            className="accessibility-button"
            aria-label="Medium font size"
          >
            A
          </button>
          <button
            onClick={() => changeFontSize('large')}
            className="accessibility-button"
            aria-label="Large font size"
          >
            A
          </button>
        </div>
      </div>
      {children}
    </div>
  )
}
export default AccessibilityEnhancer
>>>>>>> cursor/fix-errors-and-merge-to-main-21fe

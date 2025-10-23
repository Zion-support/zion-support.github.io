'use client'
import React, { useEffect, useState } from 'react'

const AccessibilityEnhancer: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false)
  const [fontSize, setFontSize] = useState(16)
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    // Check user preferences
    const checkUserPreferences = () => {
      // Check for high contrast preference
      if (window.matchMedia('(prefers-contrast: high)').matches) {
        setIsHighContrast(true)
        document.documentElement.classList.add('high-contrast')
      }

      // Check for reduced motion preference
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setIsReducedMotion(true)
        document.documentElement.classList.add('reduced-motion')
      }

      // Check for color scheme preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark-theme')
      }
    }

    // Enhance keyboard navigation
    const enhanceKeyboardNavigation = () => {
      // Add skip links
      const skipLink = document.createElement('a')
      skipLink.href = '#main-content'
      skipLink.textContent = 'Skip to main content'
      skipLink.className = 'skip-link'
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        transition: top 0.3s;
      `
      document.body.insertBefore(skipLink, document.body.firstChild)
    }

    // Add ARIA landmarks
    const addARIALandmarks = () => {
      // Add main landmark
      const main = document.querySelector('main')
      if (!main) {
        const mainContent = document.querySelector('#main-content') || document.querySelector('.main-content')
        if (mainContent) {
          mainContent.setAttribute('role', 'main')
        }
      }

      // Add navigation landmarks
      const navs = document.querySelectorAll('nav')
      navs.forEach((nav, index) => {
        if (!nav.getAttribute('aria-label')) {
          nav.setAttribute('aria-label', `Navigation ${index + 1}`)
        }
      })

      // Add banner landmark
      const header = document.querySelector('header')
      if (header) {
        header.setAttribute('role', 'banner')
      }

      // Add contentinfo landmark
      const footer = document.querySelector('footer')
      if (footer) {
        footer.setAttribute('role', 'contentinfo')
      }
    }

    // Enhance images
    const enhanceImages = () => {
      const images = document.querySelectorAll('img')
      images.forEach((img) => {
        const imageElement = img as HTMLImageElement
        
        // Add alt text if missing
        if (!imageElement.alt) {
          imageElement.alt = 'Image'
        }

        // Add loading state
        imageElement.addEventListener('load', () => {
          imageElement.setAttribute('aria-hidden', 'false')
        })

        imageElement.addEventListener('error', () => {
          imageElement.alt = 'Image failed to load'
        })
      })
    }

    // Initialize enhancements
    checkUserPreferences()
    enhanceKeyboardNavigation()
    addARIALandmarks()
    enhanceImages()

    // Add CSS for accessibility
    const style = document.createElement('style')
    style.textContent = `
      .skip-link:focus {
        top: 6px;
      }
      
      .high-contrast {
        filter: contrast(150%);
      }
      
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
      
      .focus-visible {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }
      
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast)
    document.documentElement.classList.toggle('high-contrast')
  }

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 2, 24))
    document.documentElement.style.fontSize = `${fontSize}px`
  }

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 2, 12))
    document.documentElement.style.fontSize = `${fontSize}px`
  }

  const resetAccessibility = () => {
    setIsHighContrast(false)
    setFontSize(16)
    setIsReducedMotion(false)
    document.documentElement.classList.remove('high-contrast', 'reduced-motion')
    document.documentElement.style.fontSize = '16px'
  }

  return (
    <div className="accessibility-controls fixed top-4 right-4 bg-white border border-gray-300 rounded-lg p-4 shadow-lg z-50">
      <h3 className="text-lg font-semibold mb-3">Accessibility Options</h3>
      <div className="space-y-3">
        <button
          onClick={toggleHighContrast}
          className={`w-full px-3 py-2 rounded text-sm ${
            isHighContrast 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          {isHighContrast ? 'Disable' : 'Enable'} High Contrast
        </button>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={decreaseFontSize}
            className="px-2 py-1 bg-gray-200 rounded text-sm"
            disabled={fontSize <= 12}
          >
            A-
          </button>
          <span className="text-sm">Font Size: {fontSize}px</span>
          <button
            onClick={increaseFontSize}
            className="px-2 py-1 bg-gray-200 rounded text-sm"
            disabled={fontSize >= 24}
          >
            A+
          </button>
        </div>
        
        <button
          onClick={resetAccessibility}
          className="w-full px-3 py-2 bg-gray-200 text-gray-800 rounded text-sm"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default AccessibilityEnhancer
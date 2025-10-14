import React, { useEffect } from 'react

interface AccessibilityEnhancerProps {
  isHighContrast?: boolean
  isReducedMotion?: boolean
  fontSize?: 'small' | 'normal' | 'large' | 'extra-large
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  isHighContrast = false,
  isReducedMotion = false,
  fontSize = 'normal
}) => {
  useEffect(() => {
    // Add skip link functionality
    const addSkipLink = () => {
      const skipLink = document.createElement('a')
      skipLink.href = '#main-content
      skipLink.textContent = 'Skip to main content
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50
      document.body.insertBefore(skipLink, document.body.firstChild)
    }

    // Add focus styles for keyboard navigation
    const addFocusStyles = () => {
      const style = document.createElement('style')
      style.textContent = `
        *:focus {
          outline: 2px solid #3b82f6
        }
        .focus-visible:focus {
          outline: 2px solid #8b5cf6
        }
      `
      document.head.appendChild(style)
    }

    // Add ARIA landmarks
    const addAriaLandmarks = () => {
      const main = document.querySelector('main')
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main')
      }
      
      const nav = document.querySelector('nav')
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation')
      }
      
      const footer = document.querySelector('footer')
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo')
      }
    }

    // Add alt text to images without alt attributes
    const addAltText = () => {
      const images = document.querySelectorAll('img:not([alt])')
      images.forEach((img, index) => {
        if (!img.getAttribute('alt')) {
          img.setAttribute('alt', `Image ${index + 1}`)
        }
      })
    }

    // Apply accessibility settings
    const root = document.documentElement
    
    if (isHighContrast) {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }

    if (isReducedMotion) {
      root.classList.add('reduced-motion')
    } else {
      root.classList.remove('reduced-motion')
    }

    // Font size adjustment
    root.style.setProperty('--font-size-multiplier', 
      fontSize === 'large' ? '1.2' : 
      fontSize === 'extra-large' ? '1.4' : 
      fontSize === 'small' ? '0.9' : '1
    )

    // Initialize accessibility enhancements
    addSkipLink()
    addFocusStyles()
    addAriaLandmarks()
    addAltText()

    return () => {
      // Cleanup if needed
    }
  }, [isHighContrast, isReducedMotion, fontSize])

  return null
}

export default AccessibilityEnhancer
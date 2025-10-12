import React, { useEffect, useState } from 'react'

interface Props {
  children: React.ReactNode
}

const AccessibilityEnhancer: React.FC<Props> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [fontSize, setFontSize] = useState(16)

  useEffect(() => {
    // Check for user preferences
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    setIsHighContrast(prefersHighContrast)
    setIsReducedMotion(prefersReducedMotion)

    // Listen for changes in preferences
    const contrastQuery = window.matchMedia('(prefers-contrast: high)')
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const handleContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches)
    const handleMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches)

    contrastQuery.addEventListener('change', handleContrastChange)
    motionQuery.addEventListener('change', handleMotionChange)

    return () => {
      contrastQuery.removeEventListener('change', handleContrastChange)
      motionQuery.removeEventListener('change', handleMotionChange)
    }
  }, [])

  useEffect(() => {
    // Apply accessibility classes to document
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

    // Apply font size
    root.style.fontSize = `${fontSize}px`
  }, [isHighContrast, isReducedMotion, fontSize])

  useEffect(() => {
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
      border-radius: 4px;
    `
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px'
    })
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px'
    })

    document.body.insertBefore(skipLink, document.body.firstChild)

    // Add main content landmark
    const main = document.querySelector('main')
    if (main && !main.id) {
      main.id = 'main-content'
    }

    // Add ARIA landmarks
    const nav = document.querySelector('nav')
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation')
      nav.setAttribute('aria-label', 'Main navigation')
    }

    const footer = document.querySelector('footer')
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo')
    }

    // Add focus management
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    const focusableContent = document.querySelectorAll(focusableElements)
    
    focusableContent.forEach(element => {
      const el = element as HTMLElement
      if (!el.classList.contains('focus-visible')) {
        el.classList.add('focus-visible')
      }
    })

    return () => {
      // Cleanup
      const existingSkipLink = document.querySelector('.skip-link')
      if (existingSkipLink) {
        existingSkipLink.remove()
      }
    }
  }, [])

  useEffect(() => {
    // Keyboard navigation enhancements
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key to close modals/dropdowns
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement
        if (activeElement && activeElement.blur) {
          activeElement.blur()
        }
      }

      // Tab navigation improvements
      if (e.key === 'Tab') {
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
  }, [])

  // Accessibility controls component
  const AccessibilityControls = () => (
    <div className="fixed top-4 right-4 bg-slate-800/90 backdrop-blur-md rounded-lg p-4 border border-cyan-500/20 z-50">
      <h3 className="text-sm font-semibold text-white mb-3">Accessibility</h3>
      <div className="space-y-2">
        <label className="flex items-center text-xs text-gray-300">
          <input
            type="checkbox"
            checked={isHighContrast}
            onChange={(e) => setIsHighContrast(e.target.checked)}
            className="mr-2"
          />
          High Contrast
        </label>
        <label className="flex items-center text-xs text-gray-300">
          <input
            type="checkbox"
            checked={isReducedMotion}
            onChange={(e) => setIsReducedMotion(e.target.checked)}
            className="mr-2"
          />
          Reduced Motion
        </label>
        <div className="flex items-center text-xs text-gray-300">
          <label htmlFor="font-size" className="mr-2">Font Size:</label>
          <input
            id="font-size"
            type="range"
            min="12"
            max="24"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="w-16"
          />
          <span className="ml-2">{fontSize}px</span>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {children}
      {/* Show accessibility controls in development */}
      {process.env.NODE_ENV === 'development' && <AccessibilityControls />}
    </>
  )
}

export default AccessibilityEnhancer
import React, { useEffect, useState, useCallback } from 'react'

interface AccessibilityEnhancerProps {
  enabled?: boolean
  showControls?: boolean
}

export function AccessibilityEnhancer({ 
  enabled = true, 
  showControls = false 
}: AccessibilityEnhancerProps) {
  const [isHighContrast, setIsHighContrast] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [fontSize, setFontSize] = useState(16)
  const [lineSpacing, setLineSpacing] = useState(1.5)

  // Check user preferences
  useEffect(() => {
    if (!enabled) return

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleReducedMotionChange)

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)')
    setIsHighContrast(highContrastQuery.matches)

    const handleHighContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches)
    }

    highContrastQuery.addEventListener('change', handleHighContrastChange)

    return () => {
      mediaQuery.removeEventListener('change', handleReducedMotionChange)
      highContrastQuery.removeEventListener('change', handleHighContrastChange)
    }
  }, [enabled])

  // Apply accessibility styles
  useEffect(() => {
    if (!enabled) return

    const root = document.documentElement
    const body = document.body

    // Apply high contrast mode
    if (isHighContrast) {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }

    // Apply reduced motion
    if (isReducedMotion) {
      root.classList.add('reduced-motion')
    } else {
      root.classList.remove('reduced-motion')
    }

    // Apply font size
    root.style.setProperty('--base-font-size', `${fontSize}px`)
    root.style.setProperty('--line-height', lineSpacing.toString())

    // Apply focus styles
    root.style.setProperty('--focus-ring-color', isHighContrast ? '#ffff00' : '#3b82f6')
    root.style.setProperty('--focus-ring-width', isHighContrast ? '3px' : '2px')
  }, [enabled, isHighContrast, isReducedMotion, fontSize, lineSpacing])

  // Keyboard navigation enhancement
  useEffect(() => {
    if (!enabled) return

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return
      }

      switch (e.key) {
        case 'Tab':
          // Ensure focus is visible
          document.body.classList.add('keyboard-navigation')
          break
        case 'Escape':
          // Close modals or dropdowns
          const activeModals = document.querySelectorAll('[data-modal="true"]')
          activeModals.forEach(modal => {
            if (modal instanceof HTMLElement) {
              modal.style.display = 'none'
            }
          })
          break
        case 'h':
        case 'H':
          if (e.ctrlKey) {
            e.preventDefault()
            // Go to homepage
            window.location.href = '/'
          }
          break
        case 's':
        case 'S':
          if (e.ctrlKey) {
            e.preventDefault()
            // Focus search
            const searchInput = document.querySelector('input[type="search"], input[placeholder*="search" i]') as HTMLInputElement
            if (searchInput) {
              searchInput.focus()
            }
          }
          break
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
  }, [enabled])

  // Focus management
  useEffect(() => {
    if (!enabled) return

    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement
      
      // Add focus indicator
      target.classList.add('focused')
      
      // Announce focus changes to screen readers
      if (target.hasAttribute('aria-label')) {
        const announcement = document.createElement('div')
        announcement.setAttribute('aria-live', 'polite')
        announcement.setAttribute('aria-atomic', 'true')
        announcement.className = 'sr-only'
        announcement.textContent = target.getAttribute('aria-label')
        document.body.appendChild(announcement)
        
        setTimeout(() => {
          document.body.removeChild(announcement)
        }, 1000)
      }
    }

    const handleFocusOut = (e: FocusEvent) => {
      const target = e.target as HTMLElement
      target.classList.remove('focused')
    }

    document.addEventListener('focusin', handleFocusIn)
    document.addEventListener('focusout', handleFocusOut)

    return () => {
      document.removeEventListener('focusin', handleFocusIn)
      document.removeEventListener('focusout', handleFocusOut)
    }
  }, [enabled])

  // Skip to main content link
  useEffect(() => {
    if (!enabled) return

    const skipLink = document.createElement('a')
    skipLink.href = '#main-content'
    skipLink.textContent = 'Skip to main content'
    skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
    
    document.body.insertBefore(skipLink, document.body.firstChild)

    return () => {
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink)
      }
    }
  }, [enabled])

  // Utility functions
  const increaseFontSize = useCallback(() => {
    setFontSize(prev => Math.min(prev + 2, 24))
  }, [])

  const decreaseFontSize = useCallback(() => {
    setFontSize(prev => Math.max(prev - 2, 12))
  }, [])

  const resetFontSize = useCallback(() => {
    setFontSize(16)
  }, [])

  const toggleHighContrast = useCallback(() => {
    setIsHighContrast(prev => !prev)
  }, [])

  const toggleReducedMotion = useCallback(() => {
    setIsReducedMotion(prev => !prev)
  }, [])

  // Add CSS variables for accessibility
  useEffect(() => {
    if (!enabled) return

    const style = document.createElement('style')
    style.textContent = `
      :root {
        --focus-ring-color: #3b82f6;
        --focus-ring-width: 2px;
        --base-font-size: 16px;
        --line-height: 1.5;
      }

      .high-contrast {
        --focus-ring-color: #ffff00;
        --focus-ring-width: 3px;
      }

      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }

      .keyboard-navigation *:focus {
        outline: var(--focus-ring-width) solid var(--focus-ring-color) !important;
        outline-offset: 2px !important;
      }

      .focused {
        outline: var(--focus-ring-width) solid var(--focus-ring-color) !important;
        outline-offset: 2px !important;
      }

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

      .skip-link:focus {
        position: absolute;
        top: 4px;
        left: 4px;
        z-index: 50;
        padding: 8px 16px;
        background-color: #2563eb;
        color: white;
        border-radius: 4px;
        text-decoration: none;
        outline: 2px solid #3b82f6;
      }
    `

    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      {/* Accessibility Controls */}
      {showControls && (
        <div className="fixed top-4 right-4 z-50 bg-slate-800/90 backdrop-blur-xl border border-slate-600 rounded-lg shadow-xl p-4 text-white">
          <h3 className="text-sm font-semibold mb-3">Accessibility</h3>
          
          <div className="space-y-3">
            {/* Font Size Controls */}
            <div>
              <label className="block text-xs text-gray-300 mb-1">Font Size</label>
              <div className="flex items-center gap-2">
                <button
                  onClick={decreaseFontSize}
                  className="px-2 py-1 bg-slate-700 rounded text-xs hover:bg-slate-600"
                  aria-label="Decrease font size"
                >
                  A-
                </button>
                <span className="text-xs min-w-[2rem] text-center">{fontSize}px</span>
                <button
                  onClick={increaseFontSize}
                  className="px-2 py-1 bg-slate-700 rounded text-xs hover:bg-slate-600"
                  aria-label="Increase font size"
                >
                  A+
                </button>
                <button
                  onClick={resetFontSize}
                  className="px-2 py-1 bg-slate-600 rounded text-xs hover:bg-slate-500"
                  aria-label="Reset font size"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={isHighContrast}
                  onChange={toggleHighContrast}
                  className="rounded"
                />
                <span className="text-xs">High Contrast</span>
              </label>
            </div>

            {/* Reduced Motion Toggle */}
            <div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={isReducedMotion}
                  onChange={toggleReducedMotion}
                  className="rounded"
                />
                <span className="text-xs">Reduced Motion</span>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Screen Reader Announcements */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        Accessibility features enabled
      </div>
    </>
  )
}
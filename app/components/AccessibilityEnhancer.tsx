ursor/analyze-improve-and-deploy-application-c354
'use client'
import React, { useEffect, useState } from 'react'

const AccessibilityEnhancer: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false)
  const [fontSize, setFontSize] = useState(16)

  useEffect(() => {
    // Check for user's preferred color scheme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches
    
    if (prefersHighContrast) {
      setIsHighContrast(true)
      document.documentElement.classList.add('high-contrast')
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      document.documentElement.classList.add('reduce-motion')
    }

    // Add keyboard navigation support
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content with Tab key
      if (event.key === 'Tab' && !event.shiftKey) {
        const skipLink = document.querySelector('.skip-to-main')
        if (skipLink && document.activeElement === document.body) {
          (skipLink as HTMLElement).focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast)
    if (isHighContrast) {
      document.documentElement.classList.remove('high-contrast')
    } else {
      document.documentElement.classList.add('high-contrast')
    }
  }

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 2, 24)
    setFontSize(newSize)
    document.documentElement.style.fontSize = `${newSize}px`
  }

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 2, 12)
    setFontSize(newSize)
    document.documentElement.style.fontSize = `${newSize}px`
  }

  const resetFontSize = () => {
    setFontSize(16)
    document.documentElement.style.fontSize = '16px'
  }

  return (
    <div className="accessibility-controls fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4 border">
      <h3 className="text-sm font-semibold mb-2 text-gray-700">Accessibility</h3>
      
      <div className="space-y-2">
        <button
          onClick={toggleHighContrast}
          className="block w-full text-left px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded"
          aria-label="Toggle high contrast mode"
        >
          {isHighContrast ? 'Disable' : 'Enable'} High Contrast
        </button>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={decreaseFontSize}
            className="px-2 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded"
            aria-label="Decrease font size"
          >
            A-
          </button>
          <span className="text-xs text-gray-500">{fontSize}px</span>
          <button
            onClick={increaseFontSize}
            className="px-2 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded"
            aria-label="Increase font size"
          >
            A+
          </button>
          <button
            onClick={resetFontSize}
            className="px-2 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded"
            aria-label="Reset font size"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default AccessibilityEnhancer

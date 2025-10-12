'use client'
import React, { useEffect, useState } from 'react'

export default function AccessibilityEnhancer() {
  const [isHighContrast, setIsHighContrast] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [fontSize, setFontSize] = useState('normal')

  useEffect(() => {
    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)')
    setIsHighContrast(highContrastQuery.matches)

    // Check for reduced motion preference
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(reducedMotionQuery.matches)

    // Listen for changes
    const handleHighContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches)
    const handleReducedMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches)

    highContrastQuery.addEventListener('change', handleHighContrastChange)
    reducedMotionQuery.addEventListener('change', handleReducedMotionChange)

    return () => {
      highContrastQuery.removeEventListener('change', handleHighContrastChange)
      reducedMotionQuery.removeEventListener('change', handleReducedMotionChange)
    }
  }, [])

  useEffect(() => {
    // Apply high contrast mode
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast')
    } else {
      document.documentElement.classList.remove('high-contrast')
    }
  }, [isHighContrast])

  useEffect(() => {
    // Apply reduced motion
    if (isReducedMotion) {
      document.documentElement.classList.add('reduced-motion')
    } else {
      document.documentElement.classList.remove('reduced-motion')
    }
  }, [isReducedMotion])

  useEffect(() => {
    // Apply font size
    document.documentElement.setAttribute('data-font-size', fontSize)
  }, [fontSize])

  // Skip rendering if not in browser
  if (typeof window === 'undefined') {
    return null
  }

  return (
    <div className="sr-only">
      <div id="accessibility-controls" className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Accessibility Controls</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              High Contrast Mode
            </label>
            <button
              onClick={() => setIsHighContrast(!isHighContrast)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isHighContrast
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {isHighContrast ? 'Disable' : 'Enable'} High Contrast
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Font Size
            </label>
            <select
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="small">Small</option>
              <option value="normal">Normal</option>
              <option value="large">Large</option>
              <option value="xlarge">Extra Large</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Skip to Content
            </label>
            <a
              href="#main-content"
              className="block px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Skip to Main Content
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

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
      document.documentElement.classList.add('reduced-motion')
    }

    // Load saved preferences
    const savedFontSize = localStorage.getItem('fontSize')
    if (savedFontSize) {
      setFontSize(parseInt(savedFontSize))
      document.documentElement.style.fontSize = `${savedFontSize}px`
    }

    const savedHighContrast = localStorage.getItem('highContrast')
    if (savedHighContrast === 'true') {
      setIsHighContrast(true)
      document.documentElement.classList.add('high-contrast')
    }
  }, [])

  const toggleHighContrast = () => {
    const newValue = !isHighContrast
    setIsHighContrast(newValue)
    localStorage.setItem('highContrast', newValue.toString())
    
    if (newValue) {
      document.documentElement.classList.add('high-contrast')
    } else {
      document.documentElement.classList.remove('high-contrast')
    }
  }

  const adjustFontSize = (size: number) => {
    setFontSize(size)
    localStorage.setItem('fontSize', size.toString())
    document.documentElement.style.fontSize = `${size}px`
  }

  return (
    <div className="accessibility-controls fixed bottom-4 right-4 z-50">
      <div className="bg-slate-800 rounded-lg p-4 shadow-lg border border-white/20">
        <h3 className="text-white text-sm font-semibold mb-3">Accessibility</h3>
        
        <div className="space-y-3">
          <button
            onClick={toggleHighContrast}
            className={`w-full px-3 py-2 rounded text-sm transition-colors ${
              isHighContrast 
                ? 'bg-cyan-500 text-white' 
                : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
            }`}
          >
            High Contrast
          </button>
          
          <div className="space-y-2">
            <label className="text-gray-300 text-xs">Font Size</label>
            <div className="flex space-x-1">
              {[14, 16, 18, 20].map((size) => (
                <button
                  key={size}
                  onClick={() => adjustFontSize(size)}
                  className={`px-2 py-1 rounded text-xs transition-colors ${
                    fontSize === size 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {size}px
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccessibilityEnhancer

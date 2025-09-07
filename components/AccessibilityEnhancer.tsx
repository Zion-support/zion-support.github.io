'use client'
import React, { useState, useEffect } from 'react'
interface AccessibilityEnhancerProps {
  children: React.ReactNode
export default function AccessibilityEnhancer({ children }: AccessibilityEnhancerProps) {
  const [isHighContrast, setIsHighContrast] = useState(false)
  const [fontSize, setFontSize] = useState('medium')
  const [reducedMotion, setReducedMotion] = useState(false)
  const applyAccessibilityStyles = (highContrast: boolean, fontSize: string, motion: boolean) => {
    const root = document.documentElement
  if($2) {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
  if($2) {
      root.classList.add('reduced-motion')
    } else {
      root.classList.remove('reduced-motion')
    // Apply font size
    root.style.setProperty('--font-size-multiplier', getFontSizeMultiplier(fontSize))
  }
  const getFontSizeMultiplier = (size: string): string => {
  switch($2) {
      case 'small': return '0.875'
      case 'medium': return '1'
      case 'large': return '1.125'
      case 'extra-large': return '1.25'
      default: return '1'
  }
  useEffect(() => {
    // Load saved preferences
    const savedHighContrast = localStorage.getItem('highContrast') === 'true'
    const savedFontSize = localStorage.getItem('fontSize') || 'medium'
    const savedReducedMotion = localStorage.getItem('reducedMotion') === 'true'
    setIsHighContrast(savedHighContrast)
    setFontSize(savedFontSize)
    setReducedMotion(savedReducedMotion)
    // Apply initial styles
    applyAccessibilityStyles(savedHighContrast, savedFontSize, savedReducedMotion)
  }, [applyAccessibilityStyles])
  const toggleHighContrast = () => {
    const newValue = !isHighContrast
    setIsHighContrast(newValue)
    localStorage.setItem('highContrast', newValue.toString())
    applyAccessibilityStyles(newValue, fontSize, reducedMotion)
  }
  const changeFontSize = (newSize: string) => {
    setFontSize(newSize)
    localStorage.setItem('fontSize', newSize)
    applyAccessibilityStyles(isHighContrast, newSize, reducedMotion)
  }
  const toggleReducedMotion = () => {
    const newValue = !reducedMotion
    setReducedMotion(newValue)
    localStorage.setItem('reducedMotion', newValue.toString())
    applyAccessibilityStyles(isHighContrast, fontSize, newValue)
  }
  return (
    <>

      {/* Accessibility Controls */}
      <div className="accessibility-controls fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 border">
        <h3 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">Accessibility Options</h3>
        <div className="space-y-2">
          <button
            onClick={toggleHighContrast}
            className={`w-full px-3 py-1 text-xs rounded ${
              isHighContrast ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
          >
            {isHighContrast ? 'Disable' : 'Enable'} High Contrast
          </button>

          <div className="text-xs text-gray-600 dark:text-gray-300">Font Size:</div>
          <div className="flex gap-1">
            {['small', 'medium', 'large', 'extra-large'].map((size) => (
              <button
                key={size}
                onClick={() => changeFontSize(size)}
                className={`px-2 py-1 text-xs rounded ${
                  fontSize === size ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'

                }`}
                aria-label={`Set font size to ${size}`}
              >
                {size.charAt(0).toUpperCase()}
              </button>
            ))}

          </div>

          <button
            onClick={toggleReducedMotion}
            className={`w-full px-3 py-1 text-xs rounded ${
              reducedMotion ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-label={`${reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
          >
            {reducedMotion ? 'Disable' : 'Enable'} Reduced Motion
          </button>
        </div>
      </div>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>
      {/* Screen reader only content */}
      <div className="sr-only">
        <h1>Zion Tech Group - Technology Solutions Provider</h1>
        <p>
          Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, quantum
          computing, blockchain infrastructure, and innovative development services.
        </p>
      </div>
      {/* Main content */}
      <div id="main-content">{children}</div>
    </>
  );
}
export default AccessibilityEnhancer;
export default AccessibilityEnhancer;

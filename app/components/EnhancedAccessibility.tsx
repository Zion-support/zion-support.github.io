'use client'
import React, {useState, useEffect} from 'react'

interface EnhancedAccessibilityProps {children: React.ReactNode}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({children}) => {const [isHighContrast, setIsHighContrast] = useState(false)
  const [isLargeText, setIsLargeText] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false)

  useEffect(() => {
    // Apply accessibility settings
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast')} else {document.documentElement.classList.remove('high-contrast')}

    if (isLargeText) {document.documentElement.classList.add('large-text')} else {document.documentElement.classList.remove('large-text')}

    if (isReducedMotion) {document.documentElement.style.setProperty('--animation-duration', '0.01ms')
      document.documentElement.style.setProperty('--animation-iteration-count', '1')} else {document.documentElement.style.removeProperty('--animation-duration')
      document.documentElement.style.removeProperty('--animation-iteration-count')}

    if (isKeyboardNavigation) {document.documentElement.classList.add('keyboard-navigation')} else {document.documentElement.classList.remove('keyboard-navigation')}
  }, [isHighContrast, isLargeText, isReducedMotion, isKeyboardNavigation])

  return (
<div className="accessibility-enhanced">
      {children}
      
      {/* Accessibility Controls */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-white rounded-lg shadow-lg p-4 space-y-2">
          <h3 className="text-sm font-semibold text-gray-900">Accessibility</h3>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isHighContrast}
              onChange={(e) => setIsHighContrast(e.target.checked)}
              className="rounded"
            />
            <span className="text-sm text-gray-700">High Contrast</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isLargeText}
              onChange={(e) => setIsLargeText(e.target.checked)}
              className="rounded"
            />
            <span className="text-sm text-gray-700">Large Text</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isReducedMotion}
              onChange={(e) => setIsReducedMotion(e.target.checked)}
              className="rounded"
            />
            <span className="text-sm text-gray-700">Reduced Motion</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isKeyboardNavigation}
              onChange={(e) => setIsKeyboardNavigation(e.target.checked)}
              className="rounded"
            />
            <span className="text-sm text-gray-700">Keyboard Navigation</span>
          </label>
        </div>
</div>
</div>
)
}

export default EnhancedAccessibility
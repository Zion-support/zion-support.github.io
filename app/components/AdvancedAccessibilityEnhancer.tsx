'use client'
import React, { useEffect, useState } from 'react'
interface AccessibilityEnhancerProps {
    children: React.ReactNode
  }
const AdvancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
    const [isHighContrast, setIsHighContrast] = useState(false)
  const [fontSize, setFontSize] = useState('medium')
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  useEffect(() => {
    // Check for user's motion preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)
    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)')
    setIsHighContrast(highContrastQuery.matches),
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
    setFontSize(size),
    document.documentElement.setAttribute('data-font-size', size)
  }
  return (
    </AccessibilityEnhancerProps><div className="accessibility-enhanced">
      </div><div className="accessibility-controls" style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}>
        </div><$2 />
          onClick={toggleHighContrast}
          className="accessibility-button"
          aria-label="Toggle high contrast"
        >
          {isHighContrast ? 'Normal Contrast' : 'High Contrast'}
        <div className="font-size-controls">
          </div><$2 />
            onClick={() => changeFontSize('small')}
          <$2 />
            onClick={() =>changeFontSize('small')}
            className="accessibility-button"
            aria-label="Small font size"
          >
            A
  
          <$2 />
            onClick={() => changeFontSize('medium')}
            className="accessibility-button"
            aria-label="Medium font size"
          >
            A
  
          <$2 />
            onClick={() => changeFontSize('large')}
            className="accessibility-button"
            aria-label="Large font size"
          >
            A
  
        </div>
      </div>
      {children}</div>
  )
}
export default AdvancedAccessibilityEnhancer
  </button>
  </button>
  </button>
  </AccessibilityEnhancerProps>

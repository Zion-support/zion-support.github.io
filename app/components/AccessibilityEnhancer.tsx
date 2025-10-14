import React, { useEffect, useState } from 'react'

const AccessibilityEnhancer: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [fontSize, setFontSize] = useState<'small' | 'normal' | 'large' | 'extra-large'>('normal')

  useEffect(() => {
    const root = document.documentElement
    
    // High contrast mode
    if (isHighContrast) {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }

    // Reduced motion mode
    if (isReducedMotion) {
      root.classList.add('reduced-motion')
    } else {
      root.classList.remove('reduced-motion')
    }

    // Font size adjustment
    root.style.fontSize = fontSize === 'small' ? '14px' : 
                         fontSize === 'normal' ? '16px' : 
                         fontSize === 'large' ? '18px' : '20px'
  }, [isHighContrast, isReducedMotion, fontSize])

  useEffect(() => {
    // Keyboard navigation enhancement
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
        const main = document.querySelector('main')
        if (main) {
          main.focus()
        }
      }
    }

    // Add ARIA roles
    const addAriaRoles = () => {
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

    // Add alt text to images
    const addAltText = () => {
      const images = document.querySelectorAll('img')
      images.forEach((img) => {
        if (!img.getAttribute('alt')) {
          img.setAttribute('alt', 'Image')
        }
      })
    }

    document.addEventListener('keydown', handleKeyDown)
    addAriaRoles()
    addAltText()

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="accessibility-controls fixed bottom-4 left-4 z-50 bg-slate-800 p-4 rounded-lg shadow-lg">
      <h3 className="text-white font-semibold mb-3">Accessibility</h3>
      <div className="space-y-3">
        <label className="flex items-center space-x-2 text-white text-sm">
          <input
            type="checkbox"
            checked={isHighContrast}
            onChange={(e) => setIsHighContrast(e.target.checked)}
            className="rounded"
          />
          <span>High Contrast</span>
        </label>

        <label className="flex items-center space-x-2 text-white text-sm">
          <input
            type="checkbox"
            checked={isReducedMotion}
            onChange={(e) => setIsReducedMotion(e.target.checked)}
            className="rounded"
          />
          <span>Reduce Motion</span>
        </label>

        <div className="space-y-1">
          <label className="text-white text-sm">Font Size</label>
          <select
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value as 'small' | 'normal' | 'large' | 'extra-large')}
            className="w-full bg-slate-700 text-white rounded px-2 py-1 text-sm"
          >
            <option value="small">Small</option>
            <option value="normal">Normal</option>
            <option value="large">Large</option>
            <option value="extra-large">Extra Large</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default AccessibilityEnhancer
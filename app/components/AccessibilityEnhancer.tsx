'use client'

import { useEffect } from 'react'

interface AccessibilityEnhancerProps {
  children: React.ReactNode
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add focus management
    const handleKeyDown = (e: KeyboardEvent) => {
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

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .keyboard-navigation *:focus {
            outline: 2px solid #2563eb !important;
            outline-offset: 2px !important;
          }
        `
      }} />
      {children}
    </>
  )
}

export default AccessibilityEnhancer

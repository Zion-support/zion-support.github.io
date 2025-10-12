'use client'
import React, { useEffect, useState } from 'react'

interface UserExperienceEnhancerProps {
  children: React.ReactNode
}

const UserExperienceEnhancer: React.FC<UserExperienceEnhancerProps> = ({ children }) => {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({})

  useEffect(() => {
    // UX enhancement logic
    const enhanceUX = () => {
      // Add smooth scrolling
      document.documentElement.style.scrollBehavior = 'smooth'

      // Add loading states for interactive elements
      const interactiveElements = document.querySelectorAll('button, a, input')
      interactiveElements.forEach((element, index) => {
        element.addEventListener('click', () => {
          setLoadingStates(prev => ({ ...prev, [index]: true }))
          setTimeout(() => {
            setLoadingStates(prev => ({ ...prev, [index]: false }))
          }, 1000)
        })
      })

      // Add focus management
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          const firstElement = focusableElements[0] as HTMLElement
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }

      document.addEventListener('keydown', handleKeyDown)

      // Add accessibility enhancements
      const addAriaLabels = () => {
        const buttons = document.querySelectorAll('button:not([aria-label])')
        buttons.forEach(button => {
          if (!button.getAttribute('aria-label')) {
            button.setAttribute('aria-label', button.textContent || 'Button')
          }
        })
      }

      addAriaLabels()

      return () => {
        document.removeEventListener('keydown', handleKeyDown)
      }
    }

    const cleanup = enhanceUX()
    return cleanup
  }, [])

  return <>{children}</>
}

export default UserExperienceEnhancer
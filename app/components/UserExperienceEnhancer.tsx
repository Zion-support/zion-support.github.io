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

      // Add focus indicators
      const style = document.createElement('style')
      style.textContent = `
        *:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
        
        .loading {
          opacity: 0.6;
          pointer-events: none;
        }
        
        .smooth-transition {
          transition: all 0.3s ease-in-out;
        }
      `
      document.head.appendChild(style)

      // Add keyboard navigation support
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

      // Add accessibility improvements
      const addAriaLabels = () => {
        const buttons = document.querySelectorAll('button:not([aria-label])')
        buttons.forEach(button => {
          if (!button.getAttribute('aria-label') && button.textContent) {
            button.setAttribute('aria-label', button.textContent.trim())
          }
        })
      }

      addAriaLabels()

      return () => {
        document.head.removeChild(style)
        document.removeEventListener('keydown', handleKeyDown)
        document.removeEventListener('mousedown', handleMouseDown)
      }
    }

    const cleanup = enhanceUX()
    return cleanup
  }, [])

  return (
    <div className="user-experience-enhanced">
      {children}
    </div>
  )
}

export default UserExperienceEnhancer
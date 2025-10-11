'use client'
import React, { useState, useEffect } from 'react'

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
          
          // Reset loading state after a short delay
          setTimeout(() => {
            setLoadingStates(prev => ({ ...prev, [index]: false }))
          }, 1000)
        })
      })
    }

    enhanceUX()
  }, [])

  return <>{children}</>
}

export default UserExperienceEnhancer
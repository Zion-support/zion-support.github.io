'use client'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

interface UserExperienceEnhancerProps {
  children: React.ReactNode
}

const UserExperienceEnhancer: React.FC<UserExperienceEnhancerProps> = ({ children }) => {
  const [, setLoadingStates] = useState<Record<string, boolean>>({})

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
    }

    enhanceUX()
  }, [])

  return (
    <div>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1e293b" />
      </Helmet>
      {children}
    </div>
  )
}

export default UserExperienceEnhancer
'use client'
import React, { useEffect, useState, useCallback } from 'react'
import { Heart, Star, ThumbsUp, MessageCircle, Share2 } from 'lucide-react'

interface UserExperienceEnhancerProps {
  children: React.ReactNode
  enableSmoothScrolling?: boolean
  enableLoadingStates?: boolean
  enableAnimations?: boolean
  className?: string
}

const UserExperienceEnhancer: React.FC<UserExperienceEnhancerProps> = ({
  children,
  enableSmoothScrolling = true,
  enableLoadingStates = true,
  enableAnimations = true,
  className = ''
}) => {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({})
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // UX enhancement logic
    const enhanceUX = () => {
      // Add smooth scrolling
      if (enableSmoothScrolling) {
        document.documentElement.style.scrollBehavior = 'smooth'
      }

      // Add loading states for interactive elements
      if (enableLoadingStates) {
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

      // Add intersection observer for animations
      if (enableAnimations) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in')
                setIsVisible(true)
              }
            })
          },
          { threshold: 0.1 }
        )

        const elements = document.querySelectorAll('[data-animate]')
        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
      }
    }

    enhanceUX()
  }, [enableSmoothScrolling, enableLoadingStates, enableAnimations])

  const handleInteraction = useCallback((type: string, elementId: string) => {
    // Track user interactions
    if (typeof gtag !== 'undefined') {
      gtag('event', 'interaction', {
        event_category: 'UX',
        event_label: type,
        value: 1
      })
    }

    // Add visual feedback
    const element = document.getElementById(elementId)
    if (element) {
      element.classList.add('animate-pulse')
      setTimeout(() => {
        element.classList.remove('animate-pulse')
      }, 300)
    }
  }, [])

  return (
    <div className={`ux-enhanced ${className}`}>
      {children}
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 z-40 space-y-2">
        <button
          onClick={() => handleInteraction('like', 'main-content')}
          className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          title="Like this page"
        >
          <Heart className="w-5 h-5 text-red-500" />
        </button>
        
        <button
          onClick={() => handleInteraction('share', 'main-content')}
          className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          title="Share this page"
        >
          <Share2 className="w-5 h-5 text-blue-500" />
        </button>
        
        <button
          onClick={() => handleInteraction('feedback', 'main-content')}
          className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          title="Send feedback"
        >
          <MessageCircle className="w-5 h-5 text-green-500" />
        </button>
      </div>

      {/* Loading overlay */}
      {Object.values(loadingStates).some(Boolean) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 flex items-center space-x-3">
            <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            <span className="text-gray-700">Loading...</span>
          </div>
        </div>
      )}

      {/* Progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${isVisible ? 100 : 0}%` }}
        />
      </div>
    </div>
  )
}

export default UserExperienceEnhancer
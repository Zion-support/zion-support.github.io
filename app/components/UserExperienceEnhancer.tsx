'use client'
import React, { useEffect, useState } from 'react'
import { Heart, Star, ThumbsUp, MessageCircle } from 'lucide-react'

interface UserExperienceEnhancerProps {
  children: React.ReactNode
  className?: string
}

const UserExperienceEnhancer: React.FC<UserExperienceEnhancerProps> = ({ 
  children, 
  className = '' 
}) => {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({})
  const [feedback, setFeedback] = useState<{
    rating: number
    comment: string
    submitted: boolean
  }>({
    rating: 0,
    comment: '',
    submitted: false
  })

  useEffect(() => {
    // UX enhancement logic
    const enhanceUX = () => {
      // Add smooth scrolling
      document.documentElement.style.scrollBehavior = 'smooth'
      
      // Add loading states for interactive elements
<<<<<<< HEAD

interface UserExperienceEnhancerProps {children: React.ReactNode}
}

      document.documentElement.style.scrollBehavior = 'smooth';// Add loading states for interactive elements
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-4e07
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
          outline: 2px solid #3B82F6;
          outline-offset: 2px;
        }
        .smooth-transition {
          transition: all 0.3s ease-in-out;
        }
      `
      document.head.appendChild(style)

<<<<<<< HEAD
    enhanceUX()}, []);return <>{children}</>};export default UserExperienceEnhancer
}
=======
      return () => {
        document.head.removeChild(style)
      }
    }

    const cleanup = enhanceUX()
    return cleanup
  }, [])

  const handleRating = (rating: number) => {
    setFeedback(prev => ({ ...prev, rating }))
  }

  const handleCommentChange = (comment: string) => {
    setFeedback(prev => ({ ...prev, comment }))
  }

  const handleFeedbackSubmit = () => {
    setFeedback(prev => ({ ...prev, submitted: true }))
    // Here you would typically send feedback to your backend
    console.log('Feedback submitted:', feedback)
  }

  return (
    <div className={`user-experience-enhanced ${className}`}>
      {children}
      
      {/* Feedback Widget */}
      {!feedback.submitted && (
        <div className="fixed bottom-4 right-4 z-50 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4 shadow-lg max-w-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white font-semibold">Rate Your Experience</h3>
            <button
              onClick={() => setFeedback(prev => ({ ...prev, submitted: true }))}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              ×
            </button>
          </div>
          
          <div className="flex items-center space-x-2 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleRating(star)}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                  star <= feedback.rating
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                }`}
              >
                <Star className="w-4 h-4" />
              </button>
            ))}
          </div>
          
          <textarea
            value={feedback.comment}
            onChange={(e) => handleCommentChange(e.target.value)}
            placeholder="Tell us about your experience..."
            className="w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows={3}
          />
          
          <button
            onClick={handleFeedbackSubmit}
            className="w-full mt-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Submit Feedback
          </button>
        </div>
      )}
      
      {/* Success Message */}
      {feedback.submitted && (
        <div className="fixed bottom-4 right-4 z-50 bg-green-500/20 backdrop-blur-sm rounded-xl border border-green-500/20 p-4 shadow-lg">
          <div className="flex items-center space-x-2 text-green-400">
            <Heart className="w-5 h-5" />
            <span>Thank you for your feedback!</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserExperienceEnhancer
>>>>>>> cursor/fix-errors-and-merge-to-main-4e07

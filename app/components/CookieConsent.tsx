'use client'
import React, { useState, useEffect } from 'react'
import { X, Cookie } from 'lucide-react'

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-t border-slate-700 p-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <Cookie className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
          <div className="text-sm text-gray-300">
            <p className="font-medium text-white mb-1">We use cookies to enhance your experience</p>
            <p className="text-gray-400">
              By continuing to use our website, you agree to our use of cookies for analytics and personalization.
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
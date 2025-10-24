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

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700 p-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Cookie className="w-6 h-6 text-cyan-400" />
          <div>
            <p className="text-white font-medium">We use cookies to enhance your experience</p>
            <p className="text-gray-300 text-sm">
              By continuing to use our site, you agree to our use of cookies. 
              <a href="/privacy" className="text-cyan-400 hover:text-cyan-300 underline ml-1">
                Learn more
              </a>
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
'use client'
import React, { useState, useEffect } from 'react'
import { X, Cookie } from 'lucide-react'

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 p-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Cookie className="w-6 h-6 text-cyan-400" />
          <div>
            <p className="text-white text-sm">
              We use cookies to enhance your experience and analyze our traffic.
            </p>
            <p className="text-gray-400 text-xs">
              By clicking &quot;Accept&quot;, you consent to our use of cookies.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={declineCookies}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            onClick={acceptCookies}
            className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
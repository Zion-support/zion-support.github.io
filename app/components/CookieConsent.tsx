'use client'

import React, { useState, useEffect } from 'react'

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowConsent(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex-1 mr-4">
          <p className="text-sm">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          </p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm border border-gray-600 rounded hover:bg-gray-800"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm bg-blue-600 rounded hover:bg-blue-700"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
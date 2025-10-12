'use client'
import React, { useEffect, useState } from 'react'

interface ServiceWorkerRegistrationProps {
  onUpdateAvailable?: () => void
  onUpdateInstalled?: () => void
}

const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = ({
  onUpdateAvailable,
  onUpdateInstalled
}) => {
  const [isSupported, setIsSupported] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)
  const [updateAvailable, setUpdateAvailable] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
      return
    }

    setIsSupported(true)

    const registerServiceWorker = async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js')
        setIsRegistered(true)

        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                setUpdateAvailable(true)
                onUpdateAvailable?.()
              }
            })
          }
        })

        // Handle successful installation
        if (registration.installing) {
          registration.installing.addEventListener('statechange', (e) => {
            const target = e.target as ServiceWorker
            if (target.state === 'installed' && !navigator.serviceWorker.controller) {
              onUpdateInstalled?.()
            }
          })
        }
      } catch (error) {
        console.error('Service Worker registration failed:', error)
      }
    }

    registerServiceWorker()
  }, [onUpdateAvailable, onUpdateInstalled])

  const updateServiceWorker = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistration().then((registration) => {
        if (registration?.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' })
          window.location.reload()
        }
      })
    }
  }

  if (!isSupported) {
    return null
  }

  return (
    <div>
      {updateAvailable && (
        <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-sm">
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-4 shadow-2xl border border-white/20">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900">Update Available</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              A new version of the app is available. Update now for the latest features and improvements.
            </p>
            <button
              onClick={updateServiceWorker}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              Update Now
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ServiceWorkerRegistration
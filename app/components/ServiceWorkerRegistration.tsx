'use client'

import React, { useState, useEffect } from 'react'
import { RefreshCw, CheckCircle } from 'lucide-react'

interface ServiceWorkerRegistrationProps {
  className?: string
  onUpdateAvailable?: () => void
  onUpdateInstalled?: () => void
}

const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = ({
  className = '',
  onUpdateAvailable,
  onUpdateInstalled
}) => {
  const [isSupported, setIsSupported] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null)
  const [updateAvailable, setUpdateAvailable] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)

  useEffect(() => {
    setIsSupported('serviceWorker' in navigator)
    if ('serviceWorker' in navigator) {
      registerServiceWorker()
    }
  }, [])

  const registerServiceWorker = async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js')
      setRegistration(registration)
      setIsRegistered(true)

      // Listen for updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                setUpdateAvailable(true)
                onUpdateAvailable?.()
              } else {
                onUpdateInstalled?.()
              }
            }
          })
        }
      })
    } catch (error) {
      console.error('Service worker registration failed:', error)
    }
  }

  const updateServiceWorker = async () => {
    if (!registration) return

    setIsUpdating(true)
    try {
      await registration.update()
      setUpdateAvailable(false)
    } catch (error) {
      console.error('Service worker update failed:', error)
    } finally {
      setIsUpdating(false)
    }
  }

  const skipWaiting = async () => {
    if (!registration) return

    const newWorker = registration.waiting
    if (newWorker) {
      newWorker.postMessage({ type: 'SKIP_WAITING' })
      window.location.reload()
    }
  }

  if (!isSupported) {
    return null
  }

  return (
    <div className={`service-worker-registration ${className}`}>
      {updateAvailable && (
        <div className="fixed bottom-4 left-4 right-4 z-50 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Update Available</h3>
                <p className="text-gray-300 text-sm">A new version of the app is available</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={updateServiceWorker}
                disabled={isUpdating}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isUpdating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Updating...</span>
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4" />
                    <span>Update</span>
                  </>
                )}
              </button>
              <button
                onClick={skipWaiting}
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Reload</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ServiceWorkerRegistration

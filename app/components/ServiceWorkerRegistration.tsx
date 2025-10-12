'use client'
import React, { useEffect, useState } from 'react'
import { Download, CheckCircle, AlertTriangle, RefreshCw } from 'lucide-react'

interface ServiceWorkerRegistrationProps {
  onUpdateAvailable?: () => void
  onUpdateInstalled?: () => void
  className?: string
}

const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = ({
  onUpdateAvailable,
  onUpdateInstalled,
  className = ''
}) => {
  const [isSupported, setIsSupported] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)
  const [updateAvailable, setUpdateAvailable] = useState(false)
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
      return
    }

    setIsSupported(true)

    const registerServiceWorker = async () => {
      try {
        const reg = await navigator.serviceWorker.register('/sw.js')
        setRegistration(reg)
        setIsRegistered(true)

        // Listen for updates
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                setUpdateAvailable(true)
                onUpdateAvailable?.()
              } else if (newWorker.state === 'activated') {
                onUpdateInstalled?.()
              }
            })
          }
        })

        // Listen for controller change
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          window.location.reload()
        })

      } catch (error) {
        console.error('Service Worker registration failed:', error)
      }
    }

    registerServiceWorker()
  }, [onUpdateAvailable, onUpdateInstalled])

  const handleUpdate = async () => {
    if (!registration || !registration.waiting) return

    setIsUpdating(true)
    registration.waiting.postMessage({ type: 'SKIP_WAITING' })
  }

  const handleRefresh = () => {
    window.location.reload()
  }

  if (!isSupported) {
    return null
  }

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      {updateAvailable && (
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Download className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900">
                Update Available
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                A new version of the app is available
              </p>
            </div>
          </div>
          
          <div className="mt-4 flex space-x-2">
            <button
              onClick={handleUpdate}
              disabled={isUpdating}
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium py-2 px-4 rounded-md hover:from-blue-600 hover:to-purple-600 transition-all duration-200 flex items-center justify-center disabled:opacity-50"
            >
              {isUpdating ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-1 animate-spin" />
                  Updating...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-1" />
                  Update
                </>
              )}
            </button>
            <button
              onClick={handleRefresh}
              className="flex-1 border border-gray-300 text-gray-700 text-sm font-medium py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
            >
              Refresh
            </button>
          </div>
        </div>
      )}

      {isRegistered && !updateAvailable && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 max-w-xs">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm text-green-700">
              App is ready for offline use
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ServiceWorkerRegistration
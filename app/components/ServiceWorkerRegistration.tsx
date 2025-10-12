'use client'
import React, { useState, useEffect } from 'react'
import { Download, CheckCircle, ArrowRight, Settings, Wifi, WifiOff } from 'lucide-react'

interface ServiceWorkerRegistrationProps {
  className?: string
}

const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = ({ className = '' }) => {
  const [isInstalling, setIsInstalling] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)
  const [isOnline, setIsOnline] = useState(true)
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null)

  useEffect(() => {
    // Check if service worker is already registered
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistration().then(reg => {
        if (reg) {
          setRegistration(reg)
          setIsInstalled(true)
        }
      })
    }

    // Monitor online/offline status
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const handleInstall = async () => {
    if (!('serviceWorker' in navigator)) {
      alert('Service workers are not supported in this browser.')
      return
    }

    setIsInstalling(true)

    try {
      const reg = await navigator.serviceWorker.register('/sw.js')
      setRegistration(reg)
      setIsInstalled(true)
      console.log('Service worker registered successfully')
    } catch (error) {
      console.error('Service worker registration failed:', error)
      alert('Failed to install service worker. Please try again.')
    } finally {
      setIsInstalling(false)
    }
  }

  const handleUninstall = async () => {
    if (registration) {
      await registration.unregister()
      setRegistration(null)
      setIsInstalled(false)
      console.log('Service worker unregistered')
    }
  }

  return (
    <div className={`bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 ${className}`}>
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-4">
          <Settings className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Service Worker
        </h2>
        <p className="text-gray-600">
          Enable offline functionality and improve performance with service worker.
        </p>
      </div>

      <div className="space-y-4">
        {/* Online/Offline Status */}
        <div className="flex items-center justify-center space-x-2">
          {isOnline ? (
            <Wifi className="w-5 h-5 text-green-500" />
          ) : (
            <WifiOff className="w-5 h-5 text-red-500" />
          )}
          <span className={`text-sm font-medium ${isOnline ? 'text-green-600' : 'text-red-600'}`}>
            {isOnline ? 'Online' : 'Offline'}
          </span>
        </div>

        {/* Installation Status */}
        <div className="text-center">
          {isInstalled ? (
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Service Worker Installed</span>
              </div>
              <button
                onClick={handleUninstall}
                className="bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Uninstall
              </button>
            </div>
          ) : (
            <button
              onClick={handleInstall}
              disabled={isInstalling}
              className="bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isInstalling ? (
                <>
                  <Settings className="w-5 h-5 mr-2 animate-spin" />
                  Installing...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5 mr-2" />
                  Install Service Worker
                </>
              )}
            </button>
          )}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="font-semibold text-gray-900 text-sm mb-2">
              Offline Support
            </h3>
            <p className="text-gray-600 text-xs">
              Access your app even when offline with cached resources.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="font-semibold text-gray-900 text-sm mb-2">
              Performance
            </h3>
            <p className="text-gray-600 text-xs">
              Faster loading times with intelligent caching strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceWorkerRegistration
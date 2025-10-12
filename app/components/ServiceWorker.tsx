'use client'
import React, { useEffect, useState } from 'react'

const ServiceWorker: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null)

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((reg) => {
          console.log('Service Worker registered successfully:', reg)
          setRegistration(reg)
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error)
        })
    }

    // Listen for online/offline events
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const updateServiceWorker = () => {
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' })
      window.location.reload()
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOnline && (
        <div className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg">
          You are offline
        </div>
      )}
      {registration && registration.waiting && (
        <div className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
          <button onClick={updateServiceWorker}>
            Update available - Click to update
          </button>
        </div>
      )}
    </div>
  )
}

export default ServiceWorker
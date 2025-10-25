'use client'
import { useEffect } from 'react'

const ServiceWorkerRegistration: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      const registerSW = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js')
          console.log('Service Worker registered successfully:', registration)
          
          // Handle updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available, show update notification
                  if (confirm('New version available! Reload to update?')) {
                    window.location.reload()
                  }
                }
              })
            }
          })
        } catch (error) {
          console.error('Service Worker registration failed:', error)
        }
      }

      registerSW()
    }
  }, [])

  return null
}

export default ServiceWorkerRegistration
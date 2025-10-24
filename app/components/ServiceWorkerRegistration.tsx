'use client'
import React, { useEffect } from 'react'

const ServiceWorkerRegistration: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          // Service Worker registered successfully
        })
        .catch((error) => {
          // Service Worker registration failed - handle silently
        })
    }
  }, [])

  return null
}

export default ServiceWorkerRegistration
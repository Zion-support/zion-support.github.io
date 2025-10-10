'use client'
import React, { useEffect, useState } from 'react'
interface ServiceWorkerProps {
  children?: React.ReactNode
}

const ServiceWorker: React.FC<ServiceWorkerProps> = ({ children }) => {
  const [isSupported, setIsSupported] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null)
  useEffect(() => {
    // Check if service workers are supported
    if ('serviceWorker' in navigator) {
      setIsSupported(true)
      // Register service worker
      navigator.serviceWorker.register('/sw.js')
        .then((reg) => {
          console.log('Service Worker registered successfully:', reg)
          setRegistration(reg)
          setIsRegistered(true)
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error)
        })
    }
  }, [])
  const updateServiceWorker = () => {
    if (registration) {
      registration.update()
    }
  }
  const unregisterServiceWorker = () => {
    if (registration) {
      registration.unregister().then((success) => {
        if (success) {
          console.log('Service Worker unregistered successfully')
          setIsRegistered(false)
        }
      })
    }
  }
  if (!isSupported) {
    return (
      <div className="p-4 bg-yellow-100 border border-yellow-400 rounded-lg">
        <p className="text-yellow-800">
          Service Workers are not supported in this browser.
    )
  }

  return (
    <div className="service-worker-container">
      {children}
      
      {/* Service Worker Status */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs">
          <h3 className="font-bold mb-2">Service Worker Status
          <div className="space-y-1">
            <div>Supported: {isSupported ? 'Yes' : 'No'}
            <div>Registered: {isRegistered ? 'Yes' : 'No'}
            {registration && (
              <div>Scope: {registration.scope}
            )}
          <div className="mt-2 space-x-2">
            <button 
              onClick={updateServiceWorker}
              className="bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded text-xs"
            >
              Update
            <button 
              onClick={unregisterServiceWorker}
              className="bg-red-600 hover:bg-red-700 px-2 py-1 rounded text-xs"
            >
              Unregister
      )}
  )
}
export default ServiceWorker
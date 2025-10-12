'use client'
import React, { useState, useEffect } from 'react'
import { Download, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react'

interface ServiceWorkerRegistrationProps {
  className?: string
}

const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = ({ className = '' }) => {
  const [swData, setSwData] = useState({
    isRegistered: false,
    isSupported: false,
    updateAvailable: false,
    lastUpdate: null as Date | null
  })
  const [isRegistering, setIsRegistering] = useState(false)

  useEffect(() => {
    checkServiceWorkerSupport()
    checkRegistration()
  }, [])

  const checkServiceWorkerSupport = () => {
    const isSupported = 'serviceWorker' in navigator
    setSwData(prev => ({ ...prev, isSupported }))
  }

  const checkRegistration = async () => {
    if (!swData.isSupported) return

    try {
      const registration = await navigator.serviceWorker.getRegistration()
      if (registration) {
        setSwData(prev => ({
          ...prev,
          isRegistered: true,
          lastUpdate: new Date(registration.updateViaCache)
        }))
      }
    } catch (error) {
      console.error('Failed to check service worker registration:', error)
    }
  }

  const registerServiceWorker = async () => {
    if (!swData.isSupported) return

    setIsRegistering(true)
    
    try {
      const registration = await navigator.serviceWorker.register('/sw.js')
      console.log('Service Worker registered successfully:', registration)
      
      setSwData(prev => ({
        ...prev,
        isRegistered: true,
        lastUpdate: new Date()
      }))
    } catch (error) {
      console.error('Service Worker registration failed:', error)
    } finally {
      setIsRegistering(false)
    }
  }

  const unregisterServiceWorker = async () => {
    if (!swData.isSupported) return

    try {
      const registration = await navigator.serviceWorker.getRegistration()
      if (registration) {
        await registration.unregister()
        console.log('Service Worker unregistered successfully')
        
        setSwData(prev => ({
          ...prev,
          isRegistered: false,
          lastUpdate: null
        }))
      }
    } catch (error) {
      console.error('Service Worker unregistration failed:', error)
    }
  }

  const updateServiceWorker = async () => {
    if (!swData.isSupported) return

    try {
      const registration = await navigator.serviceWorker.getRegistration()
      if (registration) {
        await registration.update()
        console.log('Service Worker updated successfully')
        
        setSwData(prev => ({
          ...prev,
          lastUpdate: new Date(),
          updateAvailable: false
        }))
      }
    } catch (error) {
      console.error('Service Worker update failed:', error)
    }
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="flex items-center space-x-2 mb-4">
        <Download className="w-5 h-5 text-purple-600" />
        <h3 className="text-lg font-semibold text-gray-900">Service Worker</h3>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          {swData.isSupported ? (
            <>
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-green-600 font-medium">Supported</span>
            </>
          ) : (
            <>
              <AlertCircle className="w-5 h-5 text-red-500" />
              <span className="text-red-600 font-medium">Not Supported</span>
            </>
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          {swData.isRegistered ? (
            <>
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-green-600 font-medium">Registered</span>
            </>
          ) : (
            <>
              <AlertCircle className="w-5 h-5 text-yellow-500" />
              <span className="text-yellow-600 font-medium">Not Registered</span>
            </>
          )}
        </div>
        
        {swData.lastUpdate && (
          <div className="text-sm text-gray-600">
            Last Update: {swData.lastUpdate.toLocaleString()}
          </div>
        )}
        
        {swData.isSupported && (
          <div className="space-y-2">
            {!swData.isRegistered ? (
              <button
                onClick={registerServiceWorker}
                disabled={isRegistering}
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isRegistering ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Registering...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 mr-2" />
                    Register Service Worker
                  </>
                )}
              </button>
            ) : (
              <div className="space-y-2">
                <button
                  onClick={updateServiceWorker}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Update Service Worker
                </button>
                <button
                  onClick={unregisterServiceWorker}
                  className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Unregister Service Worker
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ServiceWorkerRegistration
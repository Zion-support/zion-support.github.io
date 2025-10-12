'use client'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

const ServiceWorkerRegistration: React.FC = () => {
  const [isSupported, setIsSupported] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null)

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      setIsSupported(true)
      
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

  const handleUpdate = () => {
    if (registration) {
      registration.update()
    }
  }

  const handleUnregister = () => {
    if (registration) {
      registration.unregister().then(() => {
        setIsRegistered(false)
        setRegistration(null)
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Service Worker Registration - Zion Tech Group</title>
        <meta name="description" content="Service Worker registration and management for PWA functionality." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Service Worker Registration
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Manage your Progressive Web App service worker registration and updates.
            </p>
          </div>

          {/* Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-white mb-2">
                {isSupported ? '✓' : '✗'}
              </div>
              <div className="text-gray-300 text-sm">Browser Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-white mb-2">
                {isRegistered ? '✓' : '✗'}
              </div>
              <div className="text-gray-300 text-sm">Registration Status</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-white mb-2">
                {registration ? '✓' : '✗'}
              </div>
              <div className="text-gray-300 text-sm">Active Worker</div>
            </div>
          </div>

          {/* Actions */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleUpdate}
                disabled={!registration}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Update Service Worker
              </button>
              
              <button
                onClick={handleUnregister}
                disabled={!registration}
                className="border border-red-400 text-red-400 px-8 py-3 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Unregister Service Worker
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Worker Information
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Learn about service worker capabilities and benefits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Offline Support</h3>
              <p className="text-gray-300">
                Service workers enable your app to work offline by caching resources and serving them when the network is unavailable.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Background Sync</h3>
              <p className="text-gray-300">
                Perform background tasks even when the app is closed, ensuring data synchronization and improved user experience.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Push Notifications</h3>
              <p className="text-gray-300">
                Send push notifications to users even when the app is not active, keeping them engaged and informed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceWorkerRegistration
'use client'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Settings, Download } from 'lucide-react'

const ServiceWorkerRegistration: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState(false)
  const [isInstalling, setIsInstalling] = useState(false)

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Offline Functionality',
      description: 'Enable your app to work offline with cached resources and background sync'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Enhanced Security',
      description: 'Secure service worker implementation with proper CSP and security headers'
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'Smart Caching',
      description: 'Intelligent caching strategies for optimal performance and user experience'
    },
    {
      icon: <Settings className="w-8 h-8 text-purple-500" />,
      title: 'Easy Management',
      description: 'Simple registration and update management for your service workers'
    }
  ]

  const benefits = [
    'Faster page load times',
    'Offline functionality',
    'Better user experience',
    'Reduced server load',
    'Improved performance',
    'Enhanced security',
    'Easy updates',
    'Better SEO scores'
  ]

  const registerServiceWorker = async () => {
    setIsInstalling(true)
    
    try {
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.register('/sw.js')
        console.log('Service Worker registered successfully:', registration)
        setIsRegistered(true)
      } else {
        console.log('Service Worker not supported')
      }
    } catch (error) {
      console.error('Service Worker registration failed:', error)
    } finally {
      setIsInstalling(false)
    }
  }

  useEffect(() => {
    // Check if service worker is already registered
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        if (registrations.length > 0) {
          setIsRegistered(true)
        }
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Service Worker Registration - Zion Tech Group</title>
        <meta name="description" content="Advanced service worker registration solutions by Zion Tech Group. Enable offline functionality and improve performance." />
        <meta name="keywords" content="service worker, PWA, offline functionality, performance optimization, Zion Tech Group" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Service Worker Registration
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Enable offline functionality and improve performance with our advanced service worker solutions. 
              Transform your web app into a powerful PWA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={registerServiceWorker}
                disabled={isInstalling || isRegistered}
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50"
              >
                {isInstalling ? (
                  <>
                    <Settings className="w-5 h-5 mr-2 animate-spin" />
                    Installing...
                  </>
                ) : isRegistered ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Registered
                  </>
                ) : (
                  <>
                    Register Service Worker
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Worker Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive service worker solutions for modern web applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-white/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of service worker registration for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Enable Service Workers?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transform your web app into a powerful PWA with our service worker solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Start Implementation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceWorkerRegistration
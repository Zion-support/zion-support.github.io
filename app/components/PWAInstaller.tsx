'use client'
import React, { useState, useEffect } from 'react'
import { Download, X, CheckCircle } from 'lucide-react'

interface PWAInstallerProps {
  className?: string
}

const PWAInstaller: React.FC<PWAInstallerProps> = ({ className = '' }) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
      return
    }

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstallPrompt(true)
    }

    // Listen for the appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true)
      setShowInstallPrompt(false)
      setDeferredPrompt(null)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt')
    } else {
      console.log('User dismissed the install prompt')
    }
    
    setDeferredPrompt(null)
    setShowInstallPrompt(false)
  }

  const handleDismiss = () => {
    setShowInstallPrompt(false)
  }

  if (isInstalled || !showInstallPrompt) {
    return null
  }

  return (
    <div className={`fixed bottom-4 left-4 right-4 z-50 ${className}`}>
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm mx-auto">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <Download className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-gray-900">
              Install App
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Install this app on your device for a better experience.
            </p>
            <div className="flex space-x-2 mt-3">
              <button
                onClick={handleInstallClick}
                className="bg-blue-600 text-white px-3 py-1.5 rounded text-sm font-medium hover:bg-blue-700 transition-colors flex items-center"
              >
                <Download className="w-4 h-4 mr-1" />
                Install
              </button>
              <button
                onClick={handleDismiss}
                className="text-gray-500 hover:text-gray-700 px-3 py-1.5 rounded text-sm font-medium transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PWAInstaller
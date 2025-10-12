'use client'
import React, { useState, useEffect } from 'react'
import { Download, X } from 'lucide-react'

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
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-1">
              Install App
            </h3>
            <p className="text-xs text-gray-600 mb-3">
              Install this app on your device for a better experience
            </p>
            <div className="flex space-x-2">
              <button
                onClick={handleInstallClick}
                className="flex items-center space-x-1 bg-purple-600 text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-purple-700 transition-colors"
              >
                <Download className="w-3 h-3" />
                <span>Install</span>
              </button>
              <button
                onClick={handleDismiss}
                className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 px-3 py-1.5 rounded text-xs font-medium transition-colors"
              >
                <X className="w-3 h-3" />
                <span>Dismiss</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PWAInstaller
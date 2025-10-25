import React, { useState, useEffect } from 'react'
import { Download, X, CheckCircle } from 'lucide-react';

const PWAInstaller: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
    }

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstallPrompt(true)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    
    if (outcome === 'accepted') {
      setIsInstalled(true)
      setShowInstallPrompt(false)
    }
    
    setDeferredPrompt(null)
  }

  const handleDismiss = () => {
    setShowInstallPrompt(false)
  }

  if (isInstalled || !showInstallPrompt) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <Download className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">Install App</h3>
              <p className="text-gray-300 text-xs">Get the full experience</p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-xs text-gray-300">
            <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
            Faster access to your data
          </div>
          <div className="flex items-center text-xs text-gray-300">
            <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
            Works offline
          </div>
          <div className="flex items-center text-xs text-gray-300">
            <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
            Native app experience
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={handleInstallClick}
            className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-all duration-200 flex items-center justify-center"
          >
            <Download className="w-4 h-4 mr-1" />
            Install
          </button>
          <button
            onClick={handleDismiss}
            className="px-3 py-2 text-gray-400 hover:text-white text-sm transition-colors"
          >
            Later
          </button>
        </div>
      </div>
    </div>
  )
}

export default PWAInstaller
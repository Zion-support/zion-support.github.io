'use client'
import React, { useState, useEffect } from 'react'
import { CheckCircle, ArrowRight, Phone, Mail, Zap, Shield, Brain, Globe } from 'lucide-react'

interface PWAInstallerProps {
  onInstall?: () => void
  onDismiss?: () => void
}

const PWAInstaller: React.FC<PWAInstallerProps> = ({ onInstall, onDismiss }) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)

  useEffect(() => {
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

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted') {
        onInstall?.()
      }
      setDeferredPrompt(null)
      setShowInstallPrompt(false)
    }
  }

  const handleDismiss = () => {
    setShowInstallPrompt(false)
    onDismiss?.()
  }

  if (!showInstallPrompt) return null

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm z-50">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-900">Install App</h3>
          <p className="text-sm text-gray-500 mt-1">
            Install this app on your device for a better experience.
          </p>
          <div className="flex space-x-2 mt-3">
            <button
              onClick={handleInstall}
              className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium hover:bg-blue-700"
            >
              Install
            </button>
            <button
              onClick={handleDismiss}
              className="text-gray-500 px-3 py-1 rounded text-sm font-medium hover:bg-gray-100"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PWAInstaller
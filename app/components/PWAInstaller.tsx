'use client'
import React, { useState, useEffect } from 'react'
import { Download, X, CheckCircle } from 'lucide-react'
interface PWAInstallerProps {
  onInstall?: () => void
  onDismiss?: () => void
  showInstallPrompt?: boolean
}

const PWAInstaller: React.FC<PWAInstallerProps> = ({
  onInstall
  onDismiss
  showInstallPrompt = true
}) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [isInstalled, setIsInstalled] = useState(false)
  const [showPrompt, setShowPrompt] = useState(false)
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
      setShowPrompt(true)
    }
    // Listen for the appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true)
      setShowPrompt(false)
      setDeferredPrompt(null)
    }
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])
  const handleInstall = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') {
      onInstall?.()
    }
    
    setDeferredPrompt(null)
    setShowPrompt(false)
  }
  const handleDismiss = () => {
    setShowPrompt(false)
    onDismiss?.()
  }
  if (isInstalled || !showPrompt || !showInstallPrompt) {
    return null
  }

  return (
    <div className="...">
      <div className="...">
        <div className="...">
          <div className="...">
            <div className="...">
              <Download className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <div className="...">
            <h3 className="...">
              Install App
            </h3>
            <p className="...">
              Install this app on your device for a better experience
            </p>
            <div className="...">
              <button
                onClick={handleInstall}
                className="...">
                <Download className="w-3 h-3 mr-1" />
                Install
              </button>
              <button
                onClick={handleDismiss}
                className="...">
                Not now
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={handleDismiss}
          className="...">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
export default PWAInstaller
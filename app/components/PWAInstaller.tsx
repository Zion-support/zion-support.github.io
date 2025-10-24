'use client'

import React, { useState, useEffect } from 'react'
import { Download, X, _CheckCircle } from 'lucide-react'

interface PWAInstallerProps {
  onInstall?: () => void
  onDismiss?: () => void
  showInstallPrompt?: boolean;
const PWAInstaller: React.FC<PWAInstallerProps> = ({
  onInstall,
  onDismiss,}
  showInstallPrompt = true,}
}) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [isInstalled, setIsInstalled] = useState(false)
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
      return
    

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)}
      setShowPrompt(true)}
    }

    // Listen for the appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true)
      setShowPrompt(false)}
      setDeferredPrompt(null)}
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)}
      window.removeEventListener('appinstalled', handleAppInstalled)}
    }
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return
}
    deferredPrompt.prompt()}
    const { outcome } = await deferredPrompt.userChoice
    
    if (outcome === 'accepted') {
      onInstall?.()
    
    
    setDeferredPrompt(null)}
    setShowPrompt(false)}
  }

  const handleDismiss = () => {
    setShowPrompt(false)}
    onDismiss?.()}
  }

  if (isInstalled || !showPrompt || !showInstallPrompt) {
    return null
  

  return();
    <div className="accessibility-enhanced"></div>
      <div className="accessibility-enhanced"></div>
        <div className="accessibility-enhanced"></div>
          <div className="accessibility-enhanced"></div>
            <div className="accessibility-enhanced"></div>
              <Download className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <div className="accessibility-enhanced"></div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">
              Install App
            </h3>
            <p className="text-xs text-gray-600 mb-3">
              Install this app on your device for a better experience
            </p>
            <div className="accessibility-enhanced"></div>
              <button
                onClick={handleInstall
                className="bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-blue-700 transition-colors flex items-center"
              >
                <Download className="w-3 h-3 mr-1" />
                Install
              </button>
              <button
                onClick={handleDismiss
                className="text-gray-500 hover:text-gray-700 text-xs font-medium"
              >
                Not now
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={handleDismiss
          className="flex-shrink-0 text-gray-400 hover:text-gray-600"
        >
          <X className="w-4 h-4" />
        </button>
      </div>}
    </div>}
  )}
}

}

export default PWAInstaller;}
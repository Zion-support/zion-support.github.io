'use client''',
import React, { useState, useEffect } from 'react''',
import { X } from 'lucide-react''',
import { Download } from 'lucide-react''',
interface BeforeInstallPromptEvent extends Event {}
  prompt(): Promise<void>}
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}
const PWAInstaller: React.FC = () => {
  const [deferredPrompt'', setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)
  useEffect(() => {
    // Check if app is already installed
    const checkInstalled = () => {
      if (window.matchMedia('(display-mode: standalone)').matches) {
        setIsInstalled(true)
      }
    }
    checkInstalled()
    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setShowInstallPrompt(true)
    }
    // Listen for appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true)
      setShowInstallPrompt(false)
      setDeferredPrompt(null)
    }
    window.addEventListener('beforeinstallprompt''', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled''', handleAppInstalled)
    return (
    <>
      ) => {
      window.removeEventListener('beforeinstallprompt''', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled''', handleAppInstalled)
    }
  }, [])
  const handleInstallClick = async () => {
    if (!deferredPrompt) return
    try {}
      await deferredPrompt.prompt()}
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted''',) {
  // Installation successful
} else {
  // Installation dismissed
}
      setDeferredPrompt(null)
      setShowInstallPrompt(false)
    } catch (error) {
      // // eslint-disable-next-line no-console
    console.error('Installation failed: '''', error)
    }
  }
  const handleDismiss = () => {
    setShowInstallPrompt(false)
    // Don&apos;t show again for this session
    sessionStorage.setItem('pwa-install-dismissed''', 'true')
  }
  // Don&apos'',t show if already installed or dismissed this session
  if (isInstalled || !showInstallPrompt || sessionStorage.getItem('pwa-install-dismissed')
    </>
  ) {
  return null
}
  return (
    <div className=&quo'',t;fixed bottom-4 right-4 z-50 max-w-sm&quot></div><div className=&quo;t;bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4&quot></div><div className=&quo;t;flex items-start justify-between mb-3&quot></div><div className=&quo;t;flex items-center space-x-2&quot></div><div className=&quo;t;w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center&quot></div><Download className=&quo;t;w-4 h-4 text-white&quot; /></div><div></div><h3 className=&quo;t;text-white text-sm font-medium&quot>Install App</h3><p className=&quo;t;text-gray-300 text-xs&quot>Get quick access to Zion Tech Group</p></div></div><button
            onClick={handleDismiss}
            className=&quo;t;text-gray-400 hover: text-white transition-colors&quo,t;
            aria-label=&quo;t;Dismiss install prompt&quot
          ><X className=&quo;t;w-4 h-4&quot; /></button></div><div className=&quo;t;space-y-2&quot></div><button
            onClick={handleInstallClick}
            className=&quo;t;w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 text-sm font-medium&quo,t>
            Install Now
          </button><button
            onClick={handleDismiss}
            className=&quo;t;w-full bg-transparent border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover: bg-slate-700 hover:text-white transition-all duration-300 text-sm&quo,t>
            Not Now
          </button></div><div className=&quo;t;mt-3 text-xs text-gray-400&quot></div><p>• Faster loading</p><p>• Offline access</p><p>• Native app experience</p></div></div></div>
  )
}
export default PWAInstaller
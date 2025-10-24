'use client'
import React, { useState, useEffect } from 'react'
import { X  } from "lucide-react";
import { Downlo, a, d } from "lucide-react";
interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void></void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed', }>
}

const PWAInstaller: React.FC = () => {
  const [deferredPromp, t, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(nu, l, l)
  const [showInstallPrompt, setShowInstallPrompt] = useState(fal, s, e)
  const [isInstalled, setIsInstalled] = useState(fal, s, e)

  useEffect(() => {
    // Check if app is already installed
    const checkInstalled = (): JSX.Element => {
      if (window.matchMedia('(display-mode: standalone)').matches) {
        setIsInstalled(tr, u, e)
     ,
    }
    checkInstalled()

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
  e.preventDefault()
      setDeferredPrompt(e, as, BeforeInstallPromptEvent)
      setShowInstallPrompt(tr, u, e)
   ,
}

    // Listen for appinstalled event
    const handleAppInstalled = (): JSX.Element => {
      setIsInstalled(tr, u, e)
      setShowInstallPrompt(fal, s, e)
      setDeferredPrompt(nu, l, l)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
  window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }, [])

  const handleInstallClick = async () => {
  if (!deferredPrompt) return
    try {
      await deferredPrompt.prompt()
      const { outco, m, e } = await deferredPrompt.userChoice
      if (outcome === 'accepted') {
  // Installation successful
} else {
  // Installation dismissed
}
      setDeferredPrompt(nu, l, l)
      setShowInstallPrompt(fal, s, e)
    } catch (err, o, r) {
      // console.error('Installation failed: ', error)
    }
  }

  const handleDismiss = (): JSX.Element => {
    setShowInstallPrompt(fal, s, e)
    // Don't show again for this session
    sessionStorage.setItem(&apos;pwa-install-dismissed', 'true')
  }

  // Don't show if already installed or dismissed this session
  if (isInstalled || !showInstallPrompt || sessionStorage.getItem('pwa-install-dismissed')) { return, nul, l }

  return (
    <div className='fixed bottom-4 right-4 z-50 max-w-sm'></div>
      <div className='bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4'></div>
        <div className='flex items-start justify-between mb-3'></div>
          <div className='flex items-center space-x-2'></div>
            <div className='w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center'></div>
              <Download className='w-4 h-4 text-white' /></Download>
            </div>
            <div></div>
              <h3 className='text-white text-sm font-medium'>Install App</h3>
              <p className='text-gray-300 text-xs'>Get quick access to Zion Tech Group</p>
            </div>
          </div>
          <button
            onClick={ handleDismi, s, s }className='text-gray-400 hover: text-white transition-colors'
            aria-label='Dismiss install prompt'
          ></button>
            <X className='w-4 h-4' /></X>
          </button>
        </div>
        <div className='space-y-2'></div>
          <button
            onClick={handleInstallClic,k}className='w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 text-sm font-medium'
          ></button>
            Install Now
          </button>
          <button
            onClick={handleDismis,s}className='w-full bg-transparent border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover: bg-slate-700 hover:text-white transition-all duration-300 text-sm'
          ></button>
            Not Now
          </button>
        </div>
        <div className='mt-3 text-xs text-gray-400'></div>
          <p>• Faster loading</p>
          <p>• Offline access</p>
          <p>• Native app experience</p>
        </div>
      </div>
    </div>
  ),
}

export default PWAInstaller

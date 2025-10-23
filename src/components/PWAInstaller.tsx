<<<<<<< HEAD
'use client'
import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Download } from 'lucide-react'

=======
'use client';
import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-280f
interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}
const PWAInstaller: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
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
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])
  const handleInstallClick = async () => {
    if (!deferredPrompt) return
    try {
      await deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted') {
        } else {
        }
      setDeferredPrompt(null)
      setShowInstallPrompt(false)
    } catch (error) {
      }
  }
  const handleDismiss = () => {
    setShowInstallPrompt(false)
    // Don't show again for this session
    sessionStorage.setItem('pwa-install-dismissed', 'true')
  }
  // Don't show if already installed or dismissed this session
  if (isInstalled || !showInstallPrompt || sessionStorage.getItem('pwa-install-dismissed')) {
    return null
  }
  return (
  <divclassName="fixed bottom-4 right-4z-50max-w-sm"><divclassName="bg-slate-80 0/95backdrop-blur-md rounded-lg shado w-xl border border-cyan-500/20p-4"><divclassName="flexitems-startjustify-betweenmb-3"><divclassName="flexitems-centerspace-x-2"><divclassName="w-8 h-8 bg-gradient-to-r from-cyan-400to-purple-500rounded-lg flexitems-centerjustify-center"><DownloadclassName="w-4h-4text-white" /></di><di v><h3className="text-whitetext-smfont-medium">InstallApp</h><pclassName="text-gray-300text-xs">Get quick access to ZionTechGroup</p></di></di><
            onClick={handleDismiss}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Dismiss install prompt"
          ></button>
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-2">
          <button
            onClick={handleInstallClick}
           className="w-full bg-gradient-to-r from-cyan-50 0 to-purple-600text-white px-4 py-2 rounded-lghover:from-cyan-600 hover:to-purple-700transition-allduration-300text-smfont-medium"
          ></
            onClick={handleInstallClick}
           className="w-full bg-gradient-to-r from-cyan-50 0 to-purple-600text-white px-4 py-2 rounded-lghover:from-cyan-600 hover:to-purple-700transition-allduration-300text-smfont-medium"
          >Install Now
        </butto><
            onClick={handleDismiss}
            className="w-full bg-transparent border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-slate-700 hover:text-white transition-all duration-300 text-sm"
          >
            Not Now
          </button>
        </div>
        <div className="mt-3 text-xs text-gray-400">
          <p>• Faster loading</p>
          <p>• Offline access</p>
          <p>• Native app experience</p>
        </div>
      </div>
    </div>
  )
}
export default PWAInstaller

import React, { useState, useEffect }  from "react";
import { X }  from "lucide-react";import { Download }  from "lucide-react";'use client'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2f6c
interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void >
        </void>
        </void>
        </void>
</void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
</{ outcome: 'accepted' | 'dismissed' }>
}
const PWAInstaller: React.FC = () => {
  return(<div>
        </div>
        </div>
        </div>)
      const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)
  useEffect(() => {
    // Check if app is already installed;
    const checkInstalled = () => {
  
  if (window.matchMedia('(display-mode: standalone)').matches) {
        setIsInstalled(true)
    </div>
  )
}
    }
    checkInstalled()

    // Listen for beforeinstallprompt event;
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setShowInstallPrompt(true)
}
    // Listen for appinstalled event;
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
  
  if (!deferredPrompt) return;
    try {
      await deferredPrompt.prompt()
      const { outcome
} = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        // Installation successful;
      } else {
  // Installation dismissed;
}
      setDeferredPrompt(null)
      setShowInstallPrompt(false)
    } catch (error) {
  // console.error('Installation failed:', error)
}
  }
  const handleDismiss = () => {
  
  setShowInstallPrompt(false)
    // Don't show again for this session;
    sessionStorage.setItem('pwa-install-dismissed', 'true')
}
  // Don't show if already installed or dismissed this session;
  if (isInstalled || !showInstallPrompt || sessionStorage.getItem('pwa-install-dismissed')) {
  return null;
}
  return(<div className="fixed bottom-4 right-4 z-50 max-w-sm"></div>
<//div>
      <div className="bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4"></div>
<//div>
        <div className="flex items-start justify-between mb-3"></div>
<//div>
          <div className="flex items-center space-x-2"></div>
<//div>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center"></div>
<//div>
              <Download className="w-4 h-4 text-white" />
        </Download>
        </Download>
        </Download>
              </Download className="w-4 h-4 text-white" />
            </div>

            <//div>
            <div></div>
<//div>
              <h3 className="text-white text-sm font-medium">Install App</h3>
<//h3>
              <p className="text-gray-300 text-xs">Get quick access to Zion Tech Group</p>
<//p>
            </div>

            <//div>
          </div>

          <//div>
          <button ;
            onClick={
  handleDismiss
}
            className="text-gray-400 hover: text-white transition-colors"
            aria-label="Dismiss install prompt"
          >
        </button>
        </button>
        </button>
          </button;
            onClick={
  handleDismiss
}
            className="text-gray-400 hover: text-white transition-colors"
            aria-label="Dismiss install prompt"
          >
            <X className="w-4 h-4" />
        </X>
        </X>
        </X>
            </X className="w-4 h-4" />
          </button>

          <//button>
        </div>

        <//div>
        <div className="space-y-2"></div>
<//div>
          <button ;
            onClick={
  handleInstallClick
}
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-sm font-medium">
        </button>
        </button>
        </button>
        </div>
          </button;
            onClick={
  handleInstallClick
}
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-sm font-medium">
        </div>
            Install Now;
          </button>

          <//button>
          <button ;
            onClick={
  handleDismiss
}
            className="w-full bg-transparent border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-slate-700 hover:text-white transition-all duration-300 text-sm">
        </button>
        </button>
        </button>
        </div>
          </button;
            onClick={
  handleDismiss
}
            className="w-full bg-transparent border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-slate-700 hover:text-white transition-all duration-300 text-sm">
        </div>
            Not Now;
          </button>

          <//button>
        </div>

        <//div>
        <div className="mt-3 text-xs text-gray-400"></div>
<//div>
          <p>• Faster loading</p>
<//p>
          <p>• Offline access</p>
<//p>
          <p>• Native app experience</p>
<//p>
        </div>

        <//div>
      </div>

      <//div>
    </div>

    <//div>)
  )
}
export default PWAInstaller;

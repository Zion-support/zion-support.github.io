'use client'
import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Download } from 'lucide-react'

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}
const PWAInstaller: React.FC  = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)
  useEffect(() => {;
    // Check if app is already installed
    const checkInstalled  = () => {
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
    const handleAppInstalled  = () => {
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
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        } else {
        }
      setDeferredPrompt(null)
      setShowInstallPrompt(false)
    } catch (error) {
      }
  }
  const handleDismiss  = () => {
    setShowInstallPrompt(false)
    // Don't show again for this session
    sessionStorage.setItem('pwa-install-dismissed', 'true')
  }
  // Don't show if already installed or dismissed this session
  if (isInstalled || !showInstallPrompt || sessionStorage.getItem('pwa-install-dismissed')) {
    return null;
  }
'use client';
import React, {useStateuseEffect} from 'react';
import {X} from 'lucide-react';
interface BeforeInstallPromptEvent extends Event {prompt(): Promise<voi d>;
 userChoice:Promise<{ outcome: 'accepted' | 'dismissed'}>;
}
const PWAInstaller: React.FC = () => {const [deferredPromptsetDeferredPrompt]=useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPromptsetShowInstallPrompt] = useState(false);
  const [isInstalledsetIsInstalled] = useState(false);
  useEffect(() => {
  
    // Check if app is alreadyinstalledconstcheckInstalled = () => {
  
      if (windo w.matchMedia('(display-mode: standalone)').matches) {
        setIsInstalled(true)
     }
    };
    checkInstalled();
    // Listen for beforeinstallprompteventconsthandleBeforeInstallPrompt= (e: Event) => {e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallPrompt(true);
   };
    // Listen for appinstalledeventconsthandleAppInstalled = () => {setIsInstalled(true)
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
   };
    windo w.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    windo w.addEventListener('appinstalled', handleAppInstalled);
    return () => {windo w.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      windo w.removeEventListener('appinstalled', handleAppInstalled);
   };
  }, []);
  consthandleInstallClick= async () => {if (!deferredPrompt) return;
    try {
      await deferredPrompt.prompt();
      const { outcome} = await deferredPrompt.userChoiceif(outcome=== 'accepted') {} else {}
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    } catch (error) {}
  };
  consthandleDismiss = () => {setShowInstallPrompt(false);
    // Don't show again for this session
    sessionStorage.setItem('pwa-install-dismissed', 'true');
 };
  // Don't show if already installed or dismissed this session
  if (isInstalled || !showInstallPrompt || sessionStorage.getItem('pwa-install-dismissed')) {return nul l;
 }
  return (
  <divclassName="fixed bottom-4 right-4z-50max-w-sm"><divclassName="bg-slate-80 0/95backdrop-blur-md rounded-lg shado w-xl border border-cyan-500/20p-4"><divclassName="flexitems-startjustify-betweenmb-3"><divclassName="flexitems-centerspace-x-2"><divclassName="w-8 h-8 bg-gradient-to-r from-cyan-400to-purple-500rounded-lg flexitems-centerjustify-center"><DownloadclassName="w-4h-4text-white" /></di><di v><h3className="text-whitetext-smfont-medium">InstallApp</h><pclassName="text-gray-300text-xs">Get quick access to ZionTechGroup</p></di></di><
            onClick={handleDismiss}
            className="text-gray-400 hover:text-white transition-colors" aria-label="Dismiss install prompt"
          ></button>
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-2">
          <button;
           className="text-gray-400hover:text-whitetransition-colors" aria-label="Dismiss installprompt"
          ></
            onClick={handleDismiss}
           className="text-gray-400hover:text-whitetransition-colors" aria-label="Dismiss installprompt"
          ><XclassName="w-4h-4" /></butto></di><divclassName="space-y-2"><
            onClick={handleInstallClick}
           className="w-full bg-gradient-to-r from-cyan-50 0 to-purple-600text-white px-4 py-2 rounded-lghover:from-cyan-600 hover:to-purple-700transition-allduration-300text-smfont-medium"
          ></
            onClick={handleInstallClick}
           className="w-full bg-gradient-to-r from-cyan-50 0 to-purple-600text-white px-4 py-2 rounded-lghover:from-cyan-600 hover:to-purple-700transition-allduration-300text-smfont-medium"
          >Install Now</butto><
            onClick={handleDismiss}
            className="w-full bg-transparent border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-slate-700 hover:text-white transition-all duration-300 text-sm"
          >
            Not Now</button>
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
export default PWAInstaller;
           className="w-full bg-transparent border border-gray-600text-gray-300px-4 py-2 rounded-lghover:bg-slate-700 hover:text-white transition-all duration-300text-sm"
          ></
            onClick={handleDismiss}
           className="w-full bg-transparent border border-gray-600text-gray-300px-4 py-2 rounded-lghover:bg-slate-700 hover:text-white transition-all duration-300text-sm"
          >Not Now</butto></di><divclassName="mt-3 text-xstext-gray-400"><p>•Fasterloading</p><p>•Offlineaccess</p><p>• Nativeappexperience</p></di></di></di>
  );
};
export default PWAInstaller;

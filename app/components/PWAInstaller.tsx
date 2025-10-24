<<<<<<< HEAD
<<<<<<< HEAD
'use client'
import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Download } from 'lucide-react'
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
    return (
    <>
      ) => {
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
  // Installation successful
} else {
  // Installation dismissed
}
      setDeferredPrompt(null)
      setShowInstallPrompt(false)
    } catch (error) {
      // // eslint-disable-next-line no-console
    console.error('Installation failed:', error)
    }
  }
  const handleDismiss = () => {
    setShowInstallPrompt(false)
    // Don&apos;t show again for this session
    sessionStorage.setItem('pwa-install-dismissed', 'true')
  }
  // Don&apos;t show if already installed or dismissed this session
  if (isInstalled || !showInstallPrompt || sessionStorage.getItem('pwa-install-dismissed')
    </>
  ) {
  return null
}
  return (
    <div className=&quot;fixed bottom-4 right-4 z-50 max-w-sm&quot;></div>
      <div className=&quot;bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4&quot;></div>
        <div className=&quot;flex items-start justify-between mb-3&quot;></div>
          <div className=&quot;flex items-center space-x-2&quot;></div>
            <div className=&quot;w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center&quot;></div>
              <Download className=&quot;w-4 h-4 text-white&quot; />
            </div>
            <div></div>
              <h3 className=&quot;text-white text-sm font-medium&quot;>Install App</h3>
              <p className=&quot;text-gray-300 text-xs&quot;>Get quick access to Zion Tech Group</p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className=&quot;text-gray-400 hover: text-white transition-colors&quot;
            aria-label=&quot;Dismiss install prompt&quot
          >
            <X className=&quot;w-4 h-4&quot; />
          </button>
        </div>
        <div className=&quot;space-y-2&quot;></div>
          <button
            onClick={handleInstallClick}
            className=&quot;w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 text-sm font-medium&quot;
          >
            Install Now
          </button>
          <button
            onClick={handleDismiss}
            className=&quot;w-full bg-transparent border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover: bg-slate-700 hover:text-white transition-all duration-300 text-sm&quot;
          >
            Not Now
          </button>
        </div>
        <div className=&quot;mt-3 text-xs text-gray-400&quot;></div>
          <p>• Faster loading</p>
          <p>• Offline access</p>
          <p>• Native app experience</p>
        </div>
      </div>
    </div>
  )
}
export default PWAInstaller
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
'use client'

import React, { useState, useEffect } from 'react'
import { Download, X, _CheckCircle } from 'lucide-react'

interface PWAInstallerProps {
  onInstall?: () => void
  onDismiss?: () => void
  showInstallPrompt?: boolean

=======
>>>>>>> 1c3bcb5bf864
'use client';

import React, { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';

interface PWAInstallerProps {
  onInstall?: () => void;
  onDismiss?: () => void;
  showInstallPrompt?: boolean;
}
>>>>>>> 883b2f1837ad94df26f75676952a53319ed72f1c

const PWAInstaller: React.FC<PWAInstallerProps> = ({
  onInstall,
  onDismiss,
  showInstallPrompt = true,
}) => {
<<<<<<< HEAD
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [isInstalled, setIsInstalled] = useState(false)
  const [showPrompt, setShowPrompt] = useState(false)
=======
  const [deferredPrompt, setDeferredPrompt] = useState<unknown>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
>>>>>>> 883b2f1837ad94df26f75676952a53319ed72f1c

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
<<<<<<< HEAD
      setIsInstalled(true)
      return
    

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
=======
'use client'
import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Download } from 'lucide-react'
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
    return (
    <>
      ) => {
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])
<<<<<<< HEAD

  const handleInstall = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    
    if (outcome === 'accepted') {
      onInstall?.()
    
    
    setDeferredPrompt(null)
    setShowPrompt(false)
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    onDismiss?.()
  }

  if (isInstalled || !showPrompt || !showInstallPrompt) {
    return null
  

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50"></div>
      <div className="flex items-start justify-between"></div>
        <div className="flex items-start space-x-3"></div>
          <div className="flex-shrink-0"></div>
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"></div>
              <Download className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <div className="flex-1"></div>
=======
      setIsInstalled(true);
      return;
    }

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    // Listen for the appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowPrompt(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      onInstall?.();
    }
    
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    onDismiss?.();
  };

  if (isInstalled || !showPrompt || !showInstallPrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Download className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <div className="flex-1">
>>>>>>> 883b2f1837ad94df26f75676952a53319ed72f1c
            <h3 className="text-sm font-semibold text-gray-900 mb-1">
              Install App
            </h3>
            <p className="text-xs text-gray-600 mb-3">
              Install this app on your device for a better experience
            </p>
<<<<<<< HEAD
            <div className="flex space-x-2"></div>
              <button
                onClick={handleInstall
=======
            <div className="flex space-x-2">
              <button
                onClick={handleInstall}
>>>>>>> 883b2f1837ad94df26f75676952a53319ed72f1c
                className="bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-blue-700 transition-colors flex items-center"
              >
                <Download className="w-3 h-3 mr-1" />
                Install
              </button>
              <button
<<<<<<< HEAD
                onClick={handleDismiss
=======
                onClick={handleDismiss}
>>>>>>> 883b2f1837ad94df26f75676952a53319ed72f1c
                className="text-gray-500 hover:text-gray-700 text-xs font-medium"
              >
                Not now
              </button>
            </div>
          </div>
        </div>
        <button
<<<<<<< HEAD
          onClick={handleDismiss
=======
          onClick={handleDismiss}
>>>>>>> 883b2f1837ad94df26f75676952a53319ed72f1c
          className="flex-shrink-0 text-gray-400 hover:text-gray-600"
        >
          <X className="w-4 h-4" />
        </button>
=======
  const handleInstallClick = async () => {
    if (!deferredPrompt) return
    try {
      await deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted') {
  // Installation successful
} else {
  // Installation dismissed
}
      setDeferredPrompt(null)
      setShowInstallPrompt(false)
    } catch (error) {
      // // eslint-disable-next-line no-console
    console.error('Installation failed:', error)
    }
  }
  const handleDismiss = () => {
    setShowInstallPrompt(false)
    // Don&apos;t show again for this session
    sessionStorage.setItem('pwa-install-dismissed', 'true')
  }
  // Don&apos;t show if already installed or dismissed this session
  if (isInstalled || !showInstallPrompt || sessionStorage.getItem('pwa-install-dismissed')
    </>
  ) {
  return null
}
  return (
    <div className=&quot;fixed bottom-4 right-4 z-50 max-w-sm&quot;></div>
      <div className=&quot;bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4&quot;></div>
        <div className=&quot;flex items-start justify-between mb-3&quot;></div>
          <div className=&quot;flex items-center space-x-2&quot;></div>
            <div className=&quot;w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center&quot;></div>
              <Download className=&quot;w-4 h-4 text-white&quot; />
            </div>
            <div></div>
              <h3 className=&quot;text-white text-sm font-medium&quot;>Install App</h3>
              <p className=&quot;text-gray-300 text-xs&quot;>Get quick access to Zion Tech Group</p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className=&quot;text-gray-400 hover: text-white transition-colors&quot;
            aria-label=&quot;Dismiss install prompt&quot
          >
            <X className=&quot;w-4 h-4&quot; />
          </button>
        </div>
        <div className=&quot;space-y-2&quot;></div>
          <button
            onClick={handleInstallClick}
            className=&quot;w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 text-sm font-medium&quot;
          >
            Install Now
          </button>
          <button
            onClick={handleDismiss}
            className=&quot;w-full bg-transparent border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover: bg-slate-700 hover:text-white transition-all duration-300 text-sm&quot;
          >
            Not Now
          </button>
        </div>
        <div className=&quot;mt-3 text-xs text-gray-400&quot;></div>
          <p>• Faster loading</p>
          <p>• Offline access</p>
          <p>• Native app experience</p>
        </div>
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
      </div>
<<<<<<< HEAD
=======
"use client";
import React from 'react';

const PWAInstaller = () => {
  return (
    <div>
      <h1>PWAInstaller</h1>
      <p>This component is under construction.</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-e66e
=======
>>>>>>> 1c3bcb5bf864
    </div>
  )
}
<<<<<<< HEAD

<<<<<<< HEAD
export default PWAInstaller;
>>>>>>> main
=======
<<<<<<< HEAD
}

export default PWAInstaller;}
=======
export default PWAInstaller;
>>>>>>> 883b2f1837ad94df26f75676952a53319ed72f1c
=======
export default PWAInstaller
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864

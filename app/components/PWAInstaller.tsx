interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;</void></<<<void>userChoice</void></void>: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const PWAInstaller: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if app is already installed;
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    // Listen for the beforeinstallprompt event;
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallButton(true);
    };

    // Listen for the appinstalled event;
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallButton(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === 'accepted') {
        } else {
        }

      setDeferredPrompt(null);
      setShowInstallButton(false);
    } catch (error) {
      }
  };

  if (isInstalled || !showInstallButton) {
    return null;
  }

  return(<div className="fixed bottom-4 left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm"></div>
      <div className="flex items-start space-x-3"></div>
        <div className="flex-shrink-0"></div>
    <div className="fixed bottom-4 left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm"></div>
      <div className="flex items-start space-x-3"></div>
        <div className="flex-shrink-0"></div>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">📱</div>
          </div>
        </div>

        <div className="flex-1 min-w-0"></div>
          <h3 className="text-sm font-semibold mb-1">Install App</h3><p className="text-xs text-white/90 mb-3">Install Zion Tech Group app for a better experience with offline access and faster loading.</p>
          </p>

          <div className="flex space-x-2"></div>
            <button
              onClick={handleInstallClick}
              className="bg-white text-purple-600 text-xs font-medium px-3 py-1.5 rounded hover: bg-white/90 transition-colors duration-200")
            >)
              Install;)
            </button>)
),
            <button;),
              onClick={() => setShowInstallButton(false)}
              className="text-white/70 text-xs px-3 py-1.5 hover: text-white transition-colors duration-200"
            >
              Maybe later;
            </button>
          </div>
        </div>,
,
        <button;
          onClick={() => setShowInstallButton(false)}
          className="flex-shrink-0 text-white/70 hover: text-white transition-colors duration-200"
        >
          ×,
        </button>,
      </div>,
    </div>);
};

export default PWAInstaller;
'use client'
import React, { useState, useEffect } from 'react'
import { Download, X, Smartphone, Monitor } from 'lucide-react'

interface PWAInstallerProps {
  onInstall?: () => void
  onDismiss?: () => void
  showOnMobile?: boolean
  showOnDesktop?: boolean
}

const PWAInstaller: React.FC<PWAInstallerProps> = ({
  onInstall,
  onDismiss,
  showOnMobile = true,
  showOnDesktop = false
}) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

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
      setShowInstallPrompt(true)
    }

    // Listen for the appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true)
      setShowInstallPrompt(false)
      if (onInstall) {
        onInstall()
      }
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [onInstall])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null)
      setShowInstallPrompt(false)
    }
  }

  const handleDismiss = () => {
    setShowInstallPrompt(false)
    if (onDismiss) {
      onDismiss()
    }
  }

  // Don't show if already installed
  if (isInstalled) return null

  // Check device type
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  const isDesktop = !isMobile

  if ((isMobile && !showOnMobile) || (isDesktop && !showOnDesktop)) {
    return null
  }

  if (!showInstallPrompt) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-sm">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              {isMobile ? (
                <Smartphone className="w-5 h-5 text-blue-600" />
              ) : (
                <Monitor className="w-5 h-5 text-blue-600" />
              )}
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Install App
              </h3>
              <p className="text-xs text-gray-500">
                Add to home screen for quick access
              </p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={handleInstallClick}
            className="flex-1 bg-blue-600 text-white text-sm font-medium py-2 px-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <Download className="w-4 h-4 mr-1" />
            Install
          </button>
          <button
            onClick={handleDismiss}
            className="px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
          >
            Later
          </button>
        </div>
      </div>
    </div>
  )
}

export default PWAInstaller
import React from 'react';

const PWAInstaller: React.FC<PWAInstallerProps> = () => {
  return (
    <div className="pwainstaller">
      <h2>PWAInstaller</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default PWAInstaller;

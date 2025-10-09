'use client';
import React, { useState, useEffect } from 'react';
interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}
const PWAInstaller: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  useEffect(() => {
    // Check if app is already installed;
          }
    }
    checkInstalled();
    // Listen for beforeinstallprompt event;
          setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallPrompt(true);
    }
    // Listen for appinstalled event;
          setShowInstallPrompt(false);
      setDeferredPrompt(null);
    }
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    }
  }, []);
      try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        } else {
        }
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    } catch (error) {
      }
  }
      // Don't show again for this session;
    sessionStorage.setItem('pwa-install-dismissed', 'true');
  }
  // Don't show if already installed or dismissed this session;
  if (isInstalled || !showInstallPrompt || sessionStorage.getItem('pwa-install-dismissed')) {
    return null
  }
  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <Download className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-white text-sm font-medium">Install App</h3>
              <p className="text-gray-300 text-xs">Get quick access to Zion Tech Group</p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Dismiss install prompt"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div>
          <button
            onClick={handleInstallClick}
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-sm font-medium"
          >Install Now</button>
          <button
            onClick={handleDismiss}
            className="w-full bg-transparent border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-slate-700 hover:text-white transition-all duration-300 text-sm"
          >Not Now</button>
        </div>
        <div>
          <p>• Faster loading</p>
          <p>• Offline access</p>
          <p>• Native app experience</p>
        </div>
      </div>
    </div>);
}
export default PWAInstaller
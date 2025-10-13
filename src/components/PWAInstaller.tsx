import React, { useEffect, useState } from 'react';
interface BeforeInstallPromptEvent extends Event {
<<<<<<< HEAD
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}
const PWAInstaller: React.FC = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
=======
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>};
;
const PWAInstaller: React.FC = () => {
}
return (
;
const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>
);
}(null);
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
<<<<<<< HEAD
      setIsInstalled(true),
      return
  }
    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
    e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent),
      setShowInstallButton(true)
  }
    // Listen for the appinstalled event
    const handleAppInstalled = () => {
    setIsInstalled(true);
      setShowInstallButton(false);
      setDeferredPrompt(null)
  }
=======
      setIsInstalled(true);
      return}
    // Listen for the beforeinstallprompt event;
const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallButton(true)}
    // Listen for the appinstalled event;
const handleAppInstalled = () => {
}
      setIsInstalled(true);
      setShowInstallButton(false);
      setDeferredPrompt(null)};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);
    return () => {
    window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled)
  }
  }, []);
  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
<<<<<<< HEAD
<<<<<<< HEAD
    console.log('User accepted the install prompt')
  } else {
    console.log('User dismissed the install prompt')
  }
      setDeferredPrompt(null);
      setShowInstallButton(false);
    } catch (error) {
    console.error('Error installing PWA:', error)
=======

      } else {

      }
      
      setDeferredPrompt(null);
      setShowInstallButton(false);
    } catch (error) {

    }
  };

  if (isInstalled || !showInstallButton) {
    return null;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-15aa
  }
  }
  if (isInstalled || !showInstallButton) {
    return null
  }
=======
        // console.log removed for production
} else {
        // console.log removed for production
}
      setDeferredPrompt(null);
      setShowInstallButton(false)} catch (error) {
      // console.error removed for production
}
  };
  if (isInstalled || !showInstallButton) {
    return null}
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  return (
    <div className="fixed bottom-4 left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            📱
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold mb-1">Install App</h3>
          <p className="text-xs text-white/90 mb-3">
            Install Zion Tech Group app for a better experience with offline access and faster loading.
          </p>
          <div className="flex space-x-2">
<<<<<<< HEAD
            <button
              onClick={handleInstallClick}
              className="bg-white text-purple-600 text-xs font-medium px-3 py-1.5 rounded hover:bg-white/90 transition-colors duration-200">
              Install</span>
=======
            <button onClick={handleInstallClick}
              className="bg-white text-purple-600 text-xs font-medium px-3 py-1.5 rounded hover:bg-white/90 transition-colors duration-200">
              Install
            </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
            <button
              onClick={() => setShowInstallButton(false)}
              className="text-white/70 text-xs px-3 py-1.5 hover:text-white transition-colors duration-200">
              Maybe later</span>
          </div>
        </div>
        <button
          onClick={() => setShowInstallButton(false)}
          className="flex-shrink-0 text-white/70 hover: text-white transition-colors duration-200">
          ×
        </button>
      </div>
    </div>
<<<<<<< HEAD
  ),
}
export default PWAInstaller</button>
  </button>
  </BeforeInstallPromptEvent>
  </void>
=======
  )};
export default PWAInstaller;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7

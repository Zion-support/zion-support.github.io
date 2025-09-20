import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Download, X } from 'lucide-react';
import { useRegisterSW } from 'virtual:pwa-register/react';

export const PWAUpdatePrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log('SW Registered: ' + r);
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    },
  });

  useEffect(() => {
    // Handle PWA install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('PWA installed successfully');
      } else {
        console.log('PWA installation declined');
      }
      
      setDeferredPrompt(null);
      setShowPrompt(false);
    }
  };

  const handleUpdateClick = () => {
    updateServiceWorker(true);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setDeferredPrompt(null);
  };

  // Show update prompt if service worker needs refresh
  if (needRefresh && !showPrompt) {
    return (
      <div className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg max-w-sm z-50">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">Update Available</h3>
          <button onClick={() => setNeedRefresh(false)} className="text-white hover:text-gray-200">
            <X className="w-4 h-4" />
          </button>
        </div>
        <p className="text-sm mb-3">
          A new version of the app is available. Update now for the latest features.
        </p>
        <Button
          onClick={handleUpdateClick}
          size="sm"
          className="bg-white text-blue-600 hover:bg-gray-100"
        >
          Update Now
        </Button>
      </div>
    );
  }

  // Show install prompt for PWA
  if (showPrompt && deferredPrompt) {
    return (
      <div className="fixed bottom-4 right-4 bg-purple-600 text-white p-4 rounded-lg shadow-lg max-w-sm z-50">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">Install App</h3>
          <button onClick={handleDismiss} className="text-white hover:text-gray-200">
            <X className="w-4 h-4" />
          </button>
        </div>
        <p className="text-sm mb-3">
          Install Zion for quick access and offline functionality.
        </p>
        <Button
          onClick={handleInstallClick}
          size="sm"
          className="bg-white text-purple-600 hover:bg-gray-100"
        >
          <Download className="w-4 h-4 mr-2" />
          Install
        </Button>
      </div>
    );
  }

  return null;
};
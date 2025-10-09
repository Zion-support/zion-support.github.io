import React, { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';

const PWAInstaller: React.FC = () => {
<<<<<<< HEAD
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
=======
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
>>>>>>> cursor/fix-errors-and-merge-to-main-398f

  useEffect(() => {
    // Check if app is already installed
    const checkInstalled = () => {
      if (window.matchMedia('(display-mode: standalone)').matches) {
        setIsInstalled(true);
      }
    };

    checkInstalled();

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
<<<<<<< HEAD
      setDeferredPrompt(e as BeforeInstallPromptEvent);
=======
      setDeferredPrompt(e);
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
      setShowInstallPrompt(true);
    };

    // Listen for appinstalled event
    const handleAppInstalled = () => {
<<<<<<< HEAD
      setIsInstalled(true);
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
=======
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
      console.log('PWA was installed');
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
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

<<<<<<< HEAD
    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('PWA installation accepted');
      } else {
        console.log('PWA installation dismissed');
      }
      
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    } catch (error) {
      console.error('Error installing PWA:', error);
=======
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
    }
    
    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
<<<<<<< HEAD
    // Don't show again for this session
    sessionStorage.setItem('pwa-install-dismissed', 'true');
  };

  // Don't show if already installed or dismissed this session
  if (isInstalled || !showInstallPrompt || sessionStorage.getItem('pwa-install-dismissed')) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
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
        
        <div className="space-y-2">
          <button
            onClick={handleInstallClick}
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-sm font-medium"
          >
            Install Now
          </button>
          
          <button
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
=======
  };

  if (!showInstallPrompt) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div className="ml-3 flex-1">
            <h3 className="text-sm font-medium text-gray-900">
              Install App
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Install Zion Tech Group app for a better experience
            </p>
            <div className="mt-3 flex space-x-2">
              <button
                onClick={handleInstallClick}
                className="bg-indigo-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
              >
                Install
              </button>
              <button
                onClick={handleDismiss}
                className="bg-gray-200 text-gray-800 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-300 transition-colors"
              >
                Not now
              </button>
            </div>
          </div>
          <div className="ml-2 flex-shrink-0">
            <button
              onClick={handleDismiss}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
        </div>
      </div>
    </div>
  );
};

export default PWAInstaller;
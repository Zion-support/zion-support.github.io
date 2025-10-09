'use client';
import React, { useEffect, useState } from 'react';
import { 
  registerServiceWorker, 
  requestNotificationPermission, 
  isOnline, 
  addOnlineStatusListener,
  getInstallPrompt,
  installApp,
  isAppInstalled,
  addAppInstalledListener,
  BeforeInstallPromptEvent
} from '../utils/pwaUtils';

interface PWAProviderProps {
  children: React.ReactNode;
}

const PWAProvider: React.FC<PWAProviderProps> = ({ children }) => {
  const [isOnline, setIsOnline] = useState(true);
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  useEffect(() => {
    // Register service worker
    registerServiceWorker();

    // Request notification permission
    requestNotificationPermission();

    // Check if app is already installed
    setIsInstalled(isAppInstalled());

    // Set up online status listener
    const removeOnlineListener = addOnlineStatusListener(setIsOnline);

    // Get install prompt
    getInstallPrompt().then((prompt) => {
      if (prompt && !isAppInstalled()) {
        setInstallPrompt(prompt);
        setShowInstallBanner(true);
      }
    });

    // Listen for app installation
    const removeInstallListener = addAppInstalledListener(() => {
      setIsInstalled(true);
      setShowInstallBanner(false);
      setInstallPrompt(null);
    });

    return () => {
      removeOnlineListener();
      removeInstallListener();
    };
  }, []);

  const handleInstall = async () => {
    if (installPrompt) {
      const success = await installApp(installPrompt);
      if (success) {
        setShowInstallBanner(false);
        setInstallPrompt(null);
      }
    }
  };

  const handleDismissInstall = () => {
    setShowInstallBanner(false);
  };

  return (
    <>
      {children}
      
      {/* Offline indicator */}
      {!isOnline && (
        <div className="fixed top-0 left-0 right-0 bg-red-600 text-white text-center py-2 z-50">
          <span className="text-sm font-medium">
            You're offline. Some features may not be available.
          </span>
        </div>
      )}

      {/* Install banner */}
      {showInstallBanner && installPrompt && (
        <div className="fixed bottom-4 left-4 right-4 bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 z-50 max-w-md mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-white font-semibold text-sm mb-1">
                Install Zion Tech Group
              </h3>
              <p className="text-gray-300 text-xs">
                Get quick access and a better experience
              </p>
            </div>
            <div className="flex gap-2 ml-4">
              <button
                onClick={handleInstall}
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors"
              >
                Install
              </button>
              <button
                onClick={handleDismissInstall}
                className="text-gray-400 hover:text-white px-2 py-1 text-xs transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* App installed indicator */}
      {isInstalled && (
        <div className="fixed top-16 right-4 bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium z-50 animate-pulse">
          App installed successfully!
        </div>
      )}
    </>
  );
};

export default PWAProvider;
'use client';
import React, { useState, useEffect } from 'react;
interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: any,
    e: any}>;
}
const PWAInstaller: any,
    C= () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  useEffect((: any) => {
    // Check if app is already installed
      if (window.matchMedia('(display-mode: any{
        setIsInstalled(true);
      }
    };
    checkInstalled();
    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallPrompt(true);
    };
    // Listen for appinstalled event
    const handleAppInstalled: ,
    y= () => {
      setIsInstalled(true);
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);
  const handleInstallClick: ,
    y= async () => {
    if (!deferredPrompt) return;
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
  };
  const handleDismiss: ,
    y= () => {;
    setShowInstallPrompt(false);
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
          <button onClick={handleDismiss}
            className="text-gray-400 hover: any,
    k={handleInstallClick}
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg hover: any,
    r: any,">
    k={handleDismiss}">
            className="w-full bg-transparent border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover: any,>
    r: any,>
    e="mt-3 text-xs text-gray-400">
          <p>• Faster loading</p>
          <p>• Offline access</p>;
          <p>• Native app experience</p>;
        </div>;
      </div>;
    </div>);
  );";
};"'";
export default PWAInstaller;"'"'";
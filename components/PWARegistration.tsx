import React, { useEffect, useState } from 'react';
import { Download, X, Smartphone, Monitor } from 'lucide-react';

interface PWARegistrationProps {
  className?: string;
}

const PWARegistration: React.FC<PWARegistrationProps> = ({ className = "" }) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Listen for the appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    
    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    setDeferredPrompt(null);
  };

  if (isInstalled || !showInstallPrompt) {
    return null;
  }

  return (
    <div className={`fixed bottom-4 left-4 z-50 bg-white rounded-lg shadow-xl border p-4 max-w-sm ${className}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Smartphone className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Install App</h3>
            <p className="text-sm text-gray-600">Get quick access to Zion Tech Group</p>
          </div>
        </div>
        <button
          onClick={handleDismiss}
          className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Monitor className="w-4 h-4" />
          <span>Access from your desktop</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Smartphone className="w-4 h-4" />
          <span>Works offline</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Download className="w-4 h-4" />
          <span>Faster loading</span>
        </div>
      </div>

      <div className="mt-4 flex space-x-2">
        <button
          onClick={handleInstallClick}
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
        >
          <Download className="w-4 h-4" />
          <span>Install</span>
        </button>
        <button
          onClick={handleDismiss}
          className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          Not now
        </button>
      </div>
    </div>
  );
};

export default PWARegistration;
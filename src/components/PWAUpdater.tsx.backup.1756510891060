import React, { useEffect, useState } from 'react';
import { RefreshCw, X, CheckCircle } from 'lucide-react';

export function PWAUpdater() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    // Check if service worker is supported
    if ('serviceWorker' in navigator) {
      // Listen for service worker updates
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        setUpdateAvailable(true);
      });

      // Check for updates
      checkForUpdates();
    }
  }, []);

  const checkForUpdates = async () => {
    try {
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration) {
        registration.addEventListener('updatefound', () => {
          setUpdateAvailable(true);
        });
      }
    } catch (error) {
      console.log('Service worker not available');
    }
  };

  const handleUpdate = async () => {
    setIsUpdating(true);
    try {
      // Reload the page to apply updates
      window.location.reload();
    } catch (error) {
      console.error('Update failed:', error);
      setIsUpdating(false);
    }
  };

  const dismissUpdate = () => {
    setUpdateAvailable(false);
  };

  if (!updateAvailable) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-slate-900 border border-cyan-400/20 rounded-lg shadow-2xl shadow-cyan-400/10 backdrop-blur-xl">
      <div className="p-4 max-w-sm">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <RefreshCw className="w-5 h-5 text-cyan-400" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-white mb-1">
              Update Available
            </h3>
            <p className="text-xs text-gray-300 mb-3">
              A new version of Zion Tech Group is available. Refresh to get the latest features.
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleUpdate}
                disabled={isUpdating}
                className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-medium rounded-md hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 disabled:opacity-50"
              >
                {isUpdating ? (
                  <>
                    <RefreshCw className="w-3 h-3 animate-spin" />
                    Updating...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-3 h-3" />
                    Update Now
                  </>
                )}
              </button>
              <button
                onClick={dismissUpdate}
                className="px-3 py-2 text-gray-400 text-xs font-medium hover:text-white transition-colors duration-200"
              >
                Later
              </button>
            </div>
          </div>
          <button
            onClick={dismissUpdate}
            className="flex-shrink-0 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
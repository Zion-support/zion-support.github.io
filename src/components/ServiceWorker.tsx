import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Wifi, WifiOff, CheckCircle, AlertCircle } from 'lucide-react';

interface ServiceWorkerState {
  isInstalled: boolean;
  isOnline: boolean;
  hasUpdate: boolean;
  isInstalling: boolean;
}

export function ServiceWorker() {
  const [swState, setSwState] = useState<ServiceWorkerState>({
    isInstalled: false,
    isOnline: navigator.onLine,
    hasUpdate: false,
    isInstalling: false
  });

  useEffect(() => {
    // Check if service worker is supported
    if ('serviceWorker' in navigator) {
      // Register service worker
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
          setSwState(prev => ({ ...prev, isInstalled: true }));

          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              setSwState(prev => ({ ...prev, isInstalling: true }));
              
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed') {
                  setSwState(prev => ({ 
                    ...prev, 
                    isInstalling: false,
                    hasUpdate: true 
                  }));
                }
              });
            }
          });

          // Handle updates
          navigator.serviceWorker.addEventListener('controllerchange', () => {
            window.location.reload();
          });
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }

    // Online/offline detection
    const handleOnline = () => setSwState(prev => ({ ...prev, isOnline: true }));
    const handleOffline = () => setSwState(prev => ({ ...prev, isOnline: false }));

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleUpdate = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.waiting?.postMessage({ type: 'SKIP_WAITING' });
      });
    }
  };

  if (!swState.isInstalled) return null;

  return (
    <AnimatePresence>
      {swState.hasUpdate && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 max-w-sm"
        >
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              {swState.isOnline ? (
                <Wifi className="h-5 w-5 text-green-500" />
              ) : (
                <WifiOff className="h-5 w-5 text-red-500" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {swState.isOnline ? 'Online' : 'Offline'}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {swState.hasUpdate ? 'Update available' : 'Up to date'}
              </p>
            </div>
            {swState.hasUpdate && (
              <button
                onClick={handleUpdate}
                className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors"
              >
                Update
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
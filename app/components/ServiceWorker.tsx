'use client';
import React, { useEffect, useState } from 'react';

const ServiceWorker: React.FC = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  setUpdateAvailable(true);
                }
              });
            }
          });
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }

    // Monitor online/offline status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleUpdate = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistration().then((registration) => {
        if (registration && registration.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
          window.location.reload();
        }
      });
    }
  };

  return (
    <>
      {/* Offline Indicator */}
      {!isOnline && (
        <div className="fixed top-0 left-0 right-0 bg-yellow-600 text-white text-center py-2 z-50">
          You are currently offline. Some features may not be available.
        </div>
      )}

      {/* Update Available */}
      {updateAvailable && (
        <div className="fixed top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 z-50">
          <div className="flex items-center justify-center space-x-4">
            <span>New version available!</span>
            <button
              onClick={handleUpdate}
              className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-gray-100 transition-colors"
            >
              Update Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceWorker;
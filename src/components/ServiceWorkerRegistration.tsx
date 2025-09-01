import React, { useEffect, useState } from 'react';

interface ServiceWorkerRegistrationProps {}

export const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = () => {

  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {

    if ('serviceWorker' in navigator) {

      registerServiceWorker();
    }
  }, []);

  const registerServiceWorker = async () => {

    try {

      const reg = await navigator.serviceWorker.register('/sw.js');
      setRegistration(reg);

      // Check for updates
      reg.addEventListener('updatefound', () => {

        const newWorker = reg.installing;
        if (newWorker) {

          newWorker.addEventListener('statechange', () => {

            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {

              setIsUpdateAvailable(true);
            }
          });
        }
      });

      // Handle service worker updates
      navigator.serviceWorker.addEventListener('controllerchange', () => {

        window.location.reload();
      });

    } catch (error) {

      // // console.error('Service Worker registration failed:', error);
    }
  };

  const updateServiceWorker = () => {

    if (registration && registration.waiting) {

      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
  };

  if (!isUpdateAvailable) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-4 rounded-lg shadow-lg z-50 animate-slide-in-from-bottom">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
        <div className="flex-1">
          <h4 className="font-semibold">Update Available</h4>
          <p className="text-sm opacity-90">A new version is ready to install</p>
        </div>
        <button
          onClick={updateServiceWorker}
          className="bg-white text-cyan-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Update
        </button>
      </div>
    </div>
  );
};
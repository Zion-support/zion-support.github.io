import { useEffect } from 'react';

const ServiceWorkerRegistration: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      const registerServiceWorker = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js', {
            scope: '/'
          });

          console.log('Service Worker registered successfully:', registration);

          // Handle updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available, notify user
                  if (confirm('New version available! Reload to update?')) {
                    window.location.reload();
                  }
                }
              });
            }
          });

          // Handle controller change
          navigator.serviceWorker.addEventListener('controllerchange', () => {
            window.location.reload();
          });

        } catch (error) {
          console.error('Service Worker registration failed:', error);
        }
      };

      // Register service worker
      registerServiceWorker();

      // Handle offline/online status
      const handleOnline = () => {
        console.log('App is online');
        // Sync any offline data
        if (navigator.serviceWorker.controller) {
          navigator.serviceWorker.controller.postMessage({
            type: 'SYNC_OFFLINE_DATA'
          });
        }
      };

      const handleOffline = () => {
        console.log('App is offline');
      };

      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }
  }, []);

  return null;
};

export default ServiceWorkerRegistration;
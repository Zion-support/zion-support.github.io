import React, { useEffect } from 'react';

const CacheManager: React.FC = () => {
  useEffect(() => {
    // Service Worker registration for caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    }

    // Cache management
    const manageCache = () => {
      if ('caches' in window) {
        caches.keys().then((cacheNames) => {
          cacheNames.forEach((cacheName) => {
            if (cacheName.startsWith('zion-cache-')) {
              caches.open(cacheName).then((cache) => {
                cache.keys().then((requests) => {
                  if (requests.length > 50) {
                    // Clean up old cache entries
                    const oldRequests = requests.slice(0, requests.length - 50);
                    oldRequests.forEach((request) => {
                      cache.delete(request);
                    });
                  }
                });
              });
            }
          });
        });
      }
    };

    // Run cache management every 5 minutes
    const interval = setInterval(manageCache, 5 * 60 * 1000);
    
    // Initial cache management
    manageCache();

    return () => {
      clearInterval(interval);
    };
  }, []);

  return null;
};

export default CacheManager;
import React, { useEffect } from 'react';

const CacheManager: React.FC = () => {
  useEffect(() => {
    // Service Worker registration
    if ('serviceWorker' in navigator) {
      try {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registered:', registration);
          })
          .catch((error) => {
            console.log('Service Worker registration failed:', error);
          });
      } catch (error) {
        console.log('Service Worker not supported:', error);
      }
    }

    // Cache API for dynamic caching
    const setupCacheStrategy = () => {
      const CACHE_NAME = 'zion-tech-cache-v1';
      const CACHE_URLS = [
        '/',
        '/about',
        '/services',
        '/contact',
        '/styles/main.css',
        '/scripts/main.js'
      ];

      // Cache static assets
      const cacheStaticAssets = async () => {
        try {
          const cache = await caches.open(CACHE_NAME);
          await cache.addAll(CACHE_URLS);
          console.log('Static assets cached successfully');
        } catch (error) {
          console.log('Failed to cache static assets:', error);
        }
      };

      // Cache API responses
      const cacheApiResponse = async (request: Request, response: Response) => {
        try {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(request, response.clone());
        } catch (error) {
          console.log('Failed to cache API response:', error);
        }
      };

      // Initialize caching
      cacheStaticAssets();
    };

    setupCacheStrategy();
  }, []);

  return null; // This component doesn't render anything
};

export default CacheManager;
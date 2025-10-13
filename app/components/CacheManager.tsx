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

    // Cache API for static assets
    const cacheStaticAssets = async () => {
      try {
        const cache = await caches.open('static-v1');
        const assetsToCache = [
          '/',
          '/about',
          '/contact',
          '/services',
          '/pricing',
          '/micro-saas',
          '/ai-services'
        ];

        await cache.addAll(assetsToCache);
        console.log('Static assets cached successfully');
      } catch (error) {
        console.error('Failed to cache static assets:', error);
      }
    };

    // Cache API for dynamic content
    const cacheDynamicContent = async () => {
      try {
        const cache = await caches.open('dynamic-v1');
        
        // Cache API responses
        const apiEndpoints = [
          '/api/services',
          '/api/pricing',
          '/api/testimonials'
        ];

        for (const endpoint of apiEndpoints) {
          try {
            const response = await fetch(endpoint);
            if (response.ok) {
              await cache.put(endpoint, response);
            }
          } catch (error) {
            console.log(`Failed to cache ${endpoint}:`, error);
          }
        }
      } catch (error) {
        console.error('Failed to cache dynamic content:', error);
      }
    };

    // Initialize caching
    cacheStaticAssets();
    cacheDynamicContent();

    // Clean up old caches
    const cleanupOldCaches = async () => {
      try {
        const cacheNames = await caches.keys();
        const oldCaches = cacheNames.filter(name => 
          name.startsWith('static-') || name.startsWith('dynamic-')
        );
        
        await Promise.all(
          oldCaches.map(cacheName => caches.delete(cacheName))
        );
        
        console.log('Old caches cleaned up');
      } catch (error) {
        console.error('Failed to cleanup old caches:', error);
      }
    };

    // Clean up caches on page unload
    window.addEventListener('beforeunload', cleanupOldCaches);

    return () => {
      window.removeEventListener('beforeunload', cleanupOldCaches);
    };
  }, []);

  return null;
};

export default CacheManager;
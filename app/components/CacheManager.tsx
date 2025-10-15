import React, { useEffect, useState } from 'react';

interface CacheManagerProps {
  children: React.ReactNode;
}

const CacheManager: React.FC<CacheManagerProps> = ({ children }) => {
  const [cacheStatus, setCacheStatus] = useState<'idle' | 'caching' | 'cached' | 'error'>('idle');

  useEffect(() => {
    const initializeCache = async () => {
      try {
        setCacheStatus('caching');

        // Register Service Worker
        if ('serviceWorker' in navigator) {
          const registration = await navigator.serviceWorker.register('/sw.js');
          if (process.env.NODE_ENV === 'development') {
            console.log('Service Worker registered:', registration);
          }
        }

        // Setup cache strategy
        await setupCacheStrategy();
        setCacheStatus('cached');
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error('Cache initialization failed:', error);
        }
        setCacheStatus('error');
      }
    };

    initializeCache();
  }, []);

  const setupCacheStrategy = async () => {
    const CACHE_NAME = 'zion-tech-cache-v1';
    const CACHE_URLS = [
      '/',
      '/about',
      '/services',
      '/contact',
      '/styles/main.css',
      '/scripts/main.js'
    ];

    try {
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(CACHE_URLS);
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Failed to cache static assets:', error);
      }
    }
  };

  const clearCache = async () => {
    try {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
      setCacheStatus('idle');
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Failed to clear cache:', error);
      }
    }
  };

  const getCacheSize = async (): Promise<number> => {
    try {
      const cacheNames = await caches.keys();
      let totalSize = 0;

      for (const cacheName of cacheNames) {
        const cache = await caches.open(cacheName);
        const keys = await cache.keys();
        
        for (const request of keys) {
          const response = await cache.match(request);
          if (response) {
            const blob = await response.blob();
            totalSize += blob.size;
          }
        }
      }

      return totalSize;
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Failed to calculate cache size:', error);
      }
      return 0;
    }
  };

  // Cache management context value
  const cacheContextValue = {
    status: cacheStatus,
    clearCache,
    getCacheSize,
  };

  return (
    <div className="cache-manager">
      {children}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 bg-gray-800 text-white p-2 rounded text-xs">
          Cache: {cacheStatus}
        </div>
      )}
    </div>
  );
};

export default CacheManager;
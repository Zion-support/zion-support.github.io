import React, { useEffect, useState } from 'react';

interface CacheManagerProps {
  children: React.ReactNode;
}

const CacheManager: React.FC<CacheManagerProps> = ({ children }) => {
  const [cacheStatus, setCacheStatus] = useState<'idle' | 'caching' | 'cached' | 'error'>('idle');

  useEffect(() => {
    // Service Worker registration for caching
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          setCacheStatus('caching');
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('Service Worker registered:', registration);
          setCacheStatus('cached');
        } catch (error) {
          console.error('Service Worker registration failed:', error);
          setCacheStatus('error');
        }
      }
    };

    // Cache API for dynamic caching
    const setupCacheStrategy = () => {
      const CACHE_NAME = 'zion-tech-cache-v1';
      const urlsToCache = [
        '/',
        '/static/js/bundle.js',
        '/static/css/main.css',
        '/manifest.json'
      ];

      // Open cache and add resources
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(urlsToCache);
      }).then(() => {
        console.log('Resources cached successfully');
      }).catch((error) => {
        console.error('Cache setup failed:', error);
      });
    };

    // Initialize caching
    registerServiceWorker();
    setupCacheStrategy();

    // Cleanup function
    return () => {
      // Cleanup if needed
    };
  }, []);

  // Cache management functions
  const clearCache = async () => {
    try {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
      console.log('Cache cleared successfully');
    } catch (error) {
      console.error('Failed to clear cache:', error);
    }
  };

  const getCacheSize = async () => {
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
      console.error('Failed to get cache size:', error);
      return 0;
    }
  };

  // Preload critical resources
  const preloadCriticalResources = () => {
    const criticalResources = [
      '/fonts/inter.woff2',
      '/images/hero-bg.jpg',
      '/icons/logo.svg'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'image';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  };

  useEffect(() => {
    preloadCriticalResources();
  }, []);

  return (
    <>
      {children}
      {/* Cache status indicator (only in development) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 left-4 bg-black/80 text-white px-3 py-1 rounded text-xs z-50">
          Cache: {cacheStatus}
        </div>
      )}
    </>
  );
};

export default CacheManager;
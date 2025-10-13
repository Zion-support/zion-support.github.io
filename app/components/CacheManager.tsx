import React, { useState, useEffect } from 'react';

const CacheManager: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cacheSize, setCacheSize] = useState(0);

  useEffect(() => {
    // Service Worker registration
    if ('serviceWorker' in navigator) {
      try {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registered:', registration);
          })
          .catch((error) => {
            console.error('Service Worker registration failed:', error);
          });
      } catch (error) {
        console.error('Service Worker registration failed:', error);
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
        } catch (error) {
          console.error('Failed to cache static assets:', error);
        }
      };

      // Cache API responses
      const cacheAPIResponses = async (request: Request) => {
        try {
          const cache = await caches.open(CACHE_NAME);
          const response = await fetch(request);
          
          if (response.ok) {
            cache.put(request, response.clone());
          }
          
          return response;
        } catch (error) {
          console.error('Failed to cache API response:', error);
          return fetch(request);
        }
      };

      // Initialize caching
      cacheStaticAssets();

      // Intercept fetch requests for caching
      const originalFetch = window.fetch;
      window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
        const request = new Request(input, init);
        
        // Check if request should be cached
        if (request.url.includes('/api/')) {
          return cacheAPIResponses(request);
        }
        
        return originalFetch(request);
      };
    };

    setupCacheStrategy();

    // Keyboard shortcut to toggle cache manager
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'C') {
        event.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const clearCache = async () => {
    try {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
      console.log('Cache cleared successfully');
      setCacheSize(0);
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
        const requests = await cache.keys();
        
        for (const request of requests) {
          const response = await cache.match(request);
          if (response) {
            const blob = await response.blob();
            totalSize += blob.size;
          }
        }
      }
      
      setCacheSize(Math.round(totalSize / 1024)); // Size in KB
    } catch (error) {
      console.error('Failed to get cache size:', error);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white text-sm z-50 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-cyan-400">Cache Manager</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-gray-300">Cache Size:</span>
          <span className="text-cyan-400">{cacheSize} KB</span>
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={getCacheSize}
            className="flex-1 px-3 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-xs rounded transition-colors"
          >
            Refresh
          </button>
          <button
            onClick={clearCache}
            className="flex-1 px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-xs rounded transition-colors"
          >
            Clear Cache
          </button>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-white/20 text-xs text-gray-400">
        Press Ctrl+Shift+C to toggle
      </div>
    </div>
  );
};

export default CacheManager;
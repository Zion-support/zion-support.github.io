import React, { useState, useEffect } from 'react';

interface CacheStats {
  hits: number;
  misses: number;
  size: number;
  maxSize: number;
}

const CacheManager: React.FC = () => {
  const [stats, setStats] = useState<CacheStats>({
    hits: 0,
    misses: 0,
    size: 0,
    maxSize: 50 * 1024 * 1024 // 50MB
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initialize cache monitoring
    const initializeCache = () => {
      // Service Worker cache monitoring
      if ('caches' in window) {
        caches.keys().then(cacheNames => {
          let totalSize = 0;
          cacheNames.forEach(cacheName => {
            caches.open(cacheName).then(cache => {
              cache.keys().then(requests => {
                totalSize += requests.length * 1024; // Rough estimate
                setStats(prev => ({ ...prev, size: totalSize }));
              });
            });
          });
        });
      }
    };

    // Cache API for dynamic caching
    const setupCacheStrategy = () => {
      const CACHE_NAME = 'zion-tech-cache-v1';
      const CACHE_URLS = [
        '/',
        '/about',
        '/services',
        '/contact',
        '/static/js/bundle.js',
        '/static/css/main.css'
      ];

      // Install event listener
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.addEventListener('message', (event) => {
          if (event.data && event.data.type === 'CACHE_STATS') {
            setStats(prev => ({
              ...prev,
              hits: event.data.hits || prev.hits,
              misses: event.data.misses || prev.misses
            }));
          }
        });
      }
    };

    initializeCache();
    setupCacheStrategy();

    // Keyboard shortcut to toggle cache panel (Ctrl+Shift+C)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const clearCache = async () => {
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
      setStats(prev => ({ ...prev, size: 0, hits: 0, misses: 0 }));
    }
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-cyan-400">Cache Manager</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-xs"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span>Cache Hits:</span>
          <span className="text-green-400">{stats.hits}</span>
        </div>
        
        <div className="flex justify-between">
          <span>Cache Misses:</span>
          <span className="text-red-400">{stats.misses}</span>
        </div>
        
        <div className="flex justify-between">
          <span>Cache Size:</span>
          <span className="text-cyan-400">{formatBytes(stats.size)}</span>
        </div>
        
        <div className="flex justify-between">
          <span>Max Size:</span>
          <span className="text-gray-400">{formatBytes(stats.maxSize)}</span>
        </div>
        
        <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
          <div 
            className="bg-cyan-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${Math.min((stats.size / stats.maxSize) * 100, 100)}%` }}
          />
        </div>
      </div>
      
      <div className="mt-4 space-y-2">
        <button
          onClick={clearCache}
          className="w-full bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded text-xs transition-colors"
        >
          Clear Cache
        </button>
        
        <div className="text-xs text-gray-400 text-center">
          Press Ctrl+Shift+C to toggle
        </div>
      </div>
    </div>
  );
};

export default CacheManager;
'use client'
import React, { useState, useEffect } from 'react';

interface CacheStats {
  hits: number;
  misses: number;
  size: number;
  maxSize: number;
}

const CacheManager = () => {
  const [stats, setStats] = useState<CacheStats>({
    hits: 0,
    misses: 0,
    size: 0,
    maxSize: 50 * 1024 * 1024 // 50MB
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initialize cache stats
    updateStats();
    
    // Update stats every 5 seconds
    const interval = setInterval(updateStats, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const updateStats = () => {
    if ('caches' in window) {
      caches.keys().then(cacheNames => {
        let totalSize = 0;
        let totalHits = 0;
        let totalMisses = 0;

        Promise.all(
          cacheNames.map(cacheName => 
            caches.open(cacheName).then(cache => 
              cache.keys().then(requests => {
                totalSize += requests.length;
                return cache.match(requests[0]).then(response => {
                  if (response) {
                    totalHits++;
                  } else {
                    totalMisses++;
                  }
                });
              })
            )
          )
        ).then(() => {
          setStats(prev => ({
            ...prev,
            hits: totalHits,
            misses: totalMisses,
            size: totalSize
          }));
        });
      });
    }
  };

  const clearCache = async () => {
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
      updateStats();
    }
  };

  const clearStorage = () => {
    localStorage.clear();
    sessionStorage.clear();
    updateStats();
  };

  const getCacheHitRate = () => {
    const total = stats.hits + stats.misses;
    return total > 0 ? ((stats.hits / total) * 100).toFixed(1) : '0';
  };

  const getSizeInMB = () => {
    return (stats.size / (1024 * 1024)).toFixed(2);
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        title="Cache Manager"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-80 max-h-96 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cache Manager</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600 dark:text-gray-400">Cache Hits:</span>
            <span className="ml-2 font-mono text-green-600">{stats.hits}</span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">Cache Misses:</span>
            <span className="ml-2 font-mono text-red-600">{stats.misses}</span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">Hit Rate:</span>
            <span className="ml-2 font-mono text-blue-600">{getCacheHitRate()}%</span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">Size:</span>
            <span className="ml-2 font-mono text-purple-600">{getSizeInMB()} MB</span>
          </div>
        </div>

        <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-2">
            <button
              onClick={clearCache}
              className="flex-1 bg-red-600 text-white px-3 py-2 rounded text-sm hover:bg-red-700 transition-colors"
            >
              Clear Cache
            </button>
            <button
              onClick={clearStorage}
              className="flex-1 bg-orange-600 text-white px-3 py-2 rounded text-sm hover:bg-orange-700 transition-colors"
            >
              Clear Storage
            </button>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={updateStats}
            className="w-full bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-colors"
          >
            Refresh Stats
          </button>
        </div>
      </div>
    </div>
  );
};

export default CacheManager;
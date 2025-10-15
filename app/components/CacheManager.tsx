import React, { useEffect, useState } from 'react';

interface CacheManagerProps {
  children: React.ReactNode;
}

const CacheManager: React.FC<CacheManagerProps> = ({ children }) => {
  const [cacheSize, setCacheSize] = useState(0);

  useEffect(() => {
    // Calculate cache size
    const calculateCacheSize = () => {
      if ('caches' in window) {
        caches.keys().then(cacheNames => {
          let totalSize = 0;
          cacheNames.forEach(cacheName => {
            caches.open(cacheName).then(cache => {
              cache.keys().then(keys => {
                totalSize += keys.length;
                setCacheSize(totalSize);
              });
            });
          });
        });
      }
    };

    calculateCacheSize();
  }, []);

  const clearCache = async () => {
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
      setCacheSize(0);
    }
  };

  return (
    <>
      {children}
      <div className="fixed bottom-4 left-4 z-50 bg-gray-800 text-white p-3 rounded-lg shadow-lg">
        <div className="text-sm">
          <p>Cache Entries: {cacheSize}</p>
          <button
            onClick={clearCache}
            className="mt-2 bg-red-600 text-white px-3 py-1 rounded text-xs hover:bg-red-700 transition-colors"
          >
            Clear Cache
          </button>
        </div>
      </div>
    </>
  );
};

export default CacheManager;

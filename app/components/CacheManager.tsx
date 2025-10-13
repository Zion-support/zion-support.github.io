import React, { useEffect, useState, useCallback } from 'react';
import { Database, Trash2, RefreshCw } from 'lucide-react';

interface CacheItem {
  key: string;
  value: any;
  timestamp: number;
  size: number;
  ttl?: number;
}

interface CacheManagerProps {
  maxSize?: number; // Maximum cache size in MB
  defaultTTL?: number; // Default TTL in milliseconds
  onCacheUpdate?: (cache: Map<string, CacheItem>) => void;
}

const CacheManager: React.FC<CacheManagerProps> = ({
  maxSize = 50, // 50MB default
  defaultTTL = 300000, // 5 minutes default
  onCacheUpdate
}) => {
  const [cache, setCache] = useState<Map<string, CacheItem>>(new Map());
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({
    totalItems: 0,
    totalSize: 0,
    hitRate: 0,
    missRate: 0
  });

  // Calculate cache statistics
  const calculateStats = useCallback((cacheMap: Map<string, CacheItem>) => {
    let totalSize = 0;
    const totalItems = cacheMap.size;
    
    cacheMap.forEach((item) => {
      totalSize += item.size;
    });

    return {
      totalItems,
      totalSize: totalSize / (1024 * 1024), // Convert to MB
      hitRate: 0, // Would need to track hits/misses
      missRate: 0
    };
  }, []);

  // Set item in cache
  const setItem = useCallback((key: string, value: any, ttl?: number) => {
    const serializedValue = JSON.stringify(value);
    const size = new Blob([serializedValue]).size;
    const timestamp = Date.now();
    const itemTTL = ttl || defaultTTL;

    const newItem: CacheItem = {
      key,
      value,
      timestamp,
      size,
      ttl: itemTTL
    };

    setCache(prevCache => {
      const newCache = new Map(prevCache);
      newCache.set(key, newItem);
      
      // Check if we need to evict items due to size limit
      let currentSize = 0;
      const items = Array.from(newCache.values());
      
      // Sort by timestamp (oldest first)
      items.sort((a, b) => a.timestamp - b.timestamp);
      
      // Remove items until we're under the size limit
      while (currentSize + size > maxSize * 1024 * 1024 && items.length > 0) {
        const oldestItem = items.shift();
        if (oldestItem) {
          newCache.delete(oldestItem.key);
          currentSize -= oldestItem.size;
        }
      }
      
      return newCache;
    });
  }, [defaultTTL, maxSize]);

  // Get item from cache
  const getItem = useCallback((key: string) => {
    const item = cache.get(key);
    
    if (!item) {
      return null;
    }

    // Check if item has expired
    if (item.ttl && Date.now() - item.timestamp > item.ttl) {
      setCache(prevCache => {
        const newCache = new Map(prevCache);
        newCache.delete(key);
        return newCache;
      });
      return null;
    }

    return item.value;
  }, [cache]);

  // Remove item from cache
  const removeItem = useCallback((key: string) => {
    setCache(prevCache => {
      const newCache = new Map(prevCache);
      newCache.delete(key);
      return newCache;
    });
  }, []);

  // Clear all cache
  const clearCache = useCallback(() => {
    setCache(new Map());
  }, []);

  // Clean expired items
  const cleanExpired = useCallback(() => {
    const now = Date.now();
    setCache(prevCache => {
      const newCache = new Map();
      prevCache.forEach((item, key) => {
        if (!item.ttl || now - item.timestamp <= item.ttl) {
          newCache.set(key, item);
        }
      });
      return newCache;
    });
  }, []);

  // Update stats when cache changes
  useEffect(() => {
    const newStats = calculateStats(cache);
    setStats(newStats);
    onCacheUpdate?.(cache);
  }, [cache, calculateStats, onCacheUpdate]);

  // Clean expired items periodically
  useEffect(() => {
    const interval = setInterval(cleanExpired, 60000); // Clean every minute
    return () => clearInterval(interval);
  }, [cleanExpired]);

  // Expose methods for external use
  useEffect(() => {
    (window as any).cacheManager = {
      set: setItem,
      get: getItem,
      remove: removeItem,
      clear: clearCache,
      clean: cleanExpired
    };
  }, [setItem, getItem, removeItem, clearCache, cleanExpired]);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
        title="Cache Manager"
      >
        <Database className="w-5 h-5" />
      </button>

      {/* Cache Panel */}
      {isVisible && (
        <div className="absolute bottom-16 left-0 w-80 bg-gray-900 rounded-lg shadow-xl border border-gray-700 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Cache Manager</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white"
            >
              ×
            </button>
          </div>

          {/* Stats */}
          <div className="mb-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Items</span>
              <span className="text-sm text-white">{stats.totalItems}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Size</span>
              <span className="text-sm text-white">{stats.totalSize.toFixed(2)} MB</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Max Size</span>
              <span className="text-sm text-white">{maxSize} MB</span>
            </div>
          </div>

          {/* Cache Items */}
          <div className="mb-4 max-h-40 overflow-y-auto">
            <h4 className="text-sm font-semibold text-gray-300 mb-2">Cache Items</h4>
            {cache.size === 0 ? (
              <p className="text-xs text-gray-400">No items in cache</p>
            ) : (
              <div className="space-y-1">
                {Array.from(cache.entries()).map(([key, item]) => (
                  <div key={key} className="flex items-center justify-between bg-gray-800 p-2 rounded text-xs">
                    <span className="text-gray-300 truncate flex-1 mr-2">{key}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">{(item.size / 1024).toFixed(1)}KB</span>
                      <button
                        onClick={() => removeItem(key)}
                        className="text-red-400 hover:text-red-300"
                        title="Remove item"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="space-y-2">
            <button
              onClick={cleanExpired}
              className="w-full bg-yellow-600 text-white py-2 px-4 rounded text-sm hover:bg-yellow-700 transition-colors flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Clean Expired
            </button>
            <button
              onClick={clearCache}
              className="w-full bg-red-600 text-white py-2 px-4 rounded text-sm hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Clear All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CacheManager;
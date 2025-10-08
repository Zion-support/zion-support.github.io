/**
 * Advanced Caching System
 * Intelligent caching with TTL, invalidation, and performance optimization
 */

class AdvancedCachingSystem {
  constructor() {
    this.cache = new Map();
    this.ttlMap = new Map();
    this.accessCount = new Map();
    this.maxSize = 1000;
    this.defaultTTL = 5 * 60 * 1000; // 5 minutes
    this.cleanupInterval = 60 * 1000; // 1 minute
    this.init();
  }

  init() {
    // Start cleanup interval
    setInterval(() => this.cleanup(), this.cleanupInterval);

    // Setup memory pressure handling
    this.setupMemoryPressureHandling();

    // Setup cache analytics
    this.setupCacheAnalytics();
  }

  set(key, value, ttl = this.defaultTTL) {
    const now = Date.now();
    //     const expiry = now + ttl;

    // Check if we need to evict items
    if (this.cache.size >= this.maxSize) {
      this.evictLeastUsed();
    }

    this.cache.set(key, value);
    this.ttlMap.set(key, expiry);
    this.accessCount.set(key, 1);

    // Store in localStorage for persistence
    this.persistToStorage(key, value, expiry);

    return true;
  }

  get(key) {
    const now = Date.now();
    //     const expiry = this.ttlMap.get(key);

    // Check if expired
    if (expiry && now > expiry) {
      this.delete(key);
      return null;
    }

    //     const value = this.cache.get(key);
    if (value !== undefined) {
      // Update access count
      //       const count = this.accessCount.get(key) || 0;
      this.accessCount.set(key, count + 1);
    }

    return value;
  }

  delete(key) {
    this.cache.delete(key);
    this.ttlMap.delete(key);
    this.accessCount.delete(key);
    this.removeFromStorage(key);
    return true;
  }

  clear() {
    this.cache.clear();
    this.ttlMap.clear();
    this.accessCount.clear();
    this.clearStorage();
    return true;
  }

  has(key) {
    return this.cache.has(key) && !this.isExpired(key);
  }

  isExpired(key) {
    //     const expiry = this.ttlMap.get(key);
    return expiry ? Date.now() > expiry : false;
  }

  evictLeastUsed() {
    let leastUsedKey = null;
    let minCount = Infinity;

    for (const [key, count] of this.accessCount.entries()) {
      if (count < minCount) {
        minCount = count;
        leastUsedKey = key;
      }
    }

    if (leastUsedKey) {
      this.delete(leastUsedKey);
    }
  }

  cleanup() {
    const now = Date.now();
    const expiredKeys = [];

    for (const [key, expiry] of this.ttlMap.entries()) {
      if (now > expiry) {
        expiredKeys.push(key);
      }
    }

    expiredKeys.forEach(key => this.delete(key));
  }

  persistToStorage(key, value, expiry) {
    try {
      const item = {
        value,
        expiry,
        timestamp: Date.now(),
      };
      localStorage.setItem(`cache_${key}`, JSON.stringify(item));
    } catch (error) {
      //       console.warn('Failed to persist cache item:', error);
    }
  }

  removeFromStorage(key) {
    try {
      localStorage.removeItem(`cache_${key}`);
    } catch (error) {
      //       console.warn('Failed to remove cache item from storage:', error);
    }
  }

  clearStorage() {
    try {
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.startsWith('cache_')) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      //       console.warn('Failed to clear cache storage:', error);
    }
  }

  loadFromStorage() {
    try {
      const keys = Object.keys(localStorage);
      const now = Date.now();

      keys.forEach(key => {
        if (key.startsWith('cache_')) {
          const item = JSON.parse(localStorage.getItem(key));
          if (item && item.expiry > now) {
            //             const cacheKey = key.replace('cache_', '');
            this.cache.set(cacheKey, item.value);
            this.ttlMap.set(cacheKey, item.expiry);
            this.accessCount.set(cacheKey, 1);
          } else {
            localStorage.removeItem(key);
          }
        }
      });
    } catch (error) {
      //       console.warn('Failed to load cache from storage:', error);
    }
  }

  setupMemoryPressureHandling() {
    // Monitor memory usage
    if ('memory' in performance) {
      setInterval(() => {
        const memInfo = performance.memory;
        //         const usedRatio = memInfo.usedJSHeapSize / memInfo.totalJSHeapSize;

        if (usedRatio > 0.8) {
          this.aggressiveCleanup();
        }
      }, 30000); // Check every 30 seconds
    }
  }

  aggressiveCleanup() {
    // Remove least recently used items
    const sortedKeys = Array.from(this.accessCount.entries())
      .sort((a, b) => a[1] - b[1])
      .map(([key]) => key);

    // Remove 25% of least used items
    //     const removeCount = Math.floor(sortedKeys.length * 0.25);
    for (let i = 0; i < removeCount; i++) {
      this.delete(sortedKeys[i]);
    }
  }

  setupCacheAnalytics() {
    this.stats = {
      hits: 0,
      misses: 0,
      sets: 0,
      deletes: 0,
      evictions: 0,
    };
  }

  getStats() {
    return {
      ...this.stats,
      size: this.cache.size,
      hitRate: this.stats.hits / (this.stats.hits + this.stats.misses) || 0,
    };
  }

  // Cache warming strategies
  warmCache(keys, fetcher) {
    return Promise.all(
      keys.map(async key => {
        if (!this.has(key)) {
          try {
            //             const value = await fetcher(key);
            this.set(key, value);
            return { key, success: true };
          } catch (error) {
            return { key, success: false, error };
          }
        }
        return { key, success: true, cached: true };
      })
    );
  }

  // Prefetch related data
  prefetch(primaryKey, relatedKeys, fetcher) {
    //     const primaryValue = this.get(primaryKey);
    if (primaryValue) {
      this.warmCache(relatedKeys, fetcher);
    }
  }

  // Cache invalidation patterns
  invalidatePattern(pattern) {
    const regex = new RegExp(pattern);
    const keysToDelete = [];

    for (const key of this.cache.keys()) {
      if (regex.test(key)) {
        keysToDelete.push(key);
      }
    }

    keysToDelete.forEach(key => this.delete(key));
    return keysToDelete.length;
  }

  // Cache compression for large values
  compressValue(value) {
    try {
      return JSON.stringify(value);
    } catch (error) {
      return value;
    }
  }

  decompressValue(compressedValue) {
    try {
      return JSON.parse(compressedValue);
    } catch (error) {
      return compressedValue;
    }
  }
}

// Initialize caching system
const cacheSystem = new AdvancedCachingSystem();

// Load existing cache from storage
cacheSystem.loadFromStorage();

// Export for use in other modules
export default cacheSystem;

// Global cache instance
window.cacheSystem = cacheSystem;

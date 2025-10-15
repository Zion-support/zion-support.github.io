export interface CacheConfig {
  maxSize: number;
  ttl: number; // Time to live in milliseconds
  strategy: 'lru' | 'fifo' | 'lfu';
}

export interface CacheItem<T = any> {
  key: string;
  value: T;
  timestamp: number;
  accessCount: number;
  lastAccessed: number;
}

export const advancedCaching = {
  config: {
    maxSize: 100,
    ttl: 300000, // 5 minutes
    strategy: 'lru' as const
  } as CacheConfig,

  cache: new Map<string, CacheItem>(),
  accessOrder: [] as string[],

  // Initialize cache with configuration
  init: (config: Partial<CacheConfig> = {}): void => {
    advancedCaching.config = { ...advancedCaching.config, ...config };
  },

  // Set item in cache
  set: <T>(key: string, value: T): void => {
    const item: CacheItem<T> = {
      key,
      value,
      timestamp: Date.now(),
      accessCount: 0,
      lastAccessed: Date.now()
    };

    // Check if cache is full
    if (advancedCaching.cache.size >= advancedCaching.config.maxSize) {
      advancedCaching.evictItem();
    }

    advancedCaching.cache.set(key, item);
    advancedCaching.updateAccessOrder(key);
  },

  // Get item from cache
  get: <T>(key: string): T | null => {
    const item = advancedCaching.cache.get(key);
    
    if (!item) return null;

    // Check if item has expired
    const now = Date.now();
    const ttl = advancedCaching.config.ttl;
    if (now - item.timestamp > ttl) {
      advancedCaching.cache.delete(key);
      advancedCaching.removeFromAccessOrder(key);
      return null;
    }

    // Update access information
    item.accessCount++;
    item.lastAccessed = now;
    advancedCaching.updateAccessOrder(key);

    return item.value as T;
  },

  // Check if key exists in cache
  has: (key: string): boolean => {
    const item = advancedCaching.cache.get(key);
    if (!item) return false;

    // Check if item has expired
    const now = Date.now();
    const ttl = advancedCaching.config.ttl;
    if (now - item.timestamp > ttl) {
      advancedCaching.cache.delete(key);
      advancedCaching.removeFromAccessOrder(key);
      return false;
    }

    return true;
  },

  // Delete item from cache
  delete: (key: string): boolean => {
    const deleted = advancedCaching.cache.delete(key);
    if (deleted) {
      advancedCaching.removeFromAccessOrder(key);
    }
    return deleted;
  },

  // Clear all items from cache
  clear: (): void => {
    advancedCaching.cache.clear();
    advancedCaching.accessOrder = [];
  },

  // Get cache statistics
  getStats: () => {
    const items = Array.from(advancedCaching.cache.values());
    const totalAccessCount = items.reduce((sum, item) => sum + item.accessCount, 0);
    const averageAccessCount = items.length > 0 ? totalAccessCount / items.length : 0;

    return {
      size: advancedCaching.cache.size,
      maxSize: advancedCaching.config.maxSize,
      hitRate: totalAccessCount > 0 ? (totalAccessCount - advancedCaching.cache.size) / totalAccessCount : 0,
      averageAccessCount,
      strategy: advancedCaching.config.strategy,
      ttl: advancedCaching.config.ttl
    };
  },

  // Evict item based on strategy
  evictItem: (): void => {
    if (advancedCaching.cache.size === 0) return;

    let keyToEvict: string;

    switch (advancedCaching.config.strategy) {
      case 'lru':
        keyToEvict = advancedCaching.accessOrder[0];
        break;
      case 'fifo':
        keyToEvict = advancedCaching.accessOrder[0];
        break;
      case 'lfu': {
        const items = Array.from(advancedCaching.cache.values());
        const leastFrequentlyUsed = items.reduce((min, item) => 
          item.accessCount < min.accessCount ? item : min
        );
        keyToEvict = leastFrequentlyUsed.key;
        break;
      }
      default:
        keyToEvict = advancedCaching.accessOrder[0];
    }

    advancedCaching.cache.delete(keyToEvict);
    advancedCaching.removeFromAccessOrder(keyToEvict);
  },

  // Update access order for LRU/FIFO strategies
  updateAccessOrder: (key: string): void => {
    advancedCaching.removeFromAccessOrder(key);
    advancedCaching.accessOrder.push(key);
  },

  // Remove key from access order
  removeFromAccessOrder: (key: string): void => {
    const index = advancedCaching.accessOrder.indexOf(key);
    if (index > -1) {
      advancedCaching.accessOrder.splice(index, 1);
    }
  },

  // Clean expired items
  cleanExpired: (): void => {
    const now = Date.now();
    const ttl = advancedCaching.config.ttl;
    
    for (const [key, item] of advancedCaching.cache.entries()) {
      if (now - item.timestamp > ttl) {
        advancedCaching.cache.delete(key);
        advancedCaching.removeFromAccessOrder(key);
      }
    }
  },

  // Get all keys
  keys: (): string[] => {
    return Array.from(advancedCaching.cache.keys());
  },

  // Get all values
  values: <T>(): T[] => {
    return Array.from(advancedCaching.cache.values()).map(item => item.value as T);
  }
};

export default advancedCaching;
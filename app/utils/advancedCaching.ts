// Advanced caching utilities with multiple strategies and optimizations

interface CacheEntry<T = any> {
  data: T;
  timestamp: number;
  ttl: number;
  accessCount: number;
  lastAccessed: number;
  priority: number;
}

interface AdvancedCacheOptions {
  ttl?: number;
  maxSize?: number;
  strategy?: 'lru' | 'lfu' | 'fifo' | 'ttl';
  storage?: 'memory' | 'sessionStorage' | 'localStorage' | 'indexedDB';
  compression?: boolean;
  encryption?: boolean;
  version?: string;
}

interface CacheStats {
  hits: number;
  misses: number;
  size: number;
  maxSize: number;
  hitRate: number;
  memoryUsage: number;
}

class AdvancedCache<T = any> {
  private cache: Map<string, CacheEntry<T>> = new Map();
  private accessOrder: string[] = [];
  private options: Required<AdvancedCacheOptions>;
  private stats: CacheStats = {
    hits: 0,
    misses: 0,
    size: 0,
    maxSize: 0,
    hitRate: 0,
    memoryUsage: 0
  };

  constructor(options: AdvancedCacheOptions = {}) {
    this.options = {
      ttl: options.ttl || 5 * 60 * 1000,
      maxSize: options.maxSize || 100,
      strategy: options.strategy || 'lru',
      storage: options.storage || 'memory',
      compression: options.compression || false,
      encryption: options.encryption || false,
      version: options.version || '1.0.0'
    };
    this.stats.maxSize = this.options.maxSize;
  }

  set(key: string, data: T, customTtl?: number, priority: number = 1): void {
    const ttl = customTtl || this.options.ttl;
    const entry: CacheEntry<T> = {
      data,
      timestamp: Date.now(),
      ttl,
      accessCount: 0,
      lastAccessed: Date.now(),
      priority
    };

    // Remove entry if cache is full
    if (this.cache.size >= this.options.maxSize) {
      this.evictEntry();
    }

    this.cache.set(key, entry);
    this.updateAccessOrder(key);
    this.updateStats();

    // Store in persistent storage if specified
    if (this.options.storage !== 'memory') {
      this.persistEntry(key, entry);
    }
  }

  get(key: string): T | null {
    let entry = this.cache.get(key);

    // Try to get from persistent storage if not in memory
    if (!entry && this.options.storage !== 'memory') {
      entry = this.loadFromStorage(key);
      if (entry) {
        this.cache.set(key, entry);
      }
    }

    if (!entry) {
      this.stats.misses++;
      this.updateStats();
      return null;
    }

    // Check if entry has expired
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.delete(key);
      this.stats.misses++;
      this.updateStats();
      return null;
    }

    // Update access information
    entry.accessCount++;
    entry.lastAccessed = Date.now();
    this.updateAccessOrder(key);
    this.stats.hits++;
    this.updateStats();

    return entry.data;
  }

  has(key: string): boolean {
    return this.get(key) !== null;
  }

  delete(key: string): void {
    this.cache.delete(key);
    this.removeFromAccessOrder(key);
    this.removeFromStorage(key);
    this.updateStats();
  }

  clear(): void {
    this.cache.clear();
    this.accessOrder = [];
    this.clearStorage();
    this.stats = {
      hits: 0,
      misses: 0,
      size: 0,
      maxSize: this.options.maxSize,
      hitRate: 0,
      memoryUsage: 0
    };
  }

  size(): number {
    return this.cache.size;
  }

  getStats(): CacheStats {
    return { ...this.stats };
  }

  // Eviction strategies
  private evictEntry(): void {
    switch (this.options.strategy) {
      case 'lru':
        this.evictLRU();
        break;
      case 'lfu':
        this.evictLFU();
        break;
      case 'fifo':
        this.evictFIFO();
        break;
      case 'ttl':
        this.evictTTL();
        break;
    }
  }

  private evictLRU(): void {
    if (this.accessOrder.length > 0) {
      const keyToRemove = this.accessOrder[0];
      this.delete(keyToRemove);
    }
  }

  private evictLFU(): void {
    let minAccessCount = Infinity;
    let keyToRemove = '';

    for (const [key, entry] of this.cache.entries()) {
      if (entry.accessCount < minAccessCount) {
        minAccessCount = entry.accessCount;
        keyToRemove = key;
      }
    }

    if (keyToRemove) {
      this.delete(keyToRemove);
    }
  }

  private evictFIFO(): void {
    if (this.accessOrder.length > 0) {
      const keyToRemove = this.accessOrder[0];
      this.delete(keyToRemove);
    }
  }

  private evictTTL(): void {
    let oldestTime = Infinity;
    let keyToRemove = '';

    for (const [key, entry] of this.cache.entries()) {
      if (entry.timestamp < oldestTime) {
        oldestTime = entry.timestamp;
        keyToRemove = key;
      }
    }

    if (keyToRemove) {
      this.delete(keyToRemove);
    }
  }

  private updateAccessOrder(key: string): void {
    this.removeFromAccessOrder(key);
    this.accessOrder.push(key);
  }

  private removeFromAccessOrder(key: string): void {
    const index = this.accessOrder.indexOf(key);
    if (index > -1) {
      this.accessOrder.splice(index, 1);
    }
  }

  private updateStats(): void {
    this.stats.size = this.cache.size;
    const total = this.stats.hits + this.stats.misses;
    this.stats.hitRate = total > 0 ? this.stats.hits / total : 0;
    
    // Estimate memory usage (rough calculation)
    this.stats.memoryUsage = this.cache.size * 1024; // Rough estimate
  }

  // Persistent storage methods
  private async persistEntry(key: string, entry: CacheEntry<T>): Promise<void> {
    if (typeof window === 'undefined') return;

    try {
      const data = this.options.compression 
        ? await this.compress(JSON.stringify(entry))
        : JSON.stringify(entry);

      switch (this.options.storage) {
        case 'sessionStorage':
          window.sessionStorage.setItem(`cache_${key}`, data);
          break;
        case 'localStorage':
          window.localStorage.setItem(`cache_${key}`, data);
          break;
        case 'indexedDB':
          await this.storeInIndexedDB(key, data);
          break;
      }
    } catch (error) {
      console.warn('Failed to persist cache entry:', error);
    }
  }

  private async loadFromStorage(key: string): Promise<CacheEntry<T> | null> {
    if (typeof window === 'undefined') return null;

    try {
      let data: string | null = null;

      switch (this.options.storage) {
        case 'sessionStorage':
          data = window.sessionStorage.getItem(`cache_${key}`);
          break;
        case 'localStorage':
          data = window.localStorage.getItem(`cache_${key}`);
          break;
        case 'indexedDB':
          data = await this.loadFromIndexedDB(key);
          break;
      }

      if (data) {
        const decompressed = this.options.compression 
          ? await this.decompress(data)
          : data;
        return JSON.parse(decompressed);
      }
    } catch (error) {
      console.warn('Failed to load cache entry from storage:', error);
    }

    return null;
  }

  private removeFromStorage(key: string): void {
    if (typeof window === 'undefined') return;

    try {
      switch (this.options.storage) {
        case 'sessionStorage':
          window.sessionStorage.removeItem(`cache_${key}`);
          break;
        case 'localStorage':
          window.localStorage.removeItem(`cache_${key}`);
          break;
        case 'indexedDB':
          this.removeFromIndexedDB(key);
          break;
      }
    } catch (error) {
      console.warn('Failed to remove cache entry from storage:', error);
    }
  }

  private clearStorage(): void {
    if (typeof window === 'undefined') return;

    try {
      switch (this.options.storage) {
        case 'sessionStorage':
          for (let i = 0; i < window.sessionStorage.length; i++) {
            const key = window.sessionStorage.key(i);
            if (key && key.startsWith('cache_')) {
              window.sessionStorage.removeItem(key);
            }
          }
          break;
        case 'localStorage':
          for (let i = 0; i < window.localStorage.length; i++) {
            const key = window.localStorage.key(i);
            if (key && key.startsWith('cache_')) {
              window.localStorage.removeItem(key);
            }
          }
          break;
        case 'indexedDB':
          this.clearIndexedDB();
          break;
      }
    } catch (error) {
      console.warn('Failed to clear storage:', error);
    }
  }

  // IndexedDB methods
  private async storeInIndexedDB(key: string, data: string): Promise<void> {
    // Implementation would go here
    console.log('IndexedDB storage not implemented');
  }

  private async loadFromIndexedDB(key: string): Promise<string | null> {
    // Implementation would go here
    return null;
  }

  private removeFromIndexedDB(key: string): void {
    // Implementation would go here
  }

  private clearIndexedDB(): void {
    // Implementation would go here
  }

  // Compression methods (simple base64 for demo)
  private async compress(data: string): Promise<string> {
    return btoa(data);
  }

  private async decompress(data: string): Promise<string> {
    return atob(data);
  }

  // Cleanup expired entries
  cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > entry.ttl) {
        this.delete(key);
      }
    }
  }
}

// Create default cache instances
export const memoryCache = new AdvancedCache();
export const sessionCache = new AdvancedCache({ storage: 'sessionStorage' });
export const persistentCache = new AdvancedCache({ storage: 'localStorage' });

// Export the class and types
export { AdvancedCache, type AdvancedCacheOptions, type CacheEntry, type CacheStats };

// Utility functions
export const createCacheKey = (prefix: string, ...parts: (string | number)[]): string => {
  return `${prefix}_${parts.join('_')}`;
};

export const withAdvancedCache = async <T>(
  key: string,
  fetcher: () => Promise<T>,
  options?: { ttl?: number; priority?: number; strategy?: 'lru' | 'lfu' | 'fifo' | 'ttl' }
): Promise<T> => {
  const cache = new AdvancedCache(options);
  const cached = cache.get(key);
  
  if (cached !== null) {
    return cached;
  }

  const data = await fetcher();
  cache.set(key, data, options?.ttl, options?.priority || 1);
  return data;
};

// Auto-cleanup every 5 minutes
if (typeof window !== 'undefined') {
  setInterval(() => {
    memoryCache.cleanup();
    sessionCache.cleanup();
    persistentCache.cleanup();
  }, 5 * 60 * 1000);
}
// Cache manager utility

export interface CacheManagerOptions {
  defaultTTL?: number;
  maxSize?: number;
  storage?: 'memory' | 'localStorage' | 'sessionStorage';
  enableCompression?: boolean;
}

export interface CacheEntry<T = any> {
  value: T;
  timestamp: number;
  ttl: number;
  hits: number;
  lastAccessed: number;
}

export class CacheManager {
  private cache: Map<string, CacheEntry> = new Map();
  private options: Required<CacheManagerOptions>;
  private stats = {
    hits: 0,
    misses: 0,
    evictions: 0
  };

  constructor(options: CacheManagerOptions = {}) {
    this.options = {
      defaultTTL: 5 * 60 * 1000, // 5 minutes
      maxSize: 1000,
      storage: 'memory',
      enableCompression: false,
      ...options
    };

    // Load from storage if needed
    if (this.options.storage !== 'memory') {
      this.loadFromStorage();
    }

    // Start cleanup interval
    setInterval(() => this.cleanup(), 60000); // Cleanup every minute
  }

  /**
   * Set a value in the cache
   */
  set<T>(key: string, value: T, ttl?: number): void {
    const entry: CacheEntry<T> = {
      value,
      timestamp: Date.now(),
      ttl: ttl || this.options.defaultTTL,
      hits: 0,
      lastAccessed: Date.now()
    };

    this.cache.set(key, entry);

    // Enforce max size
    if (this.cache.size > this.options.maxSize) {
      this.evictLeastRecentlyUsed();
    }

    // Persist to storage if needed
    if (this.options.storage !== 'memory') {
      this.persistToStorage();
    }
  }

  /**
   * Get a value from the cache
   */
  get<T>(key: string): T | null {
    const entry = this.cache.get(key);
    
    if (!entry) {
      this.stats.misses++;
      return null;
    }

    // Check if expired
    if (this.isExpired(entry)) {
      this.cache.delete(key);
      this.stats.misses++;
      return null;
    }

    // Update access info
    entry.hits++;
    entry.lastAccessed = Date.now();
    this.stats.hits++;

    return entry.value as T;
  }

  /**
   * Check if a key exists and is not expired
   */
  has(key: string): boolean {
    const entry = this.cache.get(key);
    return entry ? !this.isExpired(entry) : false;
  }

  /**
   * Delete a key from the cache
   */
  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  /**
   * Clear all cache entries
   */
  clear(): void {
    this.cache.clear();
    
    if (this.options.storage !== 'memory') {
      this.clearStorage();
    }
  }

  /**
   * Get cache statistics
   */
  getStats(): {
    size: number;
    maxSize: number;
    hitRate: number;
    hits: number;
    misses: number;
    evictions: number;
  } {
    const total = this.stats.hits + this.stats.misses;
    return {
      size: this.cache.size,
      maxSize: this.options.maxSize,
      hitRate: total > 0 ? this.stats.hits / total : 0,
      hits: this.stats.hits,
      misses: this.stats.misses,
      evictions: this.stats.evictions
    };
  }

  /**
   * Get cache entry info
   */
  getEntryInfo(key: string): {
    exists: boolean;
    expired: boolean;
    hits: number;
    age: number;
    ttl: number;
  } | null {
    const entry = this.cache.get(key);
    
    if (!entry) {
      return null;
    }

    return {
      exists: true,
      expired: this.isExpired(entry),
      hits: entry.hits,
      age: Date.now() - entry.timestamp,
      ttl: entry.ttl
    };
  }

  /**
   * Clean up expired entries
   */
  cleanup(): void {
    const now = Date.now();
    let cleaned = 0;

    for (const [key, entry] of this.cache.entries()) {
      if (this.isExpired(entry)) {
        this.cache.delete(key);
        cleaned++;
      }
    }

    if (cleaned > 0 && this.options.storage !== 'memory') {
      this.persistToStorage();
    }
  }

  /**
   * Evict least recently used entry
   */
  private evictLeastRecentlyUsed(): void {
    let oldestKey = '';
    let oldestTime = Date.now();

    for (const [key, entry] of this.cache.entries()) {
      if (entry.lastAccessed < oldestTime) {
        oldestTime = entry.lastAccessed;
        oldestKey = key;
      }
    }

    if (oldestKey) {
      this.cache.delete(oldestKey);
      this.stats.evictions++;
    }
  }

  /**
   * Check if entry is expired
   */
  private isExpired(entry: CacheEntry): boolean {
    return Date.now() - entry.timestamp > entry.ttl;
  }

  /**
   * Persist cache to storage
   */
  private persistToStorage(): void {
    if (this.options.storage === 'localStorage' || this.options.storage === 'sessionStorage') {
      const storage = this.options.storage === 'localStorage' ? localStorage : sessionStorage;
      const data = Array.from(this.cache.entries());
      storage.setItem('cache_manager', JSON.stringify(data));
    }
  }

  /**
   * Load cache from storage
   */
  private loadFromStorage(): void {
    if (this.options.storage === 'localStorage' || this.options.storage === 'sessionStorage') {
      const storage = this.options.storage === 'localStorage' ? localStorage : sessionStorage;
      const data = storage.getItem('cache_manager');
      
      if (data) {
        try {
          const entries = JSON.parse(data);
          this.cache = new Map(entries);
        } catch (error) {
          console.error('Failed to load cache from storage:', error);
        }
      }
    }
  }

  /**
   * Clear storage
   */
  private clearStorage(): void {
    if (this.options.storage === 'localStorage') {
      localStorage.removeItem('cache_manager');
    } else if (this.options.storage === 'sessionStorage') {
      sessionStorage.removeItem('cache_manager');
    }
  }
}

export default CacheManager;
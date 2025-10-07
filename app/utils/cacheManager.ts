/**
 * Advanced Cache Manager
 * Provides intelligent caching with TTL, LRU eviction, and storage persistence
 */

export interface CacheEntry<T> {
  value: T;
  expiresAt: number;
  accessCount: number;
  lastAccessed: number;
  size: number;
}

export interface CacheConfig {
  maxSize: number; // Maximum cache size in bytes
  defaultTTL: number; // Time to live in milliseconds
  enablePersistence: boolean; // Store cache in localStorage
  persistenceKey: string;
  maxEntries: number; // Maximum number of entries
  evictionPolicy: 'LRU' | 'LFU' | 'FIFO';
}

const defaultConfig: CacheConfig = {
  maxSize: 10 * 1024 * 1024, // 10MB
  defaultTTL: 5 * 60 * 1000, // 5 minutes
  enablePersistence: false,
  persistenceKey: 'app-cache',
  maxEntries: 1000,
  evictionPolicy: 'LRU',
};

/**
 * Advanced Cache Manager with multiple eviction policies
 */
export class CacheManager {
  private static instance: CacheManager;
  private cache: Map<string, CacheEntry<unknown>> = new Map();
  private config: CacheConfig;
  private currentSize: number = 0;
  private stats = {
    hits: 0,
    misses: 0,
    evictions: 0,
  };

  private constructor(config: Partial<CacheConfig> = {}) {
    this.config = { ...defaultConfig, ...config };
    
    if (this.config.enablePersistence) {
      this.loadFromStorage();
    }
  }

  /**
   * Get singleton instance
   */
  static getInstance(config?: Partial<CacheConfig>): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager(config);
    }
    return CacheManager.instance;
  }

  /**
   * Set a value in cache with optional TTL
   */
  set<T>(key: string, value: T, ttl?: number): void {
    const expiresAt = Date.now() + (ttl || this.config.defaultTTL);
    const size = this.estimateSize(value);

    // Check if we need to evict entries
    while (
      this.currentSize + size > this.config.maxSize ||
      this.cache.size >= this.config.maxEntries
    ) {
      this.evict();
    }

    const entry: CacheEntry<T> = {
      value,
      expiresAt,
      accessCount: 0,
      lastAccessed: Date.now(),
      size,
    };

    // Remove old entry size if updating
    const oldEntry = this.cache.get(key);
    if (oldEntry) {
      this.currentSize -= oldEntry.size;
    }

    this.cache.set(key, entry as CacheEntry<unknown>);
    this.currentSize += size;

    if (this.config.enablePersistence) {
      this.saveToStorage();
    }
  }

  /**
   * Get a value from cache
   */
  get<T>(key: string): T | null {
    const entry = this.cache.get(key) as CacheEntry<T> | undefined;

    if (!entry) {
      this.stats.misses++;
      return null;
    }

    // Check if expired
    if (Date.now() > entry.expiresAt) {
      this.delete(key);
      this.stats.misses++;
      return null;
    }

    // Update access statistics
    entry.accessCount++;
    entry.lastAccessed = Date.now();
    this.stats.hits++;

    return entry.value;
  }

  /**
   * Check if key exists and is not expired
   */
  has(key: string): boolean {
    const entry = this.cache.get(key);
    if (!entry) return false;
    
    if (Date.now() > entry.expiresAt) {
      this.delete(key);
      return false;
    }
    
    return true;
  }

  /**
   * Delete a key from cache
   */
  delete(key: string): boolean {
    const entry = this.cache.get(key);
    if (entry) {
      this.currentSize -= entry.size;
      const result = this.cache.delete(key);
      
      if (this.config.enablePersistence) {
        this.saveToStorage();
      }
      
      return result;
    }
    return false;
  }

  /**
   * Clear all cache entries
   */
  clear(): void {
    this.cache.clear();
    this.currentSize = 0;
    this.stats = { hits: 0, misses: 0, evictions: 0 };
    
    if (this.config.enablePersistence && typeof localStorage !== 'undefined') {
      localStorage.removeItem(this.config.persistenceKey);
    }
  }

  /**
   * Evict entries based on configured policy
   */
  private evict(): void {
    if (this.cache.size === 0) return;

    let keyToEvict: string | null = null;

    switch (this.config.evictionPolicy) {
      case 'LRU': // Least Recently Used
        keyToEvict = this.findLRU();
        break;
      case 'LFU': // Least Frequently Used
        keyToEvict = this.findLFU();
        break;
      case 'FIFO': // First In First Out
        keyToEvict = this.cache.keys().next().value ?? null;
        break;
    }

    if (keyToEvict) {
      this.delete(keyToEvict);
      this.stats.evictions++;
    }
  }

  /**
   * Find least recently used entry
   */
  private findLRU(): string | null {
    let lruKey: string | null = null;
    let lruTime = Infinity;

    for (const [key, entry] of this.cache.entries()) {
      if (entry.lastAccessed < lruTime) {
        lruTime = entry.lastAccessed;
        lruKey = key;
      }
    }

    return lruKey;
  }

  /**
   * Find least frequently used entry
   */
  private findLFU(): string | null {
    let lfuKey: string | null = null;
    let lfuCount = Infinity;

    for (const [key, entry] of this.cache.entries()) {
      if (entry.accessCount < lfuCount) {
        lfuCount = entry.accessCount;
        lfuKey = key;
      }
    }

    return lfuKey;
  }

  /**
   * Estimate size of value in bytes
   */
  private estimateSize(value: unknown): number {
    try {
      return new Blob([JSON.stringify(value)]).size;
    } catch {
      // Fallback estimation
      return 1024; // 1KB default
    }
  }

  /**
   * Get cache statistics
   */
  getStats() {
    const hitRate = this.stats.hits + this.stats.misses > 0
      ? (this.stats.hits / (this.stats.hits + this.stats.misses)) * 100
      : 0;

    return {
      ...this.stats,
      hitRate: hitRate.toFixed(2) + '%',
      entries: this.cache.size,
      size: this.formatBytes(this.currentSize),
      maxSize: this.formatBytes(this.config.maxSize),
      utilization: ((this.currentSize / this.config.maxSize) * 100).toFixed(2) + '%',
    };
  }

  /**
   * Format bytes to human-readable string
   */
  private formatBytes(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  }

  /**
   * Save cache to localStorage
   */
  private saveToStorage(): void {
    if (typeof localStorage === 'undefined') return;

    try {
      const data = {
        entries: Array.from(this.cache.entries()),
        stats: this.stats,
        timestamp: Date.now(),
      };
      localStorage.setItem(this.config.persistenceKey, JSON.stringify(data));
    } catch (error) {
      console.warn('Failed to persist cache:', error);
    }
  }

  /**
   * Load cache from localStorage
   */
  private loadFromStorage(): void {
    if (typeof localStorage === 'undefined') return;

    try {
      const stored = localStorage.getItem(this.config.persistenceKey);
      if (!stored) return;

      const data = JSON.parse(stored);
      
      // Restore entries that haven't expired
      const now = Date.now();
      for (const [key, entry] of data.entries) {
        if (entry.expiresAt > now) {
          this.cache.set(key, entry);
          this.currentSize += entry.size;
        }
      }

      this.stats = data.stats || this.stats;
    } catch (error) {
      console.warn('Failed to load cache from storage:', error);
    }
  }

  /**
   * Clean expired entries
   */
  cleanExpired(): number {
    const now = Date.now();
    let cleaned = 0;

    for (const [key, entry] of this.cache.entries()) {
      if (now > entry.expiresAt) {
        this.delete(key);
        cleaned++;
      }
    }

    return cleaned;
  }
}

/**
 * Convenience functions
 */
export const cacheManager = CacheManager.getInstance();

export const cacheGet = <T>(key: string): T | null => {
  return cacheManager.get<T>(key);
};

export const cacheSet = <T>(key: string, value: T, ttl?: number): void => {
  cacheManager.set(key, value, ttl);
};

export const cacheHas = (key: string): boolean => {
  return cacheManager.has(key);
};

export const cacheDelete = (key: string): boolean => {
  return cacheManager.delete(key);
};

export default CacheManager;

'use client';

/**
 * Cache Manager
 * Provides in-memory and localStorage caching with TTL support
 */

export enum CacheStorage {
  Memory = 'memory',
  LocalStorage = 'localStorage',
  SessionStorage = 'sessionStorage'
}

export interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  storage?: CacheStorage;
  compress?: boolean;
}

export interface CacheConfig {
  defaultTTL: number;
  maxSize: number;
  storage: CacheStorage;
}

interface CacheItem<T = any> {
  value: T;
  timestamp: number;
  ttl: number;
}

class CacheManager {
  private memoryCache = new Map<string, CacheItem>();
  private config: CacheConfig;

  constructor(config: Partial<CacheConfig> = {}) {
    this.config = {
      defaultTTL: 300000, // 5 minutes
      maxSize: 1000,
      storage: CacheStorage.Memory,
      ...config
    };
  }

  private getStorage(): Storage | null {
    if (typeof window === 'undefined') return null;
    
    switch (this.config.storage) {
      case CacheStorage.LocalStorage:
        return localStorage;
      case CacheStorage.SessionStorage:
        return sessionStorage;
      default:
        return null;
    }
  }

  private isExpired(item: CacheItem): boolean {
    return Date.now() - item.timestamp > item.ttl;
  }

  private serialize(value: any): string {
    try {
      return JSON.stringify(value);
    } catch (error) {
      console.error('Failed to serialize cache value:', error);
      return '';
    }
  }

  private deserialize<T>(value: string): T | null {
    try {
      return JSON.parse(value);
    } catch (error) {
      console.error('Failed to deserialize cache value:', error);
      return null;
    }
  }

  set<T>(key: string, value: T, options: CacheOptions = {}): void {
    const ttl = options.ttl ?? this.config.defaultTTL;
    const item: CacheItem<T> = {
      value,
      timestamp: Date.now(),
      ttl
    };

    if (options.storage === CacheStorage.Memory || this.config.storage === CacheStorage.Memory) {
      // Check cache size limit
      if (this.memoryCache.size >= this.config.maxSize) {
        const firstKey = this.memoryCache.keys().next().value;
        this.memoryCache.delete(firstKey);
      }
      this.memoryCache.set(key, item);
    } else {
      const storage = this.getStorage();
      if (storage) {
        const serialized = this.serialize(item);
        if (serialized) {
          storage.setItem(key, serialized);
        }
      }
    }
  }

  get<T>(key: string, options: CacheOptions = {}): T | null {
    const storage = options.storage ?? this.config.storage;

    if (storage === CacheStorage.Memory) {
      const item = this.memoryCache.get(key);
      if (!item || this.isExpired(item)) {
        this.memoryCache.delete(key);
        return null;
      }
      return item.value as T;
    } else {
      const storageInstance = this.getStorage();
      if (!storageInstance) return null;

      const serialized = storageInstance.getItem(key);
      if (!serialized) return null;

      const item = this.deserialize<CacheItem<T>>(serialized);
      if (!item || this.isExpired(item)) {
        storageInstance.removeItem(key);
        return null;
      }
      return item.value;
    }
  }

  has(key: string, options: CacheOptions = {}): boolean {
    return this.get(key, options) !== null;
  }

  delete(key: string, options: CacheOptions = {}): void {
    const storage = options.storage ?? this.config.storage;

    if (storage === CacheStorage.Memory) {
      this.memoryCache.delete(key);
    } else {
      const storageInstance = this.getStorage();
      if (storageInstance) {
        storageInstance.removeItem(key);
      }
    }
  }

  clear(options: CacheOptions = {}): void {
    const storage = options.storage ?? this.config.storage;

    if (storage === CacheStorage.Memory) {
      this.memoryCache.clear();
    } else {
      const storageInstance = this.getStorage();
      if (storageInstance) {
        // Clear only our cache keys (assuming they have a prefix)
        const keys = Object.keys(storageInstance);
        keys.forEach(key => {
          if (key.startsWith('cache_')) {
            storageInstance.removeItem(key);
          }
        });
      }
    }
  }

  size(options: CacheOptions = {}): number {
    const storage = options.storage ?? this.config.storage;

    if (storage === CacheStorage.Memory) {
      return this.memoryCache.size;
    } else {
      const storageInstance = this.getStorage();
      if (!storageInstance) return 0;

      const keys = Object.keys(storageInstance);
      return keys.filter(key => key.startsWith('cache_')).length;
    }
  }

  // Clean up expired items
  cleanup(): void {
    if (this.config.storage === CacheStorage.Memory) {
      for (const [key, item] of this.memoryCache.entries()) {
        if (this.isExpired(item)) {
          this.memoryCache.delete(key);
        }
      }
    } else {
      const storage = this.getStorage();
      if (!storage) return;

      const keys = Object.keys(storage);
      keys.forEach(key => {
        if (key.startsWith('cache_')) {
          const serialized = storage.getItem(key);
          if (serialized) {
            const item = this.deserialize<CacheItem>(serialized);
            if (!item || this.isExpired(item)) {
              storage.removeItem(key);
            }
          }
        }
      });
    }
  }
}

// Create default cache manager instance
export const cacheManager = new CacheManager();
export default cacheManager;
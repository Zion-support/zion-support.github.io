interface CacheItem<T> {
  value: T;
  expiresAt: number;
  createdAt: number;
}

interface CacheConfig {
  defaultTTL: number; // Time to live in milliseconds
  maxSize: number;
  cleanupInterval: number;
}

class CacheManager<T = any> {
  private cache: Map<string, CacheItem<T>> = new Map();
  private config: CacheConfig;
  private cleanupTimer?: NodeJS.Timeout;

  constructor(config: Partial<CacheConfig> = {}) {
    this.config = {
      defaultTTL: 5 * 60 * 1000, // 5 minutes
      maxSize: 1000,
      cleanupInterval: 60 * 1000, // 1 minute
      ...config
    };
    this.startCleanup();
  }

  set(key: string, value: T, ttl?: number): void {
    const now = Date.now();
    const expiresAt = now + (ttl || this.config.defaultTTL);
    
    this.cache.set(key, {
      value,
      expiresAt,
      createdAt: now
    });

    // Remove oldest items if cache is full
    if (this.cache.size > this.config.maxSize) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
  }

  get(key: string): T | null {
    const item = this.cache.get(key);
    if (!item) return null;

    if (Date.now() > item.expiresAt) {
      this.cache.delete(key);
      return null;
    }

    return item.value;
  }

  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  size(): number {
    return this.cache.size;
  }

  private startCleanup(): void {
    this.cleanupTimer = setInterval(() => {
      const now = Date.now();
      for (const [key, item] of this.cache.entries()) {
        if (now > item.expiresAt) {
          this.cache.delete(key);
        }
      }
    }, this.config.cleanupInterval);
  }

  destroy(): void {
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
    }
    this.cache.clear();
  }
}

// Export singleton instances
export const apiCache = new CacheManager({ defaultTTL: 5 * 60 * 1000 });
export const userCache = new CacheManager({ defaultTTL: 15 * 60 * 1000 });
export const staticCache = new CacheManager({ defaultTTL: 60 * 60 * 1000 });

export default CacheManager;

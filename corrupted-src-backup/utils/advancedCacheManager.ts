/**
 * Advanced cache manager for efficient data caching
 */

interface CacheConfig {
  maxAge: number; // milliseconds
  maxSize: number; // maximum number of entries
  strategy: 'LRU' | 'LFU' | 'FIFO';
}

interface CacheEntry<T> {
  key: string;
  value: T;
  timestamp: number;
  accessCount: number;
  lastAccessed: number;
}

class AdvancedCacheManager<T> {
  private cache: Map<string, CacheEntry<T>> = new Map();
  private config: CacheConfig;
  private hits = 0;
  private misses = 0;

  constructor(config: Partial<CacheConfig> = {}) {
    this.config = {
      maxAge: 5 * 60 * 1000, // 5 minutes
      maxSize: 1000,
      strategy: 'LRU',
      ...config,
    };
  }

  public get(key: string): T | null {
    const entry = this.cache.get(key);

    if (!entry) {
      this.misses++;
      return null;
    }

    // Check if entry has expired
    if (Date.now() - entry.timestamp > this.config.maxAge) {
      this.cache.delete(key);
      this.misses++;
      return null;
    }

    // Update access statistics
    entry.accessCount++;
    entry.lastAccessed = Date.now();
    this.hits++;

    return entry.value;
  }

  public set(key: string, value: T): void {
    // Check if cache is full
    if (this.cache.size >= this.config.maxSize) {
      this.evictEntry();
    }

    const entry: CacheEntry<T> = {
      key,
      value,
      timestamp: Date.now(),
      accessCount: 1,
      lastAccessed: Date.now(),
    };

    this.cache.set(key, entry);
  }

  public has(key: string): boolean {
    const entry = this.cache.get(key);

    if (!entry) {
      return false;
    }

    // Check if entry has expired
    if (Date.now() - entry.timestamp > this.config.maxAge) {
      this.cache.delete(key);
      return false;
    }

    return true;
  }

  public delete(key: string): boolean {
    return this.cache.delete(key);
  }

  public clear(): void {
    this.cache.clear();
    this.hits = 0;
    this.misses = 0;
  }

  public size(): number {
    return this.cache.size;
  }

  public getStats(): { hits: number; misses: number; hitRate: number } {
//     const total = this.hits + this.misses;
    return {
      hits: this.hits,
      misses: this.misses,
      hitRate: total > 0 ? this.hits / total : 0,
    };
  }

  private evictEntry(): void {
    switch (this.config.strategy) {
      case 'LRU':
        this.evictLRU();
        break;
      case 'LFU':
        this.evictLFU();
        break;
      case 'FIFO':
        this.evictFIFO();
        break;
    }
  }

  private evictLRU(): void {
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
    }
  }

  private evictLFU(): void {
    let leastFrequentKey = '';
    let leastFrequentCount = Infinity;

    for (const [key, entry] of this.cache.entries()) {
      if (entry.accessCount < leastFrequentCount) {
        leastFrequentCount = entry.accessCount;
        leastFrequentKey = key;
      }
    }

    if (leastFrequentKey) {
      this.cache.delete(leastFrequentKey);
    }
  }

  private evictFIFO(): void {
    let oldestKey = '';
    let oldestTime = Date.now();

    for (const [key, entry] of this.cache.entries()) {
      if (entry.timestamp < oldestTime) {
        oldestTime = entry.timestamp;
        oldestKey = key;
      }
    }

    if (oldestKey) {
      this.cache.delete(oldestKey);
    }
  }

  public cleanup(): void {
    const now = Date.now();
    const expiredKeys: string[] = [];

    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > this.config.maxAge) {
        expiredKeys.push(key);
      }
    }

    expiredKeys.forEach(key => this.cache.delete(key));
  }
}

export default AdvancedCacheManager;

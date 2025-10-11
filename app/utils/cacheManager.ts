<<<<<<< HEAD
'use client';
/**;
 * Cache Manager;
 * Provides in-memory and localStorage caching with TTL support;
 */;
<<<<<<< HEAD
export enum CacheStorage {}}Memory = 'memory',;
  LocalStorage = 'localStorage',;
=======
export enum CacheStorage {}
  Memory = 'memory',
  LocalStorage = 'localStorage',
>>>>>>> origin/main
  SessionStorage = 'sessionStorage';
}
export interface CacheOptions {ttl?: number; // Time to live in milliseconds;}}export interface CacheOptions {}}ttl?: number; // Time to live in milliseconds;
  storage?: CacheStorage;
  compress?: boolean;
}
export interface CacheConfig {}}storage?: CacheStorage;
  defaultTTL?: number;
=======
'use client'
/**
 * Cache Manager
 * Provides in-memory and localStorage caching with TTL support
 */
export enum CacheStorage {}
  Memory = 'memory',
  LocalStorage = 'localStorage',
  SessionStorage = 'sessionStorage'
}
export interface CacheOptions {
    ttl?: number; // Time to live in milliseconds
  }
export interface CacheOptions {}
  ttl?: number; // Time to live in milliseconds
<<<<<<< HEAD
  storage?: CacheStorage;
  compress?: boolean;
=======
  storage?: CacheStorage
  compress?: boolean
>>>>>>> origin/main
}
export interface CacheConfig {}
<<<<<<< HEAD
  storage?: CacheStorage;
  defaultTTL?: number;
}

export interface CacheEntry<T> {}
  value: T,
=======
  storage?: CacheStorage
  defaultTTL?: number
>>>>>>> origin/main
}
export interface CacheEntry<T> {}value: T,
>>>>>>> origin/main
  timestamp: number,
  ttl: number,
}
export interface CacheStats {}}hits: number,
  misses: number,
  hitRate: number,
  count: number,
  entries: number,
}
<<<<<<< HEAD

export class CacheManager<T = unknown> {}
  private cache: Map<string, CacheEntry<T>> = new Map();
  private stats: CacheStats = {
=======
<<<<<<< HEAD
export class CacheManager<T = unknown> {}private cache: Map<string, CacheEntry<T>> = new Map();
  private stats: CacheStats = {,
=======
export class CacheManager</T><T = unknown> {}
  private cache: Map</T><string, CacheEntry<T>> = new Map()
  private stats: CacheStats = {
>>>>>>> origin/main
>>>>>>> origin/main
    hits: 0,
    misses: 0,
    hitRate: 0,
    count: 0,
<<<<<<< HEAD
    entries: 0,
  };
  private config: Required<CacheConfig>;
,
=======
<<<<<<< HEAD
    entries: 0,}}
  private config: Required<CacheConfig>,
=======
    entries: 0,
  }
  }
  private config: Required</string><CacheConfig>
>>>>>>> origin/main
,
  constructor(config: CacheConfig = {,)}) {this.config = {
      storage: config.storage || CacheStorage.Memory,
      defaultTTL: config.defaultTTL || 5 * 60 * 1000 // 5 minutes;,}private stats: CacheStats = {,}hits: 0,
    misses: 0,
    hitRate: 0,
    count: 0,
    entries: 0,
  }
<<<<<<< HEAD
  private config: Required<CacheConfig>,
constructor(config: CacheConfig = {,)}) {}this.config = {}storage: config.storage || CacheStorage.Memory,
      defaultTTL: config.defaultTTL || 5 * 60 * 1000 // 5 minutes,
    }
  }
/**;
   * Set a value in the cache;
   */;
<<<<<<< HEAD
  set(key: string, value: T, ttl?: number): void {const entry: CacheEntry<T> = {,}
      value;}set(key: string, value: T, ttl?: number): void {}}const entry: CacheEntry<T> = {,}value,;
=======
=======
  private config: Required</CacheConfig><CacheConfig>
constructor(config: CacheConfig = {}) {}
    this.config = {}
      storage: config.storage || CacheStorage.Memory,
      defaultTTL: config.defaultTTL || 5 * 60 * 1000 // 5 minutes,
    }
  }
/**
   * Set a value in the cache
   */
>>>>>>> origin/main
  set(key: string, value: T, ttl?: number): void {
    const entry: CacheEntry</CacheConfig><T> = {
      value
  }
  set(key: string, value: T, ttl?: number): void {}
    const entry: CacheEntry</T><T> = {}
      value,
>>>>>>> origin/main
      timestamp: Date.now(),
      ttl: ttl || this.config.defaultTTL,
    }
<<<<<<< HEAD
this.cache.set(key, entry);
    this.stats.entries = this.cache.size;
// Save to persistent storage if needed;
    if (this.config.storage !== CacheStorage.Memory) {// Save to persistent storage if needed;}if (this.config.storage !== CacheStorage.Memory) {}this.saveToStorage();
export enum CacheStorage {/* TODO: Fix JSX expression */,}}}
export interface CacheOptions {/* TODO: Fix JSX expression */,}}}
export interface CacheConfig {/* TODO: Fix JSX expression */,}}}
export interface CacheEntry<T> {/* TODO: Fix JSX expression */,}}
export interface CacheStats {/* TODO: Fix JSX expression */,}}}
export class CacheManager {/* TODO: Fix JSX expression */,}}s: 0 ,}
  constructor(confi);
  g: CacheConfig = {,}) {/* TODO: Fix JSX expression */,}}
  /**;
   * Start periodic cleanup of expired entries;
   */;
  private startCleanup(): void {/* TODO: Fix JSX expression */,}}}, 60 * 1000); // Run every minute;
  }
  /**;
   * Stop cleanup interval;
   */;
  stopCleanup(): void {/* TODO: Fix JSX expression */,}}}
  }
  /**;
   * Remove expired entries;
   */;
  private cleanup(): void {/* TODO: Fix JSX expression */,}}}
    }
    // Clean localStorage;
    if (typeof window !== 'undefined' && window.localStorage) {/* TODO: Fix JSX expression */,}}
=======
this.cache.set(key, entry)
    this.stats.entries = this.cache.size
// Save to persistent storage if needed
    if (this.config.storage !== CacheStorage.Memory) {
    // Save to persistent storage if needed
  }
    entries: 0,;}
  }
  private config: Required<CacheConfig>
,
>>>>>>> origin/main
  constructor(config: CacheConfig = {}) {
    this.config = {
      storage: config.storage || CacheStorage.Memory
      defaultTTL: config.defaultTTL || 5 * 60 * 1000 // 5 minutes;}
  private stats: CacheStats = {}
    hits: 0,
    misses: 0,
    hitRate: 0,
    count: 0,
    entries: 0
<<<<<<< HEAD
  };
  private config: Required<CacheConfig>;

=======
  }
  private config: Required<CacheConfig>
>>>>>>> origin/main
  constructor(config: CacheConfig = {}) {}
    this.config = {}
      storage: config.storage || CacheStorage.Memory,
      defaultTTL: config.defaultTTL || 5 * 60 * 1000 // 5 minutes
<<<<<<< HEAD
    };
=======
    }
>>>>>>> origin/main
  }

  /**
   * Set a value in the cache
   */
  set(key: string, value: T, ttl?: number): void {
    const entry: CacheEntry<T> = {
<<<<<<< HEAD
      value;
=======
      value;}
>>>>>>> origin/main
  set(key: string, value: T, ttl?: number): void {}
    const entry: CacheEntry<T> = {}
      value,
      timestamp: Date.now(),
<<<<<<< HEAD
      ttl: ttl || this.config.defaultTTL;
    };

    this.cache.set(key, entry);
    this.stats.entries = this.cache.size;

    // Save to persistent storage if needed;
    if (this.config.storage !== CacheStorage.Memory) {
=======
      ttl: ttl || this.config.defaultTTL
    }
    this.cache.set(key, entry)
    this.stats.entries = this.cache.size
>>>>>>> origin/main
    // Save to persistent storage if needed
    if (this.config.storage !== CacheStorage.Memory) {
    // Save to persistent storage if needed;}
    if (this.config.storage !== CacheStorage.Memory) {}
<<<<<<< HEAD
      this.saveToStorage();
=======
      this.saveToStorage()
>>>>>>> origin/main
export enum CacheStorage {/* TODO: Fix JSX expression */}
}
export interface CacheOptions {/* TODO: Fix JSX expression */}
}
export interface CacheConfig {/* TODO: Fix JSX expression */}
}
<<<<<<< HEAD
export interface CacheEntry<T> {/* TODO: Fix JSX expression */}
=======
export interface CacheEntry</T><T> {/* TODO: Fix JSX expression */}
>>>>>>> origin/main
}
export interface CacheStats {/* TODO: Fix JSX expression */}
}
export class CacheManager {/* TODO: Fix JSX expression */}
  s: 0 }
  constructor(confi)
  g: CacheConfig = {}) {/* TODO: Fix JSX expression */}
<<<<<<< HEAD
  }
  /**
   * Start periodic cleanup of expired entries;
   */
  private startCleanup(): void {/* TODO: Fix JSX expression */}
    }, 60 * 1000); // Run every minute;
  }
  /**
   * Stop cleanup interval;
   */
  stopCleanup(): void {/* TODO: Fix JSX expression */}
    }
=======
>>>>>>> origin/main
  }
  /**
   * Start periodic cleanup of expired entries
   */
<<<<<<< HEAD
  private cleanup(): void {/* TODO: Fix JSX expression */}
      }
    }
    // Clean localStorage;
    if (typeof window !== 'undefined' && window.localStorage) {/* TODO: Fix JSX expression */}
              }
            }
          } catch {/* TODO: Fix JSX expression */}
          }
        }
      }
      keysToRemove.forEach(key => localStorage.removeItem(key));
    }
    logger.debug('Cache cleanup completed');
=======
  private startCleanup(): void {/* TODO: Fix JSX expression */}
    }, 60 * 1000); // Run every minute
>>>>>>> origin/main
  }
  /**
   * Stop cleanup interval
   */
  stopCleanup(): void {/* TODO: Fix JSX expression */}
    }
  }
  /**
   * Remove expired entries
   */
  private cleanup(): void {/* TODO: Fix JSX expression */}
      }
    }
    // Clean localStorage
    if (typeof window !== 'undefined' && window.localStorage) {/* TODO: Fix JSX expression */}
              }
>>>>>>> origin/main
            }
          } catch {/* TODO: Fix JSX expression */,}}}
        }
      }
      keysToRemove.forEach(key => localStorage.removeItem(key))
    }
    logger.debug('Cache cleanup completed')
  }
<<<<<<< HEAD
  /**;
   * Check if cache entry is expired;
   */;
  private isExpired(entr);
  y: CacheEntry<unknown>, now = Date.now()): boolean {/* TODO: Fix JSX expression */,}}}
  /**;
   * Get storage key with prefix;
   */;
  private getStorageKey(ke);
  y: string): string {/* TODO: Fix JSX expression */,}}return `cache_${key}`;
=======
  /**
   * Check if cache entry is expired
   */
  private isExpired(entr)
<<<<<<< HEAD
  y: CacheEntry<unknown>, now = Date.now()): boolean {/* TODO: Fix JSX expression */}
=======
  y: CacheEntry</T><unknown>, now = Date.now()): boolean {/* TODO: Fix JSX expression */}
>>>>>>> origin/main
  }
  /**
   * Get storage key with prefix
   */
  private getStorageKey(ke)
  y: string): string {/* TODO: Fix JSX expression */}
<<<<<<< HEAD
    return `cache_${key}`;
=======
    return `cache_${key}`
>>>>>>> origin/main
>>>>>>> origin/main
  }
  /**
   * Set cache entry
   */
<<<<<<< HEAD
  set<T>(ke,
  y: string, valu,
  e: T, option)
  s: { ttl?: number } = {}): void {/* TODO: Fix JSX expression */}
    };`
    performanceMonitoring.recordCustomMetric(`cache_set_${key}`, 1, 'count');
    if (this.storage === CacheStorage.Memory) {/* TODO: Fix JSX expression */}
    } else if (this.storage === CacheStorage.LocalStorage &&
      typeof window !== 'undefined' &&
=======
  set</unknown><T>(ke,
  y: string, valu,
  e: T, option)
  s: { ttl?: number } = {}): void {/* TODO: Fix JSX expression */}
    }`
    performanceMonitoring.recordCustomMetric(`cache_set_${key}`, 1, 'count')
    if (this.storage === CacheStorage.Memory) {/* TODO: Fix JSX expression */}
    } else if ()
>>>>>>> origin/main
      window.localStorage;)
    ) {/* TODO: Fix JSX expression */}
      } catch (error) {/* TODO: Fix JSX expression */}
      }
<<<<<<< HEAD
    } else if (this.storage === CacheStorage.SessionStorage &&
      typeof window !== 'undefined' &&
      window.sessionStorage;)
    ) {/* TODO: Fix JSX expression */}
      } catch (error) {/* TODO: Fix JSX expression */}
      }
    }
  }

=======
    } else if ()
      window.sessionStorage;)
>>>>>>> origin/main
  /**
   * Set cache entry
   */
  set<T>(ke,
  y: string, valu,
<<<<<<< HEAD
  e: T, option);
  s: {ttl?: number ,}= {}): void {/* TODO: Fix JSX expression */,}}}`;
    performanceMonitoring.recordCustomMetric(`cache_set_${key)}`, 1, 'count');
    if (this.storage === CacheStorage.Memory) {/* TODO: Fix JSX expression */,}} else if(this.storage === CacheStorage.LocalStorage &&;)
      typeof window !== 'undefined' &&;
      window.localStorage;);
    ) {/* TODO: Fix JSX expression */,}} catch (error) {/* TODO: Fix JSX expression */,}}
    } else if(this.storage === CacheStorage.SessionStorage &&;)
      typeof window !== 'undefined' &&;
      window.sessionStorage;);
    ) {/* TODO: Fix JSX expression */,}} catch (error) {/* TODO: Fix JSX expression */,}}
    }
  }
/**;
   * Get a value from the cache;
   */;
  get(key: string): T | null {,}}const entry = this.cache.get(key);
if (!entry) {}this.stats.misses++;
      this.updateHitRate();
      return null;
    }
<<<<<<< HEAD

    // Check if entry has expired;
    if (Date.now() - entry.timestamp > entry.ttl) {
    // Check if entry has expired
    if (Date.now() - entry.timestamp > entry.ttl) {}
      this.cache.delete(key);
=======
// Check if entry has expired;
    if (Date.now() - entry.timestamp > entry.ttl) {// Check if entry has expired;}if (Date.now() - entry.timestamp > entry.ttl) {}this.cache.delete(key);
>>>>>>> origin/main
      this.stats.misses++;
      this.stats.entries = this.cache.size;
      this.updateHitRate();
      return null;
    }
<<<<<<< HEAD

    this.stats.hits++;
    this.updateHitRate();
   * Get cache entry;
   */
  get<T>(ke)
  y: string): T | undefined {/* TODO: Fix JSX expression */}`
    performanceMonitoring.recordCustomMetric(`cache_get_${key}`, 1, 'count');
    let,
  entry: CacheEntry<T> | null = null;
=======
this.stats.hits++;
    this.updateHitRate();
   * Get cache entry;
   */;
  get<T>(ke);
<<<<<<< HEAD
  y: string): T | undefined {/* TODO: Fix JSX expression */,}}`;
    performanceMonitoring.recordCustomMetric(`cache_get_${key)}`, 1, 'count');
    let,;
=======
  y: string): T | undefined {/* TODO: Fix JSX expression */}`;
    performanceMonitoring.recordCustomMetric(`cache_get_${key}`, 1, 'count');
    let,
>>>>>>> origin/main
  entry: CacheEntry<T> | null = null,
    if (this.storage === CacheStorage.Memory) {/* TODO: Fix JSX expression */,}} else if(this.storage === CacheStorage.LocalStorage &&;)
      typeof window !== 'undefined' &&;
      window.localStorage;);
    ) {/* TODO: Fix JSX expression */,}}
      } catch (error) {/* TODO: Fix JSX expression */,}}
    } else if(this.storage === CacheStorage.SessionStorage &&;)
      typeof window !== 'undefined' &&;
      window.sessionStorage;);
    ) {/* TODO: Fix JSX expression */,}}
      } catch (error) {/* TODO: Fix JSX expression */,}}
    }
    if (!entry) {/* TODO: Fix JSX expression */,}`;
      performanceMonitoring.recordCustomMetric(`cache_miss_${key)}`, 1, 'count');
      return undefined;
    }
    if (this.isExpired(entry)) {/* TODO: Fix JSX expression */,}`;
      performanceMonitoring.recordCustomMetric(`cache_expired_${key)}`, 1, 'count');
      return undefined;
    }
    this.stats.hits++;`;
    performanceMonitoring.recordCustomMetric(`cache_hit_${key)}`, 1, 'count');
    return entry.value;
  }
/**;
   * Check if a key exists in the cache;
   */;
<<<<<<< HEAD
  has(key: string): boolean {,}}const entry = this.cache.get(key);
,;
    if (!entry) {,;
      return false;}}
// Check if entry has expired;
    if (Date.now() - entry.timestamp > entry.ttl) {}if (!entry) {}return false;
=======
=======
  e: T, option)
  s: { ttl?: number } = {}): void {/* TODO: Fix JSX expression */}
    };`
    performanceMonitoring.recordCustomMetric(`cache_set_${key}`, 1, 'count')
>>>>>>> origin/main
    if (this.storage === CacheStorage.Memory) {/* TODO: Fix JSX expression */}
    } else if (this.storage === CacheStorage.LocalStorage &&
      typeof window !== 'undefined' &&
      window.localStorage;)
    ) {/* TODO: Fix JSX expression */}
<<<<<<< HEAD
        }
=======
>>>>>>> origin/main
      } catch (error) {/* TODO: Fix JSX expression */}
      }
    } else if (this.storage === CacheStorage.SessionStorage &&
      typeof window !== 'undefined' &&
      window.sessionStorage;)
    ) {/* TODO: Fix JSX expression */}
<<<<<<< HEAD
=======
      } catch (error) {/* TODO: Fix JSX expression */}
      }
    }
  }
/**
   * Get a value from the cache
   */
  get(key: string): T | null {}
    const entry = this.cache.get(key)
if (!entry) {}
      this.stats.misses++
      this.updateHitRate()
      return null
    }
// Check if entry has expired
    if (Date.now() - entry.timestamp > entry.ttl) {
    // Check if entry has expired
  }
    if (Date.now() - entry.timestamp > entry.ttl) {}
      this.cache.delete(key)
      this.stats.misses++
      this.stats.entries = this.cache.size
      this.updateHitRate()
      return null
    }
this.stats.hits++
    this.updateHitRate()
   * Get cache entry
   */
  get</T><T>(ke)
  y: string): T | undefined {/* TODO: Fix JSX expression */}`
    performanceMonitoring.recordCustomMetric(`cache_get_${key}`, 1, 'count')
    let,
  entry: CacheEntry</T><T> | null = null,
    if (this.storage === CacheStorage.Memory) {/* TODO: Fix JSX expression */}
    } else if ()
      window.localStorage;)
    this.stats.hits++
    this.updateHitRate()
   * Get cache entry
   */
  get<T>(ke)
  y: string): T | undefined {/* TODO: Fix JSX expression */}`
    performanceMonitoring.recordCustomMetric(`cache_get_${key}`, 1, 'count')
    let,
  entry: CacheEntry<T> | null = null
    if (this.storage === CacheStorage.Memory) {/* TODO: Fix JSX expression */}
    } else if (this.storage === CacheStorage.LocalStorage &&
      typeof window !== 'undefined' &&
      window.localStorage;)
    ) {/* TODO: Fix JSX expression */}
        }
      } catch (error) {/* TODO: Fix JSX expression */}
      }
    } else if ()
      window.sessionStorage;)
    ) {/* TODO: Fix JSX expression */}
>>>>>>> origin/main
        }
      } catch (error) {/* TODO: Fix JSX expression */}
      }
    }
    if (!entry) {/* TODO: Fix JSX expression */}`
<<<<<<< HEAD
      performanceMonitoring.recordCustomMetric(`cache_miss_${key}`, 1, 'count');
      return undefined;
    }
    if (this.isExpired(entry)) {/* TODO: Fix JSX expression */}`
      performanceMonitoring.recordCustomMetric(`cache_expired_${key}`, 1, 'count');
      return undefined;
    }
    this.stats.hits++;`
    performanceMonitoring.recordCustomMetric(`cache_hit_${key}`, 1, 'count');
    return entry.value;
  }

  /**
   * Check if a key exists in the cache;
=======
      performanceMonitoring.recordCustomMetric(`cache_miss_${key}`, 1, 'count')
      return undefined
    }
    if (this.isExpired(entry)) {/* TODO: Fix JSX expression */}`
      performanceMonitoring.recordCustomMetric(`cache_expired_${key}`, 1, 'count')
      return undefined
    }
    this.stats.hits++;`
    performanceMonitoring.recordCustomMetric(`cache_hit_${key}`, 1, 'count')
    return entry.value
  }
/**
   * Check if a key exists in the cache
>>>>>>> origin/main
   */
>>>>>>> origin/main
  has(key: string): boolean {}
    const entry = this.cache.get(key)
,
<<<<<<< HEAD
    if (!entry) {,
      return false;
    }

    // Check if entry has expired;
    if (Date.now() - entry.timestamp > entry.ttl) {

    if (!entry) {}
      return false;
    }

    // Check if entry has expired
    if (Date.now() - entry.timestamp > entry.ttl) {}
      this.cache.delete(key);
      this.stats.entries = this.cache.size;
      return false;
    }

    return true;
  }

  /**
=======
    if (!entry) {
    ,
      return false
  }
>>>>>>> origin/main
    }
<<<<<<< HEAD
// Check if entry has expired;
    if (Date.now() - entry.timestamp > entry.ttl) {}this.cache.delete(key);
      this.stats.entries = this.cache.size;
      return false;
=======
// Check if entry has expired
    if (Date.now() - entry.timestamp > entry.ttl) {}
    if (!entry) {}
      return false
    }
// Check if entry has expired
    if (Date.now() - entry.timestamp > entry.ttl) {}
      this.cache.delete(key)
      this.stats.entries = this.cache.size
      return false
>>>>>>> origin/main
    }
return true
  }
<<<<<<< HEAD
/**;
>>>>>>> origin/main
   * Delete a key from the cache;
   */;
  delete(key: string): boolean {,}}const deleted = this.cache.delete(key);
    if (deleted) {}this.stats.entries = this.cache.size;
// Save to persistent storage if needed;
<<<<<<< HEAD
      if (this.config.storage !== CacheStorage.Memory) {,;
      // Save to persistent storage if needed;}if (this.config.storage !== CacheStorage.Memory) {}this.saveToStorage();
=======
=======
/**
   * Delete a key from the cache
   */
  delete(key: string): boolean {}
    const deleted = this.cache.delete(key)
    if (deleted) {}
      this.stats.entries = this.cache.size
// Save to persistent storage if needed
>>>>>>> origin/main
      if (this.config.storage !== CacheStorage.Memory) {
    ,
      // Save to persistent storage if needed
  }
      if (this.config.storage !== CacheStorage.Memory) {}
<<<<<<< HEAD
        this.saveToStorage();
>>>>>>> origin/main
   * Check if key exists and is not expired;
   */;
  has(ke);
  y: string): boolean {/* TODO: Fix JSX expression */,}}}
  /**;
   * Delete a cache entry;
   */;
  delete(ke);
  y: string): void {/* TODO: Fix JSX expression */,}}} else if(this.storage === CacheStorage.LocalStorage &&;)
      typeof window !== 'undefined' &&;
      window.localStorage;);
    ) {/* TODO: Fix JSX expression */,}} else if(this.storage === CacheStorage.SessionStorage &&;)
      typeof window !== 'undefined' &&;
      window.sessionStorage;);
    ) {/* TODO: Fix JSX expression */,}}
  }
  /**;
   * Clear all cache entries;
   */;
  clear(): void {/* TODO: Fix JSX expression */,}}}
    if(this.storage === CacheStorage.LocalStorage &&;)
      typeof window !== 'undefined' &&;
      window.localStorage;);
    ) {/* TODO: Fix JSX expression */,}}
=======
        this.saveToStorage()
   * Check if key exists and is not expired
   */
  has(ke)
  y: string): boolean {/* TODO: Fix JSX expression */}
  }
  /**
   * Delete a cache entry
   */
  delete(ke)
  y: string): void {/* TODO: Fix JSX expression */}
<<<<<<< HEAD
    } else if (this.storage === CacheStorage.LocalStorage &&
      typeof window !== 'undefined' &&
      window.localStorage;)
    ) {/* TODO: Fix JSX expression */}
    } else if (this.storage === CacheStorage.SessionStorage &&
      typeof window !== 'undefined' &&
=======
    } else if ()
      window.localStorage;)
    ) {/* TODO: Fix JSX expression */}
    } else if ()
>>>>>>> origin/main
      window.sessionStorage;)
    ) {/* TODO: Fix JSX expression */}
    }
  }
  /**
   * Clear all cache entries
   */
  clear(): void {/* TODO: Fix JSX expression */}
    }
<<<<<<< HEAD
    if (this.storage === CacheStorage.LocalStorage &&
      typeof window !== 'undefined' &&
      window.localStorage;)
    ) {/* TODO: Fix JSX expression */}
        }
      }
    }
    return deleted;
  }

  /**
=======
    if ()
      window.localStorage;)
    ) {/* TODO: Fix JSX expression */}
        }
>>>>>>> origin/main
      }
    }
    return deleted
  }
<<<<<<< HEAD
/**;
>>>>>>> origin/main
   * Clear all entries from the cache;
   */;
  clear(): void {}}this.cache.clear();
    this.stats.entries = 0;
// Clear persistent storage if needed;
    if (this.config.storage !== CacheStorage.Memory) {// Clear persistent storage if needed;}if (this.config.storage !== CacheStorage.Memory) {}this.clearStorage();
    }
  }
/**;
   * Get all keys in the cache;
   */;
  keys(): string[] {}return Array.from(this.cache.keys());
  }
/**;
   * Get cache statistics;
   */;
  getStats(): CacheStats {}}return {...this.stats}}}
/**;
   * Get cache size;
   */;
  size(): number {}}return this.cache.size;
  }
/**;
   * Clean expired entries;
   */;
  cleanExpired(): number {}}const now = Date.now();
    let cleaned = 0;
for (const [key, entry] of this.cache.entries()) {}if (now - entry.timestamp > entry.ttl) {}this.cache.delete(key);
        cleaned++;
    if(this.storage === CacheStorage.SessionStorage &&;)
      typeof window !== 'undefined' &&;
      window.sessionStorage;);
    ) {/* TODO: Fix JSX expression */,}}
      }
    }
this.stats.entries = this.cache.size;
// Save to persistent storage if needed;
    if (this.config.storage !== CacheStorage.Memory && cleaned > 0) {// Save to persistent storage if needed;}if (this.config.storage !== CacheStorage.Memory && cleaned > 0) {}this.saveToStorage();
    }
return cleaned;
    logger.info('Cache cleared', 'CacheManager', {/* TODO: Fix JSX expression */,)})
  e: this.storage ,})
=======
/**
   * Clear all entries from the cache
   */
  clear(): void {}
    this.cache.clear()
    this.stats.entries = 0
// Clear persistent storage if needed
    if (this.config.storage !== CacheStorage.Memory) {
    // Clear persistent storage if needed
<<<<<<< HEAD
    if (this.config.storage !== CacheStorage.Memory) {}
      this.clearStorage();
    }
=======
>>>>>>> origin/main
  }
    if (this.config.storage !== CacheStorage.Memory) {}
      this.clearStorage()
    }
  }
/**
   * Get all keys in the cache
   */
  keys(): string[] {}
<<<<<<< HEAD
    return Array.from(this.cache.keys());
  }

  /**
   * Get cache statistics;
   */
  getStats(): CacheStats {}
    return { ...this.stats };
  }

  /**
   * Get cache size;
   */
  size(): number {}
    return this.cache.size;
  }

  /**
   * Clean expired entries;
=======
    return Array.from(this.cache.keys())
  }
/**
   * Get cache statistics
   */
  getStats(): CacheStats {}
    return { ...this.stats }
  }
/**
   * Get cache size
   */
  size(): number {}
    return this.cache.size
  }
/**
   * Clean expired entries
>>>>>>> origin/main
   */
  cleanExpired(): number {}
    const now = Date.now()
    let cleaned = 0
for (const [key, entry] of this.cache.entries()) {}
      if (now - entry.timestamp > entry.ttl) {}
<<<<<<< HEAD
        this.cache.delete(key);
        cleaned++;
    if (this.storage === CacheStorage.SessionStorage &&
      typeof window !== 'undefined' &&
=======
        this.cache.delete(key)
        cleaned++
    if ()
>>>>>>> origin/main
      window.sessionStorage;)
    ) {/* TODO: Fix JSX expression */}
        }
      }
    }
<<<<<<< HEAD

    this.stats.entries = this.cache.size;

    // Save to persistent storage if needed;
=======
this.stats.entries = this.cache.size
// Save to persistent storage if needed
>>>>>>> origin/main
    if (this.config.storage !== CacheStorage.Memory && cleaned > 0) {
    // Save to persistent storage if needed
  }
    if (this.config.storage !== CacheStorage.Memory && cleaned > 0) {}
<<<<<<< HEAD
      this.saveToStorage();
    }

    return cleaned;
    logger.info('Cache cleared', 'CacheManager', {/* TODO: Fix JSX expression */})
  e: this.storage });
=======
      this.saveToStorage()
    }
return cleaned
    logger.info('Cache cleared', 'CacheManager', {/* TODO: Fix JSX expression */})
  e: this.storage })
>>>>>>> origin/main
>>>>>>> origin/main
  }
  /**
   * Get or set with function (handles both sync and async)
   */
<<<<<<< HEAD
  getOrSet<T>(ke,
  y: string,
    f)
  n: () => T | Promise<T>,
    option,
  s: { ttl?: number } = {}
  ): T | Promise<T> {/* TODO: Fix JSX expression */}
    }
=======
  getOrSet</T><T>(ke,
  y: string,
    f)
  n: () => T | Promise</T><T>,
    option,
    return cleaned
    logger.info('Cache cleared', 'CacheManager', {/* TODO: Fix JSX expression */})
  e: this.storage })
  }
  /**
   * Get or set with function (handles both sync and async)
   */
  getOrSet<T>(ke,
  y: string,
    f)
  n: () => T | Promise<T>,
<<<<<<< HEAD
    option,;
  s: {ttl?: number ,}= {}): T | Promise<T> {/* TODO: Fix JSX expression */,}}
=======
    option,
  s: { ttl?: number } = {}
  ): T | Promise</T><T> {/* TODO: Fix JSX expression */}
    }
<<<<<<< HEAD
>>>>>>> origin/main
>>>>>>> origin/main
    const start = performance.now();
    const value = fn();
    const duration = performance.now() - start;`;
    performanceMonitoring.recordCustomMetric(`cache_compute_${key)}`, duration, 'ms');
    // Handle both sync and async values;
<<<<<<< HEAD
    if (value instanceof Promise) {/* TODO: Fix JSX expression */}
      });
    }
    this.set(key, value, options);
    return value;
  }

  /**
=======
    if (value instanceof Promise) {/* TODO: Fix JSX expression */,}})
=======
    const start = performance.now()
    const value = fn()
    const duration = performance.now() - start;`
    performanceMonitoring.recordCustomMetric(`cache_compute_${key}`, duration, 'ms')
    // Handle both sync and async values
    if (value instanceof Promise) {/* TODO: Fix JSX expression */}
      })
>>>>>>> origin/main
    }
    this.set(key, value, options)
    return value
  }
<<<<<<< HEAD
/**;
>>>>>>> origin/main
   * Update hit rate;
   */;
  private updateHitRate(): void {}}const total = this.stats.hits + this.stats.misses;
    this.stats.hitRate = total > 0 ? this.stats.hits / total : 0;
   * Get or set with async function;
   */;
=======
/**
   * Update hit rate
   */
<<<<<<< HEAD
  async getOrSetAsync<T>(ke,
  y: string,
    f)
  n: () => Promise<T> | T,
    option,
  s: { ttl?: number } = {}
  ): Promise<T> {/* TODO: Fix JSX expression */}
    }
=======
  private updateHitRate(): void {}
    const total = this.stats.hits + this.stats.misses
    this.stats.hitRate = total > 0 ? this.stats.hits / total : 0
   * Get or set with async function
   */
  async getOrSetAsync</T><T>(ke,
  y: string,
    f)
  n: () => Promise</T><T> | T,
    option,
  /**
   * Update hit rate
   */
  private updateHitRate(): void {}
    const total = this.stats.hits + this.stats.misses
    this.stats.hitRate = total > 0 ? this.stats.hits / total : 0
   * Get or set with async function
   */
>>>>>>> origin/main
  async getOrSetAsync<T>(ke,
  y: string,
    f)
  n: () => Promise<T> | T,
<<<<<<< HEAD
    option,;
  s: {ttl?: number ,}= {}): Promise<T> {/* TODO: Fix JSX expression */,}}
=======
    option,
  s: { ttl?: number } = {}
  ): Promise</T><T> {/* TODO: Fix JSX expression */}
    }
<<<<<<< HEAD
>>>>>>> origin/main
>>>>>>> origin/main
    const start = performance.now();
    const value = await fn();
    const duration = performance.now() - start;`;
    performanceMonitoring.recordCustomMetric(`cache_compute_${key)}`, duration, 'ms');
    this.set(key, value, options);
    return value;
<<<<<<< HEAD
=======
=======
    const start = performance.now()
    const value = await fn()
    const duration = performance.now() - start;`
    performanceMonitoring.recordCustomMetric(`cache_compute_${key}`, duration, 'ms')
    this.set(key, value, options)
    return value
>>>>>>> origin/main
>>>>>>> origin/main
  }
  /**
   * Memoize a function with caching
   */
<<<<<<< HEAD
=======
  memoize</T><TArgs extends unknown[], TResult>(f,
  n: (...arg),
  /**
   * Memoize a function with caching
   */
>>>>>>> origin/main
  memoize<TArgs extends unknown[], TResult>(f,
  n: (...arg)
  s: TArgs) => TResult,
<<<<<<< HEAD
    option,;
  s: {/* TODO: Fix JSX expression */,}s: TArgs) => string ,} = {}): (...arg);
  s: TArgs) => TResult {/* TODO: Fix JSX expression */,}}const {keyGenerator, ...cacheOptions}}= options;
=======
    option,
  s: {/* TODO: Fix JSX expression */}
  s: TArgs) => string } = {}
  ): (...arg)
  s: TArgs) => TResult {/* TODO: Fix JSX expression */}
<<<<<<< HEAD
    const { keyGenerator, ...cacheOptions } = options;
>>>>>>> origin/main
    return (...arg);
  s: TArgs): TResult => {/* TODO: Fix JSX expression */,}`;
        : `memoize_${fn.name}_${JSON.stringify(args)}`;
      return this.getOrSet(key, () => fn(...args), cacheOptions) as TResult;
    }
  }
  /**;
   * Get cache statistics;
   */;
  getStatistics(): CacheStats {/* TODO: Fix JSX expression */,}}}
  }
/**;
   * Save cache to persistent storage;
   */;
  private saveToStorage(): void {}}if (typeof window === 'undefined') return;
try {}}const storage = this.getStorage();
      if (storage) {}const data = {}entries: Object.fromEntries(this.cache),
          stats: this.stats,
          timestamp: Date.now(),}
        storage.setItem('cache-manager', JSON.stringify(data));
=======
    const { keyGenerator, ...cacheOptions } = options
    return (...arg)
  s: TArgs): TResult => {/* TODO: Fix JSX expression */}`
<<<<<<< HEAD
        : `memoize_${fn.name}_${JSON.stringify(args)}`;
      return this.getOrSet(key, () => fn(...args), cacheOptions) as TResult;
    };
=======
        : `memoize_${fn.name}_${JSON.stringify(args)}`
      return this.getOrSet(key, () => fn(...args), cacheOptions) as TResult
    }
>>>>>>> origin/main
  }
  /**
   * Get cache statistics
   */
  getStatistics(): CacheStats {/* TODO: Fix JSX expression */}
<<<<<<< HEAD
    };
  }

  /**
   * Save cache to persistent storage;
=======
    }
  }
/**
   * Save cache to persistent storage
>>>>>>> origin/main
   */
  private saveToStorage(): void {}
    if (typeof window === 'undefined') return
try {}
      const storage = this.getStorage()
      if (storage) {}
        const data = {}
          entries: Object.fromEntries(this.cache),
<<<<<<< HEAD
          stats: this.stats;
          timestamp: Date.now()};
        storage.setItem('cache-manager', JSON.stringify(data));
      }
    } catch (error) {}
      }
=======
          stats: this.stats,
          timestamp: Date.now()}
        storage.setItem('cache-manager', JSON.stringify(data))
>>>>>>> origin/main
      }
    } catch (error) {}}
>>>>>>> origin/main
  }
<<<<<<< HEAD
/**;
   * Load cache from persistent storage;
   */;
  private loadFromStorage(): void {}}if (typeof window === 'undefined') return;
try {}}const storage = this.getStorage();
      if (storage) {}const data = storage.getItem('cache-manager');
        if (data) {}const parsed = JSON.parse(data);
          this.cache = new Map(Object.entries(parsed.entries || {)}));
          this.stats = {...this.stats, ...parsed.stats}}
      }
    } catch (error) {}* Get cache count;
   */;
  getStats(): {/* TODO: Fix JSX expression */,}} {/* TODO: Fix JSX expression */,}}
=======
/**
   * Load cache from persistent storage
   */
  private loadFromStorage(): void {}
    if (typeof window === 'undefined') return
try {}
      const storage = this.getStorage()
      if (storage) {}
        const data = storage.getItem('cache-manager')
        if (data) {}
<<<<<<< HEAD
          const parsed = JSON.parse(data);
          this.cache = new Map(Object.entries(parsed.entries || {}));
          this.stats = { ...this.stats, ...parsed.stats };
        }
      }
    } catch (error) {}
   * Get cache count;
   */
  getStats(): {/* TODO: Fix JSX expression */}
  } {/* TODO: Fix JSX expression */}
          }
        }
      }
      if (window.sessionStorage) {/* TODO: Fix JSX expression */}
          }
=======
          const parsed = JSON.parse(data)
          this.cache = new Map(Object.entries(parsed.entries || {}))
          this.stats = { ...this.stats, ...parsed.stats }
        }
      }
    } catch (error) {}
   * Get cache count
   */
  getStats(): {/* TODO: Fix JSX expression */}
  }, {/* TODO: Fix JSX expression */}
          }
>>>>>>> origin/main
        }
      }
      if (window.sessionStorage) {/* TODO: Fix JSX expression */,}}
>>>>>>> origin/main
        }
      }
  }
<<<<<<< HEAD
/**;
   * Clear persistent storage;
   */;
  private clearStorage(): void {}}if (typeof window === 'undefined') return;
try {}}const storage = this.getStorage();
      if (storage) {}storage.removeItem('cache-manager');
=======
/**
   * Clear persistent storage
   */
  private clearStorage(): void {}
    if (typeof window === 'undefined') return
try {}
      const storage = this.getStorage()
      if (storage) {}
<<<<<<< HEAD
        storage.removeItem('cache-manager');
      }
    } catch (error) {}
      }
=======
        storage.removeItem('cache-manager')
      }
    } catch (error) {}
>>>>>>> origin/main
      }
    } catch (error) {}}
>>>>>>> origin/main
  }
<<<<<<< HEAD
/**;
   * Get the appropriate storage object;
   */;
  private getStorage(): Storage | null {}}if (typeof window === 'undefined') return null;
switch (this.config.storage) {case CacheStorage.LocalStorage: return window.localStorage;,}switch (this.config.storage) {}case CacheStorage.LocalStorage: ;,
        return window.localStorage;
=======
/**
   * Get the appropriate storage object
   */
  private getStorage(): Storage | null {}
    if (typeof window === 'undefined') return null
switch (this.config.storage) {
    case CacheStorage.LocalStorage: return window.localStorage
  }
    switch (this.config.storage) {}
      case CacheStorage.LocalStorage: 
        return window.localStorage
>>>>>>> origin/main
      case CacheStorage.SessionStorage:
        return window.sessionStorage,
      default:,
        return null
    }
  }
}
<<<<<<< HEAD
// Create singleton instances for different use cases;
<<<<<<< HEAD
export const memoryCache = new CacheManager({storage: CacheStorage.Memory ,)})
export const localStorageCache = new CacheManager({)
=======
export const memoryCache = new CacheManager({ storage: CacheStorage.Memory })
export const localStorageCache = new CacheManager({;
>>>>>>> origin/main
    );
  storage: CacheStorage.LocalStorage),
  defaultTTL: 30 * 60 * 1000 // 30 minutes;,
=======
// Create singleton instances for different use cases
export const memoryCache = new CacheManager({ storage: CacheStorage.Memory })
export const localStorageCache = new CacheManager()
    )
  storage: CacheStorage.LocalStorage)
  defaultTTL: 30 * 60 * 1000 // 30 minutes
>>>>>>> origin/main
export const sessionStorageCache = new CacheManager({),
  storage: CacheStorage.SessionStorage),
  defaultTTL: 60 * 60 * 1000 // 1 hour;,}export const localStorageCache = new CacheManager({)}storage: CacheStorage.LocalStorage,
  defaultTTL: 30 * 60 * 1000 // 30 minutes,
export const sessionStorageCache = new CacheManager({)}storage: CacheStorage.SessionStorage,
  defaultTTL: 60 * 60 * 1000 // 1 hour;,
export default CacheManager,
    return {/* TODO: Fix JSX expression */,}}}
  }
}
export const cacheManager = new CacheManager()
export default CacheManager
`</TArgs>

  /**
   * Get the appropriate storage object
   */
  private getStorage(): Storage | null {}
    if (typeof window === 'undefined') return null
    switch (this.config.storage) {
      case CacheStorage.LocalStorage: return window.localStorage;}
    switch (this.config.storage) {}
      case CacheStorage.LocalStorage:
        return window.localStorage
      case CacheStorage.SessionStorage:
        return window.sessionStorage
      default:,
<<<<<<< HEAD
        return null;
=======
        return null
>>>>>>> origin/main
    }
  }
}

<<<<<<< HEAD
// Create singleton instances for different use cases;
export const memoryCache = new CacheManager({ storage: CacheStorage.Memory });
export const localStorageCache = new CacheManager({)
  storage: CacheStorage.LocalStorage)
  defaultTTL: 30 * 60 * 1000 // 30 minutes;
export const sessionStorageCache = new CacheManager({)
  storage: CacheStorage.SessionStorage),
  defaultTTL: 60 * 60 * 1000 // 1 hour;
export const localStorageCache = new CacheManager({</div>
  storage: CacheStorage.LocalStorage,
  defaultTTL: 30 * 60 * 1000 // 30 minutes

export const sessionStorageCache = new CacheManager({</div>
  storage: CacheStorage.SessionStorage,
  defaultTTL: 60 * 60 * 1000 // 1 hour

export default CacheManager;
    return {/* TODO: Fix JSX expression */}
    };
  }
}
export const cacheManager = new CacheManager();
export default CacheManager;
=======
// Create singleton instances for different use cases
export const memoryCache = new CacheManager({ storage: CacheStorage.Memory })
export const localStorageCache = new CacheManager({)
  storage: CacheStorage.LocalStorage)
  defaultTTL: 30 * 60 * 1000 // 30 minutes
export const sessionStorageCache = new CacheManager({)
  storage: CacheStorage.SessionStorage),
  defaultTTL: 60 * 60 * 1000 // 1 hour;}
export const localStorageCache = new CacheManager({)}
  storage: CacheStorage.LocalStorage,
  defaultTTL: 30 * 60 * 1000 // 30 minutes
export const sessionStorageCache = new CacheManager({)}
  storage: CacheStorage.SessionStorage,
  defaultTTL: 60 * 60 * 1000 // 1 hour
export default CacheManager
    return {/* TODO: Fix JSX expression */}
    }
  }
}
export const cacheManager = new CacheManager()
export default CacheManager
>>>>>>> origin/main
`

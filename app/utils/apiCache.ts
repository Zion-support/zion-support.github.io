interface CacheEntry<T> {
  data: T
  timestamp: number
  ttl: number
}

interface CacheOptions {
  ttl?: number
  maxSize?: number
  storage?: 'memory' | 'session' | 'local'
}

export class APICache {
  private cache = new Map<string, CacheEntry<any>>()
  private options: Required<CacheOptions>
  private storage: Storage | null = null

  constructor(options: CacheOptions = {}) {
    this.options = {
      ttl: options.ttl || 5 * 60 * 1000, // 5 minutes
      maxSize: options.maxSize || 100,
      storage: options.storage || 'memory'
    }

    if (this.options.storage !== 'memory' && typeof window !== 'undefined') {
      this.storage = this.options.storage === 'session' ? sessionStorage : localStorage
    }
  }

  async get<T>(key: string): Promise<T | null> {
    try {
      let entry: CacheEntry<T> | null = null

      if (this.options.storage === 'memory') {
        entry = this.cache.get(key) as CacheEntry<T>
      } else if (this.storage) {
        const stored = this.storage.getItem(`api_cache_${key}`)
        if (stored) {
          entry = JSON.parse(stored)
        }
      }

      if (!entry) {
        return null
      }

      const now = Date.now()
      if (now - entry.timestamp > entry.ttl) {
        this.delete(key)
        return null
      }

      return entry.data
    } catch (error) {
      console.warn('Cache get error:', error)
      return null
    }
  }

  async set<T>(key: string, data: T, ttl?: number): Promise<void> {
    try {
      const entry: CacheEntry<T> = {
        data,
        timestamp: Date.now(),
        ttl: ttl || this.options.ttl
      }

      if (this.options.storage === 'memory') {
        // Check max size
        if (this.cache.size >= this.options.maxSize) {
          this.evictOldest()
        }
        this.cache.set(key, entry)
      } else if (this.storage) {
        this.storage.setItem(`api_cache_${key}`, JSON.stringify(entry))
      }
    } catch (error) {
      console.warn('Cache set error:', error)
    }
  }

  async delete(key: string): Promise<void> {
    try {
      if (this.options.storage === 'memory') {
        this.cache.delete(key)
      } else if (this.storage) {
        this.storage.removeItem(`api_cache_${key}`)
      }
    } catch (error) {
      console.warn('Cache delete error:', error)
    }
  }

  async clear(): Promise<void> {
    try {
      if (this.options.storage === 'memory') {
        this.cache.clear()
      } else if (this.storage) {
        const keys = Object.keys(this.storage)
        keys.forEach(key => {
          if (key.startsWith('api_cache_')) {
            this.storage!.removeItem(key)
          }
        })
      }
    } catch (error) {
      console.warn('Cache clear error:', error)
    }
  }

  private evictOldest(): void {
    let oldestKey: string | undefined
    let oldestTime = Infinity

    for (const [key, entry] of this.cache.entries()) {
      if (entry.timestamp < oldestTime) {
        oldestTime = entry.timestamp
        oldestKey = key
      }
    }

    if (oldestKey) {
      this.cache.delete(oldestKey)
    }
  }

  async cleanup(): Promise<void> {
    const now = Date.now()
    const expiredKeys: string[] = []

    if (this.options.storage === 'memory') {
      for (const [key, entry] of this.cache.entries()) {
        if (now - entry.timestamp > entry.ttl) {
          expiredKeys.push(key)
        }
      }
      expiredKeys.forEach(key => this.cache.delete(key))
    } else if (this.storage) {
      const keys = Object.keys(this.storage)
      for (const key of keys) {
        if (key.startsWith('api_cache_')) {
          try {
            const stored = this.storage.getItem(key)
            if (stored) {
              const entry = JSON.parse(stored)
              if (now - entry.timestamp > entry.ttl) {
                expiredKeys.push(key)
              }
            }
          } catch (error) {
            // Remove corrupted entries
            expiredKeys.push(key)
          }
        }
      }
      expiredKeys.forEach(key => this.storage!.removeItem(key))
    }
  }

  getStats(): {
    size: number
    maxSize: number
    hitRate: number
  } {
    if (this.options.storage === 'memory') {
      return {
        size: this.cache.size,
        maxSize: this.options.maxSize,
        hitRate: 0 // Would need to track hits/misses
      }
    }
    return {
      size: 0,
      maxSize: this.options.maxSize,
      hitRate: 0
    }
  }
}

// Default cache instance
export const apiCache = new APICache()

// Cache decorator for API functions
export function cached<T extends any[], R>(
  fn: (...args: T) => Promise<R>,
  keyGenerator?: (...args: T) => string,
  ttl?: number
) {
  return async (...args: T): Promise<R> => {
    const key = keyGenerator ? keyGenerator(...args) : JSON.stringify(args)
    
    // Try to get from cache
    const cached = await apiCache.get<R>(key)
    if (cached !== null) {
      return cached
    }

    // Execute function and cache result
    const result = await fn(...args)
    await apiCache.set(key, result, ttl)
    
    return result
  }
}
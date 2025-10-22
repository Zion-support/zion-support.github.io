'use client'

// API Cache utility functions
export interface ApiCacheConfig {
  ttl: number
  maxSize: number
  storage: 'memory' | 'localStorage'
}

export interface CacheEntry<T = any> {
  data: T
  timestamp: number
  ttl: number
}

class ApiCache {
  private cache = new Map<string, CacheEntry>()
  private config: ApiCacheConfig

  constructor(config: Partial<ApiCacheConfig> = {}) {
    this.config = {
      ttl: 5 * 60 * 1000, // 5 minutes
      maxSize: 100,
      storage: 'memory',
      ...config
    }
  }

  set<T>(key: string, data: T, ttl?: number): void {
    const entry: CacheEntry<T> = {
      data,
      timestamp: Date.now(),
      ttl: ttl || this.config.ttl
    }

    this.cache.set(key, entry)

    // Enforce max size
    if (this.cache.size > this.config.maxSize) {
      const firstKey = this.cache.keys().next().value
      this.cache.delete(firstKey)
    }

    // Persist to storage if configured
    if (this.config.storage === 'localStorage') {
      this.persistToStorage(key, entry)
    }
  }

  get<T>(key: string): T | null {
    const entry = this.cache.get(key)
    if (!entry) return null

    // Check if expired
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key)
      return null
    }

    return entry.data
  }

  has(key: string): boolean {
    return this.get(key) !== null
  }

  delete(key: string): boolean {
    return this.cache.delete(key)
  }

  clear(): void {
    this.cache.clear()
  }

  private persistToStorage(key: string, entry: CacheEntry): void {
    if (typeof window === 'undefined') return

    try {
      localStorage.setItem(`api_cache_${key}`, JSON.stringify(entry))
    } catch (error) {
      console.warn('Failed to persist cache entry:', error)
    }
  }
}

// Create default instance
export const apiCache = new ApiCache()

export default apiCache

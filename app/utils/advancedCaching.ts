'use client'

// Advanced Caching utility functions
export interface CacheConfig {
  maxSize: number
  ttl: number
  storage: 'memory' | 'localStorage' | 'sessionStorage'
}

export interface CacheItem<T = any> {
  value: T
  timestamp: number
  ttl: number
}

class AdvancedCache {
  private cache = new Map<string, CacheItem>()
  private config: CacheConfig

  constructor(config: Partial<CacheConfig> = {}) {
    this.config = {
      maxSize: 100,
      ttl: 5 * 60 * 1000, // 5 minutes
      storage: 'memory',
      ...config
    }
  }

  set<T>(key: string, value: T, ttl?: number): void {
    const item: CacheItem<T> = {
      value,
      timestamp: Date.now(),
      ttl: ttl || this.config.ttl
    }

    this.cache.set(key, item)

    // Enforce max size
    if (this.cache.size > this.config.maxSize) {
      const firstKey = this.cache.keys().next().value
      this.cache.delete(firstKey)
    }

    // Persist to storage if configured
    if (this.config.storage !== 'memory') {
      this.persistToStorage(key, item)
    }
  }

  get<T>(key: string): T | null {
    const item = this.cache.get(key)
    if (!item) return null

    // Check if expired
    if (Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key)
      return null
    }

    return item.value
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

  size(): number {
    return this.cache.size
  }

  private persistToStorage(key: string, item: CacheItem): void {
    if (typeof window === 'undefined') return

    try {
      const storage = this.config.storage === 'localStorage' 
        ? localStorage 
        : sessionStorage
      
      storage.setItem(`cache_${key}`, JSON.stringify(item))
    } catch (error) {
      console.warn('Failed to persist cache item:', error)
    }
  }

  private loadFromStorage(): void {
    if (typeof window === 'undefined' || this.config.storage === 'memory') return

    try {
      const storage = this.config.storage === 'localStorage' 
        ? localStorage 
        : sessionStorage

      for (let i = 0; i < storage.length; i++) {
        const key = storage.key(i)
        if (key?.startsWith('cache_')) {
          const item = JSON.parse(storage.getItem(key) || '{}')
          const cacheKey = key.replace('cache_', '')
          this.cache.set(cacheKey, item)
        }
      }
    } catch (error) {
      console.warn('Failed to load cache from storage:', error)
    }
  }
}

// Create default instance
export const advancedCache = new AdvancedCache()

export default advancedCache

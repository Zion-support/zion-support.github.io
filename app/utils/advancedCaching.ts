'use client'
/**
 * Advanced Caching Utility
 * Provides intelligent caching with TTL, LRU eviction, and storage options
 */

export interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  storage?: 'memory' | 'localStorage' | 'sessionStorage'
  maxSize?: number; // Maximum number of entries
}

export interface CacheEntry<T> {
  value: T
  expiry: number
  hits: number
  lastAccessed: number
}

class AdvancedCache<T = unknown> {
  private cache: Map<string, CacheEntry<T>> = new Map()
  private accessOrder: string[] = []
  private options: Required<CacheOptions>
  private storageKey = 'advanced-cache'

  constructor(options: CacheOptions = {}) {
    this.options = {
      ttl: options.ttl || 5 * 60 * 1000, // Default 5 minutes
      storage: options.storage || 'memory',
      maxSize: options.maxSize || 100
    }
    
    // Load from persistent storage if needed
    if (this.options.storage !== 'memory') {
      this.loadFromStorage()
    }
    
    // Setup periodic cleanup
    this.setupCleanup()
  }

  private setupCleanup(): void {
    if (typeof window !== 'undefined') {
      // Clean up expired entries every minute
      setInterval(() => {
        this.cleanup()
      }, 60000)
    }
  }

  private loadFromStorage(): void {
    try {
      const storage = this.getStorage()
      const data = storage.getItem(this.storageKey)
      if (data) {
        const parsed = JSON.parse(data)
        this.cache = new Map(parsed.cache || [])
        this.accessOrder = parsed.accessOrder || []
      }
    } catch (error) {
      console.warn('Failed to load cache from storage:', error)
    }
  }

  private saveToStorage(): void {
    try {
      const storage = this.getStorage()
      const data = {
        cache: Array.from(this.cache.entries()),
        accessOrder: this.accessOrder
      }
      storage.setItem(this.storageKey, JSON.stringify(data))
    } catch (error) {
      console.warn('Failed to save cache to storage:', error)
    }
  }

  private getStorage(): Storage {
    switch (this.options.storage) {
      case 'localStorage':
        return localStorage
      case 'sessionStorage':
        return sessionStorage
      default:
        throw new Error('Invalid storage type')
    }
  }

  private cleanup(): void {
    const now = Date.now()
    const expiredKeys: string[] = []
    
    for (const [key, entry] of this.cache.entries()) {
      if (entry.expiry < now) {
        expiredKeys.push(key)
      }
    }
    
    expiredKeys.forEach(key => {
      this.cache.delete(key)
      const index = this.accessOrder.indexOf(key)
      if (index > -1) {
        this.accessOrder.splice(index, 1)
      }
    })
    
    // Evict least recently used entries if over max size
    while (this.cache.size > this.options.maxSize) {
      const oldestKey = this.accessOrder.shift()
      if (oldestKey) {
        this.cache.delete(oldestKey)
      }
    }
    
    if (this.options.storage !== 'memory') {
      this.saveToStorage()
    }
  }

  set(key: string, value: T, ttl?: number): void {
    const now = Date.now()
    const expiry = now + (ttl || this.options.ttl)
    
    // Remove from access order if exists
    const existingIndex = this.accessOrder.indexOf(key)
    if (existingIndex > -1) {
      this.accessOrder.splice(existingIndex, 1)
    }
    
    // Add to end of access order
    this.accessOrder.push(key)
    
    this.cache.set(key, {
      value,
      expiry,
      hits: 0,
      lastAccessed: now
    })
    
    // Cleanup if needed
    if (this.cache.size > this.options.maxSize) {
      this.cleanup()
    }
    
    if (this.options.storage !== 'memory') {
      this.saveToStorage()
    }
  }

  get(key: string): T | undefined {
    const entry = this.cache.get(key)
    if (!entry) {
      return undefined
    }
    
    const now = Date.now()
    if (entry.expiry < now) {
      this.cache.delete(key)
      const index = this.accessOrder.indexOf(key)
      if (index > -1) {
        this.accessOrder.splice(index, 1)
      }
      return undefined
    }
    
    // Update access info
    entry.hits++
    entry.lastAccessed = now
    
    // Move to end of access order
    const index = this.accessOrder.indexOf(key)
    if (index > -1) {
      this.accessOrder.splice(index, 1)
    }
    this.accessOrder.push(key)
    
    return entry.value
  }

  has(key: string): boolean {
    return this.get(key) !== undefined
  }

  delete(key: string): boolean {
    const deleted = this.cache.delete(key)
    if (deleted) {
      const index = this.accessOrder.indexOf(key)
      if (index > -1) {
        this.accessOrder.splice(index, 1)
      }
      
      if (this.options.storage !== 'memory') {
        this.saveToStorage()
      }
    }
    return deleted
  }

  clear(): void {
    this.cache.clear()
    this.accessOrder = []
    
    if (this.options.storage !== 'memory') {
      this.saveToStorage()
    }
  }

  size(): number {
    return this.cache.size
  }

  keys(): string[] {
    return Array.from(this.cache.keys())
  }

  values(): T[] {
    return Array.from(this.cache.values()).map(entry => entry.value)
  }

  entries(): [string, T][] {
    return Array.from(this.cache.entries()).map(([key, entry]) => [key, entry.value])
  }

  getStats(): {
    size: number
    maxSize: number
    hitRate: number
    oldestEntry: number
    newestEntry: number
  } {
    const now = Date.now()
    let totalHits = 0
    let oldestTime = now
    let newestTime = 0
    
    for (const entry of this.cache.values()) {
      totalHits += entry.hits
      if (entry.lastAccessed < oldestTime) {
        oldestTime = entry.lastAccessed
      }
      if (entry.lastAccessed > newestTime) {
        newestTime = entry.lastAccessed
      }
    }
    
    const hitRate = this.cache.size > 0 ? totalHits / this.cache.size : 0
    
    return {
      size: this.cache.size,
      maxSize: this.options.maxSize,
      hitRate,
      oldestEntry: oldestTime,
      newestEntry: newestTime
    }
  }
}

// Create singleton instances for different use cases
export const memoryCache = new AdvancedCache({ storage: 'memory' })
export const localStorageCache = new AdvancedCache({ 
  storage: 'localStorage',
  ttl: 30 * 60 * 1000, // 30 minutes
  maxSize: 50
})
export const sessionStorageCache = new AdvancedCache({ 
  storage: 'sessionStorage',
  ttl: 60 * 60 * 1000, // 1 hour
  maxSize: 100
})

export default AdvancedCache
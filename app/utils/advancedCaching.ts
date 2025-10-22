interface CacheOptions {
  ttl?: number // Time to live in milliseconds
  maxSize?: number // Maximum number of items
  strategy?: 'lru' | 'fifo' | 'lfu' // Cache eviction strategy
}

interface CacheItem<T> {
  value: T
  timestamp: number
  accessCount: number
  lastAccessed: number
}

export class AdvancedCache<T = any> {
  private cache = new Map<string, CacheItem<T>>()
  private options: Required<CacheOptions>
  private accessOrder: string[] = []

  constructor(options: CacheOptions = {}) {
    this.options = {
      ttl: options.ttl || 5 * 60 * 1000, // 5 minutes default
      maxSize: options.maxSize || 100,
      strategy: options.strategy || 'lru'
    }
  }

  set(key: string, value: T): void {
    const now = Date.now()
    
    // Remove expired items
    this.cleanup()
    
    // Check if we need to evict items
    if (this.cache.size >= this.options.maxSize) {
      this.evict()
    }

    const item: CacheItem<T> = {
      value,
      timestamp: now,
      accessCount: 1,
      lastAccessed: now
    }

    this.cache.set(key, item)
    this.updateAccessOrder(key)
  }

  get(key: string): T | undefined {
    const item = this.cache.get(key)
    
    if (!item) {
      return undefined
    }

    const now = Date.now()
    
    // Check if item has expired
    if (now - item.timestamp > this.options.ttl) {
      this.cache.delete(key)
      this.removeFromAccessOrder(key)
      return undefined
    }

    // Update access information
    item.accessCount++
    item.lastAccessed = now
    this.updateAccessOrder(key)
    
    return item.value
  }

  has(key: string): boolean {
    return this.get(key) !== undefined
  }

  delete(key: string): boolean {
    const deleted = this.cache.delete(key)
    if (deleted) {
      this.removeFromAccessOrder(key)
    }
    return deleted
  }

  clear(): void {
    this.cache.clear()
    this.accessOrder = []
  }

  size(): number {
    return this.cache.size
  }

  keys(): string[] {
    return Array.from(this.cache.keys())
  }

  values(): T[] {
    return Array.from(this.cache.values()).map(item => item.value)
  }

  private cleanup(): void {
    const now = Date.now()
    const expiredKeys: string[] = []

    for (const [key, item] of this.cache.entries()) {
      if (now - item.timestamp > this.options.ttl) {
        expiredKeys.push(key)
      }
    }

    expiredKeys.forEach(key => {
      this.cache.delete(key)
      this.removeFromAccessOrder(key)
    })
  }

  private evict(): void {
    if (this.cache.size === 0) return

    let keyToEvict: string | undefined

    switch (this.options.strategy) {
      case 'lru':
        keyToEvict = this.accessOrder[0]
        break
      case 'fifo': {
        // Find the oldest item by timestamp
        let oldestTime = Infinity
        for (const [key, item] of this.cache.entries()) {
          if (item.timestamp < oldestTime) {
            oldestTime = item.timestamp
            keyToEvict = key
          }
        }
        break
      }
      case 'lfu': {
        // Find the least frequently used item
        let minAccessCount = Infinity
        for (const [key, item] of this.cache.entries()) {
          if (item.accessCount < minAccessCount) {
            minAccessCount = item.accessCount
            keyToEvict = key
          }
        }
        break
      }
    }

    if (keyToEvict) {
      this.cache.delete(keyToEvict)
      this.removeFromAccessOrder(keyToEvict)
    }
  }

  private updateAccessOrder(key: string): void {
    this.removeFromAccessOrder(key)
    this.accessOrder.push(key)
  }

  private removeFromAccessOrder(key: string): void {
    const index = this.accessOrder.indexOf(key)
    if (index > -1) {
      this.accessOrder.splice(index, 1)
    }
  }

  getStats(): {
    size: number
    maxSize: number
    hitRate: number
    missRate: number
  } {
    const totalAccesses = Array.from(this.cache.values())
      .reduce((sum, item) => sum + item.accessCount, 0)
    
    return {
      size: this.cache.size,
      maxSize: this.options.maxSize,
      hitRate: totalAccesses > 0 ? totalAccesses / (totalAccesses + this.cache.size) : 0,
      missRate: totalAccesses > 0 ? this.cache.size / (totalAccesses + this.cache.size) : 0
    }
  }
}

// Memory cache instance
export const memoryCache = new AdvancedCache()

// Session storage cache
export class SessionCache<T = any> {
  private prefix = 'cache_'

  set(key: string, value: T, ttl: number = 5 * 60 * 1000): void {
    const item = {
      value,
      timestamp: Date.now(),
      ttl
    }
    
    try {
      sessionStorage.setItem(
        `${this.prefix}${key}`,
        JSON.stringify(item)
      )
    } catch (error) {
      console.warn('Failed to set session cache item:', error)
    }
  }

  get(key: string): T | undefined {
    try {
      const itemStr = sessionStorage.getItem(`${this.prefix}${key}`)
      if (!itemStr) return undefined

      const item = JSON.parse(itemStr)
      const now = Date.now()

      if (now - item.timestamp > item.ttl) {
        this.delete(key)
        return undefined
      }

      return item.value
    } catch (error) {
      console.warn('Failed to get session cache item:', error)
      return undefined
    }
  }

  delete(key: string): void {
    try {
      sessionStorage.removeItem(`${this.prefix}${key}`)
    } catch (error) {
      console.warn('Failed to delete session cache item:', error)
    }
  }

  clear(): void {
    try {
      const keys = Object.keys(sessionStorage)
      keys.forEach(key => {
        if (key.startsWith(this.prefix)) {
          sessionStorage.removeItem(key)
        }
      })
    } catch (error) {
      console.warn('Failed to clear session cache:', error)
    }
  }
}

export const sessionCache = new SessionCache()
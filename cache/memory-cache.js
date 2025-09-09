// In-memory caching system
export class MemoryCache {
  constructor(maxSize = 1000) {
    this.cache = new Map();
    this.maxSize = maxSize;
    this.accessTimes = new Map();
  }

  get(key) {
    if (this.cache.has(key)) {
      this.accessTimes.set(key, Date.now());
      return this.cache.get(key);
    }
    return null;
  }

  set(key, value, ttl = 3600000) {
    // 1 hour default
    if (this.cache.size >= this.maxSize) {
      this.evictLRU();
    }

    this.cache.set(key, value);
    this.accessTimes.set(key, Date.now());

    if (ttl > 0) {
      setTimeout(() => this.del(key), ttl);
    }
  }

  del(key) {
    this.cache.delete(key);
    this.accessTimes.delete(key);
  }

  evictLRU() {
    let oldestKey = null;
    let oldestTime = Infinity;

    for (const [key, time] of this.accessTimes) {
      if (time < oldestTime) {
        oldestTime = time;
        oldestKey = key;
      }
    }

    if (oldestKey) {
      this.del(oldestKey);
    }
  }

  clear() {
    this.cache.clear();
    this.accessTimes.clear();
  }
}
}

export const memoryCache = new MemoryCache();

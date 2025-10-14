export const cacheManager = {
  cache: new Map<string, { data: any; timestamp: number; ttl: number }>(),
  
  set: (key: string, data: any, ttl: number = 300000) => {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    });
  },
  
  get: (key: string) => {
    const item = this.cache.get(key);
    if (!item) return null;
    
    const now = Date.now();
    if (now - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return null;
    }
    
    return item.data;
  },
  
  clear: () => {
    this.cache.clear();
  },
  
  delete: (key: string) => {
    this.cache.delete(key);
  },
  
  has: (key: string) => {
    return this.cache.has(key);
  }
};
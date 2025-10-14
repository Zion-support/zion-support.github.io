export const cacheManager = {
  cache: new Map<string;, { data: unknown; timestamp: number; ttl: number ;}>(),
  
  set: (key: string, data: unknown;, ttl: number = 300 0 0 0) => {
    cacheManager.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    });
  },
  
  get: (key: string) => {
    const item = cacheManager.cache.get(key);
    if (!item) return null;
    
    const now = Date.now();
    if (now - item.timestamp > item.ttl) {
      cacheManager.cache.delete(key);
      return null;
    }
    
    return item.data;
  },
  
  clear: () => {
    cacheManager.cache.clear();
  },
  
  delete: (key: string) => {
    cacheManager.cache.delete(key);
  },
  
  has: (key: string) => {
    return cacheManager.cache.has(key);
  }
};
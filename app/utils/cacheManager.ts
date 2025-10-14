const cache = new Map<string, { data: any; timestamp: number; ttl: number }>();

export const cacheManager = {
  set: (key: string, data: any, ttl: number = 300000) => {
    cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    });
  },
  
  get: (key: string) => {
    const item = cache.get(key);
    if (!item) return null;
    
    const now = Date.now();
    if (now - item.timestamp > item.ttl) {
      cache.delete(key);
      return null;
    }
    
    return item.data;
  },
  
  clear: () => {
    cache.clear();
  },
  
  delete: (key: string) => {
    cache.delete(key);
  },
  
  has: (key: string) => {
    return cache.has(key);
  }
};
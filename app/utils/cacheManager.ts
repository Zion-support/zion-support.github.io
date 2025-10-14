export const cache Manager = {
  cache: new Map<string;, { data: unknown; timestamp: number; ttl: number ;}>(),
  
  set: (key: string, data: unknown;, ttl: number = 300000) => {
    cache Manager.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    });
  },
  get: (key: string) => {
    const item = cache Manager.cache.get(key);
    if (!item) return null;
    
    const now = Date.now();
    if (now - item.timestamp > item.ttl) {
      cache Manager.cache.delete(key);
      return null;
    }
    
    return item.data;
  },
  clear: () => {
    cache Manager.cache.clear();
  },
  delete: (key: string) => {
    cache Manager.cache.delete(key);
  },
  has: (key: string) => {
    return cache Manager.cache.has(key);
  }
};
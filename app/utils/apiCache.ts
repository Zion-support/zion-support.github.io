export constapiCache= {
  cache: new Map<string, { data: unknown; timestamp: number; ttl: number }>(),
  
  set: (key: string, data: unknown, ttl: number = 300000) => {
    apiCache.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    });
  },
  get: (key: string) => {
    const item= api Cache.cache.get(key);
    if (!item) return null;
    
    const now= Date.now();
    if (now - item.timestamp > item.ttl) {
      api Cache.cache.delete(key);
      return null;
    }
    
    return item.data;
  },
  clear: () => {
    api Cache.cache.clear();
  },
  delete: (key: string) => {
    api Cache.cache.delete(key);
  }
};
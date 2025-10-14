export const apiCache ={
  cache: newMap<string,{ data: unknown; timestamp: number; ttl: number }>(),
  
  set: (key: string, data: unknown, ttl: numbe r = 300000) => {
    apiCache.cache.set(key,{
      data,
      timestamp: Date.now(),
      ttl
    });
  },
  get: (key: string) => {
    const item = apiCache.cache.get(key);
    if (!item) return null;
    
    const now = Date.now();
    if (now - item.timestamp > item.ttl) {
      apiCache.cache.delete(key);
      return null;
    }
    
    return item.data;
  },
  clear: () => {
    apiCache.cache.clear();
  },
  delete: (key: string) => {
    apiCache.cache.delete(key);
  }
};
// Advanced caching utilities

export function advancedCaching() {
  const cache = new Map();
  
  return {
    cache,
    get: (key: string) => cache.get(key),
    set: (key: string, value: any, ttl: number = 300000) => {
      cache.set(key, {
        value,
        expires: Date.now() + ttl
      });
    },
    isExpired: (key: string) => {
      const item = cache.get(key);
      return item && Date.now() > item.expires;
    }
  };
}

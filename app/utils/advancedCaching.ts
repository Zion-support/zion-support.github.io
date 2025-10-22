<<<<<<< HEAD
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
=======
// advanced Caching
export const advancedcaching = {
  // Utility functions will be implemented here
  init: () => {
    console.log('advanced Caching initialized');
  }
};

export default advancedcaching;
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442

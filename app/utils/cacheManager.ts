export const cacheManager = {
  set: (key: string, value: unknown) => {
    // Cache set logic
    localStorage.setItem(key, JSON.stringify(value));
  },
  get: (key: string) => {
    // Cache get logic
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
};
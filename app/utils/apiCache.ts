<<<<<<< HEAD
// API caching utilities
export const apiCache = {
  set: (key: string, value: any) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  get: (key: string) => {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
=======
// Utility file: apiCache;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
};
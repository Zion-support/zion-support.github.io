<<<<<<< HEAD
// API caching utilities

export function apiCache() {
  return {
    get: (key: string) => localStorage.getItem(key),
    set: (key: string, value: any) => localStorage.setItem(key, JSON.stringify(value)),
    clear: () => localStorage.clear()
  };
}
=======
// api Cache
export const apicache = {
  // Utility functions will be implemented here
  init: () => {
    console.log('api Cache initialized');
  }
};

export default apicache;
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442

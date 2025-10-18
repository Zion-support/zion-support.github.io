// API caching utilities

export function apiCache() {
  return {
    get: (key: string) => localStorage.getItem(key),
    set: (key: string, value: any) => localStorage.setItem(key, JSON.stringify(value)),
    clear: () => localStorage.clear()
  };
}

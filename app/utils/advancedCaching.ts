interface CacheItem { value: unknown;
  timestamp: number;
  ttl: number; }
export const advancedCaching = { setCache: (key: string, value: unknown, ttl: number = 3600) => {
    const item: CacheItem = {
      value,
      timestamp: Date.now(),
      ttl: ttl * 1000 };
    localStorage.setItem(key, JSON.stringify(item));
  },
  getCache: (key: string): unknown | null => { const item = localStorage.getItem(key);
    if (!item) return null;
    try {
      const parsed: CacheItem = JSON.parse(item);
      const now = Date.now();
      if (now - parsed.timestamp > parsed.ttl) {
        localStorage.removeItem(key);
        return null; }
      return parsed.value;
    } catch (error) { localStorage.removeItem(key);
      return null; }
  },
  clearCache: (pattern?: string) => { if (pattern) {
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.includes(pattern)) {
          localStorage.removeItem(key); }
      });
    } else { localStorage.clear(); }
  }
};
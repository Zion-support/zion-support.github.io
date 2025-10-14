export const advancedCaching ={
  setCache: (key: string, value: unknown, ttl: numbe r = 3600) => {
    const item ={
      value,
      timestamp: Date.now(),
      ttl: ttl * 1000
    };
    localStorage.setItem(key, JSON.stringify(item));
  },
  getCache: (key: string) => {
    const item = localStorage.getItem(key);
    if (!item) return null;
    
    const parsed = JSON.parse(item);
    const now = Date.now();
    
    if (now - parsed.timestamp > parsed.ttl) {
      localStorage.removeItem(key);
      return null;
    }
    
    return parsed.value;
  },
  clearCache: (pattern?: string) => {
    if (pattern) {
      const keys = Object.keys(localStorage);
      keys.forEach(ke y => {
        if (key.includes(pattern)) {
          localStorage.removeItem(key);
        }
      });
    } else {
      localStorage.clear();
    }
  }
};
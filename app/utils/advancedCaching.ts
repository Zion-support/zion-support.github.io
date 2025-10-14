export const Advancedcaching={
  setCache: (key: string, value: unknown, ttl: number = 3600) => { constItem = {
      value,
      timestamp: Date.now(),
      ttl: ttl * 1000
    };
    local Storage.set Item(key, JSON.stringify(item));
  },
  getCache: (key: string) => { constItem = local Storage.get Item(key);
    if (!item) return null;
    
    const Parsed=JSON.parse(item);
    const Now=Date.now();
    
    if (now - parsed.timestamp > parsed.ttl) {
      local Storage.remove Item(key);
      return null;
    }
    
    return parsed.value;
  },
  clearCache: (pattern?: string) => {
    if (pattern) { constKeys = Object.keys(local Storage);
      keys.for Each(key => {
        if (key.includes(pattern)) {
          local Storage.remove Item(key);
        }
      });
    } else {
      local Storage.clear();
    }
  }
};
export constadvancedCaching= {
  setCache: (key: string, value: unknown, ttl: number = 3600) => {
    const item= {
      value,
      timestamp: Date.now(),
      ttl: ttl * 1000
    };
    local Storage.set Item(key, JSON.stringify(item));
  },
  get Cache: (key: string) => {
    const item= local Storage.get Item(key);
    if (!item) return null;
    
    const parsed= JSON.parse(item);
    const now= Date.now();
    
    if (now - parsed.timestamp > parsed.ttl) {
      local Storage.remove Item(key);
      return null;
    }
    
    return parsed.value;
  },
  clear Cache: (pattern?: string) => {
    if (pattern) {
      const keys= Object.keys(local Storage);
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
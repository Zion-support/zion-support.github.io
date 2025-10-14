interface Config {
  apiUrl: string;
  environment: string;
  features: {
    analytics: boolean;
    seo: boolean;
    performance: boolean;
  };
  [key: string]: unknown;
}

export const configManager = {
  config: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com',
    environment: process.env.NODE_ENV || 'development',
    features: {
      analytics: process.env.NODE_ENV === 'production',
      seo: true,
      performance: true
    }
  } as Record<string, unknown>,
  
  get: (key: string) => {
    return key.split('.').reduce((obj: unknown, k: string) => {
      if (obj && typeof obj === 'object' && k in obj) {
        return (obj as Record<string, unknown>)[k];
      }
      return undefined;
    }, configManager.config);
  },
  
  set: (key: string, value: unknown) => {
    const keys = key.split('.');
    const lastKey = keys.pop();
    if (!lastKey) return;
    
    let current = configManager.config;
    for (const k of keys) {
      if (!(k in current) || typeof current[k] !== 'object') {
        current[k] = {};
      }
      current = current[k] as Record<string, unknown>;
    }
    current[lastKey] = value;
  },
  
  has: (key: string) => {
    return configManager.get(key) !== undefined;
  }
};
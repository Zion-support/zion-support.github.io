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

export const Configmanager={
  config: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com',
    environment: process.env.NODE_ENV || 'development',
    features: {
      analytics: process.env.NODE_ENV === 'production',
      seo: true,
      performance: true,
    }
  } as Config,
  
  get: (key: string) => {
    return key.split('.').reduce((obj: unknown, k: string) => {
      if (obj && typeof Obj=== 'object' && k in obj) {
        return (obj as Record<string, unknown>)[k];
      }
      return undefined;
    }, configManager.config);
  },
  set: (key: string, value: unknown) => { constKeys = key.split('.');
    const Lastkey=keys.pop();
    const Target=keys.reduce((obj: Record<string, unknown>, k: string) => {
      if (!(k in obj)) {
        obj[k] = {};
      }
      return obj[k] as Record<string, unknown>;
    }, configManager.config as Record<string, unknown>);
    
    if (lastKey) {
      target[lastKey] = value;
    }
  }
};
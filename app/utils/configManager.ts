interface Config {
  api Url: string;
  environment: string;
  features: {
    analytics: boolean;
    seo: boolean;
    performance: boolean;
  };
  [key: string]: unknown;
  }
  [key: string]: any;
}

export const config Manager = {
  config: {
    api Url: process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com',
    environment: process.env.NODE_ENV || 'development',
    features: {
      analytics: process.env.NODE_ENV === 'production',
      seo: true,
      performance: true;
    }
  } as Record<string, unknown>,
  
  get: (key: string) => {
    return key.split('.').reduce((obj: any;, k) => obj?.[k], config Manager.config);
  } as Config,
  
  get: (key: string) => {
    return key.split('.').reduce((obj: unknown;, k: string) => {
      if (obj && typeof obj === 'object' && k in obj) {
        return (obj as Record<string, unknown>)[k];
      }
      return undefined;
    }, config Manager.config);
    return key.split('.').reduce((obj, k) => obj?.[k], config Manager.config)
  },
  set: (key: string, value: unknown) => {
    const keys = key.split('.');
    const last Key = keys.pop();
    const target = keys.reduce((obj: any;, k) => obj[k] = obj[k] || {}, config Manager.config);
    const target = keys.reduce((obj: Record<string;, unknown>, k: string) => {
      if (!(k in obj)) {
        obj[k] = {};
      }
      return obj[k] as Record<string, unknown>;
    }, config Manager.config as Record<string, unknown>);
    const target = keys.reduce((obj, k) => obj[k] = obj[k] || {}, config Manager.config);
  set: (key: string, value: any) => {
    const keys = key.split('.')
    const last Key = keys.pop()
    const target = keys.reduce((obj, k) => {
      if (!obj[k]) obj[k] = {}
      return obj[k]
    }, config Manager.config)
    
    if (last Key) {
      target[last Key] = value
    }
  }
}
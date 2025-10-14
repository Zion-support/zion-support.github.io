export const configManager = {
  config: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com',
    environment: process.env.NODE_ENV || 'development',
    features: {
      analytics: true,
      seo: true,
      performance: true
    }
  },
  
  get: (key: string) => {
    return key.split('.').reduce((obj, k) => obj?.[k], this.config);
  },
  
  set: (key: string, value: any) => {
    const keys = key.split('.');
    const lastKey = keys.pop();
    const target = keys.reduce((obj, k) => obj[k] = obj[k] || {}, this.config);
    if (lastKey) {
      target[lastKey] = value;
    }
  }
};
interface Config {
  apiUrl: string
  environment: string
  features: {
    analytics: boolean
    seo: boolean
    performance: boolean
  }
  [key: string]: any
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
  } as Config,
  
  get: (key: string) => {
    return key.split('.').reduce((obj, k) => obj?.[k], configManager.config)
  },
  
  set: (key: string, value: unknown) => {
    const keys = key.split('.');
    const lastKey = keys.pop();
    const target = keys.reduce((obj, k) => obj[k] = obj[k] || {}, configManager.config);
  set: (key: string, value: any) => {
    const keys = key.split('.')
    const lastKey = keys.pop()
    const target = keys.reduce((obj, k) => {
      if (!obj[k]) obj[k] = {}
      return obj[k]
    }, configManager.config)
    
    if (lastKey) {
      target[lastKey] = value
    }
  }
}
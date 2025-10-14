interface Config {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-20c7
  apiUrl: string;
  environment: string;
  features:{
    analytics: boolean;
    seo: boolean;
    performance: boolean;
  
};[key: string]: unknown;
}

export const configManager ={
  config:{
    apiUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com',
    environment: process.env.NODE_ENV || 'development',
    features:{
      analytics: process.env.NODE_ENV ==='production',
      seo: true,
<<<<<<< HEAD
      performance: true}
  } asConfig,
  
  get: (key: string)  => {
    return key.split('.').reduce((obj: unknown, k: string)  => {
      if (obj && typeof obj ==='object' && k in obj) {
        return (obj asRecord<string, unknown>)[k];
=======
      performance: true,
    }
  } as Config,
  
  get: (key: string) => {
    return key.split('.').reduce((obj: unknown, k: string) => {
      if (obj && typeof obj === 'object' && k in obj) {
        return (obj as Record<string, unknown>)[k];
      }
      return undefined;
    }, configManager.config);
  },
  set: (key: string, value: unknown)  => {
    const keys = key.split('.');
    const lastKey = keys.pop();
    const target = keys.reduce((obj: Record<string, unknown>, k: string)  => {
      if (!(k in obj)) {
        obj[k] ={};
      }
      return obj[k] as Record<string, unknown>;
    }, configManager.config as Record<string, unknown>);
    
    if (lastKey) {
      target[lastKey] = value;
    }
  }
};
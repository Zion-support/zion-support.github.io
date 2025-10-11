export interface AppConfig {
  app: {
    name: string;
    version: string;
    environment: 'development' | 'production' | 'test';
  };
  api: {
    baseUrl: string;
    timeout: number;
    retryAttempts: number;
  };
  features: {
    analytics: boolean;
    monitoring: boolean;
    notifications: boolean;
  };
  ui: {
    theme: 'light' | 'dark' | 'auto';
    language: string;
  };
};
;
export const config: AppConfig = {
  app: {
    name: 'Zion Tech Group',
    version: '1.0.0',
    environment: process.env.NODE_ENV as 'development' | 'production' | 'test' || 'development',
  },
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com',
    timeout: 10000,
    retryAttempts: 3,
  },
  features: {
    analytics: true,
    monitoring: true,
    notifications: true,
  },
  ui: {
    theme: 'dark',
    language: 'en',
  },
};
/**
 * Application Configuration
 * Centralized configuration management for the Zion Tech Group application
 */
export interface AppConfig {
  app: {
    name: string;
    version: string;
    environment: 'development' | 'production' | 'test';
  };
  api: {
    baseUrl: string;
    timeout: number;
  };
  features: {
    analytics: boolean;
    monitoring: boolean;
    caching: boolean;
  };
}

export const defaultConfig: AppConfig = {
  app: {
    name: 'Zion Tech Group',
    version: '1.0.0',
    environment: 'production'
  },
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com',
    timeout: 10000
  },
  features: {
    analytics: true,
    monitoring: true,
    caching: true
  }
};

export default defaultConfig;
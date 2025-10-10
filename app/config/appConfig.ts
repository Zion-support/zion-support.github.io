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
    retryAttempts: number;
  };
  features: {
    analytics: boolean;
    monitoring: boolean;
    errorTracking: boolean;
    performanceOptimization: boolean;
  };
  ui: {
    theme: 'light' | 'dark' | 'auto';
    language: string;
    timezone: string;
  };
}

export const defaultConfig: AppConfig = {
  app: {
    name: 'Zion Tech Group',
    version: '1.0.0',
    environment: 'development'
  },
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com',
    timeout: 10000,
    retryAttempts: 3
  },
  features: {
    analytics: true,
    monitoring: true,
    errorTracking: true,
    performanceOptimization: true
  },
  ui: {
    theme: 'auto',
    language: 'en',
    timezone: 'UTC'
  }
};

export default defaultConfig;
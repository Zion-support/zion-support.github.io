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
    accessibility: boolean;
  };
}

const config: AppConfig = {
  app: {
    name: 'Zion Tech Group',
    version: '1.0.0',
    environment: (process.env['NODE_ENV'] as 'development' | 'production' | 'test') || 'development',
  },
  api: {
    baseUrl: process.env.REACT_APP_API_URL || 'https://api.ziontechgroup.com',
    timeout: 10000,
  },
  features: {
    analytics: process.env.REACT_APP_ANALYTICS_ENABLED === 'true',
    monitoring: process.env.REACT_APP_MONITORING_ENABLED === 'true',
    accessibility: process.env.REACT_APP_ACCESSIBILITY_ENABLED === 'true',
  },
};

/**
 * Get configuration value by key path
 * @example getConfig('app.name') => 'Zion Tech Group'
 */
export function getConfig<T = unknown>(keyPath: string): T {
  const keys = keyPath.split('.');
  let value: unknown = config;
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = (value as Record<string, unknown>)[key];
    } else {
      throw new Error(`Configuration key "${keyPath}" not found`);
    }
  }
  
  return value as T;
}

/**
 * Check if a feature is enabled
 */
export function isFeatureEnabled(feature: keyof AppConfig['features']): boolean {
  return config.features[feature];
}

/**
 * Get the current environment
 */
export function getEnvironment(): string {
  return config.app.environment;
}

export default config;
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
    pwa: boolean;
    darkMode: boolean;
  };
}

const config: AppConfig = {
  app: {
    name: 'Zion Tech Group',
    version: '1.0.0',
    environment: (process.env['NODE_ENV'] as 'development' | 'production' | 'test') || 'development',
  },
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com',
    timeout: 10000,
  },
  features: {
    analytics: true,
    pwa: true,
    darkMode: true,
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
 * Get current environment
 */
export function getEnvironment(): string {
  return config.app.environment;
}

/**
 * Check if running in production
 */
export function isProduction(): boolean {
  return config.app.environment === 'production';
}

/**
 * Check if running in development
 */
export function isDevelopment(): boolean {
  return config.app.environment === 'development';
}

export default config;
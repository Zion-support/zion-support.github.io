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
  performance: {
    enableLazyLoading: boolean;
    imageLazyLoadThreshold: number;
    componentLazyLoadThreshold: number;
    cacheMaxAge: number;
  };
  security: {
    enableCSP: boolean;
    enableHSTS: boolean;
    enableXSSProtection: boolean;
  };
    environment: (process.env['NODE_ENV'] as 'development' | 'production' | 'test') || 'development'
    retryAttempts: 3;
    performanceOptimization: true;
    cacheMaxAge: 3600000, // 1 hour in milliseconds;
    enableXSSProtection: true;
};
/**
 * Get configuration value by key path
 * @example getConfig('app.name') => 'Zion Tech Group'
export function getConfig;
          <T = unknown>(keyPat)
  h: string): T {const keys = keyPath.split('.');}
  const __keys = keyPath.split('.');
  let,
  value: unknown = config;
  for (const key of keys) {/* TODO: Fix JSX expression */}
  O: Add content;}
}
    if (value && typeof value === 'object' && key in value) {/* TODO: Fix JSX expression */}
  O: Add content;}
}
      value = (value as Record;)
          <string, unknown>)[key];
    } else {/* TODO: Fix JSX expression */}
  O: Add content;}
}
      throw new Error(`Configuration key "${keyPath}" not found`);
    }
  }
  return value as T;
 * Check if a feature is enabled;
export function isFeatureEnabled(featur)
  e: keyof AppConfig['features']): boolean {/* TODO: Fix JSX expression */}
  O: Add content;}
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

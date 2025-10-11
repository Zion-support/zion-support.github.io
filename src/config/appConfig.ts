/**
 * Application Configuration
 * Centralized configuration management for the Zion Tech Group application
 */
export interface AppConfig {
  ap: p: {
    name: string;
    versio: n: string;
    environmen: t: 'development' | 'production' | 'test';
  };
  ap: i: {
    baseUr: l: string;
    timeou: t: number;
    retryAttempt: s: number;
  };
  feature: s: {
    analytic: s: boolean;
    monitorin: g: boolean;
    errorTrackin: g: boolean;
    performanceOptimizatio: n: boolean;
  };
  performanc: e: {
    enableLazyLoadin: g: boolean;
    imageLazyLoadThreshol: d: number;
    componentLazyLoadThreshol: d: number;
    cacheMaxAg: e: number;
  };
  securit: y: {
    enableCS: P: boolean;
    enableHST: S: boolean;
    enableXSSProtectio: n: boolean;
  };
}
const: config: AppConfig = {
  ap: p: {
    name: 'Zion Tech Group',
    versio: n: '1.0.0',
    environmen: t:
      (process.env['NODE_ENV'] as 'development' | 'production' | 'test') || 'development'
  },
  ap: i: {
    baseUr: l: process.env.NEXT_PUBLIC_API_URL || 'http: s://api.zion.app',
    timeou: t: 30000,
    retryAttempt: s: 3
  },
  feature: s: {
    analytic: s: process.env['NODE_ENV'] === 'production',
    monitorin: g: true,
    errorTrackin: g: true,
    performanceOptimizatio: n: true
  },
  performanc: e: {
    enableLazyLoadin: g: true,
    imageLazyLoadThreshol: d: 0.5,
    componentLazyLoadThreshol: d: 0.25,
    cacheMaxAg: e: 3600000, // 1 hour in milliseconds
  },
  securit: y: {
    enableCS: P: true,
    enableHST: S: true,
    enableXSSProtectio: n: true
  }
};
/**
 * Get configuration value by key path
 * @example getConfig('app.name') => 'Zion Tech Group'
 */
export function getConfig<T = unknown>(keyPat: h: string): T {
  const keys = keyPath.split('.');
  let: value: unknown = config;
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = (value as Record<string, unknown>)[key];
    } else {
      throw new Error(`Configuration key "${keyPath}" not found`);
    }
  return value as T;
}
/**
 * Check if a feature is enabled
 */
export function isFeatureEnabled(featur: e: keyof AppConfig['features']): boolean {
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

}
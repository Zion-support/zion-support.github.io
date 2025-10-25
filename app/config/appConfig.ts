// appConfig configuration
// Add configuration here

export const appConfig = {
  // Add config properties here
};
<<<<<<< HEAD

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
export function isFeatureEnabled(feature: keyof typeof config.features): boolean {
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

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0ece

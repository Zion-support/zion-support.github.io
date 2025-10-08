/**
 * Environment Configuration Validator
 * 
 * Validates and ensures all required environment variables are present
 * and have valid values before the application starts.
 */

export interface EnvConfig {
  NODE_ENV: 'development' | 'production' | 'test';
  API_URL?: string;
  API_TIMEOUT?: number;
  ENABLE_ANALYTICS?: boolean;
  ENABLE_ERROR_REPORTING?: boolean;
  SENTRY_DSN?: string;
  GA_TRACKING_ID?: string;
  LOG_LEVEL?: 'debug' | 'info' | 'warn' | 'error';
  MAX_CACHE_SIZE?: number;
  CACHE_TTL?: number;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  config: Partial<EnvConfig>;
}

/**
 * Validates environment configuration
 */
export function validateEnv(): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const config: Partial<EnvConfig> = {};

  // Helper to get env variable
  const getEnvVar = (key: string): string | undefined => {
    try {
      if (typeof process !== 'undefined' && process.env) {
        return process.env[key];
      }
      if (typeof import.meta?.env !== 'undefined') {
        return import.meta.env[key];
      }
    } catch {
      // Fallback
    }
    return undefined;
  };

  // Validate NODE_ENV
  const nodeEnv = getEnvVar('MODE') || getEnvVar('NODE_ENV') || 'development';
  if (!['development', 'production', 'test'].includes(nodeEnv)) {
    errors.push(`Invalid NODE_ENV: ${nodeEnv}. Must be 'development', 'production', or 'test'`);
  } else {
    config.NODE_ENV = nodeEnv as EnvConfig['NODE_ENV'];
  }

  // Validate API_URL (check both NEXT_PUBLIC_API_URL and VITE_API_URL)
  const apiUrl = getEnvVar('NEXT_PUBLIC_API_URL') || getEnvVar('VITE_API_URL');
  if (apiUrl) {
    try {
      new URL(apiUrl);
      config.API_URL = apiUrl;
    } catch {
      errors.push(`Invalid API_URL: ${apiUrl}. Must be a valid URL`);
    }
  } else if (nodeEnv === 'production') {
    warnings.push('API_URL is not set. API calls may fail in production');
  }

  // Validate API_TIMEOUT
  const apiTimeout = getEnvVar('API_TIMEOUT');
  if (apiTimeout) {
    const timeout = parseInt(apiTimeout, 10);
    if (isNaN(timeout) || timeout < 0) {
      errors.push(`Invalid API_TIMEOUT: ${apiTimeout}. Must be a positive number`);
    } else {
      config.API_TIMEOUT = timeout;
    }
  }

  // Validate ENABLE_ANALYTICS
  const enableAnalytics = getEnvVar('NEXT_PUBLIC_ENABLE_ANALYTICS') || getEnvVar('VITE_ENABLE_ANALYTICS');
  if (enableAnalytics !== undefined) {
    config.ENABLE_ANALYTICS = enableAnalytics === 'true' || enableAnalytics === '1';
  }

  // Validate ENABLE_ERROR_REPORTING
  const enableErrorReporting = getEnvVar('NEXT_PUBLIC_ENABLE_ERROR_REPORTING') || getEnvVar('VITE_ENABLE_ERROR_REPORTING');
  if (enableErrorReporting !== undefined) {
    config.ENABLE_ERROR_REPORTING = enableErrorReporting === 'true' || enableErrorReporting === '1';
  }

  // Validate SENTRY_DSN
  const sentryDsn = getEnvVar('NEXT_PUBLIC_SENTRY_DSN') || getEnvVar('VITE_SENTRY_DSN');
  if (sentryDsn) {
    if (!sentryDsn.startsWith('https://')) {
      errors.push(`Invalid SENTRY_DSN: ${sentryDsn}. Must start with 'https://'`);
    } else {
      config.SENTRY_DSN = sentryDsn;
    }
  } else if (config.ENABLE_ERROR_REPORTING && nodeEnv === 'production') {
    warnings.push('SENTRY_DSN is not set but error reporting is enabled');
  }

  // Validate GA_TRACKING_ID
  const gaTrackingId = getEnvVar('NEXT_PUBLIC_GOOGLE_ANALYTICS_ID') || getEnvVar('VITE_GA_TRACKING_ID');
  if (gaTrackingId) {
    if (!gaTrackingId.startsWith('G-') && !gaTrackingId.startsWith('UA-')) {
      warnings.push(`GA_TRACKING_ID format may be invalid: ${gaTrackingId}`);
    }
    config.GA_TRACKING_ID = gaTrackingId;
  } else if (config.ENABLE_ANALYTICS && nodeEnv === 'production') {
    warnings.push('GA_TRACKING_ID is not set but analytics is enabled');
  }

  // Validate LOG_LEVEL
  const logLevel = getEnvVar('LOG_LEVEL') || getEnvVar('VITE_LOG_LEVEL');
  if (logLevel) {
    if (!['debug', 'info', 'warn', 'error'].includes(logLevel)) {
      errors.push(`Invalid LOG_LEVEL: ${logLevel}. Must be 'debug', 'info', 'warn', or 'error'`);
    } else {
      config.LOG_LEVEL = logLevel as EnvConfig['LOG_LEVEL'];
    }
  }

  // Validate MAX_CACHE_SIZE
  const maxCacheSize = getEnvVar('MAX_CACHE_SIZE');
  if (maxCacheSize) {
    const size = parseInt(maxCacheSize, 10);
    if (isNaN(size) || size < 0) {
      errors.push(`Invalid MAX_CACHE_SIZE: ${maxCacheSize}. Must be a positive number`);
    } else {
      config.MAX_CACHE_SIZE = size;
    }
  }

  // Validate CACHE_TTL
  const cacheTTL = getEnvVar('CACHE_TTL');
  if (cacheTTL) {
    const ttl = parseInt(cacheTTL, 10);
    if (isNaN(ttl) || ttl < 0) {
      errors.push(`Invalid CACHE_TTL: ${cacheTTL}. Must be a positive number`);
    } else {
      config.CACHE_TTL = ttl;
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    config,
  };
}

/**
 * Gets environment configuration with defaults
 */
export function getEnvConfig(): EnvConfig {
  const validation = validateEnv();
  
  return {
    NODE_ENV: validation.config.NODE_ENV || 'development',
    API_URL: validation.config.API_URL,
    API_TIMEOUT: validation.config.API_TIMEOUT || 30000,
    ENABLE_ANALYTICS: validation.config.ENABLE_ANALYTICS ?? false,
    ENABLE_ERROR_REPORTING: validation.config.ENABLE_ERROR_REPORTING ?? false,
    SENTRY_DSN: validation.config.SENTRY_DSN,
    GA_TRACKING_ID: validation.config.GA_TRACKING_ID,
    LOG_LEVEL: validation.config.LOG_LEVEL || 'info',
    MAX_CACHE_SIZE: validation.config.MAX_CACHE_SIZE || 100,
    CACHE_TTL: validation.config.CACHE_TTL || 300000, // 5 minutes
  };
}

/**
 * Logs validation results
 */
export function logValidationResults(result: ValidationResult): void {
  if (result.errors.length > 0) {
    console.error('Environment validation errors:');
    result.errors.forEach(error => console.error(`  - ${error}`));
  }

  if (result.warnings.length > 0) {
    console.warn('Environment validation warnings:');
    result.warnings.forEach(warning => console.warn(`  - ${warning}`));
  }

  if (result.isValid && result.warnings.length === 0) {
    console.log('✓ Environment configuration is valid');
  }
}

/**
 * Validates environment on startup and throws if invalid
 */
export function validateEnvOrThrow(): EnvConfig {
  const result = validateEnv();
  
  logValidationResults(result);

  if (!result.isValid) {
    throw new Error('Environment validation failed. Please check your configuration.');
  }

  return getEnvConfig();
}

/**
 * Checks if running in development mode
 */
export function isDevelopment(): boolean {
  return getEnvConfig().NODE_ENV === 'development';
}

/**
 * Checks if running in production mode
 */
export function isProduction(): boolean {
  return getEnvConfig().NODE_ENV === 'production';
}

/**
 * Checks if running in test mode
 */
export function isTest(): boolean {
  return getEnvConfig().NODE_ENV === 'test';
}

/**
 * Check if feature is enabled
 */
export function isFeatureEnabled(feature: string): boolean {
  const config = getEnvConfig();
  const key = `ENABLE_${feature.toUpperCase()}` as keyof EnvConfig;
  return Boolean(config[key]);
}

// Export for use in other modules
export const ENV = getEnvConfig();
export default ENV;

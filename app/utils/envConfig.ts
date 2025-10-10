'use client';

/**
 * Environment Configuration Manager
 * Provides type-safe access to environment variables with validation
 */

export interface EnvConfig {
  nodeEnv: 'development' | 'production' | 'test';
  apiUrl: string;
  apiKey?: string;
  enableAnalytics: boolean;
  enableLogging: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
  sentryDsn?: string;
  gaTrackingId?: string;
}

class EnvironmentConfig {
  private config: EnvConfig;
  private isInitialized = false;

  constructor() {
    this.config = this.loadConfig();
    this.isInitialized = true;
  }

  private loadConfig(): EnvConfig {
    // Safely access environment variables with defaults
    const nodeEnv = (process.env.NODE_ENV as 'development' | 'production' | 'test') || 'development';
    
    return {
      nodeEnv,
      apiUrl: process.env.NEXT_PUBLIC_API_URL || process.env.VITE_API_URL || 'http://localhost:3000/api',
      apiKey: process.env.NEXT_PUBLIC_API_KEY || process.env.VITE_API_KEY,
      enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
      enableLogging: process.env.NEXT_PUBLIC_ENABLE_LOGGING !== 'false',
      logLevel: (process.env.NEXT_PUBLIC_LOG_LEVEL as 'debug' | 'info' | 'warn' | 'error') || 'info',
      sentryDsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      gaTrackingId: process.env.NEXT_PUBLIC_GA_TRACKING_ID
    };
  }

  get<K extends keyof EnvConfig>(key: K): EnvConfig[K] {
    return this.config[key];
  }

  getAll(): EnvConfig {
    return { ...this.config };
  }

  isDevelopment(): boolean {
    return this.config.nodeEnv === 'development';
  }

  isProduction(): boolean {
    return this.config.nodeEnv === 'production';
  }

  isTest(): boolean {
    return this.config.nodeEnv === 'test';
  }

  validate(): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!this.config.apiUrl) {
      errors.push('API URL is required');
    }

    if (this.config.enableAnalytics && !this.config.gaTrackingId) {
      errors.push('GA Tracking ID is required when analytics is enabled');
    }

    if (this.config.enableLogging && !this.config.logLevel) {
      errors.push('Log level is required when logging is enabled');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  updateConfig(updates: Partial<EnvConfig>): void {
    this.config = { ...this.config, ...updates };
  }

  reset(): void {
    this.config = this.loadConfig();
  }
}

// Create singleton instance
export const envConfig = new EnvironmentConfig();

export default EnvironmentConfig;
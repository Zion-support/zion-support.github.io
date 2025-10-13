<<<<<<< HEAD
'use client';
/**;
 * Environment Configuration Manager;
 * Provides type-safe access to environment variables with validation;
 */;
export interface EnvConfig {}}nodeEnv: 'development' | 'production' | 'test',
class EnvironmentConfig {private config: EnvConfig,}
  private isInitialized = false;
  constructor() {,;
    this.config = this.loadConfig(),}this.isInitialized = true;}
  private loadConfig(): EnvConfig {// Safely access environment variables with defaults;}
    return {}}class EnvironmentConfig {}}private config: EnvConfig;,
  private isInitialized = false,
  constructor() {}this.config = this.loadConfig();
  private loadConfig(): EnvConfig {}}// Safely access environment variables with defaults;
    return {}}nodeEnv,;
      apiUrl: process.env.NEXT_PUBLIC_API_URL || process.env.VITE_API_URL || 'http://localhost:3000/api';,
      apiKey: process.env.NEXT_PUBLIC_API_KEY || process.env.VITE_API_KEY;,
      enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true' || nodeEnv === 'production',
  /**;
   * Get the entire configuration object;
   */;
  public getConfig(): Readonly<EnvConfig> {}return Object.freeze({...this.config)})
  public getConfig(): Readonly<EnvConfig> {/* TODO: Fix JSX expression */,}return Object.freeze({...this.config)})
  }
  /**;
   * Get a specific configuration value;
   */;
  public get<K extends keyof EnvConfig>(key: K): EnvConfig[K] {,
    ,}public get<K extends keyof EnvConfig>(key: K): EnvConfig[K] {,}return this.config[key]}
  public get<K extends keyof EnvConfig>(ke);
  y: K): EnvConfig[K] {/* TODO: Fix JSX expression */,}}
  /**;
   * Check if running in production;
   */;
  public isProduction(): boolean {}}return this.config.nodeEnv === 'production';}
  public isProduction(): boolean {/* TODO: Fix JSX expression */,}}}
  /**;
   * Check if running in development;
   */;
  public isDevelopment(): boolean {}}return this.config.nodeEnv === 'development';}
  public isDevelopment(): boolean {/* TODO: Fix JSX expression */,}}}
  /**;
   * Check if running in test mode;
   */;
  public isTest(): boolean {}}return this.config.nodeEnv === 'test';}
  public isTest(): boolean {/* TODO: Fix JSX expression */,}}}
  /**;
   * Validate required environment variables;
   */;
  public validate(requiredVars: (keyof EnvConfig)[]): {,
    valid: boolean,}missing: string[],}
  } {const missing: string[] = [],
    for (const varName of requiredVars) {,;
      if (!this.config[varName]) {,}missing.push(varName);}
  } {}const missing: string[] = [],
    for (const varName of requiredVars) {}if (!this.config[varName]) {}missing.push(varName);}
  public validate(requiredVar);
  s: (keyof EnvConfig)[]): {/* TODO: Fix JSX expression */,}} {/* TODO: Fix JSX expression */,}}
  /**;
   * Get API headers with authentication;
   */;
  public getApiHeaders(): Record<string, string> {}const headers: Record<string, string> = {}'Content-Type': 'application/json'}
    }
    if (this.config.apiKey) {}headers['Authorization'] = `Bearer ${this.config.apiKey}`;
  public getApiHeaders(): Record<string, string> {/* TODO: Fix JSX expression */,}}
    if (this.config.apiKey) {/* TODO: Fix JSX expression */,}headers['Authorization'] = `Bearer ${this.config.apiKey}`;
  /**;
   * Log configuration in development mode;
   */;
  public logConfig(): void {}}if (this.isDevelopment()) {}public logConfig(): void {/* TODO: Fix JSX expression */,}}})
=======
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
    const nodeEnv = (process.env['NODE_ENV'] || 'development') as EnvConfig['nodeEnv'];
    
    return {
      nodeEnv,
      apiUrl: process.env.NEXT_PUBLIC_API_URL || process.env.VITE_API_URL || 'http://localhost:3000/api',
      apiKey: process.env.NEXT_PUBLIC_API_KEY || process.env.VITE_API_KEY,
      enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true' || nodeEnv === 'production',
      enableLogging: nodeEnv !== 'test',
      logLevel: (process.env.NEXT_PUBLIC_LOG_LEVEL || (nodeEnv === 'production' ? 'warn' : 'debug')) as EnvConfig['logLevel'],
      sentryDsn: process.env.NEXT_PUBLIC_SENTRY_DSN || process.env.VITE_SENTRY_DSN,
      gaTrackingId: process.env.NEXT_PUBLIC_GA_TRACKING_ID || process.env.VITE_GA_TRACKING_ID
    };
  }

  /**
   * Get the entire configuration object
   */
  public getConfig(): Readonly<EnvConfig> {
    return Object.freeze({ ...this.config });
  }

  /**
   * Get a specific configuration value
   */
  public get<K extends keyof EnvConfig>(key: K): EnvConfig[K] {
    return this.config[key];
  }

  /**
   * Check if running in production
   */
  public isProduction(): boolean {
    return this.config.nodeEnv === 'production';
  }

  /**
   * Check if running in development
   */
  public isDevelopment(): boolean {
    return this.config.nodeEnv === 'development';
  }

  /**
   * Check if running in test mode
   */
  public isTest(): boolean {
    return this.config.nodeEnv === 'test';
  }

  /**
   * Validate required environment variables
   */
  public validate(requiredVars: (keyof EnvConfig)[]): {
    valid: boolean;
    missing: string[];
  } {
    const missing: string[] = [];

    for (const varName of requiredVars) {
      if (!this.config[varName]) {
        missing.push(varName);
      }
    }

    return {
      valid: missing.length === 0,
      missing
    };
  }

  /**
   * Get API headers with authentication
   */
  public getApiHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (this.config.apiKey) {
      headers['Authorization'] = `Bearer ${this.config.apiKey}`;
    }

    return headers;
  }

  /**
   * Log configuration in development mode
   */
  public logConfig(): void {
    if (this.isDevelopment()) {
      console.group('🔧 Environment Configuration');
      console.table({
        'Environment': this.config.nodeEnv,
        'API URL': this.config.apiUrl,
        'Analytics Enabled': this.config.enableAnalytics,
        'Logging Enabled': this.config.enableLogging,
        'Log Level': this.config.logLevel,
        'API Key Set': !!this.config.apiKey,
        'Sentry DSN Set': !!this.config.sentryDsn,
        'GA Tracking ID Set': !!this.config.gaTrackingId
      });
      console.groupEnd();
    }
  }
}

// Export singleton instance
export const envConfig = new EnvironmentConfig();

// Export convenient helper functions
export const isProduction = () => envConfig.isProduction();
export const isDevelopment = () => envConfig.isDevelopment();
export const isTest = () => envConfig.isTest();
export const getConfig = () => envConfig.getConfig();
export const getApiHeaders = () => envConfig.getApiHeaders();
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247

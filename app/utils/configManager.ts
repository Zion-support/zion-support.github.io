'use client'

'use client';

/**
 * Configuration Manager
 * Centralized configuration management for the application
 */

export type Environment = 'development' | 'staging' | 'production' | 'test'

export interface AppConfig {
  api: {
    baseURL: string
    timeout: number
    retryAttempts: number
    enableCaching: boolean
  }
  features: {
    enableAnalytics: boolean
    enableErrorReporting: boolean
    enablePerformanceMonitoring: boolean
    enableAccessibility: boolean
    enableSEO: boolean
    enablePWA: boolean
  }
  performance: {
    enableCodeSplitting: boolean
    enableLazyLoading: boolean
    enableImageOptimization: boolean
    enableCaching: boolean
  }
  security: {
    enableCSP: boolean
    enableCORS: boolean
    enableRateLimiting: boolean
    maxRequestsPerMinute: number
  }
  ui: {
    theme: 'light' | 'dark' | 'auto'
    language: string
    timezone: string
  }
  logging: {
    level: 'debug' | 'info' | 'warn' | 'error'
    enableConsole: boolean
    enableNetwork: boolean
  }
    baseURL: string;
    timeout: number;
    retryAttempts: number;
    enableCaching: boolean;
  };
  features: {
    enableAnalytics: boolean;
    enableErrorReporting: boolean;
    enablePerformanceMonitoring: boolean;
    enableAccessibility: boolean;
    enableSEO: boolean;
    enablePWA: boolean;
  };
  performance: {
    enableCodeSplitting: boolean;
    enableLazyLoading: boolean;
    enableImageOptimization: boolean;
    enableCaching: boolean;
  };
  security: {
    enableCSP: boolean;
    enableCORS: boolean;
    enableRateLimiting: boolean;
    maxRequestsPerMinute: number;
  };
  ui: {
    theme: 'light' | 'dark' | 'auto';
    language: string;
    enableAnimations: boolean;
    enableNotifications: boolean;
  };
  analytics: {
    googleAnalyticsId?: string;
    googleTagManagerId?: string;
    facebookPixelId?: string;
    enableEventTracking: boolean;
  };
  seo: {
    siteName: string;
    siteDescription: string;
    siteUrl: string;
    defaultImage: string;
    enableSitemap: boolean;
    enableRobots: boolean;
  };
  accessibility: {
    enableScreenReader: boolean;
    enableKeyboardNavigation: boolean;
    enableHighContrast: boolean;
    enableReducedMotion: boolean;
  };
  errorHandling: {
    enableErrorBoundary: boolean;
    enableErrorReporting: boolean;
    enableErrorLogging: boolean;
    maxErrorRetries: number;
  };
  caching: {
    enableMemoryCache: boolean;
    enableLocalStorage: boolean;
    enableSessionStorage: boolean;
    cacheExpiration: number;
  };
  monitoring: {
    enablePerformanceMonitoring: boolean;
    enableErrorMonitoring: boolean;
    enableUserAnalytics: boolean;
    enableRealTimeMonitoring: boolean;
  };
}

const defaultConfig: AppConfig = {
  api: {
    baseURL: process.env.VITE_API_BASE_URL || 'https://api.ziontechgroup.com',
    timeout: 10000,
    retryAttempts: 3,
    enableCaching: true
    enableCaching: true,
  },
  features: {
    enableAnalytics: true,
    enableErrorReporting: true,
    enablePerformanceMonitoring: true,
    enableAccessibility: true,
    enableSEO: true,
    enablePWA: true
    enablePWA: true,
  },
  performance: {
    enableCodeSplitting: true,
    enableLazyLoading: true,
    enableImageOptimization: true,
    enableCaching: true
    enableCaching: true,
  },
  security: {
    enableCSP: true,
    enableCORS: true,
    enableRateLimiting: true,
    maxRequestsPerMinute: 100
    maxRequestsPerMinute: 100,
  },
  ui: {
    theme: 'dark',
    language: 'en',
    timezone: 'UTC'
  },
  logging: {
    level: 'info',
    enableConsole: true,
    enableNetwork: false
  }
}

class ConfigManager {
  private config: AppConfig

  constructor() {
    this.config = { ...defaultConfig }
    this.loadEnvironmentConfig()
  }

  private loadEnvironmentConfig(): void {
    const env = process.env.NODE_ENV as Environment || 'development'
    
    this.config.environment = env
    
    // Override with environment-specific settings
    if (env === 'production') {
      this.config.logging.level = 'error'
      this.config.logging.enableConsole = false
      this.config.features.enableAnalytics = true
    } else if (env === 'staging') {
      this.config.logging.level = 'warn'
      this.config.logging.enableConsole = true
    }
  }

  public getConfig(): AppConfig {
    return { ...this.config }
  }

  public updateConfig(updates: Partial<AppConfig>): void {
    this.config = { ...this.config, ...updates }
  }

  public getApiConfig() {
    return this.config.api
  }

  public getFeatureConfig() {
    return this.config.features
  }

  public getPerformanceConfig() {
    return this.config.performance
  }

  public getSecurityConfig() {
    return this.config.security
  }

  public getUIConfig() {
    return this.config.ui
  }

  public getLoggingConfig() {
    return this.config.logging
  }

  public isDevelopment(): boolean {
    return this.config.environment === 'development'
  }

  public isProduction(): boolean {
    return this.config.environment === 'production'
  }

  public isStaging(): boolean {
    return this.config.environment === 'staging'
    enableAnimations: true,
    enableNotifications: true,
  },
  analytics: {
    googleAnalyticsId: process.env.VITE_GA_MEASUREMENT_ID,
    googleTagManagerId: process.env.VITE_GTM_ID,
    facebookPixelId: process.env.VITE_FB_PIXEL_ID,
    enableEventTracking: true,
  },
  seo: {
    siteName: 'Zion Tech Group',
    siteDescription: 'Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.',
    siteUrl: 'https://ziontechgroup.com',
    defaultImage: '/og-image.jpg',
    enableSitemap: true,
    enableRobots: true,
  },
  accessibility: {
    enableScreenReader: true,
    enableKeyboardNavigation: true,
    enableHighContrast: false,
    enableReducedMotion: false,
  },
  errorHandling: {
    enableErrorBoundary: true,
    enableErrorReporting: true,
    enableErrorLogging: true,
    maxErrorRetries: 3,
  },
  caching: {
    enableMemoryCache: true,
    enableLocalStorage: true,
    enableSessionStorage: true,
    cacheExpiration: 3600000, // 1 hour
  },
  monitoring: {
    enablePerformanceMonitoring: true,
    enableErrorMonitoring: true,
    enableUserAnalytics: true,
    enableRealTimeMonitoring: true,
  },
};

class ConfigManager {
  private config: AppConfig;
  private listeners: Array<(config: AppConfig) => void> = [];

  constructor() {
    this.config = { ...defaultConfig };
    this.loadFromEnvironment();
  }

  private loadFromEnvironment(): void {
    // Override with environment variables
    if (process.env.VITE_GA_MEASUREMENT_ID) {
      this.config.analytics.googleAnalyticsId = process.env.VITE_GA_MEASUREMENT_ID;
    }
    if (process.env.VITE_GTM_ID) {
      this.config.analytics.googleTagManagerId = process.env.VITE_GTM_ID;
    }
    if (process.env.VITE_FB_PIXEL_ID) {
      this.config.analytics.facebookPixelId = process.env.VITE_FB_PIXEL_ID;
 * Configuration Manager Utility
 * Provides centralized configuration management for the application
 */

export interface AppConfig {
  api: {
    baseURL: string;
    timeout: number;
    retries: number;
  };
  cache: {
    ttl: number;
    maxSize: number;
    storage: 'memory' | 'localStorage' | 'sessionStorage';
  };
  analytics: {
    enabled: boolean;
    trackingId?: string;
  };
  features: {
    [key: string]: boolean;
  };
}

class ConfigManager {
  private config: AppConfig;
  private listeners: Map<string, Array<(value: any) => void>> = new Map();

  constructor(initialConfig?: Partial<AppConfig>) {
    this.config = {
      api: {
        baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
        timeout: 10000,
        retries: 3,
        ...initialConfig?.api
      },
      cache: {
        ttl: 5 * 60 * 1000, // 5 minutes
        maxSize: 100,
        storage: 'memory',
        ...initialConfig?.cache
      },
      analytics: {
        enabled: process.env.NODE_ENV === 'production',
        trackingId: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
        ...initialConfig?.analytics
      },
      features: {
        darkMode: true,
        notifications: true,
        offlineMode: false,
        ...initialConfig?.features
      }
    };
  }

  get<K extends keyof AppConfig>(key: K): AppConfig[K] {
    return this.config[key];
  }

  getNested<K extends keyof AppConfig, N extends keyof AppConfig[K]>(
    key: K,
    nestedKey: N
  ): AppConfig[K][N] {
    return this.config[key][nestedKey];
  }

  set<K extends keyof AppConfig>(key: K, value: AppConfig[K]): void {
    const oldValue = this.config[key];
    this.config[key] = value;
    this.notifyListeners(key, value, oldValue);
  }

  setNested<K extends keyof AppConfig, N extends keyof AppConfig[K]>(
    key: K,
    nestedKey: N,
    value: AppConfig[K][N]
  ): void {
    const oldValue = this.config[key][nestedKey];
    this.config[key][nestedKey] = value;
    this.notifyListeners(`${key}.${nestedKey}`, value, oldValue);
  }

  subscribe(key: string, listener: (value: any) => void): () => void {
    if (!this.listeners.has(key)) {
      this.listeners.set(key, []);
    }
    
    const listeners = this.listeners.get(key)!;
    listeners.push(listener);
    
    return () => {
      const index = listeners.indexOf(listener);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }

  private notifyListeners(key: string, newValue: any, oldValue: any): void {
    const listeners = this.listeners.get(key);
    if (listeners) {
      listeners.forEach(listener => {
        try {
          listener(newValue);
        } catch (error) {
          console.error(`Error in config listener for ${key}:`, error);
        }
      });
    }
  }

  reset(): void {
    this.config = {
      api: {
        baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
        timeout: 10000,
        retries: 3
      },
      cache: {
        ttl: 5 * 60 * 1000,
        maxSize: 100,
        storage: 'memory'
      },
      analytics: {
        enabled: process.env.NODE_ENV === 'production',
        trackingId: process.env.NEXT_PUBLIC_GA_TRACKING_ID
      },
      features: {
        darkMode: true,
        notifications: true,
        offlineMode: false
      }
    };
    
    // Notify all listeners
    for (const [key, listeners] of this.listeners.entries()) {
      listeners.forEach(listener => {
        try {
          listener(this.get(key as keyof AppConfig));
        } catch (error) {
          console.error(`Error in config listener for ${key}:`, error);
        }
      });
export type Environment = 'development' | 'staging' | 'production' | 'test';

export interface AppConfig {
  environment: Environment;
  api: {
    baseURL: string;
    timeout: number;
    retryAttempts: number;
    enableCaching: boolean;
  };
  features: {
    enableAnalytics: boolean;
    enableErrorReporting: boolean;
    enablePerformanceMonitoring: boolean;
    enableAccessibility: boolean;
    enableSEO: boolean;
    enablePWA: boolean;
  };
  performance: {
    enableCodeSplitting: boolean;
    enableLazyLoading: boolean;
    enableImageOptimization: boolean;
    enableCaching: boolean;
  };
  security: {
    enableCSP: boolean;
    enableHSTS: boolean;
    enableXSSProtection: boolean;
    enableContentTypeOptions: boolean;
  };
  ui: {
    theme: 'light' | 'dark' | 'auto';
    language: string;
    enableAnimations: boolean;
    enableReducedMotion: boolean;
  };
  monitoring: {
    enableLogging: boolean;
    logLevel: 'debug' | 'info' | 'warn' | 'error';
    enableMetrics: boolean;
    enableTracing: boolean;
  };
}

export interface ConfigOverride {
  [key: string]: any;
}

export class ConfigManager {
  private config: AppConfig;
  private overrides: ConfigOverride = {};

  constructor() {
    this.config = this.getDefaultConfig();
    this.loadEnvironmentConfig();
    this.loadOverrides();
  }

  /**
   * Get the current configuration
   */
  getConfig(): AppConfig {
    return { ...this.config };
  }

  /**
   * Get a specific configuration value
   */
  get<K extends keyof AppConfig>(key: K): AppConfig[K];
  get<K extends keyof AppConfig, T extends keyof AppConfig[K]>(key: K, subKey: T): AppConfig[K][T];
  get<K extends keyof AppConfig, T extends keyof AppConfig[K], U extends keyof AppConfig[K][T]>(
    key: K,
    subKey: T,
    subSubKey: U
  ): AppConfig[K][T][U];
  get(key: string, subKey?: string, subSubKey?: string): any {
    if (subSubKey && subKey) {
      return this.config[key as keyof AppConfig]?.[subKey as keyof any]?.[subSubKey as keyof any];
    }
    if (subKey) {
      return this.config[key as keyof AppConfig]?.[subKey as keyof any];
    }
    return this.config[key as keyof AppConfig];
  }

  /**
   * Set a configuration value
   */
  set<K extends keyof AppConfig>(key: K, value: AppConfig[K]): void;
  set<K extends keyof AppConfig, T extends keyof AppConfig[K]>(key: K, subKey: T, value: AppConfig[K][T]): void;
  set<K extends keyof AppConfig, T extends keyof AppConfig[K], U extends keyof AppConfig[K][T]>(
    key: K,
    subKey: T,
    subSubKey: U,
    value: AppConfig[K][T][U]
  ): void;
  set(key: string, subKey?: string, subSubKey?: string, value?: any): void {
    if (subSubKey && subKey) {
      if (!this.config[key as keyof AppConfig]) {
        (this.config as any)[key] = {};
      }
      if (!this.config[key as keyof AppConfig][subKey as keyof any]) {
        (this.config as any)[key][subKey] = {};
      }
      (this.config as any)[key][subKey][subSubKey] = value;
    } else if (subKey) {
      if (!this.config[key as keyof AppConfig]) {
        (this.config as any)[key] = {};
      }
      (this.config as any)[key][subKey] = value;
    } else {
      (this.config as any)[key] = value;
    }
  }

  /**
   * Override configuration values
   */
  override(overrides: ConfigOverride): void {
    this.overrides = { ...this.overrides, ...overrides };
    this.applyOverrides();
  }

  /**
   * Reset configuration to defaults
   */
  reset(): void {
    this.config = this.getDefaultConfig();
    this.overrides = {};
    this.loadEnvironmentConfig();
  }

  /**
   * Check if a feature is enabled
   */
  isFeatureEnabled(feature: keyof AppConfig['features']): boolean {
    return this.config.features[feature];
  }

  /**
   * Check if performance optimization is enabled
   */
  isPerformanceEnabled(optimization: keyof AppConfig['performance']): boolean {
    return this.config.performance[optimization];
  }

  /**
   * Check if security feature is enabled
   */
  isSecurityEnabled(security: keyof AppConfig['security']): boolean {
    return this.config.security[security];
  }

  /**
   * Get API configuration
   */
  getApiConfig(): AppConfig['api'] {
    return this.config.api;
  }

  /**
   * Get UI configuration
   */
  getUIConfig(): AppConfig['ui'] {
    return this.config.ui;
  }

  /**
   * Get monitoring configuration
   */
  getMonitoringConfig(): AppConfig['monitoring'] {
    return this.config.monitoring;
  }

  /**
   * Get default configuration
   */
  private getDefaultConfig(): AppConfig {
    return {
      environment: 'development',
      api: {
        baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
        timeout: 10000,
        retryAttempts: 3,
        enableCaching: true
      },
      features: {
        enableAnalytics: true,
        enableErrorReporting: true,
        enablePerformanceMonitoring: true,
        enableAccessibility: true,
        enableSEO: true,
        enablePWA: false
      },
      performance: {
        enableCodeSplitting: true,
        enableLazyLoading: true,
        enableImageOptimization: true,
        enableCaching: true
      },
      security: {
        enableCSP: true,
        enableHSTS: true,
        enableXSSProtection: true,
        enableContentTypeOptions: true
      },
      ui: {
        theme: 'auto',
        language: 'en',
        enableAnimations: true,
        enableReducedMotion: false
      },
      monitoring: {
        enableLogging: true,
        logLevel: 'info',
        enableMetrics: true,
        enableTracing: false
      }
    };
  }

  /**
   * Load environment-specific configuration
   */
  private loadEnvironmentConfig(): void {
    const env = process.env.NODE_ENV as Environment;
    
    if (env === 'production') {
      this.config.environment = 'production';
      this.config.api.baseURL = process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com';
      this.config.features.enableAnalytics = true;
      this.config.features.enableErrorReporting = true;
      this.config.features.enablePerformanceMonitoring = true;
      this.config.monitoring.logLevel = 'warn';
    } else if (env === 'staging') {
      this.config.environment = 'staging';
      this.config.api.baseURL = process.env.NEXT_PUBLIC_API_URL || 'https://staging-api.ziontechgroup.com';
      this.config.monitoring.logLevel = 'info';
    } else if (env === 'test') {
      this.config.environment = 'test';
      this.config.api.baseURL = 'http://localhost:3000/api';
      this.config.features.enableAnalytics = false;
      this.config.features.enableErrorReporting = false;
      this.config.monitoring.enableLogging = false;
    }
  }

  /**
   * Load configuration overrides
   */
  private loadOverrides(): void {
    // Load from environment variables
    if (process.env.NEXT_PUBLIC_CONFIG_OVERRIDES) {
      try {
        const overrides = JSON.parse(process.env.NEXT_PUBLIC_CONFIG_OVERRIDES);
        this.override(overrides);
      } catch (error) {
        console.warn('Failed to parse config overrides:', error);
      }
    }

    // Load from localStorage
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('config-overrides');
        if (stored) {
          const overrides = JSON.parse(stored);
          this.override(overrides);
        }
      } catch (error) {
        console.warn('Failed to load config overrides from localStorage:', error);
      }
    }
  }

  /**
   * Apply configuration overrides
   */
  private applyOverrides(): void {
    const applyOverride = (obj: any, path: string[], value: any): void => {
      if (path.length === 1) {
        obj[path[0]] = value;
      } else {
        if (!obj[path[0]]) {
          obj[path[0]] = {};
        }
        applyOverride(obj[path[0]], path.slice(1), value);
      }
    };

    Object.entries(this.overrides).forEach(([key, value]) => {
      const path = key.split('.');
      applyOverride(this.config, path, value);
    });
  }

  /**
   * Save overrides to localStorage
   */
  saveOverrides(): void {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('config-overrides', JSON.stringify(this.overrides));
      } catch (error) {
        console.warn('Failed to save config overrides:', error);
      }
    }
  }

  /**
   * Clear overrides
   */
  clearOverrides(): void {
    this.overrides = {};
    if (typeof window !== 'undefined') {
      localStorage.removeItem('config-overrides');
    }
    this.reset();
  }

  toJSON(): string {
    return JSON.stringify(this.config, null, 2);
  }

  fromJSON(json: string): void {
    try {
      const parsed = JSON.parse(json);
      this.config = { ...this.config, ...parsed };
    } catch (error) {
      console.error('Failed to parse config JSON:', error);
    }
  }

  public getConfig(): AppConfig {
    return { ...this.config };
  }

  public updateConfig(updates: Partial<AppConfig>): void {
    this.config = { ...this.config, ...updates };
    this.notifyListeners();
  }

  public get<K extends keyof AppConfig>(key: K): AppConfig[K] {
    return this.config[key];
  }

  public set<K extends keyof AppConfig>(key: K, value: AppConfig[K]): void {
    this.config[key] = value;
    this.notifyListeners();
  }

  public subscribe(listener: (config: AppConfig) => void): () => void {
    this.listeners.push(listener);
    return () => {
      const index = this.listeners.indexOf(listener);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener(this.config));
  }

  public resetToDefaults(): void {
    this.config = { ...defaultConfig };
    this.loadFromEnvironment();
    this.notifyListeners();
  }

  public isFeatureEnabled(feature: keyof AppConfig['features']): boolean {
    return this.config.features[feature];
  }

  public isPerformanceEnabled(feature: keyof AppConfig['performance']): boolean {
    return this.config.performance[feature];
  }

  public isSecurityEnabled(feature: keyof AppConfig['security']): boolean {
    return this.config.security[feature];
  }
}

// Export singleton instance
export const configManager = new ConfigManager()
export default configManager
export const configManager = new ConfigManager();
export default configManager;
// Create singleton instance
export const configManager = new ConfigManager();

export default ConfigManager;
// Create singleton instance
export const configManager = new ConfigManager();

export default ConfigManager;

'use client';

/**
 * Configuration Manager
 * Centralized configuration management with environment-based settings
 */

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
}

// Create singleton instance
export const configManager = new ConfigManager();

export default ConfigManager;
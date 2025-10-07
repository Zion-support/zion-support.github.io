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
    enableCORS: boolean;
    enableRateLimiting: boolean;
    maxRequestsPerMinute: number;
  };
  ui: {
    theme: 'light' | 'dark' | 'auto';
    language: string;
    timezone: string;
  };
  logging: {
    level: 'debug' | 'info' | 'warn' | 'error';
    enableConsole: boolean;
    enableNetwork: boolean;
  };
}

const defaultConfig: AppConfig = {
  environment: 'development',
  api: {
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.ziontech.com',
    timeout: 30000,
    retryAttempts: 3,
    enableCaching: true,
  },
  features: {
    enableAnalytics: false,
    enableErrorReporting: true,
    enablePerformanceMonitoring: true,
    enableAccessibility: true,
    enableSEO: true,
    enablePWA: true,
  },
  performance: {
    enableCodeSplitting: true,
    enableLazyLoading: true,
    enableImageOptimization: true,
    enableCaching: true,
  },
  security: {
    enableCSP: true,
    enableCORS: true,
    enableRateLimiting: true,
    maxRequestsPerMinute: 100,
  },
  ui: {
    theme: 'auto',
    language: 'en',
    timezone: 'UTC',
  },
  logging: {
    level: 'info',
    enableConsole: true,
    enableNetwork: false,
  },
};

const developmentConfig: Partial<AppConfig> = {
  environment: 'development',
  api: {
    baseURL: 'http://localhost:3000/api',
    timeout: 30000,
    retryAttempts: 1,
    enableCaching: false,
  },
  features: {
    enableAnalytics: false,
    enableErrorReporting: true,
    enablePerformanceMonitoring: true,
    enableAccessibility: true,
    enableSEO: false,
    enablePWA: false,
  },
  logging: {
    level: 'debug',
    enableConsole: true,
    enableNetwork: false,
  },
};

const stagingConfig: Partial<AppConfig> = {
  environment: 'staging',
  api: {
    baseURL: 'https://staging-api.ziontech.com',
    timeout: 30000,
    retryAttempts: 3,
    enableCaching: true,
  },
  features: {
    enableAnalytics: true,
    enableErrorReporting: true,
    enablePerformanceMonitoring: true,
    enableAccessibility: true,
    enableSEO: true,
    enablePWA: true,
  },
  logging: {
    level: 'info',
    enableConsole: true,
    enableNetwork: true,
  },
};

const productionConfig: Partial<AppConfig> = {
  environment: 'production',
  api: {
    baseURL: 'https://api.ziontech.com',
    timeout: 30000,
    retryAttempts: 3,
    enableCaching: true,
  },
  features: {
    enableAnalytics: true,
    enableErrorReporting: true,
    enablePerformanceMonitoring: true,
    enableAccessibility: true,
    enableSEO: true,
    enablePWA: true,
  },
  logging: {
    level: 'error',
    enableConsole: false,
    enableNetwork: true,
  },
  security: {
    enableCSP: true,
    enableCORS: true,
    enableRateLimiting: true,
    maxRequestsPerMinute: 60,
  },
};

const testConfig: Partial<AppConfig> = {
  environment: 'test',
  api: {
    baseURL: 'http://localhost:3000/api',
    timeout: 5000,
    retryAttempts: 0,
    enableCaching: false,
  },
  features: {
    enableAnalytics: false,
    enableErrorReporting: false,
    enablePerformanceMonitoring: false,
    enableAccessibility: true,
    enableSEO: false,
    enablePWA: false,
  },
  logging: {
    level: 'error',
    enableConsole: false,
    enableNetwork: false,
  },
};

export class ConfigManager {
  private static instance: ConfigManager;
  private config: AppConfig;
  private environment: Environment;
  private overrides: Partial<AppConfig> = {};

  constructor() {
    this.environment = this.detectEnvironment();
    this.config = this.loadConfig();
  }

  static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager();
    }
    return ConfigManager.instance;
  }

  /**
   * Detect current environment
   */
  private detectEnvironment(): Environment {
    if (typeof process !== 'undefined') {
      const nodeEnv = process.env.NODE_ENV;
      const nextEnv = process.env.NEXT_PUBLIC_ENVIRONMENT;
      
      if (nextEnv) {
        return nextEnv as Environment;
      }
      
      if (nodeEnv === 'test') return 'test';
      if (nodeEnv === 'production') return 'production';
      if (nodeEnv === 'development') return 'development';
    }
    
    return 'development';
  }

  /**
   * Load configuration based on environment
   */
  private loadConfig(): AppConfig {
    let config = { ...defaultConfig };

    switch (this.environment) {
      case 'development':
        config = this.mergeConfig(config, developmentConfig);
        break;
      case 'staging':
        config = this.mergeConfig(config, stagingConfig);
        break;
      case 'production':
        config = this.mergeConfig(config, productionConfig);
        break;
      case 'test':
        config = this.mergeConfig(config, testConfig);
        break;
    }

    // Apply overrides
    config = this.mergeConfig(config, this.overrides);

    return config;
  }

  /**
   * Deep merge two config objects
   */
  private mergeConfig(base: AppConfig, override: Partial<AppConfig>): AppConfig {
    const result = { ...base } as AppConfig;

    (Object.keys(override) as Array<keyof AppConfig>).forEach(<K extends keyof AppConfig>(key: K) => {
      const value = override[key];
      if (value !== undefined) {
        const baseValue = result[key];
        if (typeof value === 'object' && !Array.isArray(value) && value !== null &&
            typeof baseValue === 'object' && !Array.isArray(baseValue) && baseValue !== null) {
          result[key] = Object.assign({}, baseValue, value) as typeof baseValue;
        } else {
          result[key] = value as typeof baseValue;
        }
      }
    });

    return result;
  }

  /**
   * Get configuration value
   */
  get<K extends keyof AppConfig>(key: K): AppConfig[K];
  get<K extends keyof AppConfig, NK extends keyof AppConfig[K]>(
    key: K,
    nestedKey: NK
  ): AppConfig[K][NK];
  get<K extends keyof AppConfig, NK extends keyof AppConfig[K]>(
    key: K,
    nestedKey?: NK
  ): AppConfig[K] | AppConfig[K][NK] {
    if (nestedKey !== undefined) {
      return this.config[key][nestedKey];
    }
    return this.config[key];
  }

  /**
   * Set configuration value
   */
  set<K extends keyof AppConfig>(key: K, value: AppConfig[K]): void;
  set<K extends keyof AppConfig, NK extends keyof AppConfig[K]>(
    key: K,
    nestedKey: NK,
    value: AppConfig[K][NK]
  ): void;
  set<K extends keyof AppConfig, NK extends keyof AppConfig[K]>(
    key: K,
    nestedKeyOrValue: NK | AppConfig[K],
    value?: AppConfig[K][NK]
  ): void {
    if (value !== undefined && typeof nestedKeyOrValue === 'string') {
      const currentValue = this.config[key];
      if (typeof currentValue === 'object' && !Array.isArray(currentValue) && currentValue !== null) {
        this.config[key] = Object.assign({}, currentValue, { [nestedKeyOrValue]: value }) as AppConfig[K];
      } else {
        // If current value is not an object, create a new object by merging with default
        const defaultValue = this.getDefaultForKey(key);
        this.config[key] = Object.assign({}, defaultValue, { [nestedKeyOrValue]: value }) as AppConfig[K];
      }
    } else {
      this.config[key] = nestedKeyOrValue as AppConfig[K];
    }
  }

  /**
   * Get default value for a config key
   */
  private getDefaultForKey<K extends keyof AppConfig>(key: K): AppConfig[K] {
    const defaultValues: AppConfig = {
      environment: 'development',
      api: {
        baseURL: '',
        timeout: 30000,
        retryAttempts: 3,
        enableCaching: true,
      },
      features: {
        enableAnalytics: false,
        enableErrorReporting: true,
        enablePerformanceMonitoring: false,
        enableAccessibility: true,
        enableSEO: true,
        enablePWA: false,
      },
      performance: {
        enableCodeSplitting: true,
        enableLazyLoading: true,
        enableImageOptimization: true,
        enableCaching: true,
      },
      security: {
        enableCSP: true,
        enableCORS: false,
        enableRateLimiting: true,
        maxRequestsPerMinute: 100,
      },
      ui: {
        theme: 'light',
        language: 'en',
        timezone: 'UTC',
      },
      logging: {
        level: 'info',
        enableConsole: true,
        enableNetwork: false,
      },
    };
    return defaultValues[key];
  }

  /**
   * Get full configuration
   */
  getConfig(): AppConfig {
    return { ...this.config };
  }

  /**
   * Get environment
   */
  getEnvironment(): Environment {
    return this.environment;
  }

  /**
   * Check if feature is enabled
   */
  isFeatureEnabled(feature: keyof AppConfig['features']): boolean {
    return this.config.features[feature];
  }

  /**
   * Enable feature
   */
  enableFeature(feature: keyof AppConfig['features']): void {
    this.config.features[feature] = true;
  }

  /**
   * Disable feature
   */
  disableFeature(feature: keyof AppConfig['features']): void {
    this.config.features[feature] = false;
  }

  /**
   * Get API configuration
   */
  getAPIConfig() {
    return { ...this.config.api };
  }

  /**
   * Update API configuration
   */
  updateAPIConfig(config: Partial<AppConfig['api']>): void {
    this.config.api = { ...this.config.api, ...config };
  }

  /**
   * Check if in production
   */
  isProduction(): boolean {
    return this.environment === 'production';
  }

  /**
   * Check if in development
   */
  isDevelopment(): boolean {
    return this.environment === 'development';
  }

  /**
   * Check if in test
   */
  isTest(): boolean {
    return this.environment === 'test';
  }

  /**
   * Check if in staging
   */
  isStaging(): boolean {
    return this.environment === 'staging';
  }

  /**
   * Override configuration
   */
  override(config: Partial<AppConfig>): void {
    this.overrides = config;
    this.config = this.loadConfig();
  }

  /**
   * Reset configuration
   */
  reset(): void {
    this.overrides = {};
    this.config = this.loadConfig();
  }

  /**
   * Export configuration as JSON
   */
  export(): string {
    return JSON.stringify(this.config, null, 2);
  }

  /**
   * Validate configuration
   */
  validate(): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Validate API configuration
    if (!this.config.api.baseURL) {
      errors.push('API baseURL is required');
    }
    if (this.config.api.timeout < 1000) {
      errors.push('API timeout must be at least 1000ms');
    }
    if (this.config.api.retryAttempts < 0) {
      errors.push('API retryAttempts must be non-negative');
    }

    // Validate security configuration
    if (this.config.security.maxRequestsPerMinute < 1) {
      errors.push('Security maxRequestsPerMinute must be at least 1');
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  }
}

// Export singleton instance
export const configManager = ConfigManager.getInstance();

export default ConfigManager;

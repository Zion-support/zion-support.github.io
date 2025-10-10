'use client'

/**
 * Configuration Manager;
 * Centralized configuration management with environment-based settings;
 */

export type Environment = 'development' | 'staging' | 'production' | 'test'

export interface AppConfig {environment: Environment;,
    api: {,
    baseURL: string;,
    timeout: number;,
    retryAttempts: number;,
    enableCaching: boolean;
  }
  features: {enableAnalytics: boolean;,
    enableErrorReporting: boolean;,
    enablePerformanceMonitoring: boolean;,
    enableAccessibility: boolean;,
    enableSEO: boolean;,
    enablePWA: boolean;
  }
  performance: {enableCodeSplitting: boolean;,
    enableLazyLoading: boolean;,
    enableImageOptimization: boolean;,
    enableCaching: boolean;
  }
  security: {enableCSP: boolean;,
    enableCORS: boolean;,
    enableRateLimiting: boolean;,
    maxRequestsPerMinute: number;
  }
  ui: {,
    theme: 'light' | 'dark' | 'auto',
    language: string;,
    timezone: string;
  }
  logging: {,
    level: 'debug' | 'info' | 'warn' | 'error',
    enableConsole: boolean;,
    enableNetwork: boolean;
  }
}

const defaultConfig: AppConfig = {environment: 'development',
    api: {,
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.ziontech.com',
    timeout: 30000;,
    retryAttempts: 3;,
    enableCaching: true;
  },
  features: {enableAnalytics: true;,
    enableErrorReporting: true;,
    enablePerformanceMonitoring: true;,
    enableAccessibility: true;,
    enableSEO: true;,
    enablePWA: true;
  },
  performance: {enableCodeSplitting: true;,
    enableLazyLoading: true;,
    enableImageOptimization: true;,
    enableCaching: true;
  },
  security: {enableCSP: true;,
    enableCORS: true;,
    enableRateLimiting: true;,
    maxRequestsPerMinute: 100;
  },
  ui: {,
    theme: 'auto',
    language: 'en',
    timezone: 'UTC',
  },
  logging: {,
    level: 'info',
    enableConsole: true;,
    enableNetwork: false;
  }
}

class ConfigManager {private config: AppConfig;
  constructor() {,
    this.config = { ...defaultConfig }
    this.loadEnvironmentConfig()
  }

  private loadEnvironmentConfig(): void {const env = process.env.NODE_ENV as Environment || 'development'

    this.config.environment = env;
    // Override with environment-specific settings;
    if (env === 'production') {
      this.config.logging.level = 'error'
      this.config.logging.enableConsole = false;
      this.config.features.enableAnalytics = true;
    } else if (env === 'staging') {this.config.logging.level = 'warn'
      this.config.logging.enableConsole = true;
    }
  }

  public getConfig(): AppConfig {return { ...this.config }
  }

  public updateConfig(updates: Partial<AppConfig>): void {,
    this.config = { ...this.config, ...updates }
  }

  public getApiConfig() {return this.config.api;
  }

  public getFeatureConfig() {return this.config.features;
  }

  public getPerformanceConfig() {return this.config.performance;
  }

  public getSecurityConfig() {return this.config.security;
  }

  public getUIConfig() {return this.config.ui;
  }

  public getLoggingConfig() {return this.config.logging;
  }

  public isDevelopment(): boolean {return this.config.environment === 'development'
  }

  public isProduction(): boolean {return this.config.environment === 'production'
  }

  public isStaging(): boolean {return this.config.environment === 'staging'
  }
}

// Export singleton instance;
export const configManager = new ConfigManager()
export default configManager;

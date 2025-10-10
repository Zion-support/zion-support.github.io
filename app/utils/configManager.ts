<<<<<<< HEAD
'use client'

=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
/**
 * Configuration Manager
 * Centralized configuration management for the application
 */

<<<<<<< HEAD
export type Environment = 'development' | 'staging' | 'production' | 'test'

=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
export interface AppConfig {
  api: {
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
}

const defaultConfig: AppConfig = {
  api: {
    baseURL: process.env.VITE_API_BASE_URL || 'https://api.ziontechgroup.com',
    timeout: 10000,
    retryAttempts: 3,
<<<<<<< HEAD
    enableCaching: true
=======
    enableCaching: true,
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
  },
  features: {
    enableAnalytics: true,
    enableErrorReporting: true,
    enablePerformanceMonitoring: true,
    enableAccessibility: true,
    enableSEO: true,
<<<<<<< HEAD
    enablePWA: true
=======
    enablePWA: true,
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
  },
  performance: {
    enableCodeSplitting: true,
    enableLazyLoading: true,
    enableImageOptimization: true,
<<<<<<< HEAD
    enableCaching: true
=======
    enableCaching: true,
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
  },
  security: {
    enableCSP: true,
    enableCORS: true,
    enableRateLimiting: true,
<<<<<<< HEAD
    maxRequestsPerMinute: 100
=======
    maxRequestsPerMinute: 100,
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
  },
  ui: {
    theme: 'dark',
    language: 'en',
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
  }
}

// Export singleton instance
<<<<<<< HEAD
export const configManager = new ConfigManager()
export default configManager
=======
export const configManager = new ConfigManager();
export default configManager;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595

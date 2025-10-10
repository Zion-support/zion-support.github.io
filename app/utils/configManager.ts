'use client'

/**
 * Configuration Manager;
 * Centralized configuration management with environment-based settings;
 */

export type Environment = 'development' | 'staging' | 'production' | 'test'

export interface AppConfig {
  environment: Environment,
  api: {
    baseURL: string,
    timeout: number,
    retryAttempts: number,
    enableCaching: boolean,
  }
  features: {
    enableAnalytics: boolean,
    enableErrorReporting: boolean,
    enablePerformanceMonitoring: boolean,
    enableAccessibility: boolean,
    enableSEO: boolean,
    enablePWA: boolean,
  }
  performance: {
    enableCodeSplitting: boolean,
    enableLazyLoading: boolean,
    enableImageOptimization: boolean,
    enableCaching: boolean,
  }
  security: {
    enableCSP: boolean,
    enableCORS: boolean,
    enableRateLimiting: boolean,
    maxRequestsPerMinute: number,
  }
  ui: {,
    theme: 'light' | 'dark' | 'auto',
    language: string,
    timezone: string,
  }
  logging: {,
    level: 'debug' | 'info' | 'warn' | 'error',
    enableConsole: boolean,
    enableNetwork: boolean,
  }
}

const defaultConfig: AppConfig = {
  environment: 'development'
  api: {
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.ziontech.com'
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
  ui: {,
    theme: 'auto',
    language: 'en',
    timezone: 'UTC'},
  logging: {,
    level: 'info',
    enableConsole: true,
    enableNetwork: false,
  }
}

class ConfigManager {
  private config: AppConfig,
  constructor() {,
    this.config = { ...defaultConfig }
    this.loadEnvironmentConfig()
  }

  private loadEnvironmentConfig(): void {
    const env = process.env.NODE_ENV as Environment || 'development'

    this.config.environment = env;
    // Override with environment-specific settings;
    if (env === 'production') {
      this.config.logging.level = 'error'
      this.config.logging.enableConsole = false;
      this.config.features.enableAnalytics = true;
    } else if (env === 'staging') {
      this.config.logging.level = 'warn'
      this.config.logging.enableConsole = true;
    }
  }

  public getConfig(): AppConfig {
    return { ...this.config }
  }

  public updateConfig(updates: Partial<AppConfig>): void {,
    this.config = { ...this.config, ...updates }
  }

  public getApiConfig() {
    return this.config.api;
  }

  public getFeatureConfig() {
    return this.config.features;
  }

  public getPerformanceConfig() {
    return this.config.performance;
  }

  public getSecurityConfig() {
    return this.config.security;
  }

  public getUIConfig() {
    return this.config.ui;
  }

  public getLoggingConfig() {
    return this.config.logging;
  }

  public isDevelopment(): boolean {
    return this.config.environment === 'development'
  }

  public isProduction(): boolean {
    return this.config.environment === 'production'
  }

  public isStaging(): boolean {
    return this.config.environment === 'staging'
  }
}

// Export singleton instance;
export const configManager = new ConfigManager()
export default configManager;
export type Environment = 'development' | 'staging' | 'production' | 'test';
  };
  };
  performanc,
  };
  securit,
  };
  u,
  };
  loggin,
  };
}
const,
  },
  },
  performanc,
  },
  securit,
  },
  u,
  },
  loggin,
  }
};
const,
  },
  },
  loggin,
  }
};
const,
  },
  },
  loggin,
  }
};
const,
  },
  },
  loggin,
  },
  securit,
  }
};
const,
  },
  },
  loggin,
  }
};
  overrides: Partial<AppConfig> = {};
  }
    }
    return ConfigManager.instance;
  }
  /**
   * Detect current environment;
   */
      }
      if (nodeEnv === 'test') return 'test';
      if (nodeEnv === 'production') return 'production';
      if (nodeEnv === 'development') return 'development';
    }
    return 'development';
  }
  /**
   * Load configuration based on environment;
   */
    let config = { ...defaultConfig };
    }
    // Apply overrides;
    config = this.mergeConfig(config, this.overrides);
    return config;
  }
  /**
   * Deep merge two config objects;
   */
  private mergeConfig(bas,
  e: AppConfig, overrid)
    const result = { ...base } as AppConfig;
    (Object.keys(override) as Array<keyof AppConfig>).forEach(<K extends keyof AppConfig>(ke)
            result[key] = Object.assign({}, baseValue, value) as typeof baseValue;
          }
        }
      }
    );
    return result;
  }
  /**
   * Get configuration value;
   */
  get<K extends keyof AppConfig>(ke)
  y: K): AppConfig[K];
  get<K extends keyof AppConfig, NK extends keyof AppConfig[K]>(ke,
  y: K,
    nestedKe,
  y: NK;)
  ): AppConfig[K][NK];
  get<K extends keyof AppConfig, NK extends keyof AppConfig[K]>(ke,
  y: K,
    nestedKey?: NK;)
    }
    return this.config[key];
  }
  /**
   * Set configuration value;
   */
  set<K extends keyof AppConfig>(ke,
  y: K, valu)
  e: AppConfig[K]): void;
  set<K extends keyof AppConfig, NK extends keyof AppConfig[K]>(ke,
  y: K,
    nestedKe,
  y: NK,
    valu,
  e: AppConfig[K][NK])
  ): void;
  set<K extends keyof AppConfig, NK extends keyof AppConfig[K]>(ke,
  y: K,
    nestedKeyOrValu,
  e: NK | AppConfig[K],
    value?: AppConfig[K][NK])
        }) as AppConfig[K];
        }) as AppConfig[K];
      }
    }
  }
  /**
   * Get default value for a config key;
   */
  private getDefaultForKey<K extends keyof AppConfig>(ke)
      },
      },
      performanc,
      },
      securit,
      },
      u,
      },
      loggin,
      }
    };
    return defaultValues[key];
  }
  /**
   * Get full configuration;
   */
    return { ...this.config };
  }
  /**
   * Get environment;
   */
  }
  /**
   * Check if feature is enabled;
   */
  isFeatureEnabled(featur)
  }
  /**
   * Enable feature;
   */
  enableFeature(featur)
  }
  /**
   * Disable feature;
   */
  disableFeature(featur)
  }
  /**
   * Get API configuration;
   */
    return { ...this.config.api };
  }
  /**
   * Update API configuration;
   */
  updateAPIConfig(confi)
    this.config.api = { ...this.config.api, ...config };
  }
  /**
   * Check if in production;
   */
  }
  /**
   * Check if in development;
   */
  }
  /**
   * Check if in test;
   */
  }
  /**
   * Check if in staging;
   */
  }
  /**
   * Override configuration;
   */
  override(confi)
  }
  /**
   * Reset configuration;
   */
    this.overrides = {};
    this.config = this.loadConfig();
  }
  /**
   * Export configuration as JSON;
   */
  }
  /**
   * Validate configuration;
   */
    }
    }
    }
    // Validate security configuration;
    }
    };
  }
}
// Export singleton instance;
export const configManager = ConfigManager.getInstance();
export default ConfigManager;

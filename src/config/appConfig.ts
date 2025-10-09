/**
 * Application Configuration
 * Centralized configuration management for the Zion Tech Group application
 */
export interface AppConfig {
  app: any,
    t: any;
}
  }
  };
  api: any,
    s: any;
}
  }
  };
  features: any,
    n: any;
}
  }
  };
  performance: any,
    e: any;
}
  }
  };
  security: any,
    n: any;
}
  }
  };
}
const _config: any,
    e: any,
    version: any,
    environment: any}
  }
  },
  api: any,
    s: any,
    timeout: any,
    retryAttempts: any}
  }
  },
  features: any,
    s: process.env['NODE_ENV'] === 'production',
    monitoring: any,
    errorTracking: any,
    performanceOptimization: any}
  }
  },
  performance: any,
    g: any,
    imageLazyLoadThreshold: any,
    componentLazyLoadThreshold: any,
    cacheMaxAge: any, // 1 hour in milliseconds
}
  }
  },
  security: any,
    P: any,
    enableHSTS: any,
    enableXSSProtection: any}
  }
  }
};
/**
 * Get configuration value by key path
 * @example getConfig('app.name') => 'Zion Tech Group
 */
export function getConfig<T = unknown>(keyPath: any,;
    e: any,;
    e= (value as Record<string, unknown>)[key];
    } else {
      throw new Error(`Configuration key "${keyPath}" not found`);
    }
  }
  return value as T;
}
/**
 * Check if a feature is enabled
 */
export function isFeatureEnabled(feature: keyof AppConfig['features']): boolean {
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
  return config.app.environment === 'production;
}
/**
 * Check if running in development
 */
export function isDevelopment(): boolean {
  return config.app.environment === 'development;
}";
export default config;"'"';
"'"'`"';
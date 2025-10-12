/**
 * Application Configuration
 * Centralized configuration management for the Zion Tech Group application
 */
    name: string;
    version: string;
    environment: 'development' | 'production' | 'test';
  };
    base Url: string;
    timeout: number;
    retry Attempts: number;
  };
    analytics: boolean;
    monitoring: boolean;
    error Tracking: boolean;
    performance Optimization: boolean;
  };
    enable Lazy Loading: boolean;
    image Lazy Load Threshold: number;
    component Lazy Load Threshold: number;
    cache Max Age: number;
  };
    enable CS P: boolean;
    enable HS TS: boolean;
    enable XS SProtection: boolean;
  };
}
    environment:
      (process.env['N OD E_ EN V'] as 'development' | 'production' | 'test') || 'development'
    retry Attempts: 3
    performance Optimization: true
    cache Max Age: 3600000, // 1 hour in milliseconds
    enable XS SProtection: true
  }
};
/**
 * Get configuration value by key path
 * @example get Config('app.name') => 'Zion Tech Group'
 */
  const keys = key Path.split('.');
  let value: unknown = config;
      value = (value as Record<s tring, unknown>)[key];
      throw new Error(`Configuration key "${key Path}" not found`);
    }
  }
  return value as T;
}
/**
 * Check if a feature is enabled
 */
  return config.features[feature];
}
/**
 * Get current environment
 */
  return config.app.environment;
}
/**
 * Check if running in production
 */
  return config.app.environment === 'production';
}
/**
 * Check if running in development
 */
  return config.app.environment === 'development';
}
export default config;

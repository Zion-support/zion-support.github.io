export default config;
/**
* Application Configuration;
* Centralized configuration management for the Zion Tech Group application;
*/
name: string;
version: string;
environment: 'development' | 'production' | 'test';
};
baseUrl: string;
timeout: number;
retryAttempts: number;
};
analytics: boolean;
monitoring: boolean;
errorTracking: boolean;
performanceOptimization: boolean;
};
enableLazyLoading: boolean;
imageLazyLoadThreshold: number;
componentLazyLoadThreshold: number;
cacheMaxAge: number;
};
enableCSP: boolean;
enableHSTS: boolean;
enableXSSProtection: boolean;
};
environment:
(process.env['NODE_ENV'] as 'development' | 'production' | 'test') || 'development'
retryAttempts: 3;
performanceOptimization: true;
cacheMaxAge: 3600000, // 1 hour in milliseconds;
enableXSSProtection: true;
};
/**
* Get configuration value by key path;
'Zion Tech Group'
*/
const keys = keyPath.split('.');
let value: unknown = config;
value = (value as Record<string, unknown>)[key];
throw new Error(`Configuration key "${keyPath}" not found`);
return value as T;
/**
* Check if a feature is enabled;
*/
return config.features[feature];
/**
* Get current environment;
*/
return config.app.environment;
/**
* Check if running in production;
*/
return config.app.environment === 'production';
/**
* Check if running in development;
*/
return config.app.environment === 'development';

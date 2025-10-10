/**
 * Application Configuration
 * Centralized configuration management for the Zion Tech Group application
 */export interface AppConfig {
  app: {
    name: string,
    version: string,
    environment: 'development' | 'production' | 'test'}
  }
  api: {
    baseUrl: string,
    timeout: number,
    retryAttempts: number,}
  }
  features: {
    analytics: boolean,
    monitoring: boolean,
    errorTracking: boolean,
    performanceOptimization: boolean,}
  }
  performance: {
    enableLazyLoading: boolean,
    imageLazyLoadThreshold: number,
    componentLazyLoadThreshold: number,
    cacheMaxAge: number,}
  }
  security: {
    enableCSP: boolean,
    enableHSTS: boolean,
    enableXSSProtection: boolean,}
  }}
const config: AppConfig;

export default config

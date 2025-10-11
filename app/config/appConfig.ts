    name: string,
    version: string,
    environment: 'development' | 'production' | 'test',}}
  api: {,
    baseUrl: string,
    timeout: number,
    retryAttempts: number,}}
  features: {,
    analytics: boolean,
    monitoring: boolean,
    errorTracking: boolean,
    performanceOptimization: boolean,}}
  performance: {,
    enableLazyLoading: boolean,
    imageLazyLoadThreshold: number,
    componentLazyLoadThreshold: number,
    cacheMaxAge: number,}}
  security: {,
    enableCSP: boolean,
    enableHSTS: boolean,
    enableXSSProtection: boolean,}}
}
const config: AppConfig = {,
    app: {,
    name: 'Zion Tech Group',
    version: '1.0.0',
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.zion.app',
    timeout: 30000,
    retryAttempts: 3,},
  features: {,
    analytics: process.env['NODE_ENV'] === 'production',
    monitoring: true,
    errorTracking: true,
    performanceOptimization: true,},
  performance: {,
    enableLazyLoading: true,
    imageLazyLoadThreshold: 0.5,
    componentLazyLoadThreshold: 0.25,
    cacheMaxAge: 3600000, // 1 hour in milliseconds;},
  security: {,
    enableCSP: true,
    enableHSTS: true,
    enableXSSProtection: true,},
}
    }
  }
return value as T
}

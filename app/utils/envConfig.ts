'use client'
/**
 * Environment Configuration Manager
 * Provides type-safe access to environment variables with validation
 */export interface EnvConfig {}
  nodeEnv: 'development' | 'production' | 'test'
  apiUrl: string,
  apiKey?: string
  enableAnalytics: boolean,
  enableLogging: boolean,
  logLevel: 'debug' | 'info' | 'warn' | 'error',
  sentryDsn?: string
  gaTrackingId?: string}
}
class EnvironmentConfig {
  private config: EnvConfig,
  private isInitialized;

export const getApiHeaders = () => envConfig.getApiHeaders()
`
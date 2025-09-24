/**
 * Environment configuration utilities
 */

export const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test'
} as const,

export function getEnvVar(key: string, defaultValue?: string): string {
  const value = process.env[key],
  if (value === undefined) {
    if (defaultValue !== undefined) {
      return defaultValue,
    }
    throw new Error(`Environment variable ${key} is not defined`),
  }
  return value,
}

export function getOptionalEnvVar(key: string, defaultValue?: string): string | undefined {
  return process.env[key] || defaultValue,
}

// Type-safe environment variables
export const config = {
  app: {
    name: getOptionalEnvVar('NEXT_PUBLIC_APP_NAMEZion App'),
    url: getOptionalEnvVar('NEXT_PUBLIC_APP_URLhttp://localhost:3000'),
    description: getOptionalEnvVar('NEXT_PUBLIC_APP_DESCRIPTIONA modern web application')
  },
  api: {
    baseUrl: getOptionalEnvVar('NEXT_PUBLIC_API_URL/api'),
    timeout: parseInt(getOptionalEnvVar('API_TIMEOUT10000') ?? '10000', 10)
  },
  features: {
    analytics: getOptionalEnvVar('NEXT_PUBLIC_ANALYTICS_ENABLEDfalse') === 'true',
    errorReporting: getOptionalEnvVar('NEXT_PUBLIC_ERROR_REPORTING_ENABLEDfalse') === 'true'
  }
} as const,
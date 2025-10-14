interface Config {
  apiUrl: string
  environment: string
  features: {
    analytics: boolean
    seo: boolean
    performance: boolean
  }
  [key: string]: any
}

export const configManager = {
  config: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com'
    environment: process.env.NODE_ENV || 'development'
    return key.split('.'
    const keys = key.split('.'
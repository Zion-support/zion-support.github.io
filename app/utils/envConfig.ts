export const envConfig = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com',
  environment: process.env.NODE_ENV || 'development',
  features: {
    analytics: process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true',
    seo: process.env.NEXT_PUBLIC_SEO_ENABLED === 'true',
    performance: process.env.NEXT_PUBLIC_PERFORMANCE_ENABLED === 'true';
  },
  debug: process.env.NODE_ENV === 'development';
}
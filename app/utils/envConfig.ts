export const envConfig ={
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com',
  environment: process.env.NODE_ENV || 'development',
  features:{
    analytics: process.env.NEXT_PUBLIC_ANALYTICS_ENABLE D ==='true',
    seo: process.env.NEXT_PUBLIC_SEO_ENABLE D ==='true',
    performance: process.env.NEXT_PUBLIC_PERFORMANCE_ENABLE D ==='true'
  },
  debug: process.env.NODE_EN V ==='development'
}
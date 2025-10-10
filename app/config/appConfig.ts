export const appConfig = {
  name: 'Zion Tech Group',
  description: 'AI & IT Solutions',
  version: '1.0.0',
  url: 'https://ziontechgroup.com',
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com',
  features: {
    analytics: true,
    performance: true,
    seo: true,
    accessibility: true
  }
};
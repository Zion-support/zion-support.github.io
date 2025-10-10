// Application configuration
export const appConfig = {
  // App metadata
  name: 'Zion Tech Group',
  description: 'Advanced AI and IT Solutions',
  version: '1.0.0',
  
  // API configuration
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com',
    timeout: 30000,
    retries: 3,
  },
  
  // Feature flags
  features: {
    analytics: true,
    performanceMonitoring: true,
    errorTracking: true,
    accessibility: true,
  },
  
  // Performance settings
  performance: {
    enableLazyLoading: true,
    enableImageOptimization: true,
    enableCodeSplitting: true,
    enableCaching: true,
  },
  
  // Security settings
  security: {
    enableCSP: true,
    enableHSTS: true,
    enableXSSProtection: true,
    enableClickjackingProtection: true,
  },
  
  // SEO settings
  seo: {
    defaultTitle: 'Zion Tech Group - Advanced AI and IT Solutions',
    defaultDescription: 'Leading provider of AI-powered business solutions and IT services',
    defaultKeywords: 'AI, artificial intelligence, IT solutions, business automation',
    enableStructuredData: true,
    enableSitemap: true,
  },
  
  // Analytics configuration
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
    enablePerformanceMonitoring: true,
    enableErrorTracking: true,
  },
  
  // Theme configuration
  theme: {
    primaryColor: '#0ea5e9',
    secondaryColor: '#14b8a6',
    accentColor: '#8b5cf6',
  },
  
  // Development settings
  development: {
    enableHotReload: process.env.NODE_ENV === 'development',
    enableSourceMaps: process.env.NODE_ENV === 'development',
    enableDebugMode: process.env.NODE_ENV === 'development',
  },
};

export default appConfig;
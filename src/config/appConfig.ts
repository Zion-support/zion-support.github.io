// App configuration constants and settings
export const APP_CONFIG = {
  name: "Zion Tech Group",
  version: "1.0.0",
  description: "Advanced AI and IT Solutions",
  apiBaseUrl: process.env.VITE_API_BASE_URL || "https://api.ziontechgroup.com",
  environment: process.env.NODE_ENV || "development",
  features: {
    analytics: true,
    performanceMonitoring: true,
    errorTracking: true,
    seoOptimization: true,
  },
  seo: {
    defaultTitle: "Zion Tech Group - Advanced AI and IT Solutions",
    defaultDescription:
      "Leading provider of AI-powered IT solutions, 5G technology, and digital transformation services.",
    keywords: [
      "AI",
      "IT Solutions",
      "5G",
      "Digital Transformation",
      "Technology",
    ],
  },
  performance: {
    enableLazyLoading: true,
    enableImageOptimization: true,
    enableCodeSplitting: true,
    maxBundleSize: 500000, // 500KB
  },
} as const;

export type AppConfig = typeof APP_CONFIG;

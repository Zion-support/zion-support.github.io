// App configuration
export const appConfig = {
  name: 'Zion Tech Group',
  version: '1.0.0',
  description: 'Advanced AI and IT Solutions',
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  environment: process.env.NODE_ENV || 'development',
  features: {
    analytics: true,
    notifications: true,
    darkMode: true
  }
};

export default appConfig;
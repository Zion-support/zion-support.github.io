export const appConfig = { name: 'Zion Tech Group',
  version: '1.0.0',
  description: 'Advanced AI and IT Solutions',
  url: 'https://ziontechgroup.com',
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com',
  environment: process.env.NODE_ENV || 'development',
  social: {
    twitter: 'https://twitter.com/ziontechgroup',
    linkedin: 'https://linkedin.com/company/ziontechgroup',
    github: 'https://github.com/ziontechgroup'
  }
};

export default NotFoundPage;
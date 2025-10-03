
// Advanced SEO Configuration
export const seoConfig = {
  // Meta tags
  meta: {
    title: 'Zion Tech Group - AI-Powered IT Solutions',
    description: 'Leading provider of AI-powered IT solutions, cloud services, and digital transformation.',
    keywords: ['AI', 'IT Solutions', 'Cloud Services', 'Digital Transformation', 'Enterprise'],
    author: 'Zion Tech Group',
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1.0'
  },
  
  // Open Graph
  openGraph: {
    type: 'website',
    siteName: 'Zion Tech Group',
    locale: 'en_US',
    image: '/images/og-image.jpg',
    imageAlt: 'Zion Tech Group - AI-Powered Solutions'
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@ziontechgroup',
    creator: '@ziontechgroup'
  },
  
  // Structured data
  structuredData: {
    organization: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/images/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'Customer Service'
      }
    }
  },
  
  // Sitemap configuration
  sitemap: {
    includeDynamicRoutes: true,
    excludePaths: ['/admin', '/private'],
    changeFreq: 'weekly',
    priority: 0.8
  }
};

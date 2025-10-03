
// Ultimate SEO Configuration
export const ultimateSEOConfig = {
  // Meta tags (Ultimate)
  meta: {
    title: {
      default: 'Zion Tech Group - AI-Powered IT Solutions & Digital Transformation',
      template: '%s | Zion Tech Group',
      maxLength: 60
    },
    description: {
      default: 'Leading provider of AI-powered IT solutions, cloud services, digital transformation, and enterprise automation. Transform your business with cutting-edge technology.',
      maxLength: 160
    },
    keywords: [
      'AI solutions',
      'IT services',
      'cloud computing',
      'digital transformation',
      'enterprise automation',
      'machine learning',
      'data analytics',
      'cybersecurity',
      'DevOps',
      'software development'
    ],
    author: 'Zion Tech Group',
    robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    viewport: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
    themeColor: '#1f2937',
    colorScheme: 'light dark'
  },

  // Open Graph (Ultimate)
  openGraph: {
    type: 'website',
    siteName: 'Zion Tech Group',
    locale: 'en_US',
    image: {
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Zion Tech Group - AI-Powered IT Solutions'
    },
    title: 'Zion Tech Group - AI-Powered IT Solutions & Digital Transformation',
    description: 'Leading provider of AI-powered IT solutions, cloud services, and digital transformation. Transform your business with cutting-edge technology.'
  },

  // Twitter Card (Ultimate)
  twitter: {
    card: 'summary_large_image',
    site: '@ziontechgroup',
    creator: '@ziontechgroup',
    title: 'Zion Tech Group - AI-Powered IT Solutions',
    description: 'Leading provider of AI-powered IT solutions and digital transformation services.',
    image: '/images/twitter-card.jpg'
  },

  // Structured data (Ultimate)
  structuredData: {
    organization: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ziontechgroup.com/images/logo.png',
        width: 200,
        height: 60
      },
      description: 'Leading provider of AI-powered IT solutions and digital transformation services.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Technology Drive',
        addressLocality: 'Wilmington',
        addressRegion: 'DE',
        postalCode: '19801',
        addressCountry: 'US'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'Customer Service',
        availableLanguage: 'English'
      },
      sameAs: [
        'https://linkedin.com/company/ziontechgroup',
        'https://twitter.com/ziontechgroup',
        'https://github.com/ziontechgroup'
      ]
    },
    website: {
      '@type': 'WebSite',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://ziontechgroup.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: []
    }
  },

  // Sitemap configuration
  sitemap: {
    includeDynamicRoutes: true,
    excludePaths: ['/admin', '/private', '/api'],
    changeFreq: 'daily',
    priority: 0.8,
    lastmod: new Date().toISOString()
  },

  // Canonical URLs
  canonical: {
    trailingSlash: false,
    www: false,
    https: true
  }
};

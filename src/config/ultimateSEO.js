module.exports = {
  metaTags: {
    viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
    robots:
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    canonical: true,
    alternate: true,
    ogTags: {
      type: 'website',
      locale: 'en_US',
      site_name: 'Zion Tech Group',
      image: '/images/og-image.jpg',
      imageWidth: 1200,
      imageHeight: 630,
    },
    twitterCards: {
      card: 'summary_large_image',
      creator: '@ZionTechGroup',
      site: '@ZionTechGroup',
    },
    additional: {
      'theme-color': '#000000',
      'msapplication-TileColor': '#000000',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
    },
  },
  structuredData: {
    organization: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://zion.app',
      logo: 'https://zion.app/images/logo.png',
      description: 'Leading AI and technology solutions provider',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-800-ZION-TECH',
        contactType: 'customer service',
      },
      sameAs: [
        'https://twitter.com/ZionTechGroup',
        'https://linkedin.com/company/zion-tech-group',
        'https://github.com/Zion-Holdings',
      ],
    },
    website: {
      '@type': 'WebSite',
      name: 'Zion Tech Group',
      url: 'https://zion.app',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://zion.app/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    breadcrumbs: true,
    services: true,
    faq: true,
    reviews: true,
    events: true,
  },
  sitemapOptimization: {
    dynamic: true,
    priority: {
      home: 1,
      services: 0.9,
      about: 0.8,
      contact: 0.7,
      blog: 0.6,
    },
    changefreq: {
      home: 'daily',
      services: 'weekly',
      about: 'monthly',
      contact: 'monthly',
      blog: 'daily',
    },
    lastmod: true,
    images: true,
    videos: true,
  },
  coreWebVitals: {
    lcp: {
      target: 2.5,
      optimization: 'image-optimization, critical-css, resource-hints',
    },
    fid: {
      target: 100,
      optimization: 'code-splitting, lazy-loading, third-party-optimization',
    },
    cls: {
      target: 0.1,
      optimization: 'image-dimensions, font-loading, dynamic-content',
    },
  },
  timestamp: '2025-10-05T11:17:50.918Z',
};

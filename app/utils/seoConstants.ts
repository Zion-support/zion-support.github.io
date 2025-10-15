/**
 * SEO constants and configuration
 */

export const SEO_CONSTANTS = {
  SITE_NAME: 'Zion Tech Group',
  SITE_URL: 'https://ziontechgroup.com',
  DEFAULT_TITLE: 'Zion Tech Group - Advanced AI & IT Solutions',
  DEFAULT_DESCRIPTION: 'Leading provider of AI solutions, cybersecurity, cloud infrastructure, and digital transformation services. Transform your business with cutting-edge technology.',
  DEFAULT_KEYWORDS: 'AI solutions, cybersecurity, cloud infrastructure, digital transformation, IT services, machine learning, artificial intelligence, software development, technology consulting',
  DEFAULT_OG_IMAGE: '/images/og-image.jpg',
  DEFAULT_OG_TYPE: 'website',
  DEFAULT_TWITTER_CARD: 'summary_large_image',
  DEFAULT_TWITTER_HANDLE: '@ZionTechGroup',
  CONTACT_EMAIL: 'kleber@ziontechgroup.com',
  CONTACT_PHONE: '+1 302 464 0950',
  ADDRESS: '364 E Main St STE 1008, Middletown DE 19709',
} as const;

export const STRUCTURED_DATA = {
  ORGANIZATION: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SEO_CONSTANTS.SITE_NAME,
    url: SEO_CONSTANTS.SITE_URL,
    logo: `${SEO_CONSTANTS.SITE_URL}/images/logo.png`,
    description: SEO_CONSTANTS.DEFAULT_DESCRIPTION,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SEO_CONSTANTS.CONTACT_PHONE,
      contactType: 'customer service',
      email: SEO_CONSTANTS.CONTACT_EMAIL,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '364 E Main St STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US',
    },
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ZionTechGroup',
      'https://github.com/zion-tech-group',
    ],
  },
  WEBSITE: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SEO_CONSTANTS.SITE_NAME,
    url: SEO_CONSTANTS.SITE_URL,
    description: SEO_CONSTANTS.DEFAULT_DESCRIPTION,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SEO_CONSTANTS.SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  },
  BREADCRUMB: (items: Array<{ name: string; url: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SEO_CONSTANTS.SITE_URL}${item.url}`,
    })),
  }),
} as const;

export const META_TAGS = {
  VIEWPORT: 'width=device-width, initial-scale=1',
  CHARSET: 'utf-8',
  ROBOTS: 'index,follow',
  AUTHOR: SEO_CONSTANTS.SITE_NAME,
  GENERATOR: 'React + Vite',
  THEME_COLOR: '#00f5ff',
  MSAPPLICATION_TILECOLOR: '#0a0a0a',
  APPLE_MOBILE_WEB_APP_CAPABLE: 'yes',
  APPLE_MOBILE_WEB_APP_STATUS_BAR_STYLE: 'black-translucent',
  APPLE_MOBILE_WEB_APP_TITLE: SEO_CONSTANTS.SITE_NAME,
} as const;

export const OPEN_GRAPH_TAGS = {
  SITE_NAME: SEO_CONSTANTS.SITE_NAME,
  TYPE: SEO_CONSTANTS.DEFAULT_OG_TYPE,
  IMAGE_WIDTH: '1200',
  IMAGE_HEIGHT: '630',
  IMAGE_ALT: `${SEO_CONSTANTS.SITE_NAME} - ${SEO_CONSTANTS.DEFAULT_DESCRIPTION}`,
} as const;

export const TWITTER_TAGS = {
  CARD: SEO_CONSTANTS.DEFAULT_TWITTER_CARD,
  SITE: SEO_CONSTANTS.DEFAULT_TWITTER_HANDLE,
  CREATOR: SEO_CONSTANTS.DEFAULT_TWITTER_HANDLE,
  IMAGE_ALT: `${SEO_CONSTANTS.SITE_NAME} - ${SEO_CONSTANTS.DEFAULT_DESCRIPTION}`,
} as const;

export const PERFORMANCE_GOALS = {
  LCP: 2500, // Largest Contentful Paint (ms)
  FID: 100,  // First Input Delay (ms)
  CLS: 0.1,  // Cumulative Layout Shift
  FCP: 1800, // First Contentful Paint (ms)
  TTFB: 800, // Time to First Byte (ms)
} as const;

export const ACCESSIBILITY_GOALS = {
  WCAG_LEVEL: 'AA',
  COLOR_CONTRAST_RATIO: 4.5,
  FONT_SIZE_MIN: 16,
  FOCUS_INDICATOR_VISIBLE: true,
  KEYBOARD_NAVIGATION: true,
  SCREEN_READER_SUPPORT: true,
} as const;

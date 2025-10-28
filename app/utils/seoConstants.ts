/**
 * SEO Constants and Configuration
 * Centralized SEO-related constants, structured data, and meta tags
 */

// Site Information
export const SITE_NAME = 'Zion Tech Group';
export const SITE_DESCRIPTION = 'Leading provider of AI-powered solutions, cybersecurity, and digital transformation services.';
export const SITE_URL = 'https://ziontechgroup.com';
export const DEFAULT_TITLE = 'Zion Tech Group - Advanced AI & IT Solutions';
export const DEFAULT_DESCRIPTION = 'Leading provider of AI-powered solutions, cybersecurity, and digital transformation services.';
export const DEFAULT_KEYWORDS = 'AI solutions, IT services, cybersecurity, cloud computing, digital transformation';

// Default Meta Tags

// Contact Information
export const contactInfo = {
  phone: '+1-302-464-0950',
  email: 'kleber@ziontechgroup.com',
  address: {
    street: '364 E Main St STE 1008',
    city: 'Middletown',
    state: 'DE',
    zipCode: '19709',
    country: 'US',
  },
};

// Social Media Links
export const socialLinks = {
  twitter: 'https://twitter.com/ziontechgroup',
  linkedin: 'https://linkedin.com/company/ziontechgroup',
  github: 'https://github.com/ziontechgroup',
  facebook: 'https://facebook.com/ziontechgroup',
  instagram: 'https://instagram.com/ziontechgroup',
};

// Performance Goals
export const performanceGoals = {
  LCP: 2500, // Largest Contentful Paint (ms)
  FCP: 1800, // First Contentful Paint (ms)
  CLS: 0.1,  // Cumulative Layout Shift
  FID: 100,  // First Input Delay (ms)
  TTFB: 600, // Time to First Byte (ms)
  INP: 200,  // Interaction to Next Paint (ms)
};

// Accessibility Goals
export const accessibilityGoals = {
  WCAG_LEVEL: 'AA',
  COLOR_CONTRAST_RATIO: 4.5,
  FONT_SIZE_MIN: 16,
  FOCUS_INDICATOR: true,
  KEYBOARD_NAVIGATION: true,
  SCREEN_READER_SUPPORT: true,
};

// Structured Data Schemas
export const structuredDataSchemas = {
  ORGANIZATION: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: contactInfo.phone,
      contactType: 'customer service',
      email: contactInfo.email,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: contactInfo.address.street,
      addressLocality: contactInfo.address.city,
      addressRegion: contactInfo.address.state,
      postalCode: contactInfo.address.zipCode,
      addressCountry: contactInfo.address.country,
    },
    sameAs: Object.values(socialLinks),
  },
  WEBSITE: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    }
},
  BREADCRUMB_LIST: (breadcrumbs: Array<{ name: string; url: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }),
};

// Meta Tags Configuration
export const metaTags = {
  ROBOTS: 'index, follow',
  AUTHOR: SITE_NAME,
  THEME_COLOR: '#1e293b',
  MSAPPLICATION_TILECOLOR: '#1e293b',
  VIEWPORT: 'width=device-width, initial-scale=1',
  CHARSET: 'utf-8',
};

// Open Graph Tags
export const openGraphTags = {
  SITE_NAME: SITE_NAME,
  TYPE: 'website',
  LOCALE: 'en_US',
  IMAGE_WIDTH: '1200',
  IMAGE_HEIGHT: '630',
  IMAGE_TYPE: 'image/png',
};

// Twitter Card Tags
export const twitterCardTags = {
  CARD: 'summary_large_image',
  SITE: '@ziontechgroup',
  CREATOR: '@ziontechgroup',
  IMAGE_ALT: `${SITE_NAME} - ${SITE_DESCRIPTION}`,
};

// SEO Constants
export const seoConstants = {
  SITE_NAME,
  SITE_URL,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  contactInfo,
  socialLinks,
  performanceGoals,
  accessibilityGoals,
  metaTags,
  openGraphTags,
  twitterCardTags,
  structuredDataSchemas,
};

export default seoConstants;
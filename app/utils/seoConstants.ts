/**
 * SEO Constants and Configuration
 * Centralized SEO-related constants, structured data, and meta tags
 */

// Site Information
export const SITENAME = 'Zion Tech Group';
export const SITEURL = 'https://ziontechgroup.com';
export const SITEDESCRIPTION = 'Leading provider of AI solutions, cybersecurity, cloud infrastructure, and digital transformation services';
export const SITEKEYWORDS = 'AI solutions, cybersecurity, cloud infrastructure, digital transformation, technology consulting, software development';

// Default Meta Tags
export const DEFAULTTITLE = 'Zion Tech Group - AI Solutions & Digital Transformation';
export const DEFAULTDESCRIPTION = 'Leading provider of AI solutions, cybersecurity, cloud infrastructure, and digital transformation services. Transform your business with cutting-edge technology.';
export const DEFAULTKEYWORDS = 'AI solutions, cybersecurity, cloud infrastructure, digital transformation, technology consulting, software development, machine learning, artificial intelligence';

// Contact Information
export const CONTACTINFO = {
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
export const SOCIALLINKS = {
  twitter: 'https://twitter.com/ziontechgroup',
  linkedin: 'https://linkedin.com/company/ziontechgroup',
  github: 'https://github.com/ziontechgroup',
  facebook: 'https://facebook.com/ziontechgroup',
  instagram: 'https://instagram.com/ziontechgroup',
};

// Performance Goals
export const PERFORMANCEGOALS = {
  LCP: 2500, // Largest Contentful Paint (ms)
  FCP: 1800, // First Contentful Paint (ms)
  CLS: 0.1,  // Cumulative Layout Shift
  FID: 100,  // First Input Delay (ms)
  TTFB: 600, // Time to First Byte (ms)
  INP: 200,  // Interaction to Next Paint (ms)
};

// Accessibility Goals
export const ACCESSIBILITYGOALS = {
  WCAGLEVEL: 'AA',
  COLORCONTRAST_RATIO: 4.5,
  FONTSIZE_MIN: 16,
  FOCUSINDICATOR: true,
  KEYBOARDNAVIGATION: true,
  SCREENREADER_SUPPORT: true,
};

// Structured Data Schemas
export const STRUCTUREDDATA = {
  ORGANIZATION: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITENAME,
    description: SITEDESCRIPTION,
    url: SITEURL,
    logo: `${SITEURL}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CONTACTINFO.phone,
      contactType: 'customer service',
      email: CONTACTINFO.email,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACTINFO.address.street,
      addressLocality: CONTACTINFO.address.city,
      addressRegion: CONTACTINFO.address.state,
      postalCode: CONTACTINFO.address.zipCode,
      addressCountry: CONTACTINFO.address.country,
    },
    sameAs: Object.values(SOCIALLINKS),
  },
  WEBSITE: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITENAME,
    url: SITEURL,
    description: SITEDESCRIPTION,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITEURL}/search?q={searchterm_string}`,
      'query-input': 'required name=searchterm_string',
    }
},
  BREADCRUMBLIST: (breadcrumbs: Array<{ name: string; url: string }>) => ({
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
export const METATAGS = {
  ROBOTS: 'index, follow',
  AUTHOR: SITENAME,
  THEMECOLOR: '#1e293b',
  MSAPPLICATIONTILECOLOR: '#1e293b',
  VIEWPORT: 'width=device-width, initial-scale=1',
  CHARSET: 'utf-8',
};

// Open Graph Tags
export const OPENGRAPH_TAGS = {
  SITENAME: SITENAME,
  TYPE: 'website',
  LOCALE: 'en_US',
  IMAGEWIDTH: '1200',
  IMAGEHEIGHT: '630',
  IMAGETYPE: 'image/png',
};

// Twitter Card Tags
export const TWITTERTAGS = {
  CARD: 'summary_large_image',
  SITE: '@ziontechgroup',
  CREATOR: '@ziontechgroup',
  IMAGEALT: `${SITENAME} - ${SITEDESCRIPTION}`,
};

// SEO Constants
export const SEOCONSTANTS = {
  SITENAME,
  SITEURL,
  DEFAULTTITLE,
  DEFAULTDESCRIPTION,
  DEFAULTKEYWORDS,
  CONTACTINFO,
  SOCIALLINKS,
  PERFORMANCEGOALS,
  ACCESSIBILITYGOALS,
  METATAGS,
  OPENGRAPH_TAGS,
  TWITTERTAGS,
  STRUCTUREDDATA,
};

export default SEOCONSTANTS;
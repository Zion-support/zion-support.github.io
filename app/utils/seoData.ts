<<<<<<< HEAD
export interface StructuredData {
  '@context": string;"'"
  '@type": string;
=======
export interface StructuredData {;
  '@context': string'@type': string;
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
  name: string;
  description: string;
  url: string;
  logo?: string;
  sameAs?: string[];
  telephone?: string;
  email?: string;
<<<<<<< HEAD
  openingHours?: string[];"
  priceRange?: string;"
  contactPoint?: {"'"
    '@type": string;
    telephone: string;
    contactType: string;"
  };"
  address?: {"'"
    '@type": string;
=======
  openingHours?: string[];
  priceRange?: string;
  contactPoint?: {;
    '@type': string;
    telephone: string;
    contactType: string}
  address?: {;
    '@type': string;
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string}
}
<<<<<<< HEAD
"
export const generateStructuredData = (data: Partial<StructuredData>): StructuredData => {"
  return {"'"
    '@context': 'https://schema.org","'"
    '@type': 'Organization","'"
    name: 'Zion Tech Group","'"
    description: 'Leading provider of AI and IT solutions for modern businesses","'"
    url: 'https://ziontechgroup.com","'"
    logo: 'https://ziontechgroup.com/logo.png","
    sameAs: ["'"
      'https://twitter.com/ziontechgroup","'"
      'https://linkedin.com/company/ziontechgroup","'"
      'https://github.com/ziontechgroup"
    ],"
    contactPoint: {"'"
      '@type': 'ContactPoint","'"
      telephone: '+1-555-123-4567","'"
      contactType: 'customer service"
    },"
    address: {"'"
      '@type': 'PostalAddress","'"
      streetAddress: '123 Tech Street","'"
      addressLocality: 'San Francisco","'"
      addressRegion: 'CA","'"
      postalCode: '94105","'"
      addressCountry: 'US"
    },
    ...data
  };
};"
"
export const defaultSEOData = {"'"
  title: 'Zion Tech Group - AI Solutions","'"
  description: 'Leading provider of AI and IT solutions for modern businesses. Transform your operations with cutting-edge technology.","'"
  keywords: 'AI, artificial intelligence, technology solutions, business automation, IT services, cloud computing, cybersecurity","'"
  ogImage: '/og-image.jpg","'"
  canonical: 'https://ziontechgroup.com"
};"
"'"
=======
export const generateStructuredData = (data: Partial<StructuredData>): StructuredData => {;
  return {;
    '@context': 'https://schema.org',;
    '@type': 'Organization',;
    name: 'Zion Tech Group',;
    description: 'Leading provider of AI and IT solutions for modern businesses',;
    url: 'https://ziontechgroup.com',;
    logo: 'https://ziontechgroup.com/logo.png',;
    sameAs: [;
      'https://twitter.com/ziontechgroup',;
      'https://linkedin.com/company/ziontechgroup',;
      'https://github.com/ziontechgroup'
    ],;
    contactPoint: {;
      '@type': 'ContactPoint',;
      telephone: '+1-555-123-4567',;
      contactType: 'customer service'
    },;
    address: {;
      '@type': 'PostalAddress',;
      streetAddress: '123 Tech Street',;
      addressLocality: 'San Francisco',;
      addressRegion: 'CA',;
      postalCode: '94105',;
      addressCountry: 'US'
    },;
    ...data;
  }
}
export const defaultSEOData = {;
  title: 'Zion Tech Group - AI Solutions',;
  description: 'Leading provider of AI and IT solutions for modern businesses. Transform your operations with cutting-edge technology.',;
  keywords: 'AI, artificial intelligence, technology solutions, business automation, IT services, cloud computing, cybersecurity',;
  ogImage: '/og-image.jpg',;
  canonical: 'https://ziontechgroup.com'
}'
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70

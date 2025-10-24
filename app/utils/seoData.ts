<<<<<<< HEAD
  name: string
  description: string
  url: string
  logo?: string
  sameAs?: string[]
  telephone?: string
  email?: string
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string}
}
=======
export interface StructuredData {
  '@context": string;"'"
  '@type": string;
  name: string;
  description: string;
  url: string;
  logo?: string;
  sameAs?: string[];
  telephone?: string;
  email?: string;
  openingHours?: string[];"
  priceRange?: string;"
  contactPoint?: {"'"
    '@type": string;
    telephone: string;
    contactType: string;"
  };"
  address?: {"'"
    '@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string
  );
}
<<<<<<< HEAD

  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: StructuredData;
}

  title: 'Zion Tech Group - AI & Technology Solutions',
  description: 'Leading provider of AI-powered solutions, 5G technology, and innovative software development services.',
  keywords: ['AI', 'Artificial Intelligence', '5G', 'Technology', 'Software Development', 'Machine Learning'],
  canonical: 'https://ziontechgroup.com',
  ogTitle: 'Zion Tech Group - AI & Technology Solutions',
  ogDescription: 'Leading provider of AI-powered solutions, 5G technology, and innovative software development services.',
  ogImage: '/og-image.jpg',
  ogUrl: 'https://ziontechgroup.com',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Zion Tech Group - AI & Technology Solutions',
  twitterDescription: 'Leading provider of AI-powered solutions, 5G technology, and innovative software development services.',
  twitterImage: '/twitter-image.jpg',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description: 'Leading provider of AI-powered solutions and technology services',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup'
    ]
  }
};

  return {
    ...defaultSEOData,
    ...customData,
    structuredData: {
      ...defaultSEOData.structuredData,
      ...customData.structuredData
    }
=======
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
>>>>>>> origin/main
  };
};"

export const defaultSEOData = {"'"
  title: 'Zion Tech Group - AI Solutions","'"
  description: 'Leading provider of AI and IT solutions for modern businesses. Transform your operations with cutting-edge technology.","'"
  keywords: 'AI, artificial intelligence, technology solutions, business automation, IT services, cloud computing, cybersecurity","'"
  ogImage: '/og-image.jpg","'"
  canonical: 'https://ziontechgroup.com"
};"
"'"
>>>>>>> origin/main

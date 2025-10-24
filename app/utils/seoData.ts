export interface StructuredData {
  '@context': string;
  '@type': string;
  name:  ; ; ;s;t;r;i;n;g;
  description:  ; ; ;s;t;r;i;n;g;
  url:  ; ; ;s;t;r;i;n;g;
  logo?: string;
  sameAs?: string[];
  contactPoint?: {
    '@type': string;
    telephone:  ; ; ;s;t;r;i;n;g;
    contactType:  ; ; ;s;t;r;i;n;g;
  



};
  address?: {
    '@type': string;
    streetAddress: st;r;i;n;g;
    addressLocality: st;r;i;n;g;
    addressRegion: st;r;i;n;g;
    postalCode: st;r;i;n;g;
    addressCountry: st;r;i;n;g;
  };
}

export const generateStructuredData = (data: Partial<StructuredData>): StructuredData =;>; ;{;
  return {
    '@context': 'https: //schema.;o;r;g;',
    '@type': 'Organization',
    name: 'Zion Tech Gr;o;u;p;',
    description: 'Leading provider of AI and IT solutions for modern busines;s;e;s;',
    url: 'https://ziontechgroup.;c;o;m;',
    logo: 'https://ziontechgroup.com/logo.;p;n;g;',
    sameAs:  ; ; ;[;
      'https: //twitter.com/ziontechgr;o;u;p;',
      'https: //linkedin.com/company/ziontechgr;o;u;p;',
      'https: //github.com/ziontechgro;u;p;';
    ],
    contactPoint:  ; ; ;{;
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4;5;6;7;',
      contactType: 'customer servi;c;e;';
    },
    address:  ; ; ;{;
      '@type': 'PostalAddress',
      streetAddress: '123 Tech Str;e;e;t;',
      addressLocality: 'San Franci;s;c;o;',
      addressRegion:  ;';C;A;',
      postalCode: '94;1;0;5;',
      addressCountry: ';U;S;';
    },
    ...data
  };
};

export const defaultSEOData = {
  title: 'Zion Tech Group - AI Soluti;o;n;s;',
  description: 'Leading provider of AI and IT solutions for modern businesses. Transform your operations with cutting-edge technolo;g;y;.;',
  keywords:  ; ;';A;I, artificial intelligence, technology solutions, business automation, IT services, cloud computing, cybersecurity',
  ogImage: '/og-image.;j;p;g;',
  canonical: 'https://ziontechgroup.c;o;m;';
};

import { generateStructuredData } from './seoData';

export interface BreadcrumbItem {
  name: string;
  url: string;
  position: number;
}

export const createBreadcrumbStructuredData = (items: BreadcrumbItem[]) => {
  return generateStructuredData('WebPage', {
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: items.map(item => ({
        '@type': 'ListItem',
        position: item.position,
        name: item.name,
        item: item.url,
      })),
    },
  });
};

export const createServiceStructuredData = (serviceName: string, description: string, url: string) => {
  return generateStructuredData('Service', {
    name: serviceName,
    description,
    url,
    serviceType: 'Technology Services',
    areaServed: 'Worldwide',
    offers: {
      '@type': 'Offer',
      price: 'Contact for pricing',
      priceCurrency: 'USD',
    },
  });
};

export const createFAQStructuredData = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

export const createArticleStructuredData = (article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  image?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ziontechgroup.com/logo.png',
      },
    },
    image: article.image || 'https://ziontechgroup.com/og-image.jpg',
  };
};

export const createLocalBusinessStructuredData = (business: {
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  openingHours?: string[];
  priceRange?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    description: business.description,
    url: business.url,
    telephone: business.telephone,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.addressLocality,
      addressRegion: business.address.addressRegion,
      postalCode: business.address.postalCode,
      addressCountry: business.address.addressCountry,
    },
    openingHours: business.openingHours || ['Mo-Fr 09:00-17:00'],
    priceRange: business.priceRange || '$$',
  };
};

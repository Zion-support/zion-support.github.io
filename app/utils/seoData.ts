interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: any;
}

interface PageSEOConfig {
  [key: string]: SEOData;
}

const seoConfig: PageSEOConfig = {
  home: {
    title: 'Zion Tech Group - Advanced AI and IT Solutions',
    description: 'Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation.',
    keywords: ['AI solutions', 'IT services', 'cloud infrastructure', 'digital transformation', 'machine learning', 'artificial intelligence'],
    canonical: 'https://ziontechgroup.com',
    ogTitle: 'Zion Tech Group - Advanced AI and IT Solutions',
    ogDescription: 'Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation.',
    ogImage: 'https://ziontechgroup.com/og-image.jpg',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Zion Tech Group - Advanced AI and IT Solutions',
    twitterDescription: 'Leading provider of AI and IT solutions for modern businesses.',
    twitterImage: 'https://ziontechgroup.com/og-image.jpg',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Leading provider of AI and IT solutions for modern businesses",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-123-4567",
        "contactType": "customer service",
        "email": "contact@ziontechgroup.com"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Tech Street",
        "addressLocality": "Innovation City",
        "addressRegion": "IC",
        "postalCode": "12345",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://linkedin.com/company/ziontechgroup",
        "https://twitter.com/ziontechgroup"
      ]
    }
  },
  about: {
    title: 'About Us - Zion Tech Group',
    description: 'Learn about Zion Tech Group\'s mission to provide cutting-edge AI and IT solutions. Meet our team of experts and discover our company values.',
    keywords: ['about us', 'company', 'team', 'mission', 'values', 'AI experts', 'IT professionals'],
    canonical: 'https://ziontechgroup.com/about',
    ogTitle: 'About Us - Zion Tech Group',
    ogDescription: 'Learn about Zion Tech Group\'s mission to provide cutting-edge AI and IT solutions.',
    ogImage: 'https://ziontechgroup.com/about-og-image.jpg',
    ogType: 'website'
  },
  services: {
    title: 'Our Services - AI and IT Solutions | Zion Tech Group',
    description: 'Comprehensive AI and IT services including artificial intelligence, cloud infrastructure, digital transformation, and more.',
    keywords: ['AI services', 'IT services', 'cloud solutions', 'digital transformation', 'consulting'],
    canonical: 'https://ziontechgroup.com/services',
    ogTitle: 'Our Services - AI and IT Solutions',
    ogDescription: 'Comprehensive AI and IT services for modern businesses.',
    ogImage: 'https://ziontechgroup.com/services-og-image.jpg',
    ogType: 'website'
  },
  contact: {
    title: 'Contact Us - Zion Tech Group',
    description: 'Get in touch with Zion Tech Group for AI and IT solutions. Contact our experts for consultation and support.',
    keywords: ['contact', 'support', 'consultation', 'AI experts', 'IT support'],
    canonical: 'https://ziontechgroup.com/contact',
    ogTitle: 'Contact Us - Zion Tech Group',
    ogDescription: 'Get in touch with our AI and IT experts for consultation and support.',
    ogImage: 'https://ziontechgroup.com/contact-og-image.jpg',
    ogType: 'website'
  }
};

export function getSEOData(page: string): SEOData {
  return seoConfig[page] || seoConfig.home;
}

export function generateStructuredData(type: string, data: any): any {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };

  return baseStructuredData;
}

export function generateBreadcrumbStructuredData(items: Array<{name: string, url: string}>): any {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateFAQStructuredData(faqs: Array<{question: string, answer: string}>): any {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export { type SEOData, type PageSEOConfig };

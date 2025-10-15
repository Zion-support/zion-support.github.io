export interface SEOData {
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
  structuredData?: Record<string, any>;
  robots?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export interface PageSEOConfig {
  baseUrl: string;
  defaultImage: string;
  defaultAuthor: string;
  twitterHandle: string;
  facebookAppId?: string;
}

const defaultConfig: PageSEOConfig = {
  baseUrl: 'https://ziontechgroup.com',
  defaultImage: '/images/og-default.jpg',
  defaultAuthor: 'Zion Tech Group',
  twitterHandle: '@ziontechgroup',
};

export class SEODataGenerator {
  private config: PageSEOConfig;

  constructor(config: PageSEOConfig = defaultConfig) {
    this.config = config;
  }

  // Generate SEO data for a page
  generatePageSEO(
    pageData: Partial<SEOData>,
    path: string = '/'
  ): SEOData {
    const canonical = `${this.config.baseUrl}${path}`;
    
    return {
      title: pageData.title || 'Zion Tech Group - Advanced AI and IT Solutions',
      description: pageData.description || 'Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation.',
      keywords: pageData.keywords || ['AI', 'artificial intelligence', 'IT solutions', 'cloud infrastructure', 'digital transformation', 'machine learning', 'data analytics'],
      canonical,
      ogTitle: pageData.ogTitle || pageData.title || 'Zion Tech Group - Advanced AI and IT Solutions',
      ogDescription: pageData.ogDescription || pageData.description || 'Leading provider of AI and IT solutions for modern businesses.',
      ogImage: pageData.ogImage || `${this.config.baseUrl}${this.config.defaultImage}`,
      ogType: pageData.ogType || 'website',
      twitterCard: pageData.twitterCard || 'summary_large_image',
      twitterTitle: pageData.twitterTitle || pageData.title || 'Zion Tech Group - Advanced AI and IT Solutions',
      twitterDescription: pageData.twitterDescription || pageData.description || 'Leading provider of AI and IT solutions for modern businesses.',
      twitterImage: pageData.twitterImage || `${this.config.baseUrl}${this.config.defaultImage}`,
      structuredData: pageData.structuredData || this.generateOrganizationStructuredData(),
      robots: pageData.robots || 'index, follow',
      author: pageData.author || this.config.defaultAuthor,
      publishedTime: pageData.publishedTime || new Date().toISOString(),
      modifiedTime: pageData.modifiedTime || new Date().toISOString(),
      section: pageData.section || 'Technology',
      tags: pageData.tags || ['AI', 'IT', 'Technology', 'Business Solutions'],
    };
  }

  // Generate organization structured data
  generateOrganizationStructuredData(): Record<string, any> {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: this.config.baseUrl,
      logo: `${this.config.baseUrl}/images/logo.png`,
      description: 'Leading provider of AI and IT solutions for modern businesses',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-0123',
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English',
      },
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup',
        'https://github.com/ziontechgroup',
      ],
      service: [
        {
          '@type': 'Service',
          name: 'AI Services',
          description: 'Advanced artificial intelligence solutions',
        },
        {
          '@type': 'Service',
          name: 'Cloud Infrastructure',
          description: 'Scalable cloud solutions',
        },
        {
          '@type': 'Service',
          name: 'Digital Transformation',
          description: 'Complete digital transformation services',
        },
      ],
    };
  }

  // Generate service page structured data
  generateServiceStructuredData(serviceName: string, description: string): Record<string, any> {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: serviceName,
      description,
      provider: {
        '@type': 'Organization',
        name: 'Zion Tech Group',
        url: this.config.baseUrl,
      },
      areaServed: 'US',
      serviceType: 'Technology Services',
    };
  }

  // Generate breadcrumb structured data
  generateBreadcrumbStructuredData(breadcrumbs: Array<{ name: string; url: string }>): Record<string, any> {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: `${this.config.baseUrl}${crumb.url}`,
      })),
    };
  }

  // Generate FAQ structured data
  generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>): Record<string, any> {
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
  }
}

// Predefined SEO data for common pages
export const commonPageSEO = {
  home: {
    title: 'Zion Tech Group - Advanced AI and IT Solutions',
    description: 'Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation.',
    keywords: ['AI', 'artificial intelligence', 'IT solutions', 'cloud infrastructure', 'digital transformation', 'machine learning', 'data analytics'],
  },
  about: {
    title: 'About Zion Tech Group - AI and IT Experts',
    description: 'Learn about Zion Tech Group\'s mission to revolutionize business through cutting-edge AI and IT solutions. Meet our expert team and discover our innovative approach.',
    keywords: ['about', 'company', 'team', 'mission', 'AI experts', 'IT professionals', 'technology leadership'],
  },
  services: {
    title: 'Our Services - AI and IT Solutions | Zion Tech Group',
    description: 'Comprehensive AI and IT services including machine learning, cloud infrastructure, digital transformation, and custom software development.',
    keywords: ['services', 'AI services', 'IT services', 'cloud solutions', 'digital transformation', 'software development'],
  },
  contact: {
    title: 'Contact Zion Tech Group - Get in Touch',
    description: 'Contact Zion Tech Group for AI and IT solutions. Get a free consultation and discover how we can help transform your business.',
    keywords: ['contact', 'consultation', 'support', 'get in touch', 'AI consultation', 'IT support'],
  },
  pricing: {
    title: 'Pricing - AI and IT Solutions | Zion Tech Group',
    description: 'Transparent pricing for our AI and IT services. Choose the plan that fits your business needs and budget.',
    keywords: ['pricing', 'plans', 'cost', 'affordable', 'AI pricing', 'IT services pricing'],
  },
};

// Utility functions
export const seoUtils = {
  generatePageSEO: (pageData: Partial<SEOData>, path?: string) => 
    new SEODataGenerator().generatePageSEO(pageData, path),
  generateOrganizationStructuredData: () => 
    new SEODataGenerator().generateOrganizationStructuredData(),
  generateServiceStructuredData: (name: string, description: string) => 
    new SEODataGenerator().generateServiceStructuredData(name, description),
  generateBreadcrumbStructuredData: (breadcrumbs: Array<{ name: string; url: string }>) => 
    new SEODataGenerator().generateBreadcrumbStructuredData(breadcrumbs),
  generateFAQStructuredData: (faqs: Array<{ question: string; answer: string }>) => 
    new SEODataGenerator().generateFAQStructuredData(faqs),
};

export default seoUtils;

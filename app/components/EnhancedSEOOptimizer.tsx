'use client';
import React, { useEffect } from 'react';
import { logger } from '../utils/productionLogger';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: Record<string, unknown>;
  noIndex?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const EnhancedSEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI'],
  canonicalUrl = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  structuredData,
  noIndex = false,
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section = 'Technology',
  tags = []
}) => {
  useEffect(() => {
    try {
      // Update page title
      document.title = title;
      
      // Update meta description
      updateMetaTag('description', description);
      updateMetaTag('keywords', keywords.join(', '));
      
      // Update author
      updateMetaTag('author', author);
      
      // Update robots
      updateMetaTag('robots', noIndex ? 'noindex,nofollow' : 'index,follow');
      
      // Update Open Graph tags
      updateMetaTag('og:title', title, 'property');
      updateMetaTag('og:description', description, 'property');
      updateMetaTag('og:image', ogImage, 'property');
      updateMetaTag('og:url', canonicalUrl, 'property');
      updateMetaTag('og:type', 'website', 'property');
      updateMetaTag('og:site_name', 'Zion Tech Group', 'property');
      updateMetaTag('og:locale', 'en_US', 'property');
      
      // Add article-specific meta tags
      if (publishedTime) {
        updateMetaTag('article:published_time', publishedTime, 'property');
      }
      if (modifiedTime) {
        updateMetaTag('article:modified_time', modifiedTime, 'property');
      }
      if (section) {
        updateMetaTag('article:section', section, 'property');
      }
      if (tags.length > 0) {
        tags.forEach(tag => {
          updateMetaTag('article:tag', tag, 'property');
        });
      }
      
      // Update Twitter tags
      updateMetaTag('twitter:card', 'summary_large_image', 'name');
      updateMetaTag('twitter:title', title, 'name');
      updateMetaTag('twitter:description', description, 'name');
      updateMetaTag('twitter:image', ogImage, 'name');
      updateMetaTag('twitter:site', '@ziontechgroup', 'name');
      updateMetaTag('twitter:creator', '@ziontechgroup', 'name');
      
      // Update canonical URL
      updateCanonicalUrl(canonicalUrl);
      
      // Add structured data
      if (structuredData) {
        addStructuredData(structuredData);
      }
      
      // Add default structured data
      addDefaultStructuredData();
      
      // Add breadcrumb structured data
      addBreadcrumbStructuredData();
      
      // Add FAQ structured data
      addFAQStructuredData();
      
      // Add organization structured data
      addOrganizationStructuredData();
      
      // Add WebSite structured data
      addWebSiteStructuredData();
      
      logger.info('SEO optimization completed', { title, canonicalUrl }, 'EnhancedSEOOptimizer');
    } catch (error) {
      logger.error('SEO optimization failed', { error: (error as Error).message }, 'EnhancedSEOOptimizer');
    }
  }, [title, description, keywords, canonicalUrl, ogImage, structuredData, noIndex, author, publishedTime, modifiedTime, section, tags]);

  const updateMetaTag = (name: string, content: string, attribute: string = 'name'): void => {
    let meta = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };

  const updateCanonicalUrl = (url: string): void => {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  };

  const addStructuredData = (data: Record<string, unknown>): void => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    script.id = 'structured-data';
    // Remove existing structured data
    const existing = document.getElementById('structured-data');
    if (existing) {
      existing.remove();
    }
    document.head.appendChild(script);
  };

  const addDefaultStructuredData = (): void => {
    const defaultData = {
      '@context': 'https://schema.org',
      '@type': 'TechCompany',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
      foundingDate: '2020',
      numberOfEmployees: '50-100',
      industry: 'Technology',
      services: [
        'AI Solutions',
        'Quantum Computing',
        'Autonomous Systems',
        'Digital Transformation',
        'Cloud Services',
        'Automation',
        'Business Intelligence'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'Customer Service',
        areaServed: 'US',
        availableLanguage: 'en'
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '364 E Main St STE 1008',
        addressLocality: 'Middletown',
        addressRegion: 'DE',
        postalCode: '19709',
        addressCountry: 'US'
      },
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup'
      ]
    };
    
    addStructuredData(defaultData);
  };

  const addBreadcrumbStructuredData = (): void => {
    const breadcrumbData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://ziontechgroup.com'
        }
      ]
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(breadcrumbData);
    script.id = 'breadcrumb-structured-data';
    // Remove existing breadcrumb data
    const existing = document.getElementById('breadcrumb-structured-data');
    if (existing) {
      existing.remove();
    }
    document.head.appendChild(script);
  };

  const addFAQStructuredData = (): void => {
    const faqData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What AI services does Zion Tech Group offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zion Tech Group offers comprehensive AI services including machine learning, natural language processing, computer vision, AI automation, AI marketing, AI healthcare solutions, and AI-powered business intelligence.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the pricing for AI services?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our AI services start at $1,500/month for basic AI solutions, with custom pricing available for enterprise implementations. We also offer micro SAAS solutions starting at $15/month.'
          }
        },
        {
          '@type': 'Question',
          name: 'Do you provide 24/7 support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we provide 24/7 expert support with guaranteed response times. Our team is available round-the-clock to assist with any technical issues or questions.'
          }
        },
        {
          '@type': 'Question',
          name: 'What technologies do you specialize in?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We specialize in AI/ML, quantum computing, autonomous systems, cloud services, blockchain, IoT, cybersecurity, and digital transformation technologies.'
          }
        }
      ]
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(faqData);
    script.id = 'faq-structured-data';
    // Remove existing FAQ data
    const existing = document.getElementById('faq-structured-data');
    if (existing) {
      existing.remove();
    }
    document.head.appendChild(script);
  };

  const addOrganizationStructuredData = (): void => {
    const organizationData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
      foundingDate: '2020',
      numberOfEmployees: '50-100',
      industry: 'Technology',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'Customer Service',
        areaServed: 'US',
        availableLanguage: 'en'
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '364 E Main St STE 1008',
        addressLocality: 'Middletown',
        addressRegion: 'DE',
        postalCode: '19709',
        addressCountry: 'US'
      },
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup'
      ]
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(organizationData);
    script.id = 'organization-structured-data';
    // Remove existing organization data
    const existing = document.getElementById('organization-structured-data');
    if (existing) {
      existing.remove();
    }
    document.head.appendChild(script);
  };

  const addWebSiteStructuredData = (): void => {
    const websiteData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
      publisher: {
        '@type': 'Organization',
        name: 'Zion Tech Group',
        url: 'https://ziontechgroup.com'
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://ziontechgroup.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(websiteData);
    script.id = 'website-structured-data';
    // Remove existing website data
    const existing = document.getElementById('website-structured-data');
    if (existing) {
      existing.remove();
    }
    document.head.appendChild(script);
  };

  return null;
};

export default EnhancedSEOOptimizer;
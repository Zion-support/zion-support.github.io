'use client';
import React, { useEffect } from 'react';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: unknown;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI'],
  canonicalUrl = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  structuredData
}) => {
  useEffect(() => {
    // Update page title
    document.title = title;
    
    // Update meta description
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords.join(', '));
    
    // Update Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:url', canonicalUrl, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:site_name', 'Zion Tech Group', 'property');
    
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
    
    // Add breadcrumb structured data
    addBreadcrumbStructuredData();
    
    // Add FAQ structured data
    addFAQStructuredData();
    
    // Add organization structured data
    addOrganizationStructuredData();
  }, [title, description, keywords, canonicalUrl, ogImage, structuredData]);

  const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
    let meta = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };

  const updateCanonicalUrl = (url: string) => {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  };

  const addStructuredData = (data: unknown) => {
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

  const addBreadcrumbStructuredData = () => {
    const breadcrumbData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://ziontechgroup.com'
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

  const addFAQStructuredData = () => {
    const faqData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What AI services does Zion Tech Group offer?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Zion Tech Group offers comprehensive AI services including machine learning, natural language processing, computer vision, AI automation, AI marketing, AI healthcare solutions, and AI-powered business intelligence.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What is the pricing for AI services?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Our AI services start at $1,500/month for basic AI solutions, with custom pricing available for enterprise implementations. We also offer micro SAAS solutions starting at $15/month.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do you provide 24/7 support?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes, we provide 24/7 expert support with guaranteed response times. Our team is available round-the-clock to assist with unknown technical issues or questions.'
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

  const addOrganizationStructuredData = () => {
    const organizationData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Zion Tech Group',
      'url': 'https://ziontechgroup.com',
      'logo': 'https://ziontechgroup.com/logo.png',
      'description': 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
      'foundingDate': '2020',
      'numberOfEmployees': '50-100',
      'industry': 'Technology',
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+1-302-464-0950',
        'contactType': 'Customer Service',
        'areaServed': 'US',
        'availableLanguage': 'en'
      },
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '364 E Main St STE 1008',
        'addressLocality': 'Middletown',
        'addressRegion': 'DE',
        'postalCode': '19709',
        'addressCountry': 'US'
      },
      'sameAs': [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/compunknown/ziontechgroup'
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

  return null;
};

export default SEOOptimizer;
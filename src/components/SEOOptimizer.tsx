'use client';
import React, { useEffect } from 'react';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: any;
  noIndex?: boolean;
  alternateLanguages?: { href: string; hreflang: string }[];
  breadcrumbs?: Array<{ name: string; url: string }>;
  articleData?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI'],
  canonicalUrl = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  structuredData,
  noIndex = false,
  alternateLanguages = [],
  breadcrumbs = [],
  articleData
}) => {
  useEffect(() => {
    // Update page title
    document.title = title;
    
    // Update robots meta tag
    updateMetaTag('robots', noIndex ? 'noindex, nofollow' : 'index, follow');
    
    // Update meta description
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords.join(', '));
    
    // Update Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:url', canonicalUrl, 'property');
    updateMetaTag('og:type', articleData ? 'article' : 'website', 'property');
    updateMetaTag('og:site_name', 'Zion Tech Group', 'property');
    updateMetaTag('og:locale', 'en_US', 'property');
    
    // Add article-specific Open Graph tags
    if (articleData) {
      if (articleData.publishedTime) {
        updateMetaTag('og:article:published_time', articleData.publishedTime, 'property');
      }
      if (articleData.modifiedTime) {
        updateMetaTag('og:article:modified_time', articleData.modifiedTime, 'property');
      }
      if (articleData.author) {
        updateMetaTag('og:article:author', articleData.author, 'property');
      }
      if (articleData.section) {
        updateMetaTag('og:article:section', articleData.section, 'property');
      }
      if (articleData.tags) {
        articleData.tags.forEach(tag => {
          updateMetaTag('og:article:tag', tag, 'property');
        });
      }
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
    
    // Add alternate language links
    alternateLanguages.forEach(alt => {
      addAlternateLanguage(alt.href, alt.hreflang);
    });
    
    // Add structured data
    if (structuredData) {
      addStructuredData(structuredData);
    }
    
    // Add breadcrumb structured data
    if (breadcrumbs.length > 0) {
      addBreadcrumbStructuredData(breadcrumbs);
    } else {
      addBreadcrumbStructuredData();
    }
    
    // Add FAQ structured data
    addFAQStructuredData();
    
    // Add organization structured data
    addOrganizationStructuredData();
    
    // Add article structured data if provided
    if (articleData) {
      addArticleStructuredData(articleData);
    }
  }, [title, description, keywords, canonicalUrl, ogImage, structuredData, noIndex, alternateLanguages, breadcrumbs, articleData]);

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

  const addStructuredData = (data: any) => {
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

  const addAlternateLanguage = (href: string, hreflang: string) => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.href = href;
    link.hreflang = hreflang;
    document.head.appendChild(link);
  };

  const addBreadcrumbStructuredData = (customBreadcrumbs?: Array<{ name: string; url: string }>) => {
    const breadcrumbItems = customBreadcrumbs && customBreadcrumbs.length > 0 
      ? customBreadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          'position': index + 1,
          'name': crumb.name,
          'item': crumb.url
        }))
      : [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://ziontechgroup.com'
          }
        ];

    const breadcrumbData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbItems
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
            'text': 'Yes, we provide 24/7 expert support with guaranteed response times. Our team is available round-the-clock to assist with any technical issues or questions.'
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

  const addArticleStructuredData = (articleData: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  }) => {
    const articleStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': title,
      'description': description,
      'image': ogImage,
      'url': canonicalUrl,
      'datePublished': articleData.publishedTime || new Date().toISOString(),
      'dateModified': articleData.modifiedTime || new Date().toISOString(),
      'author': {
        '@type': 'Organization',
        'name': articleData.author || 'Zion Tech Group'
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Zion Tech Group',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://ziontechgroup.com/logo.png'
        }
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': canonicalUrl
      },
      'keywords': keywords.join(', '),
      'articleSection': articleData.section || 'Technology',
      'wordCount': description.length + title.length, // Approximate word count
      'inLanguage': 'en-US'
    };

    if (articleData.tags && articleData.tags.length > 0) {
      articleStructuredData['keywords'] = articleData.tags.join(', ');
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(articleStructuredData);
    script.id = 'article-structured-data';
    // Remove existing article data
    const existing = document.getElementById('article-structured-data');
    if (existing) {
      existing.remove();
    }
    document.head.appendChild(script);
  };

  return null;
};

export default SEOOptimizer;
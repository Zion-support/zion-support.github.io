import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
  alternate?: { hreflang: string; href: string }[];
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of cutting-edge AI solutions, enterprise security, and digital transformation services. Trusted by 500+ companies worldwide.',
  keywords = [
    'AI solutions',
    'artificial intelligence',
    'enterprise security',
    'digital transformation',
    'machine learning',
    'cybersecurity',
    'cloud computing',
    'software development',
    'IT consulting',
    'Zion Tech Group'
  ],
  image = '/images/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  canonical,
  structuredData
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullUrl = canonical || url;
  const fullImage = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;

  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/logo.png',
    description: 'Leading provider of advanced AI and IT solutions',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-ZION-TECH',
      contactType: 'customer service'
    },
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup'
    ]
  };

  const mergedStructuredData = structuredData || defaultStructuredData;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords.join(', '));
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords.join(', ');
      document.head.appendChild(meta);
    }

    // Update Open Graph tags
    const updateMetaProperty = (property: string, content: string) => {
      const meta = document.querySelector(`meta[property="${property}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        const newMeta = document.createElement('meta');
        newMeta.setAttribute('property', property);
        newMeta.content = content;
        document.head.appendChild(newMeta);
      }
    };

    updateMetaProperty('og:type', type);
    updateMetaProperty('og:title', fullTitle);
    updateMetaProperty('og:description', description);
    updateMetaProperty('og:image', fullImage);
    updateMetaProperty('og:url', fullUrl);
    updateMetaProperty('og:site_name', 'Zion Tech Group');
    updateMetaProperty('og:locale', 'en_US');

    // Add structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(mergedStructuredData);
    } else {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(mergedStructuredData);
      document.head.appendChild(script);
    }
  }, [fullTitle, description, keywords, type, fullImage, fullUrl, mergedStructuredData]);

  return null;
};

export default SEO;
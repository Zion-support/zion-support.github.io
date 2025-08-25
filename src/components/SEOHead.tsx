import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: object;
}

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: object;
}

export const SEOConfigs: Record<string, SEOConfig> = {
  home: {
    title: 'Zion Tech Group - AI-Powered Innovation & Enterprise Solutions',
    description: 'Transform your business with cutting-edge AI solutions, quantum technology, and innovative micro SAAS platforms. Leading the future of technology.',
    keywords: ['AI solutions', 'quantum technology', 'enterprise IT', 'cybersecurity', 'micro SAAS', 'digital transformation', 'machine learning', 'blockchain'],
    type: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      description: 'AI-Powered Innovation & Enterprise Solutions',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Wilmington',
        addressRegion: 'DE',
        addressCountry: 'US'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'customer service',
        email: 'kleber@ziontechgroup.com'
      },
      sameAs: [
        'https://www.linkedin.com/company/ziontechgroup',
        'https://twitter.com/ziontechgroup',
        'https://github.com/ziontechgroup'
      ]
    }
  },
  services: {
    title: 'AI Services & Solutions - Zion Tech Group',
    description: 'Comprehensive AI services including autonomous systems, quantum computing, cybersecurity, and enterprise solutions. Transform your business today.',
    keywords: ['AI services', 'quantum computing', 'cybersecurity', 'enterprise solutions', 'autonomous systems', 'digital transformation'],
    type: 'website'
  },
  about: {
    title: 'About Zion Tech Group - Innovation & Excellence',
    description: 'Learn about our mission to revolutionize business through AI innovation, our expert team, and commitment to delivering exceptional results.',
    keywords: ['about us', 'company history', 'team', 'mission', 'vision', 'values'],
    type: 'website'
  },
  contact: {
    title: 'Contact Zion Tech Group - Get Started Today',
    description: 'Get in touch with our team to discuss your AI and IT needs. We\'re here to help transform your business with innovative technology solutions.',
    keywords: ['contact us', 'get quote', 'consultation', 'support', 'sales'],
    type: 'website'
  }
};

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - AI-Powered Innovation & Enterprise Solutions',
  description = 'Transform your business with cutting-edge AI solutions, cybersecurity, cloud infrastructure, and enterprise IT services. Leading technology consulting and digital transformation.',
  keywords = 'AI solutions, cybersecurity, cloud computing, enterprise IT, digital transformation, machine learning, quantum technology, blockchain, micro SAAS',
  image = '/images/zion-tech-group-og.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  canonical,
  noindex = false,
  nofollow = false,
  structuredData
}) => {
  const location = useLocation();
  const currentUrl = canonical || `${url}${location.pathname}`;
  
  // Convert keywords to string if it's an array
  const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : keywords;
  
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  
  // Use provided structured data or fall back to default
  const finalStructuredData = structuredData || {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
      "https://github.com/Zion-Holdings"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "serviceArea": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Solutions",
            "description": "Artificial Intelligence and Machine Learning services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cybersecurity",
            "description": "Security and compliance services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Infrastructure",
            "description": "Cloud computing and infrastructure services"
          }
        }
      ]
    }
  };
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? 'noindex' : 'index'} />
      {nofollow && <meta name="robots" content="nofollow" />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Article specific structured data */}
      {type === 'article' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": fullTitle,
            "description": description,
            "image": image,
            "author": {
              "@type": "Organization",
              "name": author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "logo": {
                "@type": "ImageObject",
                "url": "https://ziontechgroup.com/images/zion-tech-group-logo.png"
              }
            },
            "datePublished": publishedTime,
            "dateModified": modifiedTime,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": currentUrl
            },
            "articleSection": section,
            "keywords": tags.join(', ')
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;

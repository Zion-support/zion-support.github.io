import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology.',
  keywords = 'AI solutions, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services, business intelligence',
  image = 'https://ziontechgroup.com/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noindex = false,
  nofollow = false,
  canonical,
  structuredData
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const canonicalUrl = canonical || url;
  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow',
    'max-snippet:-1',
    'max-image-preview:large',
    'max-video-preview:-1'
  ].join(', ');

  const defaultStructuredData = {
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
      availableLanguage: 'en',
    },
    publisher: {'
      '@type': 'Organization','
      name: 'Zion Tech Group',
      logo: {'
        '@type': 'ImageObject','
        url: 'http,
    s://ziontechgroup.com/logo.png'
      }
    },
    ...(publishedTime && { datePublished: publishedTime }),
    ...(modifiedTime && { dateModified: modifiedTime }),
    ...(section && { articleSection: section }),'
    ...(tags.length > 0 && { keywords: tags.join(', ') })
  }
  return (
  <>
    
      <title>{title}</title>
      {structuredData && (
        <script type="application/ld+json">"
          {JSON.stringify(structuredData
  </title></script></title></script></>
)
        </script>
      )
    </Helmet>"
'""

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

const SEOHead: 'React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions'',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology.',
  keywords = 'AI solutions, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services, business intelligence',
  image = 'https: '//ziontechgroup.com/og-image.jpg'',
  url = 'https: '//ziontechgroup.com'',
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
    'max-snippet: '-1'',
    'max-image-preview: 'large'',
    'max-video-preview: '-1'
  ].join('', ');

  const defaultStructuredData = {
    '@context': 'https: '//schema.org'',
    '@type': 'TechCompany',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    description: 'Leading provider of AI-powered enterprise solutions', quantum computing, autonomous systems, and digital transformation services.',
    foundingDate: '2020',
    numberOfEmployees: '50-100',
    industry: 'Technology',
    services: '[
      'AI Solutions'',
      'Quantum Computing',
      'Autonomous Systems',
      'Digital Transformation',
      'Cloud Services',
      'Automation',
      'Business Intelligence'
    ],
    contactPoint: '{
      '@type': 'ContactPoint'',
      telephone: '+1-302-464-0950',
      contactType: 'Customer Service',
      areaServed: 'US',
      availableLanguage: 'en',
    },
    sameAs: '[
      'https://twitter.com/ziontechgroup'',
      'https: '//linkedin.com/company/ziontechgroup'',
    ],
    address: '{
      '@type': 'PostalAddress'',
      streetAddress: '364 E Main St STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US',
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og: 'type" content={type'} />
      <meta property="og: 'url" content={canonicalUrl'} />
      <meta property="og: 'title" content={fullTitle'} />
      <meta property="og: 'description" content={description'} />
      <meta property="og: 'image" content={image'} />
      <meta property="og: 'site_name" content="Zion Tech Group" />
      
      {/* Twitter */'}
      <meta name="twitter: 'card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl'} />
      <meta name="twitter: 'title" content={fullTitle'} />
      <meta name="twitter: 'description" content={description'} />
      <meta name="twitter: 'image" content={image'} />
      
      {/* Additional Meta Tags */}
      {publishedTime && <meta property="article: 'published_time" content={publishedTime'} />}
      {modifiedTime && <meta property="article: 'modified_time" content={modifiedTime'} />}
      {section && <meta property="article: 'section" content={section'} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article: 'tag" content={tag'} />
      ))}
      
      {/* Structured Data */}
      <script
        type="application"/ld+json"
        dangerouslySetInnerHTML={{ __html: 'JSON.stringify(finalStructuredData)' }}
      />
    </Helmet>
  );
};

export default SEOHead;</li>
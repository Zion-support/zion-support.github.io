import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noIndex?: boolean;
  noFollow?: boolean;
}

const EnhancedSEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = 'AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions'
  canonicalUrl,
  ogImage = '/api/placeholder/1200/630'
  ogType = 'website'
  twitterCard = 'summary_large_image'
  structuredData,
  noIndex = false,
  noFollow = false
}) => {
  const siteName = 'Zion Tech Group'
  const siteUrl = 'https://ziontechgroup.com'
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  const defaultStructuredData = {
    '@context': 'https://schema.org'
    '@type': 'Organization'
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.'
    address: {
      '@type': 'PostalAddress'
      addressLocality: 'Middletown'
      addressRegion: 'DE'
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint'
      telephone: '+1-302-464-0950'
      contactType: 'customer service'
      email: 'kleber@ziontechgroup.com'
    },
    sameAs: [
      'https://www.linkedin.com/company/zion-tech-group'
      'https://github.com/ziontechgroup'
      'https://twitter.com/ziontechgroup'
    ]
  };

  const mergedStructuredData = structuredData || defaultStructuredData;

const EnhancedSEO: React.FC = () => {
  return (
    <div className="enhanced-seo">
      {/* Enhanced SEO component */}
    </div>
  );
};

export default EnhancedSEO;

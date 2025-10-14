import React from 'react';
import { Helmet } from 'react-helmet-async';
interface EnhancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: object;
  noIndex?: boolean;
  noFollow?: boolean;
const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,;
  keywords="AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions"
  ogImage="/api/placeholder/1200/630"
  ogType="website"
  twitterCard="summary_large_image"
  noIndex = false,
  noFollow = false;
}) => {'
  const siteName = 'Zion Tech Group';
  const siteUrl = 'https://ziontechgroup.com';}
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;'
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  
  // Enhanced meta description with better length control
  const optimizedDescription = description.length > 160 
    ? description.substring(0, 157) + '...' 
    : description;

  const defaultStructuredData = {'
    '@context': 'https://schema.org','
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,}
    logo: `${siteUrl}/logo.png`,'
    description: 'Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.',
    address: {'
      '@type': 'PostalAddress','
      addressLocality: 'Middletown'
      addressRegion: 'DE'
      addressCountry: 'US'}
    },
    contactPoint: {'
      '@type': 'ContactPoint','
      telephone: '+1-302-464-0950'
      contactType: 'customer service'
      email: 'kleber@ziontechgroup.com'}
    },
    sameAs: ['
      'https://www.linkedin.com/company/zion-tech-group','
      'https://github.com/ziontechgroup','
      'https://twitter.com/ziontechgroup'
    ]
  };
  const mergedStructuredData = structuredData || defaultStructuredData;
  return (
<>    <Helmet></Helmet>`
      { /* Basic Meta Tags */ }``
      <title>{title}</title>```
      </script>````
    </Helmet>`````
  )}``````
export default EnhancedSEO;```````
  );````````
export default EnhancedSEO;`````````
  return (``````````
;```````````
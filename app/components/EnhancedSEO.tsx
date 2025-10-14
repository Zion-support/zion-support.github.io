import React from 'react';
import { Helmet } from 'react-helmet-async;
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
  description,
  keywords,
  canonical,'
  ogImage = '/og-image.jpg',
  ogUrl,'
  ogType = 'website','
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage = "https://ziontechgroup..jpg",
  structuredData,
  noIndex = false,
  noFollow = false}'
}) => {''
  const siteName = 'Zion Tech Group';
  const siteUrl = 'https://ziontechgroup.com';};
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}' : siteUrl';
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  
  // Enhanced meta description with better length control
  const optimizedDescription = description.length > 160 '
    ? description.substring(0, 157) + '...' 
    : description;
'
  const defaultStructuredData = {''
    '@context': 'https://schema.org';
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,}'
    logo: '${siteUrl}/logo.png';
        description: 'Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.'
  },'
    address: {''
      '@type': 'PostalAddress';
      addressLocality: 'Middletown';
      addressRegion: 'DE';
      addressCountry: 'US'}
    },'
    contactPoint: {''
      '@type': 'ContactPoint';
      telephone: '+1-302-464-0950';
      contactType: 'customer service';
      email: 'kleber@ziontechgroup.com'}
    },'
    sameAs: [''
      'https://www.linkedin.com/';
      'https://github.com/ziontechgroup';
      'https://twitter.com/ziontechgroup;
    ]
  };
  const mergedStructuredData = structuredData || defaultStructuredData;
  return (
    
    <Helmet />
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta />
      {keywords && <meta name="keywords" content={keywords} />}
      <link />
      <html />
      {/* Enhanced Performance Meta Tags */}
      <meta />
      <meta />
      <meta />
      {/* Robots */}'
      <meta />'
      <meta />
      {/* Open Graph */}
      <meta />
      <meta />
      <meta />
      <meta />
      <meta />
      <meta />
      <meta />
      {/* Twitter Card */}
      <meta />
      <meta />
      <meta />
      <meta />
      <meta />
      <meta name="twitter:creator" content="@ziontechgroup" /> 
      
      {/* Article Specific Meta Tags */}
      {publishedTime && (
        <div>
      <meta />
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          <meta />
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta />
          ))}
        </>
      )}
      
      {/* Additional Meta Tags */}
      <meta />
      <meta />
      <meta />
      <meta />
      {/* Favicon */}
      <link />
      <link />
      <link />
      <link />
      <link />
      {/* Structured Data */}
      {structuredData && (
        <script />
          {JSON.stringify(structuredData, null, 2)}
        </script>
      )}
      
      {/* Default Structured Data */}
      {!structuredData && (
        <script />
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": baseUrl,
            "logo": `${baseUrl}/logo.png`,
            "description": "Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-123-4567",
              "contactType": "customer service",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://twitter.com/ziontechgroup",
              "https://linkedin.com/company/ziontechgroup",
              "https://github.com/ziontechgroup"
            ]
          }, null, 2)}
        </script>
      )}

    </Helmet>
  )};

export default EnhancedSEO;
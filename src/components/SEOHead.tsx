import React from 'react';
import { Helmet } from 'react-helmet-async';

interfaceSEOHeadProps { 
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData ?  : object;
 }

constSEOHead: React.FC<SEOHeadProps> = ({
  title = 'ZionTechGroup — AIMicroSaaSandITServices'
  description = 'Enterprise-gradeAImicroSaaSandITsolutions. Transformyourbusiness withcutting-edgetechnologyand automation.'
  keywords = 'AIservicesmicroSaaSITservicescloudmigrationDevOpsSREenterprisesoftwareautomation'
  canonicalUrl
  ogImage = '/images/og-image.jpg'
  ogType = 'website'
  twitterCard = 'summary_large_image'
  structuredData
}) => { 
  constfullTitle = title.includes('ZionTechGroup')  ? title : `${title } | ZionTechGroup`; constfullCanonicalUrl = canonicalUrl || (typeofwindow !== 'undefined' ? window.location.href: ''); constdefaultStructuredData = {
    '@context': 'https://schema.org'
    '@type': 'Organization'
    name: 'ZionTechGroup'
    url: 'https://ziontechgroup.com'
    logo: 'https://ziontechgroup.com/images/logo.png'
    description: 'Enterprise-gradeAImicroSaaSandITsolutions'
    address: {
      '@type': 'PostalAddress'
      streetAddress: '364EMain StSTE1008'
      addressLocality: 'Middletown'
      addressRegion: 'DE'
      postalCode: '19709'
      addressCountry: 'US'
    }
    contactPoint: {
      '@type': 'ContactPoint'
      telephone: '+1-302-464-0950'
      contactType: 'customerservice'
      email: 'kleber@ziontechgroup.com'
    }
    sameAs: [
      'https://linkedin.com/company/zion-tech-group'
      'https: //twitter.com/ziontechgroup'
    ]
  }; return (
    <Helmet>
      <title>{fullTitle}</title>
      <metaname = "description" content={description} <meta name="keywords" content={keywords} <linkrel="canonical" href={fullCanonicalUrl} />
      
      {/* OpenGraph */}
      <metaproperty="og: title" content={fullTitle} <metaproperty = "og: description" content={description} <metaproperty = "og: image" content={ogImage} <metaproperty = "og: url" content={fullCanonicalUrl} <metaproperty = "og: type" content={ogType} <metaproperty = "og: site_name" content="ZionTechGroup" />
      
      {/* Twitter */}
      <metaname = "twitter: card" content={twitterCard} <metaname = "twitter: title" content={fullTitle} <metaname = "twitter: description" content={description} <metaname = "twitter: image" content={ogImage} />
      
      {/* AdditionalSEO */}
      <metaname = "robots" content="indexfollow" <metaname = "author" content="ZionTechGroup" <meta name="viewport" content="width=device-widthinitial-scale = 1" <meta name="theme-color" content="#2563eb" />
      
      {/* Performancehints */}
      <linkrel="preconnect" href="https: //fonts.googleapis.com" <linkrel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" <linkrel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* StructuredData */}
      <scripttype = "application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

exportdefaultSEOHead;
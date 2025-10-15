import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noIndex?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noIndex = false,
  author,
  publishedTime,
  modifiedTime,
  section,
  tags
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} - Zion Tech Group`;
  const fullDescription = description || 'Professional AI and IT solutions for modern businesses';
  const fullKeywords = keywords || 'AI solutions, IT services, technology consulting, software development, artificial intelligence';
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '');
  const defaultImage = 'https://ziontechgroup.com/og-image.jpg';
  const fullImage = ogImage || defaultImage;

  // Generate default structured data if none provided
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: fullTitle,
    description: fullDescription,
    url: currentUrl,
    image: fullImage,
    publisher: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ziontechgroup.com/logo.png'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'customer service',
        email: 'kleber@ziontechgroup.com'
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '364 E Main St STE 1008',
        addressLocality: 'Middletown',
        addressRegion: 'DE',
        postalCode: '19709',
        addressCountry: 'US'
      }
    },
    mainEntity: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      description: 'Leading provider of AI and IT solutions for businesses worldwide',
      url: 'https://ziontechgroup.com',
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup'
      ]
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific Open Graph tags */}
      {ogType === 'article' && (
        <>
          {author && <meta property="og:article:author" content={author} />}
          {publishedTime && <meta property="og:article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="og:article:modified_time" content={modifiedTime} />}
          {section && <meta property="og:article:section" content={section} />}
          {tags && tags.map((tag, index) => (
            <meta key={index} property="og:article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />

      {/* Additional SEO */}
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      
      {/* Performance hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Favicon and app icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
};
export default SEOHead;

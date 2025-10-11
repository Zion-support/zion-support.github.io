import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOData, generateMetaTags, generateStructuredData, optimizeTitle, optimizeDescription } from '../../utils/seoUtils';

interface SEOHeadProps {
  seoData: SEOData;
  children?: React.ReactNode;
}

const SEOHead: React.FC<SEOHeadProps> = ({ seoData, children }) => {
  const metaTags = generateMetaTags(seoData);
  const structuredData = generateStructuredData(seoData);
  const optimizedTitle = optimizeTitle(seoData.title);
  const optimizedDescription = optimizeDescription(seoData.description);

  return (
    <Helmet>
      <title>{optimizedTitle}</title>
      <meta name="description" content={optimizedDescription} />
      
      {metaTags.map((tag, index) => (
        <meta
          key={index}
          {...(tag.name ? { name: tag.name } : { property: tag.property })}
          content={tag.content}
        />
      ))}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData.organization)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(structuredData.website)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(structuredData.breadcrumb)}
      </script>
      
      {/* Additional SEO meta tags */}
      <link rel="canonical" href={seoData.url || 'https://ziontechgroup.com'} />
      <link rel="alternate" hrefLang="en" href={seoData.url || 'https://ziontechgroup.com'} />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {children}
    </Helmet>
  );
};

export default SEOHead;
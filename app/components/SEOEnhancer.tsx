import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  children: ReactNode;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  children
}) => {
  const seoData = {
    title: title || 'Zion Tech Group - Advanced AI and IT Solutions',
    description: description || 'Leading provider of AI-powered IT solutions, automation, and digital transformation services.',
    keywords: keywords.join(', '),
    canonicalUrl: canonicalUrl || window.location.href,
    ogImage: ogImage || '/og-image.jpg',
    ogType,
    twitterCard
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:type" content={seoData.ogType} />
        <meta property="og:url" content={seoData.canonicalUrl} />
        
        {/* Twitter */}
        <meta name="twitter:card" content={seoData.twitterCard} />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.ogImage} />
      </Helmet>
      {children}
    </>
  );
};

export default SEOEnhancer;
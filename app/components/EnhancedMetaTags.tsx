import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  canonicalUrl?: string;
}

const EnhancedMetaTags: React.FC<MetaTagsProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Professional AI and IT solutions for businesses of all sizes. Expert consulting, custom development, and cutting-edge technology implementation.',
  keywords = 'AI, artificial intelligence, IT solutions, technology consulting, software development',
  ogTitle,
  ogDescription,
  ogImage,
  twitterCard = 'summary_large_image',
  canonicalUrl
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl || window.location.href} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage || '/og-image.jpg'} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl || window.location.href} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage || '/og-image.jpg'} />
      
      {/* Additional meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#2563eb" />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default EnhancedMetaTags;
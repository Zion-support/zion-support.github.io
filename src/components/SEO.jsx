import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEO = ({ 
  title = "Zion Tech Group - AI & Technology Solutions", 
  description = "Leading provider of AI services, IT solutions, and innovative technology services. Transform your business with cutting-edge AI and digital solutions.",
  keywords = "AI services, IT solutions, technology services, digital transformation, AI consulting, software development",
  canonical = "https://ziontechgroup.com",
  ogImage = "https://ziontechgroup.com/og-image.jpg",
  ogType = "website"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};

export default SEO;
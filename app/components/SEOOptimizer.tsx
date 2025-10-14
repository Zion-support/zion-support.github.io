import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string[];
  type?: string;
  url?: string;
  image?: string;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  children,
  title = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Leading provider of AI-powered IT solutions, custom software development, and digital transformation services.",
  keywords = ["AI", "IT Solutions", "Software Development", "Digital Transformation", "Machine Learning", "Cloud Computing"],
  type = "website",
  url = "https://zion.app",
  image = "https://zion.app/og-image.jpg"
}) => {
  useEffect(() => {
    // SEO optimization logic
    console.log('SEO Optimizer initialized');
  }, []);

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(', ')} />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        
        {/* Additional SEO Tags */}
        <link rel="canonical" href={url} />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="msapplication-TileColor" content="#8b5cf6" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>
      {children}
    </>
  );
};

export default SEOOptimizer;
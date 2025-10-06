import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOAccessibilityEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: any;
}

const SEOAccessibilityEnhancer: React.FC<SEOAccessibilityEnhancerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI solutions, cloud migration, and digital transformation services. Expert IT consulting and cutting-edge technology solutions.',
  keywords = ['AI solutions', 'cloud migration', 'digital transformation', 'IT consulting', 'technology solutions'],
  canonicalUrl,
  ogImage = '/images/og-image.jpg',
  structuredData
}) => {
  useEffect(() => {
    // Add structured data for better SEO
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
      
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [structuredData]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Accessibility improvements */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="color-scheme" content="light dark" />
    </Helmet>
  );
};

export default SEOAccessibilityEnhancer;
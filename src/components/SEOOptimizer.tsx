import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology.',
  keywords = ['AI solutions', 'enterprise AI', 'quantum computing', 'autonomous systems', 'digital transformation'],
  canonicalUrl = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechCompany",
          "name": "Zion Tech Group",
          "description": description,
          "url": canonicalUrl,
          "logo": "https://ziontechgroup.com/logo.png",
          "foundingDate": "2020",
          "numberOfEmployees": "50-100",
          "industry": "Technology",
          "services": [
            "AI Solutions",
            "Digital Transformation",
            "Cloud Services",
            "Automation",
            "Business Intelligence"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "email": "kleber@ziontechgroup.com"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOOptimizer;
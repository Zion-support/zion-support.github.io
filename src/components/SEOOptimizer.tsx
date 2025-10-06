import React, { type ReactNode, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ 
  children, 
  title = "Zion Tech Group — Revolutionary AI Solutions for Enterprise",
  description = "Transform your business with cutting-edge AI micro SaaS services, cloud automation, and enterprise IT solutions.",
  keywords = ["AI services", "micro SaaS", "IT services", "cloud migration", "DevOps", "SRE", "enterprise software", "AI solutions", "business transformation"],
  canonicalUrl = "https://ziontechgroup.com",
  ogImage = "https://ziontechgroup.com/og-image.jpg",
  structuredData
}) => {
  useEffect(() => {
    // Add structured data to the page
    const defaultStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Revolutionary AI solutions for enterprise",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      }
    };

    const dataToUse = structuredData || defaultStructuredData;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(dataToUse);
    document.head.appendChild(script);
    
    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [structuredData]);

  return (
    <>
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
        <meta property="og:url" content={canonicalUrl} />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Performance hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </Helmet>
      {children}
    </>
  );
};

export default SEOOptimizer;
import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = memo(({
  title = "Zion Tech Group - AI & IT Solutions",
  description = "Leading provider of AI-powered enterprise solutions and digital transformation services. Achieve 300% ROI with our cutting-edge AI technology.",
  keywords = "AI, artificial intelligence, enterprise solutions, digital transformation, IT services",
  canonical,
  ogImage = "https://ziontechgroup.com/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData
}) => {
  useEffect(() => {
    // Update page title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
  }, [title, description, keywords]);

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zion Tech Group",
    description: description,
    url: "https://ziontechgroup.com",
    logo: "https://ziontechgroup.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-302-464-0950",
      contactType: "customer service",
      email: "kleber@ziontechgroup.com",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "364 E Main St STE 1008",
      addressLocality: "Middletown",
      addressRegion: "DE",
      postalCode: "19709",
      addressCountry: "US",
    },
    sameAs: [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup"
    ],
    offers: {
      "@type": "Offer",
      name: "AI Enterprise Transformation Services",
      description: "Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains",
      price: "50000",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || "https://ziontechgroup.com"} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
});

SEOOptimizer.displayName = 'SEOOptimizer';
export default SEOOptimizer;
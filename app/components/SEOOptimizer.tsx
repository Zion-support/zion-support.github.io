import React, { useEffect, useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage: string;
  structuredData: Record<string, unknown>;
  metaTags: Array<{ name: string; content: string }>;
}

interface SEOOptimizerProps {
  pageData?: Partial<SEOData>;
  children: React.ReactNode;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ pageData, children }) => {
  const [seoMetrics, setSeoMetrics] = useState({
    titleLength: 0,
    descriptionLength: 0,
    hasCanonical: false,
    hasStructuredData: false,
    hasOgTags: false,
    score: 0
  });

  const defaultSEOData: SEOData = {
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Transform your business with cutting-edge AI solutions, cloud services, and technology consulting. Expert team delivering innovative results.',
    keywords: ['AI', 'technology', 'cloud services', 'consulting', 'innovation'],
    canonical: '',
    ogImage: '/og-image.jpg',
    structuredData: {},
    metaTags: []
  };

  const seoData = useMemo(() => ({
    ...defaultSEOData,
    ...pageData
  }), [pageData]);

  useEffect(() => {
    // Calculate SEO metrics
    const titleLength = seoData.title.length;
    const descriptionLength = seoData.description.length;
    const hasCanonical = !!seoData.canonical;
    const hasStructuredData = Object.keys(seoData.structuredData).length > 0;
    const hasOgTags = !!seoData.ogImage;

    // Calculate SEO score
    let score = 0;
    if (titleLength >= 30 && titleLength <= 60) score += 25;
    if (descriptionLength >= 120 && descriptionLength <= 160) score += 25;
    if (hasCanonical) score += 15;
    if (hasStructuredData) score += 20;
    if (hasOgTags) score += 15;

    setSeoMetrics({
      titleLength,
      descriptionLength,
      hasCanonical,
      hasStructuredData,
      hasOgTags,
      score
    });
  }, [seoData]);

  const structuredDataScript = seoData.structuredData && Object.keys(seoData.structuredData).length > 0
    ? JSON.stringify(seoData.structuredData)
    : null;

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        
        {seoData.canonical && <link rel="canonical" href={seoData.canonical} />}
        
        {/* Open Graph tags */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.ogImage} />
        
        {/* Additional meta tags */}
        {seoData.metaTags.map((tag, index) => (
          <meta key={index} name={tag.name} content={tag.content} />
        ))}
        
        {/* Structured data */}
        {structuredDataScript && (
          <script type="application/ld+json">
            {structuredDataScript}
          </script>
        )}
      </Helmet>
      
      {children}
    </>
  );
};

export default SEOOptimizer;
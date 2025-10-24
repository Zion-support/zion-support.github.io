'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  twitterCard?: string;
  structuredData?: object;
  children: React.ReactNode;
}

const AdvancedSEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Professional AI and IT solutions for your business. Advanced technology, expert support, and proven results.',
  keywords = 'AI solutions, IT services, technology, business solutions, Zion Tech Group',
  canonicalUrl,
  ogImage = '/images/og-image.jpg',
  twitterCard = 'summary_large_image',
  structuredData,
  children
}) => {
  const [_seoScore, setSeoScore] = useState(0);
  const [_recommendations, setRecommendations] = useState<string[]>([]);

  const analyzeSEO = useCallback(() => {
    if (typeof window === 'undefined') return;

    let score = 0;
    const newRecommendations: string[] = [];

    // Check title length
    if (title.length >= 30 && title.length <= 60) {
      score += 20;
    } else {
      newRecommendations.push('Title should be between 30-60 characters');
    }

    // Check description length
    if (description.length >= 120 && description.length <= 160) {
      score += 20;
    } else {
      newRecommendations.push('Description should be between 120-160 characters');
    }

    // Check for keywords
    if (keywords && keywords.length > 0) {
      score += 15;
    } else {
      newRecommendations.push('Add relevant keywords');
    }

    // Check for canonical URL
    if (canonicalUrl) {
      score += 15;
    } else {
      newRecommendations.push('Add canonical URL');
    }

    // Check for structured data
    if (structuredData) {
      score += 15;
    } else {
      newRecommendations.push('Add structured data');
    }

    // Check for OG image
    if (ogImage) {
      score += 15;
    } else {
      newRecommendations.push('Add Open Graph image');
    }

    setSeoScore(score);
    setRecommendations(newRecommendations);
  }, [title, description, keywords, canonicalUrl, structuredData, ogImage]);

  useEffect(() => {
    analyzeSEO();
  }, [analyzeSEO]);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Structured Data */}
        {structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )}
      </Helmet>
      
      {children}
    </>
  );
};

export default AdvancedSEOOptimizer;
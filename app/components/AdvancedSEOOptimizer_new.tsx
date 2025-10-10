'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
  children?: React.ReactNode;
}

const AdvancedSEOOptimizerNew: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Professional AI and IT solutions by Zion Tech Group. Advanced technology services for modern businesses.',
  keywords = 'AI solutions, IT services, technology consulting, Zion Tech Group',
  canonicalUrl,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  children
}) => {
  const [seoScore, setSeoScore] = useState(0);
  const [recommendations, setRecommendations] = useState<string[]>([]);

  const analyzeSEO = useCallback(() => {
    const issues: string[] = [];
    let score = 100;

    // Check title length
    if (title.length < 30 || title.length > 60) {
      issues.push('Title should be between 30-60 characters');
      score -= 10;
    }

    // Check description length
    if (description.length < 120 || description.length > 160) {
      issues.push('Description should be between 120-160 characters');
      score -= 10;
    }

    // Check for keywords in title
    if (!title.toLowerCase().includes('zion') && !title.toLowerCase().includes('tech')) {
      issues.push('Include brand keywords in title');
      score -= 5;
    }

    // Check for H1 tag
    const h1Tags = document.querySelectorAll('h1');
    if (h1Tags.length === 0) {
      issues.push('Add an H1 tag to your page');
      score -= 15;
    } else if (h1Tags.length > 1) {
      issues.push('Use only one H1 tag per page');
      score -= 5;
    }

    // Check for alt text on images
    const images = document.querySelectorAll('img');
    const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
    if (imagesWithoutAlt.length > 0) {
      issues.push(`Add alt text to ${imagesWithoutAlt.length} images`);
      score -= imagesWithoutAlt.length * 2;
    }

    // Check for internal links
    const internalLinks = document.querySelectorAll('a[href^="/"]');
    if (internalLinks.length < 3) {
      issues.push('Add more internal links (minimum 3)');
      score -= 5;
    }

    setRecommendations(issues);
    setSeoScore(Math.max(0, score));
  }, [title, description]);

  useEffect(() => {
    analyzeSEO();
  }, [analyzeSEO]);

  const generateStructuredData = () => {
    const defaultStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      description: description,
      url: canonicalUrl || window.location.href,
      logo: ogImage,
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup'
      ]
    };

    return structuredData || defaultStructuredData;
  };

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
        <meta property="og:type" content={ogType} />
        <meta property="og:image" content={ogImage} />
        {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(generateStructuredData())}
        </script>
      </Helmet>

      {children}

      {/* SEO Analysis (Development Only) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 right-4 bg-white border rounded-lg shadow-lg p-4 z-50 max-w-sm">
          <h3 className="font-semibold text-sm mb-2">SEO Analysis</h3>
          <div className="text-sm">
            <div className="mb-2">
              <span className="font-medium">Score: </span>
              <span className={`font-bold ${seoScore >= 80 ? 'text-green-600' : seoScore >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                {seoScore}/100
              </span>
            </div>
            {recommendations.length > 0 && (
              <div>
                <div className="font-medium text-xs text-red-600 mb-1">Issues:</div>
                <ul className="text-xs text-red-600 space-y-1">
                  {recommendations.map((rec, index) => (
                    <li key={index}>• {rec}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AdvancedSEOOptimizerNew;
'use client';

import React, { useEffect, useState, useCallback } from 'react';

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
  canonicalUrl: _canonicalUrl,
  ogImage: _ogImage = '/images/og-image.jpg',
  twitterCard: _twitterCard = 'summary_large_image',
  structuredData: _structuredData,
  children,
}) => {
  const [seoScore, setSeoScore] = useState(0);
  const [recommendations, setRecommendations] = useState<string[]>([]);

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

    // Check keywords
    if (keywords && keywords.length > 0) {
      score += 15;
    } else {
      newRecommendations.push('Add relevant keywords');
    }

    // Check for heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length > 0) {
      score += 15;
    } else {
      newRecommendations.push('Add proper heading structure');
    }

    // Check for images with alt text
    const images = document.querySelectorAll('img');
    const imagesWithAlt = document.querySelectorAll('img[alt]');
    if (images.length === imagesWithAlt.length && images.length > 0) {
      score += 15;
    } else {
      newRecommendations.push('Add alt text to all images');
    }

    // Check for internal links
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="./"]');
    if (internalLinks.length > 0) {
      score += 15;
    } else {
      newRecommendations.push('Add internal links');
    }

    setSeoScore(score);
    setRecommendations(newRecommendations);
  }, [title, description, keywords]);

  useEffect(() => {
    analyzeSEO();
  }, [analyzeSEO]);


  return (
    <div className="seo-optimizer">
      {children}
      {process.env.NODE_ENV === 'development' && (
        <div
          className="seo-debug"
          style={{
            position: 'fixed',
            top: '10px',
            right: '10px',
            background: '#000',
            color: '#fff',
            padding: '10px',
            borderRadius: '5px',
            fontSize: '12px',
            zIndex: 9999,
            maxWidth: '300px',
          }}
        >
          <h4>SEO Debug Info</h4>
          <p>Score: {seoScore}/100</p>
          <p>Title: {title.length} chars</p>
          <p>Description: {description.length} chars</p>
          {recommendations.length > 0 && (
            <div>
              <h5>Recommendations:</h5>
              <ul>
                {recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdvancedSEOOptimizer;
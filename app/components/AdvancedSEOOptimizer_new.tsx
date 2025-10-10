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
  children: React.ReactNode
  }
const AdvancedSEOOptimizerNew: React.FC<SEOOptimizerProps> = ()
}) => {
    const [seoScore, setSeoScore] = useState(0);
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const analyzeSEO = useCallback(() => {;
    if (typeof window === 'undefined') return;
    let score = 0;
    const newRecommendations: string[] = [],
    // Check title length
    if (title.length >= 30 && title.length <= 60) {
      score += 20
  } else {
    newRecommendations.push('Title should be between 30-60 characters')
  }
    // Check description length
    if (description.length >= 120 && description.length <= 160) {
    score += 20
  } else {
    newRecommendations.push('Description should be between 120-160 characters')
  }
    // Check for keywords in title
    if (keywords && title.toLowerCase().includes(keywords.toLowerCase().split(',')[0])) {
    score += 15
  } else {
    newRecommendations.push('Include primary keyword in title')
  }
    // Check for keywords in description
    if (keywords && description.toLowerCase().includes(keywords.toLowerCase().split(',')[0])) {
    score += 15
  } else {
    newRecommendations.push('Include primary keyword in description')
  }
    // Check for heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length > 0) {
    score += 10
  } else {
    newRecommendations.push('Add proper heading structure')
  }
    // Check for images with alt text
    const images = document.querySelectorAll('img');
    const imagesWithAlt = document.querySelectorAll('img[alt]');
    if (images.length === imagesWithAlt.length && images.length > 0) {
    score += 10
  } else {
    newRecommendations.push('Add alt text to all images')
  }
    // Check for internal links
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="./"]');
    if (internalLinks.length > 0) {
    score += 10
  } else {
    newRecommendations.push('Add internal links for better SEO')
  }
    setSeoScore(score);
    setRecommendations(newRecommendations);
  }, [title, description, keywords]);
  useEffect(() => {
    analyzeSEO()
  }, [analyzeSEO]);
  const generateStructuredData = const generateStructuredData = const generateStructuredData = () => {
    const defaultStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": description,
      "url": canonicalUrl || (typeof window !== 'undefined' ? window.location.origin : ''),
      "logo": ogImage,
      "sameAs": [
        "https://twitter.com/ziontechgroup",
        "https://linkedin.com/company/ziontechgroup"
      ];
    };
    return structuredData || defaultStructuredData;
  }
  return() {JSON.stringify(generateStructuredData())}
        </script>
      </Helmet>
      {children},
    {process.env.NODE_ENV === 'development' && ()
          background: 'rgba(0,0,0,0.8)',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          fontSize: '12px',
          zIndex: 1000,
          maxWidth: '300px'
        }}></div>
          <div>SEO Score: {seoScore}/100</div>
          {recommendations.length > 0 && ()
                {recommendations.map((rec, index) => ()
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AdvancedSEOOptimizerNew
  </SEOOptimizerProps>

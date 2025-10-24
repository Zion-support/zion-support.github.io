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
  children,
}) => {
  const [seoScore, setSeoScore] = useState(0);
  const [seoIssues, setSeoIssues] = useState<string[]>([]);

  const analyzeSEO = useCallback(() => {
    if (typeof window === 'undefined') return;

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

    // Check for H1 tags
    const h1Tags = document.querySelectorAll('h1');
    if (h1Tags.length === 0) {
      issues.push('Page should have at least one H1 tag');
      score -= 15;
    } else if (h1Tags.length > 1) {
      issues.push('Page should have only one H1 tag');
      score -= 5;
    }

    // Check for alt text on images
    const images = document.querySelectorAll('img');
    const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
    if (imagesWithoutAlt.length > 0) {
      issues.push(`${imagesWithoutAlt.length} images missing alt text`);
      score -= imagesWithoutAlt.length * 2;
    }

    // Check for internal links
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="./"]');
    if (internalLinks.length < 3) {
      issues.push('Page should have at least 3 internal links');
      score -= 10;
    }

    // Check for meta viewport
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      issues.push('Missing viewport meta tag');
      score -= 10;
    }

    setSeoIssues(issues);
    setSeoScore(Math.max(0, score));
  }, [title, description]);

  useEffect(() => {
    analyzeSEO();
  }, [analyzeSEO]);

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": description,
    "url": canonicalUrl || window.location.href,
    "logo": ogImage,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "customer service"
    }
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        
        {/* Open Graph tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData || defaultStructuredData)}
        </script>
      </Helmet>
      
      <div className="seo-optimizer">
        {seoScore < 80 && (
          <div className="seo-warning">
            <h4>SEO Score: {seoScore}/100</h4>
            <ul>
              {seoIssues.map((issue, index) => (
                <li key={index}>{issue}</li>
              ))}
            </ul>
          </div>
        )}
        
        {children}
      </div>
    </>
  );
};

export default AdvancedSEOOptimizer;
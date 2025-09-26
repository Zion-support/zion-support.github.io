import React, { useEffect, useState } from 'react';
import Head from 'next/head';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage: string;
  twitterCard: string;
  structuredData: any;
}

interface SEOOptimizerProps {
  seoData: SEOData;
  className?: string;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ seoData, className = '' }) => {
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    // Check if SEO is optimized
    const checkSEOOptimization = () => {
      const title = document.querySelector('title');
      const metaDescription = document.querySelector('meta[name="description"]');
      const canonical = document.querySelector('link[rel="canonical"]');
      
      const hasTitle = title && title.textContent?.length > 0;
      const hasDescription = metaDescription && metaDescription.getAttribute('content')?.length > 0;
      const hasCanonical = canonical && canonical.getAttribute('href')?.length > 0;
      
      setIsOptimized(hasTitle && hasDescription && hasCanonical);
    };

    checkSEOOptimization();
  }, []);

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href={seoData.canonical} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content={seoData.twitterCard} />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.ogImage} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoData.structuredData)
          }}
        />
      </Head>
      
      <div className={`seo-optimizer ${className}`}>
        <div className="seo-status">
          <div className={`status-indicator ${isOptimized ? 'optimized' : 'not-optimized'}`}>
            {isOptimized ? '✓ SEO Optimized' : '⚠ SEO Needs Optimization'}
          </div>
        </div>
      </div>
    </>
  );
};

export default SEOOptimizer;
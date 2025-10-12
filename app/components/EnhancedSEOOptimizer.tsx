import React from 'react';
<<<<<<< HEAD

interface SEOOptimizerProps {
  className?: string;
}

const EnhancedSEOOptimizer: React.FC<SEOOptimizerProps> = ({ className = '' }) => {
  return (
    <div className={`seo-optimizer ${className}`}>
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
        <h3 className="text-xl font-semibold text-white mb-4">SEO Optimization</h3>
        <p className="text-gray-300 mb-4">
          Our advanced SEO optimization tools help improve your website's search engine rankings.
        </p>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Page Speed</span>
            <span className="text-green-400">95/100</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Mobile Friendly</span>
            <span className="text-green-400">✓</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-300">SEO Score</span>
            <span className="text-green-400">A+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedSEOOptimizer;
=======
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
}

const EnhancedSEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered solutions, IT services, 5G implementation, and micro SAAS platforms. 99.8% client satisfaction, 24/7 support.',
  keywords = 'AI solutions, artificial intelligence, IT services, 5G implementation, micro SAAS, cloud migration, cybersecurity, mobile development, machine learning, enterprise technology, digital transformation, Zion Tech Group, Delaware technology company',
  canonical,
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "Delaware"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || 'https://ziontechgroup.com'} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* SEO */}
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
};

export default EnhancedSEO;
>>>>>>> cursor/fix-errors-and-merge-to-main-c493

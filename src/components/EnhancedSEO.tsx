import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon,
  ChartBarIcon,
  CogIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  ogType: string;
  twitterCard: string;
  structuredData?: any;
}

interface SEOAnalysis {
  score: number;
  issues: string[];
  suggestions: string[];
  metaTags: {
    title: boolean;
    description: boolean;
    keywords: boolean;
    canonical: boolean;
    ogTags: boolean;
    twitterTags: boolean;
    structuredData: boolean;
  };
}

interface EnhancedSEOProps {
  seoData: SEOData;
  pageType?: 'home' | 'service' | 'blog' | 'about' | 'contact';
  showAnalysis?: boolean;
  className?: string;
}

export const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  seoData,
  pageType = 'home',
  showAnalysis = false,
  className = ''
}) => {
  const [seoAnalysis, setSeoAnalysis] = useState<SEOAnalysis | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  // Generate structured data based on page type
  const generateStructuredData = (data: SEOData, type: string) => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "description": data.description,
      "sameAs": [
        "https://linkedin.com/company/ziontechgroup",
        "https://twitter.com/ziontechgroup",
        "https://github.com/Zion-Holdings"
      ]
    };

    switch (type) {
      case 'home':
        return {
          ...baseData,
          "@type": "WebSite",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://ziontechgroup.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };
      
      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.title,
          "description": data.description,
          "provider": {
            "@type": "Organization",
            "name": "Zion Tech Group"
          },
          "serviceType": "AI & Technology Solutions",
          "areaServed": "Worldwide"
        };
      
      case 'blog':
        return {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": data.title,
          "description": data.description,
          "author": {
            "@type": "Organization",
            "name": "Zion Tech Group"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Zion Tech Group"
          },
          "datePublished": new Date().toISOString(),
          "dateModified": new Date().toISOString()
        };
      
      default:
        return baseData;
    }
  };

  // Analyze SEO data
  const analyzeSEO = (data: SEOData): SEOAnalysis => {
    const issues: string[] = [];
    const suggestions: string[] = [];
    let score = 100;

    // Check title
    if (!data.title || data.title.length < 30 || data.title.length > 60) {
      issues.push("Title should be between 30-60 characters");
      score -= 20;
    }

    // Check description
    if (!data.description || data.description.length < 120 || data.description.length > 160) {
      issues.push("Description should be between 120-160 characters");
      score -= 20;
    }

    // Check keywords
    if (!data.keywords || data.keywords.length === 0) {
      issues.push("Keywords are missing");
      score -= 15;
    } else if (data.keywords.length < 3) {
      suggestions.push("Consider adding more relevant keywords");
    }

    // Check canonical URL
    if (!data.canonicalUrl) {
      issues.push("Canonical URL is missing");
      score -= 10;
    }

    // Check OG image
    if (!data.ogImage) {
      issues.push("Open Graph image is missing");
      score -= 10;
    }

    // Check structured data
    if (!data.structuredData) {
      suggestions.push("Consider adding structured data for better search results");
      score -= 5;
    }

    // Ensure score doesn't go below 0
    score = Math.max(0, score);

    return {
      score,
      issues,
      suggestions,
      metaTags: {
        title: !!data.title,
        description: !!data.description,
        keywords: !!data.keywords && data.keywords.length > 0,
        canonical: !!data.canonicalUrl,
        ogTags: !!data.ogImage && !!data.ogType,
        twitterTags: !!data.twitterCard,
        structuredData: !!data.structuredData
      }
    };
  };

  useEffect(() => {
    const analysis = analyzeSEO(seoData);
    setSeoAnalysis(analysis);
  }, [seoData]);

  // Generate enhanced structured data
  const enhancedStructuredData = generateStructuredData(seoData, pageType);

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href={seoData.canonicalUrl} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta property="og:type" content={seoData.ogType} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content={seoData.twitterCard} />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.ogImage} />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(enhancedStructuredData)}
        </script>
      </Helmet>

      {/* SEO Analysis Dashboard */}
      {showAnalysis && seoAnalysis && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`fixed top-4 right-4 w-96 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 ${className}`}
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <MagnifyingGlassIcon className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  SEO Analysis
                </h3>
              </div>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <CogIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Score */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  SEO Score
                </span>
                <span className="text-2xl font-bold text-blue-600">
                  {seoAnalysis.score}/100
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    seoAnalysis.score >= 80 ? 'bg-green-500' :
                    seoAnalysis.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${seoAnalysis.score}%` }}
                ></div>
              </div>
            </div>

            {/* Meta Tags Status */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Meta Tags Status
              </h4>
              <div className="space-y-2">
                {Object.entries(seoAnalysis.metaTags).map(([tag, present]) => (
                  <div key={tag} className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                      {tag.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    {present ? (
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                    ) : (
                      <ExclamationTriangleIcon className="w-4 h-4 text-red-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Issues */}
            {seoAnalysis.issues.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-medium text-red-600 mb-3 flex items-center gap-2">
                  <ExclamationTriangleIcon className="w-4 h-4" />
                  Issues Found
                </h4>
                <div className="space-y-2">
                  {seoAnalysis.issues.map((issue, index) => (
                    <div key={index} className="text-xs text-red-600 bg-red-50 dark:bg-red-900/20 p-2 rounded">
                      {issue}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Suggestions */}
            {seoAnalysis.suggestions.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-medium text-blue-600 mb-3 flex items-center gap-2">
                  <InformationCircleIcon className="w-4 h-4" />
                  Suggestions
                </h4>
                <div className="space-y-2">
                  {seoAnalysis.suggestions.map((suggestion, index) => (
                    <div key={index} className="text-xs text-blue-600 bg-blue-50 dark:bg-blue-900/20 p-2 rounded">
                      {suggestion}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Quick Actions
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <button className="text-xs bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-2 rounded transition-colors">
                  Fix Issues
                </button>
                <button className="text-xs bg-green-100 hover:bg-green-200 text-green-700 px-3 py-2 rounded transition-colors">
                  Optimize
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default EnhancedSEO;
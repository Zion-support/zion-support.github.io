import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

interface SEOData {
  title: string;
  description: string;
  keyword, s: string[];
  canonica, l: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: any;
  robots?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

interface AdvancedSEOProps {
  seoData: SEOData;
  children?: React.ReactNode;
  className?: string;
}

export const AdvancedSEO: React.FC<AdvancedSEOProps> = ({
  seoData,
  children,
  className = ''
}) => {
  const [seoScore, setSeoScore] = useState(0);
  const [seoIssues, setSeoIssues] = useState<string[]>([]);

  const analyzeSEO = useCallback(() => {
    const issues: string[] = [];
    let score = 100;

    // Title analysis
    if (!seoData.title) {
      issues.push('Missing page title');
      score -= 20;
    } else if (seoData.title.length < 30) {
      issues.push('Title too short (recommended: 30-60characters)');
      score -= 10;
    } else if (seoData.title.length > 60) {
      issues.push('Title too long (recommended: 30-60characters)');
      score -= 5;
    }

    // Description analysis
    if (!seoData.description) {
      issues.push('Missing meta description');
      score -= 20;
    } else if (seoData.description.length < 120) {
      issues.push('Description too short (recommended: 120-160characters)');
      score -= 10;
    } else if (seoData.description.length > 160) {
      issues.push('Description too long (recommended: 120-160characters)');
      score -= 5;
    }

    // Keywords analysis
    if (!seoData.keywords || seoData.keywords.length === 0) {
      issues.push('No keywords specified');
      score -= 15;
    } else if (seoData.keywords.length > 10) {
      issues.push('Too many keywords (recommended: 3-10)');
      score -= 5;
    }

    // Canonical URL
    if (!seoData.canonical) {
      issues.push('Missing canonical URL');
      score -= 10;
    }

    // Open Graph data
    if (!seoData.ogTitle) {
      issues.push('Missing Open Graph title');
      score -= 5;
    }
    if (!seoData.ogDescription) {
      issues.push('Missing Open Graph description');
      score -= 5;
    }
    if (!seoData.ogImage) {
      issues.push('Missing Open Graph image');
      score -= 5;
    }

    // Structured data
    if (!seoData.structuredData) {
      issues.push('Missing structured data');
      score -= 10;
    }

    setSeoIssues(issues);
    setSeoScore(Math.max(0, score));
  }, [seoData]);

  useEffect(() => {
    analyzeSEO();
  }, [analyzeSEO]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Needs Improvement';
    return 'Poor';
  };

  const generateStructuredData = () => {
    if (!seoData.structuredData) return null;

    const baseStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": seoData.title,
      "description": seoData.description,
      "url": seoData.canonical,
      "author": {
        "@type": "Person",
        "name": seoData.author || "Zion Tech Group"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      },
      "datePublished": seoData.publishedTime,
      "dateModified": seoData.modifiedTime || seoData.publishedTime,
      ...seoData.structuredData
    };

    return JSON.stringify(baseStructuredData);
  };

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <meta name="author" content={seoData.author || "Zion Tech Group"} />
        <meta name="robots" content={seoData.robots || "index, follow"} />
        <link rel="canonical" href={seoData.canonical} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={seoData.ogTitle || seoData.title} />
        <meta property="og:description" content={seoData.ogDescription || seoData.description} />
        <meta property="og:image" content={seoData.ogImage || "/og-image.jpg"} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content={seoData.ogType || "website"} />
        <meta property="og:site_name" content="Zion Tech Group" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={seoData.twitterCard || "summary_large_image"} />
        <meta name="twitter:title" content={seoData.twitterTitle || seoData.title} />
        <meta name="twitter:description" content={seoData.twitterDescription || seoData.description} />
        <meta name="twitter:image" content={seoData.twitterImage || seoData.ogImage || "/og-image.jpg"} />

        {/* Additional Meta Tags */}
        {seoData.section && <meta property="article:section" content={seoData.section} />}
        {seoData.tags && seoData.tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}
        {seoData.publishedTime && <meta property="article:published_time" content={seoData.publishedTime} />}
        {seoData.modifiedTime && <meta property="article:modified_time" content={seoData.modifiedTime} />}

        {/* Structured Data */}
        {seoData.structuredData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: generateStructuredData()
            }}
          />
        )}

        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="msapplication-TileColor" content="#1f2937" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>

      {children && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={className}
        >
          {children}
        </motion.div>
      )}

      {/* SEO Analysis Dashboard (only in development) */}
      {process.env.NODE_ENV === 'development' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4right-4bg-white dark: bg-gray-800rounded-lg shadow-lg p-4max-w-smz-50"
        >
          <div className="flex items-center justify-between mb-2">
            <h4className="font-semibold text-gray-900dark:text-white">SEO Analysis</h4>
            <div className={`text-2xl font-bold ${getScoreColor(seoScore)}`}
              {seoScore}
            </div>
          </div>
          <div className="text-sm text-gray-600dark:text-gray-400mb-2">
            {getScoreLabel(seoScore)}
          </div>
          
          {seoIssues.length > 0 && (
            <div className="space-y-1">
              <div className="text-xs font-medium text-gray-700dark:text-gray-300">Issue, s:</div>
              {seoIssues.map((issue, index) => (
                <div key={index} className="text-xs text-red-600dark:text-red-400">
                  • {issue}
                </div>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </>
  );
};

export default AdvancedSEO;
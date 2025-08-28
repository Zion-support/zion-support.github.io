import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Search, 
  TrendingUp, 
  BarChart3, 
  Globe, 
  Smartphone, 
  Zap,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';

interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  noindex?: boolean;
  canonical?: string;
  structuredData?: object;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  noindex?: boolean;
  canonical?: string;
  structuredData?: object;
  data?: SEOData;
  className?: string;
  showAnalysis?: boolean;
}

interface SEOAnalysis {
  titleLength: 'good' | 'warning' | 'poor';
  descriptionLength: 'good' | 'warning' | 'poor';
  keywordDensity: 'good' | 'warning' | 'poor';
  hasStructuredData: boolean;
  hasCanonical: boolean;
  hasOpenGraph: boolean;
  hasTwitterCard: boolean;
  score: number;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = 'AI, artificial intelligence, quantum computing, business automation, Zion Tech Group, technology solutions, digital transformation',
  author = 'Zion Tech Group',
  image = '/images/zion-tech-group-og.jpg',
  url = window.location.href,
  type = 'website',
  noindex = false,
  canonical,
  structuredData,
  data,
  className = '',
  showAnalysis = false
}) => {
  const [analysis, setAnalysis] = useState<SEOAnalysis | null>(null);

  // Use data prop if provided, otherwise use individual props
  const seoData: SEOData = data || {
    title: title || '',
    description: description || '',
    keywords: keywords || '',
    author: author || '',
    image: image || '',
    url: url || '',
    type: type || 'website',
    noindex: noindex || false,
    canonical: canonical || '',
    structuredData: structuredData || undefined
  };

  useEffect(() => {
    if (showAnalysis) {
      const seoAnalysis = analyzeSEO(seoData);
      setAnalysis(seoAnalysis);
    }
  }, [seoData, showAnalysis]);

  const analyzeSEO = (seoData: SEOData): SEOAnalysis => {
    let score = 0;
    
    // Title length analysis (50-60 characters is optimal)
    const titleLength = seoData.title.length;
    let titleLengthStatus: 'good' | 'warning' | 'poor';
    if (titleLength >= 50 && titleLength <= 60) {
      titleLengthStatus = 'good';
      score += 25;
    } else if (titleLength >= 30 && titleLength <= 70) {
      titleLengthStatus = 'warning';
      score += 15;
    } else {
      titleLengthStatus = 'poor';
      score += 5;
    }

    // Description length analysis (150-160 characters is optimal)
    const descriptionLength = seoData.description.length;
    let descriptionLengthStatus: 'good' | 'warning' | 'poor';
    if (descriptionLength >= 150 && descriptionLength <= 160) {
      descriptionLengthStatus = 'good';
      score += 25;
    } else if (descriptionLength >= 120 && descriptionLength <= 200) {
      descriptionLengthStatus = 'warning';
      score += 15;
    } else {
      descriptionLengthStatus = 'poor';
      score += 5;
    }

    // Keyword density analysis
    const content = `${seoData.title} ${seoData.description}`.toLowerCase();
    const keywordsArray = typeof seoData.keywords === 'string' ? seoData.keywords.split(',').map(k => k.trim()) : [];
    const keywordDensity = keywordsArray.reduce((total, keyword) => {
      const regex = new RegExp(keyword.toLowerCase(), 'g');
      const matches = content.match(regex);
      return total + (matches ? matches.length : 0);
    }, 0);
    
    let keywordDensityStatus: 'good' | 'warning' | 'poor';
    if (keywordDensity >= 2 && keywordDensity <= 5) {
      keywordDensityStatus = 'good';
      score += 20;
    } else if (keywordDensity >= 1 && keywordDensity <= 7) {
      keywordDensityStatus = 'warning';
      score += 10;
    } else {
      keywordDensityStatus = 'poor';
      score += 5;
    }

    // Additional checks
    const hasStructuredData = !!seoData.structuredData;
    const hasCanonical = !!seoData.canonical;
    const hasOpenGraph = !!seoData.image;
    const hasTwitterCard = !!seoData.image;

    if (hasStructuredData) score += 10;
    if (hasCanonical) score += 5;
    if (hasOpenGraph) score += 5;
    if (hasTwitterCard) score += 5;

    return {
      titleLength: titleLengthStatus,
      descriptionLength: descriptionLengthStatus,
      keywordDensity: keywordDensityStatus,
      hasStructuredData,
      hasCanonical,
      hasOpenGraph,
      hasTwitterCard,
      score
    };
  };

  const fullTitle = seoData.title.includes('Zion Tech Group') ? seoData.title : `${seoData.title} - Zion Tech Group`;
  const fullUrl = seoData.canonical || seoData.url;
  
  // Default structured data for Zion Tech Group
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
    "description": "Leading provider of AI-powered business solutions, quantum computing, and autonomous business operations",
    "foundingDate": "2015",
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://facebook.com/ziontechgroup"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "areaServed": "Worldwide"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "streetAddress": "364 E Main St STE 1008"
    }
  };

  const finalStructuredData = seoData.structuredData || defaultStructuredData;

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{fullTitle}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="author" content={seoData.author} />
        
        {/* Robots Meta */}
        {seoData.noindex ? (
          <meta name="robots" content="noindex, nofollow" />
        ) : (
          <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        )}
        
        {/* Canonical URL */}
        <link rel="canonical" href={fullUrl} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content={seoData.type} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ziontechgroup" />
        <meta name="twitter:creator" content="@ziontechgroup" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        
        {/* Performance Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="date=no" />
        <meta name="format-detection" content="address=no" />
        <meta name="format-detection" content="email=no" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(finalStructuredData)}
        </script>
      </Helmet>

      {/* SEO Analysis Display */}
      {showAnalysis && analysis && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 max-w-sm ${className}`}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
              <Search className="w-4 h-4 text-blue-500" />
              <span>SEO Analysis</span>
            </h3>
            <div className={`text-lg font-bold ${
              analysis.score >= 80 ? 'text-green-500' :
              analysis.score >= 60 ? 'text-yellow-500' : 'text-red-500'
            }`}>
              {analysis.score}/100
            </div>
          </div>

          <div className="space-y-3">
            {/* Title Length */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Title Length</span>
              <div className="flex items-center space-x-2">
                {analysis.titleLength === 'good' && <CheckCircle className="w-4 h-4 text-green-500" />}
                {analysis.titleLength === 'warning' && <AlertTriangle className="w-4 h-4 text-yellow-500" />}
                {analysis.titleLength === 'poor' && <AlertTriangle className="w-4 h-4 text-red-500" />}
                <span className={`text-xs font-medium ${
                  analysis.titleLength === 'good' ? 'text-green-600' :
                  analysis.titleLength === 'warning' ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {analysis.titleLength}
                </span>
              </div>
            </div>

            {/* Description Length */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Description</span>
              <div className="flex items-center space-x-2">
                {analysis.descriptionLength === 'good' && <CheckCircle className="w-4 h-4 text-green-500" />}
                {analysis.descriptionLength === 'warning' && <AlertTriangle className="w-4 h-4 text-yellow-500" />}
                {analysis.descriptionLength === 'poor' && <AlertTriangle className="w-4 h-4 text-red-500" />}
                <span className={`text-xs font-medium ${
                  analysis.descriptionLength === 'good' ? 'text-green-600' :
                  analysis.descriptionLength === 'warning' ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {analysis.descriptionLength}
                </span>
              </div>
            </div>

            {/* Keyword Density */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Keywords</span>
              <div className="flex items-center space-x-2">
                {analysis.keywordDensity === 'good' && <CheckCircle className="w-4 h-4 text-green-500" />}
                {analysis.keywordDensity === 'warning' && <AlertTriangle className="w-4 h-4 text-yellow-500" />}
                {analysis.keywordDensity === 'poor' && <AlertTriangle className="w-4 h-4 text-red-500" />}
                <span className={`text-xs font-medium ${
                  analysis.keywordDensity === 'good' ? 'text-green-600' :
                  analysis.keywordDensity === 'warning' ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {analysis.keywordDensity}
                </span>
              </div>
            </div>

            {/* Additional Checks */}
            <div className="pt-2 border-t border-gray-200 dark:border-gray-600">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center space-x-2">
                  {analysis.hasStructuredData ? <CheckCircle className="w-3 h-3 text-green-500" /> : <AlertTriangle className="w-3 h-3 text-red-500" />}
                  <span className="text-gray-600 dark:text-gray-400">Structured Data</span>
                </div>
                <div className="flex items-center space-x-2">
                  {analysis.hasCanonical ? <CheckCircle className="w-3 h-3 text-green-500" /> : <AlertTriangle className="w-3 h-3 text-red-500" />}
                  <span className="text-gray-600 dark:text-gray-400">Canonical</span>
                </div>
                <div className="flex items-center space-x-2">
                  {analysis.hasOpenGraph ? <CheckCircle className="w-3 h-3 text-green-500" /> : <AlertTriangle className="w-3 h-3 text-red-500" />}
                  <span className="text-gray-600 dark:text-gray-400">Open Graph</span>
                </div>
                <div className="flex items-center space-x-2">
                  {analysis.hasTwitterCard ? <CheckCircle className="w-3 h-3 text-green-500" /> : <AlertTriangle className="w-3 h-3 text-red-500" />}
                  <span className="text-gray-600 dark:text-gray-400">Twitter Card</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};
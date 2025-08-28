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
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  ogType: string;
  twitterCard: string;
  structuredData?: object;
}

interface SEOProps {
  data: SEOData;
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
  data, 
  className = '',
  showAnalysis = false 
}) => {
  const [analysis, setAnalysis] = useState<SEOAnalysis | null>(null);

  useEffect(() => {
    if (showAnalysis) {
      const seoAnalysis = analyzeSEO(data);
      setAnalysis(seoAnalysis);
    }
  }, [data, showAnalysis]);

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
    const keywordDensity = seoData.keywords.reduce((total, keyword) => {
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

    // Additional factors
    if (seoData.structuredData) score += 10;
    if (seoData.canonicalUrl) score += 10;
    if (seoData.ogImage) score += 5;
    if (seoData.ogType) score += 5;

    return {
      titleLength: titleLengthStatus,
      descriptionLength: descriptionLengthStatus,
      keywordDensity: keywordDensityStatus,
      hasStructuredData: !!seoData.structuredData,
      hasCanonical: !!seoData.canonicalUrl,
      hasOpenGraph: !!(seoData.ogImage && seoData.ogType),
      hasTwitterCard: !!seoData.twitterCard,
      score: Math.min(score, 100)
    };
  };

  const getStatusIcon = (status: 'good' | 'warning' | 'poor') => {
    switch (status) {
      case 'good':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'poor':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
    }
  };

  const getStatusColor = (status: 'good' | 'warning' | 'poor') => {
    switch (status) {
      case 'good':
        return 'text-green-500';
      case 'warning':
        return 'text-yellow-500';
      case 'poor':
        return 'text-red-500';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Fair';
    return 'Poor';
  };

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta name="keywords" content={data.keywords.join(', ')} />
        
        {/* Canonical URL */}
        {data.canonicalUrl && <link rel="canonical" href={data.canonicalUrl} />}
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:type" content={data.ogType} />
        <meta property="og:url" content={data.canonicalUrl} />
        {data.ogImage && <meta property="og:image" content={data.ogImage} />}
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={data.twitterCard} />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.description} />
        {data.ogImage && <meta name="twitter:image" content={data.ogImage} />}
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Structured Data */}
        {data.structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(data.structuredData)}
          </script>
        )}
      </Helmet>

      {/* SEO Analysis Panel */}
      {showAnalysis && analysis && (
        <motion.div
          className={`fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 w-96 max-h-[80vh] overflow-y-auto ${className}`}
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Search className="w-6 h-6 text-cyan-500" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                SEO Analysis
              </h3>
            </div>
            <div className="flex items-center space-x-2">
              <div className={`text-2xl font-bold ${getScoreColor(analysis.score)}`}>
                {analysis.score}
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {getScoreLabel(analysis.score)}
              </span>
            </div>
          </div>

          {/* Score Breakdown */}
          <div className="space-y-4">
            {/* Title Length */}
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                {getStatusIcon(analysis.titleLength)}
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Title Length
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {data.title.length} characters
                  </div>
                </div>
              </div>
              <span className={`text-sm font-medium ${getStatusColor(analysis.titleLength)}`}>
                {analysis.titleLength === 'good' ? 'Optimal' : 
                 analysis.titleLength === 'warning' ? 'Good' : 'Needs Work'}
              </span>
            </div>

            {/* Description Length */}
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                {getStatusIcon(analysis.descriptionLength)}
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Description Length
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {data.description.length} characters
                  </div>
                </div>
              </div>
              <span className={`text-sm font-medium ${getStatusColor(analysis.descriptionLength)}`}>
                {analysis.descriptionLength === 'good' ? 'Optimal' : 
                 analysis.descriptionLength === 'warning' ? 'Good' : 'Needs Work'}
              </span>
            </div>

            {/* Keyword Density */}
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                {getStatusIcon(analysis.keywordDensity)}
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Keyword Density
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {data.keywords.join(', ')}
                  </div>
                </div>
              </div>
              <span className={`text-sm font-medium ${getStatusColor(analysis.keywordDensity)}`}>
                {analysis.keywordDensity === 'good' ? 'Optimal' : 
                 analysis.keywordDensity === 'warning' ? 'Good' : 'Needs Work'}
              </span>
            </div>
          </div>

          {/* Technical SEO */}
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Technical SEO
            </h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Structured Data</span>
                <div className="flex items-center space-x-2">
                  {analysis.hasStructuredData ? 
                    <CheckCircle className="w-4 h-4 text-green-500" /> : 
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                  }
                  <span className={analysis.hasStructuredData ? 'text-green-500' : 'text-red-500'}>
                    {analysis.hasStructuredData ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Canonical URL</span>
                <div className="flex items-center space-x-2">
                  {analysis.hasCanonical ? 
                    <CheckCircle className="w-4 h-4 text-green-500" /> : 
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                  }
                  <span className={analysis.hasCanonical ? 'text-green-500' : 'text-red-500'}>
                    {analysis.hasCanonical ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Open Graph</span>
                <div className="flex items-center space-x-2">
                  {analysis.hasOpenGraph ? 
                    <CheckCircle className="w-4 h-4 text-green-500" /> : 
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                  }
                  <span className={analysis.hasOpenGraph ? 'text-green-500' : 'text-red-500'}>
                    {analysis.hasOpenGraph ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Twitter Cards</span>
                <div className="flex items-center space-x-2">
                  {analysis.hasTwitterCard ? 
                    <CheckCircle className="w-4 h-4 text-green-500" /> : 
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                  }
                  <span className={analysis.hasTwitterCard ? 'text-green-500' : 'text-red-500'}>
                    {analysis.hasTwitterCard ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Recommendations
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {analysis.titleLength !== 'good' && (
                <div className="flex items-start space-x-2">
                  <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>
                    {analysis.titleLength === 'warning' 
                      ? 'Title length is good but could be optimized for better click-through rates.'
                      : 'Title is too short or too long. Aim for 50-60 characters for optimal SEO performance.'
                    }
                  </span>
                </div>
              )}
              
              {analysis.descriptionLength !== 'good' && (
                <div className="flex items-start space-x-2">
                  <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>
                    {analysis.descriptionLength === 'warning'
                      ? 'Description length is acceptable but could be optimized for better search results display.'
                      : 'Description is too short or too long. Aim for 150-160 characters for optimal display in search results.'
                    }
                  </span>
                </div>
              )}
              
              {!analysis.hasStructuredData && (
                <div className="flex items-start space-x-2">
                  <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Add structured data to help search engines better understand your content and display rich snippets.</span>
                </div>
              )}
              
              {!analysis.hasCanonical && (
                <div className="flex items-start space-x-2">
                  <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Add a canonical URL to prevent duplicate content issues and improve SEO performance.</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default SEO;
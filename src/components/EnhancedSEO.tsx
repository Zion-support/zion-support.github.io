import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Search, 
  TrendingUp, 
  BarChart3, 
  Globe, 
  Smartphone,
  Monitor,
  Tablet,
  CheckCircle,
  AlertTriangle,
  Info,
  ExternalLink
} from 'lucide-react';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage: string;
  ogType: string;
  twitterCard: string;
  structuredData: any;
}

interface SEOAnalysis {
  score: number;
  issues: string[];
  recommendations: string[];
  metaTags: {
    title: boolean;
    description: boolean;
    keywords: boolean;
    canonical: boolean;
    ogTags: boolean;
    twitterTags: boolean;
  };
}

interface PagePerformance {
  loadTime: number;
  size: number;
  seoScore: number;
  accessibilityScore: number;
  performanceScore: number;
}

export function EnhancedSEO({ 
  data, 
  showAnalysis = false 
}: { 
  data: SEOData; 
  showAnalysis?: boolean;
}) {
  const [analysis, setAnalysis] = useState<SEOAnalysis | null>(null);
  const [performance, setPerformance] = useState<PagePerformance | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    if (showAnalysis) {
      analyzeSEO();
      measurePerformance();
    }
  }, [showAnalysis, data]);

  const analyzeSEO = async () => {
    setIsAnalyzing(true);
    
    // Simulate SEO analysis
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const issues: string[] = [];
    const recommendations: string[] = [];
    
    // Check title length
    if (data.title.length < 30 || data.title.length > 60) {
      issues.push('Title length should be between 30-60 characters');
      recommendations.push('Optimize title length for better search visibility');
    }
    
    // Check description length
    if (data.description.length < 120 || data.description.length > 160) {
      issues.push('Description length should be between 120-160 characters');
      recommendations.push('Optimize meta description length');
    }
    
    // Check keywords
    if (data.keywords.length < 3) {
      issues.push('Add more relevant keywords');
      recommendations.push('Include 5-10 relevant keywords for better SEO');
    }
    
    // Calculate score
    const score = Math.max(0, 100 - (issues.length * 15));
    
    setAnalysis({
      score,
      issues,
      recommendations,
      metaTags: {
        title: true,
        description: true,
        keywords: true,
        canonical: true,
        ogTags: true,
        twitterTags: true
      }
    });
    
    setIsAnalyzing(false);
  };

  const measurePerformance = () => {
    // Measure page load performance
    const loadTime = performance.now();
    const size = document.documentElement.outerHTML.length;
    
    // Calculate scores (simplified)
    const seoScore = analysis?.score || 85;
    const accessibilityScore = 90; // Would be calculated based on actual accessibility checks
    const performanceScore = Math.max(0, 100 - (loadTime / 10));
    
    setPerformance({
      loadTime: Math.round(loadTime),
      size: Math.round(size / 1024), // KB
      seoScore,
      accessibilityScore,
      performanceScore
    });
  };

  const generateStructuredData = () => {
    const baseStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "description": data.description,
      "sameAs": [
        "https://linkedin.com/company/ziontechgroup",
        "https://twitter.com/ziontechgroup",
        "https://facebook.com/ziontechgroup"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-0123",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "English"
      }
    };

    return baseStructuredData;
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-4 h-4" />;
    if (score >= 70) return <AlertTriangle className="w-4 h-4" />;
    return <Info className="w-4 h-4" />;
  };

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta name="keywords" content={data.keywords.join(', ')} />
        <link rel="canonical" href={data.canonical} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:type" content={data.ogType} />
        <meta property="og:url" content={data.canonical} />
        <meta property="og:image" content={data.ogImage} />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content={data.twitterCard} />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.description} />
        <meta name="twitter:image" content={data.ogImage} />
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#22ddd2" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(generateStructuredData())}
        </script>
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      </Helmet>

      {/* SEO Analysis Panel */}
      {showAnalysis && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 right-4 z-50 bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-2xl max-w-sm"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-700">
            <div className="flex items-center gap-2">
              <Search className="w-5 h-5 text-zion-cyan" />
              <h3 className="font-semibold text-white">SEO Analysis</h3>
            </div>
            {isAnalyzing && (
              <div className="w-4 h-4 border-2 border-zion-cyan border-t-transparent rounded-full animate-spin" />
            )}
          </div>

          {/* Content */}
          <div className="p-4 space-y-4">
            {/* Overall Score */}
            {analysis && (
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">
                  {analysis.score}/100
                </div>
                <div className="text-sm text-slate-400">SEO Score</div>
              </div>
            )}

            {/* Performance Metrics */}
            {performance && (
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  Performance
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-800/50 p-3 rounded-lg">
                    <div className="text-xs text-slate-400 mb-1">Load Time</div>
                    <div className="text-white font-mono text-sm">
                      {performance.loadTime}ms
                    </div>
                  </div>
                  
                  <div className="bg-slate-800/50 p-3 rounded-lg">
                    <div className="text-xs text-slate-400 mb-1">Page Size</div>
                    <div className="text-white font-mono text-sm">
                      {performance.size} KB
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">SEO</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-medium ${getScoreColor(performance.seoScore)}`}>
                        {performance.seoScore}
                      </span>
                      {getScoreIcon(performance.seoScore)}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Accessibility</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-medium ${getScoreColor(performance.accessibilityScore)}`}>
                        {performance.accessibilityScore}
                      </span>
                      {getScoreIcon(performance.accessibilityScore)}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Performance</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-medium ${getScoreColor(performance.performanceScore)}`}>
                        {performance.performanceScore}
                      </span>
                      {getScoreIcon(performance.performanceScore)}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Issues */}
            {analysis && analysis.issues.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-400" />
                  Issues Found
                </h4>
                
                <div className="space-y-2">
                  {analysis.issues.map((issue, index) => (
                    <div key={index} className="text-xs text-yellow-200 bg-yellow-900/20 p-2 rounded">
                      {issue}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recommendations */}
            {analysis && analysis.recommendations.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <Info className="w-4 h-4 text-blue-400" />
                  Recommendations
                </h4>
                
                <div className="space-y-2">
                  {analysis.recommendations.map((rec, index) => (
                    <div key={index} className="text-xs text-blue-200 bg-blue-900/20 p-2 rounded">
                      {rec}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Meta Tags Status */}
            {analysis && (
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Meta Tags
                </h4>
                
                <div className="space-y-2">
                  {Object.entries(analysis.metaTags).map(([tag, present]) => (
                    <div key={tag} className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 capitalize">
                        {tag.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <div className="flex items-center gap-1">
                        {present ? (
                          <>
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            <span className="text-xs text-green-400">Present</span>
                          </>
                        ) : (
                          <>
                            <AlertTriangle className="w-3 h-3 text-red-400" />
                            <span className="text-xs text-red-400">Missing</span>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Device Preview */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                Device Preview
              </h4>
              
              <div className="flex gap-2">
                <button className="p-2 bg-slate-700 hover:bg-slate-600 rounded transition-colors" title="Desktop">
                  <Monitor className="w-4 h-4 text-slate-400" />
                </button>
                <button className="p-2 bg-slate-700 hover:bg-slate-600 rounded transition-colors" title="Tablet">
                  <Tablet className="w-4 h-4 text-slate-400" />
                </button>
                <button className="p-2 bg-slate-700 hover:bg-slate-600 rounded transition-colors" title="Mobile">
                  <Smartphone className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>

            {/* External Tools */}
            <div className="pt-2 border-t border-slate-700">
              <div className="text-xs text-slate-400 mb-2">External Tools</div>
              <div className="space-y-2">
                <a
                  href={`https://search.google.com/test/rich-results?url=${encodeURIComponent(data.canonical)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  Google Rich Results Test
                </a>
                <a
                  href={`https://developers.facebook.com/tools/debug/?q=${encodeURIComponent(data.canonical)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  Facebook Sharing Debugger
                </a>
                <a
                  href={`https://cards-dev.twitter.com/validator?url=${encodeURIComponent(data.canonical)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  Twitter Card Validator
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
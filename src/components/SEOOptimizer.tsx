import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, TrendingUp, Target, Zap, CheckCircle, AlertTriangle, Info, Settings, BarChart3, Globe, Smartphone, Monitor, Eye, Clock, Star, ArrowUpRight, RefreshCw } from 'lucide-react';

interface SEOAnalysis {
  score: number;
  issues: SEOIssue[];
  suggestions: SEOSuggestion[];
  metrics: SEOMetrics;
  lastUpdated: Date;
}

interface SEOIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  fixable: boolean;
  category: 'content' | 'technical' | 'performance' | 'accessibility';
}

interface SEOSuggestion {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  effort: 'low' | 'medium' | 'high';
  estimatedImpact: number;
}

interface SEOMetrics {
  pageSpeed: number;
  mobileFriendliness: number;
  accessibility: number;
  bestPractices: number;
  seoScore: number;
  coreWebVitals: {
    lcp: number;
    fid: number;
    cls: number;
  };
}

interface SEOOptimizerProps extends React.PropsWithChildren<{}> {
  url?: string;
  autoAnalyze?: boolean;
  showDetails?: boolean;
  onAnalysisComplete?: (analysis: SEOAnalysis) => void;
}

export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  url,
  autoAnalyze = true,
  showDetails = false,
  onAnalysisComplete
}) => {
  const [analysis, setAnalysis] = useState<SEOAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(url || (typeof window !== 'undefined' ? window.location.href : ''));
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // SEO Analysis function
  const analyzeSEO = useCallback(async () => {
    if (typeof window === 'undefined') return;
    
    setIsAnalyzing(true);
    
    try {
      // Simulate SEO analysis
      const mockAnalysis: SEOAnalysis = {
        score: 85,
        issues: [
          {
            id: 'meta-description',
            type: 'warning',
            title: 'Meta Description Missing',
            description: 'Add a compelling meta description to improve click-through rates',
            impact: 'medium',
            fixable: true,
            category: 'content'
          },
          {
            id: 'alt-text',
            type: 'error',
            title: 'Missing Alt Text',
            description: 'Some images are missing alt text for accessibility',
            impact: 'high',
            fixable: true,
            category: 'accessibility'
          }
        ],
        suggestions: [
          {
            id: 'structured-data',
            title: 'Add Structured Data',
            description: 'Implement JSON-LD structured data for better search visibility',
            priority: 'high',
            effort: 'medium',
            estimatedImpact: 15
          },
          {
            id: 'page-speed',
            title: 'Optimize Page Speed',
            description: 'Compress images and optimize loading performance',
            priority: 'high',
            effort: 'low',
            estimatedImpact: 20
          }
        ],
        metrics: {
          pageSpeed: 78,
          mobileFriendliness: 92,
          accessibility: 88,
          bestPractices: 85,
          seoScore: 85,
          coreWebVitals: {
            lcp: 2.1,
            fid: 45,
            cls: 0.08
          }
        },
        lastUpdated: new Date()
      };

      setAnalysis(mockAnalysis);
      onAnalysisComplete?.(mockAnalysis);
    } catch (error) {
      console.error('SEO analysis failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  }, [onAnalysisComplete]);

  // Auto-analyze on mount
  useEffect(() => {
    if (autoAnalyze && typeof window !== 'undefined') {
      analyzeSEO();
    }
  }, [autoAnalyze, analyzeSEO]);

  // Generate structured data
  const generateStructuredData = useCallback(() => {
    if (typeof window === 'undefined') return;

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "description": "Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud architecture, and innovative development services.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "364 E Main St STE 1008",
        "addressLocality": "Middletown",
        "addressRegion": "DE",
        "postalCode": "19709",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      },
      "sameAs": [
        "https://linkedin.com/company/ziontechgroup",
        "https://twitter.com/ziontechgroup"
      ],
      "service": [
        {
          "@type": "Service",
          "name": "AI Development",
          "description": "Custom AI solutions and machine learning models"
        },
        {
          "@type": "Service",
          "name": "Cloud Architecture",
          "description": "Scalable cloud solutions and infrastructure design"
        },
        {
          "@type": "Service",
          "name": "Digital Transformation",
          "description": "End-to-end digital transformation services"
        }
      ]
    };

    // Add structured data to page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // Add meta tags
  const addMetaTags = useCallback(() => {
    if (typeof document === 'undefined') return;

    const metaTags = [
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:site_name', content: 'Zion Tech Group' },
      { property: 'og:locale', content: 'en_US' },
      { name: 'twitter:site', content: '@ziontechgroup' },
      { name: 'twitter:creator', content: '@ziontechgroup' }
    ];

    metaTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[name="${tag.name}"], meta[property="${tag.property}"]`);
      if (!existingTag) {
        const meta = document.createElement('meta');
        if (tag.name) meta.name = tag.name;
        if (tag.property) meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });
  }, []);

  useEffect(() => {
    generateStructuredData();
    addMetaTags();
  }, [generateStructuredData, addMetaTags]);

  const filteredIssues = useMemo(() => {
    if (!analysis) return [];
    if (selectedCategory === 'all') return analysis.issues;
    return analysis.issues.filter(issue => issue.category === selectedCategory);
  }, [analysis, selectedCategory]);

  const filteredSuggestions = useMemo(() => {
    if (!analysis) return [];
    return analysis.suggestions.sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
  }, [analysis]);

  if (!showDetails) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        className="fixed top-4 right-4 w-96 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-xl z-50 max-h-[80vh] overflow-y-auto"
      >
        <div className="p-4 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">SEO Analysis</h3>
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>

        {isAnalyzing ? (
          <div className="p-4 text-center">
            <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-blue-500" />
            <p className="text-sm text-slate-600 dark:text-slate-400">Analyzing SEO...</p>
          </div>
        ) : analysis ? (
          <div className="p-4 space-y-4">
            {/* Score Overview */}
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">{analysis.score}/100</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">SEO Score</div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4 text-blue-500" />
                <span>Speed: {analysis.metrics.pageSpeed}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Smartphone className="w-4 h-4 text-green-500" />
                <span>Mobile: {analysis.metrics.mobileFriendliness}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4 text-purple-500" />
                <span>Access: {analysis.metrics.accessibility}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>Best: {analysis.metrics.bestPractices}</span>
              </div>
            </div>

            {/* Issues */}
            {filteredIssues.length > 0 && (
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">Issues Found</h4>
                <div className="space-y-2">
                  {filteredIssues.map(issue => (
                    <div key={issue.id} className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <AlertTriangle className={`w-4 h-4 mt-0.5 ${
                          issue.type === 'error' ? 'text-red-500' : 
                          issue.type === 'warning' ? 'text-yellow-500' : 'text-blue-500'
                        }`} />
                        <div className="flex-1">
                          <div className="font-medium text-sm text-slate-900 dark:text-white">
                            {issue.title}
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">
                            {issue.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Suggestions */}
            {filteredSuggestions.length > 0 && (
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">Suggestions</h4>
                <div className="space-y-2">
                  {filteredSuggestions.map(suggestion => (
                    <div key={suggestion.id} className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <Zap className="w-4 h-4 mt-0.5 text-blue-500" />
                        <div className="flex-1">
                          <div className="font-medium text-sm text-slate-900 dark:text-white">
                            {suggestion.title}
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">
                            {suggestion.description}
                          </div>
                          <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                            Impact: +{suggestion.estimatedImpact} points
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="p-4 text-center">
            <Search className="w-8 h-8 mx-auto mb-2 text-slate-400" />
            <p className="text-sm text-slate-600 dark:text-slate-400">No analysis available</p>
            <button
              onClick={analyzeSEO}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
            >
              Analyze Now
            </button>
          </div>
        )}
      </motion.div>
    </>
  );
};
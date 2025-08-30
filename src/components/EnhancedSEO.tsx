import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  TrendingUp, 
  BarChart3, 
  Target, 
  Eye, 
  Zap,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  CheckCircle,
  AlertTriangle,
  Info,
  Settings,
  RefreshCw,
  ExternalLink,
  FileText,
  Tag,
  Hash,
  Link
} from 'lucide-react';

interface SEOMetrics {
  title: string;
  description: string;
  keywords: string[];
  metaTags: Array<{ name: string; content: string }>;
  structuredData: any;
  performance: {
    loadTime: number;
    lighthouseScore: number;
    seoScore: number;
    accessibilityScore: number;
    bestPracticesScore: number;
  };
  socialMedia: {
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    twitterCard: string;
  };
  technical: {
    hasCanonical: boolean;
    hasSitemap: boolean;
    hasRobots: boolean;
    hasHreflang: boolean;
    hasSchema: boolean;
  };
}

interface SEORecommendation {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  category: 'technical' | 'content' | 'performance' | 'social';
  impact: 'high' | 'medium' | 'low';
  action: string;
  estimatedImprovement: string;
}

export const EnhancedSEO: React.FC = () => {
  const [metrics, setMetrics] = useState<SEOMetrics>({
    title: '',
    description: '',
    keywords: [],
    metaTags: [],
    structuredData: {},
    performance: {
      loadTime: 0,
      lighthouseScore: 0,
      seoScore: 0,
      accessibilityScore: 0,
      bestPracticesScore: 0
    },
    socialMedia: {
      ogTitle: '',
      ogDescription: '',
      ogImage: '',
      twitterCard: ''
    },
    technical: {
      hasCanonical: false,
      hasSitemap: false,
      hasRobots: false,
      hasHreflang: false,
      hasSchema: false
    }
  });

  const [recommendations, setRecommendations] = useState<SEORecommendation[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentPage, setCurrentPage] = useState(window.location.pathname);
  const [seoScore, setSeoScore] = useState(0);

  // Analyze current page SEO
  const analyzeSEO = useCallback(async () => {
    setIsAnalyzing(true);
    
    try {
      // Get page title and description
      const title = document.title;
      const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
      
      // Get keywords
      const keywordsMeta = document.querySelector('meta[name="keywords"]')?.getAttribute('content') || '';
      const keywords = keywordsMeta ? keywordsMeta.split(',').map(k => k.trim()) : [];
      
      // Get all meta tags
      const metaTags = Array.from(document.querySelectorAll('meta')).map(meta => ({
        name: meta.getAttribute('name') || meta.getAttribute('property') || 'unknown',
        content: meta.getAttribute('content') || ''
      }));

      // Get structured data
      const structuredDataScripts = document.querySelectorAll('script[type="application/ld+json"]');
      const structuredData = Array.from(structuredDataScripts).map(script => {
        try {
          return JSON.parse(script.textContent || '{}');
        } catch {
          return {};
        }
      });

      // Get social media tags
      const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content') || '';
      const ogDescription = document.querySelector('meta[property="og:description"]')?.getAttribute('content') || '';
      const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';
      const twitterCard = document.querySelector('meta[name="twitter:card"]')?.getAttribute('content') || '';

      // Check technical SEO elements
      const hasCanonical = !!document.querySelector('link[rel="canonical"]');
      const hasSitemap = !!document.querySelector('link[rel="sitemap"]');
      const hasRobots = !!document.querySelector('meta[name="robots"]');
      const hasHreflang = !!document.querySelector('link[hreflang]');
      const hasSchema = structuredData.length > 0;

      // Simulate performance metrics
      const performance = {
        loadTime: Math.random() * 3000 + 1000,
        lighthouseScore: Math.random() * 30 + 70,
        seoScore: Math.random() * 20 + 80,
        accessibilityScore: Math.random() * 25 + 75,
        bestPracticesScore: Math.random() * 20 + 80
      };

      setMetrics({
        title,
        description,
        keywords,
        metaTags,
        structuredData,
        performance,
        socialMedia: {
          ogTitle,
          ogDescription,
          ogImage,
          twitterCard
        },
        technical: {
          hasCanonical,
          hasSitemap,
          hasRobots,
          hasHreflang,
          hasSchema
        }
      });

      // Generate recommendations
      generateRecommendations({
        title,
        description,
        keywords,
        metaTags,
        structuredData,
        performance,
        socialMedia: { ogTitle, ogDescription, ogImage, twitterCard },
        technical: { hasCanonical, hasSitemap, hasRobots, hasHreflang, hasSchema }
      });

    } catch (error) {
      console.error('Error analyzing SEO:', error);
    } finally {
      setIsAnalyzing(false);
    }
  }, []);

  // Generate SEO recommendations
  const generateRecommendations = useCallback((currentMetrics: SEOMetrics) => {
    const newRecommendations: SEORecommendation[] = [];

    // Title recommendations
    if (!currentMetrics.title || currentMetrics.title.length < 30) {
      newRecommendations.push({
        id: 'title-length',
        title: 'Optimize Title Length',
        description: 'Title should be between 30-60 characters for optimal SEO',
        priority: 'high',
        category: 'content',
        impact: 'high',
        action: 'Update page title to be more descriptive and within optimal length',
        estimatedImprovement: '10-15%'
      });
    }

    // Description recommendations
    if (!currentMetrics.description || currentMetrics.description.length < 120) {
      newRecommendations.push({
        id: 'description-length',
        title: 'Improve Meta Description',
        description: 'Meta description should be between 120-160 characters',
        priority: 'high',
        category: 'content',
        impact: 'medium',
        action: 'Write compelling meta description that includes target keywords',
        estimatedImprovement: '8-12%'
      });
    }

    // Keywords recommendations
    if (currentMetrics.keywords.length === 0) {
      newRecommendations.push({
        id: 'keywords-missing',
        title: 'Add Meta Keywords',
        description: 'Meta keywords can help with internal search and categorization',
        priority: 'medium',
        category: 'content',
        impact: 'low',
        action: 'Add relevant keywords to meta keywords tag',
        estimatedImprovement: '3-5%'
      });
    }

    // Social media recommendations
    if (!currentMetrics.socialMedia.ogTitle) {
      newRecommendations.push({
        id: 'og-title-missing',
        title: 'Add Open Graph Title',
        description: 'Open Graph tags improve social media sharing appearance',
        priority: 'medium',
        category: 'social',
        impact: 'medium',
        action: 'Add og:title meta tag for better social sharing',
        estimatedImprovement: '5-8%'
      });
    }

    // Technical SEO recommendations
    if (!currentMetrics.technical.hasCanonical) {
      newRecommendations.push({
        id: 'canonical-missing',
        title: 'Add Canonical URL',
        description: 'Canonical URLs prevent duplicate content issues',
        priority: 'high',
        category: 'technical',
        impact: 'high',
        action: 'Add canonical link tag to prevent duplicate content',
        estimatedImprovement: '12-18%'
      });
    }

    if (!currentMetrics.technical.hasSchema) {
      newRecommendations.push({
        id: 'schema-missing',
        title: 'Add Structured Data',
        description: 'Structured data helps search engines understand content better',
        priority: 'medium',
        category: 'technical',
        impact: 'medium',
        action: 'Implement JSON-LD structured data markup',
        estimatedImprovement: '8-12%'
      });
    }

    // Performance recommendations
    if (currentMetrics.performance.loadTime > 3000) {
      newRecommendations.push({
        id: 'page-speed',
        title: 'Improve Page Speed',
        description: 'Page load time affects SEO rankings and user experience',
        priority: 'high',
        category: 'performance',
        impact: 'high',
        action: 'Optimize images, minify CSS/JS, and implement lazy loading',
        estimatedImprovement: '15-25%'
      });
    }

    setRecommendations(newRecommendations);
    
    // Calculate overall SEO score
    const score = calculateSEOScore(currentMetrics);
    setSeoScore(score);
  }, []);

  // Calculate overall SEO score
  const calculateSEOScore = useCallback((metrics: SEOMetrics): number => {
    let score = 100;
    
    // Deduct points for missing elements
    if (!metrics.title) score -= 20;
    if (!metrics.description) score -= 15;
    if (metrics.keywords.length === 0) score -= 5;
    if (!metrics.technical.hasCanonical) score -= 10;
    if (!metrics.technical.hasSchema) score -= 8;
    if (!metrics.socialMedia.ogTitle) score -= 5;
    if (metrics.performance.loadTime > 3000) score -= 12;
    
    return Math.max(0, score);
  }, []);

  // Apply SEO optimization
  const applyOptimization = useCallback(async (recommendationId: string) => {
    const recommendation = recommendations.find(r => r.id === recommendationId);
    if (!recommendation) return;

    try {
      // Simulate optimization process
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Apply specific optimizations
      switch (recommendationId) {
        case 'title-length':
          // Update title
          document.title = 'Zion Tech Group - Leading AI, IT & Technology Solutions | Cloud DevOps, Cybersecurity';
          break;
        case 'description-length':
          // Add meta description
          let metaDesc = document.querySelector('meta[name="description"]');
          if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.setAttribute('name', 'description');
            document.head.appendChild(metaDesc);
          }
          metaDesc.setAttribute('content', 'Zion Tech Group delivers cutting-edge AI solutions, IT infrastructure, cloud DevOps, and cybersecurity services. Transform your business with our innovative technology solutions.');
          break;
        case 'canonical-missing':
          // Add canonical URL
          const canonical = document.createElement('link');
          canonical.rel = 'canonical';
          canonical.href = window.location.href;
          document.head.appendChild(canonical);
          break;
        case 'og-title-missing':
          // Add Open Graph title
          const ogTitle = document.createElement('meta');
          ogTitle.setAttribute('property', 'og:title');
          ogTitle.setAttribute('content', document.title);
          document.head.appendChild(ogTitle);
          break;
      }

      // Re-analyze after optimization
      setTimeout(analyzeSEO, 1000);

    } catch (error) {
      console.error('Error applying optimization:', error);
    }
  }, [recommendations, analyzeSEO]);

  // Auto-analyze on page change
  useEffect(() => {
    const handleRouteChange = () => {
      const newPath = window.location.pathname;
      if (newPath !== currentPage) {
        setCurrentPage(newPath);
        setTimeout(analyzeSEO, 500);
      }
    };

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    
    // Initial analysis
    analyzeSEO();

    return () => window.removeEventListener('popstate', handleRouteChange);
  }, [currentPage, analyzeSEO]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    if (score >= 50) return 'text-orange-500';
    return 'text-red-500';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (score >= 70) return <TrendingUp className="w-5 h-5 text-yellow-500" />;
    if (score >= 50) return <AlertTriangle className="w-5 h-5 text-orange-500" />;
    return <AlertTriangle className="w-5 h-5 text-red-500" />;
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 p-4 w-80 max-h-96 overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <Search className="w-5 h-5 text-green-500" />
            SEO Monitor
          </h3>
          <button
            onClick={analyzeSEO}
            disabled={isAnalyzing}
            className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            {isAnalyzing ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <RefreshCw className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Overall Score */}
        <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">SEO Score</span>
            <div className="flex items-center gap-2">
              {getScoreIcon(seoScore)}
              <span className={`text-lg font-bold ${getScoreColor(seoScore)}`}>
                {seoScore}/100
              </span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div 
              className={`h-2 rounded-full transition-all duration-500 ${
                seoScore >= 90 ? 'bg-green-500' :
                seoScore >= 70 ? 'bg-yellow-500' :
                seoScore >= 50 ? 'bg-orange-500' : 'bg-red-500'
              }`}
              style={{ width: `${seoScore}%` }}
            />
          </div>
        </div>

        {/* Current Page Info */}
        <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2 flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Current Page
          </h4>
          <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
            <div className="flex items-center gap-2">
              <Link className="w-3 h-3" />
              <span className="truncate">{currentPage}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-3 h-3" />
              <span>Title: {metrics.title ? metrics.title.substring(0, 40) + '...' : 'Missing'}</span>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2 flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            Performance
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Load Time:</span>
              <span className="font-medium">{metrics.performance.loadTime.toFixed(0)}ms</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Lighthouse:</span>
              <span className="font-medium">{metrics.performance.lighthouseScore.toFixed(0)}</span>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        {recommendations.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <Target className="w-4 h-4" />
              Recommendations ({recommendations.length})
            </h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {recommendations.slice(0, 3).map((rec) => (
                <div key={rec.id} className="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200 dark:border-yellow-800">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <h5 className="text-xs font-medium text-yellow-800 dark:text-yellow-200">
                        {rec.title}
                      </h5>
                      <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-1">
                        {rec.description}
                      </p>
                    </div>
                    <button
                      onClick={() => applyOptimization(rec.id)}
                      className="px-2 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-xs rounded transition-colors"
                    >
                      Fix
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="flex gap-2">
          <button
            onClick={() => window.open('/sitemap', '_blank')}
            className="flex-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded transition-colors flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-3 h-3" />
            Sitemap
          </button>
          <button
            onClick={() => window.open('/robots.txt', '_blank')}
            className="flex-1 px-3 py-2 bg-gray-500 hover:bg-gray-600 text-white text-xs rounded transition-colors flex items-center justify-center gap-2"
          >
            <FileText className="w-3 h-3" />
            Robots
          </button>
        </div>
      </motion.div>
    </div>
  );
};
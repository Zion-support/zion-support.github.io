import React, { useState, useEffect, useCallback, useMemo } from 'react';
=======
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  CheckCircle,
  AlertTriangle,
  X,
  RefreshCw,
  Settings
} from 'lucide-react';

interface SEOAnalysis {
  title: {
    text: string;
    length: number;
    score: 'good' | 'warning' | 'error';
  };
  description: {
    text: string;
    length: number;
    score: 'good' | 'warning' | 'error';
  };
  overall: {
    score: number;
    grade: 'A' | 'B' | 'C' | 'D' | 'F';
  };
}

interface SEOOptimizerProps {
  enabled?: boolean;
  showPanel?: boolean;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}
import React, { useState, useEffect, useCallback, useMemo } from 'react.ts';
import { motion, AnimatePresence               } from 'framer-motion.ts';
import { Search,
  TrendingUp,
  Target,
  Zap,
  CheckCircle,
  AlertTriangle,
  Info,
  Settings,
  BarChart3,
  Globe,
  Smartphone,
  Monitor,
  Eye,
  Clock,
  Star,
  ArrowUpRight,
  RefreshCw
               } from 'lucide-react.ts';

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
coreWebVitals: {;
    lcp: number;
    fid: number;
    cls: anyanyanyanyanyanyanyanyanyanyanyanyanyanynumber}}

interface SEOOptimizerProps extends React.PropsWithChildren<{}> {

  url?: string;
  autoAnalyze?: boolean;
  showDetails?: boolean;
  onAnalysisComplete?: (analysis: anyanyanyanyanyanyanyanyanyanyanyanyanyanySEOAnalysis)                => void}

export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  url,
  autoAnalyze = true,;
  showDetails = false,;
  onAnalysisComplete;
}) => {;
  const [analysis, setAnalysis] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(url || window.location.href);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>('all');

  // Mock SEO analysis data (in real app, this would come from actual analysis)
  const mockAnalysis: SEOAnalysis = useMemo(() => ({
    score: 87,
    issues[
      {
        id: '1',
        type: 'warning',
        title: 'Missing Meta Description',
        description: 'The page is missing a meta description tag, which is important for search engine snippets.',
        impact: 'medium',
        fixable: true,
        category: 'content'
      },
      {
        id: '2',
        type: 'error',
        title: 'Slow Page Load Time',
        description: 'Page load time is above the recommended 3-second threshold.',
        impact: 'high',
        fixable: true,
        category: 'performance'
      },
      {
        id: '3',
        type: 'info',
        title: 'Missing Alt Text',
        description: 'Some images are missing alt text, which affects accessibility.',
        impact: 'low',
        fixable: true,
        category: 'accessibility'

    ],
    suggestions[
      {
        id: '1',
        title: 'Optimize Images',
        description: 'Compress and optimize images to improve page load speed.',
        priority: 'high',
        effort: 'medium',
        estimatedImpact: 15
      },
      {
        id: '2',
        title: 'Add Schema Markup',
        description: 'Implement structured data to improve search engine understanding.',
        priority: 'medium',
        effort: 'low',
        estimatedImpact: 8
      },
      {
        id: '3',
        title: 'Improve Internal Linking',
        description: 'Add more internal links to improve page authority distribution.',
        priority: 'low',
        effort: 'low',
        estimatedImpact: 5

    ],
    metrics: {
      pageSpeed: 78,
      mobileFriendliness: 92,
      accessibility: 85,
      bestPractices: 88,
      seoScore: 87,
      coreWebVitals: {;
        lcp: 2.8,;
        fid: 45,;
        cls: 0.08;
      };
    },;
    lastUpdated: new Date();
  }), []);

  // Analyze SEO
  const analyzeSEO = useCallback(async () => {;
    setIsAnalyzing(true);

    // Simulate analysis delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    setAnalysis(mockAnalysis);
    setIsAnalyzing(false);
    onAnalysisComplete?.(mockAnalysis)}, [mockAnalysis, onAnalysisComplete]);

  // Auto-analyze on mount
  useEffect(() => {
    if (autoAnalyze) {
      analyzeSEO()}
  }, [autoAnalyze, analyzeSEO]);

  // Get score color
      default: return 'text-zion-slate'}
  };

  // Get priority color
      default: return 'text-zion-slate bg-zion-slate/10 border-zion-slate/200'}
  };

  // Filter issues by category
  const filteredIssues = useMemo(() => {;
    if (selectedCategory === 'all') return analysis?.issues || [];
    return analysis?.issues.filter(issue => issue.category === selectedCategory) || []}, [analysis, selectedCategory]);

  // Filter suggestions by priority
  const filteredSuggestions = useMemo(() => {
    return analysis?.suggestions.sort((a, b) => {
      const priorityOrder = {
  high: 3, medium: 2,;
  ;
  ;
  ;
  ;
  ;
  low: 1 ;






};
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }) || [];
  }, [analysis]);

  if (!analysis && !isAnalyzing) {
    return (
      <div className = "text-center py-8">
        <Search className="w-12 h-12 text-zion-slate/40 mx-auto mb-4" />
        <p className="text-zion-slate/60">No SEO analysis available</p>
        <button
          onClick={analyzeSEO}
          className="mt-4 px-6 py-2 bg-zion-cyan hover:bg-zion-cyan/80 text-white rounded-lg transition-colors";
        >;
          Analyze SEO;
        </button>;
      </div>;
    );
  }

export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Leading AI & Technology Solutions',
  description = 'Zion Tech Group delivers cutting-edge AI solutions, enterprise automation, quantum computing, and innovative technology services. Transform your business with our advanced AI platforms.',
  keywords = 'AI solutions, artificial intelligence, enterprise automation, quantum computing, technology services, AI platforms, machine learning, data analytics, cybersecurity, cloud solutions',
  canonicalUrl,
  ogImage = '/images/zion-tech-group-og.jpg',
  ogType = 'website',
  structuredData,
  noIndex = false,
  noFollow = false,
}) => {
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
    description: 'Leading provider of AI and technology solutions for enterprises',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contact@ziontechgroup.com',
    },
    sameAs: [
      'https://linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup'
    ]
  }
};
=======

export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  enabled = true,
  showPanel = false,
  position = 'top-right'
}) => {
  const [analysis, setAnalysis] = useState<SEOAnalysis | null>(null);
  const [isVisible, setIsVisible] = useState(showPanel);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeSEO = useCallback(async () => {
    if (!enabled || typeof window === 'undefined') return;

    setIsAnalyzing(true);

    try {
      const title = document.title;
      const titleLength = title.length;
      const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
      const descriptionLength = metaDescription.length;

      const titleScore = titleLength >= 30 && titleLength <= 60 ? 'good' : 
                        titleLength >= 20 && titleLength <= 70 ? 'warning' : 'error';
      
      const descriptionScore = descriptionLength >= 120 && descriptionLength <= 160 ? 'good' : 
                              descriptionLength >= 100 && descriptionLength <= 180 ? 'warning' : 'error';

      const overallScore = Math.round((titleScore === 'good' ? 50 : titleScore === 'warning' ? 30 : 10) + 
                                     (descriptionScore === 'good' ? 50 : descriptionScore === 'warning' ? 30 : 10));
      const grade = overallScore >= 90 ? 'A' : overallScore >= 80 ? 'B' : overallScore >= 70 ? 'C' : overallScore >= 60 ? 'D' : 'F';

      const seoAnalysis: SEOAnalysis = {
        title: {
          text: title,
          length: titleLength,
          score: titleScore
        },
        description: {
          text: metaDescription,
          length: descriptionLength,
          score: descriptionScore
        },
        overall: {
          score: overallScore,
          grade
        }
      };

      setAnalysis(seoAnalysis);
    } catch (error) {
      console.error('SEO analysis failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    analyzeSEO();
  }, [enabled, analyzeSEO]);

  const getScoreColor = (score: 'good' | 'warning' | 'error') => {
    switch (score) {
      case 'good': return 'text-green-500';
      case 'warning': return 'text-yellow-500';
      case 'error': return 'text-red-500';
    }
  };

  const getScoreIcon = (score: 'good' | 'warning' | 'error') => {
    switch (score) {
      case 'good': return <CheckCircle className="w-4 h-4" />;
      case 'warning': return <AlertTriangle className="w-4 h-4" />;
      case 'error': return <X className="w-4 h-4" />;
    }
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'text-green-500';
      case 'B': return 'text-blue-500';
      case 'C': return 'text-yellow-500';
      case 'D': return 'text-orange-500';
      case 'F': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4'
  };

  if (!enabled) return null;

  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsVisible(!isVisible)}
        className={`fixed ${positionClasses[position]} z-50 w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors`}
        aria-label="Open SEO analysis"
      >
        <Search className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            className={`fixed ${positionClasses[position]} z-40 mt-16`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 w-80 max-h-96 overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <Search className="w-5 h-5 text-green-500" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">SEO Analysis</h3>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                  aria-label="Close SEO panel"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
                {isAnalyzing ? (
                  <div className="flex items-center justify-center py-8">
                    <RefreshCw className="w-6 h-6 animate-spin text-green-500" />
                    <span className="ml-2 text-gray-600 dark:text-gray-400">Analyzing...</span>
                  </div>
                ) : analysis ? (
                  <>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className={`text-3xl font-bold ${getGradeColor(analysis.overall.grade)}`}>
                        {analysis.overall.grade}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {analysis.overall.score}/100
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Title</span>
                        <div className={`flex items-center space-x-1 ${getScoreColor(analysis.title.score)}`}>
                          <span className="text-sm font-medium">{analysis.title.length}</span>
                          {getScoreIcon(analysis.title.score)}
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Description</span>
                        <div className={`flex items-center space-x-1 ${getScoreColor(analysis.description.score)}`}>
                          <span className="text-sm font-medium">{analysis.description.length}</span>
                          {getScoreIcon(analysis.description.score)}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={analyzeSEO}
                      className="w-full flex items-center justify-center space-x-2 px-3 py-2 text-sm bg-green-100 dark:bg-green-900 hover:bg-green-200 dark:hover:bg-green-800 text-green-700 dark:text-green-300 rounded-md transition-colors"
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span>Refresh Analysis</span>
                    </button>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <Search className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 dark:text-gray-400">No analysis available</p>
                    <button
                      onClick={analyzeSEO}
                      className="mt-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm transition-colors"
                    >
                      Analyze Page
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Hook for using SEO optimization
export const useSEOOptimization = () => {;
  const [analysis, setAnalysis] = useState<any>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);

  const optimizePage = useCallback(async () => {;
    setIsOptimizing(true);
    // Implement actual optimization logic here
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsOptimizing(false)}, []);

  return {
    analysis,
    isOptimizing,
    optimizePage
  }};
export default SEOOptimizer;
=======
=======
export default SEOOptimizer;

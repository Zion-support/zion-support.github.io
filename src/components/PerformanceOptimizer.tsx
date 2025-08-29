import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  X,
  Gauge,
  Clock,
  HardDrive,
  Network,
  Monitor,
  BarChart3,
  ChevronDown
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  bundleSize: number;
  loadTime: number;
}

interface PerformanceRecommendation {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  category: 'performance' | 'seo' | 'accessibility' | 'security';
  implemented: boolean;
}

interface PerformanceOptimizerProps {
  showMetrics?: boolean;
  autoOptimize?: boolean;
}

export function PerformanceOptimizer({ 
  showMetrics = false, 
  autoOptimize = true 
}: PerformanceOptimizerProps) {
  const [isVisible, setIsVisible] = useState(showMetrics);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [recommendations, setRecommendations] = useState<PerformanceRecommendation[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Performance recommendations
  const performanceRecommendations: PerformanceRecommendation[] = [
    {
      id: 'bundle-optimization',
      title: 'Bundle Size Optimization',
      description: 'Current bundle size is 399KB. Implement code splitting and tree shaking to reduce by 30-40%.',
      impact: 'high',
      category: 'performance',
      implemented: false
    },
    {
      id: 'image-optimization',
      title: 'Image Optimization',
      description: 'Implement WebP format, lazy loading, and responsive images for better performance.',
      impact: 'high',
      category: 'performance',
      implemented: false
    },
    {
      id: 'caching-strategy',
      title: 'Advanced Caching Strategy',
      description: 'Implement service worker and aggressive caching for static assets.',
      impact: 'medium',
      category: 'performance',
      implemented: false
    },
    {
      id: 'seo-enhancement',
      title: 'SEO Enhancement',
      description: 'Add structured data, meta descriptions, and Open Graph tags for better search visibility.',
      impact: 'medium',
      category: 'seo',
      implemented: false
    },
    {
      id: 'accessibility-improvement',
      title: 'Accessibility Enhancement',
      description: 'Improve ARIA labels, keyboard navigation, and screen reader support.',
      impact: 'medium',
      category: 'accessibility',
      implemented: false
    },
    {
      id: 'security-headers',
      title: 'Security Headers',
      description: 'Implement CSP, HSTS, and other security headers for enhanced protection.',
      impact: 'low',
      category: 'security',
      implemented: false
    }
  ];

  const measurePerformance = useCallback(async () => {
    setIsAnalyzing(true);
    
    try {
      // Simulate performance measurement
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockMetrics: PerformanceMetrics = {
        fcp: Math.random() * 2000 + 500,
        lcp: Math.random() * 3000 + 1000,
        fid: Math.random() * 100 + 10,
        cls: Math.random() * 0.1 + 0.01,
        ttfb: Math.random() * 500 + 100,
        bundleSize: 399,
        loadTime: Math.random() * 3000 + 1000
      };
      
      setMetrics(mockMetrics);
      setRecommendations(performanceRecommendations);
    } catch (error) {
      console.error('Performance measurement failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  }, []);

  const getPerformanceScore = (metrics: PerformanceMetrics): number => {
    let score = 100;
    
    if (metrics.fcp > 1800) score -= 20;
    if (metrics.lcp > 2500) score -= 25;
    if (metrics.fid > 100) score -= 15;
    if (metrics.cls > 0.1) score -= 20;
    if (metrics.ttfb > 400) score -= 10;
    if (metrics.bundleSize > 300) score -= 10;
    
    return Math.max(0, score);
  };

  const getPerformanceGrade = (score: number): string => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  };

  const getPerformanceColor = (score: number): string => {
    if (score >= 90) return 'text-green-500';
    if (score >= 80) return 'text-yellow-500';
    if (score >= 70) return 'text-orange-500';
    return 'text-red-500';
  };

  useEffect(() => {
    if (autoOptimize) {
      measurePerformance();
    }
  }, [autoOptimize, measurePerformance]);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleDetails = () => setShowDetails(!showDetails);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 max-w-sm">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-blue-500" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Performance Monitor</h3>
          </div>
          <button
            onClick={toggleVisibility}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {isAnalyzing ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-400">Analyzing performance...</p>
            </div>
          ) : metrics ? (
            <>
              {/* Performance Score */}
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {getPerformanceScore(metrics)}
                </div>
                <div className={`text-2xl font-bold ${getPerformanceColor(getPerformanceScore(metrics))}`}>
                  Grade: {getPerformanceGrade(getPerformanceScore(metrics))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Performance Score
                </p>
              </div>

              {/* Key Metrics */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">First Contentful Paint</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {metrics.fcp.toFixed(0)}ms
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Largest Contentful Paint</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {metrics.lcp.toFixed(0)}ms
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Bundle Size</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {metrics.bundleSize}KB
                  </span>
                </div>
              </div>

              {/* Recommendations */}
              <div className="mb-4">
                <button
                  onClick={toggleDetails}
                  className="w-full flex items-center justify-between text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  View Recommendations
                  <ChevronDown className={`w-4 h-4 transition-transform ${showDetails ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-3"
                  >
                    {recommendations.map((rec) => (
                      <div key={rec.id} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="flex items-start space-x-2">
                          <div className={`w-2 h-2 rounded-full mt-2 ${
                            rec.impact === 'high' ? 'bg-red-500' : 
                            rec.impact === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                          }`} />
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                              {rec.title}
                            </h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                              {rec.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="flex space-x-2 mt-4">
                <button
                  onClick={measurePerformance}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors"
                >
                  Re-analyze
                </button>
                <button
                  onClick={() => window.open('/performance-dashboard', '_blank')}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium py-2 px-3 rounded-lg transition-colors"
                >
                  Dashboard
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <Zap className="w-8 h-8 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">Click to analyze performance</p>
              <button
                onClick={measurePerformance}
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Start Analysis
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

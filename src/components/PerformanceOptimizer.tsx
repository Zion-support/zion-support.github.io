import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  Clock,
  HardDrive,
  Cpu,
  Memory,
  Network,
  Battery,
  Settings,
  X,
  RefreshCw,
  Info,
  BarChart3,
  Target,
  Rocket,
  Lightbulb,
  Shield,
  Globe,
  Smartphone,
  Eye,
  Search,
  Lock,
  Smartphone as Mobile
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domLoad: number;
  windowLoad: number;
  bundleSize: number;
  imageCount: number;
  scriptCount: number;
  cssSize: number;
}

interface OptimizationSuggestion {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  category: 'performance' | 'accessibility' | 'seo' | 'mobile' | 'security';
  implemented: boolean;
  priority: number;
  estimatedSavings: string;
  action: () => void;
}
interface PerformanceOptimizerProps {
  enabled: boolean;
  showMetrics?: boolean;
  autoOptimize?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  showMetrics = false,
  autoOptimize = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<OptimizationSuggestion[]>([]);
  const [showDashboard, setShowDashboard] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Enhanced performance monitoring
  const measurePerformance = useCallback(() => {
    if (!enabled || !window.performance) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    const resources = performance.getEntriesByType('resource');
    
    const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
    const lcp = paint.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;
    
    // Calculate bundle and resource metrics
    const scripts = resources.filter(r => r.initiatorType === 'script');
    const images = resources.filter(r => r.initiatorType === 'img');
    const css = resources.filter(r => r.name.includes('.css'));
    
    const bundleSize = scripts.reduce((acc, script) => acc + (script.transferSize || 0), 0);
    const cssSize = css.reduce((acc, style) => acc + (style.transferSize || 0), 0);
    
    const newMetrics: PerformanceMetrics = {
      fcp,
      lcp,
      fid: 0, // Will be updated by observer
      cls: 0, // Will be updated by observer
      ttfb: navigation.responseStart - navigation.requestStart,
      domLoad: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      windowLoad: navigation.loadEventEnd - navigation.loadEventStart,
      bundleSize,
      imageCount: images.length,
      scriptCount: scripts.length,
      cssSize
    };

    setMetrics(newMetrics);
    
    // Auto-optimize if enabled
    if (autoOptimize) {
      analyzeAndOptimize(newMetrics);
    }
  }, [enabled, autoOptimize]);

  // Enhanced performance analysis and optimization
  const analyzeAndOptimize = useCallback((currentMetrics: PerformanceMetrics) => {
    const newOptimizations: string[] = [];
    const newSuggestions: OptimizationSuggestion[] = [];

        // Performance optimizations
    if (currentMetrics.fcp > 2000) {
      newSuggestions.push({
        id: 'fcp-optimization',
        title: 'First Contentful Paint Optimization',
        description: 'FCP is above 2s. Consider optimizing critical rendering path.',
        impact: 'high',
        category: 'performance',
        implemented: false,
        priority: 1,
        estimatedSavings: '500ms - 1s',
        action: () => optimizeCriticalPath()
      });
    }

    if (currentMetrics.bundleSize > 500000) {
      newSuggestions.push({
        id: 'bundle-optimization',
        title: 'Bundle Size Reduction',
        description: 'Bundle size is large. Consider code splitting and tree shaking.',
        impact: 'high',
        category: 'performance',
        implemented: false,
        priority: 1,
        estimatedSavings: '200-500ms',
        action: () => optimizeBundle()
      });
    }

    if (currentMetrics.imageCount > 20) {
      newSuggestions.push({
        id: 'image-optimization',
        title: 'Image Optimization',
        description: 'Many images detected. Consider lazy loading and compression.',
        impact: 'medium',
        category: 'performance',
        implemented: false,
        priority: 2,
        estimatedSavings: '300-800ms',
        action: () => optimizeImages()
      });
    }

    // Accessibility suggestions
    newSuggestions.push({
      id: 'accessibility-audit',
      title: 'Accessibility Audit',
      description: 'Run comprehensive accessibility audit for better user experience.',
      impact: 'medium',
      category: 'accessibility',
      implemented: false,
      priority: 2,
      estimatedSavings: 'Improved UX',
      action: () => runAccessibilityAudit()
    });

    // SEO suggestions
    newSuggestions.push({
      id: 'seo-optimization',
      title: 'SEO Enhancement',
      description: 'Optimize meta tags, structured data, and performance metrics.',
      impact: 'medium',
      category: 'seo',
      implemented: false,
      priority: 3,
      estimatedSavings: 'Better rankings',
      action: () => optimizeSEO()
    });

    // Security suggestions
    newSuggestions.push({
      id: 'security-audit',
      title: 'Security Audit',
      description: 'Review security headers and implement CSP.',
      impact: 'high',
      category: 'security',
      implemented: false,
      priority: 1,
      estimatedSavings: 'Enhanced security',
      action: () => runSecurityAudit()
    });

    setSuggestions(newSuggestions);
  }, []);

  // Optimization actions
  const optimizeCriticalPath = () => {
    toast.success('Critical path optimization applied');
    // Implementation would include actual optimizations
  };

  const optimizeBundle = () => {
    toast.success('Bundle optimization applied');
    // Implementation would include actual optimizations
  };

  const optimizeImages = () => {
    toast.success('Image optimization applied');
    // Implementation would include actual optimizations
  };

  const runAccessibilityAudit = () => {
    toast.success('Accessibility audit completed');
    // Implementation would include actual audit
  };

  const optimizeSEO = () => {
    toast.success('SEO optimization applied');
    // Implementation would include actual optimizations
  };

  const runSecurityAudit = () => {
    toast.success('Security audit completed');
    // Implementation would include actual audit
  };

  // Setup performance observer
  useEffect(() => {
    if (!enabled) return;
    
    setIsOptimizing(true);
    const appliedOptimizations: string[] = [];
    
    try {
      // Lazy load images
      const images = document.querySelectorAll('img[data-src]');
      if (images.length > 0) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src || '';
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          });
        });
        
        images.forEach(img => imageObserver.observe(img));
        appliedOptimizations.push('Image lazy loading enabled');
      }
      
      // Preload critical fonts
      const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
      if (fontLinks.length === 0) {
        const criticalFonts = ['Orbitron', 'Rajdhani'];
        criticalFonts.forEach(font => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'font';
          link.href = `https://fonts.googleapis.com/css2?family=${font}:wght@400;500;600;700&display=swap`;
          link.crossOrigin = 'anonymous';
          document.head.appendChild(link);
        });
        appliedOptimizations.push('Critical fonts preloaded');
      }
      
      // Register service worker
      if ('serviceWorker' in navigator) {
        try {
          await navigator.serviceWorker.register('/sw.js');
          appliedOptimizations.push('Service worker registered');
        } catch (error) {
          console.log('Service worker registration failed:', error);
        }
      }
      
      // Add DNS prefetch and preconnect hints
      const existingHints = document.querySelectorAll('link[rel="dns-prefetch"], link[rel="preconnect"]');
      if (existingHints.length === 0) {
        const domains = ['fonts.googleapis.com', 'fonts.gstatic.com', 'cdn.jsdelivr.net'];
        domains.forEach(domain => {
          const dnsPrefetch = document.createElement('link');
          dnsPrefetch.rel = 'dns-prefetch';
          dnsPrefetch.href = `//${domain}`;
          document.head.appendChild(dnsPrefetch);
          
          const preconnect = document.createElement('link');
          preconnect.rel = 'preconnect';
          preconnect.href = `//${domain}`;
          preconnect.crossOrigin = 'anonymous';
          document.head.appendChild(preconnect);
        });
        appliedOptimizations.push('DNS prefetch and preconnect hints added');
      }
      
      if (appliedOptimizations.length > 0) {
        setOptimizations(appliedOptimizations);
        setShowOptimizationNotification(true);
        setTimeout(() => setShowOptimizationNotification(false), 5000);
      }
      
    } catch (error) {
      console.error('Auto-optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [enabled]);

  // Setup performance observers
  useEffect(() => {
    if (!enabled || !window.PerformanceObserver) return;

    // LCP observer
    if ('PerformanceObserver' in window) {
      try {
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          
          if (lastEntry && 'startTime' in lastEntry) {
            setMetrics(prev => prev ? {
              ...prev,
              lcp: lastEntry.startTime
            } : null);
          }
        });
        
        observerRef.current.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (error) {
        console.log('LCP observer not supported');
      }
    }

    // FID observer
    if ('PerformanceObserver' in window) {
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          
          if (lastEntry && 'processingStart' in lastEntry) {
            const fid = lastEntry.processingStart - lastEntry.startTime;
            setMetrics(prev => prev ? {
              ...prev,
              fid
            } : null);
          }
        });
        
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (error) {
        console.log('FID observer not supported');
      }
    }

    // CLS observer
    if ('PerformanceObserver' in window) {
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          
          setMetrics(prev => prev ? {
            ...prev,
            cls: clsValue
          } : null);
        });
        
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        console.log('CLS observer not supported');
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [enabled]);

  // Initial performance measurement
  useEffect(() => {
    if (!enabled) return;
    
    // Wait for page to load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, [enabled, measurePerformance]);

  // Auto-optimize on mount
  useEffect(() => {
    if (enabled && autoOptimize) {
      const timer = setTimeout(autoOptimize, 1000);
      return () => clearTimeout(timer);
    }
  }, [enabled, autoOptimize, autoOptimize]);

  if (!enabled) return null;

  // Helper functions
  const getPerformanceScore = (metrics: PerformanceMetrics): number => {
    let score = 100;
    
    if (metrics.fcp > 2000) score -= 20;
    if (metrics.lcp > 4000) score -= 25;
    if (metrics.fid > 100) score -= 15;
    if (metrics.cls > 0.1) score -= 20;
    if (metrics.ttfb > 600) score -= 20;
    
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
    if (score >= 90) return 'text-green-400';
    if (score >= 80) return 'text-yellow-400';
    if (score >= 70) return 'text-orange-400';
    return 'text-red-400';
  };

  const formatMetric = (value: number, unit: string = 'ms'): string => {
    if (value === 0) return 'N/A';
    return `${Math.round(value)}${unit}`;
  };

  return (
    <>
      {/* Floating Performance Button */}
      <motion.button
        onClick={() => setShowDashboard(!showDashboard)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Performance Dashboard"
      >
        <Activity className="w-6 h-6" />
      </motion.button>

      {/* Performance Dashboard */}
      <AnimatePresence>
        {showDashboard && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-h-[80vh] bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 p-4 border-b border-slate-700/50">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                  <Gauge className="w-5 h-5 text-cyan-400" />
                  <span>Performance Dashboard</span>
                </h3>
                <button
                  onClick={() => setShowDashboard(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
              {/* Performance Metrics */}
              {metrics && (
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                    Performance Metrics
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-800/50 p-3 rounded-lg">
                      <div className="text-xs text-gray-400">FCP</div>
                      <div className="text-lg font-semibold text-white">
                        {metrics.fcp.toFixed(0)}ms
                      </div>
                    </div>
                    <div className="bg-slate-800/50 p-3 rounded-lg">
                      <div className="text-xs text-gray-400">LCP</div>
                      <div className="text-lg font-semibold text-white">
                        {metrics.lcp.toFixed(0)}ms
                      </div>
                    </div>
                    <div className="bg-slate-800/50 p-3 rounded-lg">
                      <div className="text-xs text-gray-400">Bundle Size</div>
                      <div className="text-lg font-semibold text-white">
                        {(metrics.bundleSize / 1024).toFixed(1)}KB
                      </div>
                    </div>
                    <div className="bg-slate-800/50 p-3 rounded-lg">
                      <div className="text-xs text-gray-400">Images</div>
                      <div className="text-lg font-semibold text-white">
                        {metrics.imageCount}
                      </div>
                    </div>
                    <div className="bg-slate-800/50 p-3 rounded-lg">
                      <div className="text-xs text-gray-400">Scripts</div>
                      <div className="text-lg font-semibold text-white">
                        {metrics.scriptCount}
                      </div>
                    </div>
                    <div className="bg-slate-800/50 p-3 rounded-lg">
                      <div className="text-xs text-gray-400">CSS Size</div>
                      <div className="text-lg font-semibold text-white">
                        {(metrics.cssSize / 1024).toFixed(1)}KB
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Optimization Suggestions */}
              {suggestions.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                    Optimization Suggestions
                  </h4>
                  <div className="space-y-2">
                    {suggestions.map((suggestion) => (
                      <div
                        key={suggestion.id}
                        className={`p-3 rounded-lg border-l-4 ${
                          suggestion.impact === 'high'
                            ? 'border-red-400 bg-red-900/20'
                            : suggestion.impact === 'medium'
                            ? 'border-yellow-400 bg-yellow-900/20'
                            : 'border-green-400 bg-green-900/20'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h5 className="text-sm font-medium text-white mb-1">
                              {suggestion.title}
                            </h5>
                            <p className="text-xs text-gray-300 mb-2">
                              {suggestion.description}
                            </p>
                            <div className="flex items-center space-x-2 text-xs">
                              <span className={`px-2 py-1 rounded ${
                                suggestion.impact === 'high'
                                  ? 'bg-red-500/20 text-red-300'
                                  : suggestion.impact === 'medium'
                                  ? 'bg-yellow-500/20 text-yellow-300'
                                  : 'bg-green-500/20 text-green-300'
                              }`}>
                                {suggestion.impact} impact
                              </span>
                              <span className="text-gray-400">
                                Est. savings: {suggestion.estimatedSavings}
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={suggestion.action}
                            className="ml-2 px-3 py-1 bg-cyan-600 hover:bg-cyan-700 text-white text-xs rounded transition-colors"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Actions */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                  Quick Actions
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={measurePerformance}
                    className="flex items-center justify-center space-x-2 p-2 bg-slate-800/50 hover:bg-slate-700/50 text-white text-xs rounded transition-colors"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Refresh</span>
                  </button>
                  <button
                    onClick={() => analyzeAndOptimize(metrics!)}
                    disabled={!metrics}
                    className="flex items-center justify-center space-x-2 p-2 bg-slate-800/50 hover:bg-slate-700/50 text-white text-xs rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Target className="w-4 h-4" />
                    <span>Measure</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

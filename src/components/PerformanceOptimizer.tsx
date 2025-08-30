import React, { useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';
import { 
  Activity, 
  Zap, 
  Gauge, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Cpu
} from 'lucide-react';

interface PerformanceOptimizerProps {
  enabled: boolean;
  showMetrics?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCompression?: boolean;
}

// Simple Progress component
const Progress: React.FC<{ value: number; className?: string }> = ({ value, className = "" }) => (
  <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
    <div 
      className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
      style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
    />
  </div>
);

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  loadTime: number;
  memoryUsage: number;
  cpuUsage: number;
  networkLatency: number;
  bundleSize: number;
  lighthouseScore: number;
}

interface OptimizationSuggestion {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  impact: 'high' | 'medium' | 'low';
  estimatedSavings: string;
  category: 'performance' | 'seo' | 'accessibility' | 'best-practices';
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ 
  enabled, 
  showMetrics = true, 
  enableLazyLoading = true, 
  enablePreloading = true, 
  enableCompression = true 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0,
    bundleSize: 0,
    lighthouseScore: 0
  });

  const [isMonitoring, setIsMonitoring] = useState(false);
  const [optimizations, setOptimizations] = useState<OptimizationSuggestion[]>([]);
  const [activeOptimizations, setActiveOptimizations] = useState<string[]>([]);

  // Performance monitoring
  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    
    // Simulate performance monitoring
    const interval = setInterval(() => {
      setMetrics(prev => ({
        fcp: Math.random() * 2000 + 500,
        lcp: Math.random() * 3000 + 1000,
        fid: Math.random() * 100 + 10,
        cls: Math.random() * 0.1 + 0.01,
        ttfb: Math.random() * 500 + 100,
        loadTime: Math.random() * 3000 + 500,
        memoryUsage: Math.random() * 100,
        cpuUsage: Math.random() * 80,
        networkLatency: Math.random() * 200 + 50,
        bundleSize: Math.random() * 2000 + 500,
        lighthouseScore: Math.random() * 40 + 60
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  // Generate optimization suggestions
  useEffect(() => {
    const suggestions: OptimizationSuggestion[] = [
      {
        id: '1',
        title: 'Image Optimization',
        description: 'Compress and optimize images using WebP format and lazy loading',
        priority: 'high',
        impact: 'high',
        estimatedSavings: '2-5 seconds',
        category: 'performance'
      },
      {
        id: '2',
        title: 'Code Splitting',
        description: 'Implement dynamic imports and route-based code splitting',
        priority: 'high',
        impact: 'high',
        estimatedSavings: '1-3 seconds',
        category: 'performance'
      },
      {
        id: '3',
        title: 'Bundle Analysis',
        description: 'Analyze and reduce bundle size by removing unused dependencies',
        priority: 'medium',
        impact: 'medium',
        estimatedSavings: '500KB-1MB',
        category: 'performance'
      },
      {
        id: '4',
        title: 'Caching Strategy',
        description: 'Implement service worker and aggressive caching policies',
        priority: 'medium',
        impact: 'high',
        estimatedSavings: '1-2 seconds',
        category: 'performance'
      },
      {
        id: '5',
        title: 'Critical CSS',
        description: 'Inline critical CSS and defer non-critical styles',
        priority: 'low',
        impact: 'medium',
        estimatedSavings: '200-500ms',
        category: 'performance'
      }
    ];

    setOptimizations(suggestions);
  }, []);

  const applyOptimization = useCallback((id: string) => {
    setActiveOptimizations(prev => [...prev, id]);
    
    // Simulate optimization process
    setTimeout(() => {
      setActiveOptimizations(prev => prev.filter(opt => opt !== id));
    }, 3000);
  }, []);

  const getPerformanceStatus = (score: number) => {
    if (score >= 90) return { status: 'Excellent', color: 'bg-green-500', icon: CheckCircle };
    if (score >= 70) return { status: 'Good', color: 'bg-yellow-500', icon: TrendingUp };
    if (score >= 50) return { status: 'Fair', color: 'bg-orange-500', icon: AlertTriangle };
    return { status: 'Poor', color: 'bg-red-500', icon: AlertTriangle };
  };

  const performanceStatus = getPerformanceStatus(metrics.lighthouseScore);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gauge className="h-5 w-5" />
            Performance Monitor
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <Button 
              onClick={startMonitoring} 
              disabled={isMonitoring}
              className="flex items-center gap-2"
            >
              <Activity className="h-4 w-4" />
              Start Monitoring
            </Button>
            <Button 
              onClick={stopMonitoring} 
              disabled={!isMonitoring}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Clock className="h-4 w-4" />
              Stop Monitoring
            </Button>
          </div>

          {isMonitoring && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {metrics.loadTime.toFixed(0)}ms
                </div>
                <div className="text-sm text-gray-600">Load Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {metrics.memoryUsage.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-600">Memory Usage</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {metrics.cpuUsage.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-600">CPU Usage</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">
                  {metrics.networkLatency.toFixed(0)}ms
                </div>
                <div className="text-sm text-gray-600">Network Latency</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">
                  {(metrics.bundleSize / 1024).toFixed(1)}KB
                </div>
                <div className="text-sm text-gray-600">Bundle Size</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">
                  {metrics.lighthouseScore.toFixed(0)}
                </div>
                <div className="text-sm text-gray-600">Lighthouse Score</div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Performance Score
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <Badge className={`${performanceStatus.color} text-white`}>
              {performanceStatus.status}
            </Badge>
            <div className="flex items-center gap-2">
              <performanceStatus.icon className="h-4 w-4" />
              <span className="text-sm text-gray-600">
                Score: {metrics.lighthouseScore.toFixed(0)}/100
              </span>
            </div>
          </div>
          <Progress value={metrics.lighthouseScore} className="w-full" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Optimization Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {optimizations.map((optimization) => (
              <div key={optimization.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold">{optimization.title}</h4>
                      <Badge variant={
                        optimization.priority === 'high' ? 'destructive' : 
                        optimization.priority === 'medium' ? 'default' : 'secondary'
                      }>
                        {optimization.priority}
                      </Badge>
                      <Badge variant="outline">{optimization.category}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {optimization.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-green-600">
                        Estimated savings: {optimization.estimatedSavings}
                      </span>
                      <span className="text-blue-600">
                        Impact: {optimization.impact}
                      </span>
                    </div>
                  </div>
                  <Button
                    onClick={() => applyOptimization(optimization.id)}
                    disabled={activeOptimizations.includes(optimization.id)}
                    size="sm"
                    className="ml-4"
                  >
                    {activeOptimizations.includes(optimization.id) ? (
                      <>
                        <Cpu className="h-4 w-4 mr-2 animate-spin" />
                        Applying...
                      </>
                    ) : (
                      'Apply'
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {activeOptimizations.length > 0 && (
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            {activeOptimizations.length} optimization(s) are currently being applied. 
            This may take a few moments to complete.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default PerformanceOptimizer;
=======
  domSize: number;
  resourceCount: number;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  showMetrics = false,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCompression = true
}) => {
  const metricsRef = useRef<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    loadTime: 0,
    domSize: 0,
    resourceCount: 0
  });

  const observerRef = useRef<PerformanceObserver | null>(null);
  const [showMetricsPanel, setShowMetricsPanel] = React.useState(false);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (!enabled || !('performance' in window)) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      metricsRef.current.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      metricsRef.current.ttfb = navigation.responseStart - navigation.requestStart;
    }

    // Measure DOM size
    metricsRef.current.domSize = document.querySelectorAll('*').length;
    
    // Count resources
    const resources = performance.getEntriesByType('resource');
    metricsRef.current.resourceCount = resources.length;

    // Calculate total resource size
    const totalSize = resources.reduce((acc, resource) => {
      const transferSize = (resource as PerformanceResourceTiming).transferSize || 0;
      return acc + transferSize;
    }, 0);

    console.log('Performance Metrics:', {
      ...metricsRef.current,
      totalResourceSize: `${(totalSize / 1024 / 1024).toFixed(2)} MB`
    });
  }, [enabled]);

  // Core Web Vitals monitoring
  const setupWebVitals = useCallback(() => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    try {
      // First Contentful Paint (FCP)
      observerRef.current = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            metricsRef.current.fcp = entry.startTime;
            console.log('FCP:', entry.startTime);
          }
        }
      });
      observerRef.current.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          metricsRef.current.lcp = entry.startTime;
          console.log('LCP:', entry.startTime);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          metricsRef.current.fid = entry.processingStart - entry.startTime;
          console.log('FID:', metricsRef.current.fid);
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        metricsRef.current.cls = clsValue;
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

    } catch (error) {
      console.warn('Web Vitals monitoring not supported:', error);
    }
  }, [enabled]);

  // Resource optimization
  const optimizeResources = useCallback(() => {
    if (!enabled) return;

    // Lazy load images
    if (enableLazyLoading && 'IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img);
      });
    }

    // Preload critical resources
    if (enablePreloading) {
      const criticalResources = [
        '/fonts/orbitron-v16-latin-400.woff2',
        '/fonts/orbitron-v16-latin-600.woff2',
        '/images/hero-bg.jpg'
      ];

      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.includes('font') ? 'font' : 'image';
        if (resource.includes('font')) {
          link.type = 'font/woff2';
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });
    }

    // Enable compression hints
    if (enableCompression) {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Accept-Encoding';
      meta.content = 'gzip, deflate, br';
      document.head.appendChild(meta);
    }
  }, [enabled, enableLazyLoading, enablePreloading, enableCompression]);

  // Memory optimization
  const optimizeMemory = useCallback(() => {
    if (!enabled) return;

    // Clean up event listeners on unmount
    const cleanup = () => {
      // Remove any global event listeners
      window.removeEventListener('scroll', () => {});
      window.removeEventListener('resize', () => {});
    };

    // Monitor memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      console.log('Memory Usage:', {
        usedJSHeapSize: `${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)} MB`,
        totalJSHeapSize: `${(memory.totalJSHeapSize / 1024 / 1024).toFixed(2)} MB`,
        jsHeapSizeLimit: `${(memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2)} MB`
      });
    }

    return cleanup;
  }, [enabled]);

  // Network optimization
  const optimizeNetwork = useCallback(() => {
    if (!enabled) return;

    // DNS prefetch for external domains
    const externalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com'
    ];

    externalDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Preconnect to critical domains
    const criticalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    criticalDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    // Setup performance monitoring
    setupWebVitals();
    optimizeResources();
    optimizeMemory();
    optimizeNetwork();

    // Measure performance after page load
    const handleLoad = () => {
      setTimeout(measurePerformance, 100);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [enabled, setupWebVitals, optimizeResources, optimizeMemory, optimizeNetwork, measurePerformance]);

  // Performance metrics panel
  const MetricsPanel = () => (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed top-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4 text-white text-sm z-50 max-w-xs"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-cyan-400">Performance Metrics</h3>
        <button
          onClick={() => setShowMetricsPanel(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className="text-cyan-400">{metricsRef.current.fcp.toFixed(0)}ms</span>
        </div>
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className="text-cyan-400">{metricsRef.current.lcp.toFixed(0)}ms</span>
        </div>
        <div className="flex justify-between">
          <span>FID:</span>
          <span className="text-cyan-400">{metricsRef.current.fid.toFixed(0)}ms</span>
        </div>
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className="text-cyan-400">{metricsRef.current.cls.toFixed(3)}</span>
        </div>
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className="text-cyan-400">{metricsRef.current.loadTime.toFixed(0)}ms</span>
        </div>
        <div className="flex justify-between">
          <span>DOM Size:</span>
          <span className="text-cyan-400">{metricsRef.current.domSize}</span>
        </div>
        <div className="flex justify-between">
          <span>Resources:</span>
          <span className="text-cyan-400">{metricsRef.current.resourceCount}</span>
        </div>
      </div>
    </motion.div>
  );

  if (!enabled) return null;

  return (
    <>
      {/* Performance toggle button */}
      {showMetrics && (
        <button
          onClick={() => setShowMetricsPanel(!showMetricsPanel)}
          className="fixed top-4 right-4 z-40 p-2 bg-slate-800/80 backdrop-blur-sm border border-cyan-400/30 rounded-lg text-cyan-400 hover:bg-slate-700/80 transition-colors"
          title="Toggle Performance Metrics"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </button>
      )}

      {/* Performance metrics panel */}
      <AnimatePresence>
        {showMetricsPanel && <MetricsPanel />}
      </AnimatePresence>
    </>
  );
};
>>>>>>> main

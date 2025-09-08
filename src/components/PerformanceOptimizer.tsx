import React, { useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';


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
  {/* Removed stray closing brace */}

            // Lazy load background images
            if (target.dataset.bgSrc) {
              target.style.backgroundImage = `url(${target.dataset.bgSrc})`;
              target.classList.remove('lazy-bg');
              observerRef.current?.unobserve(target);
            }

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
  const [metrics, setMetrics] = React.useState<PerformanceMetrics>({
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

  const [isMonitoring, setIsMonitoring] = React.useState(false);
  const [optimizations, setOptimizations] = React.useState<OptimizationSuggestion[]>([]);
  const [activeOptimizations, setActiveOptimizations] = React.useState<string[]>([]);

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
    if (!enabled || typeof window === 'undefined') return;

    const initPerformanceMonitoring = () => {
      setIsMonitoring(true);
      navigationStartRef.current = performance.now();

      // Monitor Core Web Vitals
      if ('PerformanceObserver' in window) {
        try {
          // First Contentful Paint
          observerRef.current = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
                const fcp = entry.startTime;
                setMetrics(prev => prev ? { ...prev, firstContentfulPaint: fcp } : null);
                
                if (logMetrics) {
                  // // // // // console.log('First Contentful Paint:', fcp, 'ms')}
                
                if (fcp > threshold.firstContentfulPaint) {
                  // // // // // console.warn(`FCP (${fcp}ms) exceeds threshold (${threshold.firstContentfulPaint}ms)`)}
              }
            })});
          observerRef.current.observe({ entryTypes['paint'] });

          // Largest Contentful Paint
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            if (lastEntry) {
              const lcp = lastEntry.startTime;
              setMetrics(prev => prev ? { ...prev, largestContentfulPaint: lcp } : null);
              
              if (logMetrics) {
                // // // // // console.log('Largest Contentful Paint:', lcp, 'ms')}
              
              if (lcp > threshold.largestContentfulPaint) {
                // // // // // console.warn(`LCP (${lcp}ms) exceeds threshold (${threshold.largestContentfulPaint}ms)`)}
            }
          });
          lcpObserver.observe({ entryTypes['largest-contentful-paint'] });

          // Cumulative Layout Shift
          const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0;
            const entries = list.getEntries();
            entries.forEach((entry)  => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value}
            });
            
            setMetrics(prev => prev ? { ...prev, cumulativeLayoutShift: clsValue } : null);
            
            if (logMetrics) {
              // // // // // console.log('Cumulative Layout Shift:', clsValue)}
            
            if (clsValue > threshold.cumulativeLayoutShift) {
              // // // // // console.warn(`CLS (${clsValue}) exceeds threshold (${threshold.cumulativeLayoutShift})`)}
          });
          clsObserver.observe({ entryTypes['layout-shift'] });

          // First Input Delay
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry)  => {
              const fid = entry.processingStart - entry.startTime;
              setMetrics(prev => prev ? { ...prev, firstInputDelay: fid } : null);
              
              if (logMetrics) {
                // // // // // console.log('First Input Delay:', fid, 'ms')}
              
              if (fid > threshold.firstInputDelay) {
                // // // // // console.warn(`FID (${fid}ms) exceeds threshold (${threshold.firstInputDelay}ms)`)}
            })});
          fidObserver.observe({ entryTypes['first-input'] })} catch (error) {
          // // // // // console.warn('Performance monitoring initialization failed:', error)}
      }

      // Monitor page load events
      const handleLoad = () => {
        const loadTime = performance.now() - navigationStartRef.current;
        const domContentLoaded = performance.timing?.domContentLoadedEventEnd - performance.timing?.navigationStart || 0;
        const windowLoad = performance.timing?.loadEventEnd - performance.timing?.navigationStart || 0;

    // Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      const entries = list.getEntries();
      entries.forEach((entry: )  => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      performanceDataRef.current.cls = clsValue;
      console.log('CLS:', clsValue);
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

        if (logMetrics) {
          // // // // // console.log('Page Load Time:', loadTime, 'ms');
          // // // // // console.log('DOM Content Loaded:', domContentLoaded, 'ms');
          // // // // // console.log('Window Load:', windowLoad, 'ms')}

        if (loadTime > threshold.pageLoadTime) {
          // // // // // console.warn(`Page load time (${loadTime}ms) exceeds threshold (${threshold.pageLoadTime}ms)`)}

        // Send metrics to analytics
        if (sendToAnalytics) {
          sendMetricsToAnalytics({
            pageLoadTime: loadTime,
            firstContentfulPaint: metrics?.firstContentfulPaint || 0,
            largestContentfulPaint: metrics?.largestContentfulPaint || 0,
            cumulativeLayoutShift: metrics?.cumulativeLayoutShift || 0,
            firstInputDelay: metrics?.firstInputDelay || 0,
            domContentLoaded,
            windowLoad,
            timeToInteractive: loadTime,
          })}
      };

      // Use both load event and performance timing
      if (document.readyState === 'complete') {
        handleLoad()} else {
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad)}
    };

    initPerformanceMonitoring();

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()}
      setIsMonitoring(false)}}, [enabled, logMetrics, sendToAnalytics, threshold]);

  // Reset metrics on route change
  useEffect(() => {
    setMetrics(null);
    navigationStartRef.current = performance.now()}, [location.pathname]);

  // Performance optimization functions
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add lazy loading
      if (!img.loading) {
        img.loading = 'lazy'}
      
      // Add decoding attribute
      if (!img.decoding) {
        img.decoding = 'async'}
    })}, []);

  const optimizeFonts = useCallback(() => {
    // Preload critical fonts
    const criticalFonts = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    ];
    setOptimizations(suggestions);
  }, []);

  // Apply optimization
  const applyOptimization = useCallback((id: string) => {
    setActiveOptimizations(prev => [...prev, id]);
    // Simulate optimization application
    setTimeout(() => {
      setActiveOptimizations(prev => prev.filter(opt => opt !== id));
    }, 3000);
  }, []);

  if (!enabled) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="w-80 bg-white/95 backdrop-blur-sm border-cyan-500/30 shadow-xl">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Gauge className="w-5 h-5 text-cyan-600" />
            Performance Optimizer
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Performance Metrics */}
          <div className="space-y-3">
            <h4 className="font-medium text-gray-700">Current Metrics</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-green-500" />
                <span>FCP: {metrics.fcp.toFixed(0)}ms</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                <span>LCP: {metrics.lcp.toFixed(0)}ms</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span>FID: {metrics.fid.toFixed(0)}ms</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-purple-500" />
                <span>CLS: {metrics.cls.toFixed(3)}</span>
              </div>
            </div>
          </div>

          {/* Optimization Suggestions */}
          <div className="space-y-3">
            <h4 className="font-medium text-gray-700">Optimizations</h4>
            <div className="space-y-2">
              {optimizations.map((opt) => (
                <div key={opt.id} className="p-3 bg-gray-50 rounded-lg border">
                  <div className="flex items-start justify-between mb-2">
                    <h5 className="font-medium text-gray-800">{opt.title}</h5>
                    <Badge 
                      variant={opt.priority === 'high' ? 'destructive' : opt.priority === 'medium' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {opt.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{opt.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      Impact: {opt.impact} • Savings: {opt.estimatedSavings}
                    </span>
                    <Button
                      size="sm"
                      onClick={() => applyOptimization(opt.id)}
                      disabled={activeOptimizations.includes(opt.id)}
                      className="h-7 px-2 text-xs"
                    >
                      {activeOptimizations.includes(opt.id) ? 'Applying...' : 'Apply'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monitoring Controls */}
          <div className="flex gap-2">
            <Button
              onClick={startMonitoring}
              disabled={isMonitoring}
              className="flex-1"
              size="sm"
            >
              {isMonitoring ? 'Monitoring...' : 'Start Monitoring'}
            </Button>
            <Button
              onClick={stopMonitoring}
              disabled={!isMonitoring}
              variant="outline"
              size="sm"
            >
              Stop
            </Button>
          </div>

          {/* Status Alert */}
          {activeOptimizations.length > 0 && (
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                Applying {activeOptimizations.length} optimization{activeOptimizations.length > 1 ? 's' : ''}...
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );

  // Debounce utility function
  function debounce<T extends (...args: [])  => any>(
    func: anyT,
    wait: number
  ): (...args: Parameters<T>)  => void {
    let timeout: anyNodeJS.Timeout;
    return (...args: Parameters<T>)  => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  // Service Worker registration for caching
  const registerServiceWorker = useCallback(async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('SW registered: ', registration);
      } catch (registrationError) {
        console.log('SW registration failed: ', registrationError);
      }
    }
  }, []);

      // Send to custom analytics endpoint
      fetch('/api/analytics/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: location.pathname,
          timestamp: new Date().toISOString(),
          metrics,
          score: calculatePerformanceScore(metrics),
          userAgent: navigator.userAgent,
        }),
      }).catch(()  => {
        // Silently fail if analytics endpoint is not available
      })} catch (error) {
      // // // // // console.warn('Failed to send performance metrics:', error)}
  }, [location.pathname, calculatePerformanceScore]);

  // Don't render thing visible
  return null};

// Hook for accessing performance metrics
export const usePerformanceMetrics[, React.Dispatch<React.SetStateAction<any>>] = () => {
  const [metrics, setMetrics] = useState<any>(null);

  useEffect(() => {
    const updateMetrics = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          setMetrics({
            pageLoadTime: navigation.loadEventEnd - navigation.startTime,
            firstContentfulPaint: 0, // Will be updated by PerformanceObserver
            largestContentfulPaint: 0, // Will be updated by PerformanceObserver
            cumulativeLayoutShift: 0, // Will be updated by PerformanceObserver
            firstInputDelay: 0, // Will be updated by PerformanceObserver
            timeToInteractive: navigation.loadEventEnd - navigation.startTime,
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.startTime,
            windowLoad: navigation.loadEventEnd - navigation.startTime,
          })}
      }
    };

    updateMetrics();
    window.addEventListener('load', updateMetrics);
    return ()  => window.removeEventListener('load', updateMetrics)}, []);

  return metrics};

// Export default component
export default PerformanceOptimizer;

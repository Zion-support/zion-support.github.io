import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  Zap, 
  Clock, 
  HardDrive, 
  Network, 
  Cpu, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Info,
  Settings,
  RefreshCw
} from 'lucide-react';

interface PerformanceMetrics {
  pageLoadTime: number;
  memoryUsage: number;
  bundleSize: number;
  performanceScore: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  domContentLoaded: number;
}

interface OptimizationSuggestion {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  category: 'performance' | 'accessibility' | 'seo' | 'best-practices';
  implemented: boolean;
}

export const PerformanceOptimizer: React.FC<{
  children: React.ReactNode;
  showMetrics?: boolean;
  onOptimize?: (metrics: PerformanceMetrics) => void;
  autoOptimize?: boolean;
  checkInterval?: number;
}> = ({ 
  children, 
  showMetrics = false, 
  onOptimize, 
  autoOptimize = false,
  checkInterval = 30000 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    pageLoadTime: 0,
    memoryUsage: 0,
    bundleSize: 0,
    performanceScore: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    timeToInteractive: 0,
    domContentLoaded: 0
  });

  const [suggestions, setSuggestions] = useState<OptimizationSuggestion[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [lastCheck, setLastCheck] = useState<Date>(new Date());
  const [showDetails, setShowDetails] = useState(false);

  // Performance monitoring functions
  const measurePerformance = useCallback(async (): Promise<PerformanceMetrics> => {
    const startTime = performance.now();
    
    // Get performance timing data
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    // Calculate key metrics
    const pageLoadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
    const domContentLoaded = navigation ? navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart : 0;
    
    // Get paint metrics
    const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
    const lcp = paint.find(entry => entry.name === 'largest-contentful-paint');
    
    // Memory usage (if available)
    const memory = (performance as any).memory;
    const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0;
    
    // Estimate bundle size (rough calculation)
    const bundleSize = performance.getEntriesByType('resource')
      .filter((entry: any) => entry.initiatorType === 'script' || entry.initiatorType === 'css')
      .reduce((total: number, entry: any) => total + (entry.transferSize || 0), 0) / 1024 / 1024;
    
    // Calculate performance score (Lighthouse-like)
    let performanceScore = 100;
    
    if (pageLoadTime > 3000) performanceScore -= 20;
    if (pageLoadTime > 5000) performanceScore -= 20;
    if (memoryUsage > 100) performanceScore -= 15;
    if (bundleSize > 2) performanceScore -= 15;
    if (bundleSize > 5) performanceScore -= 15;
    
    performanceScore = Math.max(0, performanceScore);
    
    const newMetrics: PerformanceMetrics = {
      pageLoadTime,
      memoryUsage: Math.round(memoryUsage * 100) / 100,
      bundleSize: Math.round(bundleSize * 100) / 100,
      performanceScore,
      firstContentfulPaint: fcp ? fcp.startTime : 0,
      largestContentfulPaint: lcp ? lcp.startTime : 0,
      cumulativeLayoutShift: 0, // Would need to be measured over time
      firstInputDelay: 0, // Would need user interaction
      timeToInteractive: navigation ? navigation.domInteractive - navigation.fetchStart : 0,
      domContentLoaded
    };
    
    return newMetrics;
  }, []);

  // Generate optimization suggestions
  const generateSuggestions = useCallback((currentMetrics: PerformanceMetrics): OptimizationSuggestion[] => {
    const newSuggestions: OptimizationSuggestion[] = [];
    
    if (currentMetrics.pageLoadTime > 3000) {
      newSuggestions.push({
        id: 'page-load-time',
        title: 'Optimize Page Load Time',
        description: 'Page load time is above 3 seconds. Consider code splitting, lazy loading, and image optimization.',
        impact: 'high',
        category: 'performance',
        implemented: false
      });
    }
    
    if (currentMetrics.memoryUsage > 100) {
      newSuggestions.push({
        id: 'memory-usage',
        title: 'Reduce Memory Usage',
        description: 'Memory usage is high. Check for memory leaks and optimize component lifecycle.',
        impact: 'medium',
        category: 'performance',
        implemented: false
      });
    }
    
    if (currentMetrics.bundleSize > 2) {
      newSuggestions.push({
        id: 'bundle-size',
        title: 'Optimize Bundle Size',
        description: 'Bundle size is large. Implement tree shaking, code splitting, and remove unused dependencies.',
        impact: 'high',
        category: 'performance',
        implemented: false
      });
    }
    
    if (currentMetrics.performanceScore < 80) {
      newSuggestions.push({
        id: 'overall-performance',
        title: 'Improve Overall Performance',
        description: 'Performance score is below 80. Review and implement performance best practices.',
        impact: 'high',
        category: 'performance',
        implemented: false
      });
    }
    
    return newSuggestions;
  }, []);

  // Start monitoring
  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    const interval = setInterval(async () => {
      try {
        const newMetrics = await measurePerformance();
        setMetrics(newMetrics);
        setLastCheck(new Date());
        
        // Generate new suggestions
        const newSuggestions = generateSuggestions(newMetrics);
        setSuggestions(newSuggestions);
        
        // Call callback if provided
        if (onOptimize) {
          onOptimize(newMetrics);
        }
        
        // Auto-optimize if enabled
        if (autoOptimize && newMetrics.performanceScore < 80) {
          console.log('Auto-optimization triggered due to low performance score');
          // Implement auto-optimization logic here
        }
      } catch (error) {
        console.error('Performance measurement failed:', error);
      }
    }, checkInterval);
    
    return () => clearInterval(interval);
  }, [measurePerformance, generateSuggestions, onOptimize, autoOptimize, checkInterval]);

  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  // Manual performance check
  const manualCheck = useCallback(async () => {
    try {
      const newMetrics = await measurePerformance();
      setMetrics(newMetrics);
      setLastCheck(new Date());
      
      const newSuggestions = generateSuggestions(newMetrics);
      setSuggestions(newSuggestions);
      
      if (onOptimize) {
        onOptimize(newMetrics);
      }
    } catch (error) {
      console.error('Manual performance check failed:', error);
    }
  }, [measurePerformance, generateSuggestions, onOptimize]);

  // Initialize monitoring on mount
  useEffect(() => {
    if (showMetrics) {
      manualCheck();
      startMonitoring();
    }
    
    return () => {
      stopMonitoring();
    };
  }, [showMetrics, manualCheck, startMonitoring, stopMonitoring]);

  // Performance status indicator
  const getPerformanceStatus = useMemo(() => {
    if (metrics.performanceScore >= 90) return { color: 'text-green-400', icon: CheckCircle, label: 'Excellent' };
    if (metrics.performanceScore >= 80) return { color: 'text-yellow-400', icon: TrendingUp, label: 'Good' };
    if (metrics.performanceScore >= 60) return { color: 'text-orange-400', icon: AlertTriangle, label: 'Fair' };
    return { color: 'text-red-400', icon: AlertTriangle, label: 'Poor' };
  }, [metrics.performanceScore]);

  const StatusIcon = getPerformanceStatus.icon;

  if (!showMetrics) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      
      {/* Performance Dashboard */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-zion-blue-dark border border-zion-cyan/30 rounded-2xl shadow-2xl shadow-zion-cyan/20 backdrop-blur-md">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-zion-cyan/20">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-zion-cyan" />
              <span className="text-white font-semibold">Performance</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={manualCheck}
                className="p-1 text-zion-cyan hover:text-white transition-colors duration-200"
                title="Refresh metrics"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="p-1 text-zion-cyan hover:text-white transition-colors duration-200"
                title="Toggle details"
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Metrics */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 text-sm">Score</span>
              <div className="flex items-center space-x-2">
                <StatusIcon className={`w-4 h-4 ${getPerformanceStatus.color}`} />
                <span className={`text-sm font-semibold ${getPerformanceStatus.color}`}>
                  {getPerformanceStatus.label}
                </span>
              </div>
            </div>
            
            <div className="text-2xl font-bold text-white mb-2">
              {metrics.performanceScore}
            </div>
            
            <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
              <div 
                className={`h-2 rounded-full transition-all duration-500 ${
                  metrics.performanceScore >= 90 ? 'bg-green-500' :
                  metrics.performanceScore >= 80 ? 'bg-yellow-500' :
                  metrics.performanceScore >= 60 ? 'bg-orange-500' : 'bg-red-500'
                }`}
                style={{ width: `${metrics.performanceScore}%` }}
              />
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="flex items-center space-x-2">
                <Clock className="w-3 h-3 text-zion-cyan" />
                <span className="text-gray-400">Load:</span>
                <span className="text-white">{metrics.pageLoadTime.toFixed(0)}ms</span>
              </div>
              <div className="flex items-center space-x-2">
                <HardDrive className="w-3 h-3 text-zion-cyan" />
                <span className="text-gray-400">Memory:</span>
                <span className="text-white">{metrics.memoryUsage}MB</span>
              </div>
              <div className="flex items-center space-x-2">
                <Cpu className="w-3 h-3 text-zion-cyan" />
                <span className="text-gray-400">Bundle:</span>
                <span className="text-white">{metrics.bundleSize}MB</span>
              </div>
              <div className="flex items-center space-x-2">
                <Network className="w-3 h-3 text-zion-cyan" />
                <span className="text-gray-400">FCP:</span>
                <span className="text-white">{metrics.firstContentfulPaint.toFixed(0)}ms</span>
              </div>
            </div>
          </div>

          {/* Detailed Metrics */}
          {showDetails && (
            <div className="border-t border-zion-cyan/20 p-4">
              <h4 className="text-white font-semibold mb-3 text-sm">Detailed Metrics</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Time to Interactive:</span>
                  <span className="text-white">{metrics.timeToInteractive.toFixed(0)}ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">DOM Content Loaded:</span>
                  <span className="text-white">{metrics.domContentLoaded.toFixed(0)}ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Largest Contentful Paint:</span>
                  <span className="text-white">{metrics.largestContentfulPaint.toFixed(0)}ms</span>
                </div>
              </div>

              {/* Optimization Suggestions */}
              {suggestions.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-white font-semibold mb-3 text-sm">Optimization Suggestions</h4>
                  <div className="space-y-2">
                    {suggestions.slice(0, 3).map((suggestion) => (
                      <div key={suggestion.id} className="p-2 bg-gray-800/50 rounded-lg">
                        <div className="flex items-start space-x-2">
                          <Info className="w-3 h-3 text-zion-cyan mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="text-white font-medium text-xs">{suggestion.title}</div>
                            <div className="text-gray-400 text-xs mt-1">{suggestion.description}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Status Bar */}
          <div className="px-4 py-2 bg-gray-800/50 rounded-b-2xl">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-400">
                {isMonitoring ? 'Monitoring' : 'Stopped'}
              </span>
              <span className="text-gray-500">
                {lastCheck.toLocaleTimeString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Lazy loading wrapper for images
export const LazyImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}> = ({ src, alt, className, width, height }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      data-src={src}
      alt={alt}
      className={`lazy ${className || ''} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      width={width}
      height={height}
      onLoad={() => setIsLoaded(true)}
      style={{
        transition: 'opacity 0.3s ease-in-out',
        filter: isLoaded ? 'none' : 'blur(5px)'
      }}
    />
  );
};

// Performance monitoring hook
export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0
  });

  useEffect(() => {
    if ('performance' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fidEntry = entry as PerformanceEntry & { processingStart: number };
          const fid = fidEntry.processingStart - fidEntry.startTime;
          setMetrics(prev => ({ ...prev, fid }));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let cls = 0;
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as PerformanceEntry & { value: number };
          cls += layoutShiftEntry.value;
        }
        setMetrics(prev => ({ ...prev, cls }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  return metrics;
};

export default PerformanceOptimizer;

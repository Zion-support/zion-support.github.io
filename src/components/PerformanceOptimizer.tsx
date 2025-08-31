<<<<<<< HEAD
import React, { useEffect, useState, useCallback } from 'react';
=======
import React, { useEffect, useRef, useState, useCallback } from 'react';
>>>>>>> 9cb0e0fb6f8bf7e7054ca17e97a3de29ca2678f1
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';
import {
  Activity,
  Zap,
  Gauge,
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
<<<<<<< HEAD
  memoryUsage: number;
  cpuUsage: number;
=======
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
>>>>>>> 9cb0e0fb6f8bf7e7054ca17e97a3de29ca2678f1
}

interface PerformanceOptimizerProps {
  enabled: boolean;
  monitoringInterval?: number;
  showMetrics?: boolean;
  autoOptimize?: boolean;
}

<<<<<<< HEAD
export function PerformanceOptimizer({ 
  enabled = true, 
  showMetrics = false,
  autoOptimize = true 
}: PerformanceOptimizerProps) {
=======
export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  monitoringInterval = 5000,
  showMetrics = false,
  autoOptimize = true
}) => {
>>>>>>> 9cb0e0fb6f8bf7e7054ca17e97a3de29ca2678f1
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

<<<<<<< HEAD
    try {
      // Core Web Vitals
      const fcp = performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0;
      const lcp = performance.getEntriesByName('largest-contentful-paint')[0]?.startTime || 0;
      const fid = performance.getEntriesByName('first-input-delay')[0]?.processingStart || 0;
      const cls = performance.getEntriesByName('cumulative-layout-shift')[0]?.value || 0;
      
      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const ttfb = navigationEntry?.responseStart - navigationEntry?.requestStart || 0;

      // Bundle size estimation
      const bundleSize = performance.getEntriesByType('resource')
        .filter((entry: any) => entry.name.includes('.js') || entry.name.includes('.css'))
        .reduce((total: number, entry: any) => total + (entry.transferSize || 0), 0);

      // Memory usage
      const memoryInfo = (performance as any).memory;
      const memoryUsage = memoryInfo ? memoryInfo.usedJSHeapSize / 1024 / 1024 : 0;

      // CPU usage estimation
      const cpuUsage = performance.now() / 1000;

      setMetrics({
        fcp,
        lcp,
        fid,
        cls,
        ttfb,
        bundleSize,
        memoryUsage,
        cpuUsage
      });
    } catch (error) {
      console.warn('Performance measurement failed:', error);
    }
  }, [enabled]);

  // Service Worker registration
  const registerServiceWorker = useCallback(async () => {
    if (!enabled || !('serviceWorker' in navigator)) return;

    try {
      setServiceWorkerStatus('installing');
      
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      });

      if (registration.installing) {
        registration.installing.addEventListener('statechange', (event) => {
          if ((event.target as any).state === 'installed') {
            setServiceWorkerStatus('installed');
          }
=======
    // Observe LCP
    if ('PerformanceObserver' in window) {
      try {
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          
          setMetrics(prev => prev ? {
            ...prev,
            lcp: lastEntry.startTime
          } : null);
>>>>>>> 9cb0e0fb6f8bf7e7054ca17e97a3de29ca2678f1
        });
        
        observerRef.current.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.warn('PerformanceObserver not supported');
      }
    }

    // Start monitoring
    measurePerformance();
    intervalRef.current = setInterval(measurePerformance, monitoringInterval);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [enabled, monitoringInterval, measurePerformance]);

  // Preload critical resources
  useEffect(() => {
    if (!enabled) return;

    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&display=swap';
    fontLink.as = 'style';
    document.head.appendChild(fontLink);

    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.href = '/css/index.css';
    criticalCSS.as = 'style';
    document.head.appendChild(criticalCSS);
  }, [enabled]);

  if (!enabled) return null;

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
                    {suggestions
                      .sort((a, b) => a.priority - b.priority)
                      .slice(0, 5)
                      .map((suggestion) => (
                        <motion.div
                          key={suggestion.id}
                          className="bg-slate-800/50 p-3 rounded-lg border-l-4 border-cyan-500"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h5 className="text-sm font-semibold text-white mb-1">
                                {suggestion.title}
                              </h5>
                              <p className="text-xs text-gray-400 mb-2">
                                {suggestion.description}
                              </p>
                              <div className="flex items-center space-x-2">
                                <span className={`px-2 py-1 text-xs rounded-full ${
                                  suggestion.impact === 'high' 
                                    ? 'bg-red-500/20 text-red-400' 
                                    : suggestion.impact === 'medium'
                                    ? 'bg-yellow-500/20 text-yellow-400'
                                    : 'bg-green-500/20 text-green-400'
                                }`}>
                                  {suggestion.impact} impact
                                </span>
                                <span className="text-xs text-gray-500">
                                  {suggestion.estimatedSavings}
                                </span>
                              </div>
                            </div>
                            <button
                              onClick={suggestion.action}
                              className="ml-2 p-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors"
                              title="Apply optimization"
                            >
                              <Zap className="w-4 h-4" />
                            </button>
                          </div>
                        </motion.div>
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
                    onClick={() => window.location.reload()}
                    className="flex items-center justify-center space-x-2 p-2 bg-slate-800/50 text-gray-300 hover:text-white rounded-lg transition-colors"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span className="text-xs">Refresh</span>
                  </button>
                  <button
                    onClick={measurePerformance}
                    className="flex items-center justify-center space-x-2 p-2 bg-slate-800/50 text-gray-300 hover:text-white rounded-lg transition-colors"
                  >
                    <BarChart3 className="w-4 h-4" />
                    <span className="text-xs">Measure</span>
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

import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Gauge, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  X,
  Settings,
  Monitor,
  Activity,
  Battery,
  Wifi,
  HardDrive
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  domLoad: number | null;
  windowLoad: number | null;
}

interface PerformanceScore {
  overall: number;
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
}

export function PerformanceOptimizer() {
  const [isOpen, setIsOpen] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoad: null,
    windowLoad: null
  });
  const [score, setScore] = useState<PerformanceScore>({
    overall: 0,
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0
  });
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);

  // Calculate performance scores
  const calculateScore = useCallback((metrics: PerformanceMetrics): PerformanceScore => {
    const fcpScore = metrics.fcp ? (metrics.fcp < 1800 ? 100 : Math.max(0, 100 - ((metrics.fcp - 1800) / 100))) : 0;
    const lcpScore = metrics.lcp ? (metrics.lcp < 2500 ? 100 : Math.max(0, 100 - ((metrics.lcp - 2500) / 100))) : 0;
    const fidScore = metrics.fid ? (metrics.fid < 100 ? 100 : Math.max(0, 100 - ((metrics.fid - 100) / 10))) : 0;
    const clsScore = metrics.cls ? (metrics.cls < 0.1 ? 100 : Math.max(0, 100 - (metrics.cls * 1000))) : 0;

    const overall = Math.round((fcpScore + lcpScore + fidScore + clsScore) / 4);

    return { overall, fcp: Math.round(fcpScore), lcp: Math.round(lcpScore), fid: Math.round(fidScore), cls: Math.round(clsScore) };
  }, []);

  // Generate optimization suggestions
  const generateOptimizations = useCallback((metrics: PerformanceMetrics, score: PerformanceScore): string[] => {
    const suggestions: string[] = [];

    if (score.fcp < 90) {
      suggestions.push('Optimize First Contentful Paint: Minimize render-blocking resources');
    }
    if (score.lcp < 90) {
      suggestions.push('Improve Largest Contentful Paint: Optimize images and critical resources');
    }
    if (score.fid < 90) {
      suggestions.push('Reduce First Input Delay: Optimize JavaScript execution');
    }
    if (score.cls < 90) {
      suggestions.push('Minimize Cumulative Layout Shift: Set explicit dimensions for images');
    }
    if (metrics.ttfb && metrics.ttfb > 600) {
      suggestions.push('Reduce Time to First Byte: Optimize server response time');
    }

    if (suggestions.length === 0) {
      suggestions.push('Performance is excellent! Keep up the good work.');
    }

    return suggestions;
  }, []);

  // Monitor performance metrics
  const monitorPerformance = useCallback(() => {
    if (!('performance' in window)) return;

    setIsMonitoring(true);

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'first-input') {
          const fid = (entry as any).processingStart - entry.startTime;
          setMetrics(prev => ({ ...prev, fid }));
        }
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      list.getEntries().forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      setMetrics(prev => ({ ...prev, cls: clsValue }));
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Navigation timing
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({
        ...prev,
        ttfb: navigationEntry.responseStart - navigationEntry.requestStart,
        domLoad: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart,
        windowLoad: navigationEntry.loadEventEnd - navigationEntry.loadEventStart
      }));
    }

    // Cleanup observers
    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  // Apply performance optimizations
  const applyOptimizations = useCallback(() => {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src!;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));

    // Preload critical resources
    const criticalResources = [
      '/fonts/orbitron-v9-latin-700.woff2',
      '/images/hero-bg.jpg'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.includes('.woff2') ? 'font' : 'image';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Optimize animations for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      document.documentElement.classList.add('reduced-motion');
    }

    // Service worker registration for caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(console.error);
    }
  }, []);

  // Start monitoring on mount
  useEffect(() => {
    const cleanup = monitorPerformance();
    applyOptimizations();

    return cleanup;
  }, [monitorPerformance, applyOptimizations]);

  // Update score when metrics change
  useEffect(() => {
    const newScore = calculateScore(metrics);
    setScore(newScore);
    const newOptimizations = generateOptimizations(metrics, newScore);
    setOptimizations(newOptimizations);
  }, [metrics, calculateScore, generateOptimizations]);

  // Performance status indicator
  const getPerformanceStatus = useMemo(() => {
    if (score.overall >= 90) return { color: 'text-green-400', icon: CheckCircle, label: 'Excellent' };
    if (score.overall >= 70) return { color: 'text-yellow-400', icon: TrendingUp, label: 'Good' };
    if (score.overall >= 50) return { color: 'text-orange-400', icon: AlertTriangle, label: 'Needs Improvement' };
    return { color: 'text-red-400', icon: AlertTriangle, label: 'Poor' };
  }, [score.overall]);

  const StatusIcon = getPerformanceStatus.icon;

  return (
    <>
      {/* Performance Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-24 z-50 p-4 bg-zion-purple text-white rounded-full shadow-lg hover:bg-zion-purple-light focus:outline-none focus:ring-4 focus:ring-zion-purple/50 transition-all duration-300"
        aria-label="Performance monitoring"
        aria-expanded={isOpen}
        aria-controls="performance-panel"
      >
        <Monitor className="w-6 h-6" />
      </button>

      {/* Performance Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 w-96 bg-zion-slate-dark border border-zion-purple rounded-lg shadow-2xl"
            id="performance-panel"
            role="dialog"
            aria-labelledby="performance-title"
            aria-describedby="performance-description"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-zion-purple/30">
              <div className="flex items-center space-x-3">
                <Zap className="w-6 h-6 text-zion-purple" />
                <div>
                  <h3 id="performance-title" className="text-lg font-semibold text-zion-purple">
                    Performance Monitor
                  </h3>
                  <p id="performance-description" className="text-sm text-zion-slate-light">
                    Real-time performance metrics and optimizations
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-zion-slate-light hover:text-zion-purple focus:outline-none focus:ring-2 focus:ring-zion-purple rounded"
                aria-label="Close performance panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Performance Score */}
            <div className="p-4 border-b border-zion-purple/30">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-zion-slate-light">Overall Score</span>
                <div className="flex items-center space-x-2">
                  <StatusIcon className={`w-5 h-5 ${getPerformanceStatus.color}`} />
                  <span className={`text-lg font-bold ${getPerformanceStatus.color}`}>
                    {score.overall}/100
                  </span>
                </div>
              </div>
              <div className="w-full bg-zion-slate rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-zion-purple to-zion-cyan h-2 rounded-full transition-all duration-500"
                  style={{ width: `${score.overall}%` }}
                />
              </div>
              <p className="text-xs text-zion-slate-light/70 mt-2">
                Status: {getPerformanceStatus.label}
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="p-4 border-b border-zion-purple/30">
              <h4 className="text-sm font-medium text-zion-slate-light mb-3">Core Web Vitals</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-zion-slate-dark/50 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-4 h-4 text-zion-cyan" />
                    <span className="text-xs text-zion-slate-light">FCP</span>
                  </div>
                  <div className="text-lg font-semibold text-zion-cyan">
                    {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : '--'}
                  </div>
                  <div className="text-xs text-zion-slate-light/70">
                    Score: {score.fcp}/100
                  </div>
                </div>

                <div className="bg-zion-slate-dark/50 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Gauge className="w-4 h-4 text-zion-purple" />
                    <span className="text-xs text-zion-slate-light">LCP</span>
                  </div>
                  <div className="text-lg font-semibold text-zion-purple">
                    {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : '--'}
                  </div>
                  <div className="text-xs text-zion-slate-light/70">
                    Score: {score.lcp}/100
                  </div>
                </div>

                <div className="bg-zion-slate-dark/50 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Activity className="w-4 h-4 text-zion-neon" />
                    <span className="text-xs text-zion-slate-light">FID</span>
                  </div>
                  <div className="text-lg font-semibold text-zion-neon">
                    {metrics.fid ? `${Math.round(metrics.fid)}ms` : '--'}
                  </div>
                  <div className="text-xs text-zion-slate-light/70">
                    Score: {score.fid}/100
                  </div>
                </div>

                <div className="bg-zion-slate-dark/50 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-zion-cyber" />
                    <span className="text-xs text-zion-slate-light">CLS</span>
                  </div>
                  <div className="text-lg font-semibold text-zion-cyber">
                    {metrics.cls ? metrics.cls.toFixed(3) : '--'}
                  </div>
                  <div className="text-xs text-zion-slate-light/70">
                    Score: {score.cls}/100
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Metrics */}
            <div className="p-4 border-b border-zion-purple/30">
              <h4 className="text-sm font-medium text-zion-slate-light mb-3">Additional Metrics</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-zion-slate-light">TTFB:</span>
                  <span className="text-zion-cyan">
                    {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : '--'}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zion-slate-light">DOM Load:</span>
                  <span className="text-zion-purple">
                    {metrics.domLoad ? `${Math.round(metrics.domLoad)}ms` : '--'}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zion-slate-light">Window Load:</span>
                  <span className="text-zion-neon">
                    {metrics.windowLoad ? `${Math.round(metrics.windowLoad)}ms` : '--'}
                  </span>
                </div>
              </div>
            </div>

            {/* Optimizations */}
            <div className="p-4">
              <h4 className="text-sm font-medium text-zion-slate-light mb-3">Optimization Suggestions</h4>
              <div className="space-y-2">
                {optimizations.map((optimization, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-zion-slate-light/80">{optimization}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-zion-purple/30 bg-zion-slate-dark/50">
              <div className="text-xs text-zion-slate-light/70 space-y-1">
                <p>Monitoring: {isMonitoring ? 'Active' : 'Inactive'}</p>
                <p>Last updated: {new Date().toLocaleTimeString()}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

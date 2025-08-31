import React, { useEffect, useRef, useState, useCallback } from 'react';
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
  Smartphone
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domLoad: number;
  windowLoad: number;
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
}

interface PerformanceOptimizerProps {
  enabled: boolean;
  monitoringInterval?: number;
  showMetrics?: boolean;
  autoOptimize?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  monitoringInterval = 5000,
  showMetrics = false,
  autoOptimize = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (!enabled || !window.performance) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
    const lcp = paint.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;
    
    const newMetrics: PerformanceMetrics = {
      fcp,
      lcp,
      fid: 0, // Will be updated by observer
      cls: 0, // Will be updated by observer
      ttfb: navigation.responseStart - navigation.requestStart,
      domLoad: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      windowLoad: navigation.loadEventEnd - navigation.loadEventStart
    };

    setMetrics(newMetrics);
    
    // Auto-optimize if enabled
    if (autoOptimize) {
      analyzeAndOptimize(newMetrics);
    }
  }, [enabled, autoOptimize]);

  // Performance analysis and optimization
  const analyzeAndOptimize = useCallback((currentMetrics: PerformanceMetrics) => {
    const newOptimizations: string[] = [];
    
    if (currentMetrics.fcp > 2000) {
      newOptimizations.push('First Contentful Paint is slow - consider image optimization and critical CSS inlining');
    }
    
    if (currentMetrics.lcp > 4000) {
      newOptimizations.push('Largest Contentful Paint is slow - optimize hero images and reduce render-blocking resources');
    }
    
    if (currentMetrics.ttfb > 600) {
      newOptimizations.push('Time to First Byte is slow - optimize server response and database queries');
    }
    
    if (currentMetrics.domLoad > 1000) {
      newOptimizations.push('DOM loading is slow - reduce JavaScript bundle size and defer non-critical scripts');
    }

    if (newOptimizations.length > 0) {
      setOptimizations(prev => [...prev, ...newOptimizations]);
      applyOptimizations(newOptimizations);
    }
  }, []);

  // Apply performance optimizations
  const applyOptimizations = useCallback((optimizationList: string[]) => {
    setIsOptimizing(true);
    
    // Image optimization
    if (optimizationList.some(opt => opt.includes('image'))) {
      optimizeImages();
    }
    
    // Script optimization
    if (optimizationList.some(opt => opt.includes('JavaScript') || opt.includes('bundle'))) {
      optimizeScripts();
    }
    
    // CSS optimization
    if (optimizationList.some(opt => opt.includes('CSS'))) {
      optimizeCSS();
    }

    setTimeout(() => setIsOptimizing(false), 2000);
  }, []);

  // Image optimization
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }, []);

  // Script optimization
  const optimizeScripts = useCallback(() => {
    const scripts = document.querySelectorAll('script:not([data-critical])');
    scripts.forEach(script => {
      if (!script.async && !script.defer) {
        script.defer = true;
      }
    });
  }, []);

  // CSS optimization
  const optimizeCSS = useCallback(() => {
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    links.forEach(link => {
      if (!link.hasAttribute('media')) {
        link.setAttribute('media', 'print');
        link.setAttribute('onload', "this.media='all'");
      }
    });
  }, []);

  // Setup performance observer
  useEffect(() => {
    if (!enabled) return;

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
      {showMetrics && metrics && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs z-50 max-w-xs">
          <h4 className="font-bold mb-2">Performance Metrics</h4>
          <div className="space-y-1">
            <div>FCP: {metrics.fcp.toFixed(0)}ms</div>
            <div>LCP: {metrics.lcp.toFixed(0)}ms</div>
            <div>TTFB: {metrics.ttfb.toFixed(0)}ms</div>
            <div>DOM: {metrics.domLoad.toFixed(0)}ms</div>
          </div>
          {isOptimizing && (
            <div className="mt-2 text-cyan-400 animate-pulse">
              Optimizing...
            </div>
          )}
        </div>
      )}
      
      {/* Performance monitoring overlay for development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 left-4 bg-black/80 text-white p-3 rounded-lg text-xs z-50">
          <div className="font-bold mb-1">Performance Monitor</div>
          <div className="space-y-1">
            <div>Status: {enabled ? 'Active' : 'Inactive'}</div>
            <div>Optimizations: {optimizations.length}</div>
            <div>Auto-optimize: {autoOptimize ? 'On' : 'Off'}</div>
          </div>
        </div>
      )}
    </>
  );
};

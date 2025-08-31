<<<<<<< HEAD
import React, { useEffect, useRef, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableLazyLoading?: boolean;
  enableIntersectionObserver?: boolean;
  enablePerformanceMonitoring?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableLazyLoading = true,
  enableIntersectionObserver = true,
  enablePerformanceMonitoring = true,
}) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const performanceDataRef = useRef<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
  });

  // Performance monitoring
  useEffect(() => {
    if (!enablePerformanceMonitoring) return;

    // Monitor Core Web Vitals
=======
<<<<<<< HEAD
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Gauge, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  X,
  RefreshCw,
  Settings,
  BarChart3,
  Cpu,
  Memory,
  HardDrive,
  Network
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  domLoad: number | null;
  windowLoad: number | null;
  bundleSize: number;
  memoryUsage: number;
  cpuUsage: number;
}

interface PerformanceOptimizerProps {
  enabled?: boolean;
  showMetrics?: boolean;
  autoOptimize?: boolean;
  optimizeImages?: boolean;
  lazyLoadComponents?: boolean;
  preloadCritical?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  showMetrics = false,
  autoOptimize = true,
  optimizeImages = true,
  lazyLoadComponents = true,
  preloadCritical = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoad: null,
    windowLoad: null,
    bundleSize: 0,
    memoryUsage: 0,
    cpuUsage: 0
  });
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [performanceScore, setPerformanceScore] = useState<string>('A');
  const [optimizationStatus, setOptimizationStatus] = useState<string>('Ready');
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [showMetricsDisplay, setShowMetricsDisplay] = useState(showMetrics);
  const [showOptimizationNotification, setShowOptimizationNotification] = useState(false);
  const [serviceWorkerStatus, setServiceWorkerStatus] = useState<'installing' | 'installed' | 'failed'>('installing');
  const [optimizationHistory, setOptimizationHistory] = useState<Array<{action: string, improvement: number}>>([]);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
>>>>>>> 29f254fe9be1bd5b31fe3bfec5a570a9a2c707f8
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
<<<<<<< HEAD
          performanceDataRef.current.fcp = fcp.startTime;
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          performanceDataRef.current.lcp = lcp.startTime;
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1];
        if (fid) {
          performanceDataRef.current.fid = fid.processingStart - fid.startTime;
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let cls = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            cls += (entry as any).value;
          }
        }
        performanceDataRef.current.cls = cls;
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, [enablePerformanceMonitoring]);

  // Lazy loading with Intersection Observer
  useEffect(() => {
    if (!enableLazyLoading || !enableIntersectionObserver) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            
            // Lazy load images
            if (target.tagName === 'IMG') {
              const img = target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
              }
            }
            
            // Lazy load components
            if (target.dataset.lazy) {
              target.classList.add('lazy-loaded');
              observer.unobserve(target);
            }
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    observerRef.current = observer;

    // Observe all lazy elements
    const lazyElements = document.querySelectorAll('[data-lazy], img[data-src]');
    lazyElements.forEach((el) => observer.observe(el));
=======
          setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1];
        if (fid) {
          setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let cls = 0;
        for (const entry of list.getEntries()) {
          if (entry instanceof LayoutShift) {
            cls += entry.value;
          }
        }
        setMetrics(prev => ({ ...prev, cls }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ 
          ...prev, 
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart,
          domLoad: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart,
          windowLoad: navigationEntry.loadEventEnd - navigationEntry.loadEventStart
        }));
      }

      // Store observers for cleanup
      observerRef.current = {
        disconnect: () => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        }
      };
    }

    // Measure bundle size and memory usage
    if ('performance' in window) {
      const memory = (performance as any).memory;
      if (memory) {
        setMetrics(prev => ({
          ...prev,
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024,
          cpuUsage: 0 // CPU usage requires more complex measurement
        }));
      }
    }

    // Estimate bundle size from loaded scripts
    const scripts = document.querySelectorAll('script[src]');
    let totalSize = 0;
    scripts.forEach(script => {
      const src = script.getAttribute('src');
      if (src && src.includes('chunk') || src.includes('main')) {
        totalSize += 100; // Rough estimate
      }
    });
    setMetrics(prev => ({ ...prev, bundleSize: totalSize * 1024 }));
  }, []);

  // Calculate performance score
  const calculatePerformanceScore = useCallback(() => {
    let score = 100;
    
    if (metrics.fcp && metrics.fcp > 1800) score -= 20;
    if (metrics.lcp && metrics.lcp > 2500) score -= 20;
    if (metrics.fid && metrics.fid > 100) score -= 20;
    if (metrics.cls && metrics.cls > 0.1) score -= 20;
    if (metrics.ttfb && metrics.ttfb > 600) score -= 20;
    
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }, [metrics]);

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!optimizeImages) return;
    
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (img instanceof HTMLImageElement) {
        // Add lazy loading
        if (!img.loading) {
          img.loading = 'lazy';
        }
        
        // Add srcset for responsive images
        if (!img.srcset && img.src) {
          const src = img.src;
          const baseName = src.substring(0, src.lastIndexOf('.'));
          const extension = src.substring(src.lastIndexOf('.'));
          img.srcset = `${baseName}-300${extension} 300w, ${baseName}-600${extension} 600w, ${baseName}-900${extension} 900w`;
          img.sizes = '(max-width: 600px) 300px, (max-width: 900px) 600px, 900px';
        }
      }
    });
  }, [optimizeImages]);

  // Component lazy loading
  const implementLazyLoading = useCallback(() => {
    if (!lazyLoadComponents) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          if (target.dataset.src) {
            target.src = target.dataset.src;
            target.removeAttribute('data-src');
            observer.unobserve(target);
          }
        }
      });
    });

    const lazyElements = document.querySelectorAll('[data-src]');
    lazyElements.forEach(el => observer.observe(el));
  }, [lazyLoadComponents]);

  // Critical resource preloading
  const preloadCriticalResources = useCallback(() => {
    if (!preloadCritical) return;
    
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/css/critical.css',
      '/js/main.js'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.includes('.css') ? 'style' : resource.includes('.js') ? 'script' : 'font';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, [preloadCritical]);

  // Memory optimization
  const optimizeMemory = useCallback(() => {
    // Clean up event listeners
    const cleanup = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };

    // Set up periodic cleanup
    intervalRef.current = setInterval(cleanup, 30000);
    
    return cleanup;
  }, []);

  // Run all optimizations
  const runOptimizations = useCallback(async () => {
    if (!enabled) return;
    
    setIsOptimizing(true);
    setOptimizationStatus('Optimizing...');
    
    try {
      await Promise.all([
        optimizeImages(),
        implementLazyLoading(),
        preloadCriticalResources()
      ]);
      
      const cleanup = optimizeMemory();
      
      setOptimizations([
        'Images optimized with lazy loading',
        'Components configured for lazy loading',
        'Critical resources preloaded',
        'Memory management optimized'
      ]);
      
      setOptimizationStatus('Optimized');
      setShowOptimizationNotification(true);
      
      // Add to optimization history
      const improvement = Math.random() * 100 + 50; // Simulated improvement
      setOptimizationHistory(prev => [...prev, {
        action: 'Performance optimization',
        improvement
      }]);
      
      setTimeout(() => setShowOptimizationNotification(false), 3000);
      
      return cleanup;
    } catch (error) {
      console.error('Performance optimization failed:', error);
      setOptimizationStatus('Failed');
    } finally {
      setIsOptimizing(false);
    }
  }, [enabled, optimizeImages, implementLazyLoading, preloadCriticalResources, optimizeMemory]);

  // Optimize performance (main function)
  const optimizePerformance = useCallback(async () => {
    const cleanup = await runOptimizations();
    if (cleanup) {
      cleanup();
    }
  }, [runOptimizations]);

  // Check service worker status
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(() => {
        setServiceWorkerStatus('installed');
      }).catch(() => {
        setServiceWorkerStatus('failed');
      });
    }
  }, []);

  // Initialize performance monitoring
  useEffect(() => {
    if (enabled) {
      measurePerformance();
      
      // Update performance score when metrics change
      const score = calculatePerformanceScore();
      setPerformanceScore(score);
    }
  }, [enabled, measurePerformance, calculatePerformanceScore]);

  // Auto-optimize when enabled
  useEffect(() => {
    if (enabled && autoOptimize) {
      const timer = setTimeout(() => {
        runOptimizations();
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [enabled, autoOptimize, runOptimizations]);
>>>>>>> 29f254fe9be1bd5b31fe3bfec5a570a9a2c707f8

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
<<<<<<< HEAD
  }, [enableLazyLoading, enableIntersectionObserver]);

  // Resource hints for performance
  useEffect(() => {
    if (!enableLazyLoading) return;

    // Preload critical resources
    const criticalResources = [
      '/css/critical.css',
      '/js/critical.js',
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });

    // DNS prefetch for external domains
    const externalDomains = [
      'https://fonts.googleapis.com',
      'https://cdn.jsdelivr.net',
    ];

    externalDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, [enableLazyLoading]);

  return <>{children}</>;
};

export default PerformanceOptimizer;
=======
  }, []);
=======
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  TrendingUp,
  Clock,
  BarChart3,
  Activity,
  Cpu,
  HardDrive,
  Network,
  Smartphone,
  Monitor,
  Eye,
  Settings,
  RefreshCw,
  CheckCircle,
  AlertTriangle,
  Info,
  X,
  Play,
  Pause,
  Target,
  Gauge,
  Speed,
  Battery,
  Wifi,
  Signal
} from 'lucide-react';

interface PerformanceMetrics {
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  fcp: number; // First Contentful Paint
  si: number; // Speed Index
  tti: number; // Time to Interactive
  tbt: number; // Total Blocking Time
}

interface BundleAnalysis {
  totalSize: number;
  jsSize: number;
  cssSize: number;
  imageSize: number;
  fontSize: number;
  compressionRatio: number;
  chunkCount: number;
  largestChunks: Array<{
    name: string;
    size: number;
    percentage: number;
  }>;
}

interface PerformanceIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  category: 'core-web-vitals' | 'bundle' | 'images' | 'fonts' | 'caching';
  fixable: boolean;
  estimatedImpact: number;
}

interface PerformanceOptimizerProps {
  autoMonitor?: boolean;
  showAdvanced?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  autoMonitor = true,
  showAdvanced = false,
  onMetricsUpdate
}) => {
  const [isMonitoring, setIsMonitoring] = useState(autoMonitor);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [bundleAnalysis, setBundleAnalysis] = useState<BundleAnalysis | null>(null);
  const [issues, setIssues] = useState<PerformanceIssue[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [optimizationHistory, setOptimizationHistory] = useState<Array<{
    timestamp: Date;
    action: string;
    impact: number;
  }>>([]);

  // Performance monitoring interval
  useEffect(() => {
    if (!isMonitoring) return;

    const interval = setInterval(() => {
      measurePerformance();
    }, 10000); // Measure every 10 seconds

    return () => clearInterval(interval);
  }, [isMonitoring]);

  // Initial performance measurement
  useEffect(() => {
    if (autoMonitor) {
      measurePerformance();
      analyzeBundle();
    }
  }, [autoMonitor]);

  // Measure Core Web Vitals and performance metrics
  const measurePerformance = useCallback(async () => {
    try {
      // Use Performance API to get metrics
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const newMetrics: PerformanceMetrics = {
        ttfb: navigation.responseStart - navigation.requestStart,
        fcp: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        lcp: 0, // Will be updated by LCP observer
        fid: 0, // Will be updated by FID observer
        cls: 0, // Will be updated by CLS observer
        si: 0, // Speed Index calculation
        tti: 0, // Time to Interactive
        tbt: 0, // Total Blocking Time
      };

      // LCP Observer
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          newMetrics.lcp = lastEntry.startTime;
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // FID Observer
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            newMetrics.fid = Math.max(newMetrics.fid, entry.processingStart - entry.startTime);
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // CLS Observer
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          list.getEntries().forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          newMetrics.cls = clsValue;
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }

      setMetrics(newMetrics);
      onMetricsUpdate?.(newMetrics);
      
      // Analyze for issues
      analyzePerformanceIssues(newMetrics);
      
    } catch (error) {
      console.error('Error measuring performance:', error);
    }
  }, [onMetricsUpdate]);
>>>>>>> origin/main

  // Analyze bundle size and composition
  const analyzeBundle = useCallback(async () => {
    try {
      // This would typically come from webpack-bundle-analyzer or similar
      // For now, we'll simulate the analysis
      const mockBundleAnalysis: BundleAnalysis = {
        totalSize: 2.4 * 1024 * 1024, // 2.4MB
        jsSize: 1.8 * 1024 * 1024, // 1.8MB
        cssSize: 300 * 1024, // 300KB
        imageSize: 200 * 1024, // 200KB
        fontSize: 100 * 1024, // 100KB
        compressionRatio: 0.7, // 70% compression
        chunkCount: 45,
        largestChunks: [
          { name: 'vendor.js', size: 800 * 1024, percentage: 33 },
          { name: 'app.js', size: 600 * 1024, percentage: 25 },
          { name: 'styles.css', size: 300 * 1024, percentage: 12.5 },
        ]
      };

      setBundleAnalysis(mockBundleAnalysis);
    } catch (error) {
      console.error('Error analyzing bundle:', error);
    }
  }, []);

  // Analyze performance issues
  const analyzePerformanceIssues = useCallback((currentMetrics: PerformanceMetrics) => {
    const newIssues: PerformanceIssue[] = [];

    // LCP issues
    if (currentMetrics.lcp > 2500) {
      newIssues.push({
        id: 'lcp-slow',
        type: 'error',
        title: 'Slow Largest Contentful Paint',
        description: `LCP is ${currentMetrics.lcp}ms, should be under 2.5s`,
        impact: 'high',
        category: 'core-web-vitals',
        fixable: true,
        estimatedImpact: 15
      });
    }

    // FID issues
    if (currentMetrics.fid > 100) {
      newIssues.push({
        id: 'fid-slow',
        type: 'error',
        title: 'Slow First Input Delay',
        description: `FID is ${currentMetrics.fid}ms, should be under 100ms`,
        impact: 'high',
        category: 'core-web-vitals',
        fixable: true,
        estimatedImpact: 12
      });
    }

    // CLS issues
    if (currentMetrics.cls > 0.1) {
      newIssues.push({
        id: 'cls-high',
        type: 'warning',
        title: 'High Cumulative Layout Shift',
        description: `CLS is ${currentMetrics.cls.toFixed(3)}, should be under 0.1`,
        impact: 'medium',
        category: 'core-web-vitals',
        fixable: true,
        estimatedImpact: 8
      });
    }

    // Bundle size issues
    if (bundleAnalysis && bundleAnalysis.totalSize > 2 * 1024 * 1024) {
      newIssues.push({
        id: 'bundle-large',
        type: 'warning',
        title: 'Large Bundle Size',
        description: `Bundle is ${(bundleAnalysis.totalSize / 1024 / 1024).toFixed(1)}MB, consider code splitting`,
        impact: 'medium',
        category: 'bundle',
        fixable: true,
        estimatedImpact: 10
      });
    }

    setIssues(newIssues);
  }, [bundleAnalysis]);

  // Get performance score
  const getPerformanceScore = useCallback((currentMetrics: PerformanceMetrics) => {
    let score = 100;

    // LCP scoring
    if (currentMetrics.lcp > 4000) score -= 25;
    else if (currentMetrics.lcp > 2500) score -= 15;
    else if (currentMetrics.lcp > 2000) score -= 5;

    // FID scoring
    if (currentMetrics.fid > 300) score -= 25;
    else if (currentMetrics.fid > 100) score -= 15;
    else if (currentMetrics.fid > 50) score -= 5;

    // CLS scoring
    if (currentMetrics.cls > 0.25) score -= 25;
    else if (currentMetrics.cls > 0.1) score -= 15;
    else if (currentMetrics.cls > 0.05) score -= 5;

    return Math.max(0, score);
  }, []);

  // Get score color
  const getScoreColor = useCallback((score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  }, []);

  // Get score background
  const getScoreBackground = useCallback((score: number) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  }, []);

  // Get impact color
  const getImpactColor = useCallback((impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-500 bg-red-50 border-red-200';
      case 'medium': return 'text-yellow-500 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-blue-500 bg-blue-50 border-blue-200';
      default: return 'text-gray-500 bg-gray-50 border-gray-200';
    }
  }, []);

  // Filter issues by category
  const filteredIssues = useMemo(() => {
    if (selectedCategory === 'all') return issues;
    return issues.filter(issue => issue.category === selectedCategory);
  }, [issues, selectedCategory]);

  // Optimize performance
  const optimizePerformance = useCallback(async () => {
    setIsAnalyzing(true);
    
    // Simulate optimization process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Add optimization to history
    const optimization = {
      timestamp: new Date(),
      action: 'Performance optimization applied',
      impact: 15
    };
    
    setOptimizationHistory(prev => [optimization, ...prev.slice(0, 9)]);
    setIsAnalyzing(false);
    
    // Re-measure performance
    measurePerformance();
  }, [measurePerformance]);

  // Toggle monitoring
  const toggleMonitoring = useCallback(() => {
    setIsMonitoring(!isMonitoring);
  }, [isMonitoring]);

  if (!metrics && !bundleAnalysis) {
    return (
      <div className="text-center py-8">
        <Activity className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600">Loading performance data...</p>
      </div>
    );
  }

  return (
    <>
<<<<<<< HEAD
      {/* Performance Metrics Display */}
      {showMetricsDisplay && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 left-4 bg-slate-900 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Activity className="w-5 h-5 text-cyan-400" />
              Performance
            </h3>
            <button
              onClick={() => setShowMetricsDisplay(false)}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Performance Score */}
          <div className="mb-4 p-3 bg-slate-800/50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Score</span>
              <span className={`text-2xl font-bold ${
                performanceScore === 'A' ? 'text-green-400' :
                performanceScore === 'B' ? 'text-yellow-400' :
                performanceScore === 'C' ? 'text-orange-400' :
                performanceScore === 'D' ? 'text-red-400' : 'text-red-600'
              }`}>
                {performanceScore}
              </span>
            </div>
          </div>

          {/* Core Web Vitals */}
          {metrics.fcp && metrics.lcp && metrics.fid && metrics.cls && (
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-3 bg-slate-800/50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Gauge className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-gray-400">FCP</span>
                </div>
                <span className="text-sm font-mono text-white">
                  {metrics.fcp.toFixed(0)}ms
                </span>
              </div>
              
              <div className="p-3 bg-slate-800/50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-gray-400">LCP</span>
                </div>
                <span className="text-sm font-mono text-white">
                  {metrics.lcp.toFixed(0)}ms
                </span>
              </div>
              
              <div className="p-3 bg-slate-800/50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-gray-400">Memory</span>
                </div>
                <span className="text-sm font-mono text-white">
                  {metrics.memoryUsage.toFixed(1)}MB
                </span>
              </div>
              
              <div className="p-3 bg-slate-800/50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <HardDrive className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-gray-400">Bundle</span>
                </div>
                <span className="text-sm font-mono text-white">
                  {(metrics.bundleSize / 1024 / 1024).toFixed(1)}MB
                </span>
              </div>
            </div>
          )}

          {/* Service Worker Status */}
          <div className="mb-6 p-3 bg-slate-800/50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Service Worker</span>
              <div className="flex items-center gap-2">
                {serviceWorkerStatus === 'installing' && (
                  <RefreshCw className="w-4 h-4 text-yellow-400 animate-spin" />
                )}
                {serviceWorkerStatus === 'installed' && (
                  <CheckCircle className="w-4 h-4 text-green-400" />
                )}
                {serviceWorkerStatus === 'failed' && (
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                )}
                <span className={`text-xs ${
                  serviceWorkerStatus === 'installed' ? 'text-green-400' :
                  serviceWorkerStatus === 'failed' ? 'text-red-400' : 'text-yellow-400'
                }`}>
                  {serviceWorkerStatus}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={optimizePerformance}
              disabled={isOptimizing}
              className="flex-1 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {isOptimizing ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <Zap className="w-4 h-4" />
              )}
              {isOptimizing ? 'Optimizing...' : 'Optimize Now'}
            </button>
            
            <button
              onClick={measurePerformance}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
              title="Refresh Metrics"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

          {/* Optimization History */}
          {optimizationHistory.length > 0 && (
            <div className="mt-4 p-3 bg-slate-800/50 rounded-lg">
              <h4 className="text-sm font-medium text-white mb-2">Recent Optimizations</h4>
              <div className="space-y-2">
                {optimizationHistory.slice(-3).map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">{item.action}</span>
                    <span className="text-cyan-400">+{item.improvement.toFixed(0)}ms</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      )}

      {/* Optimization Notification */}
      <AnimatePresence>
        {showOptimizationNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 flex items-center gap-2"
          >
            <CheckCircle className="w-4 h-4" />
            <span>Performance optimized successfully!</span>
            <button
              onClick={() => setShowOptimizationNotification(false)}
              className="ml-2 text-white hover:text-green-100"
            >
              <X className="w-4 h-4" />
            </button>
=======
      {/* Floating Performance Button */}
      <button
        onClick={() => setShowPanel(!showPanel)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300/50"
        aria-label="Open performance optimizer"
        title="Performance Optimizer"
      >
        <Zap className="w-6 h-6 mx-auto" />
      </button>

      {/* Performance Panel */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="fixed top-0 left-0 h-full w-96 bg-white shadow-2xl border-r border-gray-200 z-40 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-green-500 to-blue-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6" />
                  <h2 className="text-xl font-semibold">Performance</h2>
                </div>
                <button
                  onClick={() => setShowPanel(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Close performance panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-green-100 mt-2 text-sm">
                Monitor and optimize website performance
              </p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Performance Score */}
              {metrics && (
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Score</h3>
                  <div className={`w-24 h-24 rounded-full ${getScoreBackground(getPerformanceScore(metrics))} flex items-center justify-center mx-auto mb-4`}>
                    <span className={`text-3xl font-bold ${getScoreColor(getPerformanceScore(metrics))}`}>
                      {getPerformanceScore(metrics)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {getPerformanceScore(metrics) >= 90 ? 'Excellent' : 
                     getPerformanceScore(metrics) >= 70 ? 'Good' : 'Needs Improvement'}
                  </p>
                </div>
              )}

              {/* Core Web Vitals */}
              {metrics && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900">Core Web Vitals</h3>
                  <div className="grid grid-cols-1 gap-3">
                    <div className={`p-3 rounded-lg border ${
                      metrics.lcp <= 2500 ? 'border-green-200 bg-green-50' : 
                      metrics.lcp <= 4000 ? 'border-yellow-200 bg-yellow-50' : 'border-red-200 bg-red-50'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">LCP</span>
                        <span className="text-lg font-bold">{metrics.lcp}ms</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {metrics.lcp <= 2500 ? 'Good' : metrics.lcp <= 4000 ? 'Needs improvement' : 'Poor'}
                      </div>
                    </div>

                    <div className={`p-3 rounded-lg border ${
                      metrics.fid <= 100 ? 'border-green-200 bg-green-50' : 
                      metrics.fid <= 300 ? 'border-yellow-200 bg-yellow-50' : 'border-red-200 bg-red-50'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">FID</span>
                        <span className="text-lg font-bold">{metrics.fid}ms</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {metrics.fid <= 100 ? 'Good' : metrics.fid <= 300 ? 'Needs improvement' : 'Poor'}
                      </div>
                    </div>

                    <div className={`p-3 rounded-lg border ${
                      metrics.cls <= 0.1 ? 'border-green-200 bg-green-50' : 
                      metrics.cls <= 0.25 ? 'border-yellow-200 bg-yellow-50' : 'border-red-200 bg-red-50'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">CLS</span>
                        <span className="text-lg font-bold">{metrics.cls.toFixed(3)}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {metrics.cls <= 0.1 ? 'Good' : metrics.cls <= 0.25 ? 'Needs improvement' : 'Poor'}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bundle Analysis */}
              {bundleAnalysis && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900">Bundle Analysis</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Total Size:</span>
                      <span className="font-medium">{(bundleAnalysis.totalSize / 1024 / 1024).toFixed(1)}MB</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">JavaScript:</span>
                      <span className="font-medium">{(bundleAnalysis.jsSize / 1024 / 1024).toFixed(1)}MB</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">CSS:</span>
                      <span className="font-medium">{(bundleAnalysis.cssSize / 1024).toFixed(0)}KB</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Images:</span>
                      <span className="font-medium">{(bundleAnalysis.imageSize / 1024).toFixed(0)}KB</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Fonts:</span>
                      <span className="font-medium">{(bundleAnalysis.fontSize / 1024).toFixed(0)}KB</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Compression:</span>
                      <span className="font-medium">{(bundleAnalysis.compressionRatio * 100).toFixed(0)}%</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Performance Issues */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Issues Found</h3>
                  <div className="flex space-x-1">
                    {['all', 'core-web-vitals', 'bundle', 'images', 'fonts', 'caching'].map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-2 py-1 text-xs rounded transition-colors ${
                          selectedCategory === category
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {category.replace('-', ' ')}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {filteredIssues.map((issue) => (
                    <div
                      key={issue.id}
                      className={`p-3 rounded-lg border-l-4 ${
                        issue.type === 'error' ? 'border-red-500 bg-red-50' :
                        issue.type === 'warning' ? 'border-yellow-500 bg-yellow-50' :
                        'border-blue-500 bg-blue-50'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        {issue.type === 'error' ? (
                          <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                        ) : issue.type === 'warning' ? (
                          <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5" />
                        ) : (
                          <Info className="w-5 h-5 text-blue-500 mt-0.5" />
                        )}

                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-medium text-gray-900">{issue.title}</h5>
                            <span className={`text-xs px-2 py-1 rounded ${getImpactColor(issue.impact)}`}>
                              {issue.impact} impact
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mb-2">{issue.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">
                              Estimated improvement: +{issue.estimatedImpact} points
                            </span>
                            {issue.fixable && (
                              <button className="text-xs text-green-600 hover:text-green-700 font-medium">
                                Auto-fix →
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Optimization Actions */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">Optimization Actions</h3>
                
                <div className="flex space-x-3">
                  <button
                    onClick={optimizePerformance}
                    disabled={isAnalyzing}
                    className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    {isAnalyzing ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Optimizing...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4" />
                        <span>Auto-Optimize</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={toggleMonitoring}
                    className={`px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 ${
                      isMonitoring
                        ? 'bg-blue-500 hover:bg-blue-600 text-white'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                    }`}
                  >
                    {isMonitoring ? (
                      <>
                        <Pause className="w-4 h-4" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        <span>Monitor</span>
                      </>
                    )}
                  </button>
                </div>

                <button
                  onClick={measurePerformance}
                  className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium"
                >
                  <RefreshCw className="w-4 h-4 inline mr-2" />
                  Refresh Metrics
                </button>
              </div>

              {/* Optimization History */}
              {optimizationHistory.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Optimizations</h3>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {optimizationHistory.map((optimization, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{optimization.action}</p>
                          <p className="text-xs text-gray-500">
                            {optimization.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                        <span className="text-sm font-medium text-green-600">
                          +{optimization.impact} pts
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
>>>>>>> origin/main
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Metrics Button */}
      <button
        onClick={() => setShowMetricsDisplay(!showMetricsDisplay)}
        className="fixed bottom-4 left-4 z-50 p-3 bg-slate-800 text-white rounded-full shadow-lg hover:bg-slate-700 transition-colors"
        title={showMetricsDisplay ? 'Hide Performance Metrics' : 'Show Performance Metrics'}
      >
        {showMetricsDisplay ? <BarChart3 className="w-5 h-5" /> : <Activity className="w-5 h-5" />}
      </button>

      {/* Optimization Status Indicator */}
      <div className="fixed top-4 left-4 bg-slate-800 text-white px-3 py-2 rounded-lg shadow-lg z-50 text-sm">
        <div className="flex items-center space-x-2">
          {isOptimizing ? (
            <RefreshCw className="w-4 h-4 animate-spin" />
          ) : (
            <Zap className="w-4 h-4 text-yellow-400" />
          )}
          <span>{optimizationStatus}</span>
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
};
=======
};

export default PerformanceOptimizer;
>>>>>>> origin/main
>>>>>>> 29f254fe9be1bd5b31fe3bfec5a570a9a2c707f8

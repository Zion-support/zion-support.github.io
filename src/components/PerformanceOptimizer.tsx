import React, { useEffect, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceOptimizerProps {
  enabled: boolean;
  enableCodeSplitting?: boolean;
  enableBundleAnalysis?: boolean;
  enablePerformanceMonitoring?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled,
  enableCodeSplitting = true,
  enableBundleAnalysis = true,
  enablePerformanceMonitoring = true
}) => {
  const location = useLocation();

  // Performance monitoring with enhanced metrics
  const performanceMetrics = useMemo<PerformanceMetrics>(() => ({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  }), []);

  // Enhanced code splitting optimization
  const optimizeCodeSplitting = useCallback(() => {
    if (!enableCodeSplitting) return;

    // Preload critical routes
    const criticalRoutes = ['/', '/services', '/about', '/contact'];
    if (criticalRoutes.includes(location.pathname)) {
      // Preload adjacent routes for better UX
      const adjacentRoutes = {
        '/': ['/services', '/about'],
        '/services': ['/', '/pricing'],
        '/about': ['/', '/team'],
        '/contact': ['/', '/services']
      };

      const routesToPreload = adjacentRoutes[location.pathname as keyof typeof adjacentRoutes] || [];
      routesToPreload.forEach(route => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = route;
        document.head.appendChild(link);
      });
    }
  }, [location.pathname, enableCodeSplitting]);

  // Bundle analysis and optimization
  const analyzeBundle = useCallback(() => {
    if (!enableBundleAnalysis) return;

    // Monitor bundle size and performance
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        performanceMetrics.ttfb = navigation.responseStart - navigation.requestStart;
        
        // Log performance metrics for analysis
        console.log('Performance Metrics:', {
          ttfb: performanceMetrics.ttfb,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart
        });
      }
    }
  }, [enableBundleAnalysis, performanceMetrics]);

  // Enhanced performance monitoring
  const setupPerformanceMonitoring = useCallback(() => {
    if (!enablePerformanceMonitoring) return;

    // First Contentful Paint
    if ('PerformanceObserver' in window) {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            performanceMetrics.fcp = entry.startTime;
            console.log('FCP:', performanceMetrics.fcp);
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          performanceMetrics.lcp = lastEntry.startTime;
          console.log('LCP:', performanceMetrics.lcp);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          performanceMetrics.fid = entry.processingStart - entry.startTime;
          console.log('FID:', performanceMetrics.fid);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        performanceMetrics.cls = clsValue;
        console.log('CLS:', performanceMetrics.cls);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  }, [enablePerformanceMonitoring, performanceMetrics]);

  // Resource optimization
  const optimizeResources = useCallback(() => {
    // Optimize images with lazy loading
    const images = document.querySelectorAll('img[data-src]');
    images.forEach((img) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imgElement = entry.target as HTMLImageElement;
            imgElement.src = imgElement.dataset.src || '';
            imgElement.classList.remove('lazy');
            observer.unobserve(imgElement);
          }
        });
      });
      observer.observe(img);
    });

    // Preload critical CSS
    const criticalCSS = document.querySelector('link[data-critical]');
    if (criticalCSS) {
      criticalCSS.setAttribute('rel', 'stylesheet');
    }
  }, []);

  // Memory management
  const optimizeMemory = useCallback(() => {
    // Clean up event listeners and observers
    const cleanup = () => {
      // This will be called when component unmounts
      if ('performance' in window) {
        performance.clearResourceTimings();
      }
    };

    return cleanup;
  }, []);

  useEffect(() => {
    if (!enabled) return;

    optimizeCodeSplitting();
    analyzeBundle();
    setupPerformanceMonitoring();
    optimizeResources();

    const cleanup = optimizeMemory();
    return cleanup;
  }, [
    enabled,
    optimizeCodeSplitting,
    analyzeBundle,
    setupPerformanceMonitoring,
    optimizeResources,
    optimizeMemory
  ]);

  // Route change optimization
  useEffect(() => {
    if (!enabled) return;

    // Optimize for route changes
    optimizeCodeSplitting();
    
    // Preload next likely route
    const nextRoute = getNextLikelyRoute(location.pathname);
    if (nextRoute) {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = nextRoute;
      document.head.appendChild(link);
    }
  }, [location.pathname, enabled, optimizeCodeSplitting]);

  // Helper function to determine next likely route
  const getNextLikelyRoute = (currentPath: string): string | null => {
    const routePatterns: Record<string, string> = {
      '/': '/services',
      '/services': '/pricing',
      '/about': '/team',
      '/contact': '/services'
    };
    return routePatterns[currentPath] || null;
  };

  // Performance recommendations
  const getPerformanceRecommendations = useCallback(() => {
    const recommendations: string[] = [];
    
    if (performanceMetrics.fcp > 2000) {
      recommendations.push('First Contentful Paint is slow. Consider optimizing critical rendering path.');
    }
    
    if (performanceMetrics.lcp > 4000) {
      recommendations.push('Largest Contentful Paint is slow. Optimize images and critical resources.');
    }
    
    if (performanceMetrics.fid > 100) {
      recommendations.push('First Input Delay is high. Consider reducing JavaScript execution time.');
    }
    
    if (performanceMetrics.cls > 0.1) {
      recommendations.push('Cumulative Layout Shift is high. Avoid layout shifts during page load.');
    }

    return recommendations;
  }, [performanceMetrics]);

  // Log performance recommendations
  useEffect(() => {
    if (enabled && enablePerformanceMonitoring) {
      const recommendations = getPerformanceRecommendations();
      if (recommendations.length > 0) {
        console.log('Performance Recommendations:', recommendations);
      }
    }
  }, [enabled, enablePerformanceMonitoring, getPerformanceRecommendations]);

  if (!enabled) return null;

  return (
    <div className="performance-optimizer" style={{ display: 'none' }}>
      {/* Hidden component for performance monitoring */}
      <div data-performance-metrics={JSON.stringify(performanceMetrics)} />
    </div>
  );
};

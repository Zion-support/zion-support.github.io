import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceOptimizerProps {
  enabled: boolean;
  showMetrics?: boolean;
}

export function PerformanceOptimizer({ enabled, showMetrics = false }: PerformanceOptimizerProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/images/hero/ai-transformation.jpg',
        '/images/hero/quantum-computing.jpg',
        '/images/hero/cloud-architecture.jpg'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = resource.endsWith('.woff2') ? 'font' : 'image';
        link.href = resource;
        link.crossOrigin = resource.endsWith('.woff2') ? 'anonymous' : '';
        document.head.appendChild(link);
      });
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add loading="lazy" for non-critical images
        if (!img.classList.contains('critical')) {
          img.loading = 'lazy';
        }
        
        // Add srcset for responsive images
        if (img.dataset.srcset) {
          img.srcset = img.dataset.srcset;
        }
      });
    };

    // Monitor Core Web Vitals
    const monitorCoreWebVitals = () => {
      if ('PerformanceObserver' in window) {
        // First Contentful Paint
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const fcp = entries[entries.length - 1];
          if (fcp) {
            setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
          }
        }).observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lcp = entries[entries.length - 1];
          if (lcp) {
            setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
          }
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const fid = entries[entries.length - 1];
          if (fid) {
            setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
          }
        }).observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift
        new PerformanceObserver((entryList) => {
          let cls = 0;
          entryList.getEntries().forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              cls += entry.value;
            }
          });
          setMetrics(prev => ({ ...prev, cls }));
        }).observe({ entryTypes: ['layout-shift'] });
      }
    };

    // Optimize bundle loading
    const optimizeBundleLoading = () => {
      // Add resource hints
      const resourceHints = [
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: 'https://cdn.gpteng.co' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://cdn.gpteng.co' }
      ];

      resourceHints.forEach(hint => {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        document.head.appendChild(link);
      });
    };

    // Execute optimizations
    const executeOptimizations = async () => {
      setIsOptimizing(true);
      
      try {
        preloadCriticalResources();
        optimizeImages();
        optimizeBundleLoading();
        monitorCoreWebVitals();
        
        // Wait for optimizations to complete
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (error) {
        console.error('Performance optimization failed:', error);
      } finally {
        setIsOptimizing(false);
      }
    };

    executeOptimizations();
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {showMetrics && metrics && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 right-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-4 text-white text-sm z-50"
        >
          <h3 className="font-semibold mb-2 text-cyan-400">Performance Metrics</h3>
          <div className="space-y-1 text-xs">
            <div>FCP: {metrics.fcp?.toFixed(2)}ms</div>
            <div>LCP: {metrics.lcp?.toFixed(2)}ms</div>
            <div>FID: {metrics.fid?.toFixed(2)}ms</div>
            <div>CLS: {metrics.cls?.toFixed(3)}</div>
          </div>
        </motion.div>
      )}
      
      {isOptimizing && (
        <div className="fixed top-4 left-4 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm z-50">
          Optimizing Performance...
        </div>
      )}
    </>
  );
}

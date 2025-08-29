import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

export const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const measurePerformance = async () => {
      setIsOptimizing(true);
      
      try {
        // Measure Core Web Vitals
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.entryType === 'largest-contentful-paint') {
                setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
              }
            }
          });
          
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
        }

        // Measure First Contentful Paint
        const paintEntries = performance.getEntriesByType('paint');
        const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
        }

        // Measure Time to First Byte
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
        }

        // Optimize images
        optimizeImages();
        
        // Preload critical resources
        preloadCriticalResources();
        
        // Optimize fonts
        optimizeFonts();
        
      } catch (error) {
        console.warn('Performance optimization failed:', error);
      } finally {
        setIsOptimizing(false);
      }
    };

    measurePerformance();
  }, [isInView]);

  const optimizeImages = () => {
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
  };

  const preloadCriticalResources = () => {
    const criticalPaths = [
      '/src/components/EnhancedHeroSection.tsx',
      '/src/components/AppHeader.tsx',
      '/src/pages/Home.tsx'
    ];

    criticalPaths.forEach(path => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = path;
      link.as = 'script';
      document.head.appendChild(link);
    });
  };

  const optimizeFonts = () => {
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        // Font optimization logic
        const fontDisplay = 'swap';
        document.documentElement.style.setProperty('--font-display', fontDisplay);
      });
    }
  };

  const getPerformanceScore = (): number => {
    if (!metrics) return 0;
    
    let score = 100;
    
    // FCP scoring (0-100)
    if (metrics.fcp > 1800) score -= 30;
    else if (metrics.fcp > 1000) score -= 15;
    
    // LCP scoring (0-100)
    if (metrics.lcp > 2500) score -= 30;
    else if (metrics.lcp > 1700) score -= 15;
    
    // TTFB scoring (0-100)
    if (metrics.ttfb > 600) score -= 20;
    else if (metrics.ttfb > 300) score -= 10;
    
    return Math.max(0, score);
  };

  const performanceScore = getPerformanceScore();
  const scoreColor = performanceScore >= 90 ? 'text-green-400' : 
                     performanceScore >= 70 ? 'text-yellow-400' : 'text-red-400';

  return (
    <div ref={ref} className="fixed bottom-4 right-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-2xl p-4 shadow-2xl"
      >
        <div className="flex items-center space-x-3 mb-3">
          <div className={`w-3 h-3 rounded-full ${isOptimizing ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`} />
          <span className="text-sm font-medium text-slate-200">
            {isOptimizing ? 'Optimizing...' : 'Performance Monitor'}
          </span>
        </div>
        
        {metrics && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Score:</span>
              <span className={`text-sm font-bold ${scoreColor}`}>
                {performanceScore}/100
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-slate-400">FCP:</span>
                <span className="text-slate-200 ml-1">
                  {Math.round(metrics.fcp)}ms
                </span>
              </div>
              <div>
                <span className="text-slate-400">LCP:</span>
                <span className="text-slate-200 ml-1">
                  {Math.round(metrics.lcp)}ms
                </span>
              </div>
              <div>
                <span className="text-slate-400">TTFB:</span>
                <span className="text-slate-200 ml-1">
                  {Math.round(metrics.ttfb)}ms
                </span>
              </div>
            </div>
          </div>
        )}
        
        {!metrics && (
          <div className="text-xs text-slate-400">
            Measuring performance...
          </div>
        )}
      </motion.div>
    </div>
  );
};

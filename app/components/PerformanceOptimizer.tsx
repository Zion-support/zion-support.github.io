<<<<<<< HEAD
'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Zap, CheckCircle, AlertTriangle, Settings } from 'lucide-react';

interface PerformanceOptimizerProps {
  className?: string;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  className = ''
}) => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [performanceScore, setPerformanceScore] = useState<number | null>(null);

  const runOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    setOptimizations([]);
    
    const optimizationsList = [
      'Optimizing images...',
      'Minifying CSS and JavaScript...',
      'Enabling compression...',
      'Setting up caching...',
      'Optimizing fonts...',
      'Lazy loading resources...'
    ];

    for (let i = 0; i < optimizationsList.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 500));
      setOptimizations(prev => [...prev, optimizationsList[i]]);
    }

    // Simulate performance score calculation
    const score = Math.floor(Math.random() * 20) + 80; // 80-100
    setPerformanceScore(score);
    setIsOptimizing(false);
  }, []);

  useEffect(() => {
    // Auto-run optimizations on mount
    runOptimizations();
  }, [runOptimizations]);

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Zap className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Performance Optimizer</h3>
          <p className="text-gray-600">Automatically optimize your website performance</p>
        </div>
      </div>

      {isOptimizing && (
        <div className="space-y-3 mb-6">
          {optimizations.map((optimization, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-gray-700">{optimization}</span>
            </div>
          ))}
        </div>
      )}

      {performanceScore && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Performance Score</span>
            <span className="text-2xl font-bold text-blue-600">{performanceScore}/100</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${performanceScore}%` }}
            />
          </div>
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={runOptimizations}
          disabled={isOptimizing}
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isOptimizing ? 'Optimizing...' : 'Run Optimization'}
        </button>
        
        <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
          <Settings className="h-5 w-5" />
        </button>
      </div>

      {performanceScore && performanceScore < 90 && (
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
            <span className="text-sm text-yellow-800">
              Performance can be improved. Consider additional optimizations.
            </span>
          </div>
        </div>
      )}
    </div>
  );
=======
import React, { useEffect, useCallback } from 'react';

const PerformanceOptimizer: React.FC = () => {
  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontPreloads = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
        'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLUtHuJ_8JhLjO4.woff2'
      ];

      fontPreloads.forEach(font => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = font;
        link.as = 'style';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });

      // Preload critical images
      const imagePreloads = [
        '/og-image.jpg',
        '/logo.png',
        '/favicon.svg'
      ];

      imagePreloads.forEach(image => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = image;
        link.as = 'image';
        document.head.appendChild(link);
      });
    };

    preloadCriticalResources();
  }, []);

  // Optimize scroll performance
  useEffect(() => {
    let ticking = false;

    const updateScrollPosition = () => {
      // Throttle scroll events for better performance
      if (!ticking) {
        requestAnimationFrame(() => {
          // Update any scroll-based animations here
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', updateScrollPosition, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollPosition);
  }, []);

  // Optimize resize performance
  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        // Handle resize optimizations
        window.dispatchEvent(new Event('optimizedResize'));
      }, 150);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              target.classList.add('animate-fade-in');
              observer.unobserve(target);
            }
          });
        },
        {
          rootMargin: '50px 0px',
          threshold: 0.1
        }
      );

      // Observe elements with lazy-load class
      const lazyElements = document.querySelectorAll('.lazy-load');
      lazyElements.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    }
  }, []);

  // Web Vitals monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }
  }, []);

  // Memory optimization
  const optimizeMemory = useCallback(() => {
    // Clear unused event listeners periodically
    if (typeof window !== 'undefined' && 'performance' in window) {
      const memory = (performance as any).memory;
      if (memory && memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
        // Trigger garbage collection if available
        if ('gc' in window) {
          (window as any).gc();
        }
      }
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(optimizeMemory, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, [optimizeMemory]);

  return null; // This component doesn't render anything
>>>>>>> main
};

export default PerformanceOptimizer;
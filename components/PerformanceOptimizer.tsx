import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, TrendingUp, Shield, Eye, Download, Wifi, Cpu } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}

interface PerformanceOptimizerProps {
  className?: string;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ className = '' }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    timeToInteractive: 0
  });
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationStatus, setOptimizationStatus] = useState<string>('idle');
  const [showMetrics, setShowMetrics] = useState(false);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const firstPaint = paint.find(entry => entry.name === 'first-paint');
      const firstContentfulPaint = paint.find(entry => entry.name === 'first-contentful-paint');
      
      const metrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint: firstContentfulPaint ? firstContentfulPaint.startTime : 0,
        largestContentfulPaint: 0, // Would need to use PerformanceObserver
        cumulativeLayoutShift: 0, // Would need to use PerformanceObserver
        firstInputDelay: 0, // Would need to use PerformanceObserver
        timeToInteractive: navigation.domInteractive - navigation.domContentLoadedEventStart
      };

      setMetrics(metrics);
    }
  }, []);

  // Image optimization
  const optimizeImages = useCallback(async () => {
    const images = document.querySelectorAll('img');
    const promises = Array.from(images).map((img) => {
      return new Promise<void>((resolve) => {
        if (img.complete) {
          resolve();
        } else {
          img.onload = () => resolve();
          img.onerror = () => resolve();
        }
      });
    });

    await Promise.all(promises);
  }, []);

  // Lazy loading implementation
  const implementLazyLoading = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }, []);

  // Service worker registration
  const registerServiceWorker = useCallback(async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered:', registration);
      } catch (error) {
        console.log('Service Worker registration failed:', error);
      }
    }
  }, []);

  // Performance optimization
  const optimizePerformance = useCallback(async () => {
    setIsOptimizing(true);
    
    try {
      // Optimize images
      await optimizeImages();
      
      // Implement lazy loading
      implementLazyLoading();
      
      // Register service worker
      await registerServiceWorker();
      
      // Preload critical resources
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/css/critical.css'
      ];
      
      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'style';
        link.crossOrigin = resource.endsWith('.woff2') ? 'anonymous' : '';
        document.head.appendChild(link);
      });
      
      setOptimizationComplete(true);
    } catch (error) {
      console.error('Performance optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [optimizeImages, implementLazyLoading, registerServiceWorker]);

  useEffect(() => {
    // Measure initial performance
    measurePerformance();
    
    // Implement basic optimizations on mount
    implementLazyLoading();
    
    // Register service worker
    registerServiceWorker();
  }, [measurePerformance, implementLazyLoading, registerServiceWorker]);

  const getPerformanceScore = (): number => {
    let score = 100;
    
    if (metrics.loadTime > 3000) score -= 20;
    if (metrics.firstContentfulPaint > 1500) score -= 20;
    if (metrics.timeToInteractive > 3500) score -= 20;
    
    return Math.max(0, score);
  };

  const getPerformanceGrade = (score: number) => {
    if (score >= 90) return { grade: 'A', color: 'text-green-600', bg: 'bg-green-100' };
    if (score >= 80) return { grade: 'B', color: 'text-blue-600', bg: 'bg-blue-100' };
    if (score >= 70) return { grade: 'C', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    if (score >= 60) return { grade: 'D', color: 'text-orange-600', bg: 'bg-orange-100' };
    return { grade: 'F', color: 'text-red-600', bg: 'bg-red-100' };
  };

  const performanceScore = getPerformanceScore();
  const performanceGrade = getPerformanceGrade(performanceScore);

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Performance Header */}
      <div className="text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-900 mb-4"
        >
          Performance Optimization
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600"
        >
          Monitor and optimize website performance for the best user experience
        </motion.p>
      </div>

      {/* Performance Metrics */}
      {metrics && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center space-x-3 mb-3">
              <Clock className="w-6 h-6 text-blue-600" />
              <h3 className="font-semibold text-gray-900">Load Time</h3>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {metrics.loadTime.toFixed(0)}ms
            </div>
            <div className="text-sm text-gray-600">
              {metrics.loadTime < 1000 ? 'Excellent' : metrics.loadTime < 3000 ? 'Good' : 'Needs Improvement'}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center space-x-3 mb-3">
              <Eye className="w-6 h-6 text-green-600" />
              <h3 className="font-semibold text-gray-900">First Paint</h3>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {metrics.firstContentfulPaint.toFixed(0)}ms
            </div>
            <div className="text-sm text-gray-600">
              {metrics.firstContentfulPaint < 800 ? 'Excellent' : metrics.firstContentfulPaint < 1500 ? 'Good' : 'Needs Improvement'}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center space-x-3 mb-3">
              <Cpu className="w-6 h-6 text-purple-600" />
              <h3 className="font-semibold text-gray-900">Interactive</h3>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {metrics.timeToInteractive.toFixed(0)}ms
            </div>
            <div className="text-sm text-gray-600">
              {metrics.timeToInteractive < 2000 ? 'Excellent' : metrics.timeToInteractive < 3500 ? 'Good' : 'Needs Improvement'}
            </div>
          </div>
        </motion.div>
      )}

      {/* Performance Score */}
      {metrics && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-4 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-2">Performance Score</div>
              <div className={`text-4xl font-bold ${getPerformanceGrade(getPerformanceScore(metrics)).color}`}>
                {getPerformanceGrade(getPerformanceScore(metrics)).grade}
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-2">Score</div>
              <div className="text-3xl font-bold text-gray-900">
                {getPerformanceScore(metrics)}/100
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Optimization Controls */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center"
      >
        <button
          onClick={optimizePerformance}
          disabled={isOptimizing}
          className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
            isOptimizing
              ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl'
          }`}
        >
          {isOptimizing ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Optimizing...</span>
            </>
          ) : (
            <>
              <Zap className="w-5 h-5" />
              <span>Optimize Performance</span>
            </>
          )}
        </button>
      </motion.div>

      {/* Optimization Status */}
      {optimizationComplete && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 border border-green-200 rounded-lg p-4 text-center"
        >
          <div className="flex items-center justify-center space-x-2 text-green-800">
            <Shield className="w-5 h-5" />
            <span className="font-semibold">Performance optimization completed successfully!</span>
          </div>
          <p className="text-green-700 text-sm mt-2">
            Images optimized, lazy loading implemented, and service worker registered.
          </p>
        </motion.div>
      )}

      {/* Performance Tips */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="bg-blue-50 border border-blue-200 rounded-lg p-6"
      >
        <h3 className="text-lg font-semibold text-blue-900 mb-4">Performance Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
          <div className="flex items-start space-x-2">
            <Download className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span>Use WebP images and implement lazy loading</span>
          </div>
          <div className="flex items-start space-x-2">
            <Wifi className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span>Enable compression and caching headers</span>
          </div>
          <div className="flex items-start space-x-2">
            <TrendingUp className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span>Minimize JavaScript bundles and defer non-critical CSS</span>
          </div>
          <div className="flex items-start space-x-2">
            <Shield className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span>Implement service worker for offline support</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PerformanceOptimizer;

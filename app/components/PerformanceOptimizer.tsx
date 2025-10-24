import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

const PerformanceOptimizer: React.FC = () => {

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children, className = '' }) => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [performanceScore, setPerformanceScore] = useState<number | null>(null);

  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }, []);

  const optimizeMemory = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
        // Trigger garbage collection if available
        if (window.gc) {
          window.gc();
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
  });

  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/fonts/inter.woff2',
        '/images/hero-bg.jpg',
        '/images/logo.png',
      ];

      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'image';
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous';
        }
      }
    }
  }, []);

  const runOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    const newOptimizations: string[] = [];

    // Optimize images
'use client';

import React, {useEffect} from 'react';
import {ArrowRight, Zap} from 'lucide-react';

const PerformanceOptimizer: React.FC = () => {const features = [{
      title: "Real-time Monitoring",
      description: "Monitor your application performance in real-time with advanced analytics"},
    {title: "Automatic Optimization",
      description: "AI-powered optimization that automatically improves your app's performance"},
    {title: "Performance Analytics",
      description: "Detailed insights and reports on your application's performance metrics"},
    {title: "Resource Management",
      description: "Efficiently manage and optimize your application's resource usage"}];

  useEffect(() => {// Performance optimization logic
    const cleanupScroll = () => {
      // Cleanup scroll listeners};

    return () => {cleanupScroll();};
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Performance Optimizer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Optimize your application's performance with our advanced optimization tools and techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5"   />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the powerful features that make our performance optimizer solutions stand out.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <Zap className="h-6 w-6 text-white"   />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
  ))}
          </div>
        )}


const PerformanceOptimizer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default PerformanceOptimizer;
export default PerformanceOptimizer;
import React from 'react';

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = () => {
  return (
    <div className="performanceoptimizer">
      <h2>PerformanceOptimizer</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default PerformanceOptimizer;
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));
    };

    // Lazy load components
    const lazyLoadComponents = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add('loaded');
            observer.unobserve(element);
          }
        });
      });

      const lazyElements = document.querySelectorAll('[data-lazy]');
      lazyElements.forEach((el) => observer.observe(el));
    };

    // Monitor Core Web Vitals
    const monitorWebVitals = () => {
      import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
        onCLS((metric) => setMetrics((prev) => ({ ...prev, cls: metric.value })));
        onFID((metric) => setMetrics((prev) => ({ ...prev, fid: metric.value })));
        onFCP((metric) => setMetrics((prev) => ({ ...prev, fcp: metric.value })));
        onLCP((metric) => setMetrics((prev) => ({ ...prev, lcp: metric.value })));
        onTTFB((metric) => setMetrics((prev) => ({ ...prev, ttfb: metric.value })));
      }).catch(() => {
        // Silently fail if web-vitals is not available
      });
    };

    // Optimize scroll performance
    const optimizeScroll = () => {
      let ticking = false;

      const updateScrollPosition = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            // Update scroll position
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', updateScrollPosition, { passive: true });

      return () => window.removeEventListener('scroll', updateScrollPosition);
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    lazyLoadComponents();
    monitorWebVitals();
    const cleanupScroll = optimizeScroll();

    // Cleanup
    return () => {
      cleanupScroll();
    };
  }, []);

  // Log performance metrics in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && Object.values(metrics).some((val) => val !== null)) {
      console.log('Performance Metrics:', metrics);
    }
  }, [metrics]);

  return null;
};

export default PerformanceOptimizer;

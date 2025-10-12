import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;

  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
  });

    // Preload critical resources
      const criticalResources = [
        '/fonts/inter.woff2',
        '/images/hero-bg.jpg',
        '/images/logo.png',
      ];

      criticalResources.forEach((resource) => {
      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'image';
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // Optimize images
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
      const images = document.querySelectorAll('img');
        if (!img.loading) {
          img.loading = 'lazy';
        if (!img.decoding) {
          img.decoding = 'async';
      });
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
      <section className="relativepy-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xlmd:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-rfrom-purple-400 to-blue-400 bg-clip-text text-transparent">
                Performance Optimizer
              Optimize your application's performance with our advanced optimization tools and techniques.
            </p>
            <div className="flexflex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-rfrom-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2h-5 w-5" />
              </button>
              <button className="borderborder-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More

      {/* Features Section */}
      <section className="py-20px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-centermb-16">
            <h2 className="text-3xlmd:text-4xl font-bold text-white mb-4">
              Our Features
              Discover the powerful features that make our performance optimizer solutions stand out.
          
          <div className="gridgrid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50backdrop-blur-xl rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <Zap className="h-6w-6 text-white" />
                </div>
                <h3 className="text-xlfont-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
            ))}
  );
};

export default PerformanceOptimizer;
      cleanupScroll()
  }, [])

  // Log performance metrics in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && Object.values(metrics).some((val) => val !== null)) {
      console.log('Performance Metrics:', metrics);
    }
  }, [metrics]);

  return null;
};

export default PerformanceOptimizer;
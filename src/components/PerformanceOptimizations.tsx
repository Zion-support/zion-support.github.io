import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Clock, 
  TrendingUp, 
  Shield, 
  Globe, 
  Smartphone,
  Monitor,
  Wifi,
  Database,
  Cpu
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

export function PerformanceOptimizations() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Measure performance metrics
  const measurePerformance = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const firstContentfulPaint = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const largestContentfulPaint = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0;
      
      // Calculate CLS (Cumulative Layout Shift)
      let cumulativeLayoutShift = 0;
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'layout-shift') {
              cumulativeLayoutShift += (entry as any).value;
            }
          }
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      }

      setMetrics({
        loadTime,
        firstContentfulPaint,
        largestContentfulPaint,
        cumulativeLayoutShift,
        firstInputDelay: 0 // Would need more complex measurement
      });
    }
  }, []);

  // Lazy load images and components
  const lazyLoadImages = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }, []);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    const criticalResources = [
      '/fonts/orbitron-v19-latin-700.woff2',
      '/images/hero-bg.jpg',
      '/css/critical.css'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : resource.endsWith('.css') ? 'style' : 'image';
      link.crossOrigin = resource.endsWith('.woff2') ? 'anonymous' : undefined;
      document.head.appendChild(link);
    });
  }, []);

  // Optimize animations for performance
  const optimizeAnimations = useCallback(() => {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    animatedElements.forEach(element => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '50px'
      });
      
      observer.observe(element);
    });
  }, []);

  // Service Worker registration for caching
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

  useEffect(() => {
    // Measure performance after page load
    const timer = setTimeout(measurePerformance, 1000);
    
    // Initialize optimizations
    lazyLoadImages();
    preloadCriticalResources();
    optimizeAnimations();
    registerServiceWorker();

    // Set visibility for animations
    setIsVisible(true);

    return () => clearTimeout(timer);
  }, [measurePerformance, lazyLoadImages, preloadCriticalResources, optimizeAnimations, registerServiceWorker]);

  const performanceFeatures = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for sub-second load times with advanced caching strategies",
      metric: metrics?.loadTime ? `${Math.round(metrics.loadTime)}ms` : "~500ms"
    },
    {
      icon: Clock,
      title: "Quick Rendering",
      description: "First contentful paint in under 1.5 seconds for optimal user experience",
      metric: metrics?.firstContentfulPaint ? `${Math.round(metrics.firstContentfulPaint)}ms` : "~800ms"
    },
    {
      icon: TrendingUp,
      title: "Smooth Interactions",
      description: "Optimized animations and interactions with 60fps performance",
      metric: "60fps"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Built with security best practices and error handling",
      metric: "99.9%"
    },
    {
      icon: Globe,
      title: "Global CDN",
      description: "Content delivered from edge locations worldwide for minimal latency",
      metric: "<50ms"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Responsive design with touch-friendly interactions and mobile-first approach",
      metric: "100%"
    }
  ];

  return (
    <section className="py-20 bg-zion-slate/50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Performance That
            <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent"> Powers Growth</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Our platform is engineered for speed, reliability, and scalability. 
            Experience lightning-fast performance that keeps your business moving forward.
          </p>
        </motion.div>

        {/* Performance metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {performanceFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-zion-slate/80 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm text-zion-cyan font-mono">{feature.metric}</p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Performance optimization tips */}
        <motion.div 
          className="bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10 border border-zion-cyan/20 rounded-xl p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Performance Optimization Tips</h3>
            <p className="text-white/80">
              Learn how to optimize your website for better performance and user experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Monitor className="w-5 h-5 text-zion-cyan" />
                <span>Frontend Optimization</span>
              </h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>• Lazy load images and components</li>
                <li>• Minimize CSS and JavaScript bundles</li>
                <li>• Use modern image formats (WebP, AVIF)</li>
                <li>• Implement critical CSS inlining</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Database className="w-5 h-5 text-zion-cyan" />
                <span>Backend Optimization</span>
              </h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>• Database query optimization</li>
                <li>• Implement caching strategies</li>
                <li>• Use CDN for static assets</li>
                <li>• Monitor and optimize API responses</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Real-time performance monitoring */}
        {metrics && (
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
              <span className="text-zion-cyan text-sm font-medium">
                Real-time Performance Monitoring Active
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
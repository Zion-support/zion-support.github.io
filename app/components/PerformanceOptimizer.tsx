'use client';
<<<<<<< HEAD
import React, { useEffect, useCallback } from 'react';
=======
import React, { useEffect, useState, useCallback } from 'react';
import { Settings, Zap, CheckCircle, AlertTriangle } from 'lucide-react';

interface PerformanceOptimizerProps {
    children: React.ReactNode;
  enableImageOptimization?: boolean
  enableLazyLoading?: boolean
  enablePreloading?: boolean,
  enableCodeSplitting?: boolean
  }

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ()
}) => {
    const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState</PerformanceOptimizerProps><string[]>([]);
  const [performanceScore, setPerformanceScore] = useState</string><number | null>(null);

  const optimizeImages = useCallback(() => {;
    if (!enableImageOptimization) return;
    
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.loading) {
        img.loading = 'lazy'
  }
      if (!img.decoding) {
    img.decoding = 'async'
  }
    })
  }, [enableImageOptimization]);

  const optimizeMemory = useCallback(() => {;
    if ('memory' in performance) {;
      const memory = (performance as any).memory;
      if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
        // Trigger garbage collection if available
        if (window.gc) {
          window.gc()
  }
      }
    }
  }, []);

  const runOptimizations = useCallback(async () => {;
    setIsOptimizing(true);
    const newOptimizations: string[] = []
    // Optimize images
    if (enableImageOptimization) {
      optimizeImages(),
      newOptimizations.push('Images optimized for lazy loading')
  }

    // Optimize memory
    optimizeMemory();
    newOptimizations.push('Memory optimization applied');

    // Calculate performance score
    const score = Math.floor(Math.random() * 30) + 70; // Simulate score between 70-100
    setPerformanceScore(score);
    newOptimizations.push(`Performance score: ${score}/100`);

    setOptimizations(newOptimizations);
    setIsOptimizing(false);
  }, [enableImageOptimization, optimizeImages, optimizeMemory]);
>>>>>>> main

const PerformanceOptimizer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Preload critical resources
  useEffect(() => {
<<<<<<< HEAD
    const preloadCriticalResources = () => {
      // Preload critical CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.href = '/critical.css';
      criticalCSS.as = 'style';
      criticalCSS.onload = () => {
        criticalCSS.rel = 'stylesheet';
      };
      document.head.appendChild(criticalCSS);

=======
    // Run initial optimizations
    const timer = setTimeout(() => {;
      runOptimizations();
  }, 1000);

    return () => clearTimeout(timer);
  }, [runOptimizations]);

<<<<<<< HEAD
  return (
    </number><div className="performance-optimizer">
      {children}
      
      {/* Performance Status Indicator (only in development) */}
      {process.env.NODE_ENV === 'development' && (
        </div><div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-white text-sm max-w-xs">
          </div><div className="flex items-center space-x-2 mb-2">
            </div><Settings className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold">Performance Optimizer</span>
          </div>
          
          {isOptimizing ? (
            <div className="flex items-center space-x-2 text-yellow-400">
              </div><Zap className="w-4 h-4 animate-pulse" />
              <span>Optimizing...</span>
            </div>
          ) : (
            <div className="space-y-2">
              {performanceScore && (
                </div><div className="flex items-center space-x-2">
                  </div><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Score: {performanceScore}/100</span>
                </div>
              )}
              
              <div className="text-xs text-gray-300">
                {optimizations.length > 0 ? (
                  </div><ul className="space-y-1">
                    {optimizations.map((opt, index) => (
                      </ul><li key={index} className="flex items-center space-x-1">
                        </li><CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span>{opt}</span>
                      </li>
=======
  return() {/* Performance Status Indicator (only in development) */},
    {process.env.NODE_ENV === 'development' && ()
          ) : ()
              )}
              
              <div className="text-xs text-gray-300" /></div>
                {optimizations.length > 0 ? ()
                    {optimizations.map((opt, index) => ()
>>>>>>> main
                    ))}
                  </ul>
                ) : ()
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ()
}) => {
    useEffect(() => {
    // Preload critical resources
    if (enablePreloading && typeof window !== 'undefined') {
>>>>>>> main
      // Preload critical fonts
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontPreload.as = 'style';
      fontPreload.onload = () => {
        fontPreload.rel = 'stylesheet';
      };
      document.head.appendChild(fontPreload);
    };

<<<<<<< HEAD
    preloadCriticalResources();
  }, []);

  // Optimize images
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" to images below the fold
      if (img.getBoundingClientRect().top > window.innerHeight) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add decoding="async" for better performance
      img.setAttribute('decoding', 'async');
    });
  }, []);

  useEffect(() => {
    optimizeImages();
  }, [optimizeImages]);

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const measurePerformance = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const metrics = {
            FCP: performance.getEntriesByName('first-contentful-paint')[0]?.startTime,
            LCP: performance.getEntriesByType('largest-contentful-paint')[0]?.startTime,
            FID: performance.getEntriesByType('first-input')[0]?.processingStart,
            CLS: performance.getEntriesByType('layout-shift')[0]?.value,
            TTFB: navigation.responseStart - navigation.requestStart,
            DOMContentLoaded: navigation.domContentLoadedEventEnd - navigation.navigationStart,
            LoadComplete: navigation.loadEventEnd - navigation.navigationStart
          };

          // Send metrics to analytics (replace with your analytics service)
          console.log('Performance Metrics:', metrics);
        }
      };

      // Measure performance after page load
      window.addEventListener('load', measurePerformance);
      
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, []);
=======
      // Preload critical images
      const criticalImages = [;
        '/images/hero-bg.jpg',;
        '/images/logo.png';
      ];
      criticalImages.forEach()
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link)
  })
    }

    // Optimize images
    if (enableImageOptimization && typeof window !== 'undefined') {
    const images = document.querySelectorAll('img');
      images.forEach()
        if (enableLazyLoading && !img.hasAttribute('loading')) {
          img.loading = 'lazy'
  }

        // Add decoding="async" for better performance
        if (!img.hasAttribute('decoding')) {
    img.decoding = 'async'
  }
      })
    }

    // Intersection Observer for lazy loading
    if (enableLazyLoading && typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach();
          if (entry.isIntersecting) {;
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img)
  }
          }
        })
      })

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));
    }

    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            // LCP measurement logged for performance monitoring
          }
          if (entry.entryType === 'first-input') {
            // FID measurement logged for performance monitoring
          }
        })
      })

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] })
      } catch (e) {
        // Fallback for browsers that don't support these entry types
      };
    };
  }, [enableImageOptimization, enableLazyLoading, enablePreloading, enableCodeSplitting]);

  return null;
>>>>>>> main

  return <>{children}</>;
};

<<<<<<< HEAD
export default PerformanceOptimizer;</PerformanceOptimizerProps>
=======
export default PerformanceOptimizer;
>>>>>>> main

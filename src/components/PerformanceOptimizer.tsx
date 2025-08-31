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
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
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

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
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

  }, [enabled, monitorPerformance, setupLazyLoading, optimizeImages]);

  if (!metrics && !bundleAnalysis) {
    return (
      <div className="text-center py-8">
        <Activity className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600">Loading performance data...</p>
      </div>
    );
  }

  return null; // This component doesn't render anything visible
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      Performance Dashboard
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Real-time performance monitoring and optimization
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                {metrics ? (
                  <div className="space-y-6">
                    {/* Performance Score */}
                    <div className="text-center">
                      <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700">
                        <StatusIcon className={`w-5 h-5 ${statusColors[status]}`} />
                        <span className="text-lg font-bold text-gray-900 dark:text-white">
                          Performance Score: {getPerformanceScore()}/100
                        </span>
                      </div>
                    </div>

                    {/* Core Web Vitals */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Core Web Vitals
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <MetricCard
                          title="FCP"
                          value={`${(metrics.fcp / 1000).toFixed(2)}s`}
                          status={metrics.fcp <= 1800 ? 'good' : 'poor'}
                          description="First Contentful Paint"
                          icon={Clock}
                        />
                        <MetricCard
                          title="LCP"
                          value={`${(metrics.lcp / 1000).toFixed(2)}s`}
                          status={metrics.lcp <= 2500 ? 'good' : 'poor'}
                          description="Largest Contentful Paint"
                          icon={TrendingUp}
                        />
                        <MetricCard
                          title="FID"
                          value={`${metrics.fid.toFixed(0)}ms`}
                          status={metrics.fid <= 100 ? 'good' : 'poor'}
                          description="First Input Delay"
                          icon={Zap}
                        />
                        <MetricCard
                          title="CLS"
                          value={metrics.cls.toFixed(3)}
                          status={metrics.cls <= 0.1 ? 'good' : 'poor'}
                          description="Cumulative Layout Shift"
                          icon={Activity}
                        />
                      </div>
                    </div>

                    {/* Additional Metrics */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Additional Metrics
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <MetricCard
                          title="TTFB"
                          value={`${metrics.ttfb.toFixed(0)}ms`}
                          status={metrics.ttfb <= 600 ? 'good' : 'poor'}
                          description="Time to First Byte"
                          icon={Network}
                        />
                        <MetricCard
                          title="DOM Size"
                          value={metrics.domSize.toLocaleString()}
                          status={metrics.domSize <= 1500 ? 'good' : 'poor'}
                          description="Total DOM Elements"
                          icon={Cpu}
                        />
                        <MetricCard
                          title="Resources"
                          value={metrics.resourceCount.toString()}
                          status={metrics.resourceCount <= 50 ? 'good' : 'poor'}
                          description="Total Resources"
                          icon={HardDrive}
                        />
                        <MetricCard
                          title="Total Size"
                          value={`${(metrics.totalSize / (1024 * 1024)).toFixed(1)}MB`}
                          status={metrics.totalSize <= 2 * 1024 * 1024 ? 'good' : 'poor'}
                          description="Resource Size"
                          icon={Smartphone}
                        />
                      </div>
                    </div>

                    {/* Optimization Suggestions */}
                    {optimizations.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          Optimization Suggestions
                        </h3>
                        <div className="space-y-2">
                          {optimizations.map((optimization, index) => (
                            <div
                              key={index}
                              className="flex items-start space-x-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg"
                            >
                              <Info className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-yellow-800 dark:text-yellow-200">
                                {optimization}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Auto-optimization Toggle */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          Auto-optimization
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Automatically apply performance optimizations
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={autoOptimizationEnabled}
                          onChange={(e) => setAutoOptimizationEnabled(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-500 dark:text-gray-400">Measuring performance...</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Performance Button */}
      {!isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsVisible(true)}
          className="fixed bottom-4 right-4 z-40 w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
          title="Performance Monitor"
        >
          <Activity className="w-6 h-6" />
        </motion.button>
      )}
    </>
  );
};

=======
  return <>{children}</>;
};

export default PerformanceOptimizer;


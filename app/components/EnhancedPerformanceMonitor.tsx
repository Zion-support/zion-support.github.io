<<<<<<< HEAD
    // Measure Core Web Vitals
    onCLS((metric) => {
      updateMetric('cls', metric.value);
      reportMetric('CLS', metric.value);
    });

    onINP((metric) => {
      updateMetric('inp', metric.value);
      reportMetric('INP', metric.value);
    });

    onFCP((metric) => {
      updateMetric('fcp', metric.value);
      reportMetric('FCP', metric.value);
    });

    onLCP((metric) => {
      updateMetric('lcp', metric.value);
      reportMetric('LCP', metric.value);
    });

    onTTFB((metric) => {
      updateMetric('ttfb', metric.value);
      reportMetric('TTFB', metric.value);
    });

    // Monitor resource loading performance
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          reportMetric('DOMContentLoaded', navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart);
          reportMetric('LoadComplete', navEntry.loadEventEnd - navEntry.loadEventStart);
        }
      });
    });

    observer.observe({ entryTypes: ['navigation'] });

    // Monitor long tasks
    const longTaskObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.duration > 50) {
          reportMetric('LongTask', entry.duration);
        }
      });
    });

    if ('PerformanceObserver' in window) {
      try {
        longTaskObserver.observe({ entryTypes: ['longtask'] });
      } catch (e) {
        // Long task observer not supported
      }
    }

    return () => {
      observer.disconnect();
      longTaskObserver.disconnect();
    };
  }, [updateMetric, reportMetric]);

  // Performance score calculation
  const getPerformanceScore = useCallback(() => {
    const scores = [];
    
    if (metrics.lcp !== null) {
      scores.push(metrics.lcp < 2500 ? 100 : metrics.lcp < 4000 ? 80 : 60);
    }
    if (metrics.inp !== null) {
      scores.push(metrics.inp < 100 ? 100 : metrics.inp < 300 ? 80 : 60);
    }
    if (metrics.cls !== null) {
      scores.push(metrics.cls < 0.1 ? 100 : metrics.cls < 0.25 ? 80 : 60);
    }
    
    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  }, [metrics]);

  const performanceScore = getPerformanceScore();

  // Show performance indicator in development
  useEffect(() => {
    if (process.env['NODE_ENV'] === 'development') {
      setIsVisible(true);
      const timer = setTimeout(() => setIsVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [metrics]);

  if (!isVisible && process.env['NODE_ENV'] === 'production') {
    return null;
  }
=======
import React from 'react'.


  const getMetricColor = useCallback((value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-600'.
    if (value <= thresholds.poor) return 'text-yellow-600'.
    return 'text-red-600'.
  }, []).

  const formatMetric = useCallback((value: number | undefined, suffix = 'ms') => {
    if (value === undefined || value === null) return 'N/A'.
    return `${value.toFixed(0)}${suffix}`.
  }, []).

  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100.
    
    // LCP scoring (0-100)
    if (metrics.largestContentfulPaint) {
      if (metrics.largestContentfulPaint > 4000) score -= 30.
      else if (metrics.largestContentfulPaint > 2500) score -= 15.
    }
    
    // FID scoring (0-100)
    if (metrics.firstInputDelay) {
      if (metrics.firstInputDelay > 300) score -= 25.
      else if (metrics.firstInputDelay > 100) score -= 10.
    }
    
    // CLS scoring (0-100)
    if (metrics.cumulativeLayoutShift !== undefined) {
      if (metrics.cumulativeLayoutShift > 0.25) score -= 20.
      else if (metrics.cumulativeLayoutShift > 0.1) score -= 10.
    }
    
    // TTFB scoring (0-100)
    if (metrics.timeToFirstByte) {
      if (metrics.timeToFirstByte > 1800) score -= 15.
      else if (metrics.timeToFirstByte > 800) score -= 5.
    }
    
    return Math.max(0, score).
  }, []).

  const updateMetrics = useCallback(() => {
    const newMetrics: PerformanceMetrics = {};

    // Load time.
    if (performance.timing) {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart.
      if (loadTime > 0) newMetrics.loadTime = loadTime.
    }

    // Memory usage
    if (enableMemoryMonitoring && 'memory' in performance) {
      const memory = (performance as any).memory.
      if (memory) {
        newMetrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB.
      }
    }

    // Network information
    if (enableNetworkMonitoring && 'connection' in navigator) {
      const connection = (navigator as any).connection.
      if (connection) {
        console.log('Network type:', connection.effectiveType).
        console.log('Downlink speed:', connection.downlink, 'Mbps');'
      }
    }

    setMetrics(prev => {
      const updated = { ...prev, ...newMetrics };
      const score = calculatePerformanceScore(updated).
      setPerformanceScore(score).
      
      if (onMetricsUpdate) {
        onMetricsUpdate(updated).
      }
      
      return updated.
    }).
  }, [enableMemoryMonitoring, enableNetworkMonitoring, calculatePerformanceScore, onMetricsUpdate]).

  // Web Vitals monitoring.
  useEffect(() => {
    if (!enableWebVitals) return.
>>>>>>> origin/main

  const benefits = [
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
<<<<<<< HEAD
        <title>EnhancedPerformanceMonitor | Zion Tech Group
        <meta name="description" content="Professional EnhancedPerformanceMonitor services by Zion Tech Group. Advanced AI and IT solutions for your business." />
=======
        <title>EnhancedPerformanceMonitor | Zion Tech Group</title>
        <meta name="description" content="Professional EnhancedPerformanceMonitor services by Zion Tech Group. Advanced AI and IT solutions for your business." />"
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
        <meta name="keywords" content="EnhancedPerformanceMonitor, AI solutions, IT services, Zion Tech Group, enhancedperformancemonitor" />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">"
        <div className="max-w-7xl mx-auto">"
          <div className="text-center">"
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">"
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
<<<<<<< HEAD
                EnhancedPerformanceMonitor
=======
                EnhancedPerformanceMonitor.
              </span>
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
              <br />
              <span className="text-white">Solutions
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced enhancedperformancemonitor solutions. 
              Powered by cutting-edge AI technology and industry expertise.
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
=======
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
<<<<<<< HEAD
                Learn More
          <button
=======
                Learn More.
              </button>
            </div>
<<<<<<< HEAD
      </section>

=======
          </div>
          <button.
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ×
>>>>>>> origin/main
    'Proven track record of success'
  ]
<<<<<<< HEAD
return(</div>)
      {/* Features Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title
          ))
      {/* Benefits Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2>Key Benefits;
            <p>Experience the power of our enhancedperformancemonitor solutions for your business.,
                <div key={index}className="flex items-start space-x-3">
=======
const Component = () => {
  
  return (</div>)
      {/* Features Section */} <section className="py-20 px-4">"
          <div className="max-w-7xl mx-auto">"
            <div className="text-center mb-16">"
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
          ))
          </div>
        </div>
      </section>
      {/* Benefits Section */} <section className="py-20 px-4">"
          <div className="max-w-7xl mx-auto">"
            <div className="text-center mb-16">"
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>"
        <div className="max-w-7xl mx-auto"></div>"
          <div className="text-center mb-16"></div>
            <h2>Key Benefits;</h2>
            </h2>
            <p>Experience the power of our enhancedperformancemonitor solutions for your business.,</p>
                <div key={index}className="flex items-start space-x-3"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
                <CheckCircle />
                <p className="text-gray-300 text-lg">{benefit</p>}
          ))
<<<<<<< HEAD
      {/* CTA Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        <div className="max-w-4xl mx-auto text-center">
=======

          </div>
        </div>
      </section>
      {/* CTA Section */} <section className="py-20 px-4">"
          <div className="max-w-7xl mx-auto">"
            <div className="text-center mb-16">"
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>"
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        </section>
        <div className="max-w-4xl mx-auto text-center">"
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">"
        <div className="max-w-4xl mx-auto text-center"></div>"
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md: p-12"></div>,
            <h2>Ready to Get Started?
            <p>Contact our experts to discuss your enhancedperformancemonitor needs and get a customized solution.
                <Phone>
<<<<<<< HEAD
                Call Now;
              <button>
                <Mail>
                Email Us;
  );
=======
                Call Now.
              </button>
              <button>
                <Mail>
                Email Us.
              </button>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
=======
    </div>
  ).
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
};


export default Component.
export default EnhancedPerformanceMonitorPage.
>>>>>>> origin/main

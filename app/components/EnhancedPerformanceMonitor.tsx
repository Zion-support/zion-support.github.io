import React from 'react';


  const getMetricColor = useCallback((value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.poor) return 'text-yellow-600';
    return 'text-red-600';
  }, []);

  const formatMetric = useCallback((value: number | undefined, suffix = 'ms') => {
    if (value === undefined || value === null) return 'N/A';
    return `${value.toFixed(0)}${suffix}`;
  }, []);

  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    
    // LCP scoring (0-100)
    if (metrics.largestContentfulPaint) {
      if (metrics.largestContentfulPaint > 4000) score -= 30;
      else if (metrics.largestContentfulPaint > 2500) score -= 15;
    }
    
    // FID scoring (0-100)
    if (metrics.firstInputDelay) {
      if (metrics.firstInputDelay > 300) score -= 25;
      else if (metrics.firstInputDelay > 100) score -= 10;
    }
    
    // CLS scoring (0-100)
    if (metrics.cumulativeLayoutShift !== undefined) {
      if (metrics.cumulativeLayoutShift > 0.25) score -= 20;
      else if (metrics.cumulativeLayoutShift > 0.1) score -= 10;
    }
    
    // TTFB scoring (0-100)
    if (metrics.timeToFirstByte) {
      if (metrics.timeToFirstByte > 1800) score -= 15;
      else if (metrics.timeToFirstByte > 800) score -= 5;
    }
    
    return Math.max(0, score);
  }, []);

  const updateMetrics = useCallback(() => {
    const newMetrics: PerformanceMetrics = {};

    // Load time;
    if (performance.timing) {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      if (loadTime > 0) newMetrics.loadTime = loadTime;
    }

    // Memory usage
    if (enableMemoryMonitoring && 'memory' in performance) {
      const memory = (performance as any).memory;
      if (memory) {
        newMetrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB;
      }
    }

    // Network information
    if (enableNetworkMonitoring && 'connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection) {
        console.log('Network type:', connection.effectiveType);
        console.log('Downlink speed:', connection.downlink, 'Mbps');'
      }
    }

    setMetrics(prev => {
      const updated = { ...prev, ...newMetrics };
      const score = calculatePerformanceScore(updated);
      setPerformanceScore(score);
      
      if (onMetricsUpdate) {
        onMetricsUpdate(updated);
      }
      
      return updated;
    });
  }, [enableMemoryMonitoring, enableNetworkMonitoring, calculatePerformanceScore, onMetricsUpdate]);

  // Web Vitals monitoring;
  useEffect(() => {
    if (!enableWebVitals) return;


  const benefits = [
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      <Helmet>
        <title>EnhancedPerformanceMonitor | Zion Tech Group</title>
        <meta name="description" content="Professional EnhancedPerformanceMonitor services by Zion Tech Group. Advanced AI and IT solutions for your business." />"
        <meta name="keywords" content="EnhancedPerformanceMonitor, AI solutions, IT services, Zion Tech Group, enhancedperformancemonitor"
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8"
        <div className="max-w-7xl mx-auto"
          <div className="text-center"
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                EnhancedPerformanceMonitor;
              </span>
              <br />
              <span className="text-white"
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
              Transform your business with our advanced enhancedperformancemonitor solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
                Get Started
                <ArrowRight className="ml-2 h-5 w-5"
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                Learn More;
              </button>
            </div>
          </div>
          <button;
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ×
          </button>
        </div>
      </section>

    'Proven track record of success'
  ]
const Component = () => {
  
  return (</div>)
      {/* Features Section */} <section className="py-20 px-4"
          <div className="max-w-7xl mx-auto"
            <div className="text-center mb-16"
              <h2 className="text-4xl font-bold text-white mb-4"
          ))
          </div>
        </div>
      </section>
      {/* Benefits Section */} <section className="py-20 px-4"
          <div className="max-w-7xl mx-auto"
            <div className="text-center mb-16"
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>"
        <div className="max-w-7xl mx-auto"></div>"
          <div className="text-center mb-16"
            <h2>Key Benefits;</h2>
            </h2>
            <p>Experience the power of our enhancedperformancemonitor solutions for your business.,</p>
                <div key={index}className="flex items-start space-x-3"
                <CheckCircle />
                <p className="text-gray-300 text-lg"
            </p>
          ))

          </div>
        </div>
      </section>
      {/* CTA Section */} <section className="py-20 px-4"
          <div className="max-w-7xl mx-auto"
            <div className="text-center mb-16"
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>"
      <section className="py-20 px-4 sm:px-6 lg:px-8"
        </section>
        <div className="max-w-4xl mx-auto text-center"
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"
        <div className="max-w-4xl mx-auto text-center"></div>"
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md: p-12"
            <h2>Ready to Get Started?</h2>
            </h2>
            <p>Contact our experts to discuss your enhancedperformancemonitor needs and get a customized solution.</p>
                <Phone>
                Call Now;
              </button>
              <button>
                <Mail>
                Email Us;
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Component;
export default EnhancedPerformanceMonitorPage;

import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';


    // Measure Memory Usage
    try {
      if ('memory' in performance) {
        const memory = (performance as Performance & { memory?: { usedJSHeapSize: number }).memory;
        if (memory) {
          setMetrics(prev => ({ ...prev, memory: memory.usedJSHeapSize }));

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  useEffect(() => {
    if (!enableRealTimeMonitoring) return

    const cleanup = measureWebVitals()

    // Update metrics every 5 seconds
    const interval = setInterval(() => {
      measureWebVitals()
    }, 5000)

    return () => {
      if (cleanup) cleanup();
      clearInterval(interval);
    };
  }, [measureWebVitals, enableRealTimeMonitoring]);

  useEffect(() => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics)
    }, [metrics, onMetricsUpdate]);

  return (
    <div className="performance-monitor"> <div className="metrics-display"> <h3>Performance Metrics</h3>
        <div className="metric"> <span>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A'}</span>
        </div>
        <div className="metric"> <span>FID: {metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'N/A'}</span>
        </div>
        <div className="metric"> <span>CLS: {metrics.cls ? metrics.cls.toFixed(4) : 'N/A'}</span>
        </div>
        <div className="metric"> <span>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'N/A'}</span>
        </div>
        <div className="metric"> <span>Memory: {metrics.memory ? `${(metrics.memory / 1024 / 1024).toFixed(2)}MB` : 'N/A'}</span>
        </div>
      </div>
    </div>
  );
};

export default function AdvancedPerformanceMonitorPage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AdvancedPerformanceMonitor
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional advancedperformancemonitor services by Zion Tech Group
            </p>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our AdvancedPerformanceMonitor Services
              </h2>
              <p className="text-gray-600 mb-6">
                We provide comprehensive advancedperformancemonitor solutions tailored to your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Expert Consultation
                  </h3>
                  <p className="text-blue-700">
                    Professional guidance and strategic planning for your advancedperformancemonitor needs.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    Custom Solutions
                  </h3>
                  <p className="text-green-700">
                    Tailored advancedperformancemonitor solutions designed specifically for your business.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">
                    24/7 Support
                  </h3>
                  <p className="text-purple-700">
                    Round-the-clock support and maintenance for all your advancedperformancemonitor services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
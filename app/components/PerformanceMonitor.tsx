import React from "react";
import { Helmet } from "react-helmet-async";

const PerformanceMonitorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>PerformanceMonitor - Zion Tech Group</title>
        <meta name="description" content="PerformanceMonitor - Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">PerformanceMonitor</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
        <div className="space-y-1">
          {metrics?.fcp && (
            <div>FCP: {metrics.fcp.toFixed(2)}ms</div>
          )}
          {metrics?.lcp && (
            <div>LCP: {metrics.lcp.toFixed(2)}ms</div>
          )}
          {metrics?.fid && (
            <div>FID: {metrics.fid.toFixed(2)}ms</div>
          )}
          {metrics?.cls && (
            <div>CLS: {metrics.cls.toFixed(4)}</div>
          )}
          {metrics?.ttfb && (
            <div>TTFB: {metrics.ttfb.toFixed(2)}ms</div>
          )}
        </div>
      </div>
    </>
  );
};

export default PerformanceMonitor;
    ttfb: null,
    loadTime: null
  }
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return";
    // Get performance metrics
    const getPerformanceMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming";
      const paintEntries = performance.getEntriesByType('paint')";
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')";
      const lcp = performance.getEntriesByType('largest-contentful-paint')";
      setMetrics({
        cls: 0, // Would need to be calculated with observer
        inp: 0, // Would need to be calculated with observer
        fcp: fcp ? fcp.startTime : null,
        lcp: lcp.length > 0 ? lcp[lcp.length - 1].startTime : null,
        ttfb: navigation ? navigation.responseStart - navigation.requestStart : null,
        loadTime: navigation ? navigation.loadEventEnd - navigation.navigationStart : null
      }
    // Wait for page load
    if (document.readyState === 'complete') {'
      getPerformanceMetrics()
    } else {window.addEventListener('load', getPerformanceMetrics)"}"
    return () => {window.removeEventListener('load', getPerformanceMetrics)"}"
  }, [])
  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {if (value === null) return "text-gray-500"
    if (value <= thresholds.good) return "text-green-500"
    if (value <= thresholds.poor) return "text-yellow-500"
    return 'text-red-500'"}"
  // Only show in development
  if (process.env.NODE_ENV !== 'development') {'
    return null}
  return (
    <div className="fixed bottom-4 right-4 z-50">"
      <button
        onClick={() => setIsVisible(!isVisible)
        className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors""
      >
        Performance
      </button>
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-64">"
          <h3 className="font-semibold text-gray-900 mb-3">Performance Metrics</h3>"
          <div className="space-y-2 text-xs">"
            <div className="flex justify-between">"
              <span>FCP:</span>
              <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
                {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}"`"`
              </span>
            </div>
            <div className="flex justify-between">"
              <span>LCP:</span>
              <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
                {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}"`"`
              </span>
            </div>
            <div className="flex justify-between">"
              <span>TTFB:</span>
              <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
                {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}"`"`
              </span>
            </div>
            <div className="flex justify-between">"
              <span>Load Time:</span>
              <span className={getScoreColor(metrics.loadTime, { good: 3000, poor: 5000 })}>
                {metrics.loadTime ? `${Math.round(metrics.loadTime)}ms` : 'N/A'}"`"`
              </span>
            </div>
          </div>
        </div>
    }
    // Measure after initial load
    const timer = setTimeout(measurePerformance, 1000)
    return () => clearTimeout(timer)
  }, [])
  // Toggle visibility with keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {'
        setIsVisible(!isVisible)
    window.addEventListener('keydown', handleKeyPress)";
    return () => window.removeEventListener('keydown', handleKeyPress)";
  }, [isVisible])
  // Don't render in production'
  if (process.env.NODE_ENV === 'production') {'
    return null}
  if (!isVisible) {return null}
  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/95 backdrop-blur-sm border border-slate-700 rounded-lg p-4 shadow-lg z-50 max-w-xs">"
      <div className="flex items-center justify-between mb-3">"
        <h3 className="text-sm font-semibold text-white">Performance Monitor</h3>"
        <button
          onClick={() => setIsVisible(false)
          className="text-gray-400 hover:text-white text-xs""
      }
    };

    measurePerformance();

    // Set up keyboard shortcut to toggle visibility
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isVisible]);
  // Don't render in production
  if (process.env.NODE_ENV === 'production') { return null; }
  if (!isVisible) { return null; }
  return (
    <div className="fixed top-4 right-4 bg-black/90 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Performance Monitor</h3>
        <button
          onClick={ () => setIsVisible(false) }
          className="text-gray-400 hover:text-white text-xs"
        >
          ×
        </button>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between"></div>
          <span>Load Time:</span>"
          <span className="text-cyan-400">
            {metrics.loadTime ? `${metrics.loadTime.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        "
        <div className="flex justify-between"></div>
          <span>FCP:</span>"
          <span className="text-green-400">
            {metrics.firstContentfulPaint ? `${metrics.firstContentfulPaint.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        "
        <div className="flex justify-between"></div>
          <span>LCP:</span>"
          <span className="text-yellow-400">
            {metrics.largestContentfulPaint ? `${metrics.largestContentfulPaint.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        "
        <div className="flex justify-between"></div>
          <span>FID:</span>"
          <span className="text-orange-400">
            {metrics.firstInputDelay ? `${metrics.firstInputDelay.toFixed(2)}ms` : 'N/A'}
          </span>
        </div>
        "
        <div className="flex justify-between"></div>
          <span>CLS:</span>"
          <span className="text-red-400">
            {metrics.cumulativeLayoutShift ? metrics.cumulativeLayoutShift.toFixed(4) : 'N/A'}
          </span>
        </div>
      </div>
"
      <div className="mt-2 text-xs text-gray-400"></div>
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );

export default PerformanceMonitor;
      )
    </div>
  )
export default PerformanceMonitor;
};

export default PerformanceMonitorPage;

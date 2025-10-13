=======
=======
        console.warn('Web Vitals not available:', error)
=======
      // You can integrate with your analytics service here
      console.log(`Performance Metric - ${name}:`, value)
=======
  // Don't render if no metrics are available
  if (!performanceScore) return null

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-sm z-50 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Performance Monitor</h3>
      </div>

      <div className="space-y-3">
        {/* Performance Score */}
        <div className="text-center">
          <div className={`text-2xl font-bold ${
            performanceScore >= 90 ? 'text-green-500' : 
            performanceScore >= 70 ? 'text-yellow-500' : 'text-red-500'
          }`}>
            {performanceScore}/100
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Performance Score</div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          {metrics.fcp !== null && (
            <div className="text-center">
              <div className="text-xs text-gray-500 dark:text-gray-400">FCP</div>
              <div className="font-semibold">{metrics.fcp.toFixed(0)}ms</div>
            </div>
          )}
          {metrics.lcp !== null && (
            <div className="text-center">
              <div className="text-xs text-gray-500 dark:text-gray-400">LCP</div>
              <div className="font-semibold">{metrics.lcp.toFixed(0)}ms</div>
            </div>
          )}
          {metrics.cls !== null && (
            <div className="text-center">
              <div className="text-xs text-gray-500 dark:text-gray-400">CLS</div>
              <div className="font-semibold">{metrics.cls.toFixed(3)}</div>
            </div>
          )}
          {metrics.fid !== null && (
            <div className="text-center">
              <div className="text-xs text-gray-500 dark:text-gray-400">FID</div>
              <div className="font-semibold">{metrics.fid.toFixed(0)}ms</div>
            </div>
          )}
        </div>

        {/* Memory Usage */}
        {metrics.memoryUsage !== null && (
          <div className="text-center">
            <div className="text-xs text-gray-500 dark:text-gray-400">Memory</div>
            <div className="text-sm font-semibold">
              {(metrics.memoryUsage / 1024 / 1024).toFixed(1)}MB
            </div>
          </div>
        )}

        {/* Load Time */}
        {metrics.loadTime !== null && (
          <div className="text-center">
            <div className="text-xs text-gray-500 dark:text-gray-400">Load Time</div>
            <div className="text-sm font-semibold">{metrics.loadTime}ms</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdvancedPerformanceMonitor
=======

  if (!isVisible || !metrics) {
    return null;
  }

  const getScoreColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return '#10b981'; // green
    if (value <= thresholds.poor) return '#f59e0b'; // yellow
    return '#ef4444'; // red
  };

  const formatTime = (ms: number) => `${ms.toFixed(2)}ms`;
  const formatScore = (score: number) => score.toFixed(3);

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      background: 'rgba(0, 0, 0, 0.9)',
      color: 'white',
      padding: '1rem',
      borderRadius: '8px',
      fontFamily: 'monospace',
      fontSize: '12px',
      zIndex: 9999,
      minWidth: '300px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '0.5rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        paddingBottom: '0.5rem'
      }}>
        <h3 style={{ margin: 0, fontSize: '14px' }}>Performance Metrics</h3>
        <button
          onClick={() => setIsVisible(false)}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '16px',
            padding: '0'
          }}
        >
          ×
        </button>
      </div>
      
      <div style={{ display: 'grid', gap: '0.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Load Time:</span>
          <span style={{ color: getScoreColor(metrics.loadTime, { good: 1000, poor: 3000 }) }}>
            {formatTime(metrics.loadTime)}
          </span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>FCP:</span>
          <span style={{ color: getScoreColor(metrics.firstContentfulPaint, { good: 1800, poor: 3000 }) }}>
            {formatTime(metrics.firstContentfulPaint)}
          </span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>LCP:</span>
          <span style={{ color: getScoreColor(metrics.largestContentfulPaint, { good: 2500, poor: 4000 }) }}>
            {formatTime(metrics.largestContentfulPaint)}
          </span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>FID:</span>
          <span style={{ color: getScoreColor(metrics.firstInputDelay, { good: 100, poor: 300 }) }}>
            {formatTime(metrics.firstInputDelay)}
          </span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>CLS:</span>
          <span style={{ color: getScoreColor(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 }) }}>
            {formatScore(metrics.cumulativeLayoutShift)}
          </span>
        </div>
        
        {metrics.memoryUsage && (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Memory:</span>
            <span style={{ color: getScoreColor(metrics.memoryUsage, { good: 50, poor: 100 }) }}>
              {metrics.memoryUsage.toFixed(1)}MB
            </span>
          </div>
        )}
      </div>
      
      <div style={{ 
        marginTop: '0.5rem', 
        paddingTop: '0.5rem', 
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        fontSize: '10px',
        opacity: 0.7
      }}>
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;
=======
        };
      };

    };
,
    // Initial tracking,
    trackPageLoad(),
    trackMemory(),
    trackNetwork(),
,
    // Set up periodic tracking,
    const interval = setInterval(() => {,
      trackMemory(),
      trackNetwork()
    }, 10000),
,
    // Track online/offline status,
    const handleOnline = () => setMetrics(prev => ({ ...prev, isOnline: true })),
    const handleOffline = () => setMetrics(prev => ({ ...prev, isOnline: false })),
,
    window.addEventListener('online', handleOnline),
    window.addEventListener('offline', handleOffline),
,
    return () => {,
      clearInterval(interval),
      window.removeEventListener('online', handleOnline),
      window.removeEventListener('offline', handleOffline)
    };
  }, [location.pathname]),
,
  // Show performance issues,
  useEffect(() => {,
    const hasPerformanceIssues =,
      metrics.pageLoadTime > 3000 || // > 3 seconds,
      metrics.memoryUsage > 100 || // > 100 MB,
      !metrics.isOnline,
,
    if (hasPerformanceIssues) {,
      setIsVisible(true),
      // Auto-hide after 10 seconds,
      const timer = setTimeout(() => setIsVisible(false), 10000),
      return () => clearTimeout(timer)
    };
  }, [metrics]),
,
  if (!isVisible) return null,
,
  return (,
    <div className="fixed bottom-4 right-4 z-50">,
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 shadow-xl">,
        <div className="flex items-center gap-3 mb-3">,
          <BarChart3 className="w-5 h-5 text-blue-400" />,
          <span className="text-sm font-medium text-white">Performance Monitor</span>,
          <button,
            onClick={() => setIsVisible(false)};

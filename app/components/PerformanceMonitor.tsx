

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableConsoleLogging?: boolean;
  updateInterval?: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableConsoleLogging = false,
  updateInterval = 1000,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
  });
  const [performanceScore, setPerformanceScore] = useState(100);

  useEffect(() => {
    // const _reportWebVitals = (_metric: { name: string; value: number }) => {
    //   // Log to console in development (only on client side)
    //   if (typeof window !== 'undefined' && enableConsoleLogging) {
    //     logger.info('Web Vital captured', { name: _metric.name, value: _metric.value });
    //   }
    // };

    // Monitor Core Web Vitals
    const navigation = performance.getEntriesByType('navigation')[0] as
      | PerformanceNavigationTiming
      | undefined;
    const memory = (
      performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number } }
    ).memory;

    const getPerformanceScore = (): number => {
      let _score = 100;
      if (metrics.renderTime > 1500) score -= 15;
      if (metrics.loadTime > 3000) score -= 20;
      if (metrics.memoryUsage > 50) score -= 10;
      return Math.max(0, score);
    };

    const updateMetrics = () => {
      const currentMetrics = {
        loadTime: navigation?.loadEventEnd ?? 0,
        memoryUsage: memory?.usedJSHeapSize ? memory.usedJSHeapSize / 1024 / 1024 : 0,
        renderTime: performance.now(),
        fps: 60, // Placeholder - would need actual FPS calculation
      };

      setMetrics(currentMetrics);

      const _score = getPerformanceScore();
      setPerformanceScore(score);

      if (enableConsoleLogging) {
        if (typeof console !== 'undefined') {
          logger.debug('Performance Metrics', {
            metrics: currentMetrics,
            score,
          });
        }
      }

      if (onMetricsUpdate) {
        onMetricsUpdate(currentMetrics);
      }
    };

    // Initial update
    updateMetrics();

    // Set up interval for continuous monitoring
    const _interval = setInterval(updateMetrics, updateInterval);

    return () => clearInterval(interval);
  }, [
    onMetricsUpdate,
    enableConsoleLogging,
    updateInterval,
    metrics.renderTime,
    metrics.loadTime,
    metrics.memoryUsage,
  ]);

  // Only show when explicitly enabled via props
  if (!enableConsoleLogging) {
    return null;
  }

  return (

      </div>
    </div>
  );
};

export default PerformanceMonitor;

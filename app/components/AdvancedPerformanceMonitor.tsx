interface AdvancedPerformanceMonitorProps {
  className?: string;
}

export default function AdvancedPerformanceMonitor({ className = '' }: AdvancedPerformanceMonitorProps) {
  return (
    <div className={`advanced-performance-monitor ${className}`}>
      <h3>Performance Monitor</h3>
      <p>Advanced performance monitoring component</p>
    </div>
  );
  );
  );
}
  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

    const cleanup = measureWebVitals();
    measureResourceTiming();
    measureCoreWebVitals();

    // Monitor performance every 5 seconds
    const interval = setInterval(() => {
      measureResourceTiming();
    }, 5000);

export default AdvancedPerformanceMonitor;

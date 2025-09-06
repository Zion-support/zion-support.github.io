
export default function PerformanceMonitor() {
  return (
    <div className="performance-monitor">
      <p>Performance Monitor</p>
    </div>
  );
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = process.env.NODE_ENV === 'development',
  logToConsole = true,
  sendToAnalytics = false
}) => {
  const { measurePerformance, logPerformance } = usePerformance();

  useEffect(() => {
    // Only show in development mode
    if (import.meta.env.DEV) {
      setIsVisible(true);
    }
  }, [location.pathname]),;
,;
  // Show performance issues,;
  useEffect(() => {,;
    const hasPerformanceIssues =,;
      metrics.pageLoadTime > 3000 || // > 3 seconds,;
      metrics.memoryUsage > 100 || // > 100 MB,;
      !metrics.isOnline,;
,;
    if (hasPerformanceIssues) {,;
      setIsVisible(true),;
      // Auto-hide after 10 seconds,;
      const timer = setTimeout(() => setIsVisible(false), 10000),;
      return () => clearTimeout(timer);
    }
  }, [metrics]),;
,;
  if (!isVisible) return null,;
,;
  return (,;
    <div className="fixed bottom-4 right-4 z-50">,;
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 shadow-xl">,;
        <div className="flex items-center gap-3 mb-3">,;
          <BarChart3 className="w-5 h-5 text-blue-400" />,;
          <span className="text-sm font-medium text-white">Performance Monitor</span>,;
          <button,;
            onClick={() => setIsVisible(false)},;


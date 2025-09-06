
interface PerformanceMonitorProps {
  onPerformanceData?: (data: any) => void;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {

        }
      });

      observer.observe({ entryTypes: ['navigation'] });

      return () => observer.disconnect();

    }
  }, []);

  if (!metrics) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs">
      <div>Load: {metrics.loadTime.toFixed(2)}ms</div>
      <div>Render: {metrics.renderTime.toFixed(2)}ms</div>
      <div>Memory: {(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</div>
    </div>
  );
};

export default PerformanceMonitor;


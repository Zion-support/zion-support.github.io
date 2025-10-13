import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { Activity, Zap, Cpu, MemoryStick, TrendingUp, AlertTriangle } from 'lucide-react';
interface PerformanceMetrics {loadTime: number;,}
  renderTime: number;,
  memoryUsage: number;,
  fps: number,
  [key: string]: number;,}interface PerformanceProps {onMetricsUpdate?: (metrics: PerformanceMetrics) => void;,}}const PerformanceDashboard: React.FC<PerformanceProps> = ({onMetricsUpdate ,}) => {const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0;,})
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);
  useEffect(() => {const updateMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')
=======


interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
  [key: string]: number;
}


const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMetrics = () => {
      const navigation = performance.getEntriesByType(
        'navigation'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      )[0] as PerformanceNavigationTiming;
      const loadTime = navigation;
        ? navigation.loadEventEnd - navigation.fetchStart;
        : 0;
<<<<<<< HEAD
      // Measure render time;
      const renderStart = performance.now();
      const renderTime = performance.now() - renderStart;
      // Measure memory usage;
=======

      // Measure render time
      const renderStart = performance.now();
      const renderTime = performance.now() - renderStart;

      // Measure memory usage
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      let memoryUsage = 0;
      if ('memory' in performance) {
        const memory = (performance as {memory?: { usedJSHeapSize: number ,}}}).memory;
        memoryUsage = memory?.usedJSHeapSize || 0;
      }

      // Measure FPS (simplified)
<<<<<<< HEAD
      let fps = 60;
      if ('requestAnimationFrame' in window) {let lastTime = performance.now();
        let frameCount = 0;
        const measureFPS = () => {;
          const currentTime = performance.now();
=======
      let fps = 0;
      if ('requestAnimationFrame' in window) {
        let lastTime = performance.now();
        let frameCount = 0;
        const measureFPS = (currentTime: number) => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
          frameCount++;
          if (currentTime - lastTime >= 1000) {
            fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            frameCount = 0;
<<<<<<< HEAD
            lastTime = currentTime;}if (isMonitoring) {requestAnimationFrame(measureFPS)}}
        requestAnimationFrame(measureFPS);
=======
            lastTime = currentTime;
          }
          requestAnimationFrame(measureFPS);
        };
        requestAnimationFrame(measureFPS);
      }

      setMetrics({
        loadTime,
        renderTime,
        memoryUsage,
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        fps,
      });
    };

    updateMetrics();

<<<<<<< HEAD
    // Update metrics every 5 secondsreturn () => clearInterval(interval);
=======
    // Update metrics every 5 seconds
    const interval = setInterval(updateMetrics, 5000);

    return () => clearInterval(interval);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  }, []);

  if (!isVisible) {
    return (
      <button
<<<<<<< HEAD
        onClick={() => setIsVisible(true</div>
=======
        onClick={() => setIsVisible(true)}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
      >
        Show Performance
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-80 max-h-96 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Performance Dashboard</h3>
        <button
<<<<<<< HEAD
          onClick={() => setIsVisible(false</div>
=======
          onClick={() => setIsVisible(false)}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
          className="text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
<<<<<<< HEAD
        fps;}setMetrics(newMetrics);
      onMetricsUpdate?.(newMetrics);
      // Check for performance alerts;
      checkPerformanceAlerts(newMetrics);
    }
    if (isMonitoring) {updateMetrics();
      const interval = setInterval(updateMetrics, 1000);
      return () => clearInterval(interval)}}, [isMonitoring, onMetricsUpdate]);
  const checkPerformanceAlerts = (currentMetrics: PerformanceMetrics) => {,
  const toggleMonitoring = () => {setIsMonitoring(!isMonitoring)}const formatBytes = (bytes: number) => {,
    if (bytes === 0) return '0 Bytes'
    if (bytes === 0) return '0 Bytes';
    const k = 1024,
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];];];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]}const getPerformanceColor = (value: number, thresholds: {good: number, warning: number ,}) => {if (value <= thresholds.good) return 'text-green-400';
              <li key={index}className="text-red-300 text-sm">• {alert}</li>
      <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-4">,</div>
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-gray-300 text-sm">Load Time</span>
          </div>
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.loadTime, { good: 1000, warning: 2000 ,)})}`}>{metrics.loadTime.toFixed(0)</div>}ms;
  </
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.renderTime, { good: 16, warning: 33 ,)})}`}>{metrics.renderTime.toFixed(2)</div>}ms;
  </
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.memoryUsage, { good: 10 * 1024 * 1024, warning: 30 * 1024 * 1024 ,)})}`}>{formatBytes(metrics.memoryUsage)</div>} </div>
          <div className={`text-2xl font-bold ${getPerformanceColor(60 - metrics.fps, { good: 10, warning: 20 ,)})}`}>{metrics.fps</div>} </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-400 text-sm">{isMonitoring ? 'Monitoring performance metrics...' : 'Click "Start Monitoring" to begin tracking performance'</p>} </p>
=======
      </div>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Load Time:</span>
          <span className="text-sm font-mono">
            {metrics.loadTime.toFixed(2)}ms
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Render Time:</span>
          <span className="text-sm font-mono">
            {metrics.renderTime.toFixed(2)}ms
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Memory Usage:</span>
          <span className="text-sm font-mono">
            {(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm text-gray-600">FPS:</span>
          <span className="text-sm font-mono">{metrics.fps}</span>
        </div>

        <div className="pt-2 border-t border-gray-200">
          <div className="text-xs text-gray-500">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      </div>
    </div>
  );
};

export default PerformanceDashboard;
